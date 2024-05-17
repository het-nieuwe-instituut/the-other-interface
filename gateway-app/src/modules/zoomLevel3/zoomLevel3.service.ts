import { forwardRef, Inject, Injectable } from '@nestjs/common'
import {
  Enum_Triplyrecord_Type,
  PublicationState,
  Sdk,
  StoriesQuery,
  StoryFiltersInput,
  StoryTriplyRelationsQuery,
} from 'src/generated/strapi-sdk'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../util/entityNames.type'
import { CustomError } from '../util/customError'
import { StoryService } from '../story/story.service'
import { PaginationArgs } from '../util/paginationArgs.type'
import { ZoomLevel3RelationsType } from './zoomLevel3.type'

interface ZoomLevel3RelationData {
  idRelation: string
}
const zoomLevel3RelationDataKeys: KeysToVerify<ZoomLevel3RelationData> = {
  idRelation: true,
}

// key is relation graph
type GroupedRelationData = Partial<Record<EntityNames, RelationData>>

interface RelationData {
  count: string
  // key is sample uri
  groupedSampleData: Record<string, SampleData>
}

interface SampleData {
  label: string
  // key is relation graph
  groupedRelationData: GroupedRelationData
}

export enum TriplyExternalSourceEnum {
  all = 'all',
  rkd = 'rkd',
  wikidata = 'wikidata',
  getty = 'getty',
}

