import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
import { IsString } from 'class-validator'
import { Locale } from '../util/locale.type'

@ObjectType()
export class ObjectsZoomLevel3DetailType {
  @Field()
  public id: string
  @Field(() => String, { nullable: true })
  public title: string
  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames
  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public imageLabel?: string | null

  @Field(() => String, { nullable: true })
  public titleType?: string | null

  @Field(() => String, { nullable: true })
  public objectNumber?: string | null

  @Field(() => String, { nullable: true })
  public objectName?: string | null

  @Field(() => String, { nullable: true })
  public objectNameLabel?: string | null

  @Field(() => String, { nullable: true })
  public archiveCollectionCode?: string | null

  @Field(() => [ObjectMakerType], { nullable: true })
  public makers?: ObjectMakerType[]

  @Field(() => String, { nullable: true })
  public startDate?: string | null

  @Field(() => String, { nullable: true })
  public endDate?: string | null

  @Field(() => String, { nullable: true })
  public numberOfParts?: string | null

  @Field(() => String, { nullable: true })
  public scale?: string | null

  @Field(() => [ObjectTechniqueType], { nullable: true })
  public techniques?: ObjectTechniqueType[]

  @Field(() => [ObjectMaterialType], { nullable: true })
  public materials?: ObjectMaterialType[]

  @Field(() => String, { nullable: true })
  public dimHeight?: string | null

  @Field(() => String, { nullable: true })
  public dimWidth?: string | null

  @Field(() => String, { nullable: true })
  public dimDepth?: string | null

  @Field(() => String, { nullable: true })
  public dimensionUnit?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null

  @Field(() => String, { nullable: true })
  public associationPerson?: string | null

  @Field(() => String, { nullable: true })
  public associationPersonLabel?: string | null

  @Field(() => String, { nullable: true })
  public associationPersonType?: string | null

  @Field(() => String, { nullable: true })
  public relatedObjectTitle?: string | null

  @Field(() => String, { nullable: true })
  public creditLine?: string | null

  @Field(() => String, { nullable: true })
  public rights?: string | null

  @Field(() => String, { nullable: true })
  public rightsLabel?: string | null

  @Field(() => String, { nullable: true })
  public creationPlace?: string | null

  @Field(() => String, { nullable: true })
  public creationPlaceLabel?: string | null

  @Field(() => String, { nullable: true })
  public permanentLink?: string | null
}

@ObjectType()
export class ObjectRelationsType {
  @Field(() => String, { nullable: true })
  public id?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public referenceNumber?: string | null

  @Field(() => String, { nullable: true })
  public period?: string | null

  @Field(() => String, { nullable: true })
  public externalSource?: string | null
}

@ObjectType()
export class ObjectRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

@ObjectType()
export class ObjectRecordZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public titleType?: string

  @Field(() => String, { nullable: true })
  public objectName?: string

  @Field(() => String, { nullable: true })
  public archiveCode?: string

  @Field(() => String, { nullable: true })
  public date?: string

  @Field(() => String, { nullable: true })
  public relatedKeywords?: string

  @Field(() => String, { nullable: true })
  public materials?: string

  @Field(() => String, { nullable: true })
  public techniques?: string

  @Field(() => String, { nullable: true })
  public hasParts?: string

  @Field(() => String, { nullable: true })
  public dimension?: string

  @Field(() => String, { nullable: true })
  public scale?: string

  @Field(() => String, { nullable: true })
  public creditLine?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalSource?: string
}

@ObjectType()
export class ObjectMakerType {
  @Field(() => String)
  public id: string

  @Field(() => String, { nullable: true })
  public maker: string | null

  @Field(() => String, { nullable: true })
  public makerLabel?: string | null

  @Field(() => String, { nullable: true })
  public makerRole?: string | null

  @Field(() => String, { nullable: true })
  public makerRoleLabel?: string | null

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedMaker?: PeopleZoomLevel3DetailType
}

@ObjectType()
export class ObjectMaterialType {
  @Field(() => String)
  public id: string

  @Field(() => String)
  public material: string

  @Field(() => String, { nullable: true })
  public materialLabel?: string | null
}

@ObjectType()
export class ObjectTechniqueType {
  @Field(() => String)
  public id: string

  @Field(() => String)
  public technique: string

  @Field(() => String, { nullable: true })
  public techniqueLabel?: string | null
}

@ArgsType()
export class ObjectRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class ObjectsZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class ObjectRecordRelationCountArgs extends OmitType(ObjectRecordRelationArgs, [
  'locale',
] as const) {}

@ObjectType()
export class ObjectsZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public maker?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
