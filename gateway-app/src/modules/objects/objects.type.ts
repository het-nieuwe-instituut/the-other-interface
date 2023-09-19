import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { PoepleZoomLevel3DetailType } from '../people/people.type'

@ObjectType()
export class ObjectsZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public image?: string | null

  @Field(() => String, { nullable: true })
  public imageLabel?: string | null

  @Field(() => String, { nullable: true })
  public title?: string | null

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

  @Field(() => PoepleZoomLevel3DetailType, { nullable: true })
  public populatedMaker?: PoepleZoomLevel3DetailType
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
