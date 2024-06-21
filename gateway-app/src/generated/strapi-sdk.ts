/* eslint-disable */
// ******* GENERATED FILE - DO NOT EDIT ********
import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  HomepageComponentsDynamicZoneInput: any
  I18NLocaleCode: any
  JSON: any
  LandingpageComponentsDynamicZoneInput: any
  Long: any
  MenupageComponentsDynamicZoneInput: any
  StoryComponentsDynamicZoneInput: any
  Upload: any
}

export type Author = {
  __typename?: 'Author'
  createdAt?: Maybe<Scalars['DateTime']>
  firstName: Scalars['String']
  insertion?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type AuthorEntity = {
  __typename?: 'AuthorEntity'
  attributes?: Maybe<Author>
  id?: Maybe<Scalars['ID']>
}

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse'
  data?: Maybe<AuthorEntity>
}

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection'
  data: Array<AuthorEntity>
  meta: ResponseCollectionMeta
}

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  firstName?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  insertion?: InputMaybe<StringFilterInput>
  lastName?: InputMaybe<StringFilterInput>
  not?: InputMaybe<AuthorFiltersInput>
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type AuthorInput = {
  firstName?: InputMaybe<Scalars['String']>
  insertion?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  eqi?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  nei?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type ComponentCoreButton = {
  __typename?: 'ComponentCoreButton'
  id: Scalars['ID']
  text: Scalars['String']
  url: Scalars['String']
}

export type ComponentCoreButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreButtonFiltersInput>>>
  not?: InputMaybe<ComponentCoreButtonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreButtonFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type ComponentCoreButtonInput = {
  id?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type ComponentCoreCarouselImage = {
  __typename?: 'ComponentCoreCarouselImage'
  alt_text?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image: UploadFileEntityResponse
  story?: Maybe<StoryEntityResponse>
  title: Scalars['String']
  triply_record?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentCoreCarouselImageFiltersInput = {
  alt_text?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselImageFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCoreCarouselImageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselImageFiltersInput>>>
  story?: InputMaybe<StoryFiltersInput>
  title?: InputMaybe<StringFilterInput>
  triply_record?: InputMaybe<TriplyRecordFiltersInput>
}

export type ComponentCoreFeaturedFields = {
  __typename?: 'ComponentCoreFeaturedFields'
  id: Scalars['ID']
  label: Scalars['String']
  value: Scalars['String']
}

export type ComponentCoreFeaturedFieldsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreFeaturedFieldsFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCoreFeaturedFieldsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreFeaturedFieldsFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

export type ComponentCoreGridFeaturedFields = {
  __typename?: 'ComponentCoreGridFeaturedFields'
  id: Scalars['ID']
  story?: Maybe<StoryEntityResponse>
  subtitle?: Maybe<Scalars['String']>
  thumbnail?: Maybe<UploadFileEntityResponse>
  title: Scalars['String']
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentCoreGridFeaturedFieldsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreGridFeaturedFieldsFiltersInput>>>
  not?: InputMaybe<ComponentCoreGridFeaturedFieldsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreGridFeaturedFieldsFiltersInput>>>
  story?: InputMaybe<StoryFiltersInput>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  triplyRecord?: InputMaybe<TriplyRecordFiltersInput>
}

export type ComponentCoreMuxAudio = {
  __typename?: 'ComponentCoreMuxAudio'
  caption?: Maybe<Scalars['String']>
  id: Scalars['ID']
  muxAudioRelation?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
}

export type ComponentCoreMuxVideo = {
  __typename?: 'ComponentCoreMuxVideo'
  caption?: Maybe<Scalars['String']>
  id: Scalars['ID']
  muxVideoRelation?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
}

export type ComponentCorePublicationDate = {
  __typename?: 'ComponentCorePublicationDate'
  date?: Maybe<Scalars['Date']>
  displayType?: Maybe<Enum_Componentcorepublicationdate_Displaytype>
  id: Scalars['ID']
}

export type ComponentCorePublicationDateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCorePublicationDateFiltersInput>>>
  date?: InputMaybe<DateFilterInput>
  displayType?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCorePublicationDateFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCorePublicationDateFiltersInput>>>
}

export type ComponentCorePublicationDateInput = {
  date?: InputMaybe<Scalars['Date']>
  displayType?: InputMaybe<Enum_Componentcorepublicationdate_Displaytype>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentCoreStandAloneLink = {
  __typename?: 'ComponentCoreStandAloneLink'
  attachment?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']
  label: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type ComponentCoreTimeframe = {
  __typename?: 'ComponentCoreTimeframe'
  id: Scalars['ID']
  yearEnd?: Maybe<Scalars['Long']>
  yearStart?: Maybe<Scalars['Long']>
}

export type ComponentCoreTimeframeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTimeframeFiltersInput>>>
  not?: InputMaybe<ComponentCoreTimeframeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTimeframeFiltersInput>>>
  yearEnd?: InputMaybe<LongFilterInput>
  yearStart?: InputMaybe<LongFilterInput>
}

export type ComponentCoreTimeframeInput = {
  id?: InputMaybe<Scalars['ID']>
  yearEnd?: InputMaybe<Scalars['Long']>
  yearStart?: InputMaybe<Scalars['Long']>
}

export type ComponentModulesButtonsModule = {
  __typename?: 'ComponentModulesButtonsModule'
  buttons?: Maybe<Array<Maybe<ComponentCoreButton>>>
  id: Scalars['ID']
}

export type ComponentModulesButtonsModuleButtonsArgs = {
  filters?: InputMaybe<ComponentCoreButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesButtonsModuleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentModulesButtonsModuleFiltersInput>>>
  buttons?: InputMaybe<ComponentCoreButtonFiltersInput>
  not?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentModulesButtonsModuleFiltersInput>>>
}

export type ComponentModulesButtonsModuleInput = {
  buttons?: InputMaybe<Array<InputMaybe<ComponentCoreButtonInput>>>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentModulesCarousel = {
  __typename?: 'ComponentModulesCarousel'
  description?: Maybe<Scalars['String']>
  explore_collection_button?: Maybe<ComponentCoreButton>
  id: Scalars['ID']
  images: Array<Maybe<ComponentCoreCarouselImage>>
  title: Scalars['String']
  variant?: Maybe<Enum_Componentmodulescarousel_Variant>
}

export type ComponentModulesCarouselImagesArgs = {
  filters?: InputMaybe<ComponentCoreCarouselImageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesGridModule = {
  __typename?: 'ComponentModulesGridModule'
  buttons?: Maybe<Array<Maybe<ComponentCoreButton>>>
  description?: Maybe<Scalars['String']>
  featuredFields?: Maybe<Array<Maybe<ComponentCoreFeaturedFields>>>
  fieldTitlesAreInverted: Scalars['Boolean']
  fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
  fields?: Maybe<Array<Maybe<ComponentCoreGridFeaturedFields>>>
  id: Scalars['ID']
  pageSize: Scalars['Int']
  showMoreButtonTitle: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type ComponentModulesGridModuleButtonsArgs = {
  filters?: InputMaybe<ComponentCoreButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesGridModuleFeaturedFieldsArgs = {
  filters?: InputMaybe<ComponentCoreFeaturedFieldsFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesGridModuleFieldsArgs = {
  filters?: InputMaybe<ComponentCoreGridFeaturedFieldsFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesImage = {
  __typename?: 'ComponentModulesImage'
  alt_text?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image: UploadFileEntityResponse
  story?: Maybe<StoryEntityResponse>
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentModulesImageCarousel = {
  __typename?: 'ComponentModulesImageCarousel'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  images?: Maybe<UploadFileRelationResponseCollection>
}

export type ComponentModulesImageCarouselImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesPullquote = {
  __typename?: 'ComponentModulesPullquote'
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
}

export type ComponentModulesSideImageWithText = {
  __typename?: 'ComponentModulesSideImageWithText'
  id: Scalars['ID']
  image: UploadFileEntityResponse
  image_alt_text: Scalars['String']
  sideText: Scalars['String']
}

export type ComponentModulesSubtitle = {
  __typename?: 'ComponentModulesSubtitle'
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
}

export type ComponentModulesTextModule = {
  __typename?: 'ComponentModulesTextModule'
  Richtext?: Maybe<Scalars['String']>
  id: Scalars['ID']
}

export type ComponentModulesTitleModule = {
  __typename?: 'ComponentModulesTitleModule'
  Title?: Maybe<Scalars['String']>
  id: Scalars['ID']
}

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease'
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  releasedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction'
  contentType: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  entry?: Maybe<GenericMorph>
  release?: Maybe<ContentReleasesReleaseEntityResponse>
  type: Enum_Contentreleasesreleaseaction_Type
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity'
  attributes?: Maybe<ContentReleasesReleaseAction>
  id?: Maybe<Scalars['ID']>
}

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse'
  data?: Maybe<ContentReleasesReleaseActionEntity>
}

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection'
  data: Array<ContentReleasesReleaseActionEntity>
  meta: ResponseCollectionMeta
}

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>
  contentType?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']>
  release?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>
}

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection'
  data: Array<ContentReleasesReleaseActionEntity>
}

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity'
  attributes?: Maybe<ContentReleasesRelease>
  id?: Maybe<Scalars['ID']>
}

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse'
  data?: Maybe<ContentReleasesReleaseEntity>
}

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection'
  data: Array<ContentReleasesReleaseEntity>
  meta: ResponseCollectionMeta
}

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>
  releasedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  releasedAt?: InputMaybe<Scalars['DateTime']>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  contains?: InputMaybe<Scalars['Date']>
  containsi?: InputMaybe<Scalars['Date']>
  endsWith?: InputMaybe<Scalars['Date']>
  eq?: InputMaybe<Scalars['Date']>
  eqi?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  nei?: InputMaybe<Scalars['Date']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']>
  notContainsi?: InputMaybe<Scalars['Date']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  startsWith?: InputMaybe<Scalars['Date']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  eqi?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  nei?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export enum Enum_Componentcorepublicationdate_Displaytype {
  Date = 'Date',
  Year = 'Year',
}

export enum Enum_Componentmodulescarousel_Variant {
  FourUp = 'four_up',
  ThreeUp = 'three_up',
  TwoUp = 'two_up',
}

export enum Enum_Componentmodulesgridmodule_Fieldtypes {
  Stories = 'Stories',
  Triply = 'Triply',
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish',
}

export enum Enum_Triplyrecord_Type {
  Archive = 'Archive',
  Media = 'Media',
  Object = 'Object',
  People = 'People',
  Publication = 'Publication',
}

export type Error = {
  __typename?: 'Error'
  code: Scalars['String']
  message?: Maybe<Scalars['String']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  eqi?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  nei?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type GenericMorph =
  | Author
  | ComponentCoreButton
  | ComponentCoreCarouselImage
  | ComponentCoreFeaturedFields
  | ComponentCoreGridFeaturedFields
  | ComponentCoreMuxAudio
  | ComponentCoreMuxVideo
  | ComponentCorePublicationDate
  | ComponentCoreStandAloneLink
  | ComponentCoreTimeframe
  | ComponentModulesButtonsModule
  | ComponentModulesCarousel
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSideImageWithText
  | ComponentModulesSubtitle
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | ContentReleasesRelease
  | ContentReleasesReleaseAction
  | Homepage
  | I18NLocale
  | Landingpage
  | Location
  | Menupage
  | MuxVideoUploaderMuxAsset
  | Story
  | Theme
  | TriplyRecord
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Homepage = {
  __typename?: 'Homepage'
  Title?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<HomepageComponentsDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  highlightedThemes?: Maybe<ThemeRelationResponseCollection>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<HomepageRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type HomepageHighlightedThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type HomepageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type HomepageComponentsDynamicZone =
  | ComponentModulesButtonsModule
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | Error

export type HomepageEntity = {
  __typename?: 'HomepageEntity'
  attributes?: Maybe<Homepage>
  id?: Maybe<Scalars['ID']>
}

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse'
  data?: Maybe<HomepageEntity>
}

export type HomepageInput = {
  Title?: InputMaybe<Scalars['String']>
  components?: InputMaybe<Array<Scalars['HomepageComponentsDynamicZoneInput']>>
  description?: InputMaybe<Scalars['String']>
  highlightedThemes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection'
  data: Array<HomepageEntity>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  eqi?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  nei?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  eqi?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  nei?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  eqi?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  nei?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Landingpage = {
  __typename?: 'Landingpage'
  Description?: Maybe<Scalars['String']>
  Title?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<LandingpageComponentsDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<LandingpageRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LandingpageLocalizationsArgs = {
  filters?: InputMaybe<LandingpageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type LandingpageComponentsDynamicZone =
  | ComponentModulesButtonsModule
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | Error

export type LandingpageEntity = {
  __typename?: 'LandingpageEntity'
  attributes?: Maybe<Landingpage>
  id?: Maybe<Scalars['ID']>
}

export type LandingpageEntityResponse = {
  __typename?: 'LandingpageEntityResponse'
  data?: Maybe<LandingpageEntity>
}

export type LandingpageEntityResponseCollection = {
  __typename?: 'LandingpageEntityResponseCollection'
  data: Array<LandingpageEntity>
  meta: ResponseCollectionMeta
}

export type LandingpageFiltersInput = {
  Description?: InputMaybe<StringFilterInput>
  Title?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<LandingpageFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<LandingpageFiltersInput>
  not?: InputMaybe<LandingpageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<LandingpageFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type LandingpageInput = {
  Description?: InputMaybe<Scalars['String']>
  Title?: InputMaybe<Scalars['String']>
  components?: InputMaybe<Array<Scalars['LandingpageComponentsDynamicZoneInput']>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type LandingpageRelationResponseCollection = {
  __typename?: 'LandingpageRelationResponseCollection'
  data: Array<LandingpageEntity>
}

export type Location = {
  __typename?: 'Location'
  city?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<LocationRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  stories?: Maybe<StoryRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LocationLocalizationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type LocationStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type LocationEntity = {
  __typename?: 'LocationEntity'
  attributes?: Maybe<Location>
  id?: Maybe<Scalars['ID']>
}

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse'
  data?: Maybe<LocationEntity>
}

export type LocationEntityResponseCollection = {
  __typename?: 'LocationEntityResponseCollection'
  data: Array<LocationEntity>
  meta: ResponseCollectionMeta
}

export type LocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>
  city?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<LocationFiltersInput>
  not?: InputMaybe<LocationFiltersInput>
  or?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  stories?: InputMaybe<StoryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type LocationInput = {
  city?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  stories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type LocationRelationResponseCollection = {
  __typename?: 'LocationRelationResponseCollection'
  data: Array<LocationEntity>
}

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  contains?: InputMaybe<Scalars['Long']>
  containsi?: InputMaybe<Scalars['Long']>
  endsWith?: InputMaybe<Scalars['Long']>
  eq?: InputMaybe<Scalars['Long']>
  eqi?: InputMaybe<Scalars['Long']>
  gt?: InputMaybe<Scalars['Long']>
  gte?: InputMaybe<Scalars['Long']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  lt?: InputMaybe<Scalars['Long']>
  lte?: InputMaybe<Scalars['Long']>
  ne?: InputMaybe<Scalars['Long']>
  nei?: InputMaybe<Scalars['Long']>
  not?: InputMaybe<LongFilterInput>
  notContains?: InputMaybe<Scalars['Long']>
  notContainsi?: InputMaybe<Scalars['Long']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>
  startsWith?: InputMaybe<Scalars['Long']>
}

export type Menupage = {
  __typename?: 'Menupage'
  Title?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<MenupageComponentsDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<MenupageRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type MenupageLocalizationsArgs = {
  filters?: InputMaybe<MenupageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MenupageComponentsDynamicZone =
  | ComponentModulesButtonsModule
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | Error

export type MenupageEntity = {
  __typename?: 'MenupageEntity'
  attributes?: Maybe<Menupage>
  id?: Maybe<Scalars['ID']>
}

export type MenupageEntityResponse = {
  __typename?: 'MenupageEntityResponse'
  data?: Maybe<MenupageEntity>
}

export type MenupageEntityResponseCollection = {
  __typename?: 'MenupageEntityResponseCollection'
  data: Array<MenupageEntity>
  meta: ResponseCollectionMeta
}

export type MenupageFiltersInput = {
  Title?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<MenupageFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<MenupageFiltersInput>
  not?: InputMaybe<MenupageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<MenupageFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type MenupageInput = {
  Title?: InputMaybe<Scalars['String']>
  components?: InputMaybe<Array<Scalars['MenupageComponentsDynamicZoneInput']>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
}

export type MenupageRelationResponseCollection = {
  __typename?: 'MenupageRelationResponseCollection'
  data: Array<MenupageEntity>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createAuthor?: Maybe<AuthorEntityResponse>
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  createHomepageLocalization?: Maybe<HomepageEntityResponse>
  createLandingpage?: Maybe<LandingpageEntityResponse>
  createLandingpageLocalization?: Maybe<LandingpageEntityResponse>
  createLocation?: Maybe<LocationEntityResponse>
  createLocationLocalization?: Maybe<LocationEntityResponse>
  createMenupage?: Maybe<MenupageEntityResponse>
  createMenupageLocalization?: Maybe<MenupageEntityResponse>
  createMuxVideoUploaderMuxAsset?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
  createStory?: Maybe<StoryEntityResponse>
  createStoryLocalization?: Maybe<StoryEntityResponse>
  createTheme?: Maybe<ThemeEntityResponse>
  createThemeLocalization?: Maybe<ThemeEntityResponse>
  createTriplyRecord?: Maybe<TriplyRecordEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteAuthor?: Maybe<AuthorEntityResponse>
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  deleteHomepage?: Maybe<HomepageEntityResponse>
  deleteLandingpage?: Maybe<LandingpageEntityResponse>
  deleteLocation?: Maybe<LocationEntityResponse>
  deleteMenupage?: Maybe<MenupageEntityResponse>
  deleteMuxVideoUploaderMuxAsset?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
  deleteStory?: Maybe<StoryEntityResponse>
  deleteTheme?: Maybe<ThemeEntityResponse>
  deleteTriplyRecord?: Maybe<TriplyRecordEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateAuthor?: Maybe<AuthorEntityResponse>
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateHomepage?: Maybe<HomepageEntityResponse>
  updateLandingpage?: Maybe<LandingpageEntityResponse>
  updateLocation?: Maybe<LocationEntityResponse>
  updateMenupage?: Maybe<MenupageEntityResponse>
  updateMuxVideoUploaderMuxAsset?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
  updateStory?: Maybe<StoryEntityResponse>
  updateTheme?: Maybe<ThemeEntityResponse>
  updateTriplyRecord?: Maybe<TriplyRecordEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationCreateAuthorArgs = {
  data: AuthorInput
}

export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput
}

export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput
}

export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateLandingpageArgs = {
  data: LandingpageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateLandingpageLocalizationArgs = {
  data?: InputMaybe<LandingpageInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateLocationArgs = {
  data: LocationInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateLocationLocalizationArgs = {
  data?: InputMaybe<LocationInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateMenupageArgs = {
  data: MenupageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateMenupageLocalizationArgs = {
  data?: InputMaybe<MenupageInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateMuxVideoUploaderMuxAssetArgs = {
  data: MuxVideoUploaderMuxAssetInput
}

export type MutationCreateStoryArgs = {
  data: StoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateStoryLocalizationArgs = {
  data?: InputMaybe<StoryInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateThemeArgs = {
  data: ThemeInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateThemeLocalizationArgs = {
  data?: InputMaybe<ThemeInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateTriplyRecordArgs = {
  data: TriplyRecordInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']
}

export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']
}

export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']
}

export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteLandingpageArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteLocationArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteMenupageArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteMuxVideoUploaderMuxAssetArgs = {
  id: Scalars['ID']
}

export type MutationDeleteStoryArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteThemeArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteTriplyRecordArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateAuthorArgs = {
  data: AuthorInput
  id: Scalars['ID']
}

export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput
  id: Scalars['ID']
}

export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput
  id: Scalars['ID']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateHomepageArgs = {
  data: HomepageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateLandingpageArgs = {
  data: LandingpageInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateLocationArgs = {
  data: LocationInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateMenupageArgs = {
  data: MenupageInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateMuxVideoUploaderMuxAssetArgs = {
  data: MuxVideoUploaderMuxAssetInput
  id: Scalars['ID']
}

export type MutationUpdateStoryArgs = {
  data: StoryInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateThemeArgs = {
  data: ThemeInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateTriplyRecordArgs = {
  data: TriplyRecordInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MuxVideoUploaderMuxAsset = {
  __typename?: 'MuxVideoUploaderMuxAsset'
  aspect_ratio?: Maybe<Scalars['String']>
  asset_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  duration?: Maybe<Scalars['Float']>
  error_message?: Maybe<Scalars['String']>
  isReady?: Maybe<Scalars['Boolean']>
  playback_id?: Maybe<Scalars['String']>
  signed: Scalars['Boolean']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  upload_id?: Maybe<Scalars['String']>
}

export type MuxVideoUploaderMuxAssetEntity = {
  __typename?: 'MuxVideoUploaderMuxAssetEntity'
  attributes?: Maybe<MuxVideoUploaderMuxAsset>
  id?: Maybe<Scalars['ID']>
}

export type MuxVideoUploaderMuxAssetEntityResponse = {
  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
  data?: Maybe<MuxVideoUploaderMuxAssetEntity>
}

export type MuxVideoUploaderMuxAssetEntityResponseCollection = {
  __typename?: 'MuxVideoUploaderMuxAssetEntityResponseCollection'
  data: Array<MuxVideoUploaderMuxAssetEntity>
  meta: ResponseCollectionMeta
}

export type MuxVideoUploaderMuxAssetFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MuxVideoUploaderMuxAssetFiltersInput>>>
  aspect_ratio?: InputMaybe<StringFilterInput>
  asset_id?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  duration?: InputMaybe<FloatFilterInput>
  error_message?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  isReady?: InputMaybe<BooleanFilterInput>
  not?: InputMaybe<MuxVideoUploaderMuxAssetFiltersInput>
  or?: InputMaybe<Array<InputMaybe<MuxVideoUploaderMuxAssetFiltersInput>>>
  playback_id?: InputMaybe<StringFilterInput>
  signed?: InputMaybe<BooleanFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  upload_id?: InputMaybe<StringFilterInput>
}

export type MuxVideoUploaderMuxAssetInput = {
  aspect_ratio?: InputMaybe<Scalars['String']>
  asset_id?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Float']>
  error_message?: InputMaybe<Scalars['String']>
  isReady?: InputMaybe<Scalars['Boolean']>
  playback_id?: InputMaybe<Scalars['String']>
  signed?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
  upload_id?: InputMaybe<Scalars['String']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  StoryPostBySlug?: Maybe<StoryEntityResponse>
  author?: Maybe<AuthorEntityResponse>
  authors?: Maybe<AuthorEntityResponseCollection>
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>
  homepage?: Maybe<HomepageEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  landingpage?: Maybe<LandingpageEntityResponse>
  landingpages?: Maybe<LandingpageEntityResponseCollection>
  location?: Maybe<LocationEntityResponse>
  locations?: Maybe<LocationEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  menupage?: Maybe<MenupageEntityResponse>
  menupages?: Maybe<MenupageEntityResponseCollection>
  muxVideoUploaderMuxAsset?: Maybe<MuxVideoUploaderMuxAssetEntityResponse>
  muxVideoUploaderMuxAssets?: Maybe<MuxVideoUploaderMuxAssetEntityResponseCollection>
  stories?: Maybe<StoryEntityResponseCollection>
  story?: Maybe<StoryEntityResponse>
  theme?: Maybe<ThemeEntityResponse>
  themes?: Maybe<ThemeEntityResponseCollection>
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
  triplyRecords?: Maybe<TriplyRecordEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryStoryPostBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  slug?: InputMaybe<Scalars['String']>
}

export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryLandingpageArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryLandingpagesArgs = {
  filters?: InputMaybe<LandingpageFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryMenupageArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryMenupagesArgs = {
  filters?: InputMaybe<MenupageFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryMuxVideoUploaderMuxAssetArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryMuxVideoUploaderMuxAssetsArgs = {
  filters?: InputMaybe<MuxVideoUploaderMuxAssetFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryStoryArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryThemeArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryTriplyRecordArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryTriplyRecordsArgs = {
  filters?: InputMaybe<TriplyRecordFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Story = {
  __typename?: 'Story'
  author?: Maybe<AuthorEntityResponse>
  child_stories?: Maybe<StoryRelationResponseCollection>
  components?: Maybe<Array<Maybe<StoryComponentsDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<StoryRelationResponseCollection>
  locations?: Maybe<LocationRelationResponseCollection>
  parent_story?: Maybe<StoryEntityResponse>
  publicationDate?: Maybe<ComponentCorePublicationDate>
  publishedAt?: Maybe<Scalars['DateTime']>
  shortDescription: Scalars['String']
  slug: Scalars['String']
  storyLinks?: Maybe<ComponentModulesButtonsModule>
  themes?: Maybe<ThemeRelationResponseCollection>
  timeframe?: Maybe<ComponentCoreTimeframe>
  title: Scalars['String']
  triplyRecords?: Maybe<TriplyRecordRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StoryChild_StoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryLocalizationsArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryTriplyRecordsArgs = {
  filters?: InputMaybe<TriplyRecordFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryComponentsDynamicZone =
  | ComponentCoreMuxAudio
  | ComponentCoreMuxVideo
  | ComponentCoreStandAloneLink
  | ComponentModulesButtonsModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSideImageWithText
  | ComponentModulesSubtitle
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | Error

export type StoryEntity = {
  __typename?: 'StoryEntity'
  attributes?: Maybe<Story>
  id?: Maybe<Scalars['ID']>
}

export type StoryEntityResponse = {
  __typename?: 'StoryEntityResponse'
  data?: Maybe<StoryEntity>
}

export type StoryEntityResponseCollection = {
  __typename?: 'StoryEntityResponseCollection'
  data: Array<StoryEntity>
  meta: ResponseCollectionMeta
}

export type StoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StoryFiltersInput>>>
  author?: InputMaybe<AuthorFiltersInput>
  child_stories?: InputMaybe<StoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<StoryFiltersInput>
  locations?: InputMaybe<LocationFiltersInput>
  not?: InputMaybe<StoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<StoryFiltersInput>>>
  parent_story?: InputMaybe<StoryFiltersInput>
  publicationDate?: InputMaybe<ComponentCorePublicationDateFiltersInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  shortDescription?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  storyLinks?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>
  themes?: InputMaybe<ThemeFiltersInput>
  timeframe?: InputMaybe<ComponentCoreTimeframeFiltersInput>
  title?: InputMaybe<StringFilterInput>
  triplyRecords?: InputMaybe<TriplyRecordFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type StoryInput = {
  author?: InputMaybe<Scalars['ID']>
  child_stories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  components?: InputMaybe<Array<Scalars['StoryComponentsDynamicZoneInput']>>
  description?: InputMaybe<Scalars['String']>
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  parent_story?: InputMaybe<Scalars['ID']>
  publicationDate?: InputMaybe<ComponentCorePublicationDateInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  shortDescription?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  storyLinks?: InputMaybe<ComponentModulesButtonsModuleInput>
  themes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  timeframe?: InputMaybe<ComponentCoreTimeframeInput>
  title?: InputMaybe<Scalars['String']>
  triplyRecords?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type StoryRelationResponseCollection = {
  __typename?: 'StoryRelationResponseCollection'
  data: Array<StoryEntity>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  eqi?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  nei?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Theme = {
  __typename?: 'Theme'
  createdAt?: Maybe<Scalars['DateTime']>
  highlightedStories?: Maybe<StoryRelationResponseCollection>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ThemeRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  stories?: Maybe<StoryRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ThemeHighlightedStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ThemeLocalizationsArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ThemeStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ThemeEntity = {
  __typename?: 'ThemeEntity'
  attributes?: Maybe<Theme>
  id?: Maybe<Scalars['ID']>
}

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse'
  data?: Maybe<ThemeEntity>
}

export type ThemeEntityResponseCollection = {
  __typename?: 'ThemeEntityResponseCollection'
  data: Array<ThemeEntity>
  meta: ResponseCollectionMeta
}

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  highlightedStories?: InputMaybe<StoryFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ThemeFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ThemeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  stories?: InputMaybe<StoryFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ThemeInput = {
  highlightedStories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  stories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type ThemeRelationResponseCollection = {
  __typename?: 'ThemeRelationResponseCollection'
  data: Array<ThemeEntity>
}

export type TriplyRecord = {
  __typename?: 'TriplyRecord'
  createdAt?: Maybe<Scalars['DateTime']>
  label?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  recordId: Scalars['String']
  stories?: Maybe<StoryRelationResponseCollection>
  subject_collectionHighlights?: Maybe<Scalars['Boolean']>
  type: Enum_Triplyrecord_Type
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TriplyRecordStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type TriplyRecordEntity = {
  __typename?: 'TriplyRecordEntity'
  attributes?: Maybe<TriplyRecord>
  id?: Maybe<Scalars['ID']>
}

export type TriplyRecordEntityResponse = {
  __typename?: 'TriplyRecordEntityResponse'
  data?: Maybe<TriplyRecordEntity>
}

export type TriplyRecordEntityResponseCollection = {
  __typename?: 'TriplyRecordEntityResponseCollection'
  data: Array<TriplyRecordEntity>
  meta: ResponseCollectionMeta
}

export type TriplyRecordFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TriplyRecordFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<TriplyRecordFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TriplyRecordFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  recordId?: InputMaybe<StringFilterInput>
  stories?: InputMaybe<StoryFiltersInput>
  subject_collectionHighlights?: InputMaybe<BooleanFilterInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TriplyRecordInput = {
  label?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  recordId?: InputMaybe<Scalars['String']>
  stories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  subject_collectionHighlights?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Enum_Triplyrecord_Type>
}

export type TriplyRecordRelationResponseCollection = {
  __typename?: 'TriplyRecordRelationResponseCollection'
  data: Array<TriplyRecordEntity>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  folder?: InputMaybe<Scalars['ID']>
  folderPath?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']
  pathId: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  path?: InputMaybe<Scalars['String']>
  pathId?: InputMaybe<Scalars['Int']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type AuthorQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type AuthorQuery = {
  __typename?: 'Query'
  author?: {
    __typename?: 'AuthorEntityResponse'
    data?: {
      __typename?: 'AuthorEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Author'
        firstName: string
        insertion?: string | null
        lastName: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
      } | null
    } | null
  } | null
}

export type AuthorsQueryVariables = Exact<{
  filters?: InputMaybe<AuthorFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
}>

export type AuthorsQuery = {
  __typename?: 'Query'
  authors?: {
    __typename?: 'AuthorEntityResponseCollection'
    data: Array<{
      __typename?: 'AuthorEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Author'
        firstName: string
        insertion?: string | null
        lastName: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type AuthorFragmentFragment = {
  __typename?: 'AuthorEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Author'
    firstName: string
    insertion?: string | null
    lastName: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
  } | null
}

export type HomepageFragmentFragment = {
  __typename: 'Homepage'
  Title?: string | null
  createdAt?: any | null
  locale?: string | null
  publishedAt?: any | null
  updatedAt?: any | null
  description?: string | null
  components?: Array<
    | {
        __typename: 'ComponentModulesButtonsModule'
        id: string
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          text: string
          url: string
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesGridModule'
        id: string
        description?: string | null
        pageSize: number
        title?: string | null
        showMoreButtonTitle: string
        fieldTitlesAreInverted: boolean
        fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          text: string
          url: string
        } | null> | null
        featuredFields?: Array<{
          __typename?: 'ComponentCoreFeaturedFields'
          id: string
          label: string
          value: string
        } | null> | null
        fields?: Array<{
          __typename?: 'ComponentCoreGridFeaturedFields'
          id: string
          subtitle?: string | null
          title: string
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: { __typename?: 'Story'; slug: string } | null
            } | null
          } | null
          thumbnail?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          } | null
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesImage'
        alt_text?: string | null
        caption?: string | null
        id: string
        image: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              hash: string
              mime: string
              name: string
              provider: string
              size: number
              url: string
              alternativeText?: string | null
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              height?: number | null
              previewUrl?: string | null
              provider_metadata?: any | null
              updatedAt?: any | null
              width?: number | null
            } | null
          } | null
        }
        triplyRecord?: {
          __typename?: 'TriplyRecordEntityResponse'
          data?: {
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          } | null
        } | null
        story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'ComponentModulesImageCarousel'
        id: string
        description?: string | null
        images?: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              hash: string
              mime: string
              name: string
              provider: string
              size: number
              url: string
              alternativeText?: string | null
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              height?: number | null
              previewUrl?: string | null
              provider_metadata?: any | null
              updatedAt?: any | null
              width?: number | null
            } | null
          }>
        } | null
      }
    | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
    | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
    | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
    | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
    | { __typename?: 'Error'; code: string; message?: string | null }
    | null
  > | null
}

export type HomepageQueryVariables = Exact<{
  publicationState?: InputMaybe<PublicationState>
  locale: Scalars['I18NLocaleCode']
}>

export type HomepageQuery = {
  __typename?: 'Query'
  homepage?: {
    __typename?: 'HomepageEntityResponse'
    data?: {
      __typename?: 'HomepageEntity'
      id?: string | null
      attributes?: {
        __typename: 'Homepage'
        Title?: string | null
        createdAt?: any | null
        locale?: string | null
        publishedAt?: any | null
        updatedAt?: any | null
        description?: string | null
        localizations?: {
          __typename?: 'HomepageRelationResponseCollection'
          data: Array<{
            __typename?: 'HomepageEntity'
            id?: string | null
            attributes?: {
              __typename: 'Homepage'
              Title?: string | null
              createdAt?: any | null
              locale?: string | null
              publishedAt?: any | null
              updatedAt?: any | null
              description?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesGridModule'
                    id: string
                    description?: string | null
                    pageSize: number
                    title?: string | null
                    showMoreButtonTitle: string
                    fieldTitlesAreInverted: boolean
                    fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                    featuredFields?: Array<{
                      __typename?: 'ComponentCoreFeaturedFields'
                      id: string
                      label: string
                      value: string
                    } | null> | null
                    fields?: Array<{
                      __typename?: 'ComponentCoreGridFeaturedFields'
                      id: string
                      subtitle?: string | null
                      title: string
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                      thumbnail?: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      } | null
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename?: 'Error'; code: string; message?: string | null }
                | null
              > | null
            } | null
          }>
        } | null
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesGridModule'
              id: string
              description?: string | null
              pageSize: number
              title?: string | null
              showMoreButtonTitle: string
              fieldTitlesAreInverted: boolean
              fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
              featuredFields?: Array<{
                __typename?: 'ComponentCoreFeaturedFields'
                id: string
                label: string
                value: string
              } | null> | null
              fields?: Array<{
                __typename?: 'ComponentCoreGridFeaturedFields'
                id: string
                subtitle?: string | null
                title: string
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
                thumbnail?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename?: 'Error'; code: string; message?: string | null }
          | null
        > | null
      } | null
    } | null
  } | null
}

export type HighlightedHomepageThemesQueryVariables = Exact<{
  publicationState?: InputMaybe<PublicationState>
  locale: Scalars['I18NLocaleCode']
  localeStr: Scalars['String']
  highlightedThemesPaginationArgs?: InputMaybe<PaginationArg>
}>

export type HighlightedHomepageThemesQuery = {
  __typename?: 'Query'
  homepage?: {
    __typename?: 'HomepageEntityResponse'
    data?: {
      __typename?: 'HomepageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Homepage'
        highlightedThemes?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{
            __typename?: 'ThemeEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Theme'
              name: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    components?: Array<
                      | {
                          __typename: 'ComponentCoreMuxAudio'
                          id: string
                          caption?: string | null
                          muxAudioRelation?: {
                            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                            data?: {
                              __typename?: 'MuxVideoUploaderMuxAssetEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'MuxVideoUploaderMuxAsset'
                                title: string
                                upload_id?: string | null
                                asset_id?: string | null
                                playback_id?: string | null
                                signed: boolean
                                error_message?: string | null
                                isReady?: boolean | null
                                duration?: number | null
                                aspect_ratio?: string | null
                                createdAt?: any | null
                                updatedAt?: any | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentCoreMuxVideo'
                          id: string
                          caption?: string | null
                          muxVideoRelation?: {
                            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                            data?: {
                              __typename?: 'MuxVideoUploaderMuxAssetEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'MuxVideoUploaderMuxAsset'
                                title: string
                                upload_id?: string | null
                                asset_id?: string | null
                                playback_id?: string | null
                                signed: boolean
                                error_message?: string | null
                                isReady?: boolean | null
                                duration?: number | null
                                aspect_ratio?: string | null
                                createdAt?: any | null
                                updatedAt?: any | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentCoreStandAloneLink'
                          id: string
                          label: string
                          url?: string | null
                          attachment?: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentModulesImageCarousel'
                          id: string
                          description?: string | null
                          images?: {
                            __typename?: 'UploadFileRelationResponseCollection'
                            data: Array<{
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            }>
                          } | null
                        }
                      | {
                          __typename: 'ComponentModulesPullquote'
                          id: string
                          text?: string | null
                        }
                      | {
                          __typename: 'ComponentModulesSideImageWithText'
                          id: string
                          sideText: string
                          image_alt_text: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                        }
                      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                      | {
                          __typename: 'ComponentModulesTextModule'
                          Richtext?: string | null
                          id: string
                        }
                      | {
                          __typename: 'ComponentModulesTitleModule'
                          Title?: string | null
                          id: string
                        }
                      | { __typename: 'Error'; code: string; message?: string | null }
                      | null
                    > | null
                    storyLinks?: {
                      __typename: 'ComponentModulesButtonsModule'
                      id: string
                      buttons?: Array<{
                        __typename?: 'ComponentCoreButton'
                        id: string
                        text: string
                        url: string
                      } | null> | null
                    } | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                    timeframe?: {
                      __typename?: 'ComponentCoreTimeframe'
                      id: string
                      yearStart?: any | null
                      yearEnd?: any | null
                    } | null
                    locations?: {
                      __typename?: 'LocationRelationResponseCollection'
                      data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
                    } | null
                    publicationDate?: {
                      __typename?: 'ComponentCorePublicationDate'
                      id: string
                      date?: any | null
                      displayType?: Enum_Componentcorepublicationdate_Displaytype | null
                    } | null
                    triplyRecords?: {
                      __typename?: 'TriplyRecordRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      }>
                    } | null
                    localizations?: {
                      __typename?: 'StoryRelationResponseCollection'
                      data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
                    } | null
                    parent_story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          components?: Array<
                            | { __typename: 'ComponentCoreMuxAudio' }
                            | { __typename: 'ComponentCoreMuxVideo' }
                            | { __typename: 'ComponentCoreStandAloneLink' }
                            | { __typename: 'ComponentModulesButtonsModule' }
                            | {
                                __typename: 'ComponentModulesImage'
                                alt_text?: string | null
                                caption?: string | null
                                id: string
                                image: {
                                  __typename?: 'UploadFileEntityResponse'
                                  data?: {
                                    __typename?: 'UploadFileEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'UploadFile'
                                      hash: string
                                      mime: string
                                      name: string
                                      provider: string
                                      size: number
                                      url: string
                                      alternativeText?: string | null
                                      caption?: string | null
                                      createdAt?: any | null
                                      ext?: string | null
                                      formats?: any | null
                                      height?: number | null
                                      previewUrl?: string | null
                                      provider_metadata?: any | null
                                      updatedAt?: any | null
                                      width?: number | null
                                    } | null
                                  } | null
                                }
                                triplyRecord?: {
                                  __typename?: 'TriplyRecordEntityResponse'
                                  data?: {
                                    __typename?: 'TriplyRecordEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'TriplyRecord'
                                      recordId: string
                                      type: Enum_Triplyrecord_Type
                                    } | null
                                  } | null
                                } | null
                                story?: {
                                  __typename?: 'StoryEntityResponse'
                                  data?: {
                                    __typename?: 'StoryEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Story'
                                      title: string
                                      slug: string
                                      description?: string | null
                                      shortDescription: string
                                      createdAt?: any | null
                                      updatedAt?: any | null
                                      publishedAt?: any | null
                                      locale?: string | null
                                      author?: {
                                        __typename?: 'AuthorEntityResponse'
                                        data?: {
                                          __typename?: 'AuthorEntity'
                                          id?: string | null
                                          attributes?: {
                                            __typename?: 'Author'
                                            firstName: string
                                            lastName: string
                                            insertion?: string | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              }
                            | { __typename: 'ComponentModulesImageCarousel' }
                            | { __typename: 'ComponentModulesPullquote' }
                            | { __typename: 'ComponentModulesSideImageWithText' }
                            | { __typename: 'ComponentModulesSubtitle' }
                            | { __typename: 'ComponentModulesTextModule' }
                            | { __typename: 'ComponentModulesTitleModule' }
                            | { __typename: 'Error' }
                            | null
                          > | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                    child_stories?: {
                      __typename?: 'StoryRelationResponseCollection'
                      data: Array<{
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          components?: Array<
                            | { __typename: 'ComponentCoreMuxAudio' }
                            | { __typename: 'ComponentCoreMuxVideo' }
                            | { __typename: 'ComponentCoreStandAloneLink' }
                            | { __typename: 'ComponentModulesButtonsModule' }
                            | {
                                __typename: 'ComponentModulesImage'
                                alt_text?: string | null
                                caption?: string | null
                                id: string
                                image: {
                                  __typename?: 'UploadFileEntityResponse'
                                  data?: {
                                    __typename?: 'UploadFileEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'UploadFile'
                                      hash: string
                                      mime: string
                                      name: string
                                      provider: string
                                      size: number
                                      url: string
                                      alternativeText?: string | null
                                      caption?: string | null
                                      createdAt?: any | null
                                      ext?: string | null
                                      formats?: any | null
                                      height?: number | null
                                      previewUrl?: string | null
                                      provider_metadata?: any | null
                                      updatedAt?: any | null
                                      width?: number | null
                                    } | null
                                  } | null
                                }
                                triplyRecord?: {
                                  __typename?: 'TriplyRecordEntityResponse'
                                  data?: {
                                    __typename?: 'TriplyRecordEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'TriplyRecord'
                                      recordId: string
                                      type: Enum_Triplyrecord_Type
                                    } | null
                                  } | null
                                } | null
                                story?: {
                                  __typename?: 'StoryEntityResponse'
                                  data?: {
                                    __typename?: 'StoryEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Story'
                                      title: string
                                      slug: string
                                      description?: string | null
                                      shortDescription: string
                                      createdAt?: any | null
                                      updatedAt?: any | null
                                      publishedAt?: any | null
                                      locale?: string | null
                                      author?: {
                                        __typename?: 'AuthorEntityResponse'
                                        data?: {
                                          __typename?: 'AuthorEntity'
                                          id?: string | null
                                          attributes?: {
                                            __typename?: 'Author'
                                            firstName: string
                                            lastName: string
                                            insertion?: string | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              }
                            | { __typename: 'ComponentModulesImageCarousel' }
                            | { __typename: 'ComponentModulesPullquote' }
                            | { __typename: 'ComponentModulesSideImageWithText' }
                            | { __typename: 'ComponentModulesSubtitle' }
                            | { __typename: 'ComponentModulesTextModule' }
                            | { __typename: 'ComponentModulesTitleModule' }
                            | { __typename: 'Error' }
                            | null
                          > | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      }>
                    } | null
                  } | null
                }>
              } | null
              highlightedStories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    components?: Array<
                      | {
                          __typename: 'ComponentCoreMuxAudio'
                          id: string
                          caption?: string | null
                          muxAudioRelation?: {
                            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                            data?: {
                              __typename?: 'MuxVideoUploaderMuxAssetEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'MuxVideoUploaderMuxAsset'
                                title: string
                                upload_id?: string | null
                                asset_id?: string | null
                                playback_id?: string | null
                                signed: boolean
                                error_message?: string | null
                                isReady?: boolean | null
                                duration?: number | null
                                aspect_ratio?: string | null
                                createdAt?: any | null
                                updatedAt?: any | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentCoreMuxVideo'
                          id: string
                          caption?: string | null
                          muxVideoRelation?: {
                            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                            data?: {
                              __typename?: 'MuxVideoUploaderMuxAssetEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'MuxVideoUploaderMuxAsset'
                                title: string
                                upload_id?: string | null
                                asset_id?: string | null
                                playback_id?: string | null
                                signed: boolean
                                error_message?: string | null
                                isReady?: boolean | null
                                duration?: number | null
                                aspect_ratio?: string | null
                                createdAt?: any | null
                                updatedAt?: any | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentCoreStandAloneLink'
                          id: string
                          label: string
                          url?: string | null
                          attachment?: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | {
                          __typename: 'ComponentModulesImageCarousel'
                          id: string
                          description?: string | null
                          images?: {
                            __typename?: 'UploadFileRelationResponseCollection'
                            data: Array<{
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            }>
                          } | null
                        }
                      | {
                          __typename: 'ComponentModulesPullquote'
                          id: string
                          text?: string | null
                        }
                      | {
                          __typename: 'ComponentModulesSideImageWithText'
                          id: string
                          sideText: string
                          image_alt_text: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                        }
                      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                      | {
                          __typename: 'ComponentModulesTextModule'
                          Richtext?: string | null
                          id: string
                        }
                      | {
                          __typename: 'ComponentModulesTitleModule'
                          Title?: string | null
                          id: string
                        }
                      | { __typename: 'Error'; code: string; message?: string | null }
                      | null
                    > | null
                    storyLinks?: {
                      __typename: 'ComponentModulesButtonsModule'
                      id: string
                      buttons?: Array<{
                        __typename?: 'ComponentCoreButton'
                        id: string
                        text: string
                        url: string
                      } | null> | null
                    } | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                    timeframe?: {
                      __typename?: 'ComponentCoreTimeframe'
                      id: string
                      yearStart?: any | null
                      yearEnd?: any | null
                    } | null
                    locations?: {
                      __typename?: 'LocationRelationResponseCollection'
                      data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
                    } | null
                    publicationDate?: {
                      __typename?: 'ComponentCorePublicationDate'
                      id: string
                      date?: any | null
                      displayType?: Enum_Componentcorepublicationdate_Displaytype | null
                    } | null
                    triplyRecords?: {
                      __typename?: 'TriplyRecordRelationResponseCollection'
                      data: Array<{
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      }>
                    } | null
                    localizations?: {
                      __typename?: 'StoryRelationResponseCollection'
                      data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
                    } | null
                    parent_story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          components?: Array<
                            | { __typename: 'ComponentCoreMuxAudio' }
                            | { __typename: 'ComponentCoreMuxVideo' }
                            | { __typename: 'ComponentCoreStandAloneLink' }
                            | { __typename: 'ComponentModulesButtonsModule' }
                            | {
                                __typename: 'ComponentModulesImage'
                                alt_text?: string | null
                                caption?: string | null
                                id: string
                                image: {
                                  __typename?: 'UploadFileEntityResponse'
                                  data?: {
                                    __typename?: 'UploadFileEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'UploadFile'
                                      hash: string
                                      mime: string
                                      name: string
                                      provider: string
                                      size: number
                                      url: string
                                      alternativeText?: string | null
                                      caption?: string | null
                                      createdAt?: any | null
                                      ext?: string | null
                                      formats?: any | null
                                      height?: number | null
                                      previewUrl?: string | null
                                      provider_metadata?: any | null
                                      updatedAt?: any | null
                                      width?: number | null
                                    } | null
                                  } | null
                                }
                                triplyRecord?: {
                                  __typename?: 'TriplyRecordEntityResponse'
                                  data?: {
                                    __typename?: 'TriplyRecordEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'TriplyRecord'
                                      recordId: string
                                      type: Enum_Triplyrecord_Type
                                    } | null
                                  } | null
                                } | null
                                story?: {
                                  __typename?: 'StoryEntityResponse'
                                  data?: {
                                    __typename?: 'StoryEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Story'
                                      title: string
                                      slug: string
                                      description?: string | null
                                      shortDescription: string
                                      createdAt?: any | null
                                      updatedAt?: any | null
                                      publishedAt?: any | null
                                      locale?: string | null
                                      author?: {
                                        __typename?: 'AuthorEntityResponse'
                                        data?: {
                                          __typename?: 'AuthorEntity'
                                          id?: string | null
                                          attributes?: {
                                            __typename?: 'Author'
                                            firstName: string
                                            lastName: string
                                            insertion?: string | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              }
                            | { __typename: 'ComponentModulesImageCarousel' }
                            | { __typename: 'ComponentModulesPullquote' }
                            | { __typename: 'ComponentModulesSideImageWithText' }
                            | { __typename: 'ComponentModulesSubtitle' }
                            | { __typename: 'ComponentModulesTextModule' }
                            | { __typename: 'ComponentModulesTitleModule' }
                            | { __typename: 'Error' }
                            | null
                          > | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                    child_stories?: {
                      __typename?: 'StoryRelationResponseCollection'
                      data: Array<{
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          components?: Array<
                            | { __typename: 'ComponentCoreMuxAudio' }
                            | { __typename: 'ComponentCoreMuxVideo' }
                            | { __typename: 'ComponentCoreStandAloneLink' }
                            | { __typename: 'ComponentModulesButtonsModule' }
                            | {
                                __typename: 'ComponentModulesImage'
                                alt_text?: string | null
                                caption?: string | null
                                id: string
                                image: {
                                  __typename?: 'UploadFileEntityResponse'
                                  data?: {
                                    __typename?: 'UploadFileEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'UploadFile'
                                      hash: string
                                      mime: string
                                      name: string
                                      provider: string
                                      size: number
                                      url: string
                                      alternativeText?: string | null
                                      caption?: string | null
                                      createdAt?: any | null
                                      ext?: string | null
                                      formats?: any | null
                                      height?: number | null
                                      previewUrl?: string | null
                                      provider_metadata?: any | null
                                      updatedAt?: any | null
                                      width?: number | null
                                    } | null
                                  } | null
                                }
                                triplyRecord?: {
                                  __typename?: 'TriplyRecordEntityResponse'
                                  data?: {
                                    __typename?: 'TriplyRecordEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'TriplyRecord'
                                      recordId: string
                                      type: Enum_Triplyrecord_Type
                                    } | null
                                  } | null
                                } | null
                                story?: {
                                  __typename?: 'StoryEntityResponse'
                                  data?: {
                                    __typename?: 'StoryEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Story'
                                      title: string
                                      slug: string
                                      description?: string | null
                                      shortDescription: string
                                      createdAt?: any | null
                                      updatedAt?: any | null
                                      publishedAt?: any | null
                                      locale?: string | null
                                      author?: {
                                        __typename?: 'AuthorEntityResponse'
                                        data?: {
                                          __typename?: 'AuthorEntity'
                                          id?: string | null
                                          attributes?: {
                                            __typename?: 'Author'
                                            firstName: string
                                            lastName: string
                                            insertion?: string | null
                                          } | null
                                        } | null
                                      } | null
                                    } | null
                                  } | null
                                } | null
                              }
                            | { __typename: 'ComponentModulesImageCarousel' }
                            | { __typename: 'ComponentModulesPullquote' }
                            | { __typename: 'ComponentModulesSideImageWithText' }
                            | { __typename: 'ComponentModulesSubtitle' }
                            | { __typename: 'ComponentModulesTextModule' }
                            | { __typename: 'ComponentModulesTitleModule' }
                            | { __typename: 'Error' }
                            | null
                          > | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      }>
                    } | null
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'ThemeRelationResponseCollection'
                data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type MetaQueryVariables = Exact<{
  publicationState?: InputMaybe<PublicationState>
  locale: Scalars['I18NLocaleCode']
  localeStr: Scalars['String']
  highlightedThemesPaginationArgs?: InputMaybe<PaginationArg>
}>

export type MetaQuery = {
  __typename?: 'Query'
  homepage?: {
    __typename?: 'HomepageEntityResponse'
    data?: {
      __typename?: 'HomepageEntity'
      attributes?: {
        __typename?: 'Homepage'
        highlightedThemes?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
        } | null
      } | null
    } | null
  } | null
}

export type LandingpageFragmentFragment = {
  __typename?: 'Landingpage'
  Title?: string | null
  Description?: string | null
  slug?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  publishedAt?: any | null
  locale?: string | null
  components?: Array<
    | {
        __typename: 'ComponentModulesButtonsModule'
        id: string
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          text: string
          url: string
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesGridModule'
        id: string
        description?: string | null
        pageSize: number
        title?: string | null
        showMoreButtonTitle: string
        fieldTitlesAreInverted: boolean
        fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          text: string
          url: string
        } | null> | null
        featuredFields?: Array<{
          __typename?: 'ComponentCoreFeaturedFields'
          id: string
          label: string
          value: string
        } | null> | null
        fields?: Array<{
          __typename?: 'ComponentCoreGridFeaturedFields'
          id: string
          subtitle?: string | null
          title: string
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: { __typename?: 'Story'; slug: string } | null
            } | null
          } | null
          thumbnail?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          } | null
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesImage'
        alt_text?: string | null
        caption?: string | null
        id: string
        image: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              hash: string
              mime: string
              name: string
              provider: string
              size: number
              url: string
              alternativeText?: string | null
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              height?: number | null
              previewUrl?: string | null
              provider_metadata?: any | null
              updatedAt?: any | null
              width?: number | null
            } | null
          } | null
        }
        triplyRecord?: {
          __typename?: 'TriplyRecordEntityResponse'
          data?: {
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          } | null
        } | null
        story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'ComponentModulesImageCarousel'
        id: string
        description?: string | null
        images?: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UploadFile'
              hash: string
              mime: string
              name: string
              provider: string
              size: number
              url: string
              alternativeText?: string | null
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              height?: number | null
              previewUrl?: string | null
              provider_metadata?: any | null
              updatedAt?: any | null
              width?: number | null
            } | null
          }>
        } | null
      }
    | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
    | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
    | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
    | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
    | { __typename?: 'Error'; code: string; message?: string | null }
    | null
  > | null
}

export type LandingpageEntityFragmentFragment = {
  __typename?: 'LandingpageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Landingpage'
    Title?: string | null
    Description?: string | null
    slug?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    localizations?: {
      __typename?: 'LandingpageRelationResponseCollection'
      data: Array<{
        __typename?: 'LandingpageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Landingpage'
          Title?: string | null
          Description?: string | null
          slug?: string | null
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesGridModule'
                id: string
                description?: string | null
                pageSize: number
                title?: string | null
                showMoreButtonTitle: string
                fieldTitlesAreInverted: boolean
                fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
                featuredFields?: Array<{
                  __typename?: 'ComponentCoreFeaturedFields'
                  id: string
                  label: string
                  value: string
                } | null> | null
                fields?: Array<{
                  __typename?: 'ComponentCoreGridFeaturedFields'
                  id: string
                  subtitle?: string | null
                  title: string
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                  thumbnail?: {
                    __typename?: 'UploadFileEntityResponse'
                    data?: {
                      __typename?: 'UploadFileEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'UploadFile'
                        hash: string
                        mime: string
                        name: string
                        provider: string
                        size: number
                        url: string
                        alternativeText?: string | null
                        caption?: string | null
                        createdAt?: any | null
                        ext?: string | null
                        formats?: any | null
                        height?: number | null
                        previewUrl?: string | null
                        provider_metadata?: any | null
                        updatedAt?: any | null
                        width?: number | null
                      } | null
                    } | null
                  } | null
                  triplyRecord?: {
                    __typename?: 'TriplyRecordEntityResponse'
                    data?: {
                      __typename?: 'TriplyRecordEntity'
                      id?: string | null
                      attributes?: {
                        __typename?: 'TriplyRecord'
                        recordId: string
                        type: Enum_Triplyrecord_Type
                      } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename?: 'Error'; code: string; message?: string | null }
            | null
          > | null
        } | null
      }>
    } | null
    components?: Array<
      | {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesGridModule'
          id: string
          description?: string | null
          pageSize: number
          title?: string | null
          showMoreButtonTitle: string
          fieldTitlesAreInverted: boolean
          fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
          featuredFields?: Array<{
            __typename?: 'ComponentCoreFeaturedFields'
            id: string
            label: string
            value: string
          } | null> | null
          fields?: Array<{
            __typename?: 'ComponentCoreGridFeaturedFields'
            id: string
            subtitle?: string | null
            title: string
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
            thumbnail?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'UploadFile'
                  hash: string
                  mime: string
                  name: string
                  provider: string
                  size: number
                  url: string
                  alternativeText?: string | null
                  caption?: string | null
                  createdAt?: any | null
                  ext?: string | null
                  formats?: any | null
                  height?: number | null
                  previewUrl?: string | null
                  provider_metadata?: any | null
                  updatedAt?: any | null
                  width?: number | null
                } | null
              } | null
            } | null
            triplyRecord?: {
              __typename?: 'TriplyRecordEntityResponse'
              data?: {
                __typename?: 'TriplyRecordEntity'
                id?: string | null
                attributes?: {
                  __typename?: 'TriplyRecord'
                  recordId: string
                  type: Enum_Triplyrecord_Type
                } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesImage'
          alt_text?: string | null
          caption?: string | null
          id: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                description?: string | null
                shortDescription: string
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesImageCarousel'
          id: string
          description?: string | null
          images?: {
            __typename?: 'UploadFileRelationResponseCollection'
            data: Array<{
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            }>
          } | null
        }
      | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
      | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
      | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
      | { __typename?: 'Error'; code: string; message?: string | null }
      | null
    > | null
  } | null
}

export type LandingPageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type LandingPageQuery = {
  __typename?: 'Query'
  landingpage?: {
    __typename?: 'LandingpageEntityResponse'
    data?: {
      __typename?: 'LandingpageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Landingpage'
        Title?: string | null
        Description?: string | null
        slug?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        localizations?: {
          __typename?: 'LandingpageRelationResponseCollection'
          data: Array<{
            __typename?: 'LandingpageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Landingpage'
              Title?: string | null
              Description?: string | null
              slug?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesGridModule'
                    id: string
                    description?: string | null
                    pageSize: number
                    title?: string | null
                    showMoreButtonTitle: string
                    fieldTitlesAreInverted: boolean
                    fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                    featuredFields?: Array<{
                      __typename?: 'ComponentCoreFeaturedFields'
                      id: string
                      label: string
                      value: string
                    } | null> | null
                    fields?: Array<{
                      __typename?: 'ComponentCoreGridFeaturedFields'
                      id: string
                      subtitle?: string | null
                      title: string
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                      thumbnail?: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      } | null
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename?: 'Error'; code: string; message?: string | null }
                | null
              > | null
            } | null
          }>
        } | null
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesGridModule'
              id: string
              description?: string | null
              pageSize: number
              title?: string | null
              showMoreButtonTitle: string
              fieldTitlesAreInverted: boolean
              fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
              featuredFields?: Array<{
                __typename?: 'ComponentCoreFeaturedFields'
                id: string
                label: string
                value: string
              } | null> | null
              fields?: Array<{
                __typename?: 'ComponentCoreGridFeaturedFields'
                id: string
                subtitle?: string | null
                title: string
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
                thumbnail?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename?: 'Error'; code: string; message?: string | null }
          | null
        > | null
      } | null
    } | null
  } | null
}

export type LandingPagesQueryVariables = Exact<{
  filters?: InputMaybe<LandingpageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type LandingPagesQuery = {
  __typename?: 'Query'
  landingpages?: {
    __typename?: 'LandingpageEntityResponseCollection'
    data: Array<{
      __typename?: 'LandingpageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Landingpage'
        Title?: string | null
        Description?: string | null
        slug?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        localizations?: {
          __typename?: 'LandingpageRelationResponseCollection'
          data: Array<{
            __typename?: 'LandingpageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Landingpage'
              Title?: string | null
              Description?: string | null
              slug?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesGridModule'
                    id: string
                    description?: string | null
                    pageSize: number
                    title?: string | null
                    showMoreButtonTitle: string
                    fieldTitlesAreInverted: boolean
                    fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      text: string
                      url: string
                    } | null> | null
                    featuredFields?: Array<{
                      __typename?: 'ComponentCoreFeaturedFields'
                      id: string
                      label: string
                      value: string
                    } | null> | null
                    fields?: Array<{
                      __typename?: 'ComponentCoreGridFeaturedFields'
                      id: string
                      subtitle?: string | null
                      title: string
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                      thumbnail?: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      } | null
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename?: 'Error'; code: string; message?: string | null }
                | null
              > | null
            } | null
          }>
        } | null
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesGridModule'
              id: string
              description?: string | null
              pageSize: number
              title?: string | null
              showMoreButtonTitle: string
              fieldTitlesAreInverted: boolean
              fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                text: string
                url: string
              } | null> | null
              featuredFields?: Array<{
                __typename?: 'ComponentCoreFeaturedFields'
                id: string
                label: string
                value: string
              } | null> | null
              fields?: Array<{
                __typename?: 'ComponentCoreGridFeaturedFields'
                id: string
                subtitle?: string | null
                title: string
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
                thumbnail?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename?: 'Error'; code: string; message?: string | null }
          | null
        > | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type LocationQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type LocationQuery = {
  __typename?: 'Query'
  location?: {
    __typename?: 'LocationEntityResponse'
    data?: {
      __typename?: 'LocationEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Location'
        city?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
        } | null
        localizations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
        } | null
      } | null
    } | null
  } | null
}

export type LocationsQueryVariables = Exact<{
  filters?: InputMaybe<LocationFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type LocationsQuery = {
  __typename?: 'Query'
  locations?: {
    __typename?: 'LocationEntityResponseCollection'
    data: Array<{
      __typename?: 'LocationEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Location'
        city?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
        } | null
        localizations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type LocationFragmentFragment = {
  __typename?: 'LocationEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Location'
    city?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
    } | null
    localizations?: {
      __typename?: 'LocationRelationResponseCollection'
      data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
    } | null
  } | null
}

export type StoriesQueryVariables = Exact<{
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoriesQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        components?: Array<
          | {
              __typename: 'ComponentCoreMuxAudio'
              id: string
              caption?: string | null
              muxAudioRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreMuxVideo'
              id: string
              caption?: string | null
              muxVideoRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreStandAloneLink'
              id: string
              label: string
              url?: string | null
              attachment?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              } | null
            }
          | { __typename: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | {
              __typename: 'ComponentModulesSideImageWithText'
              id: string
              sideText: string
              image_alt_text: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
            }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        } | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        timeframe?: {
          __typename?: 'ComponentCoreTimeframe'
          id: string
          yearStart?: any | null
          yearEnd?: any | null
        } | null
        locations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
        } | null
        publicationDate?: {
          __typename?: 'ComponentCorePublicationDate'
          id: string
          date?: any | null
          displayType?: Enum_Componentcorepublicationdate_Displaytype | null
        } | null
        triplyRecords?: {
          __typename?: 'TriplyRecordRelationResponseCollection'
          data: Array<{
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type StoriesIdsQueryVariables = Exact<{
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoriesIdsQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type StoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoryQuery = {
  __typename?: 'Query'
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        components?: Array<
          | {
              __typename: 'ComponentCoreMuxAudio'
              id: string
              caption?: string | null
              muxAudioRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreMuxVideo'
              id: string
              caption?: string | null
              muxVideoRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreStandAloneLink'
              id: string
              label: string
              url?: string | null
              attachment?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              } | null
            }
          | { __typename: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | {
              __typename: 'ComponentModulesSideImageWithText'
              id: string
              sideText: string
              image_alt_text: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
            }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        } | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        timeframe?: {
          __typename?: 'ComponentCoreTimeframe'
          id: string
          yearStart?: any | null
          yearEnd?: any | null
        } | null
        locations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
        } | null
        publicationDate?: {
          __typename?: 'ComponentCorePublicationDate'
          id: string
          date?: any | null
          displayType?: Enum_Componentcorepublicationdate_Displaytype | null
        } | null
        triplyRecords?: {
          __typename?: 'TriplyRecordRelationResponseCollection'
          data: Array<{
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type StoryByLocaleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type StoryByLocaleQuery = {
  __typename?: 'Query'
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              locale?: string | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              locale?: string | null
            } | null
          }>
        } | null
        components?: Array<
          | {
              __typename: 'ComponentCoreMuxAudio'
              id: string
              caption?: string | null
              muxAudioRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreMuxVideo'
              id: string
              caption?: string | null
              muxVideoRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreStandAloneLink'
              id: string
              label: string
              url?: string | null
              attachment?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              } | null
            }
          | { __typename: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | {
              __typename: 'ComponentModulesSideImageWithText'
              id: string
              sideText: string
              image_alt_text: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
            }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    locale?: string | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    locale?: string | null
                  } | null
                }>
              } | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type StoriesByLocaleQueryVariables = Exact<{
  id?: InputMaybe<IdFilterInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoriesByLocaleQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              locale?: string | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              locale?: string | null
            } | null
          }>
        } | null
        components?: Array<
          | {
              __typename: 'ComponentCoreMuxAudio'
              id: string
              caption?: string | null
              muxAudioRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreMuxVideo'
              id: string
              caption?: string | null
              muxVideoRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreStandAloneLink'
              id: string
              label: string
              url?: string | null
              attachment?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              } | null
            }
          | { __typename: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | {
              __typename: 'ComponentModulesSideImageWithText'
              id: string
              sideText: string
              image_alt_text: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
            }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    locale?: string | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    locale?: string | null
                  } | null
                }>
              } | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type StoriesMetaByLocaleQueryVariables = Exact<{
  id?: InputMaybe<IdFilterInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoriesMetaByLocaleQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        shortDescription: string
        description?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        timeframe?: {
          __typename?: 'ComponentCoreTimeframe'
          id: string
          yearStart?: any | null
          yearEnd?: any | null
        } | null
        locations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{
            __typename?: 'LocationEntity'
            id?: string | null
            attributes?: { __typename?: 'Location'; city?: string | null } | null
          }>
        } | null
        themes?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{
            __typename?: 'ThemeEntity'
            id?: string | null
            attributes?: { __typename?: 'Theme'; name: string } | null
          }>
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
        publicationDate?: {
          __typename?: 'ComponentCorePublicationDate'
          id: string
          date?: any | null
          displayType?: Enum_Componentcorepublicationdate_Displaytype | null
        } | null
        triplyRecords?: {
          __typename?: 'TriplyRecordRelationResponseCollection'
          data: Array<{
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{
                  __typename?: 'LocationEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Location'; city?: string | null } | null
                }>
              } | null
              themes?: {
                __typename?: 'ThemeRelationResponseCollection'
                data: Array<{
                  __typename?: 'ThemeEntity'
                  id?: string | null
                  attributes?: { __typename?: 'Theme'; name: string } | null
                }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type StoriesWithoutRelationsQueryVariables = Exact<{
  filters?: InputMaybe<StoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoriesWithoutRelationsQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type StoryWithoutRelationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type StoryWithoutRelationsQuery = {
  __typename?: 'Query'
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type StoriesLinkedToTriplyRecordQueryVariables = Exact<{
  recordId: Scalars['String']
  type: Scalars['String']
  pagination?: InputMaybe<PaginationArg>
}>

export type StoriesLinkedToTriplyRecordQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Story'; slug: string; title: string } | null
    }>
  } | null
}

export type StoriesLinkedToTriplyRecordExtendedQueryVariables = Exact<{
  recordId: Scalars['String']
  type: Scalars['String']
  lang?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}>

export type StoriesLinkedToTriplyRecordExtendedQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        components?: Array<
          | {
              __typename: 'ComponentCoreMuxAudio'
              id: string
              caption?: string | null
              muxAudioRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreMuxVideo'
              id: string
              caption?: string | null
              muxVideoRelation?: {
                __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                data?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'MuxVideoUploaderMuxAsset'
                    title: string
                    upload_id?: string | null
                    asset_id?: string | null
                    playback_id?: string | null
                    signed: boolean
                    error_message?: string | null
                    isReady?: boolean | null
                    duration?: number | null
                    aspect_ratio?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentCoreStandAloneLink'
              id: string
              label: string
              url?: string | null
              attachment?: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              } | null
            }
          | { __typename: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesImageCarousel'
              id: string
              description?: string | null
              images?: {
                __typename?: 'UploadFileRelationResponseCollection'
                data: Array<{
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                }>
              } | null
            }
          | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
          | {
              __typename: 'ComponentModulesSideImageWithText'
              id: string
              sideText: string
              image_alt_text: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
            }
          | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
          | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
          | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            text: string
            url: string
          } | null> | null
        } | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
        timeframe?: {
          __typename?: 'ComponentCoreTimeframe'
          id: string
          yearStart?: any | null
          yearEnd?: any | null
        } | null
        locations?: {
          __typename?: 'LocationRelationResponseCollection'
          data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
        } | null
        publicationDate?: {
          __typename?: 'ComponentCorePublicationDate'
          id: string
          date?: any | null
          displayType?: Enum_Componentcorepublicationdate_Displaytype | null
        } | null
        triplyRecords?: {
          __typename?: 'TriplyRecordRelationResponseCollection'
          data: Array<{
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
        } | null
        parent_story?: {
          __typename?: 'StoryEntityResponse'
          data?: {
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        } | null
        child_stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              components?: Array<
                | { __typename: 'ComponentCoreMuxAudio' }
                | { __typename: 'ComponentCoreMuxVideo' }
                | { __typename: 'ComponentCoreStandAloneLink' }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesImageCarousel' }
                | { __typename: 'ComponentModulesPullquote' }
                | { __typename: 'ComponentModulesSideImageWithText' }
                | { __typename: 'ComponentModulesSubtitle' }
                | { __typename: 'ComponentModulesTextModule' }
                | { __typename: 'ComponentModulesTitleModule' }
                | { __typename: 'Error' }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type StoriesLinkedToThemeQueryVariables = Exact<{
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}>

export type StoriesLinkedToThemeQuery = {
  __typename?: 'Query'
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        themes?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{
            __typename?: 'ThemeEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Theme'
              stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type StoriesByIdsQueryVariables = Exact<{
  storiesIds: Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>
}>

export type StoriesByIdsQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    data: Array<{
      __typename?: 'StoryEntity'
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        locale?: string | null
        components?: Array<
          | { __typename?: 'ComponentCoreMuxAudio' }
          | { __typename?: 'ComponentCoreMuxVideo' }
          | { __typename?: 'ComponentCoreStandAloneLink' }
          | { __typename?: 'ComponentModulesButtonsModule' }
          | {
              __typename: 'ComponentModulesImage'
              alt_text?: string | null
              caption?: string | null
              id: string
              image: {
                __typename?: 'UploadFileEntityResponse'
                data?: {
                  __typename?: 'UploadFileEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'UploadFile'
                    hash: string
                    mime: string
                    name: string
                    provider: string
                    size: number
                    url: string
                    alternativeText?: string | null
                    caption?: string | null
                    createdAt?: any | null
                    ext?: string | null
                    formats?: any | null
                    height?: number | null
                    previewUrl?: string | null
                    provider_metadata?: any | null
                    updatedAt?: any | null
                    width?: number | null
                  } | null
                } | null
              }
              triplyRecord?: {
                __typename?: 'TriplyRecordEntityResponse'
                data?: {
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                } | null
              } | null
              story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    slug: string
                    description?: string | null
                    shortDescription: string
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | { __typename?: 'ComponentModulesImageCarousel' }
          | { __typename?: 'ComponentModulesPullquote' }
          | { __typename?: 'ComponentModulesSideImageWithText' }
          | { __typename?: 'ComponentModulesSubtitle' }
          | { __typename?: 'ComponentModulesTextModule' }
          | { __typename?: 'ComponentModulesTitleModule' }
          | { __typename?: 'Error' }
          | null
        > | null
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
            } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type StoryTriplyRelationsQueryVariables = Exact<{
  id: Scalars['ID']
  type?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}>

export type StoryTriplyRelationsQuery = {
  __typename?: 'Query'
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        triplyRecords?: {
          __typename?: 'TriplyRecordRelationResponseCollection'
          data: Array<{
            __typename?: 'TriplyRecordEntity'
            id?: string | null
            attributes?: {
              __typename?: 'TriplyRecord'
              recordId: string
              type: Enum_Triplyrecord_Type
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type StoriesTotalQueryVariables = Exact<{ [key: string]: never }>

export type StoriesTotalQuery = {
  __typename?: 'Query'
  stories?: {
    __typename?: 'StoryEntityResponseCollection'
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: { __typename?: 'Pagination'; total: number }
    }
  } | null
}

export type StoryWithoutRelationsFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    description?: string | null
    shortDescription: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
  } | null
}

export type NestedStoryFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    description?: string | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
    parent_story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          locale?: string | null
        } | null
      } | null
    } | null
    child_stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          locale?: string | null
        } | null
      }>
    } | null
    components?: Array<
      | {
          __typename: 'ComponentCoreMuxAudio'
          id: string
          caption?: string | null
          muxAudioRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreMuxVideo'
          id: string
          caption?: string | null
          muxVideoRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreStandAloneLink'
          id: string
          label: string
          url?: string | null
          attachment?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          } | null
        }
      | { __typename: 'ComponentModulesButtonsModule' }
      | {
          __typename: 'ComponentModulesImage'
          alt_text?: string | null
          caption?: string | null
          id: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                description?: string | null
                shortDescription: string
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesImageCarousel'
          id: string
          description?: string | null
          images?: {
            __typename?: 'UploadFileRelationResponseCollection'
            data: Array<{
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            }>
          } | null
        }
      | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
      | {
          __typename: 'ComponentModulesSideImageWithText'
          id: string
          sideText: string
          image_alt_text: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
        }
      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
      | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
      | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        text: string
        url: string
      } | null> | null
    } | null
  } | null
}

export type LocalizedStoryFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    description?: string | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
    parent_story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          locale?: string | null
        } | null
      } | null
    } | null
    child_stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          locale?: string | null
        } | null
      }>
    } | null
    components?: Array<
      | {
          __typename: 'ComponentCoreMuxAudio'
          id: string
          caption?: string | null
          muxAudioRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreMuxVideo'
          id: string
          caption?: string | null
          muxVideoRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreStandAloneLink'
          id: string
          label: string
          url?: string | null
          attachment?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          } | null
        }
      | { __typename: 'ComponentModulesButtonsModule' }
      | {
          __typename: 'ComponentModulesImage'
          alt_text?: string | null
          caption?: string | null
          id: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                description?: string | null
                shortDescription: string
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesImageCarousel'
          id: string
          description?: string | null
          images?: {
            __typename?: 'UploadFileRelationResponseCollection'
            data: Array<{
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            }>
          } | null
        }
      | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
      | {
          __typename: 'ComponentModulesSideImageWithText'
          id: string
          sideText: string
          image_alt_text: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
        }
      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
      | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
      | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        text: string
        url: string
      } | null> | null
    } | null
    localizations?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          description?: string | null
          locale?: string | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                locale?: string | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                locale?: string | null
              } | null
            }>
          } | null
          components?: Array<
            | {
                __typename: 'ComponentCoreMuxAudio'
                id: string
                caption?: string | null
                muxAudioRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreMuxVideo'
                id: string
                caption?: string | null
                muxVideoRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreStandAloneLink'
                id: string
                label: string
                url?: string | null
                attachment?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | {
                __typename: 'ComponentModulesSideImageWithText'
                id: string
                sideText: string
                image_alt_text: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
              }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              text: string
              url: string
            } | null> | null
          } | null
        } | null
      }>
    } | null
  } | null
}

