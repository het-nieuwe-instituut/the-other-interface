import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import { UsersPermissionsUserEntityResponse, UsersPermissionsUserEntityResponseCollection } from './user.type'
import { UsersPermissionsUserFiltersInput } from './user.type.circular'

@Resolver()
export class UserResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => UsersPermissionsUserEntityResponse)
    public async usersPermissionsUser(@Args('id', { nullable: true }) id?: string) {
        return (await this.strapiGqlSdk.usersPermissionsUser({ id })).usersPermissionsUser
    }

    @Query(() => UsersPermissionsUserEntityResponseCollection)
    public async usersPermissionsUsers(
        @Args('filters', { nullable: true }) filters?: UsersPermissionsUserFiltersInput,
        @Args('pagination', { nullable: true }) pagination?: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort?: string[]
    ) {
        return (await this.strapiGqlSdk.usersPermissionsUsers({ filters, pagination, sort })).usersPermissionsUsers
    }
}
