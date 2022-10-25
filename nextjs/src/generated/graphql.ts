import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockHomepageQuery((req, res, ctx) => {
 *   const { locale } = req.variables;
 *   return res(
 *     ctx.data({ homepage })
 *   )
 * })
 */
export const mockHomepageQuery = (resolver: ResponseResolver<GraphQLRequest<HomepageQueryVariables>, GraphQLContext<HomepageQuery>, any>) =>
  graphql.query<HomepageQuery, HomepageQueryVariables>(
    'homepage',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLandingpageBySlugQuery((req, res, ctx) => {
 *   const { locale, slug } = req.variables;
 *   return res(
 *     ctx.data({ landingpages })
 *   )
 * })
 */
export const mockLandingpageBySlugQuery = (resolver: ResponseResolver<GraphQLRequest<LandingpageBySlugQueryVariables>, GraphQLContext<LandingpageBySlugQuery>, any>) =>
  graphql.query<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>(
    'landingpageBySlug',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMenupageBySlugQuery((req, res, ctx) => {
 *   const { locale, slug } = req.variables;
 *   return res(
 *     ctx.data({ menupages })
 *   )
 * })
 */
export const mockMenupageBySlugQuery = (resolver: ResponseResolver<GraphQLRequest<MenupageBySlugQueryVariables>, GraphQLContext<MenupageBySlugQuery>, any>) =>
  graphql.query<MenupageBySlugQuery, MenupageBySlugQueryVariables>(
    'menupageBySlug',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStoriesQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ stories })
 *   )
 * })
 */
export const mockStoriesQuery = (resolver: ResponseResolver<GraphQLRequest<StoriesQueryVariables>, GraphQLContext<StoriesQuery>, any>) =>
  graphql.query<StoriesQuery, StoriesQueryVariables>(
    'stories',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockStoryBySlugQuery((req, res, ctx) => {
 *   const { locale, slug } = req.variables;
 *   return res(
 *     ctx.data({ stories })
 *   )
 * })
 */
export const mockStoryBySlugQuery = (resolver: ResponseResolver<GraphQLRequest<StoryBySlugQueryVariables>, GraphQLContext<StoryBySlugQuery>, any>) =>
  graphql.query<StoryBySlugQuery, StoryBySlugQueryVariables>(
    'storyBySlug',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom3Query((req, res, ctx) => {
 *   const { filterId, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel3 })
 *   )
 * })
 */
export const mockZoom3Query = (resolver: ResponseResolver<GraphQLRequest<Zoom3QueryVariables>, GraphQLContext<Zoom3Query>, any>) =>
  graphql.query<Zoom3Query, Zoom3QueryVariables>(
    'Zoom3',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom3ArchivesQuery((req, res, ctx) => {
 *   const { filterId, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel3 })
 *   )
 * })
 */
export const mockZoom3ArchivesQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom3ArchivesQueryVariables>, GraphQLContext<Zoom3ArchivesQuery>, any>) =>
  graphql.query<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>(
    'Zoom3Archives',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom3ObjectsQuery((req, res, ctx) => {
 *   const { filterId, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel3 })
 *   )
 * })
 */
export const mockZoom3ObjectsQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom3ObjectsQueryVariables>, GraphQLContext<Zoom3ObjectsQuery>, any>) =>
  graphql.query<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>(
    'Zoom3Objects',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom3DPeopleQuery((req, res, ctx) => {
 *   const { filterId, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel3 })
 *   )
 * })
 */
export const mockZoom3DPeopleQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom3DPeopleQueryVariables>, GraphQLContext<Zoom3DPeopleQuery>, any>) =>
  graphql.query<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>(
    'Zoom3DPeople',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom3DPublicationsQuery((req, res, ctx) => {
 *   const { filterId, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel3 })
 *   )
 * })
 */
export const mockZoom3DPublicationsQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom3DPublicationsQueryVariables>, GraphQLContext<Zoom3DPublicationsQuery>, any>) =>
  graphql.query<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>(
    'Zoom3DPublications',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom4Query((req, res, ctx) => {
 *   const { publicationsFilters, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel4 })
 *   )
 * })
 */
