import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@ObjectType()
export class TripliType {
    @Field(() => String)
    public class: string

    @Field(() => Int)
    public numberOfInstances: number
}

@ArgsType()
export class GetCountsArgs {
    @Field(() => Int, { nullable: true })
    @IsOptional()
    public zoomLevel?: number
}
