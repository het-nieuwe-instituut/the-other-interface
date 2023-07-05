import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'

@ObjectType()
export class ComponentModulesTitleModule {
  @Field({ nullable: true })
  public Title?: string

  @Field(() => ID)
  public id: string

  @Field(() => ComponentCoreModuleLayouts)
  public titleModuleLayout: ComponentCoreModuleLayouts
}
