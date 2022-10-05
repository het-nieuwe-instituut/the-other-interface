import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
    DateTimeFilterInput,
    IdFilterInput,
    PaginationArg,
    ResponseCollectionMeta,
    StringFilterInput,
} from '../strapi/shared-types'
import {
    UsersPermissionsPermissionFiltersInput,
    UsersPermissionsRole,
    UsersPermissionsUserFiltersInput,
} from './user.type.circular'

@InputType()
export class QueryUsersPermissionsRoleArgs {
    @Field(() => ID, { nullable: true })
    public id?: string
}

@InputType()
export class QueryUsersPermissionsUserArgs {
    @Field(() => ID, { nullable: true })
    public id?: string
}

@InputType()
export class QueryUsersPermissionsUsersArgs {
    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public filters?: UsersPermissionsUserFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
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

@InputType()
export class QueryUsersPermissionsRolesArgs {
    @Field(() => UsersPermissionsRoleFiltersInput, { nullable: true })
    public filters?: UsersPermissionsRoleFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
export class UsersPermissionsRolePermissionsArgs {
    @Field(() => UsersPermissionsPermissionFiltersInput, { nullable: true })
    public filters?: UsersPermissionsPermissionFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
export class UsersPermissionsRoleUsersArgs {
    @Field(() => UsersPermissionsUserFiltersInput, { nullable: true })
    public filters?: UsersPermissionsUserFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@ObjectType()
export class UsersPermissionsPermissionRelationResponseCollection {
    @Field(() => [UsersPermissionsPermissionEntity])
    public data: UsersPermissionsPermissionEntity[]
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
export class UsersPermissionsUser {
    @Field({ nullable: true })
    public blocked?: boolean

    @Field({ nullable: true })
    public confirmed?: boolean

    @Field({ nullable: true })
    public createdAt?: string

    @Field()
    public email: string

    @Field({ nullable: true })
    public provider?: string

    @Field(() => UsersPermissionsRoleEntityResponse, { nullable: true })
    public role?: UsersPermissionsRoleEntityResponse

    @Field({ nullable: true })
    public updatedAt?: string

    @Field()
    public username: string
}

@ObjectType()
export class UsersPermissionsPermission {
    @Field()
    public action: string

    @Field({ nullable: true })
    public createdAt?: string

    @Field(() => UsersPermissionsRoleEntityResponse, { nullable: true })
    public role?: UsersPermissionsRoleEntityResponse

    @Field({ nullable: true })
    public updatedAt?: string
}

@ObjectType()
export class UsersPermissionsPermissionEntity {
    @Field(() => UsersPermissionsPermission, { nullable: true })
    public attributes?: UsersPermissionsPermission

    @Field(() => ID, { nullable: true })
    public id?: string
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