export type StoryFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    description?: string | null
    shortDescription: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    components?: Array<
      | {
          __typename: 'ComponentCoreMuxAudio'
          id: string
          caption?: string | null
          muxAudioRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreMuxVideo'
          id: string
          caption?: string | null
          muxVideoRelation?: {
            __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
            data?: {
              __typename?: 'MuxVideoUploaderMuxAssetEntity'
              id?: string | null
              attributes?: {
                __typename?: 'MuxVideoUploaderMuxAsset'
                title: string
                upload_id?: string | null
                asset_id?: string | null
                playback_id?: string | null
                signed: boolean
                error_message?: string | null
                isReady?: boolean | null
                duration?: number | null
                aspect_ratio?: string | null
                createdAt?: any | null
                updatedAt?: any | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentCoreStandAloneLink'
          id: string
          label: string
          url?: string | null
          attachment?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          } | null
        }
      | { __typename: 'ComponentModulesButtonsModule' }
      | {
          __typename: 'ComponentModulesImage'
          alt_text?: string | null
          caption?: string | null
          id: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
          triplyRecord?: {
            __typename?: 'TriplyRecordEntityResponse'
            data?: {
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            } | null
          } | null
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                slug: string
                description?: string | null
                shortDescription: string
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesImageCarousel'
          id: string
          description?: string | null
          images?: {
            __typename?: 'UploadFileRelationResponseCollection'
            data: Array<{
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            }>
          } | null
        }
      | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
      | {
          __typename: 'ComponentModulesSideImageWithText'
          id: string
          sideText: string
          image_alt_text: string
          image: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              id?: string | null
              attributes?: {
                __typename?: 'UploadFile'
                hash: string
                mime: string
                name: string
                provider: string
                size: number
                url: string
                alternativeText?: string | null
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                height?: number | null
                previewUrl?: string | null
                provider_metadata?: any | null
                updatedAt?: any | null
                width?: number | null
              } | null
            } | null
          }
        }
      | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
      | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
      | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        text: string
        url: string
      } | null> | null
    } | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
    timeframe?: {
      __typename?: 'ComponentCoreTimeframe'
      id: string
      yearStart?: any | null
      yearEnd?: any | null
    } | null
    locations?: {
      __typename?: 'LocationRelationResponseCollection'
      data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
    } | null
    publicationDate?: {
      __typename?: 'ComponentCorePublicationDate'
      id: string
      date?: any | null
      displayType?: Enum_Componentcorepublicationdate_Displaytype | null
    } | null
    triplyRecords?: {
      __typename?: 'TriplyRecordRelationResponseCollection'
      data: Array<{
        __typename?: 'TriplyRecordEntity'
        id?: string | null
        attributes?: {
          __typename?: 'TriplyRecord'
          recordId: string
          type: Enum_Triplyrecord_Type
        } | null
      }>
    } | null
    localizations?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
    } | null
    parent_story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    child_stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      }>
    } | null
  } | null
}

