import { ObjectType, Field, createUnionType, ID, InputType } from '@nestjs/graphql'

import { AuthorEntityResponse } from '../author/author.type'
import { LocationRelationResponseCollection } from '../location/location.type'
import { PeopleType } from '../people/people.type'
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
import {
    DateTimeFilterInput,
    Error,
    IdFilterInput,
    ResponseCollectionMeta,
    StringFilterInput,
} from '../strapi/shared-types'
import { TriplyRecordRelationResponseCollection } from '../triplyRecord/triplyRecord.type'

@ObjectType()
export class StoryRelationResponseCollection {
    @Field(() => [StoryEntity], { nullable: false })
    public data: StoryEntity[]
}

@ObjectType()
export class Story {
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

    @Field(() => StoryRelationResponseCollection, { nullable: true })
    public localizations?: StoryRelationResponseCollection

    @Field(() => LocationRelationResponseCollection, { nullable: true })
    public locations?: LocationRelationResponseCollection

    @Field(() => ComponentCorePublicationDate, { nullable: true })
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

    @Field(() => TriplyRecordRelationResponseCollection, { nullable: true })
    public triplyRecords?: TriplyRecordRelationResponseCollection

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field(() => [PeopleType], { nullable: 'itemsAndList' })
    public people?: PeopleType[]
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
export class StoryEntity {
    @Field({ nullable: true })
    public attributes?: Story

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class StoryEntityResponse {
    @Field({ nullable: true })
    public data?: StoryEntity
}

@ObjectType()
export class StoryEntityResponseCollection {
    @Field(() => [StoryEntity], { nullable: true })
    public data: StoryEntity[]

    @Field(() => ResponseCollectionMeta, { nullable: true })
    public meta: ResponseCollectionMeta
}

@InputType()
export class StoryFiltersInput {
    @Field(() => [StoryFiltersInput], { nullable: true })
    public and?: StoryFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public firstName?: StringFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public insertion?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public lastName?: StringFilterInput

    @Field(() => StoryFiltersInput, { nullable: true })
    public not?: StoryFiltersInput

    @Field(() => [StoryFiltersInput], { nullable: true })
    public or?: StoryFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}
