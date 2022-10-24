import { createUnionType, Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PublicationState } from '../../generated/strapi-sdk'
import { ComponentModulesGridModule } from '../strapi/components/core/grid'
import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import { Error, PaginationArg, ResponseCollectionMeta } from '../strapi/shared-types'
import { LandingpageFiltersInput, LandingpageRelationResponseCollection } from './landingPage.type.circular'

@ObjectType()
export class Landingpage {
    @Field({ nullable: true })
    public Title?: string

    @Field({ nullable: true })
    public Description?: string

    @Field(() => [LandingpageComponentsDynamicZone], { nullable: true })
    public components?: typeof LandingpageComponentsDynamicZone[]

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public locale?: string

    @Field(() => LandingpageRelationResponseCollection, { nullable: true })
    public localizations?: LandingpageRelationResponseCollection

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class LandingpageEntity {
    @Field(() => Landingpage, { nullable: true })
    public attributes?: Landingpage

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class LandingpageEntityResponse {
    @Field(() => LandingpageEntity, { nullable: true })
    public data?: LandingpageEntity
}

@ObjectType()
export class LandingpageEntityResponseCollection {
    @Field(() => [LandingpageEntity])
    public data: LandingpageEntity[]

    @Field(() => ResponseCollectionMeta, { nullable: true })
    public meta: ResponseCollectionMeta
}

@InputType()
export class LandingpageLocalizationsArgs {
    @Field(() => LandingpageFiltersInput, { nullable: true })
    public filters?: LandingpageFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
export class QueryLandingpageArgs {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field({ nullable: true })
    public locale?: string
}

@InputType()
export class QueryLandingpagesArgs {
    @Field(() => LandingpageFiltersInput, { nullable: true })
    public filters?: LandingpageFiltersInput

    @Field({ nullable: true })
    public locale?: string

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

export const LandingpageComponentsDynamicZone = createUnionType({
    name: 'LandingpageComponentsDynamicZone',
    types: () =>
        [
            ComponentModulesButtonsModule,
            ComponentModulesGridModule,
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
