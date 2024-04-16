// prettier-ignore
import {  Enum_Componentmodulesgridmodule_Fieldtypes, Enum_Triplyrecord_Type } from '../../generated/strapi-sdk';
import { CustomError } from '../util/customError'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

// prettier-ignore
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
        return Enum_Componentmodulesgridmodule_Fieldtypes.Stories
      case EntityNames.External:
      default:
        throw CustomError.internalCritical(`type for entity ${name} not implemented`)
    }
  }

  public static getEntityNameForRecordType(type: Enum_Triplyrecord_Type) {
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
}
