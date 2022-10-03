import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'
import {
    BooleanFilterInput,
    DateTimeFilterInput,
    IdFilterInput,
    PaginationArg,
    ResponseCollectionMeta,
    StringFilterInput,
} from '../strapi/shared-types'

@ArgsType()
export class QueryUsersPermissionsRoleArgs {
    @Field(() => ID, { nullable: true })
    public id?: string
}

@ArgsType()
export class QueryUsersPermissionsRolesArgs {
    @Field(() => UsersPermissionsRoleFiltersInput, { nullable: true })
    public filters?: UsersPermissionsRoleFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ArgsType()
export class QueryUsersPermissionsUserArgs {
    @Field(() => ID, { nullable: true })
    public id?: string
}

@ArgsType()
export class QueryUsersPermissionsUsersArgs {
    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public filters?: UsersPermissionsUserFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ArgsType()
export class UsersPermissionsPermissionFiltersInput {
    @Field(() => StringFilterInput, { nullable: true })
    public action?: StringFilterInput

    @Field(() => [UsersPermissionsPermissionFiltersInput], { nullable: true })
    public and?: UsersPermissionsPermissionFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => UsersPermissionsPermissionFiltersInput, { nullable: true })
    public not?: UsersPermissionsPermissionFiltersInput

    @Field(() => [UsersPermissionsPermissionFiltersInput], { nullable: true })
    public or?: UsersPermissionsPermissionFiltersInput[]

    @Field(() => UsersPermissionsRoleFiltersInput, { nullable: true })
    public role?: UsersPermissionsRoleFiltersInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}

@ArgsType()
export class UsersPermissionsRolePermissionsArgs {
    @Field(() => UsersPermissionsPermissionFiltersInput, { nullable: true })
    public filters?: UsersPermissionsPermissionFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ArgsType()
export class UsersPermissionsRoleUsersArgs {
    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public filters?: UsersPermissionsUserFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ArgsType()
export class UsersPermissionsRoleFiltersInput {
    @Field(() => [UsersPermissionsRoleFiltersInput], { nullable: true })
    public and?: UsersPermissionsRoleFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public description?: StringFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public name?: StringFilterInput

    @Field(() => UsersPermissionsRoleFiltersInput, { nullable: true })
    public not?: UsersPermissionsRoleFiltersInput

    @Field(() => [UsersPermissionsRoleFiltersInput], { nullable: true })
    public or?: UsersPermissionsRoleFiltersInput[]

    @Field(() => UsersPermissionsPermissionFiltersInput, { nullable: true })
    public permissions?: UsersPermissionsPermissionFiltersInput

    @Field(() => StringFilterInput, { nullable: true })
    public type?: StringFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput

    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public users?: UsersPermissionsUserFiltersInput
}

@ArgsType()
export class UsersPermissionsUserFiltersInput {
    @Field(() => [UsersPermissionsUserFiltersInput], { nullable: true })
    public and?: UsersPermissionsUserFiltersInput[]

    @Field(() => BooleanFilterInput, { nullable: true })
    public blocked?: BooleanFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public confirmationToken?: StringFilterInput

    @Field(() => BooleanFilterInput, { nullable: true })
    public confirmed?: BooleanFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public email?: StringFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public not?: UsersPermissionsUserFiltersInput

    @Field(() => [UsersPermissionsUserFiltersInput], { nullable: true })
    public or?: UsersPermissionsUserFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public password?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public provider?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public resetPasswordToken?: StringFilterInput

    @Field(() => UsersPermissionsRoleFiltersInput, { nullable: true })
    public role?: UsersPermissionsRoleFiltersInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public username?: StringFilterInput
}

@ObjectType()
export class UsersPermissionsPermissionRelationResponseCollection {
    @Field(() => [UsersPermissionsPermissionEntity])
    public data: UsersPermissionsPermissionEntity[]
}

@ObjectType()
export class UsersPermissionsRole {
    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public description?: string

    @Field()
    public name: string

    @Field(() => UsersPermissionsPermissionRelationResponseCollection, { nullable: true })
    public permissions?: UsersPermissionsPermissionRelationResponseCollection

    @Field({ nullable: true })
    public type?: string

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field(() => UsersPermissionsUserRelationResponseCollection, { nullable: true })
    public users?: UsersPermissionsUserRelationResponseCollection
}

@ObjectType()
export class UsersPermissionsRoleEntity {
    @Field(() => UsersPermissionsRole, { nullable: true })
    public attributes?: UsersPermissionsRole

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class UsersPermissionsRoleEntityResponse {
    @Field(() => UsersPermissionsRoleEntity, { nullable: true })
    public data?: UsersPermissionsRoleEntity
}

@ObjectType()
export class UsersPermissionsRoleEntityResponseCollection {
    @Field(() => [UsersPermissionsRoleEntity])
    public data: UsersPermissionsRoleEntity[]

    @Field(() => ResponseCollectionMeta)
    public meta: ResponseCollectionMeta
}

@ObjectType()
export class UsersPermissionsMeRole {
    @Field({ nullable: true })
    public description?: string

    @Field(() => ID)
    public id: string

    @Field()
    public name: string

    @Field({ nullable: true })
    public type?: string
}

@ObjectType()
export class UsersPermissionsPermission {
    @Field()
    public action: string

    @Field({ nullable: true })
    public createdAt?: Date

    @Field(() => UsersPermissionsRoleEntityResponse, { nullable: true })
    public role?: UsersPermissionsRoleEntityResponse

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class UsersPermissionsPermissionEntity {
    @Field(() => UsersPermissionsPermission, { nullable: true })
    public attributes?: UsersPermissionsPermission

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class UsersPermissionsUser {
    @Field({ nullable: true })
    public blocked?: boolean

    @Field({ nullable: true })
    public confirmed?: boolean

    @Field({ nullable: true })
    public createdAt?: Date

    @Field()
    public email: string

    @Field({ nullable: true })
    public provider?: string

    @Field(() => UsersPermissionsRoleEntityResponse, { nullable: true })
    public role?: UsersPermissionsRoleEntityResponse

    @Field({ nullable: true })
    public updatedAt?: Date

    @Field()
    public username: string
}

@ObjectType()
export class UsersPermissionsUserEntity {
    @Field(() => UsersPermissionsUser, { nullable: true })
    public attributes?: UsersPermissionsUser

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class UsersPermissionsUserEntityResponse {
    @Field(() => UsersPermissionsUserEntity, { nullable: true })
    public data?: UsersPermissionsUserEntity
}

@ObjectType()
export class UsersPermissionsUserEntityResponseCollection {
    @Field(() => [UsersPermissionsUserEntity])
    public data: UsersPermissionsUserEntity[]

    @Field()
    public meta: ResponseCollectionMeta
}

@ObjectType()
export class UsersPermissionsUserRelationResponseCollection {
    @Field(() => [UsersPermissionsUserEntity])
    public data: UsersPermissionsUserEntity[]
}