export type StoryMetaFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    shortDescription: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
    timeframe?: {
      __typename?: 'ComponentCoreTimeframe'
      id: string
      yearStart?: any | null
      yearEnd?: any | null
    } | null
    locations?: {
      __typename?: 'LocationRelationResponseCollection'
      data: Array<{
        __typename?: 'LocationEntity'
        id?: string | null
        attributes?: { __typename?: 'Location'; city?: string | null } | null
      }>
    } | null
    themes?: {
      __typename?: 'ThemeRelationResponseCollection'
      data: Array<{
        __typename?: 'ThemeEntity'
        id?: string | null
        attributes?: { __typename?: 'Theme'; name: string } | null
      }>
    } | null
    publicationDate?: {
      __typename?: 'ComponentCorePublicationDate'
      id: string
      date?: any | null
      displayType?: Enum_Componentcorepublicationdate_Displaytype | null
    } | null
    triplyRecords?: {
      __typename?: 'TriplyRecordRelationResponseCollection'
      data: Array<{
        __typename?: 'TriplyRecordEntity'
        id?: string | null
        attributes?: {
          __typename?: 'TriplyRecord'
          recordId: string
          type: Enum_Triplyrecord_Type
        } | null
      }>
    } | null
    parent_story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    child_stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      }>
    } | null
  } | null
}

