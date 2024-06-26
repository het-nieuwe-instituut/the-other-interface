import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { CustomError } from '../util/customError'
import { EntityNames } from '../util/entityNames.type'

export class StrapiUtils {
  public static getRecordTypeForEntityName(name: EntityNames) {
    switch (name) {
      case EntityNames.People:
        return Enum_Triplyrecord_Type.People
      case EntityNames.Archives:
        return Enum_Triplyrecord_Type.Archive
      case EntityNames.Publications:
        return Enum_Triplyrecord_Type.Publication
      case EntityNames.Objects:
        return Enum_Triplyrecord_Type.Object
      case EntityNames.Media:
        return Enum_Triplyrecord_Type.Media
      case EntityNames.Stories:
        return EntityNames.Stories
      case EntityNames.External:
      default:
        throw CustomError.internalCritical(`type for entity ${name} not implemented`)
    }
  }

  public static getEntityNameForRecordType(type: Enum_Triplyrecord_Type | string) {
    switch (type) {
      case Enum_Triplyrecord_Type.People:
        return EntityNames.People
      case Enum_Triplyrecord_Type.Archive:
        return EntityNames.Archives
      case Enum_Triplyrecord_Type.Publication:
        return EntityNames.Publications
      case Enum_Triplyrecord_Type.Object:
        return EntityNames.Objects
      case Enum_Triplyrecord_Type.Media:
        return EntityNames.Media
      default:
        throw CustomError.internalCritical(`type for entity ${name} not implemented`)
    }
  }

  public static getImagePath(url?: string | null): string | undefined {
    if (!process.env['STRAPI_URL']) {
      throw CustomError.internalCritical('STRAPI_URL not set')
    }

    if (!url) {
      return
    }

    try {
      return new URL(url, process.env['STRAPI_URL']).toString()
    } catch (e) {
      console.log(e)
    }
  }
}
