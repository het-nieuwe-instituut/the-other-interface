import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ComponentModulesSubtitle {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public text?: string
}
