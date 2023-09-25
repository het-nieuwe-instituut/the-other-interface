import { Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

// registerEnumType(PublicationsZoomLevel3Types, { name: 'PublicationsZoomLevel3Types' })

@ObjectType()
export class PublicationZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String)
  public title: string

  @Field(() => EntityNames)
  public type: EntityNames

  @Field(() => String)
  public thumbnail: string
}