export type LocalizedStoryMetaFragmentFragment = {
  __typename?: 'StoryEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Story'
    title: string
    slug: string
    shortDescription: string
    description?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Author'
          firstName: string
          lastName: string
          insertion?: string | null
        } | null
      } | null
    } | null
    timeframe?: {
      __typename?: 'ComponentCoreTimeframe'
      id: string
      yearStart?: any | null
      yearEnd?: any | null
    } | null
    locations?: {
      __typename?: 'LocationRelationResponseCollection'
      data: Array<{
        __typename?: 'LocationEntity'
        id?: string | null
        attributes?: { __typename?: 'Location'; city?: string | null } | null
      }>
    } | null
    themes?: {
      __typename?: 'ThemeRelationResponseCollection'
      data: Array<{
        __typename?: 'ThemeEntity'
        id?: string | null
        attributes?: { __typename?: 'Theme'; name: string } | null
      }>
    } | null
    parent_story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
    child_stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          components?: Array<
            | { __typename: 'ComponentCoreMuxAudio' }
            | { __typename: 'ComponentCoreMuxVideo' }
            | { __typename: 'ComponentCoreStandAloneLink' }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesImageCarousel' }
            | { __typename: 'ComponentModulesPullquote' }
            | { __typename: 'ComponentModulesSideImageWithText' }
            | { __typename: 'ComponentModulesSubtitle' }
            | { __typename: 'ComponentModulesTextModule' }
            | { __typename: 'ComponentModulesTitleModule' }
            | { __typename: 'Error' }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
        } | null
      }>
    } | null
    publicationDate?: {
      __typename?: 'ComponentCorePublicationDate'
      id: string
      date?: any | null
      displayType?: Enum_Componentcorepublicationdate_Displaytype | null
    } | null
    triplyRecords?: {
      __typename?: 'TriplyRecordRelationResponseCollection'
      data: Array<{
        __typename?: 'TriplyRecordEntity'
        id?: string | null
        attributes?: {
          __typename?: 'TriplyRecord'
          recordId: string
          type: Enum_Triplyrecord_Type
        } | null
      }>
    } | null
    localizations?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          shortDescription: string
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          timeframe?: {
            __typename?: 'ComponentCoreTimeframe'
            id: string
            yearStart?: any | null
            yearEnd?: any | null
          } | null
          locations?: {
            __typename?: 'LocationRelationResponseCollection'
            data: Array<{
              __typename?: 'LocationEntity'
              id?: string | null
              attributes?: { __typename?: 'Location'; city?: string | null } | null
            }>
          } | null
          themes?: {
            __typename?: 'ThemeRelationResponseCollection'
            data: Array<{
              __typename?: 'ThemeEntity'
              id?: string | null
              attributes?: { __typename?: 'Theme'; name: string } | null
            }>
          } | null
          publicationDate?: {
            __typename?: 'ComponentCorePublicationDate'
            id: string
            date?: any | null
            displayType?: Enum_Componentcorepublicationdate_Displaytype | null
          } | null
          triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            }>
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        } | null
      }>
    } | null
  } | null
}

