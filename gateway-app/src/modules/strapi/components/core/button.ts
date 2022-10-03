import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'
import { BooleanFilterInput, StringFilterInput, UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreButton {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public typename?: 'ComponentCoreButton'

    @Field(() => UploadFileEntityResponse, { nullable: true })
    public attachment?: UploadFileEntityResponse

    @Field({ nullable: true })
    public hasAttachment?: boolean

    @Field({ nullable: true })
    public text?: string

    @Field({ nullable: true })
    public url?: string
}

@ArgsType()
export class ComponentCoreButtonFiltersInput {
    @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
    public and?: ComponentCoreButtonFiltersInput[]

    @Field(() => BooleanFilterInput, { nullable: true })
    public hasAttachment?: BooleanFilterInput

    @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
    public not?: ComponentCoreButtonFiltersInput

    @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
    public or?: ComponentCoreButtonFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public text?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public url?: StringFilterInput
}
