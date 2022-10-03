import { ArgsType, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentcorecarouselitem_Type } from 'src/generated/strapi-sdk'
import { PaginationArg, StringFilterInput, UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreCarouselItem {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public __typename?: 'ComponentCoreCarouselItem'

    @Field({ nullable: true })
    public description?: string

    @Field({ nullable: true })
    public name?: string

    @Field(() => UploadFileEntityResponse, { nullable: true })
    public picture?: UploadFileEntityResponse

    @Field(() => Enum_Componentcorecarouselitem_Type, { nullable: true })
    public type?: Enum_Componentcorecarouselitem_Type

    @Field({ nullable: true })
    public uri_id?: string
}

@ArgsType()
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

    @Field(() => StringFilterInput, { nullable: true })
    public uri_id?: StringFilterInput
}

@ArgsType()
export class ComponentModulesCarouselItemsArgs {
    @Field(() => ComponentCoreCarouselItemFiltersInput, { nullable: true })
    public filters?: ComponentCoreCarouselItemFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field({ nullable: true })
    public sort?: string[]
}

registerEnumType(Enum_Componentcorecarouselitem_Type, { name: 'Enum_Componentcorecarouselitem_Type' })
