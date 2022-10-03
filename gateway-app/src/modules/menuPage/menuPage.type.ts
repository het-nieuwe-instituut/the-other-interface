import { ArgsType, createUnionType, Field, ID, ObjectType } from '@nestjs/graphql'
import { PublicationState } from 'src/generated/strapi-sdk'
import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import {
    DateTimeFilterInput,
    Error,
    IdFilterInput,
    PaginationArg,
    ResponseCollectionMeta,
    StringFilterInput,
} from '../strapi/shared-types'

@ObjectType()
export class Menupage {
    @Field({ nullable: true })
    public Title?: string

    @Field(() => [MenupageComponentsDynamicZone], { nullable: true })
    public components?: typeof MenupageComponentsDynamicZone[]

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public locale?: string

    @Field(() => MenupageRelationResponseCollection, { nullable: true })
    public localizations?: MenupageRelationResponseCollection

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class MenupageEntity {
    @Field(() => Menupage, { nullable: true })
    public attributes?: Menupage

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class MenupageEntityResponse {
    @Field(() => MenupageEntity, { nullable: true })
    public data?: MenupageEntity
}

@ObjectType()
export class MenupageEntityResponseCollection {
    @Field(() => [MenupageEntity], { nullable: true })
    public data: MenupageEntity[]

    @Field(() => ResponseCollectionMeta, { nullable: true })
    public meta: ResponseCollectionMeta
}

@ObjectType()
export class MenupageRelationResponseCollection {
    @Field(() => [MenupageEntity], { nullable: true })
    public data: MenupageEntity[]
}

@ArgsType()
export class MenupageFiltersInput {
    @Field(() => [StringFilterInput], { nullable: true })
    public Title?: StringFilterInput

    @Field(() => [MenupageFiltersInput], { nullable: true })
    public and?: MenupageFiltersInput[]

    @Field(() => [DateTimeFilterInput], { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => [IdFilterInput], { nullable: true })
    public id?: IdFilterInput

    @Field(() => [StringFilterInput], { nullable: true })
    public locale?: StringFilterInput

    @Field(() => [MenupageFiltersInput], { nullable: true })
    public localizations?: MenupageFiltersInput

    @Field(() => [MenupageFiltersInput], { nullable: true })
    public not?: MenupageFiltersInput

    @Field(() => [MenupageFiltersInput], { nullable: true })
    public or?: MenupageFiltersInput[]

    @Field(() => [DateTimeFilterInput], { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => [StringFilterInput], { nullable: true })
    public slug?: StringFilterInput

    @Field(() => [DateTimeFilterInput], { nullable: true })
    public updatedAt?: DateTimeFilterInput
}

@ArgsType()
export class MenupageLocalizationsArgs {
    @Field(() => [MenupageFiltersInput], { nullable: true })
    public filters?: MenupageFiltersInput

    @Field(() => [PaginationArg], { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [PublicationState], { nullable: true })
    public publicationState?: PublicationState

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ArgsType()
export class QueryMenupageArgs {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field(() => [String], { nullable: true })
    public locale?: string
}

@ArgsType()
export class QueryMenupagesArgs {
    @Field(() => [MenupageFiltersInput], { nullable: true })
    public filters?: MenupageFiltersInput

    @Field(() => [String], { nullable: true })
    public locale?: string

    @Field(() => [PaginationArg], { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [PublicationState], { nullable: true })
    public publicationState?: PublicationState

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

export const MenupageComponentsDynamicZone = createUnionType({
    name: 'MenupageComponentsDynamicZone',
    types: () =>
        [
            ComponentModulesButtonsModule,
            ComponentModulesImage,
            ComponentModulesImageCarousel,
            ComponentModulesPullquote,
            ComponentModulesSubtitle,
            ComponentModulesTableModule,
            ComponentModulesTextModule,
            ComponentModulesTitleModule,
            Error,
        ] as const,
})
