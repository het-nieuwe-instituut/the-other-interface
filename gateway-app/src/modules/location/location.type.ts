import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  DateTimeFilterInput,
  IdFilterInput,
  ResponseCollectionMeta,
  StringFilterInput,
} from '../strapi/shared-types'
import { Location } from './location-dependency.type'

@InputType()
export class LocationFiltersInput {
  @Field(() => [LocationFiltersInput], { nullable: true })
  public and?: LocationFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public createdAt?: DateTimeFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public firstName?: StringFilterInput

  @Field(() => IdFilterInput, { nullable: true })
  public id?: IdFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public insertion?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public lastName?: StringFilterInput

  @Field(() => LocationFiltersInput, { nullable: true })
  public not?: LocationFiltersInput

  @Field(() => [LocationFiltersInput], { nullable: true })
  public or?: LocationFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public publishedAt?: DateTimeFilterInput

  @Field(() => DateTimeFilterInput, { nullable: true })
  public updatedAt?: DateTimeFilterInput
}

@ObjectType()
export class LocationEntity {
  @Field(() => Location, { nullable: true })
  public attributes?: Location

  @Field(() => ID, { nullable: true })
  public id?: string
}
@ObjectType()
export class LocationRelationResponseCollection {
  @Field(() => [LocationEntity], { nullable: false })
  public data: LocationEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta: ResponseCollectionMeta
}

@ObjectType()
export class LocationEntityResponse {
  @Field(() => LocationEntity, { nullable: true })
  public data: LocationEntity
}
