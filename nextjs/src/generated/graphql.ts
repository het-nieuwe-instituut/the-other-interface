import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type ArchiveZoomLevel3DetailType = {
  __typename?: 'ArchiveZoomLevel3DetailType';
  id: Scalars['String'];
  objectNumber?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<EntityNames>;
};

export type ArchiveZoomLevel5UnionType = ArchivesFondsZoomLevel3DetailType | ArchivesOtherZoomLevel3DetailType;

export type ArchivesFondsCreatorType = {
  __typename?: 'ArchivesFondsCreatorType';
  creator: Scalars['String'];
  creatorHistory?: Maybe<Scalars['String']>;
  creatorLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  populatedCreator?: Maybe<PeopleZoomLevel3DetailType>;
};

export type ArchivesFondsZoomLevel3DetailType = {
  __typename?: 'ArchivesFondsZoomLevel3DetailType';
  appendices?: Maybe<Scalars['String']>;
  conditionsGoverningAccess?: Maybe<Scalars['String']>;
  contentScope?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<ArchivesFondsCreatorType>>;
  custodialHistory?: Maybe<Scalars['String']>;
  descriptionLevel?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  extent?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  objectNumber?: Maybe<Scalars['String']>;
  partReference?: Maybe<Scalars['String']>;
  partTitle?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  productionDate?: Maybe<Scalars['String']>;
  recordTitle?: Maybe<Scalars['String']>;
  relatedMaterial?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  repositoryLabel?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  rightsLabel?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  systemOfArrangement?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: ArchivesZoomLevel3Types;
};

export type ArchivesOtherZoomLevel3DetailType = {
  __typename?: 'ArchivesOtherZoomLevel3DetailType';
  dateLabel?: Maybe<Scalars['String']>;
  dimensionFree?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  existenceOfOriginals?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mediaReference?: Maybe<Scalars['String']>;
  mediaReferenceLabel?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  pidWorkURIs?: Maybe<Array<Scalars['String']>>;
  relatedMaterial?: Maybe<Scalars['String']>;
  rights?: Maybe<Scalars['String']>;
  rightsLabel?: Maybe<Scalars['String']>;
  scopeContent?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: ArchivesZoomLevel3Types;
};

export enum ArchivesZoomLevel3Types {
  Fonds = 'fonds',
  Other = 'other'
}

