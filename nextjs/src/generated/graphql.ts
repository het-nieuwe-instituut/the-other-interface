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
 * mockZoomLevel5ArchivesFondsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5ArchivesFonds })
 *   )
 * })
 */
export const mockZoomLevel5ArchivesFondsQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5ArchivesFondsQueryVariables>, GraphQLContext<ZoomLevel5ArchivesFondsQuery>, any>) =>
  graphql.query<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>(
    'ZoomLevel5ArchivesFonds',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5ArchivesOtherQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5ArchivesOther })
 *   )
 * })
 */
export const mockZoomLevel5ArchivesOtherQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5ArchivesOtherQueryVariables>, GraphQLContext<ZoomLevel5ArchivesOtherQuery>, any>) =>
  graphql.query<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>(
    'ZoomLevel5ArchivesOther',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5ObjectQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5Object })
 *   )
 * })
 */
export const mockZoomLevel5ObjectQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5ObjectQueryVariables>, GraphQLContext<ZoomLevel5ObjectQuery>, any>) =>
  graphql.query<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>(
    'ZoomLevel5Object',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5PublicationsArticleQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5PublicationsArticle })
 *   )
 * })
 */
export const mockZoomLevel5PublicationsArticleQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5PublicationsArticleQueryVariables>, GraphQLContext<ZoomLevel5PublicationsArticleQuery>, any>) =>
  graphql.query<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>(
    'ZoomLevel5PublicationsArticle',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5PublicationsAudiovisualQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5PublicationsAudiovisual })
 *   )
 * })
 */
export const mockZoomLevel5PublicationsAudiovisualQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5PublicationsAudiovisualQueryVariables>, GraphQLContext<ZoomLevel5PublicationsAudiovisualQuery>, any>) =>
  graphql.query<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>(
    'ZoomLevel5PublicationsAudiovisual',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5PublicationsBookQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5PublicationsBook })
 *   )
 * })
 */
export const mockZoomLevel5PublicationsBookQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5PublicationsBookQueryVariables>, GraphQLContext<ZoomLevel5PublicationsBookQuery>, any>) =>
  graphql.query<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>(
    'ZoomLevel5PublicationsBook',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5PublicationsSerialQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5PublicationsSerial })
 *   )
 * })
 */
export const mockZoomLevel5PublicationsSerialQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5PublicationsSerialQueryVariables>, GraphQLContext<ZoomLevel5PublicationsSerialQuery>, any>) =>
  graphql.query<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>(
    'ZoomLevel5PublicationsSerial',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockZoomLevel5PersonQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ zoomLevel5Person })
 *   )
 * })
 */
