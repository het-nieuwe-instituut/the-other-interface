import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { TriplyRecord, TriplyRecordFiltersInput } from '../../../triplyRecord/triplyRecord.type'
import { Enum_Componentcorecarouselitem_Type } from '../../../../generated/strapi-sdk'
import { PaginationArg, StringFilterInput, UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreCarouselItem {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public description?: string

    @Field({ nullable: true })
    public name?: string

    @Field(() => UploadFileEntityResponse, { nullable: true })
    public picture?: UploadFileEntityResponse

    @Field(() => Enum_Componentcorecarouselitem_Type, { nullable: true })
    public type?: Enum_Componentcorecarouselitem_Type

    @Field(() => TriplyRecord, { nullable: true })
    public triply_record?: TriplyRecord
}

@InputType()
export class ComponentCoreCarouselItemFiltersInput {
    @Field(() => [ComponentCoreCarouselItemFiltersInput], { nullable: true })
    public and?: ComponentCoreCarouselItemFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public description?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public name?: StringFilterInput

    @Field(() => ComponentCoreCarouselItemFiltersInput, { nullable: true })
    public not?: ComponentCoreCarouselItemFiltersInput

    @Field(() => [ComponentCoreCarouselItemFiltersInput], { nullable: true })
    public or?: ComponentCoreCarouselItemFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public type?: StringFilterInput

    @Field(() => TriplyRecordFiltersInput, { nullable: true })
    public triply_record?: TriplyRecordFiltersInput
}

@InputType()
export class ComponentModulesCarouselItemsArgs {
    @Field(() => ComponentCoreCarouselItemFiltersInput, { nullable: true })
    public filters?: ComponentCoreCarouselItemFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

registerEnumType(Enum_Componentcorecarouselitem_Type, { name: 'Enum_Componentcorecarouselitem_Type' })
