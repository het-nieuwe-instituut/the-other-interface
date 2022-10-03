import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { HomepageEntityResponse } from './homepage.type'

@Resolver()
export class HomepageResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => HomepageEntityResponse)
    public homepage(@Args('publicationState') publicationState: PublicationState, @Args('locale') locale: string) {
        return this.strapiGqlSdk.homepage({ publicationState, locale })
    }
}
