import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import {
    TriplyRecord,
    TriplyRecordEntityResponse,
    TriplyRecordFiltersInput,
    TriplyRecordRelationResponseCollection,
} from './triplyRecord.type'

@Resolver()
export class TriplyRecordResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => TriplyRecordEntityResponse)
    public async triplyRecord(@Args('id') id: string) {
        const res = await this.strapiGqlSdk.triplyRecord({ id })
        return res.triplyRecord
    }
    @Query(() => TriplyRecordRelationResponseCollection)
    public async triplyRecords(
        @Args('filters', { nullable: true }) filters?: TriplyRecordFiltersInput,
        @Args('pagination', { nullable: true }) pagination?: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
        @Args('publicationState', { nullable: true }) publicationState?: PublicationState
    ) {
        const res = await this.strapiGqlSdk.triplyRecords({
            filters: filters || undefined,
            pagination: pagination || undefined,
            sort: sort || [],
            publicationState: publicationState || undefined,
        })

        return res.triplyRecords
    }
}

@Resolver(TriplyRecord)
export class TriplyRecordFieldResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @ResolveField()
    public async stories(@Parent() triplyRecord: TriplyRecord) {
        if (triplyRecord.stories?.data && triplyRecord.stories.data.length) {
            const res = await this.strapiGqlSdk.stories({
                filters: {
                    or: triplyRecord.stories.data.map(ent => {
                        return { id: { eq: ent.id } }
                    }),
                },
            })
            return res.stories
        }
    }
}