export const mockZoom4Query = (resolver: ResponseResolver<GraphQLRequest<Zoom4QueryVariables>, GraphQLContext<Zoom4Query>, any>) =>
  graphql.query<Zoom4Query, Zoom4QueryVariables>(
    'Zoom4',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom4ArchivesQuery((req, res, ctx) => {
 *   const { archivesFilters, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel4 })
 *   )
 * })
 */
export const mockZoom4ArchivesQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom4ArchivesQueryVariables>, GraphQLContext<Zoom4ArchivesQuery>, any>) =>
  graphql.query<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>(
    'Zoom4Archives',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom4ObjectsQuery((req, res, ctx) => {
 *   const { objectsFilters, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel4 })
 *   )
 * })
 */
export const mockZoom4ObjectsQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom4ObjectsQueryVariables>, GraphQLContext<Zoom4ObjectsQuery>, any>) =>
  graphql.query<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>(
    'Zoom4Objects',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom4PeopleQuery((req, res, ctx) => {
 *   const { peopleFilters, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel4 })
 *   )
 * })
 */
export const mockZoom4PeopleQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom4PeopleQueryVariables>, GraphQLContext<Zoom4PeopleQuery>, any>) =>
  graphql.query<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>(
    'Zoom4People',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoom4PublicationsQuery((req, res, ctx) => {
 *   const { publicationsFilters, page, pageSize } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel4 })
 *   )
 * })
 */
export const mockZoom4PublicationsQuery = (resolver: ResponseResolver<GraphQLRequest<Zoom4PublicationsQueryVariables>, GraphQLContext<Zoom4PublicationsQuery>, any>) =>
  graphql.query<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>(
    'Zoom4Publications',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel1Query((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel1 })
 *   )
 * })
 */
export const mockZoomLevel1Query = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel1QueryVariables>, GraphQLContext<ZoomLevel1Query>, any>) =>
  graphql.query<ZoomLevel1Query, ZoomLevel1QueryVariables>(
    'zoomLevel1',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel2Query((req, res, ctx) => {
 *   const { entityName } = req.variables;
 *   return res(
 *     ctx.data({ zoomLevel2 })
 *   )
 * })
 */
export const mockZoomLevel2Query = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel2QueryVariables>, GraphQLContext<ZoomLevel2Query>, any>) =>
  graphql.query<ZoomLevel2Query, ZoomLevel2QueryVariables>(
    'zoomLevel2',
    resolver
  )

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

export type ArchivesFondsZoomLevel5DetailType = {
  __typename?: 'ArchivesFondsZoomLevel5DetailType';
  appendices?: Maybe<Scalars['String']>;
  conditionsGoverningAccess?: Maybe<Scalars['String']>;
  contentScope?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  creatorHistory?: Maybe<Scalars['String']>;
  creatorLabel?: Maybe<Scalars['String']>;
  custodialHistory?: Maybe<Scalars['String']>;
  descriptionLevel?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  extent?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  objectNumber?: Maybe<Scalars['String']>;
  partReference?: Maybe<Scalars['String']>;
  partTitle?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  populatedCreator?: Maybe<PoepleZoomLevel5DetailType>;
  productionDate?: Maybe<Scalars['String']>;
  recordTitle?: Maybe<Scalars['String']>;
  relatedMaterial?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  repositoryLabel?: Maybe<Scalars['String']>;
  right?: Maybe<Scalars['String']>;
  rightLabel?: Maybe<Scalars['String']>;
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
  relatedMaterial?: Maybe<Scalars['String']>;
  rights?: Maybe<Scalars['String']>;
  rightsLabel?: Maybe<Scalars['String']>;
  scopeContent?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: ArchivesZoomLevel5Types;
};

export type ArchivesZoomLevel4FiltersArgs = {
  DescriptionLevel?: InputMaybe<Scalars['String']>;
  EndDate?: InputMaybe<Scalars['String']>;
  RelatedName?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['String']>;
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
};

