import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentmodulescarousel_Type } from '../../../../generated/strapi-sdk'
import { ComponentCoreCarouselItem } from '../core/carouselItem'

registerEnumType(Enum_Componentmodulescarousel_Type, { name: 'Enum_Componentmodulescarousel_Type' })

@ObjectType()
export class ComponentModulesCarousel {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public buttonText?: string

  @Field({ nullable: true })
  public buttonUrl?: string

  @Field({ nullable: true })
  public description?: string

  @Field(() => [ComponentCoreCarouselItem], { nullable: true })
  public items?: ComponentCoreCarouselItem[]

  @Field({ nullable: true })
  public title?: string

  @Field(() => Enum_Componentmodulescarousel_Type, { nullable: true })
  public type?: Enum_Componentmodulescarousel_Type
}