type StoryComponentsFragment_ComponentCoreMuxAudio_Fragment = {
  __typename: 'ComponentCoreMuxAudio'
  id: string
  caption?: string | null
  muxAudioRelation?: {
    __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
    data?: {
      __typename?: 'MuxVideoUploaderMuxAssetEntity'
      id?: string | null
      attributes?: {
        __typename?: 'MuxVideoUploaderMuxAsset'
        title: string
        upload_id?: string | null
        asset_id?: string | null
        playback_id?: string | null
        signed: boolean
        error_message?: string | null
        isReady?: boolean | null
        duration?: number | null
        aspect_ratio?: string | null
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  } | null
}

type StoryComponentsFragment_ComponentCoreMuxVideo_Fragment = {
  __typename: 'ComponentCoreMuxVideo'
  id: string
  caption?: string | null
  muxVideoRelation?: {
    __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
    data?: {
      __typename?: 'MuxVideoUploaderMuxAssetEntity'
      id?: string | null
      attributes?: {
        __typename?: 'MuxVideoUploaderMuxAsset'
        title: string
        upload_id?: string | null
        asset_id?: string | null
        playback_id?: string | null
        signed: boolean
        error_message?: string | null
        isReady?: boolean | null
        duration?: number | null
        aspect_ratio?: string | null
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  } | null
}

type StoryComponentsFragment_ComponentCoreStandAloneLink_Fragment = {
  __typename: 'ComponentCoreStandAloneLink'
  id: string
  label: string
  url?: string | null
  attachment?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  } | null
}

type StoryComponentsFragment_ComponentModulesButtonsModule_Fragment = {
  __typename: 'ComponentModulesButtonsModule'
}

type StoryComponentsFragment_ComponentModulesImage_Fragment = {
  __typename: 'ComponentModulesImage'
  alt_text?: string | null
  caption?: string | null
  id: string
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  }
  triplyRecord?: {
    __typename?: 'TriplyRecordEntityResponse'
    data?: {
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
      } | null
    } | null
  } | null
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

type StoryComponentsFragment_ComponentModulesImageCarousel_Fragment = {
  __typename: 'ComponentModulesImageCarousel'
  id: string
  description?: string | null
  images?: {
    __typename?: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    }>
  } | null
}

type StoryComponentsFragment_ComponentModulesPullquote_Fragment = {
  __typename: 'ComponentModulesPullquote'
  id: string
  text?: string | null
}

type StoryComponentsFragment_ComponentModulesSideImageWithText_Fragment = {
  __typename: 'ComponentModulesSideImageWithText'
  id: string
  sideText: string
  image_alt_text: string
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  }
}

type StoryComponentsFragment_ComponentModulesSubtitle_Fragment = {
  __typename: 'ComponentModulesSubtitle'
  id: string
  text?: string | null
}

type StoryComponentsFragment_ComponentModulesTextModule_Fragment = {
  __typename: 'ComponentModulesTextModule'
  Richtext?: string | null
  id: string
}

type StoryComponentsFragment_ComponentModulesTitleModule_Fragment = {
  __typename: 'ComponentModulesTitleModule'
  Title?: string | null
  id: string
}

type StoryComponentsFragment_Error_Fragment = {
  __typename: 'Error'
  code: string
  message?: string | null
}

export type StoryComponentsFragmentFragment =
  | StoryComponentsFragment_ComponentCoreMuxAudio_Fragment
  | StoryComponentsFragment_ComponentCoreMuxVideo_Fragment
  | StoryComponentsFragment_ComponentCoreStandAloneLink_Fragment
  | StoryComponentsFragment_ComponentModulesButtonsModule_Fragment
  | StoryComponentsFragment_ComponentModulesImage_Fragment
  | StoryComponentsFragment_ComponentModulesImageCarousel_Fragment
  | StoryComponentsFragment_ComponentModulesPullquote_Fragment
  | StoryComponentsFragment_ComponentModulesSideImageWithText_Fragment
  | StoryComponentsFragment_ComponentModulesSubtitle_Fragment
  | StoryComponentsFragment_ComponentModulesTextModule_Fragment
  | StoryComponentsFragment_ComponentModulesTitleModule_Fragment
  | StoryComponentsFragment_Error_Fragment

export type ComponentCoreButtonFragmentFragment = {
  __typename?: 'ComponentCoreButton'
  id: string
  text: string
  url: string
}

export type ComponentCoreCarouselImageFragmentFragment = {
  __typename?: 'ComponentCoreCarouselImage'
  id: string
  alt_text?: string | null
  description?: string | null
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  }
  triply_record?: {
    __typename?: 'TriplyRecordEntityResponse'
    data?: {
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
      } | null
    } | null
  } | null
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Story'; slug: string } | null
    } | null
  } | null
}

export type ComponentCorePublicationDateFragmentFragment = {
  __typename?: 'ComponentCorePublicationDate'
  id: string
  date?: any | null
  displayType?: Enum_Componentcorepublicationdate_Displaytype | null
}

export type ComponentCoreTimeframeFragmentFragment = {
  __typename?: 'ComponentCoreTimeframe'
  id: string
  yearEnd?: any | null
  yearStart?: any | null
}

export type ComponentCoreFeaturedFieldsFragmentFragment = {
  __typename?: 'ComponentCoreFeaturedFields'
  id: string
  label: string
  value: string
}

export type ComponentCoreGridFeaturedFieldsFragmentFragment = {
  __typename?: 'ComponentCoreGridFeaturedFields'
  id: string
  subtitle?: string | null
  title: string
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Story'; slug: string } | null
    } | null
  } | null
  thumbnail?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  } | null
  triplyRecord?: {
    __typename?: 'TriplyRecordEntityResponse'
    data?: {
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
      } | null
    } | null
  } | null
}

export type ComponentCoreStandAloneLinkFragmentFragment = {
  __typename?: 'ComponentCoreStandAloneLink'
  id: string
  label: string
  url?: string | null
  attachment?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  } | null
}

export type ComponentCoreMuxAudioFragmentFragment = {
  __typename?: 'ComponentCoreMuxAudio'
  id: string
  caption?: string | null
  muxAudioRelation?: {
    __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
    data?: {
      __typename?: 'MuxVideoUploaderMuxAssetEntity'
      id?: string | null
      attributes?: {
        __typename?: 'MuxVideoUploaderMuxAsset'
        title: string
        upload_id?: string | null
        asset_id?: string | null
        playback_id?: string | null
        signed: boolean
        error_message?: string | null
        isReady?: boolean | null
        duration?: number | null
        aspect_ratio?: string | null
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  } | null
}

export type ComponentCoreMuxVideoFragmentFragment = {
  __typename?: 'ComponentCoreMuxVideo'
  id: string
  caption?: string | null
  muxVideoRelation?: {
    __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
    data?: {
      __typename?: 'MuxVideoUploaderMuxAssetEntity'
      id?: string | null
      attributes?: {
        __typename?: 'MuxVideoUploaderMuxAsset'
        title: string
        upload_id?: string | null
        asset_id?: string | null
        playback_id?: string | null
        signed: boolean
        error_message?: string | null
        isReady?: boolean | null
        duration?: number | null
        aspect_ratio?: string | null
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  } | null
}

export type ComponentModulesButtonsModuleFragmentFragment = {
  __typename: 'ComponentModulesButtonsModule'
  id: string
  buttons?: Array<{
    __typename?: 'ComponentCoreButton'
    id: string
    text: string
    url: string
  } | null> | null
}

export type ComponentModulesCarouselFragmentFragment = {
  __typename: 'ComponentModulesCarousel'
  id: string
  description?: string | null
  title: string
  variant?: Enum_Componentmodulescarousel_Variant | null
  images: Array<{
    __typename?: 'ComponentCoreCarouselImage'
    id: string
    alt_text?: string | null
    description?: string | null
    image: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          hash: string
          mime: string
          name: string
          provider: string
          size: number
          url: string
          alternativeText?: string | null
          caption?: string | null
          createdAt?: any | null
          ext?: string | null
          formats?: any | null
          height?: number | null
          previewUrl?: string | null
          provider_metadata?: any | null
          updatedAt?: any | null
          width?: number | null
        } | null
      } | null
    }
    triply_record?: {
      __typename?: 'TriplyRecordEntityResponse'
      data?: {
        __typename?: 'TriplyRecordEntity'
        id?: string | null
        attributes?: {
          __typename?: 'TriplyRecord'
          recordId: string
          type: Enum_Triplyrecord_Type
        } | null
      } | null
    } | null
    story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: { __typename?: 'Story'; slug: string } | null
      } | null
    } | null
  } | null>
  explore_collection_button?: {
    __typename?: 'ComponentCoreButton'
    id: string
    text: string
    url: string
  } | null
}

export type ComponentModulesImageCarouselFragmentFragment = {
  __typename: 'ComponentModulesImageCarousel'
  id: string
  description?: string | null
  images?: {
    __typename?: 'UploadFileRelationResponseCollection'
    data: Array<{
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    }>
  } | null
}

export type ComponentModulesImageFragmentFragment = {
  __typename: 'ComponentModulesImage'
  alt_text?: string | null
  caption?: string | null
  id: string
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  }
  triplyRecord?: {
    __typename?: 'TriplyRecordEntityResponse'
    data?: {
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
      } | null
    } | null
  } | null
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Story'
        title: string
        slug: string
        description?: string | null
        shortDescription: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Author'
              firstName: string
              lastName: string
              insertion?: string | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type ComponentModulesPullquoteFragmentFragment = {
  __typename: 'ComponentModulesPullquote'
  id: string
  text?: string | null
}

export type ComponentModulesSubtitleFragmentFragment = {
  __typename: 'ComponentModulesSubtitle'
  id: string
  text?: string | null
}

export type ComponentModulesTextModuleFragmentFragment = {
  __typename: 'ComponentModulesTextModule'
  Richtext?: string | null
  id: string
}

export type ComponentModulesTitleModuleFragmentFragment = {
  __typename: 'ComponentModulesTitleModule'
  Title?: string | null
  id: string
}

export type ComponentModulesGridModuleFragmentFragment = {
  __typename: 'ComponentModulesGridModule'
  id: string
  description?: string | null
  pageSize: number
  title?: string | null
  showMoreButtonTitle: string
  fieldTitlesAreInverted: boolean
  fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
  buttons?: Array<{
    __typename?: 'ComponentCoreButton'
    id: string
    text: string
    url: string
  } | null> | null
  featuredFields?: Array<{
    __typename?: 'ComponentCoreFeaturedFields'
    id: string
    label: string
    value: string
  } | null> | null
  fields?: Array<{
    __typename?: 'ComponentCoreGridFeaturedFields'
    id: string
    subtitle?: string | null
    title: string
    story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: { __typename?: 'Story'; slug: string } | null
      } | null
    } | null
    thumbnail?: {
      __typename?: 'UploadFileEntityResponse'
      data?: {
        __typename?: 'UploadFileEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UploadFile'
          hash: string
          mime: string
          name: string
          provider: string
          size: number
          url: string
          alternativeText?: string | null
          caption?: string | null
          createdAt?: any | null
          ext?: string | null
          formats?: any | null
          height?: number | null
          previewUrl?: string | null
          provider_metadata?: any | null
          updatedAt?: any | null
          width?: number | null
        } | null
      } | null
    } | null
    triplyRecord?: {
      __typename?: 'TriplyRecordEntityResponse'
      data?: {
        __typename?: 'TriplyRecordEntity'
        id?: string | null
        attributes?: {
          __typename?: 'TriplyRecord'
          recordId: string
          type: Enum_Triplyrecord_Type
        } | null
      } | null
    } | null
  } | null> | null
}

export type ComponentModulesSideImageWithTextFragmentFragment = {
  __typename: 'ComponentModulesSideImageWithText'
  id: string
  sideText: string
  image_alt_text: string
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UploadFile'
        hash: string
        mime: string
        name: string
        provider: string
        size: number
        url: string
        alternativeText?: string | null
        caption?: string | null
        createdAt?: any | null
        ext?: string | null
        formats?: any | null
        height?: number | null
        previewUrl?: string | null
        provider_metadata?: any | null
        updatedAt?: any | null
        width?: number | null
      } | null
    } | null
  }
}

