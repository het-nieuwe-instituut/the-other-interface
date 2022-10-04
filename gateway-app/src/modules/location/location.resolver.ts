import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { LocationEntityResponse, LocationFiltersInput, LocationRelationResponseCollection } from './location.type'
import { Location } from './location-dependency.type'

@Resolver()
export class LocationResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => LocationEntityResponse)
    public async location(@Args('id') id: string, @Args('locale', { nullable: true }) locale: I18NLocaleCode) {
        const res = await this.strapiGqlSdk.location({ id, locale })

        return res.location
    }

    @Query(() => LocationRelationResponseCollection)
    public async locations(
        @Args('filters', { nullable: true }) filters: LocationFiltersInput,
        @Args('pagaination', { nullable: true }) pagination: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort: string[],
        @Args('publicationState', { nullable: true }) publicationState: PublicationState,
        @Args('locale', { nullable: true }) locale: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.locations({
            filters: filters || undefined,
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || undefined,
            locale: locale || undefined,
        })

        return res.locations
    }
}

@Resolver(Location)
export class LocationFieldResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @ResolveField()
    public async stories(@Parent() location: Location) {
        if (location.stories?.data && location.stories?.data.length) {
            const res = await this.strapiGqlSdk.stories({
                filters: {
                    or: location.stories.data.map(ent => {
                        return { id: { eq: ent.id } }
                    }),
                },
            })
            return res.stories
        }
        return []
    }

    @ResolveField()
    public async localizations(@Parent() location: Location) {
        if (location.localizations?.data && location.localizations.data.length) {
            const res = await this.strapiGqlSdk.locations({
                filters: {
                    or: location.localizations.data.map(ent => {
                        return { id: { eq: ent.id } }
                    }),
                },
            })

            return res.locations
        }
        return []
    }
}
