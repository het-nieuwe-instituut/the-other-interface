import { ArgsType, Field, Int } from '@nestjs/graphql'
import { Min } from 'class-validator'

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: false })
  @Min(1)
  public page: number

  @Field(() => Int, { nullable: true })
  @Min(1)
  public pageSize?: number
}