export type UploadFileFragmentFragment = {
  __typename?: 'UploadFile'
  hash: string
  mime: string
  name: string
  provider: string
  size: number
  url: string
  alternativeText?: string | null
  caption?: string | null
  createdAt?: any | null
  ext?: string | null
  formats?: any | null
  height?: number | null
  previewUrl?: string | null
  provider_metadata?: any | null
  updatedAt?: any | null
  width?: number | null
}

export type PaginationFragmentFragment = {
  __typename?: 'Pagination'
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type ResponseCollectionMetaFragmentFragment = {
  __typename?: 'ResponseCollectionMeta'
  pagination: {
    __typename?: 'Pagination'
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export type UploadFileRelationResponseCollectionFragmentFragment = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<{
    __typename?: 'UploadFileEntity'
    id?: string | null
    attributes?: {
      __typename?: 'UploadFile'
      hash: string
      mime: string
      name: string
      provider: string
      size: number
      url: string
      alternativeText?: string | null
      caption?: string | null
      createdAt?: any | null
      ext?: string | null
      formats?: any | null
      height?: number | null
      previewUrl?: string | null
      provider_metadata?: any | null
      updatedAt?: any | null
      width?: number | null
    } | null
  }>
}

export type UploadFileEntityResponseFragmentFragment = {
  __typename?: 'UploadFileEntityResponse'
  data?: {
    __typename?: 'UploadFileEntity'
    id?: string | null
    attributes?: {
      __typename?: 'UploadFile'
      hash: string
      mime: string
      name: string
      provider: string
      size: number
      url: string
      alternativeText?: string | null
      caption?: string | null
      createdAt?: any | null
      ext?: string | null
      formats?: any | null
      height?: number | null
      previewUrl?: string | null
      provider_metadata?: any | null
      updatedAt?: any | null
      width?: number | null
    } | null
  } | null
}

export type ErrorFragmentFragment = { __typename?: 'Error'; code: string; message?: string | null }

export type ThemeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type ThemeQuery = {
  __typename?: 'Query'
  theme?: {
    __typename?: 'ThemeEntityResponse'
    data?: {
      __typename?: 'ThemeEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Theme'
        name: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
        } | null
      } | null
    } | null
  } | null
}

export type ThemesQueryVariables = Exact<{
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type ThemesQuery = {
  __typename?: 'Query'
  themes?: {
    __typename?: 'ThemeEntityResponseCollection'
    data: Array<{
      __typename?: 'ThemeEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Theme'
        name: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type StoriesRelatedToThemeQueryVariables = Exact<{
  storyId: Scalars['ID']
  lang?: InputMaybe<Scalars['I18NLocaleCode']>
  publicationState?: InputMaybe<PublicationState>
}>

export type StoriesRelatedToThemeQuery = {
  __typename?: 'Query'
  themes?: {
    __typename?: 'ThemeEntityResponseCollection'
    data: Array<{
      __typename?: 'ThemeEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Theme'
        name: string
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
        localizations?: {
          __typename?: 'ThemeRelationResponseCollection'
          data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
        } | null
      } | null
    }>
  } | null
}

export type ThemeFragmentFragment = {
  __typename?: 'ThemeEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Theme'
    name: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          description?: string | null
          shortDescription: string
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentCoreMuxAudio'
                id: string
                caption?: string | null
                muxAudioRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreMuxVideo'
                id: string
                caption?: string | null
                muxVideoRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreStandAloneLink'
                id: string
                label: string
                url?: string | null
                attachment?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | {
                __typename: 'ComponentModulesSideImageWithText'
                id: string
                sideText: string
                image_alt_text: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
              }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              text: string
              url: string
            } | null> | null
          } | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          timeframe?: {
            __typename?: 'ComponentCoreTimeframe'
            id: string
            yearStart?: any | null
            yearEnd?: any | null
          } | null
          locations?: {
            __typename?: 'LocationRelationResponseCollection'
            data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
          } | null
          publicationDate?: {
            __typename?: 'ComponentCorePublicationDate'
            id: string
            date?: any | null
            displayType?: Enum_Componentcorepublicationdate_Displaytype | null
          } | null
          triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            }>
          } | null
          localizations?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        } | null
      }>
    } | null
    localizations?: {
      __typename?: 'ThemeRelationResponseCollection'
      data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
    } | null
  } | null
}

export type ThemeFragmentWithHighlightedStoriesFragment = {
  __typename?: 'ThemeEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Theme'
    name: string
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          description?: string | null
          shortDescription: string
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentCoreMuxAudio'
                id: string
                caption?: string | null
                muxAudioRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreMuxVideo'
                id: string
                caption?: string | null
                muxVideoRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreStandAloneLink'
                id: string
                label: string
                url?: string | null
                attachment?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | {
                __typename: 'ComponentModulesSideImageWithText'
                id: string
                sideText: string
                image_alt_text: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
              }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              text: string
              url: string
            } | null> | null
          } | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          timeframe?: {
            __typename?: 'ComponentCoreTimeframe'
            id: string
            yearStart?: any | null
            yearEnd?: any | null
          } | null
          locations?: {
            __typename?: 'LocationRelationResponseCollection'
            data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
          } | null
          publicationDate?: {
            __typename?: 'ComponentCorePublicationDate'
            id: string
            date?: any | null
            displayType?: Enum_Componentcorepublicationdate_Displaytype | null
          } | null
          triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            }>
          } | null
          localizations?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        } | null
      }>
    } | null
    highlightedStories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          description?: string | null
          shortDescription: string
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentCoreMuxAudio'
                id: string
                caption?: string | null
                muxAudioRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreMuxVideo'
                id: string
                caption?: string | null
                muxVideoRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreStandAloneLink'
                id: string
                label: string
                url?: string | null
                attachment?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | {
                __typename: 'ComponentModulesSideImageWithText'
                id: string
                sideText: string
                image_alt_text: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
              }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              text: string
              url: string
            } | null> | null
          } | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          timeframe?: {
            __typename?: 'ComponentCoreTimeframe'
            id: string
            yearStart?: any | null
            yearEnd?: any | null
          } | null
          locations?: {
            __typename?: 'LocationRelationResponseCollection'
            data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
          } | null
          publicationDate?: {
            __typename?: 'ComponentCorePublicationDate'
            id: string
            date?: any | null
            displayType?: Enum_Componentcorepublicationdate_Displaytype | null
          } | null
          triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            }>
          } | null
          localizations?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        } | null
      }>
    } | null
    localizations?: {
      __typename?: 'ThemeRelationResponseCollection'
      data: Array<{ __typename?: 'ThemeEntity'; id?: string | null }>
    } | null
  } | null
}

export type BaseTriplyRecordFragmentFragment = {
  __typename?: 'TriplyRecordEntity'
  id?: string | null
  attributes?: {
    __typename?: 'TriplyRecord'
    recordId: string
    type: Enum_Triplyrecord_Type
  } | null
}

export type TriplyRecordQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type TriplyRecordQuery = {
  __typename?: 'Query'
  triplyRecord?: {
    __typename?: 'TriplyRecordEntityResponse'
    data?: {
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        subject_collectionHighlights?: boolean | null
        label?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type TriplyRecordsQueryVariables = Exact<{
  filters?: InputMaybe<TriplyRecordFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
}>

export type TriplyRecordsQuery = {
  __typename?: 'Query'
  triplyRecords?: {
    __typename?: 'TriplyRecordEntityResponseCollection'
    data: Array<{
      __typename?: 'TriplyRecordEntity'
      id?: string | null
      attributes?: {
        __typename?: 'TriplyRecord'
        recordId: string
        type: Enum_Triplyrecord_Type
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        subject_collectionHighlights?: boolean | null
        label?: string | null
        stories?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              description?: string | null
              shortDescription: string
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentCoreMuxAudio'
                    id: string
                    caption?: string | null
                    muxAudioRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreMuxVideo'
                    id: string
                    caption?: string | null
                    muxVideoRelation?: {
                      __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                      data?: {
                        __typename?: 'MuxVideoUploaderMuxAssetEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'MuxVideoUploaderMuxAsset'
                          title: string
                          upload_id?: string | null
                          asset_id?: string | null
                          playback_id?: string | null
                          signed: boolean
                          error_message?: string | null
                          isReady?: boolean | null
                          duration?: number | null
                          aspect_ratio?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentCoreStandAloneLink'
                    id: string
                    label: string
                    url?: string | null
                    attachment?: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    } | null
                  }
                | { __typename: 'ComponentModulesButtonsModule' }
                | {
                    __typename: 'ComponentModulesImage'
                    alt_text?: string | null
                    caption?: string | null
                    id: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                    triplyRecord?: {
                      __typename?: 'TriplyRecordEntityResponse'
                      data?: {
                        __typename?: 'TriplyRecordEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'TriplyRecord'
                          recordId: string
                          type: Enum_Triplyrecord_Type
                        } | null
                      } | null
                    } | null
                    story?: {
                      __typename?: 'StoryEntityResponse'
                      data?: {
                        __typename?: 'StoryEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Story'
                          title: string
                          slug: string
                          description?: string | null
                          shortDescription: string
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Author'
                                firstName: string
                                lastName: string
                                insertion?: string | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesImageCarousel'
                    id: string
                    description?: string | null
                    images?: {
                      __typename?: 'UploadFileRelationResponseCollection'
                      data: Array<{
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      }>
                    } | null
                  }
                | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
                | {
                    __typename: 'ComponentModulesSideImageWithText'
                    id: string
                    sideText: string
                    image_alt_text: string
                    image: {
                      __typename?: 'UploadFileEntityResponse'
                      data?: {
                        __typename?: 'UploadFileEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'UploadFile'
                          hash: string
                          mime: string
                          name: string
                          provider: string
                          size: number
                          url: string
                          alternativeText?: string | null
                          caption?: string | null
                          createdAt?: any | null
                          ext?: string | null
                          formats?: any | null
                          height?: number | null
                          previewUrl?: string | null
                          provider_metadata?: any | null
                          updatedAt?: any | null
                          width?: number | null
                        } | null
                      } | null
                    }
                  }
                | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
                | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
                | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  text: string
                  url: string
                } | null> | null
              } | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Author'
                    firstName: string
                    lastName: string
                    insertion?: string | null
                  } | null
                } | null
              } | null
              timeframe?: {
                __typename?: 'ComponentCoreTimeframe'
                id: string
                yearStart?: any | null
                yearEnd?: any | null
              } | null
              locations?: {
                __typename?: 'LocationRelationResponseCollection'
                data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
              } | null
              publicationDate?: {
                __typename?: 'ComponentCorePublicationDate'
                id: string
                date?: any | null
                displayType?: Enum_Componentcorepublicationdate_Displaytype | null
              } | null
              triplyRecords?: {
                __typename?: 'TriplyRecordRelationResponseCollection'
                data: Array<{
                  __typename?: 'TriplyRecordEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'TriplyRecord'
                    recordId: string
                    type: Enum_Triplyrecord_Type
                  } | null
                }>
              } | null
              localizations?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
              } | null
              parent_story?: {
                __typename?: 'StoryEntityResponse'
                data?: {
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
              child_stories?: {
                __typename?: 'StoryRelationResponseCollection'
                data: Array<{
                  __typename?: 'StoryEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Story'
                    title: string
                    components?: Array<
                      | { __typename: 'ComponentCoreMuxAudio' }
                      | { __typename: 'ComponentCoreMuxVideo' }
                      | { __typename: 'ComponentCoreStandAloneLink' }
                      | { __typename: 'ComponentModulesButtonsModule' }
                      | {
                          __typename: 'ComponentModulesImage'
                          alt_text?: string | null
                          caption?: string | null
                          id: string
                          image: {
                            __typename?: 'UploadFileEntityResponse'
                            data?: {
                              __typename?: 'UploadFileEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'UploadFile'
                                hash: string
                                mime: string
                                name: string
                                provider: string
                                size: number
                                url: string
                                alternativeText?: string | null
                                caption?: string | null
                                createdAt?: any | null
                                ext?: string | null
                                formats?: any | null
                                height?: number | null
                                previewUrl?: string | null
                                provider_metadata?: any | null
                                updatedAt?: any | null
                                width?: number | null
                              } | null
                            } | null
                          }
                          triplyRecord?: {
                            __typename?: 'TriplyRecordEntityResponse'
                            data?: {
                              __typename?: 'TriplyRecordEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'TriplyRecord'
                                recordId: string
                                type: Enum_Triplyrecord_Type
                              } | null
                            } | null
                          } | null
                          story?: {
                            __typename?: 'StoryEntityResponse'
                            data?: {
                              __typename?: 'StoryEntity'
                              id?: string | null
                              attributes?: {
                                __typename?: 'Story'
                                title: string
                                slug: string
                                description?: string | null
                                shortDescription: string
                                createdAt?: any | null
                                updatedAt?: any | null
                                publishedAt?: any | null
                                locale?: string | null
                                author?: {
                                  __typename?: 'AuthorEntityResponse'
                                  data?: {
                                    __typename?: 'AuthorEntity'
                                    id?: string | null
                                    attributes?: {
                                      __typename?: 'Author'
                                      firstName: string
                                      lastName: string
                                      insertion?: string | null
                                    } | null
                                  } | null
                                } | null
                              } | null
                            } | null
                          } | null
                        }
                      | { __typename: 'ComponentModulesImageCarousel' }
                      | { __typename: 'ComponentModulesPullquote' }
                      | { __typename: 'ComponentModulesSideImageWithText' }
                      | { __typename: 'ComponentModulesSubtitle' }
                      | { __typename: 'ComponentModulesTextModule' }
                      | { __typename: 'ComponentModulesTitleModule' }
                      | { __typename: 'Error' }
                      | null
                    > | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Author'
                          firstName: string
                          lastName: string
                          insertion?: string | null
                        } | null
                      } | null
                    } | null
                  } | null
                }>
              } | null
            } | null
          }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export type TriplyRecordFragmentFragment = {
  __typename?: 'TriplyRecordEntity'
  id?: string | null
  attributes?: {
    __typename?: 'TriplyRecord'
    recordId: string
    type: Enum_Triplyrecord_Type
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    subject_collectionHighlights?: boolean | null
    label?: string | null
    stories?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          description?: string | null
          shortDescription: string
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentCoreMuxAudio'
                id: string
                caption?: string | null
                muxAudioRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreMuxVideo'
                id: string
                caption?: string | null
                muxVideoRelation?: {
                  __typename?: 'MuxVideoUploaderMuxAssetEntityResponse'
                  data?: {
                    __typename?: 'MuxVideoUploaderMuxAssetEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'MuxVideoUploaderMuxAsset'
                      title: string
                      upload_id?: string | null
                      asset_id?: string | null
                      playback_id?: string | null
                      signed: boolean
                      error_message?: string | null
                      isReady?: boolean | null
                      duration?: number | null
                      aspect_ratio?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentCoreStandAloneLink'
                id: string
                label: string
                url?: string | null
                attachment?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                } | null
              }
            | { __typename: 'ComponentModulesButtonsModule' }
            | {
                __typename: 'ComponentModulesImage'
                alt_text?: string | null
                caption?: string | null
                id: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
                triplyRecord?: {
                  __typename?: 'TriplyRecordEntityResponse'
                  data?: {
                    __typename?: 'TriplyRecordEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'TriplyRecord'
                      recordId: string
                      type: Enum_Triplyrecord_Type
                    } | null
                  } | null
                } | null
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Story'
                      title: string
                      slug: string
                      description?: string | null
                      shortDescription: string
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Author'
                            firstName: string
                            lastName: string
                            insertion?: string | null
                          } | null
                        } | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesImageCarousel'
                id: string
                description?: string | null
                images?: {
                  __typename?: 'UploadFileRelationResponseCollection'
                  data: Array<{
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  }>
                } | null
              }
            | { __typename: 'ComponentModulesPullquote'; id: string; text?: string | null }
            | {
                __typename: 'ComponentModulesSideImageWithText'
                id: string
                sideText: string
                image_alt_text: string
                image: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'UploadFile'
                      hash: string
                      mime: string
                      name: string
                      provider: string
                      size: number
                      url: string
                      alternativeText?: string | null
                      caption?: string | null
                      createdAt?: any | null
                      ext?: string | null
                      formats?: any | null
                      height?: number | null
                      previewUrl?: string | null
                      provider_metadata?: any | null
                      updatedAt?: any | null
                      width?: number | null
                    } | null
                  } | null
                }
              }
            | { __typename: 'ComponentModulesSubtitle'; id: string; text?: string | null }
            | { __typename: 'ComponentModulesTextModule'; Richtext?: string | null; id: string }
            | { __typename: 'ComponentModulesTitleModule'; Title?: string | null; id: string }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              text: string
              url: string
            } | null> | null
          } | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: {
              __typename?: 'AuthorEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Author'
                firstName: string
                lastName: string
                insertion?: string | null
              } | null
            } | null
          } | null
          timeframe?: {
            __typename?: 'ComponentCoreTimeframe'
            id: string
            yearStart?: any | null
            yearEnd?: any | null
          } | null
          locations?: {
            __typename?: 'LocationRelationResponseCollection'
            data: Array<{ __typename?: 'LocationEntity'; id?: string | null }>
          } | null
          publicationDate?: {
            __typename?: 'ComponentCorePublicationDate'
            id: string
            date?: any | null
            displayType?: Enum_Componentcorepublicationdate_Displaytype | null
          } | null
          triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
              __typename?: 'TriplyRecordEntity'
              id?: string | null
              attributes?: {
                __typename?: 'TriplyRecord'
                recordId: string
                type: Enum_Triplyrecord_Type
              } | null
            }>
          } | null
          localizations?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{ __typename?: 'StoryEntity'; id?: string | null }>
          } | null
          parent_story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            } | null
          } | null
          child_stories?: {
            __typename?: 'StoryRelationResponseCollection'
            data: Array<{
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Story'
                title: string
                components?: Array<
                  | { __typename: 'ComponentCoreMuxAudio' }
                  | { __typename: 'ComponentCoreMuxVideo' }
                  | { __typename: 'ComponentCoreStandAloneLink' }
                  | { __typename: 'ComponentModulesButtonsModule' }
                  | {
                      __typename: 'ComponentModulesImage'
                      alt_text?: string | null
                      caption?: string | null
                      id: string
                      image: {
                        __typename?: 'UploadFileEntityResponse'
                        data?: {
                          __typename?: 'UploadFileEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'UploadFile'
                            hash: string
                            mime: string
                            name: string
                            provider: string
                            size: number
                            url: string
                            alternativeText?: string | null
                            caption?: string | null
                            createdAt?: any | null
                            ext?: string | null
                            formats?: any | null
                            height?: number | null
                            previewUrl?: string | null
                            provider_metadata?: any | null
                            updatedAt?: any | null
                            width?: number | null
                          } | null
                        } | null
                      }
                      triplyRecord?: {
                        __typename?: 'TriplyRecordEntityResponse'
                        data?: {
                          __typename?: 'TriplyRecordEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'TriplyRecord'
                            recordId: string
                            type: Enum_Triplyrecord_Type
                          } | null
                        } | null
                      } | null
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: {
                            __typename?: 'Story'
                            title: string
                            slug: string
                            description?: string | null
                            shortDescription: string
                            createdAt?: any | null
                            updatedAt?: any | null
                            publishedAt?: any | null
                            locale?: string | null
                            author?: {
                              __typename?: 'AuthorEntityResponse'
                              data?: {
                                __typename?: 'AuthorEntity'
                                id?: string | null
                                attributes?: {
                                  __typename?: 'Author'
                                  firstName: string
                                  lastName: string
                                  insertion?: string | null
                                } | null
                              } | null
                            } | null
                          } | null
                        } | null
                      } | null
                    }
                  | { __typename: 'ComponentModulesImageCarousel' }
                  | { __typename: 'ComponentModulesPullquote' }
                  | { __typename: 'ComponentModulesSideImageWithText' }
                  | { __typename: 'ComponentModulesSubtitle' }
                  | { __typename: 'ComponentModulesTextModule' }
                  | { __typename: 'ComponentModulesTitleModule' }
                  | { __typename: 'Error' }
                  | null
                > | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Author'
                      firstName: string
                      lastName: string
                      insertion?: string | null
                    } | null
                  } | null
                } | null
              } | null
            }>
          } | null
        } | null
      }>
    } | null
  } | null
}

