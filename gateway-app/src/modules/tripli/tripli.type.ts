import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TripliType {
    @Field(() => String)
    public class: string

    @Field(() => Int)
    public numberOfInstances: number
}
