import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import { AuthorEntityResponse, AuthorEntityResponseCollection, AuthorFiltersInput } from './author.type'

@Resolver()
export class AuthorResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => AuthorEntityResponse)
    public async author(@Args('id') id: string) {
        const res = await this.strapiGqlSdk.author({ id })

        return res.author
    }

    @Query(() => AuthorEntityResponseCollection)
    public async authors(
        @Args('filters') filters: AuthorFiltersInput,
        @Args('pagination') pagination: PaginationArg,
        @Args() sort: [string],
        @Args() publicationState: PublicationState
    ) {
        const res = await this.strapiGqlSdk.authors({
            filters: filters || {},
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || PublicationState.Live,
        })

        return res.authors
    }
}
