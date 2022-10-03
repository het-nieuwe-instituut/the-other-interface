import { Field, ID, ObjectType } from '@nestjs/graphql'
import { StoryRelationResponseCollection } from '../story/story.type'

@ObjectType()
export class LocationRelationResponseCollection {
    @Field(() => [LocationEntity], { nullable: false })
    public data: LocationEntity[]
}

@ObjectType()
export class Location {
    @Field({ nullable: true })
    public city?: string

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public locale?: string

    @Field(() => LocationRelationResponseCollection, { nullable: true })
    public localizations?: LocationRelationResponseCollection

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field(() => StoryRelationResponseCollection, { nullable: true })
    public stories?: StoryRelationResponseCollection

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class LocationEntity {
    @Field(() => Location, { nullable: true })
    public attributes?: Location

    @Field(() => ID, { nullable: true })
    public id?: string
}
