import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ComponentCoreCarouselImage } from '../core/carouselImage'
import { Enum_Componentmodulescarousel_Variant } from 'src/generated/strapi-sdk'
import { ComponentCoreButton } from '../core/button'

registerEnumType(Enum_Componentmodulescarousel_Variant, {
  name: 'Enum_Componentmodulescarousel_Variant',
})

@ObjectType()
export class ComponentModulesCarousel {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public description?: string

  @Field()
  public title: string

  @Field(() => [ComponentCoreCarouselImage], { nullable: true })
  public items?: ComponentCoreCarouselImage[]

  @Field(() => Enum_Componentmodulescarousel_Variant)
  public variant: Enum_Componentmodulescarousel_Variant

  @Field(() => ComponentCoreButton, { nullable: true })
  public explore_collection_button?: ComponentCoreButton
}
