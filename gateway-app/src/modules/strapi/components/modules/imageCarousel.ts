import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  ComponentCoreModuleLayouts,
  PaginationArg,
  UploadFileFiltersInput,
  UploadFileRelationResponseCollection,
} from '../../shared-types'
import { ComponentCoreImageCarouselItem } from '../core/imageCarouselItem'

@ObjectType()
export class ComponentModulesImageCarousel {
  @Field(() => ID)
  public id: string

  @Field(() => ComponentCoreModuleLayouts)
  public imageCarouselModuleLayout: ComponentCoreModuleLayouts

  @Field({ nullable: true })
  public description?: string

  @Field(() => UploadFileRelationResponseCollection, { nullable: true })
  public images?: UploadFileRelationResponseCollection

  @Field(() => [ComponentCoreImageCarouselItem], { nullable: true })
  public items?: ComponentCoreImageCarouselItem[]
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
