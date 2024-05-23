import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ComponentModulesTitleModule {
  @Field({ nullable: true })
  public Title?: string

  @Field(() => ID)
  public id: string
}
