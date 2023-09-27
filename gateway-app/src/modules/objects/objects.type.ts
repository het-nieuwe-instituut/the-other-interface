import { Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
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

  @Field(() => String, { nullable: true })
  public thumbnail: string
}
