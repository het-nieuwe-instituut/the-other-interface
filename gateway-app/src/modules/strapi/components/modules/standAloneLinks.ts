import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreStandAloneLink } from '../core/standAloneLink'

@ObjectType()
export class ComponentModulesStandaloneLinks {
  @Field(() => ID)
  public id: string

  @Field(() => [ComponentCoreStandAloneLink], { nullable: true })
  public standaloneLinks: ComponentCoreStandAloneLink[]
}