export type UsersPermissionsPermissionFragmentFragment = {
  __typename?: 'UsersPermissionsPermission'
  action: string
  createdAt?: any | null
  updatedAt?: any | null
}

export type UsersPermissionsRoleFragmentFragment = {
  __typename?: 'UsersPermissionsRole'
  name: string
  description?: string | null
  type?: string | null
  createdAt?: any | null
  updatedAt?: any | null
}

export type UsersPermissionsUserFragmentFragment = {
  __typename?: 'UsersPermissionsUser'
  username: string
  email: string
  provider?: string | null
  confirmed?: boolean | null
  blocked?: boolean | null
  createdAt?: any | null
  updatedAt?: any | null
  role?: {
    __typename?: 'UsersPermissionsRoleEntityResponse'
    data?: {
      __typename?: 'UsersPermissionsRoleEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsRole'
        name: string
        description?: string | null
        type?: string | null
        createdAt?: any | null
        updatedAt?: any | null
      } | null
    } | null
  } | null
}

export type UsersPermissionsUserEntityFragmentFragment = {
  __typename?: 'UsersPermissionsUserEntity'
  id?: string | null
  attributes?: {
    __typename?: 'UsersPermissionsUser'
    username: string
    email: string
    provider?: string | null
    confirmed?: boolean | null
    blocked?: boolean | null
    createdAt?: any | null
    updatedAt?: any | null
    role?: {
      __typename?: 'UsersPermissionsRoleEntityResponse'
      data?: {
        __typename?: 'UsersPermissionsRoleEntity'
        id?: string | null
        attributes?: {
          __typename?: 'UsersPermissionsRole'
          name: string
          description?: string | null
          type?: string | null
          createdAt?: any | null
          updatedAt?: any | null
        } | null
      } | null
    } | null
  } | null
}

