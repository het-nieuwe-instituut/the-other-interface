import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentmodulesgridmodule_Fieldtypes } from '../../../../generated/strapi-sdk'
import { StoryEntityResponse, StoryFiltersInput } from '../../../story/story.type'
import {
  TriplyRecordEntityResponse,
  TriplyRecordFiltersInput,
} from '../../../triplyRecord/triplyRecord.type'
import { ComponentCoreButtonFiltersInput } from './button'
import { PaginationArg, StringFilterInput, UploadFileEntityResponse } from '../../shared-types'

registerEnumType(Enum_Componentmodulesgridmodule_Fieldtypes, {
  name: 'Enum_Componentmodulesgridmodule_Fieldtypes',
})

@ObjectType()
export class ComponentCoreFeaturedFields {
  @Field(() => ID)
  public id: string

  @Field()
  public label: string

  @Field()
  public value: string
}

@ObjectType()
export class ComponentCoreFields {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public label?: string
}

@ObjectType()
export class ComponentCoreGridFeaturedFields {
  @Field(() => ID)
  public id: string

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse

  @Field({ nullable: true })
  public subtitle?: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public thumbnail?: UploadFileEntityResponse

  @Field({ nullable: true })
  public title?: string

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triplyRecord?: TriplyRecordEntityResponse
}

@ObjectType()
export class ComponentCoreItems {
  @Field({ nullable: true })
  public author?: string

  @Field(() => ID)
  public id: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public image?: UploadFileEntityResponse

  @Field({ nullable: true })
  public title?: string
}

@InputType()
export class ComponentCoreFeaturedFieldsFiltersInput {
  @Field(() => [ComponentCoreFeaturedFieldsFiltersInput], { nullable: true })
  public and?: ComponentCoreFeaturedFieldsFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public label?: StringFilterInput

  @Field(() => ComponentCoreFeaturedFieldsFiltersInput, { nullable: true })
  public not?: ComponentCoreFeaturedFieldsFiltersInput

  @Field(() => [ComponentCoreFeaturedFieldsFiltersInput], { nullable: true })
  public or?: ComponentCoreFeaturedFieldsFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public value?: StringFilterInput
}

@InputType()
export class ComponentCoreGridFeaturedFieldsFiltersInput {
  @Field(() => [ComponentCoreGridFeaturedFieldsFiltersInput], { nullable: true })
  public and?: ComponentCoreGridFeaturedFieldsFiltersInput[]

  @Field(() => ComponentCoreGridFeaturedFieldsFiltersInput, { nullable: true })
  public not?: ComponentCoreGridFeaturedFieldsFiltersInput

  @Field(() => [ComponentCoreGridFeaturedFieldsFiltersInput], { nullable: true })
  public or?: ComponentCoreGridFeaturedFieldsFiltersInput[]

  @Field(() => StoryFiltersInput, { nullable: true })
  public story?: StoryFiltersInput

  @Field(() => StringFilterInput, { nullable: true })
  public subtitle?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public title?: StringFilterInput

  @Field(() => TriplyRecordFiltersInput, { nullable: true })
  public triplyRecord?: TriplyRecordFiltersInput
}

@InputType()
export class ComponentModulesGridModuleButtonsArgs {
  @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
  public filters?: ComponentCoreButtonFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}

@InputType()
export class ComponentModulesGridModuleFeaturedFieldsArgs {
  @Field(() => ComponentCoreFeaturedFieldsFiltersInput, { nullable: true })
  public filters?: ComponentCoreFeaturedFieldsFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}

@InputType()
export class ComponentModulesGridModuleFieldsArgs {
  @Field(() => ComponentCoreGridFeaturedFieldsFiltersInput, { nullable: true })
  public filters?: ComponentCoreGridFeaturedFieldsFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}
