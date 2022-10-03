import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Sdk } from 'src/generated/strapi-sdk'
import { TriplyRecord, TriplyRecordEntityResponse, TriplyRecordRelationResponseCollection } from './triplyRecord.type'

@Resolver()
export class TriplyRecordResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => TriplyRecordEntityResponse)
    public async triplyRecord(@Args('id') id: string) {
        const res = await this.strapiGqlSdk.triplyRecord({ id })
        return res.triplyRecord
    }
    @Query(() => TriplyRecordRelationResponseCollection)
    public async triplyRecords() {
        //
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