export const mockZoomLevel5PersonQuery = (resolver: ResponseResolver<GraphQLRequest<ZoomLevel5PersonQueryVariables>, GraphQLContext<ZoomLevel5PersonQuery>, any>) =>
  graphql.query<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>(
    'ZoomLevel5Person',
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

export type ArchivesOtherZoomLevel5DetailType = {
  __typename?: 'ArchivesOtherZoomLevel5DetailType';
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

export type HomepageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesCarousel | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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

export type LandingpageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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

export type MenupageComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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
  author: AuthorEntityResponse;
  authors: AuthorEntityResponseCollection;
  homepage: HomepageEntityResponse;
  landingpage: LandingpageEntityResponse;
  landingpages: LandingpageEntityResponseCollection;
  location: LocationEntityResponse;
  locations: LocationRelationResponseCollection;
  menupage: MenupageEntityResponse;
  menupages: MenupageEntityResponseCollection;
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

export type StoryComponentsDynamicZone = ComponentModulesButtonsModule | ComponentModulesCarousel | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSubtitle | ComponentModulesTableModule | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

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

export type CarouselModuleFragmentFragment = { __typename?: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, name?: string | null, description?: string | null, type?: EnumComponentcorecarouselitemType | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } };

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


export type HomepageQuery = { __typename?: 'Query', homepage: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Title?: string | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesCarousel', id: string, title?: string | null, type?: EnumComponentmodulescarouselType | null, buttonText?: string | null, buttonUrl?: string | null, description?: string | null, items?: Array<{ __typename?: 'ComponentCoreCarouselItem', id: string, name?: string | null, description?: string | null, type?: EnumComponentcorecarouselitemType | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null } | null } | null } | null }> | null, carouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null } | null } };

export type LandingpageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type LandingpageBySlugQuery = { __typename?: 'Query', landingpages: { __typename?: 'LandingpageEntityResponseCollection', data: Array<{ __typename?: 'LandingpageEntity', id?: string | null, attributes?: { __typename?: 'Landingpage', Title?: string | null, Description?: string | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type MenupageBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type MenupageBySlugQuery = { __typename?: 'Query', menupages: { __typename?: 'MenupageEntityResponseCollection', data: Array<{ __typename?: 'MenupageEntity', id?: string | null, attributes?: { __typename?: 'Menupage', components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null } | null }> } };

export type StoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type StoriesQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, slug?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type StoryBySlugQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
}>;


export type StoryBySlugQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id?: string | null, attributes?: { __typename?: 'Story', title: string, description?: string | null, shortDescription?: string | null, publishedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, insertion?: string | null, lastName: string } | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', city?: string | null } | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, components?: Array<{ __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesCarousel' } | { __typename?: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, imageModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesImageCarousel', id: string, description?: string | null, images?: { __typename?: 'UploadFileRelationResponseCollection', data?: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null }> | null } | null, imageCarouselModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesPullquote', id: string, text?: string | null, pullquoteModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesSubtitle', id: string, text?: string | null, subtitleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTableModule', id: string, table?: { __typename?: 'TableEntityResponse', data?: { __typename?: 'TableEntity', id?: string | null, attributes?: { __typename?: 'Table', name?: string | null, description?: string | null, Tablehead?: { __typename?: 'ComponentCoreTableHead', id: string, TableHeadItem?: Array<{ __typename?: 'ComponentCoreTableHeadItem', id?: string | null, label?: string | null }> | null } | null, TableBody?: Array<{ __typename?: 'ComponentCoreTableBody', id: string, TableBodyItem?: Array<{ __typename?: 'ComponentCoreTableBodyItem', id: string, value?: string | null }> | null }> | null } | null } | null } | null, tableModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTextModule', id: string, Richtext?: string | null, textModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'ComponentModulesTitleModule', id: string, Title?: string | null, titleModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | { __typename?: 'Error' }> | null, storyLinks?: { __typename?: 'ComponentModulesButtonsModule', id: string, buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle | null, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null, hasAttachment?: boolean | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null }> | null, buttonsModuleLayout: { __typename?: 'ComponentCoreModuleLayouts', id: string, spacingTop?: EnumComponentcoremodulelayoutsSpacingtop | null, spacingBottom?: EnumComponentcoremodulelayoutsSpacingbottom | null } } | null } | null }> | null } };

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

export type ZoomLevel5ArchivesFondsQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5ArchivesFondsQuery = { __typename?: 'Query', zoomLevel5ArchivesFonds?: { __typename?: 'ArchivesFondsZoomLevel5DetailType', objectNumber?: string | null, title?: string | null, startDate?: string | null, endDate?: string | null, dateLabel?: string | null, dimensionFree?: string | null, mediaReference?: string | null, mediaReferenceLabel?: string | null, existenceOfOriginals?: string | null, scopeContent?: string | null, relatedMaterial?: string | null, rights?: string | null, rightsLabel?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5ArchivesOtherQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5ArchivesOtherQuery = { __typename?: 'Query', zoomLevel5ArchivesOther?: { __typename?: 'ArchivesOtherZoomLevel5DetailType', descriptionLevel?: string | null, objectNumber?: string | null, recordTitle?: string | null, startDate?: string | null, endDate?: string | null, productionDate?: string | null, extent?: string | null, repository?: string | null, repositoryLabel?: string | null, creator?: string | null, creatorLabel?: string | null, creatorHistory?: string | null, custodialHistory?: string | null, systemOfArrangement?: string | null, contentScope?: string | null, conditionsGoverningAccess?: string | null, relatedMaterial?: string | null, appendices?: string | null, source?: string | null, partReference?: string | null, partTitle?: string | null, right?: string | null, rightLabel?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5ObjectQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5ObjectQuery = { __typename?: 'Query', zoomLevel5Object?: { __typename?: 'ObjectsZoomLevel5DetailType', image?: string | null, imageLabel?: string | null, title?: string | null, titleType?: string | null, objectNumber?: string | null, objectName?: string | null, objectNameLabel?: string | null, archiveCollectionCode?: string | null, maker?: string | null, makerLabel?: string | null, makerRole?: string | null, makerRoleLabel?: string | null, startDate?: string | null, endDate?: string | null, numberOfParts?: string | null, scale?: string | null, technique?: string | null, techniqueLabel?: string | null, material?: string | null, materialLabel?: string | null, dimensionPart?: string | null, dimensionType?: string | null, dimensionValue?: string | null, dimensionUnit?: string | null, description?: string | null, associationPerson?: string | null, associationPersonLabel?: string | null, associationPersonType?: string | null, relatedObjectTitle?: string | null, creditLine?: string | null, rights?: string | null, rightsLabel?: string | null, creationPlace?: string | null, creationPlaceLabel?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PublicationsArticleQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5PublicationsArticleQuery = { __typename?: 'Query', zoomLevel5PublicationsArticle?: { __typename?: 'PublicationsArticleZoomLevel5DetailType', typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, author?: string | null, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null, sourceTitle?: string | null, sourceTitleLabel?: string | null, volume?: string | null, issue?: string | null, yearOfPublication?: string | null, page?: string | null, publisher?: string | null, publisherLabel?: string | null, abstract?: string | null, language?: string | null, languageLabel?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PublicationsAudiovisualQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5PublicationsAudiovisualQuery = { __typename?: 'Query', zoomLevel5PublicationsAudiovisual?: { __typename?: 'PublicationsAudioVisualZoomLevel5DetailType', typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, author?: string | null, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, abstract?: string | null, annotation?: string | null, scope?: string | null, language?: string | null, languageLabel?: string | null, medium?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, permanentLink?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null } | null };

export type ZoomLevel5PublicationsBookQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5PublicationsBookQuery = { __typename?: 'Query', zoomLevel5PublicationsBook?: { __typename?: 'PublicationsBookZoomLevel5DetailType', typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, author?: string | null, authorLabel?: string | null, authorRole?: string | null, authorRoleLabel?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, isbn?: string | null, description?: string | null, annotation?: string | null, codeOfArchive?: string | null, codeOfArchiveLabel?: string | null, edition?: string | null, illustration?: string | null, numberOfPages?: string | null, language?: string | null, languageLabel?: string | null, seriesLabel?: string | null, number?: string | null, geographicalKeyword?: string | null, geographicalKeywordLabel?: string | null, subject?: string | null, subjectLabel?: string | null, relatedPerInst?: string | null, relatedPerInstLabel?: string | null, objectNumber?: string | null, availability?: string | null, shelfmark?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PublicationsSerialQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5PublicationsSerialQuery = { __typename?: 'Query', zoomLevel5PublicationsSerial?: { __typename?: 'PublicationsSerialZoomLevel5DetailType', typeOfPublication?: string | null, typeOfPublicationLabel?: string | null, title?: string | null, publisher?: string | null, publisherLabel?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, placeOfPublicationLabel?: string | null, subject?: string | null, subjectLabel?: string | null, language?: string | null, languageLabel?: string | null, continuedFrom?: string | null, continuedAs?: string | null, remarks?: string | null, availability?: string | null, shelfmark?: string | null, holding?: string | null, permanentLink?: string | null } | null };

export type ZoomLevel5PersonQueryVariables = Exact<{ [key: string]: never; }>;


export type ZoomLevel5PersonQuery = { __typename?: 'Query', zoomLevel5Person?: { __typename?: 'PoepleZoomLevel5DetailType', name?: string | null, nameType?: string | null, nameVariation?: string | null, birthDate?: string | null, birthPlace?: string | null, birthPlaceLabel?: string | null, deathDate?: string | null, deathPlace?: string | null, deathPlaceLabel?: string | null, place?: string | null, placeLabel?: string | null, startDate?: string | null, endDate?: string | null, nationality?: string | null, nationalityLabel?: string | null, institution?: string | null, institutionLabel?: string | null, profession?: string | null, professionLabel?: string | null, gender?: string | null, association?: string | null, associationLabel?: string | null, relatedItem?: string | null, relatedItemLabel?: string | null, description?: string | null, permanentLink?: string | null } | null };

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
    name
    description
    picture {
      data {
        attributes {
          url
          caption
        }
      }
    }
    type
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
${SubtitleModuleFragmentFragmentDoc}`;

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
${SubtitleModuleFragmentFragmentDoc}`;

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
${SubtitleModuleFragmentFragmentDoc}`;

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
${SubtitleModuleFragmentFragmentDoc}`;

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
export const ZoomLevel5ArchivesFondsDocument = gql`
    query ZoomLevel5ArchivesFonds {
  zoomLevel5ArchivesFonds(id: "110000212") {
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
}
    `;

/**
 * __useZoomLevel5ArchivesFondsQuery__
 *
 * To run a query within a React component, call `useZoomLevel5ArchivesFondsQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5ArchivesFondsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5ArchivesFondsQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5ArchivesFondsQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>(ZoomLevel5ArchivesFondsDocument, options);
      }
export function useZoomLevel5ArchivesFondsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>(ZoomLevel5ArchivesFondsDocument, options);
        }
export type ZoomLevel5ArchivesFondsQueryHookResult = ReturnType<typeof useZoomLevel5ArchivesFondsQuery>;
export type ZoomLevel5ArchivesFondsLazyQueryHookResult = ReturnType<typeof useZoomLevel5ArchivesFondsLazyQuery>;
export type ZoomLevel5ArchivesFondsQueryResult = Apollo.QueryResult<ZoomLevel5ArchivesFondsQuery, ZoomLevel5ArchivesFondsQueryVariables>;
export const ZoomLevel5ArchivesOtherDocument = gql`
    query ZoomLevel5ArchivesOther {
  zoomLevel5ArchivesOther(id: "110746983") {
    descriptionLevel
    objectNumber
    recordTitle
    startDate
    endDate
    productionDate
    extent
    repository
    repositoryLabel
    creator
    creatorLabel
    creatorHistory
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
    rightLabel
    permanentLink
  }
}
    `;

/**
 * __useZoomLevel5ArchivesOtherQuery__
 *
 * To run a query within a React component, call `useZoomLevel5ArchivesOtherQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5ArchivesOtherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5ArchivesOtherQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5ArchivesOtherQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>(ZoomLevel5ArchivesOtherDocument, options);
      }
export function useZoomLevel5ArchivesOtherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>(ZoomLevel5ArchivesOtherDocument, options);
        }
export type ZoomLevel5ArchivesOtherQueryHookResult = ReturnType<typeof useZoomLevel5ArchivesOtherQuery>;
export type ZoomLevel5ArchivesOtherLazyQueryHookResult = ReturnType<typeof useZoomLevel5ArchivesOtherLazyQuery>;
export type ZoomLevel5ArchivesOtherQueryResult = Apollo.QueryResult<ZoomLevel5ArchivesOtherQuery, ZoomLevel5ArchivesOtherQueryVariables>;
export const ZoomLevel5ObjectDocument = gql`
    query ZoomLevel5Object {
  zoomLevel5Object(id: "9220") {
    image
    imageLabel
    title
    titleType
    objectNumber
    objectName
    objectNameLabel
    archiveCollectionCode
    maker
    makerLabel
    makerRole
    makerRoleLabel
    startDate
    endDate
    numberOfParts
    scale
    technique
    techniqueLabel
    material
    materialLabel
    dimensionPart
    dimensionType
    dimensionValue
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

/**
 * __useZoomLevel5ObjectQuery__
 *
 * To run a query within a React component, call `useZoomLevel5ObjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5ObjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5ObjectQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5ObjectQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>(ZoomLevel5ObjectDocument, options);
      }
export function useZoomLevel5ObjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>(ZoomLevel5ObjectDocument, options);
        }
export type ZoomLevel5ObjectQueryHookResult = ReturnType<typeof useZoomLevel5ObjectQuery>;
export type ZoomLevel5ObjectLazyQueryHookResult = ReturnType<typeof useZoomLevel5ObjectLazyQuery>;
export type ZoomLevel5ObjectQueryResult = Apollo.QueryResult<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>;
export const ZoomLevel5PublicationsArticleDocument = gql`
    query ZoomLevel5PublicationsArticle {
  zoomLevel5PublicationsArticle(id: "300171648") {
    typeOfPublication
    typeOfPublicationLabel
    title
    author
    authorLabel
    authorRole
    authorRoleLabel
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

/**
 * __useZoomLevel5PublicationsArticleQuery__
 *
 * To run a query within a React component, call `useZoomLevel5PublicationsArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5PublicationsArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5PublicationsArticleQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5PublicationsArticleQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>(ZoomLevel5PublicationsArticleDocument, options);
      }
export function useZoomLevel5PublicationsArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>(ZoomLevel5PublicationsArticleDocument, options);
        }
export type ZoomLevel5PublicationsArticleQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsArticleQuery>;
export type ZoomLevel5PublicationsArticleLazyQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsArticleLazyQuery>;
export type ZoomLevel5PublicationsArticleQueryResult = Apollo.QueryResult<ZoomLevel5PublicationsArticleQuery, ZoomLevel5PublicationsArticleQueryVariables>;
export const ZoomLevel5PublicationsAudiovisualDocument = gql`
    query ZoomLevel5PublicationsAudiovisual {
  zoomLevel5PublicationsAudiovisual(id: "300197096") {
    typeOfPublication
    typeOfPublicationLabel
    title
    author
    authorLabel
    authorRole
    authorRoleLabel
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

/**
 * __useZoomLevel5PublicationsAudiovisualQuery__
 *
 * To run a query within a React component, call `useZoomLevel5PublicationsAudiovisualQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5PublicationsAudiovisualQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5PublicationsAudiovisualQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5PublicationsAudiovisualQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>(ZoomLevel5PublicationsAudiovisualDocument, options);
      }
export function useZoomLevel5PublicationsAudiovisualLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>(ZoomLevel5PublicationsAudiovisualDocument, options);
        }
export type ZoomLevel5PublicationsAudiovisualQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsAudiovisualQuery>;
export type ZoomLevel5PublicationsAudiovisualLazyQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsAudiovisualLazyQuery>;
export type ZoomLevel5PublicationsAudiovisualQueryResult = Apollo.QueryResult<ZoomLevel5PublicationsAudiovisualQuery, ZoomLevel5PublicationsAudiovisualQueryVariables>;
export const ZoomLevel5PublicationsBookDocument = gql`
    query ZoomLevel5PublicationsBook {
  zoomLevel5PublicationsBook(id: "300165680") {
    typeOfPublication
    typeOfPublicationLabel
    title
    author
    authorLabel
    authorRole
    authorRoleLabel
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

/**
 * __useZoomLevel5PublicationsBookQuery__
 *
 * To run a query within a React component, call `useZoomLevel5PublicationsBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5PublicationsBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5PublicationsBookQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5PublicationsBookQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>(ZoomLevel5PublicationsBookDocument, options);
      }
export function useZoomLevel5PublicationsBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>(ZoomLevel5PublicationsBookDocument, options);
        }
export type ZoomLevel5PublicationsBookQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsBookQuery>;
export type ZoomLevel5PublicationsBookLazyQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsBookLazyQuery>;
export type ZoomLevel5PublicationsBookQueryResult = Apollo.QueryResult<ZoomLevel5PublicationsBookQuery, ZoomLevel5PublicationsBookQueryVariables>;
export const ZoomLevel5PublicationsSerialDocument = gql`
    query ZoomLevel5PublicationsSerial {
  zoomLevel5PublicationsSerial(id: "300319131") {
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

/**
 * __useZoomLevel5PublicationsSerialQuery__
 *
 * To run a query within a React component, call `useZoomLevel5PublicationsSerialQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5PublicationsSerialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5PublicationsSerialQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5PublicationsSerialQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>(ZoomLevel5PublicationsSerialDocument, options);
      }
export function useZoomLevel5PublicationsSerialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>(ZoomLevel5PublicationsSerialDocument, options);
        }
export type ZoomLevel5PublicationsSerialQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsSerialQuery>;
export type ZoomLevel5PublicationsSerialLazyQueryHookResult = ReturnType<typeof useZoomLevel5PublicationsSerialLazyQuery>;
export type ZoomLevel5PublicationsSerialQueryResult = Apollo.QueryResult<ZoomLevel5PublicationsSerialQuery, ZoomLevel5PublicationsSerialQueryVariables>;
export const ZoomLevel5PersonDocument = gql`
    query ZoomLevel5Person {
  zoomLevel5Person(id: "10991") {
    name
    nameType
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
    association
    associationLabel
    relatedItem
    relatedItemLabel
    description
    permanentLink
  }
}
    `;

/**
 * __useZoomLevel5PersonQuery__
 *
 * To run a query within a React component, call `useZoomLevel5PersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useZoomLevel5PersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useZoomLevel5PersonQuery({
 *   variables: {
 *   },
 * });
 */
export function useZoomLevel5PersonQuery(baseOptions?: Apollo.QueryHookOptions<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>(ZoomLevel5PersonDocument, options);
      }
export function useZoomLevel5PersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>(ZoomLevel5PersonDocument, options);
        }
export type ZoomLevel5PersonQueryHookResult = ReturnType<typeof useZoomLevel5PersonQuery>;
export type ZoomLevel5PersonLazyQueryHookResult = ReturnType<typeof useZoomLevel5PersonLazyQuery>;
export type ZoomLevel5PersonQueryResult = Apollo.QueryResult<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>;
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