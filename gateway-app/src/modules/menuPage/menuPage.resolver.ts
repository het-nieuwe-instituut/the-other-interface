import { Inject } from '@nestjs/common'
import { Resolver } from '@nestjs/graphql'
import { Sdk } from '../../generated/strapi-sdk'

@Resolver()
export class MenuPageResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
}
