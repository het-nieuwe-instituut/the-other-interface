import { Field, ObjectType } from '@nestjs/graphql'

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class PeopleType {
    @Field({ nullable: true })
    public name?: string

    @Field({ nullable: true })
    public birthDate?: string

    @Field({ nullable: true })
    public deathDate?: string

    @Field({ nullable: true })
    public nationalityLabel?: string
}