export type UsersPermissionsUserEntityResponseFragmentFragment = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: {
    __typename?: 'UsersPermissionsUserEntity'
    id?: string | null
    attributes?: {
      __typename?: 'UsersPermissionsUser'
      username: string
      email: string
      provider?: string | null
      confirmed?: boolean | null
      blocked?: boolean | null
      createdAt?: any | null
      updatedAt?: any | null
      role?: {
        __typename?: 'UsersPermissionsRoleEntityResponse'
        data?: {
          __typename?: 'UsersPermissionsRoleEntity'
          id?: string | null
          attributes?: {
            __typename?: 'UsersPermissionsRole'
            name: string
            description?: string | null
            type?: string | null
            createdAt?: any | null
            updatedAt?: any | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type UsersPermissionsUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type UsersPermissionsUserQuery = {
  __typename?: 'Query'
  usersPermissionsUser?: {
    __typename?: 'UsersPermissionsUserEntityResponse'
    data?: {
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsUser'
        username: string
        email: string
        provider?: string | null
        confirmed?: boolean | null
        blocked?: boolean | null
        createdAt?: any | null
        updatedAt?: any | null
        role?: {
          __typename?: 'UsersPermissionsRoleEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsRoleEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UsersPermissionsRole'
              name: string
              description?: string | null
              type?: string | null
              createdAt?: any | null
              updatedAt?: any | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type UsersPermissionsUsersQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
}>

export type UsersPermissionsUsersQuery = {
  __typename?: 'Query'
  usersPermissionsUsers?: {
    __typename?: 'UsersPermissionsUserEntityResponseCollection'
    data: Array<{
      __typename?: 'UsersPermissionsUserEntity'
      id?: string | null
      attributes?: {
        __typename?: 'UsersPermissionsUser'
        username: string
        email: string
        provider?: string | null
        confirmed?: boolean | null
        blocked?: boolean | null
        createdAt?: any | null
        updatedAt?: any | null
        role?: {
          __typename?: 'UsersPermissionsRoleEntityResponse'
          data?: {
            __typename?: 'UsersPermissionsRoleEntity'
            id?: string | null
            attributes?: {
              __typename?: 'UsersPermissionsRole'
              name: string
              description?: string | null
              type?: string | null
              createdAt?: any | null
              updatedAt?: any | null
            } | null
          } | null
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}

export const AuthorFragmentFragmentDoc = gql`
  fragment AuthorFragment on AuthorEntity {
    id
    attributes {
      firstName
      insertion
      lastName
      createdAt
      updatedAt
      publishedAt
    }
  }
`
export const ComponentModulesTextModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesTextModuleFragment on ComponentModulesTextModule {
    Richtext
    id
    __typename
  }
`
export const UploadFileFragmentFragmentDoc = gql`
  fragment UploadFileFragment on UploadFile {
    hash
    mime
    name
    provider
    size
    url
    alternativeText
    caption
    createdAt
    ext
    formats
    height
    previewUrl
    provider_metadata
    updatedAt
    width
  }
`
export const UploadFileEntityResponseFragmentFragmentDoc = gql`
  fragment UploadFileEntityResponseFragment on UploadFileEntityResponse {
    data {
      id
      attributes {
        ...UploadFileFragment
      }
    }
  }
  ${UploadFileFragmentFragmentDoc}
`
export const BaseTriplyRecordFragmentFragmentDoc = gql`
  fragment BaseTriplyRecordFragment on TriplyRecordEntity {
    id
    attributes {
      recordId
      type
    }
  }
`
export const StoryWithoutRelationsFragmentFragmentDoc = gql`
  fragment StoryWithoutRelationsFragment on StoryEntity {
    id
    attributes {
      title
      slug
      description
      shortDescription
      createdAt
      updatedAt
      publishedAt
      locale
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
    }
  }
`
export const ComponentModulesImageFragmentFragmentDoc = gql`
  fragment ComponentModulesImageFragment on ComponentModulesImage {
    alt_text
    caption
    id
    __typename
    image {
      ...UploadFileEntityResponseFragment
    }
    triplyRecord {
      data {
        ...BaseTriplyRecordFragment
      }
    }
    story {
      data {
        ...StoryWithoutRelationsFragment
      }
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${StoryWithoutRelationsFragmentFragmentDoc}
`
export const ComponentCoreButtonFragmentFragmentDoc = gql`
  fragment ComponentCoreButtonFragment on ComponentCoreButton {
    id
    text
    url
  }
`
export const ComponentCoreFeaturedFieldsFragmentFragmentDoc = gql`
  fragment ComponentCoreFeaturedFieldsFragment on ComponentCoreFeaturedFields {
    id
    label
    value
  }
`
export const ComponentCoreGridFeaturedFieldsFragmentFragmentDoc = gql`
  fragment ComponentCoreGridFeaturedFieldsFragment on ComponentCoreGridFeaturedFields {
    id
    subtitle
    title
    story {
      data {
        id
        attributes {
          slug
        }
      }
    }
    thumbnail {
      ...UploadFileEntityResponseFragment
    }
    triplyRecord {
      data {
        ...BaseTriplyRecordFragment
      }
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
`
export const ComponentModulesGridModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesGridModuleFragment on ComponentModulesGridModule {
    __typename
    id
    description
    pageSize
    title
    showMoreButtonTitle
    fieldTitlesAreInverted
    fieldTypes
    buttons {
      ...ComponentCoreButtonFragment
    }
    featuredFields {
      ...ComponentCoreFeaturedFieldsFragment
    }
    fields {
      ...ComponentCoreGridFeaturedFieldsFragment
    }
  }
  ${ComponentCoreButtonFragmentFragmentDoc}
  ${ComponentCoreFeaturedFieldsFragmentFragmentDoc}
  ${ComponentCoreGridFeaturedFieldsFragmentFragmentDoc}
`
export const ComponentModulesPullquoteFragmentFragmentDoc = gql`
  fragment ComponentModulesPullquoteFragment on ComponentModulesPullquote {
    id
    __typename
    text
  }
`
export const ComponentModulesSubtitleFragmentFragmentDoc = gql`
  fragment ComponentModulesSubtitleFragment on ComponentModulesSubtitle {
    id
    __typename
    text
  }
`
export const ComponentModulesTitleModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesTitleModuleFragment on ComponentModulesTitleModule {
    Title
    id
    __typename
  }
`
export const UploadFileRelationResponseCollectionFragmentFragmentDoc = gql`
  fragment UploadFileRelationResponseCollectionFragment on UploadFileRelationResponseCollection {
    data {
      id
      attributes {
        ...UploadFileFragment
      }
    }
  }
  ${UploadFileFragmentFragmentDoc}
`
export const ComponentModulesImageCarouselFragmentFragmentDoc = gql`
  fragment ComponentModulesImageCarouselFragment on ComponentModulesImageCarousel {
    id
    description
    __typename
    images {
      ...UploadFileRelationResponseCollectionFragment
    }
  }
  ${UploadFileRelationResponseCollectionFragmentFragmentDoc}
`
export const ComponentModulesButtonsModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesButtonsModuleFragment on ComponentModulesButtonsModule {
    id
    __typename
    buttons {
      ...ComponentCoreButtonFragment
    }
  }
  ${ComponentCoreButtonFragmentFragmentDoc}
`
export const ErrorFragmentFragmentDoc = gql`
  fragment ErrorFragment on Error {
    code
    message
  }
`
export const HomepageFragmentFragmentDoc = gql`
  fragment HomepageFragment on Homepage {
    __typename
    Title
    createdAt
    locale
    publishedAt
    updatedAt
    description
    components {
      ... on ComponentModulesTextModule {
        ...ComponentModulesTextModuleFragment
      }
      ... on ComponentModulesImage {
        ...ComponentModulesImageFragment
      }
      ... on ComponentModulesGridModule {
        ...ComponentModulesGridModuleFragment
      }
      ... on ComponentModulesPullquote {
        ...ComponentModulesPullquoteFragment
      }
      ... on ComponentModulesSubtitle {
        ...ComponentModulesSubtitleFragment
      }
      ... on ComponentModulesTitleModule {
        ...ComponentModulesTitleModuleFragment
      }
      ... on ComponentModulesImageCarousel {
        ...ComponentModulesImageCarouselFragment
      }
      ... on ComponentModulesButtonsModule {
        ...ComponentModulesButtonsModuleFragment
      }
      ... on Error {
        ...ErrorFragment
      }
    }
  }
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`
export const LandingpageFragmentFragmentDoc = gql`
  fragment LandingpageFragment on Landingpage {
    Title
    Description
    slug
    createdAt
    updatedAt
    publishedAt
    locale
    components {
      ... on ComponentModulesTextModule {
        ...ComponentModulesTextModuleFragment
      }
      ... on ComponentModulesGridModule {
        ...ComponentModulesGridModuleFragment
      }
      ... on ComponentModulesSubtitle {
        ...ComponentModulesSubtitleFragment
      }
      ... on ComponentModulesTitleModule {
        ...ComponentModulesTitleModuleFragment
      }
      ... on ComponentModulesImageCarousel {
        ...ComponentModulesImageCarouselFragment
      }
      ... on ComponentModulesImage {
        ...ComponentModulesImageFragment
      }
      ... on ComponentModulesPullquote {
        ...ComponentModulesPullquoteFragment
      }
      ... on ComponentModulesButtonsModule {
        ...ComponentModulesButtonsModuleFragment
      }
      ... on Error {
        ...ErrorFragment
      }
    }
  }
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`
export const LandingpageEntityFragmentFragmentDoc = gql`
  fragment LandingpageEntityFragment on LandingpageEntity {
    id
    attributes {
      ...LandingpageFragment
      localizations {
        data {
          id
          attributes {
            ...LandingpageFragment
          }
        }
      }
    }
  }
  ${LandingpageFragmentFragmentDoc}
`
export const LocationFragmentFragmentDoc = gql`
  fragment LocationFragment on LocationEntity {
    id
    attributes {
      city
      stories {
        data {
          id
        }
      }
      createdAt
      updatedAt
      publishedAt
      localizations {
        data {
          id
        }
      }
      locale
    }
  }
`
export const ComponentCoreStandAloneLinkFragmentFragmentDoc = gql`
  fragment ComponentCoreStandAloneLinkFragment on ComponentCoreStandAloneLink {
    id
    label
    url
    attachment {
      ...UploadFileEntityResponseFragment
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
`
export const ComponentCoreMuxAudioFragmentFragmentDoc = gql`
  fragment ComponentCoreMuxAudioFragment on ComponentCoreMuxAudio {
    id
    caption
    muxAudioRelation {
      data {
        id
        attributes {
          title
          upload_id
          asset_id
          playback_id
          signed
          error_message
          isReady
          duration
          aspect_ratio
          createdAt
          updatedAt
        }
      }
    }
  }
`
export const ComponentCoreMuxVideoFragmentFragmentDoc = gql`
  fragment ComponentCoreMuxVideoFragment on ComponentCoreMuxVideo {
    id
    caption
    muxVideoRelation {
      data {
        id
        attributes {
          title
          upload_id
          asset_id
          playback_id
          signed
          error_message
          isReady
          duration
          aspect_ratio
          createdAt
          updatedAt
        }
      }
    }
  }
`
export const ComponentModulesSideImageWithTextFragmentFragmentDoc = gql`
  fragment ComponentModulesSideImageWithTextFragment on ComponentModulesSideImageWithText {
    __typename
    id
    sideText
    image_alt_text
    image {
      ...UploadFileEntityResponseFragment
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
`
export const StoryComponentsFragmentFragmentDoc = gql`
  fragment StoryComponentsFragment on StoryComponentsDynamicZone {
    __typename
    ... on ComponentModulesPullquote {
      ...ComponentModulesPullquoteFragment
    }
    ... on ComponentModulesTextModule {
      ...ComponentModulesTextModuleFragment
    }
    ... on ComponentModulesSubtitle {
      ...ComponentModulesSubtitleFragment
    }
    ... on ComponentModulesTitleModule {
      ...ComponentModulesTitleModuleFragment
    }
    ... on ComponentModulesImageCarousel {
      ...ComponentModulesImageCarouselFragment
    }
    ... on ComponentModulesImage {
      ...ComponentModulesImageFragment
    }
    ... on ComponentCoreStandAloneLink {
      ...ComponentCoreStandAloneLinkFragment
    }
    ... on ComponentCoreMuxAudio {
      ...ComponentCoreMuxAudioFragment
    }
    ... on ComponentCoreMuxVideo {
      ...ComponentCoreMuxVideoFragment
    }
    ... on ComponentModulesSideImageWithText {
      ...ComponentModulesSideImageWithTextFragment
    }
    ... on Error {
      ...ErrorFragment
    }
  }
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentCoreStandAloneLinkFragmentFragmentDoc}
  ${ComponentCoreMuxAudioFragmentFragmentDoc}
  ${ComponentCoreMuxVideoFragmentFragmentDoc}
  ${ComponentModulesSideImageWithTextFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`
export const NestedStoryFragmentFragmentDoc = gql`
  fragment NestedStoryFragment on StoryEntity {
    id
    attributes {
      title
      slug
      description
      locale
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
      parent_story {
        data {
          id
          attributes {
            title
            slug
            locale
          }
        }
      }
      child_stories {
        data {
          id
          attributes {
            title
            slug
            locale
          }
        }
      }
      components {
        ...StoryComponentsFragment
      }
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
    }
  }
  ${StoryComponentsFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
`
export const LocalizedStoryFragmentFragmentDoc = gql`
  fragment LocalizedStoryFragment on StoryEntity {
    id
    attributes {
      title
      slug
      description
      locale
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
      parent_story {
        data {
          id
          attributes {
            title
            slug
            locale
          }
        }
      }
      child_stories {
        data {
          id
          attributes {
            title
            slug
            locale
          }
        }
      }
      components {
        ...StoryComponentsFragment
      }
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
      localizations {
        data {
          ...NestedStoryFragment
        }
      }
    }
  }
  ${StoryComponentsFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${NestedStoryFragmentFragmentDoc}
`
export const StoryMetaFragmentFragmentDoc = gql`
  fragment StoryMetaFragment on StoryEntity {
    id
    attributes {
      title
      slug
      shortDescription
      createdAt
      updatedAt
      publishedAt
      locale
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
      timeframe {
        id
        yearStart
        yearEnd
      }
      locations {
        data {
          id
          attributes {
            city
          }
        }
      }
      themes {
        data {
          id
          attributes {
            name
          }
        }
      }
      publicationDate {
        id
        date
        displayType
      }
      triplyRecords {
        data {
          ...BaseTriplyRecordFragment
        }
      }
      parent_story {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
      child_stories {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
    }
  }
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
`
export const LocalizedStoryMetaFragmentFragmentDoc = gql`
  fragment LocalizedStoryMetaFragment on StoryEntity {
    id
    attributes {
      title
      slug
      shortDescription
      description
      createdAt
      updatedAt
      publishedAt
      locale
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
      timeframe {
        id
        yearStart
        yearEnd
      }
      locations {
        data {
          id
          attributes {
            city
          }
        }
      }
      themes {
        data {
          id
          attributes {
            name
          }
        }
      }
      parent_story {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
      child_stories {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
      publicationDate {
        id
        date
        displayType
      }
      triplyRecords {
        data {
          ...BaseTriplyRecordFragment
        }
      }
      localizations {
        data {
          ...StoryMetaFragment
        }
      }
    }
  }
  ${ComponentModulesImageFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${StoryMetaFragmentFragmentDoc}
`
export const ComponentCorePublicationDateFragmentFragmentDoc = gql`
  fragment ComponentCorePublicationDateFragment on ComponentCorePublicationDate {
    id
    date
    displayType
  }
`
export const ComponentCoreTimeframeFragmentFragmentDoc = gql`
  fragment ComponentCoreTimeframeFragment on ComponentCoreTimeframe {
    id
    yearEnd
    yearStart
  }
`
export const ComponentCoreCarouselImageFragmentFragmentDoc = gql`
  fragment ComponentCoreCarouselImageFragment on ComponentCoreCarouselImage {
    id
    alt_text
    description
    image {
      ...UploadFileEntityResponseFragment
    }
    triply_record {
      data {
        ...BaseTriplyRecordFragment
      }
    }
    story {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
`
export const ComponentModulesCarouselFragmentFragmentDoc = gql`
  fragment ComponentModulesCarouselFragment on ComponentModulesCarousel {
    id
    description
    __typename
    title
    variant
    images {
      ...ComponentCoreCarouselImageFragment
    }
    explore_collection_button {
      ...ComponentCoreButtonFragment
    }
  }
  ${ComponentCoreCarouselImageFragmentFragmentDoc}
  ${ComponentCoreButtonFragmentFragmentDoc}
`
export const PaginationFragmentFragmentDoc = gql`
  fragment PaginationFragment on Pagination {
    page
    pageCount
    pageSize
    total
  }
`
export const ResponseCollectionMetaFragmentFragmentDoc = gql`
  fragment ResponseCollectionMetaFragment on ResponseCollectionMeta {
    pagination {
      ...PaginationFragment
    }
  }
  ${PaginationFragmentFragmentDoc}
`
export const StoryFragmentFragmentDoc = gql`
  fragment StoryFragment on StoryEntity {
    id
    attributes {
      title
      slug
      components {
        ...StoryComponentsFragment
      }
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
      author {
        data {
          id
          attributes {
            firstName
            lastName
            insertion
          }
        }
      }
      description
      timeframe {
        id
        yearStart
        yearEnd
      }
      locations {
        data {
          id
        }
      }
      publicationDate {
        id
        date
        displayType
      }
      shortDescription
      triplyRecords {
        data {
          ...BaseTriplyRecordFragment
        }
      }
      createdAt
      updatedAt
      publishedAt
      localizations {
        data {
          id
        }
      }
      locale
      parent_story {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
      child_stories {
        data {
          id
          attributes {
            title
            components {
              __typename
              ... on ComponentModulesImage {
                ...ComponentModulesImageFragment
              }
            }
            author {
              data {
                id
                attributes {
                  firstName
                  lastName
                  insertion
                }
              }
            }
          }
        }
      }
    }
  }
  ${StoryComponentsFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
`
export const ThemeFragmentFragmentDoc = gql`
  fragment ThemeFragment on ThemeEntity {
    id
    attributes {
      name
      stories {
        data {
          ...StoryFragment
        }
      }
      createdAt
      updatedAt
      publishedAt
      localizations {
        data {
          id
        }
      }
      locale
    }
  }
  ${StoryFragmentFragmentDoc}
`
export const ThemeFragmentWithHighlightedStoriesFragmentDoc = gql`
  fragment ThemeFragmentWithHighlightedStories on ThemeEntity {
    id
    attributes {
      name
      stories {
        data {
          ...StoryFragment
        }
      }
      highlightedStories {
        data {
          ...StoryFragment
        }
      }
      createdAt
      updatedAt
      publishedAt
      localizations {
        data {
          id
        }
      }
      locale
    }
  }
  ${StoryFragmentFragmentDoc}
`
export const TriplyRecordFragmentFragmentDoc = gql`
  fragment TriplyRecordFragment on TriplyRecordEntity {
    id
    attributes {
      recordId
      type
      stories {
        data {
          ...StoryFragment
        }
      }
      createdAt
      updatedAt
      publishedAt
      subject_collectionHighlights
      label
    }
  }
  ${StoryFragmentFragmentDoc}
`
export const UsersPermissionsPermissionFragmentFragmentDoc = gql`
  fragment UsersPermissionsPermissionFragment on UsersPermissionsPermission {
    action
    createdAt
    updatedAt
  }
`
export const UsersPermissionsRoleFragmentFragmentDoc = gql`
  fragment UsersPermissionsRoleFragment on UsersPermissionsRole {
    name
    description
    type
    createdAt
    updatedAt
  }
`
export const UsersPermissionsUserFragmentFragmentDoc = gql`
  fragment UsersPermissionsUserFragment on UsersPermissionsUser {
    username
    email
    provider
    confirmed
    blocked
    role {
      data {
        id
        attributes {
          ...UsersPermissionsRoleFragment
        }
      }
    }
    createdAt
    updatedAt
  }
  ${UsersPermissionsRoleFragmentFragmentDoc}
`
export const UsersPermissionsUserEntityFragmentFragmentDoc = gql`
  fragment UsersPermissionsUserEntityFragment on UsersPermissionsUserEntity {
    id
    attributes {
      ...UsersPermissionsUserFragment
    }
  }
  ${UsersPermissionsUserFragmentFragmentDoc}
`
export const UsersPermissionsUserEntityResponseFragmentFragmentDoc = gql`
  fragment UsersPermissionsUserEntityResponseFragment on UsersPermissionsUserEntityResponse {
    data {
      ...UsersPermissionsUserEntityFragment
    }
  }
  ${UsersPermissionsUserEntityFragmentFragmentDoc}
`
export const AuthorDocument = gql`
  query author($id: ID) {
    author(id: $id) {
      data {
        ...AuthorFragment
      }
    }
  }
  ${AuthorFragmentFragmentDoc}
`
export const AuthorsDocument = gql`
  query authors(
    $filters: AuthorFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    authors(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
    ) {
      data {
        ...AuthorFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${AuthorFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const HomepageDocument = gql`
  query homepage($publicationState: PublicationState = LIVE, $locale: I18NLocaleCode!) {
    homepage(publicationState: $publicationState, locale: $locale) {
      data {
        id
        attributes {
          ...HomepageFragment
          localizations {
            data {
              id
              attributes {
                ...HomepageFragment
              }
            }
          }
        }
      }
    }
  }
  ${HomepageFragmentFragmentDoc}
`
export const HighlightedHomepageThemesDocument = gql`
  query highlightedHomepageThemes(
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode!
    $localeStr: String!
    $highlightedThemesPaginationArgs: PaginationArg
  ) {
    homepage(publicationState: $publicationState, locale: $locale) {
      data {
        id
        attributes {
          highlightedThemes(
            filters: { locale: { eq: $localeStr } }
            pagination: $highlightedThemesPaginationArgs
          ) {
            data {
              ...ThemeFragmentWithHighlightedStories
            }
          }
        }
      }
    }
  }
  ${ThemeFragmentWithHighlightedStoriesFragmentDoc}
`
export const MetaDocument = gql`
  query meta(
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode!
    $localeStr: String!
    $highlightedThemesPaginationArgs: PaginationArg
  ) {
    homepage(publicationState: $publicationState, locale: $locale) {
      data {
        attributes {
          highlightedThemes(
            filters: { locale: { eq: $localeStr } }
            pagination: $highlightedThemesPaginationArgs
          ) {
            data {
              id
            }
          }
        }
      }
    }
  }
`
export const LandingPageDocument = gql`
  query landingPage($id: ID, $locale: I18NLocaleCode) {
    landingpage(id: $id, locale: $locale) {
      data {
        ...LandingpageEntityFragment
      }
    }
  }
  ${LandingpageEntityFragmentFragmentDoc}
`
export const LandingPagesDocument = gql`
  query landingPages(
    $filters: LandingpageFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    landingpages(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...LandingpageEntityFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${LandingpageEntityFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const LocationDocument = gql`
  query location($id: ID, $locale: I18NLocaleCode) {
    location(id: $id, locale: $locale) {
      data {
        ...LocationFragment
      }
    }
  }
  ${LocationFragmentFragmentDoc}
`
export const LocationsDocument = gql`
  query locations(
    $filters: LocationFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
    $locale: I18NLocaleCode
  ) {
    locations(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...LocationFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${LocationFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoriesDocument = gql`
  query stories(
    $filters: StoryFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    stories(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...StoryFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${StoryFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoriesIdsDocument = gql`
  query storiesIds(
    $filters: StoryFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    stories(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        id
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoryDocument = gql`
  query story($id: ID, $locale: I18NLocaleCode) {
    story(id: $id, locale: $locale) {
      data {
        ...StoryFragment
      }
    }
  }
  ${StoryFragmentFragmentDoc}
`
export const StoryByLocaleDocument = gql`
  query storyByLocale($id: ID) {
    story(id: $id) {
      data {
        ...LocalizedStoryFragment
      }
    }
  }
  ${LocalizedStoryFragmentFragmentDoc}
`
export const StoriesByLocaleDocument = gql`
  query storiesByLocale(
    $id: IDFilterInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
    $locale: I18NLocaleCode
  ) {
    stories(
      filters: { id: $id }
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...LocalizedStoryFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${LocalizedStoryFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoriesMetaByLocaleDocument = gql`
  query storiesMetaByLocale(
    $id: IDFilterInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    stories(
      filters: { id: $id }
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...LocalizedStoryMetaFragment
      }
    }
  }
  ${LocalizedStoryMetaFragmentFragmentDoc}
`
export const StoriesWithoutRelationsDocument = gql`
  query storiesWithoutRelations(
    $filters: StoryFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    stories(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...StoryWithoutRelationsFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${StoryWithoutRelationsFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoryWithoutRelationsDocument = gql`
  query storyWithoutRelations($id: ID, $locale: I18NLocaleCode) {
    story(id: $id, locale: $locale) {
      data {
        ...StoryWithoutRelationsFragment
      }
    }
  }
  ${StoryWithoutRelationsFragmentFragmentDoc}
`
export const StoriesLinkedToTriplyRecordDocument = gql`
  query storiesLinkedToTriplyRecord(
    $recordId: String!
    $type: String!
    $pagination: PaginationArg
  ) {
    stories(
      pagination: $pagination
      filters: { triplyRecords: { recordId: { eq: $recordId }, type: { eq: $type } } }
    ) {
      data {
        id
        attributes {
          slug
          title
        }
      }
    }
  }
`
export const StoriesLinkedToTriplyRecordExtendedDocument = gql`
  query storiesLinkedToTriplyRecordExtended(
    $recordId: String!
    $type: String!
    $lang: I18NLocaleCode
    $publicationState: PublicationState = LIVE
  ) {
    stories(
      filters: { triplyRecords: { recordId: { eq: $recordId }, type: { eq: $type } } }
      locale: $lang
      publicationState: $publicationState
    ) {
      data {
        ...StoryFragment
      }
    }
  }
  ${StoryFragmentFragmentDoc}
`
export const StoriesLinkedToThemeDocument = gql`
  query storiesLinkedToTheme($id: ID!, $locale: I18NLocaleCode, $page: Int, $pageSize: Int) {
    story(id: $id, locale: $locale) {
      data {
        id
        attributes {
          themes {
            data {
              id
              attributes {
                stories(pagination: { page: $page, pageSize: $pageSize }) {
                  data {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export const StoriesByIdsDocument = gql`
  query storiesByIds($storiesIds: [ID]!) {
    stories(filters: { id: { in: $storiesIds } }) {
      data {
        attributes {
          title
          slug
          locale
          components {
            ... on ComponentModulesImage {
              ...ComponentModulesImageFragment
            }
          }
          localizations {
            data {
              ...StoryWithoutRelationsFragment
            }
          }
        }
      }
    }
  }
  ${ComponentModulesImageFragmentFragmentDoc}
  ${StoryWithoutRelationsFragmentFragmentDoc}
`
export const StoryTriplyRelationsDocument = gql`
  query storyTriplyRelations($id: ID!, $type: String, $page: Int, $pageSize: Int) {
    story(id: $id) {
      data {
        id
        attributes {
          triplyRecords(
            filters: { type: { eq: $type } }
            pagination: { page: $page, pageSize: $pageSize }
          ) {
            data {
              ...BaseTriplyRecordFragment
            }
          }
        }
      }
    }
  }
  ${BaseTriplyRecordFragmentFragmentDoc}
`
export const StoriesTotalDocument = gql`
  query storiesTotal {
    stories {
      meta {
        pagination {
          total
        }
      }
    }
  }
`
export const ThemeDocument = gql`
  query theme($id: ID, $locale: I18NLocaleCode) {
    theme(id: $id, locale: $locale) {
      data {
        ...ThemeFragment
      }
    }
  }
  ${ThemeFragmentFragmentDoc}
`
export const ThemesDocument = gql`
  query themes(
    $filters: ThemeFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
    $locale: I18NLocaleCode
  ) {
    themes(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...ThemeFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${ThemeFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoriesRelatedToThemeDocument = gql`
  query storiesRelatedToTheme(
    $storyId: ID!
    $lang: I18NLocaleCode
    $publicationState: PublicationState = LIVE
  ) {
    themes(
      filters: {
        stories: { or: [{ id: { eq: $storyId } }, { localizations: { id: { eq: $storyId } } }] }
      }
      locale: $lang
      publicationState: $publicationState
    ) {
      data {
        ...ThemeFragment
      }
    }
  }
  ${ThemeFragmentFragmentDoc}
`
export const TriplyRecordDocument = gql`
  query triplyRecord($id: ID) {
    triplyRecord(id: $id) {
      data {
        ...TriplyRecordFragment
      }
    }
  }
  ${TriplyRecordFragmentFragmentDoc}
`
export const TriplyRecordsDocument = gql`
  query triplyRecords(
    $filters: TriplyRecordFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    triplyRecords(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
    ) {
      data {
        ...TriplyRecordFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${TriplyRecordFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const UsersPermissionsUserDocument = gql`
  query usersPermissionsUser($id: ID) {
    usersPermissionsUser(id: $id) {
      ...UsersPermissionsUserEntityResponseFragment
    }
  }
  ${UsersPermissionsUserEntityResponseFragmentFragmentDoc}
`
export const UsersPermissionsUsersDocument = gql`
  query usersPermissionsUsers(
    $filters: UsersPermissionsUserFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
  ) {
    usersPermissionsUsers(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        ...UsersPermissionsUserEntityFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${UsersPermissionsUserEntityFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    author(
      variables?: AuthorQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AuthorQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<AuthorQuery>(AuthorDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'author',
        'query'
      )
    },
    authors(
      variables?: AuthorsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AuthorsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<AuthorsQuery>(AuthorsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'authors',
        'query'
      )
    },
    homepage(
      variables: HomepageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<HomepageQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<HomepageQuery>(HomepageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'homepage',
        'query'
      )
    },
    highlightedHomepageThemes(
      variables: HighlightedHomepageThemesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<HighlightedHomepageThemesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<HighlightedHomepageThemesQuery>(
            HighlightedHomepageThemesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'highlightedHomepageThemes',
        'query'
      )
    },
    meta(
      variables: MetaQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MetaQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<MetaQuery>(MetaDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'meta',
        'query'
      )
    },
    landingPage(
      variables?: LandingPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LandingPageQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<LandingPageQuery>(LandingPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'landingPage',
        'query'
      )
    },
    landingPages(
      variables?: LandingPagesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LandingPagesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<LandingPagesQuery>(LandingPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'landingPages',
        'query'
      )
    },
    location(
      variables?: LocationQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LocationQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<LocationQuery>(LocationDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'location',
        'query'
      )
    },
    locations(
      variables?: LocationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LocationsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<LocationsQuery>(LocationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'locations',
        'query'
      )
    },
    stories(
      variables?: StoriesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesQuery>(StoriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'stories',
        'query'
      )
    },
    storiesIds(
      variables?: StoriesIdsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesIdsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesIdsQuery>(StoriesIdsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesIds',
        'query'
      )
    },
    story(
      variables?: StoryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoryQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoryQuery>(StoryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'story',
        'query'
      )
    },
    storyByLocale(
      variables?: StoryByLocaleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoryByLocaleQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoryByLocaleQuery>(StoryByLocaleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storyByLocale',
        'query'
      )
    },
    storiesByLocale(
      variables?: StoriesByLocaleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesByLocaleQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesByLocaleQuery>(StoriesByLocaleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesByLocale',
        'query'
      )
    },
    storiesMetaByLocale(
      variables?: StoriesMetaByLocaleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesMetaByLocaleQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesMetaByLocaleQuery>(StoriesMetaByLocaleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesMetaByLocale',
        'query'
      )
    },
    storiesWithoutRelations(
      variables?: StoriesWithoutRelationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesWithoutRelationsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesWithoutRelationsQuery>(StoriesWithoutRelationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesWithoutRelations',
        'query'
      )
    },
    storyWithoutRelations(
      variables?: StoryWithoutRelationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoryWithoutRelationsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoryWithoutRelationsQuery>(StoryWithoutRelationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storyWithoutRelations',
        'query'
      )
    },
    storiesLinkedToTriplyRecord(
      variables: StoriesLinkedToTriplyRecordQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesLinkedToTriplyRecordQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesLinkedToTriplyRecordQuery>(
            StoriesLinkedToTriplyRecordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'storiesLinkedToTriplyRecord',
        'query'
      )
    },
    storiesLinkedToTriplyRecordExtended(
      variables: StoriesLinkedToTriplyRecordExtendedQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesLinkedToTriplyRecordExtendedQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesLinkedToTriplyRecordExtendedQuery>(
            StoriesLinkedToTriplyRecordExtendedDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'storiesLinkedToTriplyRecordExtended',
        'query'
      )
    },
    storiesLinkedToTheme(
      variables: StoriesLinkedToThemeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesLinkedToThemeQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesLinkedToThemeQuery>(StoriesLinkedToThemeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesLinkedToTheme',
        'query'
      )
    },
    storiesByIds(
      variables: StoriesByIdsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesByIdsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesByIdsQuery>(StoriesByIdsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesByIds',
        'query'
      )
    },
    storyTriplyRelations(
      variables: StoryTriplyRelationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoryTriplyRelationsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoryTriplyRelationsQuery>(StoryTriplyRelationsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storyTriplyRelations',
        'query'
      )
    },
    storiesTotal(
      variables?: StoriesTotalQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesTotalQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesTotalQuery>(StoriesTotalDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesTotal',
        'query'
      )
    },
    theme(
      variables?: ThemeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ThemeQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<ThemeQuery>(ThemeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'theme',
        'query'
      )
    },
    themes(
      variables?: ThemesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ThemesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<ThemesQuery>(ThemesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'themes',
        'query'
      )
    },
    storiesRelatedToTheme(
      variables: StoriesRelatedToThemeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoriesRelatedToThemeQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoriesRelatedToThemeQuery>(StoriesRelatedToThemeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storiesRelatedToTheme',
        'query'
      )
    },
    triplyRecord(
      variables?: TriplyRecordQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TriplyRecordQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<TriplyRecordQuery>(TriplyRecordDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'triplyRecord',
        'query'
      )
    },
    triplyRecords(
      variables?: TriplyRecordsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TriplyRecordsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<TriplyRecordsQuery>(TriplyRecordsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'triplyRecords',
        'query'
      )
    },
    usersPermissionsUser(
      variables?: UsersPermissionsUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UsersPermissionsUserQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<UsersPermissionsUserQuery>(UsersPermissionsUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'usersPermissionsUser',
        'query'
      )
    },
    usersPermissionsUsers(
      variables?: UsersPermissionsUsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UsersPermissionsUsersQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<UsersPermissionsUsersQuery>(UsersPermissionsUsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'usersPermissionsUsers',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