@Injectable()
export class ZoomLevel3Service {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly objectsService: ObjectsService,
    private readonly peopleService: PeopleService,
    @Inject(forwardRef(() => PublicationsService))
    private readonly publicationsService: PublicationsService,
    private readonly archivesService: ArchivesService,
    private readonly triplyService: TriplyService,
    private readonly storyService: StoryService
  ) {}

  public async getRelations(
    id: string,
    type: EntityNames,
    lang?: string,
    paginationArgs?: PaginationArgs
  ) {
    switch (type) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return [
          ...(await this.getTriplyRelatedRecords(id, type, paginationArgs?.page)),
          await this.getStoryRelationsForLinkedItem(id, type, paginationArgs?.page),
        ]
      case EntityNames.Stories:
        return this.getStoryRelations(id, lang, paginationArgs?.page)
      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  public async getDetail(id: string, type: EntityNames) {
    switch (type) {
      case EntityNames.Objects: {
        return this.objectsService.getZoomLevel3Data(id)
      }
      case EntityNames.People: {
        return this.peopleService.getZoomLevel3Data(id)
      }
      case EntityNames.Publications: {
        return this.publicationsService.getZoomLevel3Data(id)
      }
      case EntityNames.Archives: {
        return this.archivesService.getZoomLevel3Data(id)
      }

      default:
        throw CustomError.internalCritical('type not implemented')
    }
  }

  public async storyRelationsCount(storyId: string, locale = 'nl') {
    // counts for triply records related to story
    const [resTriplyArchives, resTriplyPublications, resTriplyPeople, resTriplyObjects] =
      await Promise.all(
        [
          Enum_Triplyrecord_Type.Archive,
          Enum_Triplyrecord_Type.Publication,
          Enum_Triplyrecord_Type.People,
          Enum_Triplyrecord_Type.Object,
        ].map(type =>
          this.strapiGqlSdk.triplyRecords({
            filters: {
              and: [{ stories: { id: { eq: storyId } } }, { type: { eq: type } }],
            },
          })
        )
      )

    const themeIds = await this.getStoryThemeIds(storyId, locale)

    const stories = await this.strapiGqlSdk.storiesIds({
      filters: { themes: { id: { in: themeIds } } },
      locale,
      publicationState: PublicationState.Live,
      pagination: { page: 1, pageSize: 500 },
    })

    return {
      linkedStoryCount: stories.stories?.data.length || 0,
      linkedTriplyRecords: {
        archives: resTriplyArchives.triplyRecords?.meta.pagination.total,
        people: resTriplyPeople.triplyRecords?.meta.pagination.total,
        publications: resTriplyPublications.triplyRecords?.meta.pagination.total,
        objects: resTriplyObjects.triplyRecords?.meta.pagination.total,
      },
    }
  }

  private async getStoryRelations(
    id: string,
    locale = 'nl',
    page?: number
  ): Promise<ZoomLevel3RelationsType[]> {
    const res = await this.strapiGqlSdk.storyByLocale({ id })

    const story =
      res?.story?.data?.attributes?.locale === locale
        ? res?.story?.data
        : res?.story?.data?.attributes?.localizations?.data?.find(
            l => l.attributes?.locale === locale
          )

    if (!story?.id) {
      throw CustomError.internalCritical('Story not found')
    }

    const storyId = story.id
    const parentId = story.attributes?.parent_story?.data?.id
    const childrensIds =
      (story.attributes?.child_stories?.data?.map(s => s.id).filter(Boolean) as string[]) || []

    const storyRelation = await this.getPaginatedStoryRelationsForStory(
      storyId,
      childrensIds,
      locale,
      parentId,
      page
    )

    const triplyRelations = await this.getTriplyRelationsForStory(storyId, page)

    // related records (archives, objects, people, publications) from triply (based on story theme)
    // combine it all to return
    return [...triplyRelations, storyRelation]
  }

  private async getStoryRelationsForLinkedItem(id: string, entityName: EntityNames, page?: number) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecord({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(entityName),
      pagination: { page: page || 1, pageSize: 2 },
    })

    const randomStories = (res.stories?.data || [])
      .filter(s => !!s?.id && !!s.attributes)
      .map(s => s?.id || '')

    return {
      type: EntityNames.Stories,
      total: res.stories?.data.length || 0,
      paginatedRelations: randomStories ?? [],
    }
  }

  private async getTriplyRelatedRecords(id: string, recordType: EntityNames, page?: number) {
    const data = await Promise.all(
      [EntityNames.Archives, EntityNames.Objects, EntityNames.People, EntityNames.Publications].map(
        async entityName => {
          try {
            const data = await this.getRelationDataFromTriply({
              id,
              type: entityName,
              recordType,
              page,
            })

            return {
              id,
              type: entityName,
              paginatedRelations: data.map(d => d?.idRelation).filter(d => !!d),
            }
          } catch (error) {
            console.error(`Error fetching data for entity ${entityName}:`, error)
            return {
              id,
              type: entityName,
              paginatedRelations: [],
            }
          }
        }
      )
    )

    return data
  }

  private async getRelationDataFromTriply({
    id,
    type,
    recordType,
    page = 1,
  }: {
    id: string
    type: EntityNames
    recordType: EntityNames
    page?: number
  }) {
    const uri = TriplyUtils.getUriForTypeAndId(type, id, recordType)

    const res = await this.triplyService.queryTriplyData<ZoomLevel3RelationData>(
      `${uri}`,
      zoomLevel3RelationDataKeys,
      { page, pageSize: 2 },
      { id }
    )

    return res.data
  }

  private async getStoryThemeIds(storyId: string, locale: string): Promise<string[]> {
    const themes = await this.strapiGqlSdk.themes({
      filters: { stories: { id: { eq: storyId } } },
      locale,
    })

    if (!themes.themes?.data) return []

    return themes.themes?.data.reduce<string[]>((acc, curr) => {
      if (curr.id) acc.push(curr.id)
      return acc
    }, [])
  }

  private async getPaginatedStoryRelationsForStory(
    storyId: string,
    childrenIds: string[],
    locale: string,
    parentId?: string | null,
    page?: number
  ): Promise<ZoomLevel3RelationsType> {
    const themeIds = await this.getStoryThemeIds(storyId, locale)

    const storyFilters: StoryFiltersInput = { or: [{ themes: { id: { in: themeIds } } }] }
    if (childrenIds.length) {
      storyFilters.or?.push({ id: { in: childrenIds } })
    }

    if (parentId) {
      storyFilters.or?.push({ id: { eq: parentId } })
    }

    const paginatedRelatedStories = await this.strapiGqlSdk.stories({
      filters: storyFilters,
      locale,
      publicationState: PublicationState.Live,
      pagination: { page, pageSize: 2 },
    })

    const relationIds = paginatedRelatedStories.stories?.data.reduce<string[]>((acc, curr) => {
      if (curr.id) {
        acc.push(curr.id)
      }

      return acc
    }, [])

    return {
      type: EntityNames.Stories,
      paginatedRelations: relationIds,
      total: paginatedRelatedStories.stories?.meta.pagination.total || 0,
    }
  }

  private async getTriplyRelationsForStory(
    storyId: string,
    page?: number
  ): Promise<ZoomLevel3RelationsType[]> {
    const relatedTriplyTypesToQuery = Object.values(Enum_Triplyrecord_Type).filter(
      t => t !== Enum_Triplyrecord_Type.Media
    )

    const paginatedTriplyRecordRelations = await Promise.all(
      relatedTriplyTypesToQuery.map(type =>
        this.strapiGqlSdk.storyTriplyRelations({
          id: storyId,
          page,
          pageSize: 2,
          type,
        })
      )
    )

    return this.groupData(paginatedTriplyRecordRelations)
  }

  private async getStorySiblingIds(id: string, locale: string, parentId?: string | null) {
    if (!parentId) return []

    const siblingsRes = await this.storyService.getStorySiblings(parentId, id, locale)

    return siblingsRes?.filter(s => !!s?.id).map(s => s.id as string) || []
  }

  private groupData(recordRelations: StoryTriplyRelationsQuery[]): ZoomLevel3RelationsType[] {
    const data: ZoomLevel3RelationsType[] = []

    for (const recordRelation of recordRelations) {
      const triplyRecords =
        recordRelation.story?.data?.attributes?.triplyRecords?.data.filter(Boolean)

      if (!triplyRecords?.length || !triplyRecords[0].attributes?.type) continue

      const type = StrapiUtils.getEntityNameForRecordType(triplyRecords[0].attributes.type)

      const paginatedRelations = triplyRecords
        .map(r => r.attributes?.recordId)
        .filter(Boolean) as string[]

      data.push({ type, paginatedRelations })
    }

    return data
  }

  private extractStoryIds(response: StoriesQuery, excludeId?: string): string[] {
    if (!response.stories?.data) return []

    const filteredIds = response.stories.data
      .map(s => s.id)
      .filter(id => id && id !== excludeId) as string[]

    return Array.from(new Set(filteredIds))
  }

  public async getStoriesRelationsForRecord(id: string, type: EntityNames, lang: string) {
    const res = await this.strapiGqlSdk.storiesLinkedToTriplyRecordExtended({
      recordId: id,
      type: StrapiUtils.getRecordTypeForEntityName(type),
      lang,
    })

    const stories = res.stories?.data?.filter(s => !!s?.id && !!s.attributes) || []

    return {
      type: EntityNames.Stories,
      total: res.stories?.data.length || 0,
      stories,
    }
  }
}
