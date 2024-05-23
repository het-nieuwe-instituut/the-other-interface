import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { LocaleArgs } from '../util/localeArgs.type'
import { HomepageEntityResponse } from './homepage.type'

@Resolver()
export class HomepageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => HomepageEntityResponse)
  public async homepage(
    @Args() { locale }: LocaleArgs,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ) {
    return (await this.strapiGqlSdk.homepage({ publicationState, locale })).homepage
  }
}