export type ComponentModulesImageCarousel = {
  __typename?: 'ComponentModulesImageCarousel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageCarouselModuleLayout: ComponentCoreModuleLayouts;
  images?: Maybe<UploadFileRelationResponseCollection>;
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
  Media = 'Media',
  Objects = 'Objects',
  People = 'People',
  Publications = 'Publications',
  Stories = 'Stories'
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

export type LandingpageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesGridModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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

export type ObjectsZoomLevel4FiltersArgs = {
  EndDate?: InputMaybe<Scalars['String']>;
  Maker?: InputMaybe<Scalars['String']>;
  Material?: InputMaybe<Scalars['String']>;
  Objectname?: InputMaybe<Scalars['String']>;
  PerInst?: InputMaybe<Scalars['String']>;
  StartDate?: InputMaybe<Scalars['String']>;
  Subject?: InputMaybe<Scalars['String']>;
  Technique?: InputMaybe<Scalars['String']>;
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
  dimensionPart?: Maybe<Scalars['String']>;
  dimensionType?: Maybe<Scalars['String']>;
  dimensionUnit?: Maybe<Scalars['String']>;
  dimensionValue?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imageLabel?: Maybe<Scalars['String']>;
  maker?: Maybe<Scalars['String']>;
  makerLabel?: Maybe<Scalars['String']>;
  makerRole?: Maybe<Scalars['String']>;
  makerRoleLabel?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  materialLabel?: Maybe<Scalars['String']>;
  numberOfParts?: Maybe<Scalars['String']>;
  objectName?: Maybe<Scalars['String']>;
  objectNameLabel?: Maybe<Scalars['String']>;
  objectNumber?: Maybe<Scalars['String']>;
  permanentLink?: Maybe<Scalars['String']>;
  populatedMaker?: Maybe<PoepleZoomLevel5DetailType>;
  relatedObjectTitle?: Maybe<Scalars['String']>;
  rights?: Maybe<Scalars['String']>;
  rightsLabel?: Maybe<Scalars['String']>;
  scale?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  technique?: Maybe<Scalars['String']>;
  techniqueLabel?: Maybe<Scalars['String']>;
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
  association?: Maybe<Scalars['String']>;
  associationLabel?: Maybe<Scalars['String']>;
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
  nameType?: Maybe<Scalars['String']>;
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

export type PublicationZoomLevel5UnionType = PublicationsArticleZoomLevel5DetailType | PublicationsAudioVisualZoomLevel5DetailType | PublicationsBookZoomLevel5DetailType | PublicationsSerialZoomLevel5DetailType;

export type PublicationsArticleZoomLevel5DetailType = {
  __typename?: 'PublicationsArticleZoomLevel5DetailType';
  abstract?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorLabel?: Maybe<Scalars['String']>;
  authorRole?: Maybe<Scalars['String']>;
  authorRoleLabel?: Maybe<Scalars['String']>;
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
  populatedAuthor?: Maybe<PoepleZoomLevel5DetailType>;
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
  author?: Maybe<Scalars['String']>;
  authorLabel?: Maybe<Scalars['String']>;
  authorRole?: Maybe<Scalars['String']>;
  authorRoleLabel?: Maybe<Scalars['String']>;
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
  populatedAuthor?: Maybe<PoepleZoomLevel5DetailType>;
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
  author?: Maybe<Scalars['String']>;
  authorLabel?: Maybe<Scalars['String']>;
  authorRole?: Maybe<Scalars['String']>;
  authorRoleLabel?: Maybe<Scalars['String']>;
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
  populatedAuthor?: Maybe<PoepleZoomLevel5DetailType>;
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
  story: StoryEntityResponse;
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
  zoomLevel5ArchivesFonds?: Maybe<ArchivesFondsZoomLevel5DetailType>;
  zoomLevel5ArchivesOther?: Maybe<ArchivesOtherZoomLevel5DetailType>;
  zoomLevel5Object?: Maybe<ObjectsZoomLevel5DetailType>;
  zoomLevel5Person?: Maybe<PoepleZoomLevel5DetailType>;
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


export type QueryStoryArgs = {
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
  record: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ZoomLevel5RelatedArchiveType = {
  __typename?: 'ZoomLevel5RelatedArchiveType';
  id: Scalars['String'];
  type: EntityNames;
};

export type ZoomLevel5RelatedObjectType = {
  __typename?: 'ZoomLevel5RelatedObjectType';
  id: Scalars['String'];
  type: EntityNames;
};

export type ZoomLevel5RelatedPeopleType = {
  __typename?: 'ZoomLevel5RelatedPeopleType';
  birthDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  type: EntityNames;
};

export type ZoomLevel5RelatedPublicationType = {
  __typename?: 'ZoomLevel5RelatedPublicationType';
  id: Scalars['String'];
  type: EntityNames;
};

export type ZoomLevel5RelatedRecordType = ZoomLevel5RelatedArchiveType | ZoomLevel5RelatedObjectType | ZoomLevel5RelatedPeopleType | ZoomLevel5RelatedPublicationType;

export type ZoomLevel5RelationsType = {
  __typename?: 'ZoomLevel5RelationsType';
  randomRelations?: Maybe<Array<RelatedRecordType>>;
  total: Scalars['Float'];
  type: EntityNames;
};

export type ComponentCoreModuleLayoutsFragment = { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null };

export type ButtonsModuleFragmentFragment = { __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type CarouselModuleFragmentFragment = { __typename?: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', type: EnumTriplyrecordType, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, objectNumber?: string | null } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', title?: string | null, maker?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null, author?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, profession?: string | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type GridModuleFragmentFragment = { __typename?: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type ImageCarouselModuleFragmentFragment = { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type ImageModuleFragmentFragment = { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type PullquoteModuleFragmentFragment = { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type SubtitleModuleFragmentFragment = { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TableModuleFragmentFragment = { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TextModuleFragmentFragment = { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type TitleModuleFragmentFragment = { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

export type HomepageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type HomepageQuery = { __typename?: 'Query', homepage: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Title?: string | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', type: EnumTriplyrecordType, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, objectNumber?: string | null } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', title?: string | null, maker?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null, author?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, profession?: string | null } | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null } | null } };

export type LandingpageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type LandingpageBySlugQuery = { __typename?: 'Query', landingpages: { __typename?: 'LandingpageEntityResponseCollection', data: Array<{ __typename?: 'LandingpageEntity', id?: string | null, attributes?: { __typename?: 'Landingpage', Title?: string | null, Description?: string | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type MenupageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type MenupageBySlugQuery = { __typename?: 'Query', menupages: { __typename?: 'MenupageEntityResponseCollection', data: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type StoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type StoriesQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type StoryBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type StoryBySlugQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, description?: string | null, shortDescription?: string | null, publishedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, insertion?: string | null, lastName: string } | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', city?: string | null } | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes?: { __typename?: 'TriplyRecord', type: EnumTriplyrecordType, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, objectNumber?: string | null } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, objectNumber?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', title?: string | null, maker?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null, author?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, profession?: string | null } | null } | null }> } | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesCarousel' } | { __typename?: 'ComponentModulesGridModule', description?: string | null, fieldTitlesAreInverted: boolean, fieldTypes: EnumComponentmodulesgridmoduleFieldtypes, id: string, pageSize: number, showMoreButtonTitle: string, title?: string | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, url?: string | null, text?: string | null }> | null, featuredFields?: Array<{ __typename?: 'ComponentCoreFeaturedFields', id: string, label: string, value: string }> | null, fields?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title?: string | null, subtitle?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes?: { __typename?: 'TriplyRecord', createdAt?: any | null, updatedAt?: any | null, recordId: string, archive?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types } | { __typename?: 'ArchivesOtherZoomLevel5DetailType', id: string, type: ArchivesZoomLevel5Types, title?: string | null } | null, object?: { __typename?: 'ObjectsZoomLevel5DetailType', description?: string | null, image?: string | null } | null, publication?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsBookZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | { __typename?: 'PublicationsSerialZoomLevel5DetailType', id: string, type: PublicationsZoomLevel5Types, title?: string | null } | null, people?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null } | null } | null } | null } | null }> | null, gridModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, storyLinks?: { __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | null } | null }> | null } };

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
  publicationsFilters?: InputMaybe<PublicationsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4Query = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null }> | null } };

export type Zoom4ArchivesQueryVariables = Exact<{
  archivesFilters?: InputMaybe<ArchivesZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4ArchivesQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null }> | null } };

export type Zoom4ObjectsQueryVariables = Exact<{
  objectsFilters?: InputMaybe<ObjectsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4ObjectsQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null }> | null } };

export type Zoom4PeopleQueryVariables = Exact<{
  peopleFilters?: InputMaybe<PeopleZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4PeopleQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null }> | null } };

export type Zoom4PublicationsQueryVariables = Exact<{
  publicationsFilters?: InputMaybe<PublicationsZoomLevel4FiltersArgs>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
}>;


export type Zoom4PublicationsQuery = { __typename?: 'Query', zoomLevel4: { __typename?: 'ZoomLevel4ParentType', total: number, hasMore: boolean, nodes?: Array<{ __typename?: 'ZoomLevel4Type', record: string, title?: string | null, firstImage?: string | null, imageLabel?: string | null }> | null } };

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
export const CarouselModuleFragmentFragmentDoc = gql`
    fragment carouselModuleFragment on ComponentModulesCarousel {
  id
  items {
    id
    picture {
      data {
        attributes {
          url
        }
      }
    }
    name
    description
    triply_record {
      data {
        id
        attributes {
          type
          recordId
          archive {
            ... on ArchivesOtherZoomLevel5DetailType {
              id
              objectNumber
            }
            ... on ArchivesFondsZoomLevel5DetailType {
              id
              objectNumber
            }
          }
          object {
            title
            maker
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
              author
            }
          }
          people {
            name
            profession
          }
        }
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
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const GridModuleFragmentFragmentDoc = gql`
    fragment gridModuleFragment on ComponentModulesGridModule {
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
            nameType
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
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const ImageModuleFragmentFragmentDoc = gql`
    fragment imageModuleFragment on ComponentModulesImage {
  id
  image {
    data {
      attributes {
        url
      }
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
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const PullquoteModuleFragmentFragmentDoc = gql`
    fragment pullquoteModuleFragment on ComponentModulesPullquote {
  id
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
  Title
  titleModuleLayout {
    ... on ComponentCoreModuleLayouts {
      ...componentCoreModuleLayouts
    }
  }
}
    ${ComponentCoreModuleLayoutsFragmentDoc}`;
export const HomepageDocument = gql`
    query homepage($locale: String) {
  homepage(locale: $locale) {
    data {
      id
      attributes {
        Title
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

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const LandingpageBySlugDocument = gql`
    query landingpageBySlug($locale: String, $slug: String!) {
  landingpages(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        Title
        Description
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

/**
 * __useLandingpageBySlugQuery__
 *
 * To run a query within a React component, call `useLandingpageBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingpageBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingpageBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLandingpageBySlugQuery(baseOptions: Apollo.QueryHookOptions<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>(LandingpageBySlugDocument, options);
      }
export function useLandingpageBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>(LandingpageBySlugDocument, options);
        }
export type LandingpageBySlugQueryHookResult = ReturnType<typeof useLandingpageBySlugQuery>;
export type LandingpageBySlugLazyQueryHookResult = ReturnType<typeof useLandingpageBySlugLazyQuery>;
export type LandingpageBySlugQueryResult = Apollo.QueryResult<LandingpageBySlugQuery, LandingpageBySlugQueryVariables>;
export const MenupageBySlugDocument = gql`
    query menupageBySlug($locale: String, $slug: String!) {
  menupages(locale: $locale, filters: {slug: {eq: $slug}}) {
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

/**
 * __useMenupageBySlugQuery__
 *
 * To run a query within a React component, call `useMenupageBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenupageBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenupageBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMenupageBySlugQuery(baseOptions: Apollo.QueryHookOptions<MenupageBySlugQuery, MenupageBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenupageBySlugQuery, MenupageBySlugQueryVariables>(MenupageBySlugDocument, options);
      }
export function useMenupageBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenupageBySlugQuery, MenupageBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenupageBySlugQuery, MenupageBySlugQueryVariables>(MenupageBySlugDocument, options);
        }
export type MenupageBySlugQueryHookResult = ReturnType<typeof useMenupageBySlugQuery>;
export type MenupageBySlugLazyQueryHookResult = ReturnType<typeof useMenupageBySlugLazyQuery>;
export type MenupageBySlugQueryResult = Apollo.QueryResult<MenupageBySlugQuery, MenupageBySlugQueryVariables>;
export const StoriesDocument = gql`
    query stories {
  stories {
    data {
      id
      attributes {
        title
        slug
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

/**
 * __useStoriesQuery__
 *
 * To run a query within a React component, call `useStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStoriesQuery(baseOptions?: Apollo.QueryHookOptions<StoriesQuery, StoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoriesQuery, StoriesQueryVariables>(StoriesDocument, options);
      }
export function useStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoriesQuery, StoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoriesQuery, StoriesQueryVariables>(StoriesDocument, options);
        }
export type StoriesQueryHookResult = ReturnType<typeof useStoriesQuery>;
export type StoriesLazyQueryHookResult = ReturnType<typeof useStoriesLazyQuery>;
export type StoriesQueryResult = Apollo.QueryResult<StoriesQuery, StoriesQueryVariables>;
export const StoryBySlugDocument = gql`
    query storyBySlug($locale: String, $slug: String!) {
  stories(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
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
                maker
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
                  author
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

/**
 * __useStoryBySlugQuery__
 *
 * To run a query within a React component, call `useStoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoryBySlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useStoryBySlugQuery(baseOptions: Apollo.QueryHookOptions<StoryBySlugQuery, StoryBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoryBySlugQuery, StoryBySlugQueryVariables>(StoryBySlugDocument, options);
      }
export function useStoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoryBySlugQuery, StoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoryBySlugQuery, StoryBySlugQueryVariables>(StoryBySlugDocument, options);
        }
export type StoryBySlugQueryHookResult = ReturnType<typeof useStoryBySlugQuery>;
export type StoryBySlugLazyQueryHookResult = ReturnType<typeof useStoryBySlugLazyQuery>;
export type StoryBySlugQueryResult = Apollo.QueryResult<StoryBySlugQuery, StoryBySlugQueryVariables>;
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

/**
 * __useZoom3Query__
 *
 * To run a query within a React component, call `useZoom3Query` and pass it any options that fit your needs.
 * When your component renders, `useZoom3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom3Query({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom3Query(baseOptions: Apollo.QueryHookOptions<Zoom3Query, Zoom3QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom3Query, Zoom3QueryVariables>(Zoom3Document, options);
      }
export function useZoom3LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom3Query, Zoom3QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom3Query, Zoom3QueryVariables>(Zoom3Document, options);
        }
export type Zoom3QueryHookResult = ReturnType<typeof useZoom3Query>;
export type Zoom3LazyQueryHookResult = ReturnType<typeof useZoom3LazyQuery>;
export type Zoom3QueryResult = Apollo.QueryResult<Zoom3Query, Zoom3QueryVariables>;
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

/**
 * __useZoom3ArchivesQuery__
 *
 * To run a query within a React component, call `useZoom3ArchivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom3ArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom3ArchivesQuery({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom3ArchivesQuery(baseOptions: Apollo.QueryHookOptions<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>(Zoom3ArchivesDocument, options);
      }
export function useZoom3ArchivesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>(Zoom3ArchivesDocument, options);
        }
export type Zoom3ArchivesQueryHookResult = ReturnType<typeof useZoom3ArchivesQuery>;
export type Zoom3ArchivesLazyQueryHookResult = ReturnType<typeof useZoom3ArchivesLazyQuery>;
export type Zoom3ArchivesQueryResult = Apollo.QueryResult<Zoom3ArchivesQuery, Zoom3ArchivesQueryVariables>;
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

/**
 * __useZoom3ObjectsQuery__
 *
 * To run a query within a React component, call `useZoom3ObjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom3ObjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom3ObjectsQuery({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom3ObjectsQuery(baseOptions: Apollo.QueryHookOptions<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>(Zoom3ObjectsDocument, options);
      }
export function useZoom3ObjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>(Zoom3ObjectsDocument, options);
        }
export type Zoom3ObjectsQueryHookResult = ReturnType<typeof useZoom3ObjectsQuery>;
export type Zoom3ObjectsLazyQueryHookResult = ReturnType<typeof useZoom3ObjectsLazyQuery>;
export type Zoom3ObjectsQueryResult = Apollo.QueryResult<Zoom3ObjectsQuery, Zoom3ObjectsQueryVariables>;
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

/**
 * __useZoom3DPeopleQuery__
 *
 * To run a query within a React component, call `useZoom3DPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom3DPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom3DPeopleQuery({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom3DPeopleQuery(baseOptions: Apollo.QueryHookOptions<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>(Zoom3DPeopleDocument, options);
      }
export function useZoom3DPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>(Zoom3DPeopleDocument, options);
        }
export type Zoom3DPeopleQueryHookResult = ReturnType<typeof useZoom3DPeopleQuery>;
export type Zoom3DPeopleLazyQueryHookResult = ReturnType<typeof useZoom3DPeopleLazyQuery>;
export type Zoom3DPeopleQueryResult = Apollo.QueryResult<Zoom3DPeopleQuery, Zoom3DPeopleQueryVariables>;
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

/**
 * __useZoom3DPublicationsQuery__
 *
 * To run a query within a React component, call `useZoom3DPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom3DPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom3DPublicationsQuery({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom3DPublicationsQuery(baseOptions: Apollo.QueryHookOptions<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>(Zoom3DPublicationsDocument, options);
      }
export function useZoom3DPublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>(Zoom3DPublicationsDocument, options);
        }
export type Zoom3DPublicationsQueryHookResult = ReturnType<typeof useZoom3DPublicationsQuery>;
export type Zoom3DPublicationsLazyQueryHookResult = ReturnType<typeof useZoom3DPublicationsLazyQuery>;
export type Zoom3DPublicationsQueryResult = Apollo.QueryResult<Zoom3DPublicationsQuery, Zoom3DPublicationsQueryVariables>;
export const Zoom4Document = gql`
    query Zoom4($publicationsFilters: PublicationsZoomLevel4FiltersArgs, $page: Int!, $pageSize: Int!) {
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
    }
  }
}
    `;

/**
 * __useZoom4Query__
 *
 * To run a query within a React component, call `useZoom4Query` and pass it any options that fit your needs.
 * When your component renders, `useZoom4Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom4Query({
 *   variables: {
 *      publicationsFilters: // value for 'publicationsFilters'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom4Query(baseOptions: Apollo.QueryHookOptions<Zoom4Query, Zoom4QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom4Query, Zoom4QueryVariables>(Zoom4Document, options);
      }
export function useZoom4LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom4Query, Zoom4QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom4Query, Zoom4QueryVariables>(Zoom4Document, options);
        }
export type Zoom4QueryHookResult = ReturnType<typeof useZoom4Query>;
export type Zoom4LazyQueryHookResult = ReturnType<typeof useZoom4LazyQuery>;
export type Zoom4QueryResult = Apollo.QueryResult<Zoom4Query, Zoom4QueryVariables>;
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
    }
  }
}
    `;

/**
 * __useZoom4ArchivesQuery__
 *
 * To run a query within a React component, call `useZoom4ArchivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom4ArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom4ArchivesQuery({
 *   variables: {
 *      archivesFilters: // value for 'archivesFilters'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom4ArchivesQuery(baseOptions: Apollo.QueryHookOptions<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>(Zoom4ArchivesDocument, options);
      }
export function useZoom4ArchivesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>(Zoom4ArchivesDocument, options);
        }
export type Zoom4ArchivesQueryHookResult = ReturnType<typeof useZoom4ArchivesQuery>;
export type Zoom4ArchivesLazyQueryHookResult = ReturnType<typeof useZoom4ArchivesLazyQuery>;
export type Zoom4ArchivesQueryResult = Apollo.QueryResult<Zoom4ArchivesQuery, Zoom4ArchivesQueryVariables>;
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
    }
  }
}
    `;

/**
 * __useZoom4ObjectsQuery__
 *
 * To run a query within a React component, call `useZoom4ObjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom4ObjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom4ObjectsQuery({
 *   variables: {
 *      objectsFilters: // value for 'objectsFilters'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom4ObjectsQuery(baseOptions: Apollo.QueryHookOptions<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>(Zoom4ObjectsDocument, options);
      }
export function useZoom4ObjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>(Zoom4ObjectsDocument, options);
        }
export type Zoom4ObjectsQueryHookResult = ReturnType<typeof useZoom4ObjectsQuery>;
export type Zoom4ObjectsLazyQueryHookResult = ReturnType<typeof useZoom4ObjectsLazyQuery>;
export type Zoom4ObjectsQueryResult = Apollo.QueryResult<Zoom4ObjectsQuery, Zoom4ObjectsQueryVariables>;
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
    }
  }
}
    `;

/**
 * __useZoom4PeopleQuery__
 *
 * To run a query within a React component, call `useZoom4PeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom4PeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom4PeopleQuery({
 *   variables: {
 *      peopleFilters: // value for 'peopleFilters'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom4PeopleQuery(baseOptions: Apollo.QueryHookOptions<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>(Zoom4PeopleDocument, options);
      }
export function useZoom4PeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>(Zoom4PeopleDocument, options);
        }
export type Zoom4PeopleQueryHookResult = ReturnType<typeof useZoom4PeopleQuery>;
export type Zoom4PeopleLazyQueryHookResult = ReturnType<typeof useZoom4PeopleLazyQuery>;
export type Zoom4PeopleQueryResult = Apollo.QueryResult<Zoom4PeopleQuery, Zoom4PeopleQueryVariables>;
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
    }
  }
}
    `;

/**
 * __useZoom4PublicationsQuery__
 *
 * To run a query within a React component, call `useZoom4PublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoom4PublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoom4PublicationsQuery({
 *   variables: {
 *      publicationsFilters: // value for 'publicationsFilters'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useZoom4PublicationsQuery(baseOptions: Apollo.QueryHookOptions<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>(Zoom4PublicationsDocument, options);
      }
export function useZoom4PublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>(Zoom4PublicationsDocument, options);
        }
export type Zoom4PublicationsQueryHookResult = ReturnType<typeof useZoom4PublicationsQuery>;
export type Zoom4PublicationsLazyQueryHookResult = ReturnType<typeof useZoom4PublicationsLazyQuery>;
export type Zoom4PublicationsQueryResult = Apollo.QueryResult<Zoom4PublicationsQuery, Zoom4PublicationsQueryVariables>;
export const ZoomLevel1Document = gql`
    query zoomLevel1 {
  zoomLevel1 {
    name
    count
    id
  }
}
    `;

/**
 * __useZoomLevel1Query__
 *
 * To run a query within a React component, call `useZoomLevel1Query` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel1Query({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel1Query(baseOptions?: Apollo.QueryHookOptions<ZoomLevel1Query, ZoomLevel1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel1Query, ZoomLevel1QueryVariables>(ZoomLevel1Document, options);
      }
export function useZoomLevel1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel1Query, ZoomLevel1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel1Query, ZoomLevel1QueryVariables>(ZoomLevel1Document, options);
        }
export type ZoomLevel1QueryHookResult = ReturnType<typeof useZoomLevel1Query>;
export type ZoomLevel1LazyQueryHookResult = ReturnType<typeof useZoomLevel1LazyQuery>;
export type ZoomLevel1QueryResult = Apollo.QueryResult<ZoomLevel1Query, ZoomLevel1QueryVariables>;
export const ZoomLevel2Document = gql`
    query zoomLevel2($entityName: EntityNames!) {
  zoomLevel2(entityName: $entityName) {
    filter
    id
  }
}
    `;

/**
 * __useZoomLevel2Query__
 *
 * To run a query within a React component, call `useZoomLevel2Query` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel2Query({
 *   variables: {
 *      entityName: // value for 'entityName'
 *   },
 * });
 */
export function useZoomLevel2Query(baseOptions: Apollo.QueryHookOptions<ZoomLevel2Query, ZoomLevel2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel2Query, ZoomLevel2QueryVariables>(ZoomLevel2Document, options);
      }
export function useZoomLevel2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel2Query, ZoomLevel2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel2Query, ZoomLevel2QueryVariables>(ZoomLevel2Document, options);
        }
export type ZoomLevel2QueryHookResult = ReturnType<typeof useZoomLevel2Query>;
export type ZoomLevel2LazyQueryHookResult = ReturnType<typeof useZoomLevel2LazyQuery>;
export type ZoomLevel2QueryResult = Apollo.QueryResult<ZoomLevel2Query, ZoomLevel2QueryVariables>;