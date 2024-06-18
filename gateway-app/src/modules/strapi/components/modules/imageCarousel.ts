import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  PaginationArg,
  UploadFileFiltersInput,
  UploadFileRelationResponseCollection,
} from '../../shared-types'

@ObjectType()
export class ComponentModulesImageCarousel {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public description?: string

  @Field(() => UploadFileRelationResponseCollection, { nullable: true })
  public images?: UploadFileRelationResponseCollection
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
