import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  TriplyRecordEntityResponse,
  TriplyRecordFiltersInput,
} from '../../../triplyRecord/triplyRecord.type'
import { PaginationArg, StringFilterInput, UploadFileEntityResponse } from '../../shared-types'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'

@ObjectType()
export class ComponentCoreCarouselImage {
  @Field(() => ID)
  public id: string

  @Field()
  public alt_text: string

  @Field({ nullable: true })
  public description?: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public image?: UploadFileEntityResponse

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triply_record?: TriplyRecordEntityResponse

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse
}

@InputType()
export class ComponentCoreCarouselItemFiltersInput {
  @Field(() => [ComponentCoreCarouselItemFiltersInput], { nullable: true })
  public and?: ComponentCoreCarouselItemFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public description?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public name?: StringFilterInput

  @Field(() => ComponentCoreCarouselItemFiltersInput, { nullable: true })
  public not?: ComponentCoreCarouselItemFiltersInput

  @Field(() => [ComponentCoreCarouselItemFiltersInput], { nullable: true })
  public or?: ComponentCoreCarouselItemFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public type?: StringFilterInput

  @Field(() => TriplyRecordFiltersInput, { nullable: true })
  public triply_record?: TriplyRecordFiltersInput

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse
}

@InputType()
export class ComponentModulesCarouselItemsArgs {
  @Field(() => ComponentCoreCarouselItemFiltersInput, { nullable: true })
  public filters?: ComponentCoreCarouselItemFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}
