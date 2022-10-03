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
export class Landingpage {
    @Field({ nullable: true })
    public __typename?: 'Landingpage'

    @Field({ nullable: true })
    public Title?: string

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
    @Field({ nullable: true })
    public __typename?: 'LandingpageEntity'

    @Field(() => Landingpage, { nullable: true })
    public attributes?: Landingpage

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class LandingpageEntityResponse {
    @Field({ nullable: true })
    public __typename?: 'LandingpageEntityResponse'

    @Field(() => LandingpageEntity, { nullable: true })
    public data?: LandingpageEntity
}

@ObjectType()
export class LandingpageEntityResponseCollection {
    @Field({ nullable: true })
    public __typename?: 'LandingpageEntityResponseCollection'

    @Field({ nullable: true })
    public data: Array<LandingpageEntity>

    @Field(() => ResponseCollectionMeta, { nullable: true })
    public meta: ResponseCollectionMeta
}

@ObjectType()
export class LandingpageRelationResponseCollection {
    @Field({ nullable: true })
    public __typename?: 'LandingpageRelationResponseCollection'

    @Field({ nullable: true })
    public data: Array<LandingpageEntity>
}

@ArgsType()
export class LandingpageLocalizationsArgs {
    @Field(() => LandingpageFiltersInput, { nullable: true })
    public filters?: LandingpageFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState

    @Field({ nullable: true })
    public sort?: string[]
}

@ArgsType()
export class LandingpageFiltersInput {
    @Field(() => StringFilterInput, { nullable: true })
    public Title?: StringFilterInput

    @Field(() => [LandingpageFiltersInput], { nullable: true })
    public and?: LandingpageFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public locale?: StringFilterInput

    @Field(() => LandingpageFiltersInput, { nullable: true })
    public localizations?: LandingpageFiltersInput

    @Field(() => LandingpageFiltersInput, { nullable: true })
    public not?: LandingpageFiltersInput

    @Field(() => [LandingpageFiltersInput], { nullable: true })
    public or?: LandingpageFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public slug?: StringFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}

@ArgsType()
export class QueryLandingpageArgs {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field({ nullable: true })
    public locale?: string
}

@ArgsType()
export class QueryLandingpagesArgs {
    @Field(() => LandingpageFiltersInput, { nullable: true })
    public filters?: LandingpageFiltersInput

    @Field({ nullable: true })
    public locale?: string

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState

    @Field({ nullable: true })
    public sort?: string[]
}

export const LandingpageComponentsDynamicZone = createUnionType({
    name: 'LandingpageComponentsDynamicZone',
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
