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

export type ArchiveZoomLevel5UnionType = ArchivesFondsZoomLevel5DetailType | ArchivesOtherZoomLevel5DetailType;

export type ArchivesFondsCreatorType = {
  __typename?: 'ArchivesFondsCreatorType';
  creator: Scalars['String'];
  creatorHistory?: Maybe<Scalars['String']>;
  creatorLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  populatedCreator?: Maybe<PoepleZoomLevel5DetailType>;
};

export type ArchivesFondsZoomLevel5DetailType = {
  __typename?: 'ArchivesFondsZoomLevel5DetailType';
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
  type: ArchivesZoomLevel5Types;
};

export type ArchivesOtherZoomLevel5DetailType = {
  __typename?: 'ArchivesOtherZoomLevel5DetailType';
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
  title?: Maybe<Scalars['String']>;
  type: ArchivesZoomLevel5Types;
};

export type ArchivesZoomLevel4FiltersArgs = {
  date?: InputMaybe<Scalars['String']>;
  descriptionLevel?: InputMaybe<Scalars['String']>;
  relatedName?: InputMaybe<Scalars['String']>;
};

export enum ArchivesZoomLevel5Types {
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
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
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
  items?: Maybe<Array<ComponentCoreCarouselItem>>;
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
  populatedMaker?: Maybe<PoepleZoomLevel5DetailType>;
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

export type ObjectsZoomLevel4FiltersArgs = {
  Maker?: InputMaybe<Scalars['String']>;
  Material?: InputMaybe<Scalars['String']>;
  Objectname?: InputMaybe<Scalars['String']>;
  PerInst?: InputMaybe<Scalars['String']>;
  Subject?: InputMaybe<Scalars['String']>;
  Technique?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
};

export type ObjectsZoomLevel5DetailType = {
  __typename?: 'ObjectsZoomLevel5DetailType';
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
  image?: Maybe<Scalars['String']>;
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
  title?: Maybe<Scalars['String']>;
  titleType?: Maybe<Scalars['String']>;
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

export type PeopleZoomLevel4FiltersArgs = {
  BirthDate?: InputMaybe<Scalars['String']>;
  DeathDate?: InputMaybe<Scalars['String']>;
  NameType?: InputMaybe<Scalars['String']>;
  Period?: InputMaybe<Scalars['String']>;
  Place?: InputMaybe<Scalars['String']>;
  Profession?: InputMaybe<Scalars['String']>;
};

export type PoepleZoomLevel5DetailType = {
  __typename?: 'PoepleZoomLevel5DetailType';
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
  name: Scalars['String'];
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
};

export type PublicationAuthorType = {
  __typename?: 'PublicationAuthorType';
  author: Scalars['String'];
  authorLabel?: Maybe<Scalars['String']>;
  authorRole?: Maybe<Scalars['String']>;
  authorRoleLabel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  populatedAuthor?: Maybe<PoepleZoomLevel5DetailType>;
};

export type PublicationZoomLevel5UnionType = PublicationsArticleZoomLevel5DetailType | PublicationsAudioVisualZoomLevel5DetailType | PublicationsBookZoomLevel5DetailType | PublicationsSerialZoomLevel5DetailType;

export type PublicationsArticleZoomLevel5DetailType = {
  __typename?: 'PublicationsArticleZoomLevel5DetailType';
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
  populatedPublisher?: Maybe<PoepleZoomLevel5DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  sourceTitle?: Maybe<Scalars['String']>;
  sourceTitleLabel?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel5Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsAudioVisualZoomLevel5DetailType = {
  __typename?: 'PublicationsAudioVisualZoomLevel5DetailType';
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
  populatedPublisher?: Maybe<PoepleZoomLevel5DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel5Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsBookZoomLevel5DetailType = {
  __typename?: 'PublicationsBookZoomLevel5DetailType';
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
  populatedPublisher?: Maybe<PoepleZoomLevel5DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  relatedPerInst?: Maybe<Scalars['String']>;
  relatedPerInstLabel?: Maybe<Scalars['String']>;
  seriesLabel?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel5Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsSerialZoomLevel5DetailType = {
  __typename?: 'PublicationsSerialZoomLevel5DetailType';
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
  populatedPublisher?: Maybe<PoepleZoomLevel5DetailType>;
  publisher?: Maybe<Scalars['String']>;
  publisherLabel?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  shelfmark?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  subjectLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: PublicationsZoomLevel5Types;
  typeOfPublication?: Maybe<Scalars['String']>;
  typeOfPublicationLabel?: Maybe<Scalars['String']>;
  yearOfPublication?: Maybe<Scalars['String']>;
};

export type PublicationsZoomLevel4FiltersArgs = {
  Author?: InputMaybe<Scalars['String']>;
  GeograficalKeyword?: InputMaybe<Scalars['String']>;
  RelatedPerInst?: InputMaybe<Scalars['String']>;
  Subject?: InputMaybe<Scalars['String']>;
  TypeOfPublication?: InputMaybe<Scalars['String']>;
};

export enum PublicationsZoomLevel5Types {
  Article = 'article',
  Audiovisual = 'audiovisual',
  Book = 'book',
  Serial = 'serial'
}

export type Query = {
  __typename?: 'Query';
  allRelations?: Maybe<Array<ZoomLevel5RelatedRecordType>>;
  archiveOther: ArchivesFondsZoomLevel5DetailType;
  author: AuthorEntityResponse;
  authors: AuthorEntityResponseCollection;
  homepage: HomepageEntityResponse;
  landingpage: LandingpageEntityResponse;
  landingpages: LandingpageEntityResponseCollection;
  location: LocationEntityResponse;
  locations: LocationRelationResponseCollection;
  menupage: MenupageEntityResponse;
  menupages: MenupageEntityResponseCollection;
  object: ObjectsZoomLevel5DetailType;
  publicationArticle: PublicationsArticleZoomLevel5DetailType;
  publicationAudioVisual: PublicationsAudioVisualZoomLevel5DetailType;
  publicationBook: PublicationsBookZoomLevel5DetailType;
  publicationSerial: PublicationsSerialZoomLevel5DetailType;
  relations?: Maybe<Array<ZoomLevel5RelationsType>>;
  stories: StoryEntityResponseCollection;
  storiesWithoutRelations: StoryWithoutRelationsEntityResponseCollection;
  story: StoryEntityResponse;
  storyWithoutRelations: StoryWithoutRelationsEntityResponse;
  table: TableEntityResponse;
  tables: TableEntityResponseCollection;
  triplyRecord: TriplyRecordEntityResponse;
  triplyRecords: TriplyRecordRelationResponseCollection;
  usersPermissionsUser: UsersPermissionsUserEntityResponse;
  usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection;
  zoomLevel1: Array<ZoomLevel1Type>;
  zoomLevel2: Array<ZoomLevel2Type>;
  zoomLevel3: Array<ZoomLevel3Type>;
  zoomLevel4: ZoomLevel4ParentType;
  zoomLevel5Archive?: Maybe<ArchiveZoomLevel5UnionType>;
  zoomLevel5ArchivesFonds?: Maybe<ArchivesFondsZoomLevel5DetailType>;
  zoomLevel5ArchivesOther?: Maybe<ArchivesOtherZoomLevel5DetailType>;
  zoomLevel5Object?: Maybe<ObjectsZoomLevel5DetailType>;
  zoomLevel5Person?: Maybe<PoepleZoomLevel5DetailType>;
  zoomLevel5Publication?: Maybe<PublicationZoomLevel5UnionType>;
  zoomLevel5PublicationsArticle?: Maybe<PublicationsArticleZoomLevel5DetailType>;
  zoomLevel5PublicationsAudiovisual?: Maybe<PublicationsAudioVisualZoomLevel5DetailType>;
  zoomLevel5PublicationsBook?: Maybe<PublicationsBookZoomLevel5DetailType>;
  zoomLevel5PublicationsSerial?: Maybe<PublicationsSerialZoomLevel5DetailType>;
};


export type QueryAllRelationsArgs = {
  id: Scalars['String'];
  relatedObjectsType: EntityNames;
  type: EntityNames;
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
  pagaination?: InputMaybe<PaginationArg>;
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
  externalSource?: InputMaybe<TriplyExternalSourceEnum>;
  id: Scalars['String'];
  type: EntityNames;
};


export type QueryStoriesArgs = {
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
};


export type QueryZoomLevel3Args = {
  entityName: EntityNames;
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryZoomLevel4Args = {
  archivesFilters?: InputMaybe<ArchivesZoomLevel4FiltersArgs>;
  entityName: EntityNames;
  objectsFilters?: InputMaybe<ObjectsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
  peopleFilters?: InputMaybe<PeopleZoomLevel4FiltersArgs>;
  publicationsFilters?: InputMaybe<PublicationsZoomLevel4FiltersArgs>;
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


export type QueryZoomLevel5ObjectArgs = {
  id: Scalars['String'];
};


export type QueryZoomLevel5PersonArgs = {
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

export type RelatedRecordType = {
  __typename?: 'RelatedRecordType';
  id: Scalars['String'];
  label: Scalars['String'];
  relations?: Maybe<Array<ZoomLevel5RelationsType>>;
  slug?: Maybe<Scalars['String']>;
  type: EntityNames;
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

export type StoryComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesCarousel | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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
  data: Array<StoryEntity>;
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

export enum TriplyExternalSourceEnum {
  All = 'all',
  Getty = 'getty',
  Rkd = 'rkd',
  Wikidata = 'wikidata'
}

export type TriplyRecord = {
  __typename?: 'TriplyRecord';
  archive?: Maybe<ArchiveZoomLevel5UnionType>;
  createdAt?: Maybe<Scalars['Date']>;
  object?: Maybe<ObjectsZoomLevel5DetailType>;
  people?: Maybe<PoepleZoomLevel5DetailType>;
  publication?: Maybe<PublicationZoomLevel5UnionType>;
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

export type ZoomLevel2Type = {
  __typename?: 'ZoomLevel2Type';
  filter: Scalars['String'];
  id: Scalars['String'];
};

export type ZoomLevel3Type = {
  __typename?: 'ZoomLevel3Type';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type ZoomLevel4ParentType = {
  __typename?: 'ZoomLevel4ParentType';
  appliedFilters?: Maybe<Scalars['String']>;
  hasMore: Scalars['Boolean'];
  nodes?: Maybe<Array<ZoomLevel4Type>>;
  page: Scalars['Int'];
  total: Scalars['Int'];
};

export type ZoomLevel4Type = {
  __typename?: 'ZoomLevel4Type';
  firstImage?: Maybe<Scalars['String']>;
  imageLabel?: Maybe<Scalars['String']>;
  pidWorkURI?: Maybe<Scalars['String']>;
  record: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ZoomLevel5RelatedRecordType = {
  __typename?: 'ZoomLevel5RelatedRecordType';
  availability?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creatorLabel?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  pidWorkURI?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  professionLabel?: Maybe<Scalars['String']>;
  type: EntityNames;
};

export type ZoomLevel5RelationsType = {
  __typename?: 'ZoomLevel5RelationsType';
  randomRelations?: Maybe<Array<RelatedRecordType>>;
  total: Scalars['Float'];
  type: EntityNames;
};

export type StoryWithoutRelationsFragmentFragment = { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null };

export type BaseTriplyRecordFragmentFragment = { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null };

export type ComponentCoreModuleLayoutsFragment = { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null };

export type ButtonsModuleFragmentFragment = { __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type CarouselModuleFragmentFragment = { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type GridModuleFragmentFragment = { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type ImageCarouselModuleFragmentFragment = { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null };

export type ImageModuleFragmentFragment = { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type PullquoteModuleFragmentFragment = { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type SubtitleModuleFragmentFragment = { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TableModuleFragmentFragment = { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TextModuleFragmentFragment = { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TitleModuleFragmentFragment = { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type Zoom5RelationsFragmentFragment = { __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null };

export type HomepageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type HomepageQuery = { __typename?: 'Query', homepage: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Title?: string | null, description?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null } | null } };

export type LandingpageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type LandingpageBySlugQuery = { __typename?: 'Query', landingpages: { __typename?: 'LandingpageEntityResponseCollection', data: Array<{ __typename?: 'LandingpageEntity', id?: string | null, attributes?: { __typename?: 'Landingpage', Title?: string | null, Description?: string | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, type?: EnumComponentcorecarouselitemType | null, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type MenupageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type MenupageBySlugQuery = { __typename?: 'Query', menupages: { __typename?: 'MenupageEntityResponseCollection', data: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

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

export type StoryBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type StoryBySlugQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, description?: string | null, shortDescription?: string | null, publishedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, insertion?: string | null, lastName: string } | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', city?: string | null } | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', type: EnumTriplyrecordType, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, objectNumber?: string | null } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', title?: string | null, image?: string | null, makers?: Array<{ __typename?: 'ObjectMakerType', maker?: string | null }> | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', author: string }> | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, profession?: string | null } | null } | null }> } | null, components?: Array<{ __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesCarousel' } | { __typename: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name: string, nameTypes?: Array<string> | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null }, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', description?: string | null, id: string, name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null }> | null } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, storyLinks?: { __typename: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | null } | null }> | null } };

export type StoryImagesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StoryImagesQuery = { __typename?: 'Query', story: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', components?: Array<{ __typename?: 'ComponentModulesButtonsModule' } | { __typename?: 'ComponentModulesCarousel' } | { __typename?: 'ComponentModulesGridModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } | null } | null } | null, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTableModule' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null } | null } | null } };

export type Zoom3QueryVariables = Exact<{
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom3Query = { __typename?: 'Query', zoomLevel3: Array<{ __typename?: 'ZoomLevel3Type', uri?: string | null, name?: string | null, count?: number | null, total?: number | null }> };

export type Zoom3ArchivesQueryVariables = Exact<{
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom3ArchivesQuery = { __typename?: 'Query', zoomLevel3: Array<{ __typename?: 'ZoomLevel3Type', uri?: string | null, name?: string | null, count?: number | null, total?: number | null }> };

export type Zoom3ObjectsQueryVariables = Exact<{
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom3ObjectsQuery = { __typename?: 'Query', zoomLevel3: Array<{ __typename?: 'ZoomLevel3Type', uri?: string | null, name?: string | null, count?: number | null, total?: number | null }> };

export type Zoom3DPeopleQueryVariables = Exact<{
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom3DPeopleQuery = { __typename?: 'Query', zoomLevel3: Array<{ __typename?: 'ZoomLevel3Type', uri?: string | null, name?: string | null, count?: number | null, total?: number | null }> };

export type Zoom3DPublicationsQueryVariables = Exact<{
  filterId: Scalars['String'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom3DPublicationsQuery = { __typename?: 'Query', zoomLevel3: Array<{ __typename?: 'ZoomLevel3Type', uri?: string | null, name?: string | null, count?: number | null, total?: number | null }> };

export type Zoom4QueryVariables = Exact<{
  entityName: EntityNames;
  publicationsFilters?: InputMaybe<PublicationsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type Zoom4Query = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null, pidWorkURI?: string | null }> | null } };

export type Zoom4ArchivesQueryVariables = Exact<{
  archivesFilters?: InputMaybe<ArchivesZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4ArchivesQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null, pidWorkURI?: string | null }> | null } };

export type Zoom4ObjectsQueryVariables = Exact<{
  objectsFilters?: InputMaybe<ObjectsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4ObjectsQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null, pidWorkURI?: string | null }> | null } };

export type Zoom4PeopleQueryVariables = Exact<{
  peopleFilters?: InputMaybe<PeopleZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4PeopleQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null, pidWorkURI?: string | null }> | null } };

export type Zoom4PublicationsQueryVariables = Exact<{
  publicationsFilters?: InputMaybe<PublicationsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4PublicationsQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null, pidWorkURI?: string | null }> | null } };

export type ArchivesRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ArchivesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null }> | null };

export type ObjectRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ObjectRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null }> | null };

export type PeopleRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PeopleRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null }> | null };

export type PublicationRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PublicationRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null }> | null };