export type Author = {
  __typename?: 'Author';
  createdAt?: Maybe<Scalars['Date']>;
  firstName: Scalars['String'];
  insertion?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  publishedAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<AuthorFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insertion?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<AuthorFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<Scalars['Boolean']>>;
  between?: InputMaybe<Array<Scalars['Boolean']>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['Boolean']>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentCoreButton = {
  __typename?: 'ComponentCoreButton';
  attachment?: Maybe<UploadFileEntityResponse>;
  hasAttachment?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentCoreButtonFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreButtonFiltersInput>>;
  hasAttachment?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentCoreButtonFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreButtonFiltersInput>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreCarouselItem = {
  __typename?: 'ComponentCoreCarouselItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  story?: Maybe<StoryEntityResponse>;
  triply_record?: Maybe<TriplyRecordEntityResponse>;
  type?: Maybe<EnumComponentcorecarouselitemType>;
};

export type ComponentCoreFeaturedFields = {
  __typename?: 'ComponentCoreFeaturedFields';
  id: Scalars['ID'];
  label: Scalars['String'];
  value: Scalars['String'];
};

export type ComponentCoreGridFeaturedFields = {
  __typename?: 'ComponentCoreGridFeaturedFields';
  id: Scalars['ID'];
  story?: Maybe<StoryEntityResponse>;
  subtitle?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentCoreImageCarouselItem = {
  __typename?: 'ComponentCoreImageCarouselItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  story?: Maybe<StoryEntityResponse>;
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentCoreModuleLayouts = {
  __typename?: 'ComponentCoreModuleLayouts';
  id: Scalars['ID'];
  spacingBottom?: Maybe<EnumComponentcoremodulelayoutsSpacingbottom>;
  spacingTop?: Maybe<EnumComponentcoremodulelayoutsSpacingtop>;
};

export type ComponentCoreModuleLayoutsFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreModuleLayoutsFiltersInput>>;
  not?: InputMaybe<ComponentCoreModuleLayoutsFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreModuleLayoutsFiltersInput>>;
  spacingBottom?: InputMaybe<StringFilterInput>;
  spacingTop?: InputMaybe<StringFilterInput>;
};

export type ComponentCorePublicationDate = {
  __typename?: 'ComponentCorePublicationDate';
  date?: Maybe<Scalars['Date']>;
  displayType?: Maybe<EnumComponentcorepublicationdateDisplaytype>;
  id?: Maybe<Scalars['ID']>;
};

export type ComponentCorePublicationDateFiltersInput = {
  and?: InputMaybe<Array<ComponentCorePublicationDateFiltersInput>>;
  date?: InputMaybe<DateFilterInput>;
  displayType?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCorePublicationDateFiltersInput>;
  or?: InputMaybe<Array<ComponentCorePublicationDateFiltersInput>>;
};

export type ComponentCoreTableBody = {
  __typename?: 'ComponentCoreTableBody';
  TableBodyItem?: Maybe<Array<ComponentCoreTableBodyItem>>;
  id: Scalars['ID'];
};

export type ComponentCoreTableBodyFiltersInput = {
  TableBodyItem?: InputMaybe<ComponentCoreTableBodyItemFiltersInput>;
  and?: InputMaybe<Array<ComponentCoreTableBodyFiltersInput>>;
  not?: InputMaybe<ComponentCoreTableBodyFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreTableBodyFiltersInput>>;
};

export type ComponentCoreTableBodyItem = {
  __typename?: 'ComponentCoreTableBodyItem';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type ComponentCoreTableBodyItemFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreTableBodyItemFiltersInput>>;
  not?: InputMaybe<ComponentCoreTableBodyItemFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreTableBodyItemFiltersInput>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreTableHead = {
  __typename?: 'ComponentCoreTableHead';
  TableHeadItem?: Maybe<Array<ComponentCoreTableHeadItem>>;
  id: Scalars['ID'];
};

export type ComponentCoreTableHeadFiltersInput = {
  TableHeadItem?: InputMaybe<ComponentCoreTableHeadItemFiltersInput>;
  and?: InputMaybe<Array<ComponentCoreTableHeadFiltersInput>>;
  not?: InputMaybe<ComponentCoreTableHeadFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreTableHeadFiltersInput>>;
};

export type ComponentCoreTableHeadItem = {
  __typename?: 'ComponentCoreTableHeadItem';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type ComponentCoreTableHeadItemFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreTableHeadItemFiltersInput>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCoreTableHeadItemFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreTableHeadItemFiltersInput>>;
};

export type ComponentCoreTimeframe = {
  __typename?: 'ComponentCoreTimeframe';
  id: Scalars['ID'];
  yearEnd?: Maybe<Scalars['Float']>;
  yearStart?: Maybe<Scalars['Float']>;
};

export type ComponentCoreTimeframeFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreTimeframeFiltersInput>>;
  not?: InputMaybe<ComponentCoreTimeframeFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreTimeframeFiltersInput>>;
  yearEnd?: InputMaybe<LongFilterInput>;
  yearStart?: InputMaybe<LongFilterInput>;
};

export type ComponentModulesButtonsModule = {
  __typename?: 'ComponentModulesButtonsModule';
  buttonStyle?: Maybe<EnumComponentmodulesbuttonsmoduleButtonstyle>;
  buttons?: Maybe<Array<ComponentCoreButton>>;
  buttonsModuleLayout: ComponentCoreModuleLayouts;
  id: Scalars['ID'];
};

export type ComponentModulesButtonsModuleFiltersInput = {
  and?: InputMaybe<Array<ComponentModulesButtonsModuleFiltersInput>>;
  buttonStyle?: InputMaybe<StringFilterInput>;
  buttons?: InputMaybe<ComponentCoreButtonFiltersInput>;
  buttonsModuleLayout?: InputMaybe<ComponentCoreModuleLayoutsFiltersInput>;
  not?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>;
  or?: InputMaybe<Array<ComponentModulesButtonsModuleFiltersInput>>;
};

export type ComponentModulesCarousel = {
  __typename?: 'ComponentModulesCarousel';
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  carouselModuleLayout: ComponentCoreModuleLayouts;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<ComponentCoreCarouselItem>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<EnumComponentmodulescarouselType>;
};

export type ComponentModulesGridModule = {
  __typename?: 'ComponentModulesGridModule';
  buttons?: Maybe<Array<ComponentCoreButton>>;
  description?: Maybe<Scalars['String']>;
  featuredFields?: Maybe<Array<ComponentCoreFeaturedFields>>;
  fieldTitlesAreInverted: Scalars['Boolean'];
  fieldTypes: EnumComponentmodulesgridmoduleFieldtypes;
  fields?: Maybe<Array<ComponentCoreGridFeaturedFields>>;
  gridModuleLayout: ComponentCoreModuleLayouts;
  id: Scalars['ID'];
  pageSize: Scalars['Int'];
  showMoreButtonTitle: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentModulesImage = {
  __typename?: 'ComponentModulesImage';
  alt_text?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  imageModuleLayout: ComponentCoreModuleLayouts;
  story?: Maybe<StoryEntityResponse>;
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentModulesImageCarousel = {
  __typename?: 'ComponentModulesImageCarousel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageCarouselModuleLayout: ComponentCoreModuleLayouts;
  images?: Maybe<UploadFileRelationResponseCollection>;
  items?: Maybe<Array<ComponentCoreImageCarouselItem>>;
};

export type ComponentModulesPullquote = {
  __typename?: 'ComponentModulesPullquote';
  id: Scalars['ID'];
  pullquoteModuleLayout: ComponentCoreModuleLayouts;
  text?: Maybe<Scalars['String']>;
};

export type ComponentModulesSubtitle = {
  __typename?: 'ComponentModulesSubtitle';
  id: Scalars['ID'];
  subtitleModuleLayout: ComponentCoreModuleLayouts;
  text?: Maybe<Scalars['String']>;
};

export type ComponentModulesTableModule = {
  __typename?: 'ComponentModulesTableModule';
  id: Scalars['ID'];
  table?: Maybe<TableEntityResponse>;
  tableModuleLayout: ComponentCoreModuleLayouts;
};

export type ComponentModulesTextModule = {
  __typename?: 'ComponentModulesTextModule';
  Richtext?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  textModuleLayout: ComponentCoreModuleLayouts;
};

export type ComponentModulesTitleModule = {
  __typename?: 'ComponentModulesTitleModule';
  Title?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  titleModuleLayout: ComponentCoreModuleLayouts;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<Scalars['Date']>>;
  between?: InputMaybe<Array<Scalars['Date']>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<Scalars['Date']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['Date']>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<Scalars['Date']>>;
  between?: InputMaybe<Array<Scalars['Date']>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<Scalars['Date']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['Date']>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export enum EntityNames {
  Archives = 'Archives',
  External = 'External',
  Getty = 'Getty',
  Media = 'Media',
  Objects = 'Objects',
  People = 'People',
  Publications = 'Publications',
  Rkd = 'Rkd',
  Stories = 'Stories',
  Wikidata = 'Wikidata'
}

export enum EnumComponentcorecarouselitemType {
  Highlight = 'Highlight',
  Maker = 'Maker'
}

export enum EnumComponentcoremodulelayoutsSpacingbottom {
  Lg = 'Lg',
  Md = 'Md',
  Sm = 'Sm',
  Xl = 'Xl'
}

export enum EnumComponentcoremodulelayoutsSpacingtop {
  Lg = 'Lg',
  Md = 'Md',
  Sm = 'Sm',
  Xl = 'Xl'
}

export enum EnumComponentcorepublicationdateDisplaytype {
  Date = 'Date',
  Year = 'Year'
}

export enum EnumComponentmodulesbuttonsmoduleButtonstyle {
  Default = 'Default',
  Large = 'Large'
}

export enum EnumComponentmodulescarouselType {
  Combined = 'Combined',
  Highlights = 'Highlights',
  Makers = 'Makers',
  Themes = 'Themes'
}

export enum EnumComponentmodulesgridmoduleFieldtypes {
  Stories = 'Stories',
  Triply = 'Triply'
}

export enum EnumTriplyrecordType {
  Archive = 'Archive',
  Media = 'Media',
  Object = 'Object',
  People = 'People',
  Publication = 'Publication'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  Title?: Maybe<Scalars['String']>;
  components?: Maybe<Array<HomepageComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type HomepageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesCarousel | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<Scalars['ID']>>;
  between?: InputMaybe<Array<Scalars['ID']>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Landingpage = {
  __typename?: 'Landingpage';
  Description?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  components?: Maybe<Array<LandingpageComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['Date']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<LandingpageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LandingpageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesCarousel | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

export type LandingpageEntity = {
  __typename?: 'LandingpageEntity';
  attributes?: Maybe<Landingpage>;
  id?: Maybe<Scalars['ID']>;
};

export type LandingpageEntityResponse = {
  __typename?: 'LandingpageEntityResponse';
  data?: Maybe<LandingpageEntity>;
};

export type LandingpageEntityResponseCollection = {
  __typename?: 'LandingpageEntityResponseCollection';
  data: Array<LandingpageEntity>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type LandingpageFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<LandingpageFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LandingpageFiltersInput>;
  not?: InputMaybe<LandingpageFiltersInput>;
  or?: InputMaybe<Array<LandingpageFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LandingpageRelationResponseCollection = {
  __typename?: 'LandingpageRelationResponseCollection';
  data: Array<LandingpageEntity>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<LocationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['Date']>;
  stories?: Maybe<StoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']>;
};

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse';
  data?: Maybe<LocationEntity>;
};

export type LocationFiltersInput = {
  and?: InputMaybe<Array<LocationFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insertion?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LocationFiltersInput>;
  or?: InputMaybe<Array<LocationFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LocationRelationResponseCollection = {
  __typename?: 'LocationRelationResponseCollection';
  data: Array<LocationEntity>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<Scalars['Int']>>;
  between?: InputMaybe<Array<Scalars['Int']>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['Int']>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Menupage = {
  __typename?: 'Menupage';
  Title?: Maybe<Scalars['String']>;
  components?: Maybe<Array<MenupageComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['Date']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MenupageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type MenupageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

export type MenupageEntity = {
  __typename?: 'MenupageEntity';
  attributes?: Maybe<Menupage>;
  id?: Maybe<Scalars['ID']>;
};

export type MenupageEntityResponse = {
  __typename?: 'MenupageEntityResponse';
  data?: Maybe<MenupageEntity>;
};

export type MenupageEntityResponseCollection = {
  __typename?: 'MenupageEntityResponseCollection';
  data: Array<MenupageEntity>;
  meta: ResponseCollectionMeta;
};

export type MenupageFiltersInput = {
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<MenupageFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenupageFiltersInput>;
  not?: InputMaybe<MenupageFiltersInput>;
  or?: InputMaybe<Array<MenupageFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenupageRelationResponseCollection = {
  __typename?: 'MenupageRelationResponseCollection';
  data?: Maybe<Array<MenupageEntity>>;
};

export type ObjectMakerType = {
  __typename?: 'ObjectMakerType';
  id: Scalars['String'];
  maker?: Maybe<Scalars['String']>;
  makerLabel?: Maybe<Scalars['String']>;
  makerRole?: Maybe<Scalars['String']>;
  makerRoleLabel?: Maybe<Scalars['String']>;
  populatedMaker?: Maybe<PeopleZoomLevel3DetailType>;
};

export type ObjectMaterialType = {
  __typename?: 'ObjectMaterialType';
  id: Scalars['String'];
  material: Scalars['String'];
  materialLabel?: Maybe<Scalars['String']>;
};

export type ObjectTechniqueType = {
  __typename?: 'ObjectTechniqueType';
  id: Scalars['String'];
  technique: Scalars['String'];
  techniqueLabel?: Maybe<Scalars['String']>;
};

export type ObjectsZoomLevel3DetailType = {
  __typename?: 'ObjectsZoomLevel3DetailType';
  archiveCollectionCode?: Maybe<Scalars['String']>;
  associationPerson?: Maybe<Scalars['String']>;
  associationPersonLabel?: Maybe<Scalars['String']>;
  associationPersonType?: Maybe<Scalars['String']>;
  creationPlace?: Maybe<Scalars['String']>;
  creationPlaceLabel?: Maybe<Scalars['String']>;
  creditLine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimDepth?: Maybe<Scalars['String']>;
  dimHeight?: Maybe<Scalars['String']>;
  dimWidth?: Maybe<Scalars['String']>;
  dimensionUnit?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageLabel?: Maybe<Scalars['String']>;
  makers?: Maybe<Array<ObjectMakerType>>;
  materials?: Maybe<Array<ObjectMaterialType>>;
  numberOfParts?: Maybe<Scalars['String']>;
  objectName?: Maybe<Scalars['String']>;
  objectNameLabel?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  relatedObjectTitle?: Maybe<Scalars['String']>;
  rights?: Maybe<Scalars['String']>;
  rightsLabel?: Maybe<Scalars['String']>;
  scale?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  techniques?: Maybe<Array<ObjectTechniqueType>>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleType?: Maybe<Scalars['String']>;
  type?: Maybe<EntityNames>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['Float']>;
};

export type PeopleAssociationType = {
  __typename?: 'PeopleAssociationType';
  association: Scalars['String'];
  associationLabel?: Maybe<Scalars['String']>;
};

export type PeopleZoomLevel3DetailType = {
  __typename?: 'PeopleZoomLevel3DetailType';
  associations?: Maybe<Array<PeopleAssociationType>>;
  birthDate?: Maybe<Scalars['String']>;
  birthPlace?: Maybe<Scalars['String']>;
  birthPlaceLabel?: Maybe<Scalars['String']>;
  deathDate?: Maybe<Scalars['String']>;
  deathPlace?: Maybe<Scalars['String']>;
  deathPlaceLabel?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  institution?: Maybe<Scalars['String']>;
  institutionLabel?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameTypes?: Maybe<Array<Scalars['String']>>;
  nameVariation?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  nationalityLabel?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  placeLabel?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  professionLabel?: Maybe<Scalars['String']>;
  relatedItem?: Maybe<Scalars['String']>;
  relatedItemLabel?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<EntityNames>;
};

export type PublicationAuthorType = {
  __typename?: 'PublicationAuthorType';
  author: Scalars['String'];
  authorLabel?: Maybe<Scalars['String']>;
  authorRole?: Maybe<Scalars['String']>;
  authorRoleLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  populatedAuthor?: Maybe<PeopleZoomLevel3DetailType>;
};

export type PublicationZoomLevel3DetailType = {
  __typename?: 'PublicationZoomLevel3DetailType';
  id: Scalars['String'];
  objectNumber?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<EntityNames>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationZoomLevel3UnionType = PublicationsArticleZoomLevel3DetailType | PublicationsAudioVisualZoomLevel3DetailType | PublicationsBookZoomLevel3DetailType | PublicationsSerialZoomLevel3DetailType;

export type PublicationsArticleZoomLevel3DetailType = {
  __typename?: 'PublicationsArticleZoomLevel3DetailType';
  abstract?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<PublicationAuthorType>>;
  availability?: Maybe<Scalars['String']>;
  geographicalKeyword?: Maybe<Scalars['String']>;
  geographicalKeywordLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  issue?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  languageLabel?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  populatedPublisher?: Maybe<PeopleZoomLevel3DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  sourceTitle?: Maybe<Scalars['String']>;
  sourceTitleLabel?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel3Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsAudioVisualZoomLevel3DetailType = {
  __typename?: 'PublicationsAudioVisualZoomLevel3DetailType';
  abstract?: Maybe<Scalars['String']>;
  annotation?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<PublicationAuthorType>>;
  availability?: Maybe<Scalars['String']>;
  geographicalKeyword?: Maybe<Scalars['String']>;
  geographicalKeywordLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  languageLabel?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  placeOfPublication?: Maybe<Scalars['String']>;
  placeOfPublicationLabel?: Maybe<Scalars['String']>;
  populatedPublisher?: Maybe<PeopleZoomLevel3DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel3Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsBookZoomLevel3DetailType = {
  __typename?: 'PublicationsBookZoomLevel3DetailType';
  annotation?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<PublicationAuthorType>>;
  availability?: Maybe<Scalars['String']>;
  codeOfArchive?: Maybe<Scalars['String']>;
  codeOfArchiveLabel?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  edition?: Maybe<Scalars['String']>;
  geographicalKeyword?: Maybe<Scalars['String']>;
  geographicalKeywordLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  illustration?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  languageLabel?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberOfPages?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  placeOfPublication?: Maybe<Scalars['String']>;
  placeOfPublicationLabel?: Maybe<Scalars['String']>;
  populatedPublisher?: Maybe<PeopleZoomLevel3DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  seriesLabel?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel3Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsSerialZoomLevel3DetailType = {
  __typename?: 'PublicationsSerialZoomLevel3DetailType';
  availability?: Maybe<Scalars['String']>;
  continuedAs?: Maybe<Scalars['String']>;
  continuedFrom?: Maybe<Scalars['String']>;
  holding?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  languageLabel?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  placeOfPublication?: Maybe<Scalars['String']>;
  placeOfPublicationLabel?: Maybe<Scalars['String']>;
  populatedPublisher?: Maybe<PeopleZoomLevel3DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel3Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export enum PublicationsZoomLevel3Types {
  Article = 'article',
  Audiovisual = 'audiovisual',
  Book = 'book',
  Serial = 'serial'
}

export type Query = {
  __typename?: 'Query';
  archiveOther: ArchivesFondsZoomLevel3DetailType;
  archivesDetailZoomLevel3: ArchiveZoomLevel3DetailType;
  author: AuthorEntityResponse;
  authors: AuthorEntityResponseCollection;
  homepage: HomepageEntityResponse;
  landingpage: LandingpageEntityResponse;
  landingpages: LandingpageEntityResponseCollection;
  location: LocationEntityResponse;
  locations: LocationRelationResponseCollection;
  menupage: MenupageEntityResponse;
  menupages: MenupageEntityResponseCollection;
  objectDetailZoomLevel3: ObjectsZoomLevel3DetailType;
  publicationArticle: PublicationsArticleZoomLevel3DetailType;
  publicationAudioVisual: PublicationsAudioVisualZoomLevel3DetailType;
  publicationBook: PublicationsBookZoomLevel3DetailType;
  publicationDetailZoomLevel3: PublicationZoomLevel3DetailType;
  publicationSerial: PublicationsSerialZoomLevel3DetailType;
  relations?: Maybe<Array<ZoomLevel3RelationsType>>;
  stories: StoryEntityResponseCollection;
  storiesByLocale: StoryEntityResponseCollection;
  storiesWithoutRelations: StoryWithoutRelationsEntityResponseCollection;
  story: StoryEntityResponse;
  storyWithoutRelations: StoryWithoutRelationsEntityResponse;
  table: TableEntityResponse;
  tables: TableEntityResponseCollection;
  theme: ThemeEntityResponse;
  themes: ThemeRelationResponseCollection;
  triplyRecord: TriplyRecordEntityResponse;
  triplyRecords: TriplyRecordRelationResponseCollection;
  usersPermissionsUser: UsersPermissionsUserEntityResponse;
  usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection;
  zoomLevel1: Array<ZoomLevel1Type>;
  zoomLevel2: ZoomLevel2ParentType;
  zoomLevel2Amount: ZoomLevel2AmountParentType;
  zoomLevel3Archive?: Maybe<ArchiveZoomLevel3DetailType>;
  zoomLevel3Object?: Maybe<ObjectsZoomLevel3DetailType>;
  zoomLevel3Person?: Maybe<PeopleZoomLevel3DetailType>;
  zoomLevel3Publication?: Maybe<PublicationZoomLevel3DetailType>;
  zoomLevel5Archive?: Maybe<ArchiveZoomLevel5UnionType>;
  zoomLevel5ArchivesFonds?: Maybe<ArchivesFondsZoomLevel3DetailType>;
  zoomLevel5ArchivesOther?: Maybe<ArchivesOtherZoomLevel3DetailType>;
  zoomLevel5Publication?: Maybe<PublicationZoomLevel3UnionType>;
  zoomLevel5PublicationsArticle?: Maybe<PublicationsArticleZoomLevel3DetailType>;
  zoomLevel5PublicationsAudiovisual?: Maybe<PublicationsAudioVisualZoomLevel3DetailType>;
  zoomLevel5PublicationsBook?: Maybe<PublicationsBookZoomLevel3DetailType>;
  zoomLevel5PublicationsSerial?: Maybe<PublicationsSerialZoomLevel3DetailType>;
};


export type QueryAuthorArgs = {
  id: Scalars['String'];
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpageArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpagesArgs = {
  filters?: InputMaybe<LandingpageFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryLocationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryMenupageArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryMenupagesArgs = {
  filters?: InputMaybe<MenupageFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryRelationsArgs = {
  id: Scalars['String'];
  lang: Scalars['String'];
  type: EntityNames;
};


export type QueryStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryStoriesByLocaleArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryStoriesWithoutRelationsArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryStoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryStoryWithoutRelationsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTablesArgs = {
  filters?: InputMaybe<TableFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryThemeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  locale?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryTriplyRecordArgs = {
  id: Scalars['String'];
};


export type QueryTriplyRecordsArgs = {
  filters?: InputMaybe<TriplyRecordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryZoomLevel2Args = {
  entityName: EntityNames;
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryZoomLevel2AmountArgs = {
  entityName: EntityNames;
};


export type QueryZoomLevel3ArchiveArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel3ObjectArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel3PersonArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel3PublicationArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5ArchiveArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5ArchivesFondsArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5ArchivesOtherArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PublicationArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PublicationsArticleArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PublicationsAudiovisualArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PublicationsBookArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PublicationsSerialArgs = {
  id: Scalars['String'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Story = {
  __typename?: 'Story';
  author?: Maybe<AuthorEntityResponse>;
  components?: Maybe<Array<StoryComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<StoryRelationResponseCollection>;
  locations?: Maybe<LocationRelationResponseCollection>;
  publicationDate?: Maybe<ComponentCorePublicationDate>;
  publishedAt?: Maybe<Scalars['Date']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  storyLinks?: Maybe<ComponentModulesButtonsModule>;
  timeframe?: Maybe<ComponentCoreTimeframe>;
  title: Scalars['String'];
  triplyRecords?: Maybe<TriplyRecordRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type StoryComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

export type StoryEntity = {
  __typename?: 'StoryEntity';
  attributes?: Maybe<Story>;
  id?: Maybe<Scalars['ID']>;
};

export type StoryEntityResponse = {
  __typename?: 'StoryEntityResponse';
  data?: Maybe<StoryEntity>;
};

export type StoryEntityResponseCollection = {
  __typename?: 'StoryEntityResponseCollection';
  data?: Maybe<Array<StoryEntity>>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type StoryFiltersInput = {
  and?: InputMaybe<Array<StoryFiltersInput>>;
  author?: InputMaybe<AuthorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insertion?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<StoryFiltersInput>;
  locations?: InputMaybe<LocationFiltersInput>;
  not?: InputMaybe<StoryFiltersInput>;
  or?: InputMaybe<Array<StoryFiltersInput>>;
  publicationDate?: InputMaybe<ComponentCorePublicationDateFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  storyLinks?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>;
  timeframe?: InputMaybe<ComponentCoreTimeframeFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  triplyRecords?: InputMaybe<TriplyRecordFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StoryRelationResponseCollection = {
  __typename?: 'StoryRelationResponseCollection';
  data?: Maybe<Array<StoryEntity>>;
};

export type StoryWithoutRelations = {
  __typename?: 'StoryWithoutRelations';
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type StoryWithoutRelationsEntity = {
  __typename?: 'StoryWithoutRelationsEntity';
  attributes?: Maybe<StoryWithoutRelations>;
  id?: Maybe<Scalars['ID']>;
};

export type StoryWithoutRelationsEntityResponse = {
  __typename?: 'StoryWithoutRelationsEntityResponse';
  data?: Maybe<StoryWithoutRelationsEntity>;
};

export type StoryWithoutRelationsEntityResponseCollection = {
  __typename?: 'StoryWithoutRelationsEntityResponseCollection';
  data?: Maybe<Array<StoryWithoutRelationsEntity>>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<Scalars['String']>>;
  between?: InputMaybe<Array<Scalars['String']>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Table = {
  __typename?: 'Table';
  TableBody?: Maybe<Array<ComponentCoreTableBody>>;
  Tablehead?: Maybe<ComponentCoreTableHead>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type TableEntity = {
  __typename?: 'TableEntity';
  attributes?: Maybe<Table>;
  id?: Maybe<Scalars['ID']>;
};

export type TableEntityResponse = {
  __typename?: 'TableEntityResponse';
  data?: Maybe<TableEntity>;
};

export type TableEntityResponseCollection = {
  __typename?: 'TableEntityResponseCollection';
  data: Array<TableEntity>;
  meta: ResponseCollectionMeta;
};

export type TableFiltersInput = {
  TableBody?: InputMaybe<ComponentCoreTableBodyFiltersInput>;
  Tablehead?: InputMaybe<ComponentCoreTableHeadFiltersInput>;
  and?: InputMaybe<Array<TableFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TableFiltersInput>;
  or?: InputMaybe<Array<TableFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type Theme = {
  __typename?: 'Theme';
  createdAt?: Maybe<Scalars['Date']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ThemeRelationResponseCollection>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['Date']>;
  stories?: Maybe<StoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  attributes?: Maybe<Theme>;
  id?: Maybe<Scalars['ID']>;
};

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse';
  data?: Maybe<ThemeEntity>;
};

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<ThemeFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insertion?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ThemeFiltersInput>;
  or?: InputMaybe<Array<ThemeFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ThemeRelationResponseCollection = {
  __typename?: 'ThemeRelationResponseCollection';
  data?: Maybe<Array<ThemeEntity>>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type TriplyRecord = {
  __typename?: 'TriplyRecord';
  archive?: Maybe<ArchiveZoomLevel3DetailType>;
  createdAt?: Maybe<Scalars['Date']>;
  object?: Maybe<ObjectsZoomLevel3DetailType>;
  people?: Maybe<PeopleZoomLevel3DetailType>;
  publication?: Maybe<PublicationZoomLevel3DetailType>;
  publishedAt?: Maybe<Scalars['Date']>;
  recordId: Scalars['String'];
  stories?: Maybe<StoryRelationResponseCollection>;
  type: EnumTriplyrecordType;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type TriplyRecordEntity = {
  __typename?: 'TriplyRecordEntity';
  attributes?: Maybe<TriplyRecord>;
  id?: Maybe<Scalars['ID']>;
};

export type TriplyRecordEntityResponse = {
  __typename?: 'TriplyRecordEntityResponse';
  data?: Maybe<TriplyRecordEntity>;
};

export type TriplyRecordFiltersInput = {
  and?: InputMaybe<Array<TriplyRecordFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TriplyRecordFiltersInput>;
  or?: InputMaybe<Array<TriplyRecordFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recordId?: InputMaybe<StringFilterInput>;
  stories?: InputMaybe<StoryFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TriplyRecordRelationResponseCollection = {
  __typename?: 'TriplyRecordRelationResponseCollection';
  data: Array<TriplyRecordEntity>;
  meta?: Maybe<ResponseCollectionMeta>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['String']>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['Date']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data?: Maybe<Array<UploadFileEntity>>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<UsersPermissionsPermissionFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<UsersPermissionsPermissionFiltersInput>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<UsersPermissionsRoleFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<UsersPermissionsRoleFiltersInput>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['Date']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<UsersPermissionsUserFiltersInput>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<UsersPermissionsUserFiltersInput>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ZoomLevel1Type = {
  __typename?: 'ZoomLevel1Type';
  count: Scalars['Int'];
  id: EntityNames;
  name: Scalars['String'];
};

export type ZoomLevel2AmountParentType = {
  __typename?: 'ZoomLevel2AmountParentType';
  total: Scalars['String'];
};

export type ZoomLevel2ParentType = {
  __typename?: 'ZoomLevel2ParentType';
  nodes?: Maybe<Array<ZoomLevel2Type>>;
  page: Scalars['Int'];
};

export type ZoomLevel2Type = {
  __typename?: 'ZoomLevel2Type';
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ZoomLevel3RelationsType = {
  __typename?: 'ZoomLevel3RelationsType';
  randomRelations?: Maybe<Array<Scalars['String']>>;
  total?: Maybe<Scalars['Float']>;
  type?: Maybe<EntityNames>;
};

export type StoryWithoutRelationsFragmentFragment = { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null };

export type ThemeFragmentFragment = { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null };

export type BaseTriplyRecordFragmentFragment = { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null };

export type StoryFragmentFragment = { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null }> | null } | null } | null };

export type ComponentCoreModuleLayoutsFragment = { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null };

export type ButtonsModuleFragmentFragment = { __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type CarouselModuleFragmentFragment = { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type GridModuleFragmentFragment = { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type ImageCarouselModuleFragmentFragment = { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null };

export type ImageModuleFragmentFragment = { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type PullquoteModuleFragmentFragment = { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type SubtitleModuleFragmentFragment = { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TableModuleFragmentFragment = { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TextModuleFragmentFragment = { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TitleModuleFragmentFragment = { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type Zoom3RelationsFragmentFragment = { __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null };

export type HomepageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type HomepageQuery = { __typename?: 'Query', homepage: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Title?: string | null, description?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null } | null } };

export type LandingpageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type LandingpageBySlugQuery = { __typename?: 'Query', landingpages: { __typename?: 'LandingpageEntityResponseCollection', data: Array<{ __typename?: 'LandingpageEntity', id?: string | null, attributes?: { __typename?: 'Landingpage', Title?: string | null, Description?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type MenupageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type MenupageBySlugQuery = { __typename?: 'Query', menupages: { __typename?: 'MenupageEntityResponseCollection', data: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type MenuPagesQueryVariables = Exact<{
  filters?: InputMaybe<MenupageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type MenuPagesQuery = { __typename?: 'Query', menupages: { __typename?: 'MenupageEntityResponseCollection', data: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', Title?: string | null, slug?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, localizations?: { __typename?: 'MenupageRelationResponseCollection', data?: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', Title?: string | null, slug?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null } | null }> | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageSize: number, pageCount: number, total: number } } } };

export type StoriesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type StoriesQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, shortDescription?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type StoriesWithoutRelationsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type StoriesWithoutRelationsQuery = { __typename?: 'Query', storiesWithoutRelations: { __typename?: 'StoryWithoutRelationsEntityResponseCollection', data?: Array<{ __typename?: 'StoryWithoutRelationsEntity', id?: string | null, attributes?: { __typename?: 'StoryWithoutRelations', title: string, slug?: string | null, shortDescription?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type StoryByIdQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type StoryByIdQuery = { __typename?: 'Query', storiesByLocale: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, description?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, storyLinks?: { __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null }> } | null } | null }> | null } };

export type StoryImagesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StoryImagesQuery = { __typename?: 'Query', story: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', components?: Array<{ __typename?: 'ComponentModulesButtonsModule' } | { __typename?: 'ComponentModulesGridModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTableModule' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null } | null } | null } };

export type ThemesQueryVariables = Exact<{
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type ThemesQuery = { __typename?: 'Query', themes: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', description?: string | null, thumbnail?: string | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, type?: EntityNames | null, title?: string | null, yearOfPublication?: string | null, objectNumber?: string | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', name?: string | null, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreImageCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageSize: number, pageCount: number, total: number } } | null } };

export type Zoom2QueryVariables = Exact<{
  entityName: EntityNames;
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type Zoom2Query = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id?: string | null }> | null } };

export type Zoom2AmountQueryVariables = Exact<{
  entityName: EntityNames;
}>;


export type Zoom2AmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2ArchivesQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom2ArchivesQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id?: string | null }> | null } };

export type Zoom2ArchiveAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type Zoom2ArchiveAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2ObjectsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom2ObjectsQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id?: string | null }> | null } };

export type Zoom2ObjectsAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type Zoom2ObjectsAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2PeopleQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom2PeopleQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id?: string | null }> | null } };

export type Zoom2PeopleAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type Zoom2PeopleAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2PublicationsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom2PublicationsQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id?: string | null }> | null } };

export type Zoom2PublicationsAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type Zoom2PublicationsAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type ZoomLevel3ArchiveQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel3ArchiveQuery = { __typename?: 'Query', zoomLevel3Archive?: { __typename: 'ArchiveZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: string | null } | null };

export type ArchivesRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  lang: Scalars['String'];
}>;


export type ArchivesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null }> | null };

export type ObjectRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  lang: Scalars['String'];
}>;


export type ObjectRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null }> | null };

export type PeopleRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  lang: Scalars['String'];
}>;


export type PeopleRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null }> | null };

export type PublicationRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  lang: Scalars['String'];
}>;


export type PublicationRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null }> | null };

export type StoriesRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  lang: Scalars['String'];
}>;


export type StoriesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type?: EntityNames | null, total?: number | null, randomRelations?: Array<string> | null }> | null };

export type ZoomLevel3ObjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel3ObjectQuery = { __typename?: 'Query', zoomLevel3Object?: { __typename: 'ObjectsZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: string | null } | null };

export type ZoomLevel3PublicationQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel3PublicationQuery = { __typename?: 'Query', zoomLevel3Publication?: { __typename: 'PublicationZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: string | null } | null };

export type ZoomLevel3PersonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel3PersonQuery = { __typename?: 'Query', zoomLevel3Person?: { __typename: 'PeopleZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: string | null } | null };

export type ZoomLevel1QueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel1Query = { __typename?: 'Query', zoomLevel1: Array<{ __typename?: 'ZoomLevel1Type', name: string, count: number, id: EntityNames }> };

export const ComponentCoreModuleLayoutsFragmentDoc = gql`
    fragment componentCoreModuleLayouts on ComponentCoreModuleLayouts {
  id
  spacingTop
  spacingBottom
}
    `;
export const TextModuleFragmentFragmentDoc = gql`
    fragment textModuleFragment on ComponentModulesTextModule {
  id
  __typename
  Richtext
  textModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
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
    `;
export const BaseTriplyRecordFragmentFragmentDoc = gql`
    fragment BaseTriplyRecordFragment on TriplyRecordEntity {
  id
  attributes {
    recordId
    type
  }
}
    `;
export const ImageModuleFragmentFragmentDoc = gql`
    fragment imageModuleFragment on ComponentModulesImage {
  id
  __typename
  image {
    data {
      attributes {
        url
        height
        width
      }
    }
  }
  story {
    data {
      ...StoryWithoutRelationsFragment
    }
  }
  triplyRecord {
    data {
      ...BaseTriplyRecordFragment
    }
  }
  caption
  alt_text
  imageModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${StoryWithoutRelationsFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}
${ComponentCoreModuleLayoutsFragmentDoc}`;
export const PullquoteModuleFragmentFragmentDoc = gql`
    fragment pullquoteModuleFragment on ComponentModulesPullquote {
  id
  __typename
  text
  pullquoteModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const TableModuleFragmentFragmentDoc = gql`
    fragment tableModuleFragment on ComponentModulesTableModule {
  id
  __typename
  table {
    data {
      id
      attributes {
        name
        description
        Tablehead {
          id
          TableHeadItem {
            id
            label
          }
        }
        TableBody {
          id
          TableBodyItem {
            id
            value
          }
        }
      }
    }
  }
  tableModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const TitleModuleFragmentFragmentDoc = gql`
    fragment titleModuleFragment on ComponentModulesTitleModule {
  id
  __typename
  Title
  titleModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const ImageCarouselModuleFragmentFragmentDoc = gql`
    fragment imageCarouselModuleFragment on ComponentModulesImageCarousel {
  id
  __typename
  images {
    data {
      attributes {
        url
        caption
        width
        height
        size
      }
    }
  }
  description
  imageCarouselModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
  items {
    description
    id
    name
    picture {
      data {
        attributes {
          url
          caption
          width
          height
          size
        }
      }
    }
    story {
      data {
        ...StoryWithoutRelationsFragment
      }
    }
    triplyRecord {
      data {
        ...BaseTriplyRecordFragment
      }
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}
${StoryWithoutRelationsFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
export const ButtonsModuleFragmentFragmentDoc = gql`
    fragment buttonsModuleFragment on ComponentModulesButtonsModule {
  id
  __typename
  buttons {
    id
    text
    url
    attachment {
      data {
        id
        attributes {
          url
        }
      }
    }
    hasAttachment
  }
  buttonStyle
  buttonsModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const SubtitleModuleFragmentFragmentDoc = gql`
    fragment subtitleModuleFragment on ComponentModulesSubtitle {
  id
  __typename
  text
  subtitleModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const GridModuleFragmentFragmentDoc = gql`
    fragment gridModuleFragment on ComponentModulesGridModule {
  __typename
  buttons {
    id
    url
    text
  }
  description
  featuredFields {
    id
    label
    value
  }
  fields {
    id
    title
    subtitle
    thumbnail {
      data {
        id
        attributes {
          url
          alternativeText
        }
      }
    }
    story {
      data {
        attributes {
          slug
          author {
            data {
              attributes {
                firstName
              }
            }
          }
          updatedAt
        }
      }
    }
    triplyRecord {
      data {
        attributes {
          createdAt
          updatedAt
          recordId
          archive {
            id
            type
            title
            objectNumber
          }
          object {
            description
            thumbnail
          }
          publication {
            id
            type
            title
            yearOfPublication
            objectNumber
          }
          people {
            name
            nameTypes
          }
        }
      }
    }
  }
  fieldTitlesAreInverted
  fieldTypes
  gridModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
  id
  pageSize
  showMoreButtonTitle
  title
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const StoryFragmentFragmentDoc = gql`
    fragment StoryFragment on StoryEntity {
  id
  attributes {
    title
    slug
    components {
      ... on ComponentModulesTextModule {
        ...textModuleFragment
      }
      ... on ComponentModulesImage {
        ...imageModuleFragment
      }
      ... on ComponentModulesPullquote {
        ...pullquoteModuleFragment
      }
      ... on ComponentModulesTableModule {
        ...tableModuleFragment
      }
      ... on ComponentModulesTitleModule {
        ...titleModuleFragment
      }
      ... on ComponentModulesImageCarousel {
        ...imageCarouselModuleFragment
      }
      ... on ComponentModulesButtonsModule {
        ...buttonsModuleFragment
      }
      ... on ComponentModulesSubtitle {
        ...subtitleModuleFragment
      }
      ... on ComponentModulesGridModule {
        ...gridModuleFragment
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
  }
}
    ${TextModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TableModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
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
    ${StoryFragmentFragmentDoc}`;
export const CarouselModuleFragmentFragmentDoc = gql`
    fragment carouselModuleFragment on ComponentModulesCarousel {
  id
  __typename
  items {
    id
    picture {
      data {
        attributes {
          url
        }
      }
    }
    type
    name
    description
    triply_record {
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
  title
  type
  buttonText
  buttonUrl
  description
  carouselModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${BaseTriplyRecordFragmentFragmentDoc}
${StoryWithoutRelationsFragmentFragmentDoc}
${ComponentCoreModuleLayoutsFragmentDoc}`;
export const Zoom3RelationsFragmentFragmentDoc = gql`
    fragment zoom3RelationsFragment on ZoomLevel3RelationsType {
  type
  total
  randomRelations
}
    `;
export const HomepageDocument = gql`
    query homepage($locale: String, $publicationState: String = "LIVE") {
  homepage(locale: $locale, publicationState: $publicationState) {
    data {
      id
      attributes {
        Title
        description
        components {
          ... on ComponentModulesTextModule {
            ...textModuleFragment
          }
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
          ... on ComponentModulesPullquote {
            ...pullquoteModuleFragment
          }
          ... on ComponentModulesTableModule {
            ...tableModuleFragment
          }
          ... on ComponentModulesTitleModule {
            ...titleModuleFragment
          }
          ... on ComponentModulesImageCarousel {
            ...imageCarouselModuleFragment
          }
          ... on ComponentModulesCarousel {
            ...carouselModuleFragment
          }
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
          ... on ComponentModulesSubtitle {
            ...subtitleModuleFragment
          }
          ... on ComponentModulesGridModule {
            ...gridModuleFragment
          }
        }
      }
    }
  }
}
    ${TextModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TableModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}`;
export const LandingpageBySlugDocument = gql`
    query landingpageBySlug($locale: String, $slug: String!, $publicationState: String = "LIVE") {
  landingpages(
    locale: $locale
    filters: {slug: {eq: $slug}}
    publicationState: $publicationState
  ) {
    data {
      id
      attributes {
        Title
        Description
        components {
          ... on ComponentModulesTextModule {
            ...textModuleFragment
          }
          ... on ComponentModulesCarousel {
            ...carouselModuleFragment
          }
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
          ... on ComponentModulesPullquote {
            ...pullquoteModuleFragment
          }
          ... on ComponentModulesTableModule {
            ...tableModuleFragment
          }
          ... on ComponentModulesTitleModule {
            ...titleModuleFragment
          }
          ... on ComponentModulesImageCarousel {
            ...imageCarouselModuleFragment
          }
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
          ... on ComponentModulesSubtitle {
            ...subtitleModuleFragment
          }
          ... on ComponentModulesGridModule {
            ...gridModuleFragment
          }
        }
      }
    }
  }
}
    ${TextModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TableModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}`;
export const MenupageBySlugDocument = gql`
    query menupageBySlug($locale: String, $slug: String!, $publicationState: String = "LIVE") {
  menupages(
    locale: $locale
    filters: {slug: {eq: $slug}}
    publicationState: $publicationState
  ) {
    data {
      id
      attributes {
        components {
          ... on ComponentModulesTextModule {
            ...textModuleFragment
          }
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
          ... on ComponentModulesPullquote {
            ...pullquoteModuleFragment
          }
          ... on ComponentModulesTableModule {
            ...tableModuleFragment
          }
          ... on ComponentModulesTitleModule {
            ...titleModuleFragment
          }
          ... on ComponentModulesImageCarousel {
            ...imageCarouselModuleFragment
          }
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
          ... on ComponentModulesSubtitle {
            ...subtitleModuleFragment
          }
          ... on ComponentModulesGridModule {
            ...gridModuleFragment
          }
        }
      }
    }
  }
}
    ${TextModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TableModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}`;
export const MenuPagesDocument = gql`
    query menuPages($filters: MenupageFiltersInput, $pagination: PaginationArg = {}, $sort: [String!] = [], $publicationState: String, $locale: String) {
  menupages(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
    locale: $locale
  ) {
    data {
      id
      attributes {
        Title
        slug
        createdAt
        updatedAt
        publishedAt
        locale
        localizations {
          data {
            id
            attributes {
              Title
              slug
              createdAt
              updatedAt
              publishedAt
              locale
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
    `;
export const StoriesDocument = gql`
    query stories($pagination: PaginationArg, $locale: String) {
  stories(pagination: $pagination, locale: $locale) {
    data {
      id
      attributes {
        title
        slug
        shortDescription
      }
    }
    meta {
      pagination {
        page
      }
    }
  }
}
    `;
export const StoriesWithoutRelationsDocument = gql`
    query storiesWithoutRelations($pagination: PaginationArg, $locale: String) {
  storiesWithoutRelations(pagination: $pagination, locale: $locale) {
    data {
      id
      attributes {
        title
        slug
        shortDescription
      }
    }
    meta {
      pagination {
        page
      }
    }
  }
}
    `;
export const StoryByIdDocument = gql`
    query storyById($locale: String, $id: ID, $publicationState: String = "LIVE") {
  storiesByLocale(
    locale: $locale
    filters: {id: {eq: $id}}
    publicationState: $publicationState
  ) {
    data {
      id
      __typename
      attributes {
        title
        description
        components {
          ... on ComponentModulesTextModule {
            ...textModuleFragment
          }
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
          ... on ComponentModulesPullquote {
            ...pullquoteModuleFragment
          }
          ... on ComponentModulesTableModule {
            ...tableModuleFragment
          }
          ... on ComponentModulesTitleModule {
            ...titleModuleFragment
          }
          ... on ComponentModulesImageCarousel {
            ...imageCarouselModuleFragment
          }
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
          ... on ComponentModulesSubtitle {
            ...subtitleModuleFragment
          }
          ... on ComponentModulesGridModule {
            ...gridModuleFragment
          }
        }
        storyLinks {
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
        }
        triplyRecords {
          data {
            ...BaseTriplyRecordFragment
          }
        }
      }
    }
  }
}
    ${TextModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TableModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
export const StoryImagesDocument = gql`
    query storyImages($id: String!) {
  story(id: $id) {
    data {
      id
      attributes {
        components {
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
        }
      }
    }
  }
}
    ${ImageModuleFragmentFragmentDoc}`;
export const ThemesDocument = gql`
    query themes($filters: ThemeFiltersInput, $pagination: PaginationArg, $sort: [String!], $publicationState: String, $locale: String) {
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
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
    ${ThemeFragmentFragmentDoc}`;
export const Zoom2Document = gql`
    query Zoom2($entityName: EntityNames!, $page: Int!, $pageSize: Int) {
  zoomLevel2(entityName: $entityName, page: $page, pageSize: $pageSize) {
    page
    nodes {
      title
      thumbnail
      id
    }
  }
}
    `;
export const Zoom2AmountDocument = gql`
    query Zoom2Amount($entityName: EntityNames!) {
  zoomLevel2Amount(entityName: $entityName) {
    total
  }
}
    `;
export const Zoom2ArchivesDocument = gql`
    query Zoom2Archives($page: Int!, $pageSize: Int!) {
  zoomLevel2(entityName: Archives, page: $page, pageSize: $pageSize) {
    page
    nodes {
      title
      thumbnail
      id
    }
  }
}
    `;
export const Zoom2ArchiveAmountDocument = gql`
    query Zoom2ArchiveAmount {
  zoomLevel2Amount(entityName: Archives) {
    total
  }
}
    `;
export const Zoom2ObjectsDocument = gql`
    query Zoom2Objects($page: Int!, $pageSize: Int!) {
  zoomLevel2(entityName: Objects, page: $page, pageSize: $pageSize) {
    page
    nodes {
      title
      thumbnail
      id
    }
  }
}
    `;
export const Zoom2ObjectsAmountDocument = gql`
    query Zoom2ObjectsAmount {
  zoomLevel2Amount(entityName: Objects) {
    total
  }
}
    `;
export const Zoom2PeopleDocument = gql`
    query Zoom2People($page: Int!, $pageSize: Int!) {
  zoomLevel2(entityName: People, page: $page, pageSize: $pageSize) {
    page
    nodes {
      title
      thumbnail
      id
    }
  }
}
    `;
export const Zoom2PeopleAmountDocument = gql`
    query Zoom2PeopleAmount {
  zoomLevel2Amount(entityName: People) {
    total
  }
}
    `;
export const Zoom2PublicationsDocument = gql`
    query Zoom2Publications($page: Int!, $pageSize: Int!) {
  zoomLevel2(entityName: Publications, page: $page, pageSize: $pageSize) {
    page
    nodes {
      title
      thumbnail
      id
    }
  }
}
    `;
export const Zoom2PublicationsAmountDocument = gql`
    query Zoom2PublicationsAmount {
  zoomLevel2Amount(entityName: Publications) {
    total
  }
}
    `;
export const ZoomLevel3ArchiveDocument = gql`
    query ZoomLevel3Archive($id: String!) {
  zoomLevel3Archive(id: $id) {
    __typename
    id
    title
    thumbnail
  }
}
    `;
export const ArchivesRelationsDocument = gql`
    query ArchivesRelations($id: String!, $lang: String!) {
  relations(type: Archives, id: $id, lang: $lang) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const ObjectRelationsDocument = gql`
    query ObjectRelations($id: String!, $lang: String!) {
  relations(type: Objects, id: $id, lang: $lang) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const PeopleRelationsDocument = gql`
    query PeopleRelations($id: String!, $lang: String!) {
  relations(type: People, id: $id, lang: $lang) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const PublicationRelationsDocument = gql`
    query PublicationRelations($id: String!, $lang: String!) {
  relations(type: Publications, id: $id, lang: $lang) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const StoriesRelationsDocument = gql`
    query StoriesRelations($id: String!, $lang: String!) {
  relations(type: Stories, id: $id, lang: $lang) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const ZoomLevel3ObjectDocument = gql`
    query ZoomLevel3Object($id: String!) {
  zoomLevel3Object(id: $id) {
    id
    __typename
    title
    thumbnail
  }
}
    `;
export const ZoomLevel3PublicationDocument = gql`
    query ZoomLevel3Publication($id: String!) {
  zoomLevel3Publication(id: $id) {
    id
    __typename
    title
    thumbnail
  }
}
    `;
export const ZoomLevel3PersonDocument = gql`
    query ZoomLevel3Person($id: String!) {
  zoomLevel3Person(id: $id) {
    __typename
    id
    title
    thumbnail
  }
}
    `;
export const ZoomLevel1Document = gql`
    query zoomLevel1 {
  zoomLevel1 {
    name
    count
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    homepage(variables?: HomepageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomepageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomepageQuery>(HomepageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'homepage', 'query');
    },
    landingpageBySlug(variables: LandingpageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingpageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingpageBySlugQuery>(LandingpageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingpageBySlug', 'query');
    },
    menupageBySlug(variables: MenupageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MenupageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MenupageBySlugQuery>(MenupageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'menupageBySlug', 'query');
    },
    menuPages(variables?: MenuPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MenuPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MenuPagesQuery>(MenuPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'menuPages', 'query');
    },
    stories(variables?: StoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesQuery>(StoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stories', 'query');
    },
    storiesWithoutRelations(variables?: StoriesWithoutRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesWithoutRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesWithoutRelationsQuery>(StoriesWithoutRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storiesWithoutRelations', 'query');
    },
    storyById(variables?: StoryByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryByIdQuery>(StoryByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyById', 'query');
    },
    storyImages(variables: StoryImagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryImagesQuery>(StoryImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyImages', 'query');
    },
    themes(variables?: ThemesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ThemesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ThemesQuery>(ThemesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'themes', 'query');
    },
    Zoom2(variables: Zoom2QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2Query>(Zoom2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2', 'query');
    },
    Zoom2Amount(variables: Zoom2AmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2AmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2AmountQuery>(Zoom2AmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Amount', 'query');
    },
    Zoom2Archives(variables: Zoom2ArchivesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ArchivesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ArchivesQuery>(Zoom2ArchivesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Archives', 'query');
    },
    Zoom2ArchiveAmount(variables?: Zoom2ArchiveAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ArchiveAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ArchiveAmountQuery>(Zoom2ArchiveAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2ArchiveAmount', 'query');
    },
    Zoom2Objects(variables: Zoom2ObjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ObjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ObjectsQuery>(Zoom2ObjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Objects', 'query');
    },
    Zoom2ObjectsAmount(variables?: Zoom2ObjectsAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ObjectsAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ObjectsAmountQuery>(Zoom2ObjectsAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2ObjectsAmount', 'query');
    },
    Zoom2People(variables: Zoom2PeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PeopleQuery>(Zoom2PeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2People', 'query');
    },
    Zoom2PeopleAmount(variables?: Zoom2PeopleAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PeopleAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PeopleAmountQuery>(Zoom2PeopleAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2PeopleAmount', 'query');
    },
    Zoom2Publications(variables: Zoom2PublicationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PublicationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PublicationsQuery>(Zoom2PublicationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Publications', 'query');
    },
    Zoom2PublicationsAmount(variables?: Zoom2PublicationsAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PublicationsAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PublicationsAmountQuery>(Zoom2PublicationsAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2PublicationsAmount', 'query');
    },
    ZoomLevel3Archive(variables: ZoomLevel3ArchiveQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ArchiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ArchiveQuery>(ZoomLevel3ArchiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Archive', 'query');
    },
    ArchivesRelations(variables: ArchivesRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchivesRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchivesRelationsQuery>(ArchivesRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchivesRelations', 'query');
    },
    ObjectRelations(variables: ObjectRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ObjectRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObjectRelationsQuery>(ObjectRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ObjectRelations', 'query');
    },
    PeopleRelations(variables: PeopleRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PeopleRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PeopleRelationsQuery>(PeopleRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PeopleRelations', 'query');
    },
    PublicationRelations(variables: PublicationRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationRelationsQuery>(PublicationRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PublicationRelations', 'query');
    },
    StoriesRelations(variables: StoriesRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesRelationsQuery>(StoriesRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StoriesRelations', 'query');
    },
    ZoomLevel3Object(variables: ZoomLevel3ObjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ObjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ObjectQuery>(ZoomLevel3ObjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Object', 'query');
    },
    ZoomLevel3Publication(variables: ZoomLevel3PublicationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PublicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PublicationQuery>(ZoomLevel3PublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Publication', 'query');
    },
    ZoomLevel3Person(variables: ZoomLevel3PersonQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PersonQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PersonQuery>(ZoomLevel3PersonDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Person', 'query');
    },
    zoomLevel1(variables?: ZoomLevel1QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel1Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel1Query>(ZoomLevel1Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zoomLevel1', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;