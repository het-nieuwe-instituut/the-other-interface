import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ComponentModulesTextModule {
  @Field({ nullable: true })
  public Richtext?: string

  @Field(() => ID)
  public id: string
}
