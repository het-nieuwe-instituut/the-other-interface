import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { StoryFiltersInput, StoryRelationResponseCollection } from '../story/story.type'
import { DateTimeFilterInput, IdFilterInput, ResponseCollectionMeta, StringFilterInput } from '../strapi/shared-types'
import { ArchiveZoomLevel5UnionType } from '../archives/archives.type'
import { ObjectsZoomLevel5DetailType } from '../objects/objects.type'
import { PublicationZoomLevel5UnionType } from '../publications/publications.type'
import { PoepleZoomLevel5DetailType } from '../people/people.type'

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

    @Field(() => Enum_Triplyrecord_Type, { nullable: false })
    public type: Enum_Triplyrecord_Type

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field(() => ArchiveZoomLevel5UnionType, { nullable: true })
    public archive?: typeof ArchiveZoomLevel5UnionType

    @Field(() => ObjectsZoomLevel5DetailType, { nullable: true })
    public object?: ObjectsZoomLevel5DetailType

    @Field(() => PublicationZoomLevel5UnionType, { nullable: true })
    public publication?: typeof PublicationZoomLevel5UnionType

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public people?: PoepleZoomLevel5DetailType
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
    @Field(() => TriplyRecordEntity, { nullable: true })
    public data?: TriplyRecordEntity
}

@InputType()
export class TriplyRecordFiltersInput {
    @Field(() => IdFilterInput, { nullable: true })
    public id: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public recordId: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public type: StringFilterInput

    @Field(() => StoryFiltersInput, { nullable: true })
    public stories: StoryFiltersInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt: DateTimeFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt: DateTimeFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt: DateTimeFilterInput

    @Field(() => [TriplyRecordFiltersInput], { nullable: true })
    public and: [TriplyRecordFiltersInput]

    @Field(() => [TriplyRecordFiltersInput], { nullable: true })
    public or: [TriplyRecordFiltersInput]

    @Field(() => TriplyRecordFiltersInput, { nullable: true })
    public not: TriplyRecordFiltersInput
}
