import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { LocationEntityResponse, LocationFiltersInput } from './location.type'

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
