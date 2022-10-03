import { ObjectType, Field, createUnionType } from '@nestjs/graphql'

import { AuthorEntityResponse } from '../author/author.type'

import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class StoryAttributesType {
    @Field()
    public title: string

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: true })
    public updatedAt?: string

    @Field({ nullable: true })
    public publishedAt?: string
}

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class Story {
    @Field({ nullable: true })
    public __typename?: 'Story'

    @Field(() => AuthorEntityResponse, { nullable: true })
    public author?: AuthorEntityResponse

    @Field(() => StoryComponentsDynamicZone, { nullable: true })
    public components?: StoryComponentsDynamicZone

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public description?: string

    @Field({ nullable: true })
    public locale?: string

    @Field({ nullable: true })
    public localizations?: Maybe<StoryRelationResponseCollection>

    @Field({ nullable: true })
    public locations?: Maybe<LocationRelationResponseCollection>

    @Field({ nullable: true })
    public publicationDate?: Maybe<ComponentCorePublicationDate>

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public shortDescription?: string

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public timeframe?: Maybe<ComponentCoreTimeframe>

    @Field({ nullable: false })
    public title: string

    @Field({ nullable: true })
    public triplyRecords?: Maybe<TriplyRecordRelationResponseCollection>

    @Field({ nullable: true })
    public updatedAt?: Date
}

export const StoryComponentsDynamicZone = createUnionType({
    name: 'StoryComponentsDynamicZone',
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
