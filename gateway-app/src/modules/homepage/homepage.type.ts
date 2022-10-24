import { createUnionType, Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PublicationState } from '../../generated/strapi-sdk'
import { ComponentModulesGridModule } from '../strapi/components/core/grid'
import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesCarousel } from '../strapi/components/modules/carousel'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import { Error } from '../strapi/shared-types'

@ObjectType()
export class HomepageRelationResponseCollection {
    @Field(() => [HomepageEntity])
    public data: HomepageEntity[]
}

@ObjectType()
export class Homepage {
    @Field({ nullable: true })
    public Title?: string

    @Field(() => [HomepageComponentsDynamicZone], { nullable: true })
    public components?: typeof HomepageComponentsDynamicZone[]

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public locale?: string

    @Field(() => HomepageRelationResponseCollection, { nullable: true })
    public localizations?: HomepageRelationResponseCollection

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class HomepageEntity {
    @Field(() => Homepage, { nullable: true })
    public attributes?: Homepage

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class HomepageEntityResponse {
    @Field(() => HomepageEntity, { nullable: true })
    public data?: HomepageEntity
}

@InputType()
export class HomepageLocalizationsArgs {
    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState
}

@InputType()
export class QueryHomepageArgs {
    @Field({ nullable: true })
    public locale?: string

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState
}

export const HomepageComponentsDynamicZone = createUnionType({
    name: 'HomepageComponentsDynamicZone',
    types: () =>
        [
            ComponentModulesButtonsModule,
            ComponentModulesCarousel,
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
    resolveType(value) {
        return value.__typename
    },
})
