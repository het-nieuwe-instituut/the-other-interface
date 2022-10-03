import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { AuthorFiltersInput } from '../author/author.type'
import { DateTimeFilterInput, IdFilterInput, StringFilterInput } from '../strapi/shared-types'
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

    @Field(() => AuthorFiltersInput, { nullable: true })
    public not?: AuthorFiltersInput

    @Field(() => [AuthorFiltersInput], { nullable: true })
    public or?: AuthorFiltersInput[]

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
}

@ObjectType()
export class LocationEntityResponse {
    @Field(() => LocationEntity)
    public data: LocationEntity
}
