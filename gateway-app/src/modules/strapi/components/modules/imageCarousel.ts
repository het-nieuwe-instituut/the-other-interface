import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PaginationArg, UploadFileFiltersInput } from '../../shared-types'
import { ComponentCoreImageCarouselItem } from '../core/imageCarouselItem'

@ObjectType()
export class ComponentModulesImageCarousel {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public description?: string

  @Field(() => [ComponentCoreImageCarouselItem])
  public items: ComponentCoreImageCarouselItem[]
}

@InputType()
export class ComponentModulesImageCarouselImagesArgs {
  @Field(() => UploadFileFiltersInput, { nullable: true })
  public filters?: UploadFileFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}
