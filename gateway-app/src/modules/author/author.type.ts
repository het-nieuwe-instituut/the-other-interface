import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { DateTimeFilterInput, IdFilterInput, ResponseCollectionMeta, StringFilterInput } from '../strapi/shared-types'

@ObjectType()
export class Author {
    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: false })
    public firstName: string

    @Field({ nullable: true })
    public insertion?: string

    @Field({ nullable: false })
    public lastName: string

    @Field({ nullable: true })
    public publishedAt?: string

    @Field({ nullable: true })
    public updatedAt?: string
}

@ObjectType()
export class AuthorEntity {
    @Field(() => Author, { nullable: true })
    public attributes?: Author

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class AuthorEntityResponse {
    @Field(() => AuthorEntity, { nullable: true })
    public data?: AuthorEntity
}

@ObjectType()
export class AuthorEntityResponseCollection {
    @Field(() => [AuthorEntity])
    public data: AuthorEntity[]

    @Field(() => ResponseCollectionMeta)
    public meta: ResponseCollectionMeta
}

@InputType()
export class AuthorFiltersInput {
    @Field(() => [AuthorFiltersInput], { nullable: true })
    public and?: AuthorFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public firstName?: StringFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public insertion?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public lastName?: StringFilterInput

    @Field(() => AuthorFiltersInput, { nullable: true })
    public not?: AuthorFiltersInput

    @Field(() => [AuthorFiltersInput], { nullable: true })
    public or?: AuthorFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}