export type StoriesRelationsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StoriesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number, randomRelations?: Array<{ __typename?: 'RelatedRecordType', id: string, label: string, type: EntityNames, slug?: string | null, relations?: Array<{ __typename?: 'ZoomLevel5RelationsType', type: EntityNames, total: number }> | null }> | null }> | null };

export type ZoomLevel5ArchivesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5ArchivesQuery = { __typename?: 'Query', zoomLevel5Archive?: { __typename: 'ArchivesFondsZoomLevel5DetailType', id: string, descriptionLevel?: string | null, objectNumber?: string | null, recordTitle?: string | null, startDate?: string | null, endDate?: string | null, productionDate?: string | null, extent?: string | null, repository?: string | null, repositoryLabel?: string | null, custodialHistory?: string | null, systemOfArrangement?: string | null, contentScope?: string | null, conditionsGoverningAccess?: string | null, relatedMaterial?: string | null, appendices?: string | null, source?: string | null, partReference?: string | null, partTitle?: string | null, right?: string | null, rightsLabel?: string | null, permanentLink?: string | null, creators?: Array<{ __typename?: 'ArchivesFondsCreatorType', id: string, creator: string, creatorLabel?: string | null, creatorHistory?: string | null }> | null } | { __typename: 'ArchivesOtherZoomLevel5DetailType', id: string, objectNumber?: string | null, title?: string | null, startDate?: string | null, endDate?: string | null, dateLabel?: string | null, dimensionFree?: string | null, mediaReference?: string | null, mediaReferenceLabel?: string | null, existenceOfOriginals?: string | null, scopeContent?: string | null, relatedMaterial?: string | null, rights?: string | null, rightsLabel?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5ArchivesFondsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5ArchivesFondsQuery = { __typename?: 'Query', zoomLevel5ArchivesFonds?: { __typename: 'ArchivesFondsZoomLevel5DetailType', id: string, recordTitle?: string | null, descriptionLevel?: string | null } | null };

export type ZoomLevel5ArchivesOtherQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5ArchivesOtherQuery = { __typename?: 'Query', zoomLevel5ArchivesOther?: { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, title?: string | null, type: ArchivesZoomLevel5Types, pidWorkURIs?: Array<string> | null } | null };

export type ZoomLevel5ObjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5ObjectQuery = { __typename?: 'Query', zoomLevel5Object?: { __typename: 'ObjectsZoomLevel5DetailType', id: string, image?: string | null, imageLabel?: string | null, title?: string | null, titleType?: string | null, objectNumber?: string | null, objectName?: string | null, objectNameLabel?: string | null, archiveCollectionCode?: string | null, startDate?: string | null, endDate?: string | null, numberOfParts?: string | null, scale?: string | null, dimHeight?: string | null, dimWidth?: string | null, dimDepth?: string | null, dimensionUnit?: string | null, description?: string | null, associationPerson?: string | null, associationPersonLabel?: string | null, associationPersonType?: string | null, relatedObjectTitle?: string | null, creditLine?: string | null, rights?: string | null, rightsLabel?: string | null, creationPlace?: string | null, creationPlaceLabel?: string | null, permanentLink?: string | null, makers?: Array<{ __typename?: 'ObjectMakerType', id: string, maker?: string | null, makerLabel?: string | null, makerRole?: string | null, makerRoleLabel?: string | null }> | null, techniques?: Array<{ __typename?: 'ObjectTechniqueType', id: string, technique: string, techniqueLabel?: string | null }> | null, materials?: Array<{ __typename?: 'ObjectMaterialType', id: string, material: string, materialLabel?: string | null }> | null } | null };

export type ZoomLevel5PublicationQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PublicationQuery = { __typename?: 'Query', zoomLevel5Publication?: { __typename: 'PublicationsArticleZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, sourceTitle?: string | null, sourceTitleLabel?: string | null, volume?: string | null, issue?: string | null, yearOfPublication?: string | null, page?: string | null, publisher?: string | null, publisherLabel?: string | null, abstract?: string | null, language?: string | null, languageLabel?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', id: string, author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | { __typename: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, abstract?: string | null, annotation?: string | null, scope?: string | null, language?: string | null, languageLabel?: string | null, medium?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, permanentLink?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', id: string, author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | { __typename: 'PublicationsBookZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, isbn?: string | null, description?: string | null, annotation?: string | null, codeOfArchive?: string | null, codeOfArchiveLabel?: string | null, edition?: string | null, illustration?: string | null, numberOfPages?: string | null, language?: string | null, languageLabel?: string | null, seriesLabel?: string | null, number?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', id: string, author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | { __typename: 'PublicationsSerialZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, subject?: string | null, subjectLabel?: string | null, language?: string | null, languageLabel?: string | null, continuedFrom?: string | null, continuedAs?: string | null, remarks?: string | null, availability?: string | null, shelfmark?: string | null, holding?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PublicationsArticleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PublicationsArticleQuery = { __typename?: 'Query', zoomLevel5PublicationsArticle?: { __typename: 'PublicationsArticleZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, sourceTitle?: string | null, sourceTitleLabel?: string | null, volume?: string | null, issue?: string | null, yearOfPublication?: string | null, page?: string | null, publisher?: string | null, publisherLabel?: string | null, abstract?: string | null, language?: string | null, languageLabel?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | null };

export type ZoomLevel5PublicationsAudiovisualQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PublicationsAudiovisualQuery = { __typename?: 'Query', zoomLevel5PublicationsAudiovisual?: { __typename: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, abstract?: string | null, annotation?: string | null, scope?: string | null, language?: string | null, languageLabel?: string | null, medium?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, permanentLink?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | null };

export type ZoomLevel5PublicationsBookQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PublicationsBookQuery = { __typename?: 'Query', zoomLevel5PublicationsBook?: { __typename: 'PublicationsBookZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, isbn?: string | null, description?: string | null, annotation?: string | null, codeOfArchive?: string | null, codeOfArchiveLabel?: string | null, edition?: string | null, illustration?: string | null, numberOfPages?: string | null, language?: string | null, languageLabel?: string | null, seriesLabel?: string | null, number?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null, authors?: Array<{ __typename?: 'PublicationAuthorType', author: string, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null }> | null } | null };

export type ZoomLevel5PublicationsSerialQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PublicationsSerialQuery = { __typename?: 'Query', zoomLevel5PublicationsSerial?: { __typename: 'PublicationsSerialZoomLevel5DetailType', id: string, typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, subject?: string | null, subjectLabel?: string | null, language?: string | null, languageLabel?: string | null, continuedFrom?: string | null, continuedAs?: string | null, remarks?: string | null, availability?: string | null, shelfmark?: string | null, holding?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PersonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ZoomLevel5PersonQuery = { __typename?: 'Query', zoomLevel5Person?: { __typename: 'PoepleZoomLevel5DetailType', id: string, name: string, nameTypes?: Array<string> | null, nameVariation?: string | null, birthDate?: string | null, birthPlace?: string | null, birthPlaceLabel?: string | null, deathDate?: string | null, deathPlace?: string | null, deathPlaceLabel?: string | null, place?: string | null, placeLabel?: string | null, startDate?: string | null, endDate?: string | null, nationality?: string | null, nationalityLabel?: string | null, institution?: string | null, institutionLabel?: string | null, profession?: string | null, professionLabel?: string | null, gender?: string | null, relatedItem?: string | null, relatedItemLabel?: string | null, description?: string | null, permanentLink?: string | null, associations?: Array<{ __typename?: 'PeopleAssociationType', association: string, associationLabel?: string | null }> | null } | null };

export type ZoomLevel1QueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel1Query = { __typename?: 'Query', zoomLevel1: Array<{ __typename?: 'ZoomLevel1Type', name: string, count: number, id: EntityNames }> };

export type ZoomLevel2QueryVariables = Exact<{
  entityName: EntityNames;
}>;


export type ZoomLevel2Query = { __typename?: 'Query', zoomLevel2: Array<{ __typename?: 'ZoomLevel2Type', filter: string, id: string }> };

export const ComponentCoreModuleLayoutsFragmentDoc = gql`
    fragment componentCoreModuleLayouts on ComponentCoreModuleLayouts {
  id
  spacingTop
  spacingBottom
}
    `;
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
export const BaseTriplyRecordFragmentFragmentDoc = gql`
    fragment BaseTriplyRecordFragment on TriplyRecordEntity {
  id
  attributes {
    recordId
    type
  }
}
    `;
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
            ... on ArchivesOtherZoomLevel5DetailType {
              id
              type
              title
            }
            ... on ArchivesFondsZoomLevel5DetailType {
              id
              type
            }
          }
          object {
            description
            image
          }
          publication {
            ... on PublicationsAudioVisualZoomLevel5DetailType {
              id
              type
              title
            }
            ... on PublicationsArticleZoomLevel5DetailType {
              id
              type
              title
            }
            ... on PublicationsSerialZoomLevel5DetailType {
              id
              type
              title
            }
            ... on PublicationsBookZoomLevel5DetailType {
              id
              type
              title
            }
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
export const Zoom5RelationsFragmentFragmentDoc = gql`
    fragment zoom5RelationsFragment on ZoomLevel5RelationsType {
  type
  total
  randomRelations {
    id
    label
    type
    slug
    relations {
      type
      total
    }
  }
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
export const StoryBySlugDocument = gql`
    query storyBySlug($locale: String, $slug: String!, $publicationState: String = "LIVE") {
  stories(
    locale: $locale
    filters: {slug: {eq: $slug}}
    publicationState: $publicationState
  ) {
    data {
      id
      __typename
      attributes {
        title
        description
        shortDescription
        publishedAt
        author {
          data {
            id
            attributes {
              firstName
              insertion
              lastName
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
        publicationDate {
          date
          displayType
        }
        triplyRecords {
          data {
            id
            attributes {
              type
              recordId
              archive {
                ... on ArchivesOtherZoomLevel5DetailType {
                  id
                  type
                  objectNumber
                }
                ... on ArchivesFondsZoomLevel5DetailType {
                  id
                  objectNumber
                }
              }
              object {
                title
                makers {
                  maker
                }
                image
              }
              publication {
                ... on PublicationsAudioVisualZoomLevel5DetailType {
                  id
                  type
                  title
                }
                ... on PublicationsArticleZoomLevel5DetailType {
                  id
                  type
                  title
                }
                ... on PublicationsSerialZoomLevel5DetailType {
                  id
                  type
                  title
                }
                ... on PublicationsBookZoomLevel5DetailType {
                  id
                  type
                  title
                  authors {
                    author
                  }
                }
              }
              people {
                name
                profession
              }
            }
          }
        }
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
export const Zoom3Document = gql`
    query Zoom3($filterId: String!, $page: Int!, $pageSize: Int!) {
  zoomLevel3(
    entityName: Publications
    filterId: $filterId
    page: $page
    pageSize: $pageSize
  ) {
    uri
    name
    count
    total
  }
}
    `;
export const Zoom3ArchivesDocument = gql`
    query Zoom3Archives($filterId: String!, $page: Int!, $pageSize: Int!) {
  zoomLevel3(
    entityName: Archives
    filterId: $filterId
    page: $page
    pageSize: $pageSize
  ) {
    uri
    name
    count
    total
  }
}
    `;
export const Zoom3ObjectsDocument = gql`
    query Zoom3Objects($filterId: String!, $page: Int!, $pageSize: Int!) {
  zoomLevel3(
    entityName: Objects
    filterId: $filterId
    page: $page
    pageSize: $pageSize
  ) {
    uri
    name
    count
    total
  }
}
    `;
export const Zoom3DPeopleDocument = gql`
    query Zoom3DPeople($filterId: String!, $page: Int!, $pageSize: Int!) {
  zoomLevel3(
    entityName: People
    filterId: $filterId
    page: $page
    pageSize: $pageSize
  ) {
    uri
    name
    count
    total
  }
}
    `;
export const Zoom3DPublicationsDocument = gql`
    query Zoom3DPublications($filterId: String!, $page: Int!, $pageSize: Int!) {
  zoomLevel3(
    entityName: Publications
    filterId: $filterId
    page: $page
    pageSize: $pageSize
  ) {
    uri
    name
    count
    total
  }
}
    `;
export const Zoom4Document = gql`
    query Zoom4($entityName: EntityNames!, $publicationsFilters: PublicationsZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int) {
  zoomLevel4(
    entityName: $entityName
    publicationsFilters: $publicationsFilters
    page: $page
    pageSize: $pageSize
  ) {
    total
    hasMore
    nodes {
      record
      title
      firstImage
      imageLabel
      pidWorkURI
    }
  }
}
    `;
export const Zoom4ArchivesDocument = gql`
    query Zoom4Archives($archivesFilters: ArchivesZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int!) {
  zoomLevel4(
    entityName: Archives
    archivesFilters: $archivesFilters
    page: $page
    pageSize: $pageSize
  ) {
    total
    hasMore
    nodes {
      record
      title
      firstImage
      imageLabel
      pidWorkURI
    }
  }
}
    `;
export const Zoom4ObjectsDocument = gql`
    query Zoom4Objects($objectsFilters: ObjectsZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int!) {
  zoomLevel4(
    entityName: Objects
    objectsFilters: $objectsFilters
    page: $page
    pageSize: $pageSize
  ) {
    total
    hasMore
    nodes {
      record
      title
      firstImage
      imageLabel
      pidWorkURI
    }
  }
}
    `;
export const Zoom4PeopleDocument = gql`
    query Zoom4People($peopleFilters: PeopleZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int!) {
  zoomLevel4(
    entityName: People
    peopleFilters: $peopleFilters
    page: $page
    pageSize: $pageSize
  ) {
    total
    hasMore
    nodes {
      record
      title
      firstImage
      imageLabel
      pidWorkURI
    }
  }
}
    `;
export const Zoom4PublicationsDocument = gql`
    query Zoom4Publications($publicationsFilters: PublicationsZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int!) {
  zoomLevel4(
    entityName: Publications
    publicationsFilters: $publicationsFilters
    page: $page
    pageSize: $pageSize
  ) {
    total
    hasMore
    nodes {
      record
      title
      firstImage
      imageLabel
      pidWorkURI
    }
  }
}
    `;
export const ArchivesRelationsDocument = gql`
    query ArchivesRelations($id: String!) {
  relations(type: Archives, id: $id) {
    ...zoom5RelationsFragment
  }
}
    ${Zoom5RelationsFragmentFragmentDoc}`;
export const ObjectRelationsDocument = gql`
    query ObjectRelations($id: String!) {
  relations(type: Objects, id: $id) {
    ...zoom5RelationsFragment
  }
}
    ${Zoom5RelationsFragmentFragmentDoc}`;
export const PeopleRelationsDocument = gql`
    query PeopleRelations($id: String!) {
  relations(type: People, id: $id) {
    ...zoom5RelationsFragment
  }
}
    ${Zoom5RelationsFragmentFragmentDoc}`;
export const PublicationRelationsDocument = gql`
    query PublicationRelations($id: String!) {
  relations(type: Publications, id: $id) {
    ...zoom5RelationsFragment
  }
}
    ${Zoom5RelationsFragmentFragmentDoc}`;
export const StoriesRelationsDocument = gql`
    query StoriesRelations($id: String!) {
  relations(type: Stories, id: $id) {
    ...zoom5RelationsFragment
  }
}
    ${Zoom5RelationsFragmentFragmentDoc}`;
export const ZoomLevel5ArchivesDocument = gql`
    query ZoomLevel5Archives($id: String!) {
  zoomLevel5Archive(id: $id) {
    __typename
    ... on ArchivesOtherZoomLevel5DetailType {
      __typename
      id
      objectNumber
      title
      startDate
      endDate
      dateLabel
      dimensionFree
      mediaReference
      mediaReferenceLabel
      existenceOfOriginals
      scopeContent
      relatedMaterial
      rights
      rightsLabel
      permanentLink
    }
    ... on ArchivesFondsZoomLevel5DetailType {
      __typename
      id
      descriptionLevel
      objectNumber
      recordTitle
      startDate
      endDate
      productionDate
      extent
      repository
      repositoryLabel
      creators {
        id
        creator
        creatorLabel
        creatorHistory
      }
      custodialHistory
      systemOfArrangement
      contentScope
      conditionsGoverningAccess
      relatedMaterial
      appendices
      source
      partReference
      partTitle
      right
      rightsLabel
      permanentLink
    }
  }
}
    `;
export const ZoomLevel5ArchivesFondsDocument = gql`
    query ZoomLevel5ArchivesFonds($id: String!) {
  zoomLevel5ArchivesFonds(id: $id) {
    __typename
    id
    recordTitle
    descriptionLevel
  }
}
    `;
export const ZoomLevel5ArchivesOtherDocument = gql`
    query ZoomLevel5ArchivesOther($id: String!) {
  zoomLevel5ArchivesOther(id: $id) {
    id
    title
    type
    pidWorkURIs
  }
}
    `;
export const ZoomLevel5ObjectDocument = gql`
    query ZoomLevel5Object($id: String!) {
  zoomLevel5Object(id: $id) {
    __typename
    id
    image
    imageLabel
    title
    titleType
    objectNumber
    objectName
    objectNameLabel
    archiveCollectionCode
    makers {
      id
      maker
      makerLabel
      makerRole
      makerRoleLabel
    }
    startDate
    endDate
    numberOfParts
    scale
    techniques {
      id
      technique
      techniqueLabel
    }
    materials {
      id
      material
      materialLabel
    }
    dimHeight
    dimWidth
    dimDepth
    dimensionUnit
    description
    associationPerson
    associationPersonLabel
    associationPersonType
    relatedObjectTitle
    creditLine
    rights
    rightsLabel
    creationPlace
    creationPlaceLabel
    permanentLink
  }
}
    `;
export const ZoomLevel5PublicationDocument = gql`
    query ZoomLevel5Publication($id: String!) {
  zoomLevel5Publication(id: $id) {
    __typename
    ... on PublicationsAudioVisualZoomLevel5DetailType {
      id
      __typename
      typeOfPublication
      typeOfPublicationLabel
      title
      authors {
        id
        author
        authorLabel
        authorRole
        authorRoleLabel
      }
      publisher
      publisherLabel
      yearOfPublication
      placeOfPublication
      placeOfPublicationLabel
      abstract
      annotation
      scope
      language
      languageLabel
      medium
      geographicalKeyword
      geographicalKeywordLabel
      subject
      subjectLabel
      relatedPerInst
      relatedPerInstLabel
      permanentLink
      objectNumber
      availability
      shelfmark
    }
    ... on PublicationsArticleZoomLevel5DetailType {
      __typename
      id
      typeOfPublication
      typeOfPublicationLabel
      title
      authors {
        id
        author
        authorLabel
        authorRole
        authorRoleLabel
      }
      sourceTitle
      sourceTitleLabel
      volume
      issue
      yearOfPublication
      page
      publisher
      publisherLabel
      abstract
      language
      languageLabel
      geographicalKeyword
      geographicalKeywordLabel
      subject
      subjectLabel
      relatedPerInst
      relatedPerInstLabel
      objectNumber
      availability
      shelfmark
      permanentLink
    }
    ... on PublicationsSerialZoomLevel5DetailType {
      id
      __typename
      typeOfPublication
      typeOfPublicationLabel
      title
      publisher
      publisherLabel
      yearOfPublication
      placeOfPublication
      placeOfPublicationLabel
      subject
      subjectLabel
      language
      languageLabel
      continuedFrom
      continuedAs
      remarks
      availability
      shelfmark
      holding
      permanentLink
    }
    ... on PublicationsBookZoomLevel5DetailType {
      id
      __typename
      typeOfPublication
      typeOfPublicationLabel
      title
      authors {
        id
        author
        authorLabel
        authorRole
        authorRoleLabel
      }
      publisher
      publisherLabel
      yearOfPublication
      placeOfPublication
      placeOfPublicationLabel
      isbn
      description
      annotation
      codeOfArchive
      codeOfArchiveLabel
      edition
      illustration
      numberOfPages
      language
      languageLabel
      seriesLabel
      number
      geographicalKeyword
      geographicalKeywordLabel
      subject
      subjectLabel
      relatedPerInst
      relatedPerInstLabel
      objectNumber
      availability
      shelfmark
      permanentLink
    }
  }
}
    `;
export const ZoomLevel5PublicationsArticleDocument = gql`
    query ZoomLevel5PublicationsArticle($id: String!) {
  zoomLevel5PublicationsArticle(id: $id) {
    id
    __typename
    typeOfPublication
    typeOfPublicationLabel
    title
    authors {
      author
      authorLabel
      authorRole
      authorRoleLabel
    }
    sourceTitle
    sourceTitleLabel
    volume
    issue
    yearOfPublication
    page
    publisher
    publisherLabel
    abstract
    language
    languageLabel
    geographicalKeyword
    geographicalKeywordLabel
    subject
    subjectLabel
    relatedPerInst
    relatedPerInstLabel
    objectNumber
    availability
    shelfmark
    permanentLink
  }
}
    `;
export const ZoomLevel5PublicationsAudiovisualDocument = gql`
    query ZoomLevel5PublicationsAudiovisual($id: String!) {
  zoomLevel5PublicationsAudiovisual(id: $id) {
    id
    __typename
    typeOfPublication
    typeOfPublicationLabel
    title
    authors {
      author
      authorLabel
      authorRole
      authorRoleLabel
    }
    publisher
    publisherLabel
    yearOfPublication
    placeOfPublication
    placeOfPublicationLabel
    abstract
    annotation
    scope
    language
    languageLabel
    medium
    geographicalKeyword
    geographicalKeywordLabel
    subject
    subjectLabel
    relatedPerInst
    relatedPerInstLabel
    permanentLink
    objectNumber
    availability
    shelfmark
  }
}
    `;
export const ZoomLevel5PublicationsBookDocument = gql`
    query ZoomLevel5PublicationsBook($id: String!) {
  zoomLevel5PublicationsBook(id: $id) {
    id
    __typename
    typeOfPublication
    typeOfPublicationLabel
    title
    authors {
      author
      authorLabel
      authorRole
      authorRoleLabel
    }
    publisher
    publisherLabel
    yearOfPublication
    placeOfPublication
    placeOfPublicationLabel
    isbn
    description
    annotation
    codeOfArchive
    codeOfArchiveLabel
    edition
    illustration
    numberOfPages
    language
    languageLabel
    seriesLabel
    number
    geographicalKeyword
    geographicalKeywordLabel
    subject
    subjectLabel
    relatedPerInst
    relatedPerInstLabel
    objectNumber
    availability
    shelfmark
    permanentLink
  }
}
    `;
export const ZoomLevel5PublicationsSerialDocument = gql`
    query ZoomLevel5PublicationsSerial($id: String!) {
  zoomLevel5PublicationsSerial(id: $id) {
    id
    __typename
    typeOfPublication
    typeOfPublicationLabel
    title
    publisher
    publisherLabel
    yearOfPublication
    placeOfPublication
    placeOfPublicationLabel
    subject
    subjectLabel
    language
    languageLabel
    continuedFrom
    continuedAs
    remarks
    availability
    shelfmark
    holding
    permanentLink
  }
}
    `;
export const ZoomLevel5PersonDocument = gql`
    query ZoomLevel5Person($id: String!) {
  zoomLevel5Person(id: $id) {
    __typename
    id
    name
    nameTypes
    nameVariation
    birthDate
    birthPlace
    birthPlaceLabel
    deathDate
    deathPlace
    deathPlaceLabel
    place
    placeLabel
    startDate
    endDate
    nationality
    nationalityLabel
    institution
    institutionLabel
    profession
    professionLabel
    gender
    associations {
      association
      associationLabel
    }
    relatedItem
    relatedItemLabel
    description
    permanentLink
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
export const ZoomLevel2Document = gql`
    query zoomLevel2($entityName: EntityNames!) {
  zoomLevel2(entityName: $entityName) {
    filter
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
    storyBySlug(variables: StoryBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryBySlugQuery>(StoryBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyBySlug', 'query');
    },
    storyImages(variables: StoryImagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryImagesQuery>(StoryImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyImages', 'query');
    },
    Zoom3(variables: Zoom3QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom3Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom3Query>(Zoom3Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom3', 'query');
    },
    Zoom3Archives(variables: Zoom3ArchivesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom3ArchivesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom3ArchivesQuery>(Zoom3ArchivesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom3Archives', 'query');
    },
    Zoom3Objects(variables: Zoom3ObjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom3ObjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom3ObjectsQuery>(Zoom3ObjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom3Objects', 'query');
    },
    Zoom3DPeople(variables: Zoom3DPeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom3DPeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom3DPeopleQuery>(Zoom3DPeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom3DPeople', 'query');
    },
    Zoom3DPublications(variables: Zoom3DPublicationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom3DPublicationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom3DPublicationsQuery>(Zoom3DPublicationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom3DPublications', 'query');
    },
    Zoom4(variables: Zoom4QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom4Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom4Query>(Zoom4Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom4', 'query');
    },
    Zoom4Archives(variables: Zoom4ArchivesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom4ArchivesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom4ArchivesQuery>(Zoom4ArchivesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom4Archives', 'query');
    },
    Zoom4Objects(variables: Zoom4ObjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom4ObjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom4ObjectsQuery>(Zoom4ObjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom4Objects', 'query');
    },
    Zoom4People(variables: Zoom4PeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom4PeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom4PeopleQuery>(Zoom4PeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom4People', 'query');
    },
    Zoom4Publications(variables: Zoom4PublicationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom4PublicationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom4PublicationsQuery>(Zoom4PublicationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom4Publications', 'query');
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
    ZoomLevel5Archives(variables: ZoomLevel5ArchivesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5ArchivesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5ArchivesQuery>(ZoomLevel5ArchivesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5Archives', 'query');
    },
    ZoomLevel5ArchivesFonds(variables: ZoomLevel5ArchivesFondsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5ArchivesFondsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5ArchivesFondsQuery>(ZoomLevel5ArchivesFondsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5ArchivesFonds', 'query');
    },
    ZoomLevel5ArchivesOther(variables: ZoomLevel5ArchivesOtherQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5ArchivesOtherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5ArchivesOtherQuery>(ZoomLevel5ArchivesOtherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5ArchivesOther', 'query');
    },
    ZoomLevel5Object(variables: ZoomLevel5ObjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5ObjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5ObjectQuery>(ZoomLevel5ObjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5Object', 'query');
    },
    ZoomLevel5Publication(variables: ZoomLevel5PublicationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PublicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PublicationQuery>(ZoomLevel5PublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5Publication', 'query');
    },
    ZoomLevel5PublicationsArticle(variables: ZoomLevel5PublicationsArticleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PublicationsArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PublicationsArticleQuery>(ZoomLevel5PublicationsArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5PublicationsArticle', 'query');
    },
    ZoomLevel5PublicationsAudiovisual(variables: ZoomLevel5PublicationsAudiovisualQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PublicationsAudiovisualQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PublicationsAudiovisualQuery>(ZoomLevel5PublicationsAudiovisualDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5PublicationsAudiovisual', 'query');
    },
    ZoomLevel5PublicationsBook(variables: ZoomLevel5PublicationsBookQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PublicationsBookQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PublicationsBookQuery>(ZoomLevel5PublicationsBookDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5PublicationsBook', 'query');
    },
    ZoomLevel5PublicationsSerial(variables: ZoomLevel5PublicationsSerialQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PublicationsSerialQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PublicationsSerialQuery>(ZoomLevel5PublicationsSerialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5PublicationsSerial', 'query');
    },
    ZoomLevel5Person(variables: ZoomLevel5PersonQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel5PersonQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel5PersonQuery>(ZoomLevel5PersonDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel5Person', 'query');
    },
    zoomLevel1(variables?: ZoomLevel1QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel1Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel1Query>(ZoomLevel1Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zoomLevel1', 'query');
    },
    zoomLevel2(variables: ZoomLevel2QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel2Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel2Query>(ZoomLevel2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zoomLevel2', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;