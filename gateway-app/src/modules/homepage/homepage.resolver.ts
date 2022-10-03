import { Inject } from '@nestjs/common'
import { Resolver } from '@nestjs/graphql'
import { Sdk } from 'src/generated/strapi-sdk'

@Resolver()
export class HomepageResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
}
