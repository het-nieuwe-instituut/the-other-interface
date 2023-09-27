import {
  ArgsType,
  Field,
  IntersectionType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
// import { PoepleZoomLevel3DetailType } from '../people/people.type'
// import { ArchivesOtherZoomLevel3DetailType } from '../archives/archives.type'
// import { PublicationsBookZoomLevel3DetailType } from '../publications/publications.type'
// import { ObjectsZoomLevel3DetailType } from '../objects/objects.type'
import { TriplyExternalSourceEnum } from './zoomLevel3.service'

@ObjectType()
export class ZoomLevel3RelationsType {
  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field({ nullable: true })
  public total: number

  @Field(() => [String], { nullable: true })
  public randomRelations?: string[]
}

@ObjectType()
export class RelatedRecordType {
  @Field({ nullable: true })
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field({ nullable: true })
  public title: string

  @Field({ nullable: true })
  public thumbnail: string
}

@ObjectType()
export class BaseZoomLevel3RelatedRecordType {
  @Field()
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames
}

// @ObjectType()
// export class ZoomLevel3RelatedPeopleType extends IntersectionType(
//   BaseZoomLevel3RelatedRecordType,
//   PickType(PoepleZoomLevel3DetailType, ['name', 'birthDate', 'profession'] as const)
// ) {
//   @Field(() => EntityNames)
//   public type: EntityNames
// }

// // TODO: pick fields after designs are made
// @ObjectType()
// export class ZoomLevel3RelatedArchiveType extends IntersectionType(
//   BaseZoomLevel3RelatedRecordType,
//   PickType(ArchivesOtherZoomLevel3DetailType, [] as const)
// ) {
//   @Field(() => EntityNames)
//   public type: EntityNames
// }

// TODO: pick fields after designs are made
// @ObjectType()
// export class ZoomLevel3RelatedObjectType extends IntersectionType(
//   BaseZoomLevel3RelatedRecordType,
//   PickType(ObjectsZoomLevel3DetailType, [] as const)
// ) {
//   @Field(() => EntityNames)
//   public type: EntityNames
// }

// TODO: pick fields after designs are made
// @ObjectType()
// export class ZoomLevel3RelatedPublicationType extends IntersectionType(
//   BaseZoomLevel3RelatedRecordType,
//   PickType(PublicationsBookZoomLevel3DetailType, [] as const)
// ) {
//   @Field(() => EntityNames)
//   public type: EntityNames
// }

// @ObjectType()
// export class ZoomLevel3RelatedRecordType {
//   @Field(() => String)
//   public id: string

//   @Field(() => EntityNames)
//   public type: EntityNames

//   @Field(() => String, { nullable: true })
//   public name?: string

//   @Field(() => String, { nullable: true })
//   public pidWorkURI?: string

//   @Field(() => String, { nullable: true })
//   public profession?: string

//   @Field(() => String, { nullable: true })
//   public professionLabel?: string

//   @Field(() => String, { nullable: true })
//   public birthDate?: string

//   @Field(() => String, { nullable: true })
//   public availability?: string

//   @Field(() => String, { nullable: true })
//   public date?: string

//   @Field(() => String, { nullable: true })
//   public creator?: string

//   @Field(() => String, { nullable: true })
//   public creatorLabel?: string
// }

@ArgsType()
export class ZoomLevel3Args {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field()
  @IsOptional()
  public lang?: string
}

// @ArgsType()
// export class ZoomLevel3RelatedObjectsArgs {
//   @Field(() => EntityNames)
//   public relatedObjectsType: EntityNames

//   @Field(() => EntityNames)
//   public type: EntityNames

//   @Field()
//   @IsString()
//   public id: string
// }

registerEnumType(TriplyExternalSourceEnum, { name: 'TriplyExternalSourceEnum' })
