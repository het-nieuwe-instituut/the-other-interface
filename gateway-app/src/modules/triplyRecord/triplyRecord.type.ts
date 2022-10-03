import { ArgsType, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { StoryRelationResponseCollection } from '../story/story.type'
import {
    DateTimeFilterInput,
    IdFilterInput,
    IntFilterInput,
    StringFilterInput,
    UploadFileFiltersInput,
} from '../strapi/shared-types'

registerEnumType(Enum_Triplyrecord_Type, { name: 'Enum_Triplyrecord_Type' })

@ObjectType()
export class TriplyRecord {
    @Field({ nullable: true })
    public typename?: 'TriplyRecord'

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
    @Field({ nullable: true })
    public typename?: 'TriplyRecordRelationResponseCollection'

    @Field(() => [TriplyRecordEntity], { nullable: false })
    public data: TriplyRecordEntity[]
}

@ObjectType()
export class TriplyRecordEntity {
    @Field({ nullable: true })
    public typename?: 'TriplyRecordEntity'

    @Field(() => TriplyRecord, { nullable: true })
    public attributes?: TriplyRecord

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ArgsType()
export class UploadFolderFiltersInput {
    @Field(() => [UploadFolderFiltersInput], { nullable: true })
    public and?: UploadFolderFiltersInput[]

    @Field(() => UploadFolderFiltersInput, { nullable: true })
    public children?: UploadFolderFiltersInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => UploadFileFiltersInput, { nullable: true })
    public files?: UploadFileFiltersInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public name?: StringFilterInput

    @Field(() => UploadFolderFiltersInput, { nullable: true })
    public not?: UploadFolderFiltersInput

    @Field(() => [UploadFolderFiltersInput], { nullable: true })
    public or?: UploadFolderFiltersInput[]

    @Field(() => UploadFolderFiltersInput, { nullable: true })
    public parent?: UploadFolderFiltersInput

    @Field(() => StringFilterInput, { nullable: true })
    public path?: StringFilterInput

    @Field(() => IntFilterInput, { nullable: true })
    public pathId?: IntFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}
