import { Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
// import { PoepleZoomLevel3DetailType } from '../people/people.type'
// import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ObjectType()
export class ObjectsZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String)
  public title: string

  @Field(() => EntityNames)
  public type: EntityNames

  @Field(() => String)
  public thumbnail: string
}
