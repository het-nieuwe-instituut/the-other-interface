import { ObjectType, Field, ID } from '@nestjs/graphql'

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class StoryAttributesType {
    @Field()
    public title: string

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: true })
    public updatedAt?: string

    @Field({ nullable: true })
    public publishedAt?: string
}

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class PeopleType {
    @Field({ nullable: true })
    public name?: string

    @Field({ nullable: true })
    public birthDate?: string

    @Field({ nullable: true })
    public deathDate?: string

    @Field({ nullable: true })
    public nationalityLabel?: string
}

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class StoryType {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field(() => StoryAttributesType, { nullable: true })
    public attributes?: StoryAttributesType

    @Field(() => [PeopleType], { nullable: 'itemsAndList' })
    public people?: PeopleType[]
}
