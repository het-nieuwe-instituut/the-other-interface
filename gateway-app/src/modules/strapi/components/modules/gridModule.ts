import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreGridFeaturedFields } from '../core/grid'
import { ComponentCoreButton } from '../core/button'

@ObjectType()
export class ComponentModulesGridModule {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public title?: string

  @Field(() => [ComponentCoreGridFeaturedFields], { nullable: true })
  public cards?: ComponentCoreGridFeaturedFields[]

  @Field(() => ComponentCoreButton, { nullable: true })
  public exploreCollectionButton?: ComponentCoreButton
}
