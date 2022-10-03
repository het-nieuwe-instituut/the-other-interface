import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Author {
    @Field({ nullable: true })
    public __typename?: 'Author'

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: false })
    public firstName: string

    @Field({ nullable: true })
    public insertion?: string

    @Field({ nullable: false })
    public lastName: string

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public updatedAt?: Date
}

@ObjectType()
export class AuthorEntity {
    @Field({ nullable: true })
    public __typename?: 'AuthorEntity'

    @Field(() => Author, { nullable: true })
    public attributes?: Author

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class AuthorEntityResponse {
    @Field({ nullable: true })
    public __typename?: 'AuthorEntityResponse'

    @Field({ nullable: true })
    public data?: AuthorEntity
}
