import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { LocationEntityResponse, LocationFiltersInput } from './location.type'
import { Location } from './location-dependency.type'

@Resolver()
export class LocationResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => LocationEntityResponse)
    public async location(@Args('id') id: string, @Args('locale') locale: I18NLocaleCode) {
        const res = await this.strapiGqlSdk.location({ id, locale })

        return res.location
    }

    @Query(() => LocationEntityResponse)
    public async locations(
        @Args('filters') filters: LocationFiltersInput,
        @Args() pagination: PaginationArg,
        @Args('sort', { type: () => [String] }) sort: string[],
        @Args('publicationState') publicationState: PublicationState,
        @Args('locale') locale: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.locations({
            filters: filters || {},
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || PublicationState.Live,
            locale: locale || null,
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
            return this.strapiGqlSdk.stories({}) // todo
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
