import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ComponentCorePageHeader {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public Title?: string

  @Field({ nullable: true })
  public content?: string
}
