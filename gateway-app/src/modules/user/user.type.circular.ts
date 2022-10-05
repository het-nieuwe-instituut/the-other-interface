import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { BooleanFilterInput, DateTimeFilterInput, IdFilterInput, StringFilterInput } from '../strapi/shared-types'
import {
    UsersPermissionsPermissionRelationResponseCollection,
    UsersPermissionsRoleFiltersInput,
    UsersPermissionsUserRelationResponseCollection,
} from './user.type'

@InputType()
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

@InputType()
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

@ObjectType()
export class UsersPermissionsRole {
    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: true })
    public description?: string

    @Field()
    public name: string

    @Field(() => UsersPermissionsPermissionRelationResponseCollection, { nullable: true })
    public permissions?: UsersPermissionsPermissionRelationResponseCollection

    @Field({ nullable: true })
    public type?: string

    @Field({ nullable: true })
    public updatedAt?: string

    @Field(() => UsersPermissionsUserRelationResponseCollection, { nullable: true })
    public users?: UsersPermissionsUserRelationResponseCollection
}
