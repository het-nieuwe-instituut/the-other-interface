import { Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
// import { PeopleZoomLevel3DetailType } from '../people/people.type'
// import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

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
  public description?: string | null
}

@ObjectType()
export class ObjectRecordZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public objectNumber?: string | null

  @Field(() => String, { nullable: true })
  public titleType?: string | null

  @Field(() => String, { nullable: true })
  public objectName?: string | null

  @Field(() => String, { nullable: true })
  public archiveCode?: string | null

  @Field(() => String, { nullable: true })
  public date?: string | null

  @Field(() => [ObjectMaterialType], { nullable: true })
  public materials?: ObjectMaterialType[]

  @Field(() => [ObjectTechniqueType], { nullable: true })
  public techniques?: ObjectTechniqueType[]

  @Field(() => String, { nullable: true })
  public hasParts?: string | null

  @Field(() => String, { nullable: true })
  public dimension?: string | null

  @Field(() => String, { nullable: true })
  public scale?: string | null

  @Field(() => String, { nullable: true })
  public creditLine?: string | null

  @Field(() => String, { nullable: true })
  public rights?: string | null

  @Field(() => String, { nullable: true })
  public permanentLink?: string | null
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
