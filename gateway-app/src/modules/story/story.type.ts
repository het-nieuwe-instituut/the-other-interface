import { ObjectType, Field, createUnionType, ID } from '@nestjs/graphql'

import { AuthorEntityResponse } from '../author/author.type'
import { LocationRelationResponseCollection } from '../location/location.type'
import { ComponentCorePublicationDate } from '../strapi/components/core/publicationDate'
import { ComponentCoreTimeframe } from '../strapi/components/core/timeframe'

import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import { Error } from '../strapi/shared-types'
import { TriplyRecordRelationResponseCollection } from '../triplyRecord/triplyRecord.type'

@ObjectType()
export class Story {
    @Field({ nullable: true })
    public __typename?: 'Story'

    @Field(() => AuthorEntityResponse, { nullable: true })
    public author?: AuthorEntityResponse

    @Field(() => StoryComponentsDynamicZone, { nullable: true })
    public components?:
        | ComponentModulesButtonsModule
        | ComponentModulesImage
        | ComponentModulesImageCarousel
        | ComponentModulesPullquote
        | ComponentModulesSubtitle
        | ComponentModulesTableModule
        | ComponentModulesTextModule
        | ComponentModulesTitleModule
        | Error

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public description?: string

    @Field({ nullable: true })
    public locale?: string

    @Field({ nullable: true })
    public localizations?: StoryRelationResponseCollection

    @Field({ nullable: true })
    public locations?: LocationRelationResponseCollection

    @Field({ nullable: true })
    public publicationDate?: ComponentCorePublicationDate

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public shortDescription?: string

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public timeframe?: ComponentCoreTimeframe

    @Field({ nullable: false })
    public title: string

    @Field({ nullable: true })
    public triplyRecords?: TriplyRecordRelationResponseCollection

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

@ObjectType()
export class StoryRelationResponseCollection {
    @Field({ nullable: true })
    public __typename?: 'StoryRelationResponseCollection'

    @Field({ nullable: false })
    public data: StoryEntity[]
}

@ObjectType()
export class StoryEntity {
    @Field({ nullable: true })
    public __typename?: 'StoryEntity'

    @Field({ nullable: true })
    public attributes?: Story

    @Field(() => ID, { nullable: true })
    public id?: string
}
