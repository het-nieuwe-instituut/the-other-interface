import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type } from 'src/generated/strapi-sdk'
import { StoryRelationResponseCollection } from '../story/story.type'

registerEnumType(Enum_Triplyrecord_Type, { name: 'Enum_Triplyrecord_Type' })

@ObjectType()
export class TriplyRecord {
    @Field({ nullable: true })
    public __typename?: 'TriplyRecord'

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: false })
    public recordId: string

    @Field({ nullable: true })
    public stories?: StoryRelationResponseCollection

    @Field({ nullable: false })
    public type: Enum_Triplyrecord_Type

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class TriplyRecordRelationResponseCollection {
    @Field({ nullable: true })
    public __typename?: 'TriplyRecordRelationResponseCollection'

    @Field({ nullable: false })
    public data: TriplyRecordEntity[]
}

@ObjectType()
export class TriplyRecordEntity {
    @Field({ nullable: true })
    public __typename?: 'TriplyRecordEntity'

    @Field({ nullable: true })
    public attributes?: TriplyRecord

    @Field(() => ID, { nullable: true })
    public id?: string
}
