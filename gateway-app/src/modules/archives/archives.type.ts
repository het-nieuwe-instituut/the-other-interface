import { Field, ObjectType, createUnionType, registerEnumType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ArchivesZoomLevel3Types } from './archives.service'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
// import { PeopleZoomLevel3DetailType } from '../people/people.type'
// import { ArchivesZoomLevel3Types } from './archives.service'
// import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

// registerEnumType(ArchivesZoomLevel3Types, { name: 'ArchivesZoomLevel3Types' })

@ObjectType()
export class ArchiveZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public description?: string | null
}

registerEnumType(ArchivesZoomLevel3Types, { name: 'ArchivesZoomLevel3Types' })

@ObjectType()
class BaseArchiveZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ArchivesZoomLevel3Types)
  public type: ArchivesZoomLevel3Types

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public thumbnail: string
}

@ObjectType()
export class ArchivesFondsZoomLevel3DetailType extends BaseArchiveZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public descriptionLevel?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public recordTitle?: string

  @Field(() => String, { nullable: true })
  public startDate?: string

  @Field(() => String, { nullable: true })
  public endDate?: string

  @Field(() => String, { nullable: true })
  public productionDate?: string

  @Field(() => String, { nullable: true })
  public extent?: string

  @Field(() => String, { nullable: true })
  public repository?: string

  @Field(() => String, { nullable: true })
  public repositoryLabel?: string

  @Field(() => [ArchivesFondsCreatorType], { nullable: true })
  public creators?: ArchivesFondsCreatorType[]

  @Field(() => String, { nullable: true })
  public custodialHistory?: string

  @Field(() => String, { nullable: true })
  public systemOfArrangement?: string

  @Field(() => String, { nullable: true })
  public contentScope?: string

  @Field(() => String, { nullable: true })
  public conditionsGoverningAccess?: string

  @Field(() => String, { nullable: true })
  public relatedMaterial?: string

  @Field(() => String, { nullable: true })
  public appendices?: string

  @Field(() => String, { nullable: true })
  public source?: string

  @Field(() => String, { nullable: true })
  public partReference?: string

  @Field(() => String, { nullable: true })
  public partTitle?: string

  @Field(() => String, { nullable: true })
  public right?: string

  @Field(() => String, { nullable: true })
  public rightsLabel?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string
}

@ObjectType()
export class ArchivesFondsCreatorType {
  @Field(() => String)
  public id: string

  @Field(() => String)
  public creator: string

  @Field(() => String, { nullable: true })
  public creatorLabel?: string

  @Field(() => String, { nullable: true })
  public creatorHistory?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedCreator?: PeopleZoomLevel3DetailType
}

@ObjectType()
export class ArchivesOtherZoomLevel3DetailType extends BaseArchiveZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public startDate?: string

  @Field(() => String, { nullable: true })
  public endDate?: string

  @Field(() => String, { nullable: true })
  public dateLabel?: string

  @Field(() => String, { nullable: true })
  public dimensionFree?: string

  @Field(() => String, { nullable: true })
  public mediaReference?: string

  @Field(() => String, { nullable: true })
  public mediaReferenceLabel?: string

  @Field(() => String, { nullable: true })
  public existenceOfOriginals?: string

  @Field(() => String, { nullable: true })
  public scopeContent?: string

  @Field(() => String, { nullable: true })
  public relatedMaterial?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field(() => String, { nullable: true })
  public rightsLabel?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => [String], { nullable: true })
  public pidWorkURIs?: string[]
}

export const ArchiveZoomLevel3UnionType = createUnionType({
  name: 'ArchiveZoomLevel5UnionType',
  types: () => [ArchivesOtherZoomLevel3DetailType, ArchivesFondsZoomLevel3DetailType] as const,
  resolveType: (archive: BaseArchiveZoomLevel3Type) => {
    if (archive.type === ArchivesZoomLevel3Types.other) {
      return ArchivesOtherZoomLevel3DetailType
    }

    return ArchivesFondsZoomLevel3DetailType
  },
})
