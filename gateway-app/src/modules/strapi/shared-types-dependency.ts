import { ArgsType, Field } from '@nestjs/graphql'
import {
    DateTimeFilterInput,
    IdFilterInput,
    IntFilterInput,
    StringFilterInput,
    UploadFileFiltersInput,
} from '../strapi/shared-types'

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
