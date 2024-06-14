import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { Sdk } from '../../generated/strapi-sdk'
import { LocaleArgs } from '../util/localeArgs.type'
import {
  LandingPageArchiveEntityResponse,
  LandingPageObjectEntityResponse,
  LandingPagePeopleEntityResponse,
  LandingPagePublicationEntityResponse,
} from './landingPage.type'

@Resolver()
export class LandingPageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => LandingPageArchiveEntityResponse)
  public async landingPageArchive(@Args() { locale }: LocaleArgs) {
    return (await this.strapiGqlSdk.landingPageArchive({ locale })).landingPageArchive
  }
  @Query(() => LandingPageObjectEntityResponse)
  public async landingPageObject(@Args() { locale }: LocaleArgs) {
    return (await this.strapiGqlSdk.landingPageObject({ locale })).landingPageObject
  }
  @Query(() => LandingPagePeopleEntityResponse)
  public async landingPagePeople(@Args() { locale }: LocaleArgs) {
    return (await this.strapiGqlSdk.landingPagePeople({ locale })).landingPagePeople
  }
  @Query(() => LandingPagePublicationEntityResponse)
  public async landingPagePublication(@Args() { locale }: LocaleArgs) {
    return (await this.strapiGqlSdk.landingPagePublication({ locale })).landingPagePublication
  }
}
