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
        @Args('filters', { nullable: true }) filters: AuthorFiltersInput,
        @Args('pagination', { nullable: true }) pagination: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort: string[],
        @Args('publicationState', { nullable: true }) publicationState: PublicationState
    ) {
        const res = await this.strapiGqlSdk.authors({
            filters: filters || undefined,
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || undefined,
        })

        return res.authors
    }
}
