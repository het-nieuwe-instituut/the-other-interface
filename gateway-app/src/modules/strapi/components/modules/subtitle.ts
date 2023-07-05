import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'

@ObjectType()
export class ComponentModulesSubtitle {
  @Field(() => ID)
  public id: string

  @Field(() => ComponentCoreModuleLayouts)
  public subtitleModuleLayout: ComponentCoreModuleLayouts

  @Field({ nullable: true })
  public text?: string
}
