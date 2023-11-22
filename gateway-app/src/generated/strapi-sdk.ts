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
  attachment?: Maybe<UploadFileEntityResponse>
  hasAttachment?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  text?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type ComponentCoreButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreButtonFiltersInput>>>
  hasAttachment?: InputMaybe<BooleanFilterInput>
  not?: InputMaybe<ComponentCoreButtonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreButtonFiltersInput>>>
  text?: InputMaybe<StringFilterInput>
  url?: InputMaybe<StringFilterInput>
}

export type ComponentCoreButtonInput = {
  attachment?: InputMaybe<Scalars['ID']>
  hasAttachment?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type ComponentCoreCarouselItem = {
  __typename?: 'ComponentCoreCarouselItem'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  picture?: Maybe<UploadFileEntityResponse>
  story?: Maybe<StoryEntityResponse>
  triply_record?: Maybe<TriplyRecordEntityResponse>
  type?: Maybe<Enum_Componentcorecarouselitem_Type>
}

export type ComponentCoreCarouselItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselItemFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCoreCarouselItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselItemFiltersInput>>>
  story?: InputMaybe<StoryFiltersInput>
  triply_record?: InputMaybe<TriplyRecordFiltersInput>
  type?: InputMaybe<StringFilterInput>
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

export type ComponentCoreFields = {
  __typename?: 'ComponentCoreFields'
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
}

export type ComponentCoreGridFeaturedFields = {
  __typename?: 'ComponentCoreGridFeaturedFields'
  id: Scalars['ID']
  story?: Maybe<StoryEntityResponse>
  subtitle?: Maybe<Scalars['String']>
  thumbnail?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
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

export type ComponentCoreImageCarouselItem = {
  __typename?: 'ComponentCoreImageCarouselItem'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  picture?: Maybe<UploadFileEntityResponse>
  story?: Maybe<StoryEntityResponse>
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentCoreImageCarouselItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreImageCarouselItemFiltersInput>>>
  description?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCoreImageCarouselItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreImageCarouselItemFiltersInput>>>
  story?: InputMaybe<StoryFiltersInput>
  triplyRecord?: InputMaybe<TriplyRecordFiltersInput>
}

export type ComponentCoreItems = {
  __typename?: 'ComponentCoreItems'
  author?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
}

export type ComponentCoreModuleLayouts = {
  __typename?: 'ComponentCoreModuleLayouts'
  id: Scalars['ID']
  spacingBottom?: Maybe<Enum_Componentcoremodulelayouts_Spacingbottom>
  spacingTop?: Maybe<Enum_Componentcoremodulelayouts_Spacingtop>
}

export type ComponentCoreModuleLayoutsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreModuleLayoutsFiltersInput>>>
  not?: InputMaybe<ComponentCoreModuleLayoutsFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreModuleLayoutsFiltersInput>>>
  spacingBottom?: InputMaybe<StringFilterInput>
  spacingTop?: InputMaybe<StringFilterInput>
}

export type ComponentCoreModuleLayoutsInput = {
  id?: InputMaybe<Scalars['ID']>
  spacingBottom?: InputMaybe<Enum_Componentcoremodulelayouts_Spacingbottom>
  spacingTop?: InputMaybe<Enum_Componentcoremodulelayouts_Spacingtop>
}

export type ComponentCorePageHeader = {
  __typename?: 'ComponentCorePageHeader'
  Title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  id: Scalars['ID']
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

export type ComponentCoreTableBody = {
  __typename?: 'ComponentCoreTableBody'
  TableBodyItem?: Maybe<Array<Maybe<ComponentCoreTableBodyItem>>>
  id: Scalars['ID']
}

export type ComponentCoreTableBodyTableBodyItemArgs = {
  filters?: InputMaybe<ComponentCoreTableBodyItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentCoreTableBodyFiltersInput = {
  TableBodyItem?: InputMaybe<ComponentCoreTableBodyItemFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyFiltersInput>>>
  not?: InputMaybe<ComponentCoreTableBodyFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyFiltersInput>>>
}

export type ComponentCoreTableBodyInput = {
  TableBodyItem?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyItemInput>>>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentCoreTableBodyItem = {
  __typename?: 'ComponentCoreTableBodyItem'
  id: Scalars['ID']
  value?: Maybe<Scalars['String']>
}

export type ComponentCoreTableBodyItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyItemFiltersInput>>>
  not?: InputMaybe<ComponentCoreTableBodyItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyItemFiltersInput>>>
  value?: InputMaybe<StringFilterInput>
}

export type ComponentCoreTableBodyItemInput = {
  id?: InputMaybe<Scalars['ID']>
  value?: InputMaybe<Scalars['String']>
}

export type ComponentCoreTableHead = {
  __typename?: 'ComponentCoreTableHead'
  TableHeadItem?: Maybe<Array<Maybe<ComponentCoreTableHeadItem>>>
  id: Scalars['ID']
}

export type ComponentCoreTableHeadTableHeadItemArgs = {
  filters?: InputMaybe<ComponentCoreTableHeadItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentCoreTableHeadFiltersInput = {
  TableHeadItem?: InputMaybe<ComponentCoreTableHeadItemFiltersInput>
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTableHeadFiltersInput>>>
  not?: InputMaybe<ComponentCoreTableHeadFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTableHeadFiltersInput>>>
}

export type ComponentCoreTableHeadInput = {
  TableHeadItem?: InputMaybe<Array<InputMaybe<ComponentCoreTableHeadItemInput>>>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentCoreTableHeadItem = {
  __typename?: 'ComponentCoreTableHeadItem'
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
}

export type ComponentCoreTableHeadItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreTableHeadItemFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentCoreTableHeadItemFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentCoreTableHeadItemFiltersInput>>>
}

export type ComponentCoreTableHeadItemInput = {
  id?: InputMaybe<Scalars['ID']>
  label?: InputMaybe<Scalars['String']>
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
  buttonStyle?: Maybe<Enum_Componentmodulesbuttonsmodule_Buttonstyle>
  buttons?: Maybe<Array<Maybe<ComponentCoreButton>>>
  buttonsModuleLayout: ComponentCoreModuleLayouts
  id: Scalars['ID']
}

export type ComponentModulesButtonsModuleButtonsArgs = {
  filters?: InputMaybe<ComponentCoreButtonFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesButtonsModuleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentModulesButtonsModuleFiltersInput>>>
  buttonStyle?: InputMaybe<StringFilterInput>
  buttons?: InputMaybe<ComponentCoreButtonFiltersInput>
  buttonsModuleLayout?: InputMaybe<ComponentCoreModuleLayoutsFiltersInput>
  not?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentModulesButtonsModuleFiltersInput>>>
}

export type ComponentModulesButtonsModuleInput = {
  buttonStyle?: InputMaybe<Enum_Componentmodulesbuttonsmodule_Buttonstyle>
  buttons?: InputMaybe<Array<InputMaybe<ComponentCoreButtonInput>>>
  buttonsModuleLayout?: InputMaybe<ComponentCoreModuleLayoutsInput>
  id?: InputMaybe<Scalars['ID']>
}

export type ComponentModulesCarousel = {
  __typename?: 'ComponentModulesCarousel'
  buttonText?: Maybe<Scalars['String']>
  buttonUrl?: Maybe<Scalars['String']>
  carouselModuleLayout: ComponentCoreModuleLayouts
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  items?: Maybe<Array<Maybe<ComponentCoreCarouselItem>>>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Enum_Componentmodulescarousel_Type>
}

export type ComponentModulesCarouselItemsArgs = {
  filters?: InputMaybe<ComponentCoreCarouselItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesCollectionRelation = {
  __typename?: 'ComponentModulesCollectionRelation'
  author?: Maybe<AuthorEntityResponse>
  id: Scalars['ID']
  story?: Maybe<StoryEntityResponse>
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentModulesGridModule = {
  __typename?: 'ComponentModulesGridModule'
  buttons?: Maybe<Array<Maybe<ComponentCoreButton>>>
  description?: Maybe<Scalars['String']>
  featuredFields?: Maybe<Array<Maybe<ComponentCoreFeaturedFields>>>
  fieldTitlesAreInverted: Scalars['Boolean']
  fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes
  fields?: Maybe<Array<Maybe<ComponentCoreGridFeaturedFields>>>
  gridModuleLayout: ComponentCoreModuleLayouts
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
  imageModuleLayout: ComponentCoreModuleLayouts
  story?: Maybe<StoryEntityResponse>
  triplyRecord?: Maybe<TriplyRecordEntityResponse>
}

export type ComponentModulesImageCarousel = {
  __typename?: 'ComponentModulesImageCarousel'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  imageCarouselModuleLayout: ComponentCoreModuleLayouts
  images?: Maybe<UploadFileRelationResponseCollection>
  items?: Maybe<Array<Maybe<ComponentCoreImageCarouselItem>>>
}

export type ComponentModulesImageCarouselImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesImageCarouselItemsArgs = {
  filters?: InputMaybe<ComponentCoreImageCarouselItemFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ComponentModulesPullquote = {
  __typename?: 'ComponentModulesPullquote'
  id: Scalars['ID']
  pullquoteModuleLayout: ComponentCoreModuleLayouts
  text?: Maybe<Scalars['String']>
}

export type ComponentModulesSubtitle = {
  __typename?: 'ComponentModulesSubtitle'
  id: Scalars['ID']
  subtitleModuleLayout: ComponentCoreModuleLayouts
  text?: Maybe<Scalars['String']>
}

export type ComponentModulesTableModule = {
  __typename?: 'ComponentModulesTableModule'
  id: Scalars['ID']
  table?: Maybe<TableEntityResponse>
  tableModuleLayout: ComponentCoreModuleLayouts
}

export type ComponentModulesTextModule = {
  __typename?: 'ComponentModulesTextModule'
  Richtext?: Maybe<Scalars['String']>
  id: Scalars['ID']
  textModuleLayout: ComponentCoreModuleLayouts
}

export type ComponentModulesTitleModule = {
  __typename?: 'ComponentModulesTitleModule'
  Title?: Maybe<Scalars['String']>
  id: Scalars['ID']
  titleModuleLayout: ComponentCoreModuleLayouts
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
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export enum Enum_Componentcorecarouselitem_Type {
  Highlight = 'Highlight',
  Maker = 'Maker',
}

export enum Enum_Componentcoremodulelayouts_Spacingbottom {
  Lg = 'Lg',
  Md = 'Md',
  Sm = 'Sm',
  Xl = 'Xl',
}

export enum Enum_Componentcoremodulelayouts_Spacingtop {
  Lg = 'Lg',
  Md = 'Md',
  Sm = 'Sm',
  Xl = 'Xl',
}

export enum Enum_Componentcorepublicationdate_Displaytype {
  Date = 'Date',
  Year = 'Year',
}

export enum Enum_Componentmodulesbuttonsmodule_Buttonstyle {
  Default = 'Default',
  Large = 'Large',
}

export enum Enum_Componentmodulescarousel_Type {
  Combined = 'Combined',
  Highlights = 'Highlights',
  Makers = 'Makers',
  Themes = 'Themes',
}

export enum Enum_Componentmodulesgridmodule_Fieldtypes {
  Stories = 'Stories',
  Triply = 'Triply',
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
  | ComponentCoreCarouselItem
  | ComponentCoreFeaturedFields
  | ComponentCoreFields
  | ComponentCoreGridFeaturedFields
  | ComponentCoreImageCarouselItem
  | ComponentCoreItems
  | ComponentCoreModuleLayouts
  | ComponentCorePageHeader
  | ComponentCorePublicationDate
  | ComponentCoreTableBody
  | ComponentCoreTableBodyItem
  | ComponentCoreTableHead
  | ComponentCoreTableHeadItem
  | ComponentCoreTimeframe
  | ComponentModulesButtonsModule
  | ComponentModulesCarousel
  | ComponentModulesCollectionRelation
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTableModule
  | ComponentModulesTextModule
  | ComponentModulesTitleModule
  | Homepage
  | I18NLocale
  | Landingpage
  | Location
  | Menupage
  | Story
  | Table
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
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<HomepageRelationResponseCollection>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type HomepageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type HomepageComponentsDynamicZone =
  | ComponentModulesButtonsModule
  | ComponentModulesCarousel
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTableModule
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
  | ComponentModulesCarousel
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTableModule
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
  | ComponentModulesTableModule
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
  createAuthor?: Maybe<AuthorEntityResponse>
  createHomepageLocalization?: Maybe<HomepageEntityResponse>
  createLandingpage?: Maybe<LandingpageEntityResponse>
  createLandingpageLocalization?: Maybe<LandingpageEntityResponse>
  createLocation?: Maybe<LocationEntityResponse>
  createLocationLocalization?: Maybe<LocationEntityResponse>
  createMenupage?: Maybe<MenupageEntityResponse>
  createMenupageLocalization?: Maybe<MenupageEntityResponse>
  createStory?: Maybe<StoryEntityResponse>
  createStoryLocalization?: Maybe<StoryEntityResponse>
  createTable?: Maybe<TableEntityResponse>
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
  deleteHomepage?: Maybe<HomepageEntityResponse>
  deleteLandingpage?: Maybe<LandingpageEntityResponse>
  deleteLocation?: Maybe<LocationEntityResponse>
  deleteMenupage?: Maybe<MenupageEntityResponse>
  deleteStory?: Maybe<StoryEntityResponse>
  deleteTable?: Maybe<TableEntityResponse>
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
  updateFileInfo: UploadFileEntityResponse
  updateHomepage?: Maybe<HomepageEntityResponse>
  updateLandingpage?: Maybe<LandingpageEntityResponse>
  updateLocation?: Maybe<LocationEntityResponse>
  updateMenupage?: Maybe<MenupageEntityResponse>
  updateStory?: Maybe<StoryEntityResponse>
  updateTable?: Maybe<TableEntityResponse>
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

export type MutationCreateAuthorArgs = {
  data: AuthorInput
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

export type MutationCreateStoryArgs = {
  data: StoryInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateStoryLocalizationArgs = {
  data?: InputMaybe<StoryInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateTableArgs = {
  data: TableInput
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

export type MutationDeleteStoryArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteTableArgs = {
  id: Scalars['ID']
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

export type MutationUpdateStoryArgs = {
  data: StoryInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateTableArgs = {
  data: TableInput
  id: Scalars['ID']
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
  stories?: Maybe<StoryEntityResponseCollection>
  story?: Maybe<StoryEntityResponse>
  table?: Maybe<TableEntityResponse>
  tables?: Maybe<TableEntityResponseCollection>
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

export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryTablesArgs = {
  filters?: InputMaybe<TableFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
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
  components?: Maybe<Array<Maybe<StoryComponentsDynamicZone>>>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<StoryRelationResponseCollection>
  locations?: Maybe<LocationRelationResponseCollection>
  publicationDate?: Maybe<ComponentCorePublicationDate>
  publishedAt?: Maybe<Scalars['DateTime']>
  shortDescription?: Maybe<Scalars['String']>
  slug: Scalars['String']
  storyLinks?: Maybe<ComponentModulesButtonsModule>
  themes?: Maybe<ThemeRelationResponseCollection>
  timeframe?: Maybe<ComponentCoreTimeframe>
  title: Scalars['String']
  triplyRecords?: Maybe<TriplyRecordRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
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
  | ComponentModulesButtonsModule
  | ComponentModulesGridModule
  | ComponentModulesImage
  | ComponentModulesImageCarousel
  | ComponentModulesPullquote
  | ComponentModulesSubtitle
  | ComponentModulesTableModule
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
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<StoryFiltersInput>
  locations?: InputMaybe<LocationFiltersInput>
  not?: InputMaybe<StoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<StoryFiltersInput>>>
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
  components?: InputMaybe<Array<Scalars['StoryComponentsDynamicZoneInput']>>
  description?: InputMaybe<Scalars['String']>
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
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
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Table = {
  __typename?: 'Table'
  TableBody?: Maybe<Array<Maybe<ComponentCoreTableBody>>>
  Tablehead?: Maybe<ComponentCoreTableHead>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TableTableBodyArgs = {
  filters?: InputMaybe<ComponentCoreTableBodyFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type TableEntity = {
  __typename?: 'TableEntity'
  attributes?: Maybe<Table>
  id?: Maybe<Scalars['ID']>
}

export type TableEntityResponse = {
  __typename?: 'TableEntityResponse'
  data?: Maybe<TableEntity>
}

export type TableEntityResponseCollection = {
  __typename?: 'TableEntityResponseCollection'
  data: Array<TableEntity>
  meta: ResponseCollectionMeta
}

export type TableFiltersInput = {
  TableBody?: InputMaybe<ComponentCoreTableBodyFiltersInput>
  Tablehead?: InputMaybe<ComponentCoreTableHeadFiltersInput>
  and?: InputMaybe<Array<InputMaybe<TableFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<TableFiltersInput>
  or?: InputMaybe<Array<InputMaybe<TableFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TableInput = {
  TableBody?: InputMaybe<Array<InputMaybe<ComponentCoreTableBodyInput>>>
  Tablehead?: InputMaybe<ComponentCoreTableHeadInput>
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type Theme = {
  __typename?: 'Theme'
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ThemeRelationResponseCollection>
  name: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  stories?: Maybe<StoryRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
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
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TriplyRecordInput = {
  label?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  recordId?: InputMaybe<Scalars['String']>
  stories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
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
        buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
        buttonsModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          hasAttachment?: boolean | null
          text?: string | null
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
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesCarousel'
        id: string
        buttonText?: string | null
        buttonUrl?: string | null
        description?: string | null
        title?: string | null
        type?: Enum_Componentmodulescarousel_Type | null
        carouselModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        items?: Array<{
          __typename?: 'ComponentCoreCarouselItem'
          id: string
          description?: string | null
          name?: string | null
          type?: Enum_Componentcorecarouselitem_Type | null
          picture?: {
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
          hasAttachment?: boolean | null
          text?: string | null
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
          title?: string | null
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
        gridModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        imageModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  attributes?: { __typename?: 'Author'; firstName: string } | null
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
        imageCarouselModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        items?: Array<{
          __typename?: 'ComponentCoreImageCarouselItem'
          id: string
          description?: string | null
          name?: string | null
          picture?: {
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
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: { __typename?: 'Story'; slug: string } | null
            } | null
          } | null
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesPullquote'
        id: string
        text?: string | null
        pullquoteModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesSubtitle'
        id: string
        text?: string | null
        subtitleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTableModule'
        id: string
        tableModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        table?: {
          __typename?: 'TableEntityResponse'
          data?: {
            __typename?: 'TableEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Table'
              createdAt?: any | null
              description?: string | null
              name?: string | null
              publishedAt?: any | null
              updatedAt?: any | null
              TableBody?: Array<{
                __typename?: 'ComponentCoreTableBody'
                id: string
                TableBodyItem?: Array<{
                  __typename?: 'ComponentCoreTableBodyItem'
                  id: string
                  value?: string | null
                } | null> | null
              } | null> | null
              Tablehead?: {
                __typename?: 'ComponentCoreTableHead'
                id: string
                TableHeadItem?: Array<{
                  __typename?: 'ComponentCoreTableHeadItem'
                  id: string
                  label?: string | null
                } | null> | null
              } | null
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'ComponentModulesTextModule'
        Richtext?: string | null
        id: string
        textModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTitleModule'
        Title?: string | null
        id: string
        titleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | { __typename?: 'Error'; code: string; message?: string | null }
    | null
  > | null
}

export type HomepageQueryVariables = Exact<{
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
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
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesCarousel'
                    id: string
                    buttonText?: string | null
                    buttonUrl?: string | null
                    description?: string | null
                    title?: string | null
                    type?: Enum_Componentmodulescarousel_Type | null
                    carouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    items?: Array<{
                      __typename?: 'ComponentCoreCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      type?: Enum_Componentcorecarouselitem_Type | null
                      picture?: {
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
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
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesCarousel'
              id: string
              buttonText?: string | null
              buttonUrl?: string | null
              description?: string | null
              title?: string | null
              type?: Enum_Componentmodulescarousel_Type | null
              carouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              items?: Array<{
                __typename?: 'ComponentCoreCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                type?: Enum_Componentcorecarouselitem_Type | null
                picture?: {
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename?: 'Error'; code: string; message?: string | null }
          | null
        > | null
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
        buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
        buttonsModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          hasAttachment?: boolean | null
          text?: string | null
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
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesCarousel'
        id: string
        buttonText?: string | null
        buttonUrl?: string | null
        description?: string | null
        title?: string | null
        type?: Enum_Componentmodulescarousel_Type | null
        carouselModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        items?: Array<{
          __typename?: 'ComponentCoreCarouselItem'
          id: string
          description?: string | null
          name?: string | null
          type?: Enum_Componentcorecarouselitem_Type | null
          picture?: {
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
          hasAttachment?: boolean | null
          text?: string | null
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
          title?: string | null
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
        gridModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        imageModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  attributes?: { __typename?: 'Author'; firstName: string } | null
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
        imageCarouselModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        items?: Array<{
          __typename?: 'ComponentCoreImageCarouselItem'
          id: string
          description?: string | null
          name?: string | null
          picture?: {
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
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: { __typename?: 'Story'; slug: string } | null
            } | null
          } | null
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesPullquote'
        id: string
        text?: string | null
        pullquoteModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesSubtitle'
        id: string
        text?: string | null
        subtitleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTableModule'
        id: string
        tableModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        table?: {
          __typename?: 'TableEntityResponse'
          data?: {
            __typename?: 'TableEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Table'
              createdAt?: any | null
              description?: string | null
              name?: string | null
              publishedAt?: any | null
              updatedAt?: any | null
              TableBody?: Array<{
                __typename?: 'ComponentCoreTableBody'
                id: string
                TableBodyItem?: Array<{
                  __typename?: 'ComponentCoreTableBodyItem'
                  id: string
                  value?: string | null
                } | null> | null
              } | null> | null
              Tablehead?: {
                __typename?: 'ComponentCoreTableHead'
                id: string
                TableHeadItem?: Array<{
                  __typename?: 'ComponentCoreTableHeadItem'
                  id: string
                  label?: string | null
                } | null> | null
              } | null
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'ComponentModulesTextModule'
        Richtext?: string | null
        id: string
        textModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTitleModule'
        Title?: string | null
        id: string
        titleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
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
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesCarousel'
                id: string
                buttonText?: string | null
                buttonUrl?: string | null
                description?: string | null
                title?: string | null
                type?: Enum_Componentmodulescarousel_Type | null
                carouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                items?: Array<{
                  __typename?: 'ComponentCoreCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  type?: Enum_Componentcorecarouselitem_Type | null
                  picture?: {
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
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  title?: string | null
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
                gridModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                imageModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                      shortDescription?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          attributes?: { __typename?: 'Author'; firstName: string } | null
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
                imageCarouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                items?: Array<{
                  __typename?: 'ComponentCoreImageCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  picture?: {
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
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesPullquote'
                id: string
                text?: string | null
                pullquoteModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesSubtitle'
                id: string
                text?: string | null
                subtitleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTableModule'
                id: string
                tableModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                table?: {
                  __typename?: 'TableEntityResponse'
                  data?: {
                    __typename?: 'TableEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Table'
                      createdAt?: any | null
                      description?: string | null
                      name?: string | null
                      publishedAt?: any | null
                      updatedAt?: any | null
                      TableBody?: Array<{
                        __typename?: 'ComponentCoreTableBody'
                        id: string
                        TableBodyItem?: Array<{
                          __typename?: 'ComponentCoreTableBodyItem'
                          id: string
                          value?: string | null
                        } | null> | null
                      } | null> | null
                      Tablehead?: {
                        __typename?: 'ComponentCoreTableHead'
                        id: string
                        TableHeadItem?: Array<{
                          __typename?: 'ComponentCoreTableHeadItem'
                          id: string
                          label?: string | null
                        } | null> | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesTextModule'
                Richtext?: string | null
                id: string
                textModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTitleModule'
                Title?: string | null
                id: string
                titleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
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
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesCarousel'
          id: string
          buttonText?: string | null
          buttonUrl?: string | null
          description?: string | null
          title?: string | null
          type?: Enum_Componentmodulescarousel_Type | null
          carouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          items?: Array<{
            __typename?: 'ComponentCoreCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            type?: Enum_Componentcorecarouselitem_Type | null
            picture?: {
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
            hasAttachment?: boolean | null
            text?: string | null
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
            title?: string | null
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
          gridModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          imageModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                shortDescription?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    attributes?: { __typename?: 'Author'; firstName: string } | null
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
          imageCarouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          items?: Array<{
            __typename?: 'ComponentCoreImageCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            picture?: {
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
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesPullquote'
          id: string
          text?: string | null
          pullquoteModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesSubtitle'
          id: string
          text?: string | null
          subtitleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTableModule'
          id: string
          tableModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          table?: {
            __typename?: 'TableEntityResponse'
            data?: {
              __typename?: 'TableEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Table'
                createdAt?: any | null
                description?: string | null
                name?: string | null
                publishedAt?: any | null
                updatedAt?: any | null
                TableBody?: Array<{
                  __typename?: 'ComponentCoreTableBody'
                  id: string
                  TableBodyItem?: Array<{
                    __typename?: 'ComponentCoreTableBodyItem'
                    id: string
                    value?: string | null
                  } | null> | null
                } | null> | null
                Tablehead?: {
                  __typename?: 'ComponentCoreTableHead'
                  id: string
                  TableHeadItem?: Array<{
                    __typename?: 'ComponentCoreTableHeadItem'
                    id: string
                    label?: string | null
                  } | null> | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesTextModule'
          Richtext?: string | null
          id: string
          textModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTitleModule'
          Title?: string | null
          id: string
          titleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
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
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesCarousel'
                    id: string
                    buttonText?: string | null
                    buttonUrl?: string | null
                    description?: string | null
                    title?: string | null
                    type?: Enum_Componentmodulescarousel_Type | null
                    carouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    items?: Array<{
                      __typename?: 'ComponentCoreCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      type?: Enum_Componentcorecarouselitem_Type | null
                      picture?: {
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
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
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesCarousel'
              id: string
              buttonText?: string | null
              buttonUrl?: string | null
              description?: string | null
              title?: string | null
              type?: Enum_Componentmodulescarousel_Type | null
              carouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              items?: Array<{
                __typename?: 'ComponentCoreCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                type?: Enum_Componentcorecarouselitem_Type | null
                picture?: {
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
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
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesCarousel'
                    id: string
                    buttonText?: string | null
                    buttonUrl?: string | null
                    description?: string | null
                    title?: string | null
                    type?: Enum_Componentmodulescarousel_Type | null
                    carouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    items?: Array<{
                      __typename?: 'ComponentCoreCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      type?: Enum_Componentcorecarouselitem_Type | null
                      picture?: {
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
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
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesCarousel'
              id: string
              buttonText?: string | null
              buttonUrl?: string | null
              description?: string | null
              title?: string | null
              type?: Enum_Componentmodulescarousel_Type | null
              carouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              items?: Array<{
                __typename?: 'ComponentCoreCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                type?: Enum_Componentcorecarouselitem_Type | null
                picture?: {
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
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

export type MenupageFragmentFragment = {
  __typename?: 'Menupage'
  Title?: string | null
  slug?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  publishedAt?: any | null
  locale?: string | null
  components?: Array<
    | {
        __typename: 'ComponentModulesButtonsModule'
        id: string
        buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
        buttonsModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        buttons?: Array<{
          __typename?: 'ComponentCoreButton'
          id: string
          hasAttachment?: boolean | null
          text?: string | null
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
          hasAttachment?: boolean | null
          text?: string | null
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
          title?: string | null
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
        gridModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        imageModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  attributes?: { __typename?: 'Author'; firstName: string } | null
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
        imageCarouselModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
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
        items?: Array<{
          __typename?: 'ComponentCoreImageCarouselItem'
          id: string
          description?: string | null
          name?: string | null
          picture?: {
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
          story?: {
            __typename?: 'StoryEntityResponse'
            data?: {
              __typename?: 'StoryEntity'
              id?: string | null
              attributes?: { __typename?: 'Story'; slug: string } | null
            } | null
          } | null
        } | null> | null
      }
    | {
        __typename: 'ComponentModulesPullquote'
        id: string
        text?: string | null
        pullquoteModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesSubtitle'
        id: string
        text?: string | null
        subtitleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTableModule'
        id: string
        tableModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
        table?: {
          __typename?: 'TableEntityResponse'
          data?: {
            __typename?: 'TableEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Table'
              createdAt?: any | null
              description?: string | null
              name?: string | null
              publishedAt?: any | null
              updatedAt?: any | null
              TableBody?: Array<{
                __typename?: 'ComponentCoreTableBody'
                id: string
                TableBodyItem?: Array<{
                  __typename?: 'ComponentCoreTableBodyItem'
                  id: string
                  value?: string | null
                } | null> | null
              } | null> | null
              Tablehead?: {
                __typename?: 'ComponentCoreTableHead'
                id: string
                TableHeadItem?: Array<{
                  __typename?: 'ComponentCoreTableHeadItem'
                  id: string
                  label?: string | null
                } | null> | null
              } | null
            } | null
          } | null
        } | null
      }
    | {
        __typename: 'ComponentModulesTextModule'
        Richtext?: string | null
        id: string
        textModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | {
        __typename: 'ComponentModulesTitleModule'
        Title?: string | null
        id: string
        titleModuleLayout: {
          __typename?: 'ComponentCoreModuleLayouts'
          id: string
          spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
          spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
        }
      }
    | { __typename?: 'Error'; code: string; message?: string | null }
    | null
  > | null
}

export type MenupageEntityFragmentFragment = {
  __typename?: 'MenupageEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Menupage'
    Title?: string | null
    slug?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    localizations?: {
      __typename?: 'MenupageRelationResponseCollection'
      data: Array<{
        __typename?: 'MenupageEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Menupage'
          Title?: string | null
          slug?: string | null
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  title?: string | null
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
                gridModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                imageModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                      shortDescription?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          attributes?: { __typename?: 'Author'; firstName: string } | null
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
                imageCarouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                items?: Array<{
                  __typename?: 'ComponentCoreImageCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  picture?: {
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
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesPullquote'
                id: string
                text?: string | null
                pullquoteModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesSubtitle'
                id: string
                text?: string | null
                subtitleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTableModule'
                id: string
                tableModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                table?: {
                  __typename?: 'TableEntityResponse'
                  data?: {
                    __typename?: 'TableEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Table'
                      createdAt?: any | null
                      description?: string | null
                      name?: string | null
                      publishedAt?: any | null
                      updatedAt?: any | null
                      TableBody?: Array<{
                        __typename?: 'ComponentCoreTableBody'
                        id: string
                        TableBodyItem?: Array<{
                          __typename?: 'ComponentCoreTableBodyItem'
                          id: string
                          value?: string | null
                        } | null> | null
                      } | null> | null
                      Tablehead?: {
                        __typename?: 'ComponentCoreTableHead'
                        id: string
                        TableHeadItem?: Array<{
                          __typename?: 'ComponentCoreTableHeadItem'
                          id: string
                          label?: string | null
                        } | null> | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesTextModule'
                Richtext?: string | null
                id: string
                textModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTitleModule'
                Title?: string | null
                id: string
                titleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
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
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
            hasAttachment?: boolean | null
            text?: string | null
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
            title?: string | null
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
          gridModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          imageModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                shortDescription?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    attributes?: { __typename?: 'Author'; firstName: string } | null
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
          imageCarouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          items?: Array<{
            __typename?: 'ComponentCoreImageCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            picture?: {
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
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesPullquote'
          id: string
          text?: string | null
          pullquoteModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesSubtitle'
          id: string
          text?: string | null
          subtitleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTableModule'
          id: string
          tableModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          table?: {
            __typename?: 'TableEntityResponse'
            data?: {
              __typename?: 'TableEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Table'
                createdAt?: any | null
                description?: string | null
                name?: string | null
                publishedAt?: any | null
                updatedAt?: any | null
                TableBody?: Array<{
                  __typename?: 'ComponentCoreTableBody'
                  id: string
                  TableBodyItem?: Array<{
                    __typename?: 'ComponentCoreTableBodyItem'
                    id: string
                    value?: string | null
                  } | null> | null
                } | null> | null
                Tablehead?: {
                  __typename?: 'ComponentCoreTableHead'
                  id: string
                  TableHeadItem?: Array<{
                    __typename?: 'ComponentCoreTableHeadItem'
                    id: string
                    label?: string | null
                  } | null> | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesTextModule'
          Richtext?: string | null
          id: string
          textModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTitleModule'
          Title?: string | null
          id: string
          titleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | { __typename?: 'Error'; code: string; message?: string | null }
      | null
    > | null
  } | null
}

export type MenuPageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type MenuPageQuery = {
  __typename?: 'Query'
  menupage?: {
    __typename?: 'MenupageEntityResponse'
    data?: {
      __typename?: 'MenupageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Menupage'
        Title?: string | null
        slug?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        localizations?: {
          __typename?: 'MenupageRelationResponseCollection'
          data: Array<{
            __typename?: 'MenupageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Menupage'
              Title?: string | null
              slug?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
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
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename?: 'Error'; code: string; message?: string | null }
          | null
        > | null
      } | null
    } | null
  } | null
}

export type MenuPagesQueryVariables = Exact<{
  filters?: InputMaybe<MenupageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}>

export type MenuPagesQuery = {
  __typename?: 'Query'
  menupages?: {
    __typename?: 'MenupageEntityResponseCollection'
    data: Array<{
      __typename?: 'MenupageEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Menupage'
        Title?: string | null
        slug?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        localizations?: {
          __typename?: 'MenupageRelationResponseCollection'
          data: Array<{
            __typename?: 'MenupageEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Menupage'
              Title?: string | null
              slug?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
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
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
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
        shortDescription?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
          } | null> | null
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
        shortDescription?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename: 'Error'; code: string; message?: string | null }
          | null
        > | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
          } | null> | null
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
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename: 'Error'; code: string; message?: string | null }
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
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
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
        components?: Array<
          | {
              __typename: 'ComponentModulesButtonsModule'
              id: string
              buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
              buttonsModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              buttons?: Array<{
                __typename?: 'ComponentCoreButton'
                id: string
                hasAttachment?: boolean | null
                text?: string | null
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
                hasAttachment?: boolean | null
                text?: string | null
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
                title?: string | null
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
              gridModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
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
              imageCarouselModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
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
              items?: Array<{
                __typename?: 'ComponentCoreImageCarouselItem'
                id: string
                description?: string | null
                name?: string | null
                picture?: {
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
                story?: {
                  __typename?: 'StoryEntityResponse'
                  data?: {
                    __typename?: 'StoryEntity'
                    id?: string | null
                    attributes?: { __typename?: 'Story'; slug: string } | null
                  } | null
                } | null
              } | null> | null
            }
          | {
              __typename: 'ComponentModulesPullquote'
              id: string
              text?: string | null
              pullquoteModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesSubtitle'
              id: string
              text?: string | null
              subtitleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTableModule'
              id: string
              tableModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
              table?: {
                __typename?: 'TableEntityResponse'
                data?: {
                  __typename?: 'TableEntity'
                  id?: string | null
                  attributes?: {
                    __typename?: 'Table'
                    createdAt?: any | null
                    description?: string | null
                    name?: string | null
                    publishedAt?: any | null
                    updatedAt?: any | null
                    TableBody?: Array<{
                      __typename?: 'ComponentCoreTableBody'
                      id: string
                      TableBodyItem?: Array<{
                        __typename?: 'ComponentCoreTableBodyItem'
                        id: string
                        value?: string | null
                      } | null> | null
                    } | null> | null
                    Tablehead?: {
                      __typename?: 'ComponentCoreTableHead'
                      id: string
                      TableHeadItem?: Array<{
                        __typename?: 'ComponentCoreTableHeadItem'
                        id: string
                        label?: string | null
                      } | null> | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | {
              __typename: 'ComponentModulesTextModule'
              Richtext?: string | null
              id: string
              textModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | {
              __typename: 'ComponentModulesTitleModule'
              Title?: string | null
              id: string
              titleModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
              }
            }
          | { __typename: 'Error'; code: string; message?: string | null }
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
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
            } | null
          }>
        } | null
      } | null
    } | null
  } | null
}

export type StoryMetaByLocaleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type StoryMetaByLocaleQuery = {
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
        shortDescription?: string | null
        description?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
        localizations?: {
          __typename?: 'StoryRelationResponseCollection'
          data: Array<{
            __typename?: 'StoryEntity'
            id?: string | null
            attributes?: {
              __typename?: 'Story'
              title: string
              slug: string
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                } | null> | null
              } | null
            } | null
          }>
        } | null
        storyLinks?: {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
          } | null> | null
        } | null
      } | null
    } | null
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
        shortDescription?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            attributes?: { __typename?: 'Author'; firstName: string } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type StoriesLinkedToTriplyRecordQueryVariables = Exact<{
  recordId: Scalars['String']
  type: Scalars['String']
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

export type StoriesLinkedToThemeQueryVariables = Exact<{
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
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
          | { __typename?: 'ComponentModulesButtonsModule' }
          | { __typename?: 'ComponentModulesGridModule' }
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
              imageModuleLayout: {
                __typename?: 'ComponentCoreModuleLayouts'
                id: string
                spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                    shortDescription?: string | null
                    createdAt?: any | null
                    updatedAt?: any | null
                    publishedAt?: any | null
                    locale?: string | null
                    author?: {
                      __typename?: 'AuthorEntityResponse'
                      data?: {
                        __typename?: 'AuthorEntity'
                        attributes?: { __typename?: 'Author'; firstName: string } | null
                      } | null
                    } | null
                  } | null
                } | null
              } | null
            }
          | { __typename?: 'ComponentModulesImageCarousel' }
          | { __typename?: 'ComponentModulesPullquote' }
          | { __typename?: 'ComponentModulesSubtitle' }
          | { __typename?: 'ComponentModulesTableModule' }
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: {
                  __typename?: 'AuthorEntity'
                  attributes?: { __typename?: 'Author'; firstName: string } | null
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
    shortDescription?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: {
        __typename?: 'AuthorEntity'
        attributes?: { __typename?: 'Author'; firstName: string } | null
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
    components?: Array<
      | {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
            hasAttachment?: boolean | null
            text?: string | null
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
            title?: string | null
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
          gridModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          imageModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                shortDescription?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    attributes?: { __typename?: 'Author'; firstName: string } | null
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
          imageCarouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          items?: Array<{
            __typename?: 'ComponentCoreImageCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            picture?: {
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
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesPullquote'
          id: string
          text?: string | null
          pullquoteModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesSubtitle'
          id: string
          text?: string | null
          subtitleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTableModule'
          id: string
          tableModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          table?: {
            __typename?: 'TableEntityResponse'
            data?: {
              __typename?: 'TableEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Table'
                createdAt?: any | null
                description?: string | null
                name?: string | null
                publishedAt?: any | null
                updatedAt?: any | null
                TableBody?: Array<{
                  __typename?: 'ComponentCoreTableBody'
                  id: string
                  TableBodyItem?: Array<{
                    __typename?: 'ComponentCoreTableBodyItem'
                    id: string
                    value?: string | null
                  } | null> | null
                } | null> | null
                Tablehead?: {
                  __typename?: 'ComponentCoreTableHead'
                  id: string
                  TableHeadItem?: Array<{
                    __typename?: 'ComponentCoreTableHeadItem'
                    id: string
                    label?: string | null
                  } | null> | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesTextModule'
          Richtext?: string | null
          id: string
          textModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTitleModule'
          Title?: string | null
          id: string
          titleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null
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
    components?: Array<
      | {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
            hasAttachment?: boolean | null
            text?: string | null
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
            title?: string | null
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
          gridModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          imageModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                shortDescription?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    attributes?: { __typename?: 'Author'; firstName: string } | null
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
          imageCarouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          items?: Array<{
            __typename?: 'ComponentCoreImageCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            picture?: {
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
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesPullquote'
          id: string
          text?: string | null
          pullquoteModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesSubtitle'
          id: string
          text?: string | null
          subtitleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTableModule'
          id: string
          tableModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          table?: {
            __typename?: 'TableEntityResponse'
            data?: {
              __typename?: 'TableEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Table'
                createdAt?: any | null
                description?: string | null
                name?: string | null
                publishedAt?: any | null
                updatedAt?: any | null
                TableBody?: Array<{
                  __typename?: 'ComponentCoreTableBody'
                  id: string
                  TableBodyItem?: Array<{
                    __typename?: 'ComponentCoreTableBodyItem'
                    id: string
                    value?: string | null
                  } | null> | null
                } | null> | null
                Tablehead?: {
                  __typename?: 'ComponentCoreTableHead'
                  id: string
                  TableHeadItem?: Array<{
                    __typename?: 'ComponentCoreTableHeadItem'
                    id: string
                    label?: string | null
                  } | null> | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesTextModule'
          Richtext?: string | null
          id: string
          textModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTitleModule'
          Title?: string | null
          id: string
          titleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | { __typename: 'Error'; code: string; message?: string | null }
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
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  title?: string | null
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
                gridModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                imageModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                      shortDescription?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          attributes?: { __typename?: 'Author'; firstName: string } | null
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
                imageCarouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                items?: Array<{
                  __typename?: 'ComponentCoreImageCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  picture?: {
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
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesPullquote'
                id: string
                text?: string | null
                pullquoteModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesSubtitle'
                id: string
                text?: string | null
                subtitleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTableModule'
                id: string
                tableModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                table?: {
                  __typename?: 'TableEntityResponse'
                  data?: {
                    __typename?: 'TableEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Table'
                      createdAt?: any | null
                      description?: string | null
                      name?: string | null
                      publishedAt?: any | null
                      updatedAt?: any | null
                      TableBody?: Array<{
                        __typename?: 'ComponentCoreTableBody'
                        id: string
                        TableBodyItem?: Array<{
                          __typename?: 'ComponentCoreTableBodyItem'
                          id: string
                          value?: string | null
                        } | null> | null
                      } | null> | null
                      Tablehead?: {
                        __typename?: 'ComponentCoreTableHead'
                        id: string
                        TableHeadItem?: Array<{
                          __typename?: 'ComponentCoreTableHeadItem'
                          id: string
                          label?: string | null
                        } | null> | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesTextModule'
                Richtext?: string | null
                id: string
                textModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTitleModule'
                Title?: string | null
                id: string
                titleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
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
    shortDescription?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    components?: Array<
      | {
          __typename: 'ComponentModulesButtonsModule'
          id: string
          buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
          buttonsModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          buttons?: Array<{
            __typename?: 'ComponentCoreButton'
            id: string
            hasAttachment?: boolean | null
            text?: string | null
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
            hasAttachment?: boolean | null
            text?: string | null
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
            title?: string | null
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
          gridModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          imageModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                shortDescription?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
                locale?: string | null
                author?: {
                  __typename?: 'AuthorEntityResponse'
                  data?: {
                    __typename?: 'AuthorEntity'
                    attributes?: { __typename?: 'Author'; firstName: string } | null
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
          imageCarouselModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
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
          items?: Array<{
            __typename?: 'ComponentCoreImageCarouselItem'
            id: string
            description?: string | null
            name?: string | null
            picture?: {
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
            story?: {
              __typename?: 'StoryEntityResponse'
              data?: {
                __typename?: 'StoryEntity'
                id?: string | null
                attributes?: { __typename?: 'Story'; slug: string } | null
              } | null
            } | null
          } | null> | null
        }
      | {
          __typename: 'ComponentModulesPullquote'
          id: string
          text?: string | null
          pullquoteModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesSubtitle'
          id: string
          text?: string | null
          subtitleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTableModule'
          id: string
          tableModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
          table?: {
            __typename?: 'TableEntityResponse'
            data?: {
              __typename?: 'TableEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Table'
                createdAt?: any | null
                description?: string | null
                name?: string | null
                publishedAt?: any | null
                updatedAt?: any | null
                TableBody?: Array<{
                  __typename?: 'ComponentCoreTableBody'
                  id: string
                  TableBodyItem?: Array<{
                    __typename?: 'ComponentCoreTableBodyItem'
                    id: string
                    value?: string | null
                  } | null> | null
                } | null> | null
                Tablehead?: {
                  __typename?: 'ComponentCoreTableHead'
                  id: string
                  TableHeadItem?: Array<{
                    __typename?: 'ComponentCoreTableHeadItem'
                    id: string
                    label?: string | null
                  } | null> | null
                } | null
              } | null
            } | null
          } | null
        }
      | {
          __typename: 'ComponentModulesTextModule'
          Richtext?: string | null
          id: string
          textModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | {
          __typename: 'ComponentModulesTitleModule'
          Title?: string | null
          id: string
          titleModuleLayout: {
            __typename?: 'ComponentCoreModuleLayouts'
            id: string
            spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
            spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
          }
        }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
      buttonsModuleLayout: {
        __typename?: 'ComponentCoreModuleLayouts'
        id: string
        spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
        spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
      }
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        hasAttachment?: boolean | null
        text?: string | null
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
      } | null> | null
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
    shortDescription?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
      buttonsModuleLayout: {
        __typename?: 'ComponentCoreModuleLayouts'
        id: string
        spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
        spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
      }
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        hasAttachment?: boolean | null
        text?: string | null
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
      } | null> | null
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
    shortDescription?: string | null
    description?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    publishedAt?: any | null
    locale?: string | null
    author?: {
      __typename?: 'AuthorEntityResponse'
      data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
    localizations?: {
      __typename?: 'StoryRelationResponseCollection'
      data: Array<{
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: {
          __typename?: 'Story'
          title: string
          slug: string
          shortDescription?: string | null
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
            buttonsModuleLayout: {
              __typename?: 'ComponentCoreModuleLayouts'
              id: string
              spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
              spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
            }
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              hasAttachment?: boolean | null
              text?: string | null
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
            } | null> | null
          } | null
        } | null
      }>
    } | null
    storyLinks?: {
      __typename: 'ComponentModulesButtonsModule'
      id: string
      buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
      buttonsModuleLayout: {
        __typename?: 'ComponentCoreModuleLayouts'
        id: string
        spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
        spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
      }
      buttons?: Array<{
        __typename?: 'ComponentCoreButton'
        id: string
        hasAttachment?: boolean | null
        text?: string | null
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
      } | null> | null
    } | null
  } | null
}

export type ComponentCoreButtonFragmentFragment = {
  __typename?: 'ComponentCoreButton'
  id: string
  hasAttachment?: boolean | null
  text?: string | null
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

export type ComponentCoreCarouselItemFragmentFragment = {
  __typename?: 'ComponentCoreCarouselItem'
  id: string
  description?: string | null
  name?: string | null
  type?: Enum_Componentcorecarouselitem_Type | null
  picture?: {
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

export type ComponentCoreImageCarouselItemFragmentFragment = {
  __typename?: 'ComponentCoreImageCarouselItem'
  id: string
  description?: string | null
  name?: string | null
  picture?: {
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
  story?: {
    __typename?: 'StoryEntityResponse'
    data?: {
      __typename?: 'StoryEntity'
      id?: string | null
      attributes?: { __typename?: 'Story'; slug: string } | null
    } | null
  } | null
}

export type ComponentCorePageHeaderFragmentFragment = {
  __typename?: 'ComponentCorePageHeader'
  id: string
  Title?: string | null
  content?: string | null
}

export type ComponentCorePublicationDateFragmentFragment = {
  __typename?: 'ComponentCorePublicationDate'
  id: string
  date?: any | null
  displayType?: Enum_Componentcorepublicationdate_Displaytype | null
}

export type ComponentCoreTableHeadItemFragmentFragment = {
  __typename?: 'ComponentCoreTableHeadItem'
  id: string
  label?: string | null
}

export type ComponentCoreTableHeadFragmentFragment = {
  __typename?: 'ComponentCoreTableHead'
  id: string
  TableHeadItem?: Array<{
    __typename?: 'ComponentCoreTableHeadItem'
    id: string
    label?: string | null
  } | null> | null
}

export type ComponentCoreTableBodyItemFragmentFragment = {
  __typename?: 'ComponentCoreTableBodyItem'
  id: string
  value?: string | null
}

export type ComponentCoreTableBodyFragmentFragment = {
  __typename?: 'ComponentCoreTableBody'
  id: string
  TableBodyItem?: Array<{
    __typename?: 'ComponentCoreTableBodyItem'
    id: string
    value?: string | null
  } | null> | null
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

export type ComponentCoreFieldsFragmentFragment = {
  __typename?: 'ComponentCoreFields'
  id: string
  label?: string | null
}

export type ComponentCoreGridFeaturedFieldsFragmentFragment = {
  __typename?: 'ComponentCoreGridFeaturedFields'
  id: string
  subtitle?: string | null
  title?: string | null
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

export type ComponentCoreItemsFragmentFragment = {
  __typename?: 'ComponentCoreItems'
  id: string
  author?: string | null
  title?: string | null
  image?: {
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

export type ComponentModulesButtonsModuleFragmentFragment = {
  __typename: 'ComponentModulesButtonsModule'
  id: string
  buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
  buttonsModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
  buttons?: Array<{
    __typename?: 'ComponentCoreButton'
    id: string
    hasAttachment?: boolean | null
    text?: string | null
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
  } | null> | null
}

export type ComponentModulesCarouselFragmentFragment = {
  __typename: 'ComponentModulesCarousel'
  id: string
  buttonText?: string | null
  buttonUrl?: string | null
  description?: string | null
  title?: string | null
  type?: Enum_Componentmodulescarousel_Type | null
  carouselModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
  items?: Array<{
    __typename?: 'ComponentCoreCarouselItem'
    id: string
    description?: string | null
    name?: string | null
    type?: Enum_Componentcorecarouselitem_Type | null
    picture?: {
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
  } | null> | null
}

export type ComponentModulesImageCarouselFragmentFragment = {
  __typename: 'ComponentModulesImageCarousel'
  id: string
  description?: string | null
  imageCarouselModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
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
  items?: Array<{
    __typename?: 'ComponentCoreImageCarouselItem'
    id: string
    description?: string | null
    name?: string | null
    picture?: {
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
    story?: {
      __typename?: 'StoryEntityResponse'
      data?: {
        __typename?: 'StoryEntity'
        id?: string | null
        attributes?: { __typename?: 'Story'; slug: string } | null
      } | null
    } | null
  } | null> | null
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
  imageModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
        shortDescription?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        locale?: string | null
        author?: {
          __typename?: 'AuthorEntityResponse'
          data?: {
            __typename?: 'AuthorEntity'
            attributes?: { __typename?: 'Author'; firstName: string } | null
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
  pullquoteModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
}

export type ComponentModulesSubtitleFragmentFragment = {
  __typename: 'ComponentModulesSubtitle'
  id: string
  text?: string | null
  subtitleModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
}

export type ComponentModulesTableModuleFragmentFragment = {
  __typename: 'ComponentModulesTableModule'
  id: string
  tableModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
  table?: {
    __typename?: 'TableEntityResponse'
    data?: {
      __typename?: 'TableEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Table'
        createdAt?: any | null
        description?: string | null
        name?: string | null
        publishedAt?: any | null
        updatedAt?: any | null
        TableBody?: Array<{
          __typename?: 'ComponentCoreTableBody'
          id: string
          TableBodyItem?: Array<{
            __typename?: 'ComponentCoreTableBodyItem'
            id: string
            value?: string | null
          } | null> | null
        } | null> | null
        Tablehead?: {
          __typename?: 'ComponentCoreTableHead'
          id: string
          TableHeadItem?: Array<{
            __typename?: 'ComponentCoreTableHeadItem'
            id: string
            label?: string | null
          } | null> | null
        } | null
      } | null
    } | null
  } | null
}

export type ComponentModulesTextModuleFragmentFragment = {
  __typename: 'ComponentModulesTextModule'
  Richtext?: string | null
  id: string
  textModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
}

export type ComponentModulesTitleModuleFragmentFragment = {
  __typename: 'ComponentModulesTitleModule'
  Title?: string | null
  id: string
  titleModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
  }
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
    hasAttachment?: boolean | null
    text?: string | null
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
    title?: string | null
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
  gridModuleLayout: {
    __typename?: 'ComponentCoreModuleLayouts'
    id: string
    spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
    spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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

export type ComponentCoreModuleLayoutsFragmentFragment = {
  __typename?: 'ComponentCoreModuleLayouts'
  id: string
  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
}

export type ErrorFragmentFragment = { __typename?: 'Error'; code: string; message?: string | null }

export type TableFragmentFragment = {
  __typename?: 'Table'
  createdAt?: any | null
  description?: string | null
  name?: string | null
  publishedAt?: any | null
  updatedAt?: any | null
  TableBody?: Array<{
    __typename?: 'ComponentCoreTableBody'
    id: string
    TableBodyItem?: Array<{
      __typename?: 'ComponentCoreTableBodyItem'
      id: string
      value?: string | null
    } | null> | null
  } | null> | null
  Tablehead?: {
    __typename?: 'ComponentCoreTableHead'
    id: string
    TableHeadItem?: Array<{
      __typename?: 'ComponentCoreTableHeadItem'
      id: string
      label?: string | null
    } | null> | null
  } | null
}

export type TableEntityFragmentFragment = {
  __typename?: 'TableEntity'
  id?: string | null
  attributes?: {
    __typename?: 'Table'
    createdAt?: any | null
    description?: string | null
    name?: string | null
    publishedAt?: any | null
    updatedAt?: any | null
    TableBody?: Array<{
      __typename?: 'ComponentCoreTableBody'
      id: string
      TableBodyItem?: Array<{
        __typename?: 'ComponentCoreTableBodyItem'
        id: string
        value?: string | null
      } | null> | null
    } | null> | null
    Tablehead?: {
      __typename?: 'ComponentCoreTableHead'
      id: string
      TableHeadItem?: Array<{
        __typename?: 'ComponentCoreTableHeadItem'
        id: string
        label?: string | null
      } | null> | null
    } | null
  } | null
}

export type TableEntityResponseFragmentFragment = {
  __typename?: 'TableEntityResponse'
  data?: {
    __typename?: 'TableEntity'
    id?: string | null
    attributes?: {
      __typename?: 'Table'
      createdAt?: any | null
      description?: string | null
      name?: string | null
      publishedAt?: any | null
      updatedAt?: any | null
      TableBody?: Array<{
        __typename?: 'ComponentCoreTableBody'
        id: string
        TableBodyItem?: Array<{
          __typename?: 'ComponentCoreTableBodyItem'
          id: string
          value?: string | null
        } | null> | null
      } | null> | null
      Tablehead?: {
        __typename?: 'ComponentCoreTableHead'
        id: string
        TableHeadItem?: Array<{
          __typename?: 'ComponentCoreTableHeadItem'
          id: string
          label?: string | null
        } | null> | null
      } | null
    } | null
  } | null
}

export type TableQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>
}>

export type TableQuery = {
  __typename?: 'Query'
  table?: {
    __typename?: 'TableEntityResponse'
    data?: {
      __typename?: 'TableEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Table'
        createdAt?: any | null
        description?: string | null
        name?: string | null
        publishedAt?: any | null
        updatedAt?: any | null
        TableBody?: Array<{
          __typename?: 'ComponentCoreTableBody'
          id: string
          TableBodyItem?: Array<{
            __typename?: 'ComponentCoreTableBodyItem'
            id: string
            value?: string | null
          } | null> | null
        } | null> | null
        Tablehead?: {
          __typename?: 'ComponentCoreTableHead'
          id: string
          TableHeadItem?: Array<{
            __typename?: 'ComponentCoreTableHeadItem'
            id: string
            label?: string | null
          } | null> | null
        } | null
      } | null
    } | null
  } | null
}

export type TablesQueryVariables = Exact<{
  filters?: InputMaybe<TableFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
  publicationState?: InputMaybe<PublicationState>
}>

export type TablesQuery = {
  __typename?: 'Query'
  tables?: {
    __typename?: 'TableEntityResponseCollection'
    data: Array<{
      __typename?: 'TableEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Table'
        createdAt?: any | null
        description?: string | null
        name?: string | null
        publishedAt?: any | null
        updatedAt?: any | null
        TableBody?: Array<{
          __typename?: 'ComponentCoreTableBody'
          id: string
          TableBodyItem?: Array<{
            __typename?: 'ComponentCoreTableBodyItem'
            id: string
            value?: string | null
          } | null> | null
        } | null> | null
        Tablehead?: {
          __typename?: 'ComponentCoreTableHead'
          id: string
          TableHeadItem?: Array<{
            __typename?: 'ComponentCoreTableHeadItem'
            id: string
            label?: string | null
          } | null> | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                } | null> | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                } | null> | null
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
          shortDescription?: string | null
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  title?: string | null
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
                gridModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                imageModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                      shortDescription?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          attributes?: { __typename?: 'Author'; firstName: string } | null
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
                imageCarouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                items?: Array<{
                  __typename?: 'ComponentCoreImageCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  picture?: {
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
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesPullquote'
                id: string
                text?: string | null
                pullquoteModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesSubtitle'
                id: string
                text?: string | null
                subtitleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTableModule'
                id: string
                tableModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                table?: {
                  __typename?: 'TableEntityResponse'
                  data?: {
                    __typename?: 'TableEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Table'
                      createdAt?: any | null
                      description?: string | null
                      name?: string | null
                      publishedAt?: any | null
                      updatedAt?: any | null
                      TableBody?: Array<{
                        __typename?: 'ComponentCoreTableBody'
                        id: string
                        TableBodyItem?: Array<{
                          __typename?: 'ComponentCoreTableBodyItem'
                          id: string
                          value?: string | null
                        } | null> | null
                      } | null> | null
                      Tablehead?: {
                        __typename?: 'ComponentCoreTableHead'
                        id: string
                        TableHeadItem?: Array<{
                          __typename?: 'ComponentCoreTableHeadItem'
                          id: string
                          label?: string | null
                        } | null> | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesTextModule'
                Richtext?: string | null
                id: string
                textModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTitleModule'
                Title?: string | null
                id: string
                titleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
            buttonsModuleLayout: {
              __typename?: 'ComponentCoreModuleLayouts'
              id: string
              spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
              spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
            }
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              hasAttachment?: boolean | null
              text?: string | null
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
            } | null> | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                } | null> | null
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
              shortDescription?: string | null
              createdAt?: any | null
              updatedAt?: any | null
              publishedAt?: any | null
              locale?: string | null
              components?: Array<
                | {
                    __typename: 'ComponentModulesButtonsModule'
                    id: string
                    buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                    buttonsModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    buttons?: Array<{
                      __typename?: 'ComponentCoreButton'
                      id: string
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      hasAttachment?: boolean | null
                      text?: string | null
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
                      title?: string | null
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
                    gridModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    imageModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                          shortDescription?: string | null
                          createdAt?: any | null
                          updatedAt?: any | null
                          publishedAt?: any | null
                          locale?: string | null
                          author?: {
                            __typename?: 'AuthorEntityResponse'
                            data?: {
                              __typename?: 'AuthorEntity'
                              attributes?: { __typename?: 'Author'; firstName: string } | null
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
                    imageCarouselModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
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
                    items?: Array<{
                      __typename?: 'ComponentCoreImageCarouselItem'
                      id: string
                      description?: string | null
                      name?: string | null
                      picture?: {
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
                      story?: {
                        __typename?: 'StoryEntityResponse'
                        data?: {
                          __typename?: 'StoryEntity'
                          id?: string | null
                          attributes?: { __typename?: 'Story'; slug: string } | null
                        } | null
                      } | null
                    } | null> | null
                  }
                | {
                    __typename: 'ComponentModulesPullquote'
                    id: string
                    text?: string | null
                    pullquoteModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesSubtitle'
                    id: string
                    text?: string | null
                    subtitleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTableModule'
                    id: string
                    tableModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                    table?: {
                      __typename?: 'TableEntityResponse'
                      data?: {
                        __typename?: 'TableEntity'
                        id?: string | null
                        attributes?: {
                          __typename?: 'Table'
                          createdAt?: any | null
                          description?: string | null
                          name?: string | null
                          publishedAt?: any | null
                          updatedAt?: any | null
                          TableBody?: Array<{
                            __typename?: 'ComponentCoreTableBody'
                            id: string
                            TableBodyItem?: Array<{
                              __typename?: 'ComponentCoreTableBodyItem'
                              id: string
                              value?: string | null
                            } | null> | null
                          } | null> | null
                          Tablehead?: {
                            __typename?: 'ComponentCoreTableHead'
                            id: string
                            TableHeadItem?: Array<{
                              __typename?: 'ComponentCoreTableHeadItem'
                              id: string
                              label?: string | null
                            } | null> | null
                          } | null
                        } | null
                      } | null
                    } | null
                  }
                | {
                    __typename: 'ComponentModulesTextModule'
                    Richtext?: string | null
                    id: string
                    textModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | {
                    __typename: 'ComponentModulesTitleModule'
                    Title?: string | null
                    id: string
                    titleModuleLayout: {
                      __typename?: 'ComponentCoreModuleLayouts'
                      id: string
                      spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                      spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                    }
                  }
                | { __typename: 'Error'; code: string; message?: string | null }
                | null
              > | null
              author?: {
                __typename?: 'AuthorEntityResponse'
                data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
              storyLinks?: {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
          shortDescription?: string | null
          createdAt?: any | null
          updatedAt?: any | null
          publishedAt?: any | null
          locale?: string | null
          components?: Array<
            | {
                __typename: 'ComponentModulesButtonsModule'
                id: string
                buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
                buttonsModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                buttons?: Array<{
                  __typename?: 'ComponentCoreButton'
                  id: string
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  hasAttachment?: boolean | null
                  text?: string | null
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
                  title?: string | null
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
                gridModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                imageModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
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
                      shortDescription?: string | null
                      createdAt?: any | null
                      updatedAt?: any | null
                      publishedAt?: any | null
                      locale?: string | null
                      author?: {
                        __typename?: 'AuthorEntityResponse'
                        data?: {
                          __typename?: 'AuthorEntity'
                          attributes?: { __typename?: 'Author'; firstName: string } | null
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
                imageCarouselModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
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
                items?: Array<{
                  __typename?: 'ComponentCoreImageCarouselItem'
                  id: string
                  description?: string | null
                  name?: string | null
                  picture?: {
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
                  story?: {
                    __typename?: 'StoryEntityResponse'
                    data?: {
                      __typename?: 'StoryEntity'
                      id?: string | null
                      attributes?: { __typename?: 'Story'; slug: string } | null
                    } | null
                  } | null
                } | null> | null
              }
            | {
                __typename: 'ComponentModulesPullquote'
                id: string
                text?: string | null
                pullquoteModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesSubtitle'
                id: string
                text?: string | null
                subtitleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTableModule'
                id: string
                tableModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
                table?: {
                  __typename?: 'TableEntityResponse'
                  data?: {
                    __typename?: 'TableEntity'
                    id?: string | null
                    attributes?: {
                      __typename?: 'Table'
                      createdAt?: any | null
                      description?: string | null
                      name?: string | null
                      publishedAt?: any | null
                      updatedAt?: any | null
                      TableBody?: Array<{
                        __typename?: 'ComponentCoreTableBody'
                        id: string
                        TableBodyItem?: Array<{
                          __typename?: 'ComponentCoreTableBodyItem'
                          id: string
                          value?: string | null
                        } | null> | null
                      } | null> | null
                      Tablehead?: {
                        __typename?: 'ComponentCoreTableHead'
                        id: string
                        TableHeadItem?: Array<{
                          __typename?: 'ComponentCoreTableHeadItem'
                          id: string
                          label?: string | null
                        } | null> | null
                      } | null
                    } | null
                  } | null
                } | null
              }
            | {
                __typename: 'ComponentModulesTextModule'
                Richtext?: string | null
                id: string
                textModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | {
                __typename: 'ComponentModulesTitleModule'
                Title?: string | null
                id: string
                titleModuleLayout: {
                  __typename?: 'ComponentCoreModuleLayouts'
                  id: string
                  spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
                  spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
                }
              }
            | { __typename: 'Error'; code: string; message?: string | null }
            | null
          > | null
          author?: {
            __typename?: 'AuthorEntityResponse'
            data?: { __typename?: 'AuthorEntity'; id?: string | null } | null
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
          storyLinks?: {
            __typename: 'ComponentModulesButtonsModule'
            id: string
            buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle | null
            buttonsModuleLayout: {
              __typename?: 'ComponentCoreModuleLayouts'
              id: string
              spacingBottom?: Enum_Componentcoremodulelayouts_Spacingbottom | null
              spacingTop?: Enum_Componentcoremodulelayouts_Spacingtop | null
            }
            buttons?: Array<{
              __typename?: 'ComponentCoreButton'
              id: string
              hasAttachment?: boolean | null
              text?: string | null
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
            } | null> | null
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
export const ComponentCoreModuleLayoutsFragmentFragmentDoc = gql`
  fragment ComponentCoreModuleLayoutsFragment on ComponentCoreModuleLayouts {
    id
    spacingBottom
    spacingTop
  }
`
export const ComponentModulesTextModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesTextModuleFragment on ComponentModulesTextModule {
    Richtext
    id
    __typename
    textModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
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
          attributes {
            firstName
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
    imageModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
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
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${StoryWithoutRelationsFragmentFragmentDoc}
`
export const ComponentCoreButtonFragmentFragmentDoc = gql`
  fragment ComponentCoreButtonFragment on ComponentCoreButton {
    id
    hasAttachment
    text
    url
    attachment {
      ...UploadFileEntityResponseFragment
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
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
    gridModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
  }
  ${ComponentCoreButtonFragmentFragmentDoc}
  ${ComponentCoreFeaturedFieldsFragmentFragmentDoc}
  ${ComponentCoreGridFeaturedFieldsFragmentFragmentDoc}
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
`
export const ComponentModulesPullquoteFragmentFragmentDoc = gql`
  fragment ComponentModulesPullquoteFragment on ComponentModulesPullquote {
    id
    __typename
    pullquoteModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    text
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
`
export const ComponentCoreCarouselItemFragmentFragmentDoc = gql`
  fragment ComponentCoreCarouselItemFragment on ComponentCoreCarouselItem {
    id
    description
    name
    picture {
      ...UploadFileEntityResponseFragment
    }
    type
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
    carouselModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    buttonText
    buttonUrl
    description
    __typename
    items {
      ...ComponentCoreCarouselItemFragment
    }
    title
    type
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
  ${ComponentCoreCarouselItemFragmentFragmentDoc}
`
export const ComponentModulesSubtitleFragmentFragmentDoc = gql`
  fragment ComponentModulesSubtitleFragment on ComponentModulesSubtitle {
    id
    __typename
    subtitleModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    text
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
`
export const ComponentCoreTableBodyItemFragmentFragmentDoc = gql`
  fragment ComponentCoreTableBodyItemFragment on ComponentCoreTableBodyItem {
    id
    value
  }
`
export const ComponentCoreTableBodyFragmentFragmentDoc = gql`
  fragment ComponentCoreTableBodyFragment on ComponentCoreTableBody {
    id
    TableBodyItem {
      ...ComponentCoreTableBodyItemFragment
    }
  }
  ${ComponentCoreTableBodyItemFragmentFragmentDoc}
`
export const ComponentCoreTableHeadItemFragmentFragmentDoc = gql`
  fragment ComponentCoreTableHeadItemFragment on ComponentCoreTableHeadItem {
    id
    label
  }
`
export const ComponentCoreTableHeadFragmentFragmentDoc = gql`
  fragment ComponentCoreTableHeadFragment on ComponentCoreTableHead {
    id
    TableHeadItem {
      ...ComponentCoreTableHeadItemFragment
    }
  }
  ${ComponentCoreTableHeadItemFragmentFragmentDoc}
`
export const TableFragmentFragmentDoc = gql`
  fragment TableFragment on Table {
    TableBody {
      ...ComponentCoreTableBodyFragment
    }
    Tablehead {
      ...ComponentCoreTableHeadFragment
    }
    createdAt
    description
    name
    publishedAt
    updatedAt
  }
  ${ComponentCoreTableBodyFragmentFragmentDoc}
  ${ComponentCoreTableHeadFragmentFragmentDoc}
`
export const TableEntityFragmentFragmentDoc = gql`
  fragment TableEntityFragment on TableEntity {
    id
    attributes {
      ...TableFragment
    }
  }
  ${TableFragmentFragmentDoc}
`
export const TableEntityResponseFragmentFragmentDoc = gql`
  fragment TableEntityResponseFragment on TableEntityResponse {
    data {
      ...TableEntityFragment
    }
  }
  ${TableEntityFragmentFragmentDoc}
`
export const ComponentModulesTableModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesTableModuleFragment on ComponentModulesTableModule {
    id
    __typename
    tableModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    table {
      ...TableEntityResponseFragment
    }
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
  ${TableEntityResponseFragmentFragmentDoc}
`
export const ComponentModulesTitleModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesTitleModuleFragment on ComponentModulesTitleModule {
    Title
    id
    __typename
    titleModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
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
export const ComponentCoreImageCarouselItemFragmentFragmentDoc = gql`
  fragment ComponentCoreImageCarouselItemFragment on ComponentCoreImageCarouselItem {
    id
    description
    name
    picture {
      ...UploadFileEntityResponseFragment
    }
    triplyRecord {
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
export const ComponentModulesImageCarouselFragmentFragmentDoc = gql`
  fragment ComponentModulesImageCarouselFragment on ComponentModulesImageCarousel {
    id
    imageCarouselModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    description
    __typename
    images {
      ...UploadFileRelationResponseCollectionFragment
    }
    items {
      ...ComponentCoreImageCarouselItemFragment
    }
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
  ${UploadFileRelationResponseCollectionFragmentFragmentDoc}
  ${ComponentCoreImageCarouselItemFragmentFragmentDoc}
`
export const ComponentModulesButtonsModuleFragmentFragmentDoc = gql`
  fragment ComponentModulesButtonsModuleFragment on ComponentModulesButtonsModule {
    id
    buttonsModuleLayout {
      ...ComponentCoreModuleLayoutsFragment
    }
    buttonStyle
    __typename
    buttons {
      ...ComponentCoreButtonFragment
    }
  }
  ${ComponentCoreModuleLayoutsFragmentFragmentDoc}
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
      ... on ComponentModulesCarousel {
        ...ComponentModulesCarouselFragment
      }
      ... on ComponentModulesSubtitle {
        ...ComponentModulesSubtitleFragment
      }
      ... on ComponentModulesTableModule {
        ...ComponentModulesTableModuleFragment
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
  ${ComponentModulesCarouselFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTableModuleFragmentFragmentDoc}
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
      ... on ComponentModulesCarousel {
        ...ComponentModulesCarouselFragment
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
      ... on ComponentModulesTableModule {
        ...ComponentModulesTableModuleFragment
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
  ${ComponentModulesCarouselFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesTableModuleFragmentFragmentDoc}
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
export const MenupageFragmentFragmentDoc = gql`
  fragment MenupageFragment on Menupage {
    Title
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
      ... on ComponentModulesTableModule {
        ...ComponentModulesTableModuleFragment
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
  ${ComponentModulesTableModuleFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`
export const MenupageEntityFragmentFragmentDoc = gql`
  fragment MenupageEntityFragment on MenupageEntity {
    id
    attributes {
      ...MenupageFragment
      localizations {
        data {
          id
          attributes {
            ...MenupageFragment
          }
        }
      }
    }
  }
  ${MenupageFragmentFragmentDoc}
`
export const NestedStoryFragmentFragmentDoc = gql`
  fragment NestedStoryFragment on StoryEntity {
    id
    attributes {
      title
      slug
      description
      locale
      components {
        __typename
        ... on ComponentModulesPullquote {
          ...ComponentModulesPullquoteFragment
        }
        ... on ComponentModulesGridModule {
          ...ComponentModulesGridModuleFragment
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
        ... on ComponentModulesTableModule {
          ...ComponentModulesTableModuleFragment
        }
        ... on ComponentModulesButtonsModule {
          ...ComponentModulesButtonsModuleFragment
        }
        ... on Error {
          ...ErrorFragment
        }
      }
    }
  }
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesTableModuleFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
`
export const LocalizedStoryFragmentFragmentDoc = gql`
  fragment LocalizedStoryFragment on StoryEntity {
    id
    attributes {
      title
      slug
      description
      locale
      components {
        __typename
        ... on ComponentModulesPullquote {
          ...ComponentModulesPullquoteFragment
        }
        ... on ComponentModulesGridModule {
          ...ComponentModulesGridModuleFragment
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
        ... on ComponentModulesTableModule {
          ...ComponentModulesTableModuleFragment
        }
        ... on ComponentModulesButtonsModule {
          ...ComponentModulesButtonsModuleFragment
        }
        ... on Error {
          ...ErrorFragment
        }
      }
      localizations {
        data {
          ...NestedStoryFragment
        }
      }
    }
  }
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesTableModuleFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
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
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
    }
  }
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
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
      localizations {
        data {
          ...StoryMetaFragment
        }
      }
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
    }
  }
  ${BaseTriplyRecordFragmentFragmentDoc}
  ${StoryMetaFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
`
export const ComponentCorePageHeaderFragmentFragmentDoc = gql`
  fragment ComponentCorePageHeaderFragment on ComponentCorePageHeader {
    id
    Title
    content
  }
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
export const ComponentCoreFieldsFragmentFragmentDoc = gql`
  fragment ComponentCoreFieldsFragment on ComponentCoreFields {
    id
    label
  }
`
export const ComponentCoreItemsFragmentFragmentDoc = gql`
  fragment ComponentCoreItemsFragment on ComponentCoreItems {
    id
    author
    title
    image {
      ...UploadFileEntityResponseFragment
    }
  }
  ${UploadFileEntityResponseFragmentFragmentDoc}
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
        __typename
        ... on ComponentModulesPullquote {
          ...ComponentModulesPullquoteFragment
        }
        ... on ComponentModulesGridModule {
          ...ComponentModulesGridModuleFragment
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
        ... on ComponentModulesTableModule {
          ...ComponentModulesTableModuleFragment
        }
        ... on ComponentModulesButtonsModule {
          ...ComponentModulesButtonsModuleFragment
        }
        ... on Error {
          ...ErrorFragment
        }
      }
      author {
        data {
          id
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
      storyLinks {
        ...ComponentModulesButtonsModuleFragment
      }
    }
  }
  ${ComponentModulesPullquoteFragmentFragmentDoc}
  ${ComponentModulesGridModuleFragmentFragmentDoc}
  ${ComponentModulesTextModuleFragmentFragmentDoc}
  ${ComponentModulesSubtitleFragmentFragmentDoc}
  ${ComponentModulesTitleModuleFragmentFragmentDoc}
  ${ComponentModulesImageCarouselFragmentFragmentDoc}
  ${ComponentModulesImageFragmentFragmentDoc}
  ${ComponentModulesTableModuleFragmentFragmentDoc}
  ${ComponentModulesButtonsModuleFragmentFragmentDoc}
  ${ErrorFragmentFragmentDoc}
  ${BaseTriplyRecordFragmentFragmentDoc}
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
  query homepage($publicationState: PublicationState = LIVE, $locale: I18NLocaleCode) {
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
export const MenuPageDocument = gql`
  query menuPage($id: ID, $locale: I18NLocaleCode) {
    menupage(id: $id, locale: $locale) {
      data {
        ...MenupageEntityFragment
      }
    }
  }
  ${MenupageEntityFragmentFragmentDoc}
`
export const MenuPagesDocument = gql`
  query menuPages(
    $filters: MenupageFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    menupages(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        ...MenupageEntityFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${MenupageEntityFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
`
export const StoriesDocument = gql`
  query stories(
    $filters: StoryFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
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
export const StoriesByLocaleDocument = gql`
  query storiesByLocale(
    $id: IDFilterInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    stories(
      filters: { id: $id }
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
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
export const StoryMetaByLocaleDocument = gql`
  query storyMetaByLocale($id: ID) {
    story(id: $id) {
      data {
        ...LocalizedStoryMetaFragment
      }
    }
  }
  ${LocalizedStoryMetaFragmentFragmentDoc}
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
  query storiesLinkedToTriplyRecord($recordId: String!, $type: String!) {
    stories(filters: { triplyRecords: { recordId: { eq: $recordId }, type: { eq: $type } } }) {
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
export const StoriesLinkedToThemeDocument = gql`
  query storiesLinkedToTheme($id: ID!, $locale: I18NLocaleCode) {
    story(id: $id, locale: $locale) {
      data {
        id
        attributes {
          themes {
            data {
              id
              attributes {
                stories {
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
  query storyTriplyRelations($id: ID!) {
    story(id: $id) {
      data {
        id
        attributes {
          triplyRecords {
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
export const TableDocument = gql`
  query table($id: ID) {
    table(id: $id) {
      ...TableEntityResponseFragment
    }
  }
  ${TableEntityResponseFragmentFragmentDoc}
`
export const TablesDocument = gql`
  query tables(
    $filters: TableFiltersInput
    $pagination: PaginationArg = {}
    $sort: [String] = []
    $publicationState: PublicationState = LIVE
  ) {
    tables(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
    ) {
      data {
        ...TableEntityFragment
      }
      meta {
        ...ResponseCollectionMetaFragment
      }
    }
  }
  ${TableEntityFragmentFragmentDoc}
  ${ResponseCollectionMetaFragmentFragmentDoc}
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
      variables?: HomepageQueryVariables,
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
    menuPage(
      variables?: MenuPageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MenuPageQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<MenuPageQuery>(MenuPageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'menuPage',
        'query'
      )
    },
    menuPages(
      variables?: MenuPagesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MenuPagesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<MenuPagesQuery>(MenuPagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'menuPages',
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
    storyMetaByLocale(
      variables?: StoryMetaByLocaleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<StoryMetaByLocaleQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StoryMetaByLocaleQuery>(StoryMetaByLocaleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'storyMetaByLocale',
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
    table(
      variables?: TableQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TableQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<TableQuery>(TableDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'table',
        'query'
      )
    },
    tables(
      variables?: TablesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<TablesQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<TablesQuery>(TablesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'tables',
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
