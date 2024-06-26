import { Injectable } from '@nestjs/common'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../util/entityNames.type'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { getUniqueById } from '../util/helpers'
import { Locale } from '../util/locale.type'
import { Enum_Triplyrecord_Type } from 'src/generated/strapi-sdk'
import { FilterSuggestionType, SelectedFilterSuggestion } from './zoomLevel2.type'

interface ResultData {
  thumbnail: string
  title: string
  id: string
  categoryType: string
}

const resultDataKeys: KeysToVerify<ResultData> = {
  thumbnail: true,
  title: true,
  id: true,
  categoryType: true,
}

@Injectable()
export class ZoomLevel2Service {
  private readonly filterSuggestionsPeopleEndpoint = 'filterpeople/run?'
  private readonly filterSuggestionsArchivesEndpoint = 'filterarchives/run?'
  private readonly filterSuggestionsObjectsEndpoint = 'filterobjects/run?'
  private readonly filterSuggestionsPublicationsEndpoint = 'filterpublications/run?'

  public constructor(private readonly triplyService: TriplyService) {}

  public getData(
    locale: Locale,
    entity: EntityNames,
    paginationArgs: PaginationArgs,
    text?: string | null,
    selectedFilterSuggestions?: SelectedFilterSuggestion[] | null
  ) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2Data(
          locale,
          entity,
          paginationArgs,
          text,
          selectedFilterSuggestions
        )

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public getDataAmount(
    entity: EntityNames,
    text?: string | null,
    selectedFilterSuggestions?: SelectedFilterSuggestion[] | null
  ) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2DataAmount(entity, text, selectedFilterSuggestions)

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public async getFilterSuggestions(
    type: Enum_Triplyrecord_Type,
    text: string,
    language: Locale
  ): Promise<FilterSuggestionType[]> {
    const endpoint = this.getFilterSuggestionsEndpoint(type)
    const KeysToVerify = {} // we don't expect static keys in the response, so we don't need to verify them
    const paginationArgs: PaginationArgs = { page: 1, pageSize: 5 } // we always only need the first 5 results
    const searchParams = { text, language }

    const results = await this.triplyService.queryTriplyData<Record<string, string>>(
      endpoint,
      KeysToVerify,
      paginationArgs,
      searchParams
    )

    return results.data.map(r => {
      const validKeyValuePair = Object.entries(r).find(([key, value]) => key && value)
      if (!validKeyValuePair) {
        throw CustomError.external('Invalid key value pair in filter suggestions')
      }

      return {
        key: validKeyValuePair[0],
        value: validKeyValuePair[1],
      }
    })
  }

  private async getZoomLevel2Data(
    locale: Locale,
    type: EntityNames,
    paginationArgs: PaginationArgs,
    text?: string | null,
    selectedFilterSuggestions?: SelectedFilterSuggestion[] | null
  ) {
    const uri = this.getUriForLevel2TextSearch(type, { forCount: false })
    const searchParams = this.getZoomLevel2SearchParams(selectedFilterSuggestions, text)

    const result = await this.triplyService.queryTriplyData<ResultData>(
      uri,
      resultDataKeys,
      paginationArgs,
      { ...searchParams, language: locale }
    )

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page: paginationArgs.page ?? 1,
      nodes: uniqueNodes,
    }
  }

  private async getZoomLevel2DataAmount(
    type: EntityNames,
    text?: string | null,
    selectedFilterSuggestions?: SelectedFilterSuggestion[] | null
  ) {
    const uri = this.getUriForLevel2TextSearch(type, { forCount: true })
    const searchParams = this.getZoomLevel2SearchParams(selectedFilterSuggestions, text)

    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      uri,
      { total: true },
      undefined,
      searchParams
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      total,
    }
  }

  private getUriForLevel2TextSearch(type: EntityNames, { forCount }: { forCount: boolean }) {
    const dataAmountUri = forCount ? '-Count' : ''

    switch (type) {
      case EntityNames.People:
        return `people-textSearch${dataAmountUri}/run`
      case EntityNames.Archives:
        return `archives-textSearch${dataAmountUri}/run`
      case EntityNames.Publications:
        return `publications-textSearch${dataAmountUri}/run`
      case EntityNames.Objects:
        return `objects-textSearch${dataAmountUri}/run`
      case EntityNames.Media:
      case EntityNames.Stories:
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  private getFilterSuggestionsEndpoint(type: Enum_Triplyrecord_Type) {
    switch (type) {
      case Enum_Triplyrecord_Type.People:
        return this.filterSuggestionsPeopleEndpoint
      case Enum_Triplyrecord_Type.Archive:
        return this.filterSuggestionsArchivesEndpoint
      case Enum_Triplyrecord_Type.Object:
        return this.filterSuggestionsObjectsEndpoint
      case Enum_Triplyrecord_Type.Publication:
        return this.filterSuggestionsPublicationsEndpoint
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  private getZoomLevel2SearchParams(
    filterSuggestions?: FilterSuggestionType[] | null,
    text?: string | null
  ) {
    const filterParams = (filterSuggestions || []).reduce<Record<string, string>>(
      (acc, { key, value }) => {
        acc[key] = value
        return acc
      },
      {}
    )

    if (text) {
      return { ...filterParams, text }
    }

    return filterParams
  }
}
