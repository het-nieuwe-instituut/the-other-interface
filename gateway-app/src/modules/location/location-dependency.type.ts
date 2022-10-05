import { Field, ObjectType } from '@nestjs/graphql'
import { StoryRelationResponseCollection } from '../story/story.type'
import { LocationRelationResponseCollection } from './location.type'

@ObjectType()
export class Location {
    @Field({ nullable: true })
    public city?: string

    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: true })
    public locale?: string

    @Field(() => LocationRelationResponseCollection, { nullable: true })
    public localizations?: LocationRelationResponseCollection

    @Field({ nullable: true })
    public publishedAt?: string

    @Field(() => StoryRelationResponseCollection, { nullable: true })
    public stories?: StoryRelationResponseCollection

    @Field({ nullable: true })
    public updatedAt?: string
}
