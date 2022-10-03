import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { StoryRelationResponseCollection } from '../story/story.type'
import { ResponseCollectionMeta } from '../strapi/shared-types'

registerEnumType(Enum_Triplyrecord_Type, { name: 'Enum_Triplyrecord_Type' })

@ObjectType()
export class TriplyRecord {
    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: false })
    public recordId: string

    @Field(() => StoryRelationResponseCollection, { nullable: true })
    public stories?: StoryRelationResponseCollection

    @Field({ nullable: false })
    public type: Enum_Triplyrecord_Type

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class TriplyRecordRelationResponseCollection {
    @Field(() => [TriplyRecordEntity], { nullable: false })
    public data: TriplyRecordEntity[]

    @Field(() => ResponseCollectionMeta, { nullable: true })
    public meta: ResponseCollectionMeta
}

@ObjectType()
export class TriplyRecordEntity {
    @Field(() => TriplyRecord, { nullable: true })
    public attributes?: TriplyRecord

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class TriplyRecordEntityResponse {
    @Field(() => TriplyRecordEntity, { nullable: false })
    public data: TriplyRecordEntity
}
