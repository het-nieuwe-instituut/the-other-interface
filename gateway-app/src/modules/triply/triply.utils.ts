import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

export class TriplyUtils {
  public static getExternalEntityNameFromUri(uri: string) {
    const type = TriplyUtils.findExternalEntityNameFromUri(uri)

    if (!type) {
      throw CustomError.externalCritical(`external type for uri ${uri} not implemented`)
    }

    return type
  }

  public static findExternalEntityNameFromUri(uri: string) {
    if (uri.includes('rkd.nl')) {
      return EntityNames.Rkd
    }

    if (uri.includes('wikidata.org')) {
      return EntityNames.Wikidata
    }

    if (uri.includes('getty.edu')) {
      return EntityNames.Getty
    }
  }

  public static getEntityNameFromGraph(
    graph: string,
    possibleExternalUri?: string | null
  ): EntityNames {
    const s = graph.split('/')
    if (!s.length) {
      throw CustomError.external('invalid graph url')
    }

    const type = s.pop()
    switch (type) {
      case 'people':
        return EntityNames.People
      case 'archives':
        return EntityNames.Archives
      case 'books':
        return EntityNames.Publications
      case 'objects':
        return EntityNames.Objects
      case 'media':
        return EntityNames.Media
      case 'seeAlso':
        if (possibleExternalUri) {
          return TriplyUtils.getExternalEntityNameFromUri(possibleExternalUri)
        }

        return EntityNames.External
      default:
        throw CustomError.externalCritical(`type for graph ${type} not implemented`)
    }
  }

  public static getEntityNameFromUri(uri: string): EntityNames {
    const externalType = this.findExternalEntityNameFromUri(uri)
    if (externalType) {
      return externalType
    }

    const s = uri.split('/')
    if (!s.length || s.length < 2) {
      throw CustomError.external('invalid graph url')
    }

    const type = s[s.length - 2]
    switch (type) {
      case 'people':
        return EntityNames.People
      case 'archives':
        return EntityNames.Archives
      case 'books':
        return EntityNames.Publications
      case 'objects':
        return EntityNames.Objects
      case 'media':
        return EntityNames.Media
      case 'seeAlso':
        return EntityNames.External
      default:
        throw CustomError.externalCritical(`type for uri ${uri} not implemented`)
    }
  }

  public static getIdFromUri(uri: string) {
    const s = uri.split('/')
    if (!s.length) {
      throw CustomError.external('invalid uri')
    }

    const id = s.pop()
    if (!id) {
      throw CustomError.external('invalid uri')
    }

    return id
  }

  public static getUriForTypeAndId(type: EntityNames, id: string, recordType: EntityNames) {
    switch (type) {
      case EntityNames.People:
        return `people-recordRelations/run?id=${id}&type=${recordType}`
      case EntityNames.Archives:
        return `archives-recordRelations/run?id=${id}&type=${recordType}`
      case EntityNames.Publications:
        return `publications-recordRelations/run?id=${id}&type=${recordType}`
      case EntityNames.Objects:
        return `objects-recordRelations/run?id=${id}&type=${recordType}`
      case EntityNames.Media:
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.Stories:
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  private static getUriForLevel2TextSearchDataAmount({
    type,
    isDataAmount,
  }: {
    type: EntityNames
    isDataAmount: boolean
  }) {
    const dataAmountUri = isDataAmount ? '-Count' : ''

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
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.Stories:
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  public static getUriForLevel2Data({
    type,
    text,
    isDataAmount,
  }: {
    type: EntityNames
    text?: string
    isDataAmount: boolean
  }) {
    if (text) {
      return this.getUriForLevel2TextSearchDataAmount({ type, isDataAmount })
    }

    const dataAmountUri = isDataAmount ? '-count' : ''

    switch (type) {
      case EntityNames.People:
        return `people-landingPage${dataAmountUri}/run`
      case EntityNames.Archives:
        return `archives-landingPage${dataAmountUri}/run`
      case EntityNames.Publications:
        return `publications-landingPage${dataAmountUri}/run`
      case EntityNames.Objects:
        return `objects-landingPage${dataAmountUri}/run`
      case EntityNames.Media:
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.Stories:
        throw CustomError.externalCritical('not a triply type')
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  public static combineObjectArray<T extends object>(results: T[]): T | null {
    const output: Partial<Record<keyof T, string>> = {}

    let nullFlag = true
    for (const result of results) {
      for (const filledPair of Object.entries(result).filter(e => !!e[1])) {
        nullFlag = false
        const [key, value] = filledPair
        output[key as keyof T] = value
      }
    }

    return nullFlag ? null : (output as T)
  }

  public static sanitizeObjectArray<T extends object>(results: T[]): T[] | null {
    const output = results.filter(result => {
      let flag = false
      for (const r in result) {
        if (result[r] !== null) {
          flag = true
          break
        }
      }
      return flag
    })
    return output
  }

  public static getQueryParamsFromObject<T extends object>(obj: T): Record<keyof T, string> {
    const queryParams: Partial<Record<keyof T, string>> = {}

    for (const [filterName, filterValue] of Object.entries(obj)) {
      queryParams[filterName as keyof T] = filterValue
    }

    return queryParams as Record<keyof T, string>
  }
}
