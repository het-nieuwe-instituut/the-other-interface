/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type ArchiveRelationsType = {
  __typename?: 'ArchiveRelationsType';
  /** the date the asterisk value was added to the person field */
  asterisk_date_person?: Maybe<Scalars['String']['output']>;
  /** the person that added the asterisk value for the person field */
  asterisk_name_person?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the person field */
  asterisk_subject_person?: Maybe<Scalars['String']['output']>;
  idRelation?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  titleR?: Maybe<Scalars['String']['output']>;
};

export type ArchiveZoomLevel3DetailType = {
  __typename?: 'ArchiveZoomLevel3DetailType';
  asteriskSuggestions?: Maybe<Array<EnrichedBaseOArchiveZoomLevel3AsteriskDetailType>>;
  description?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBaseArchiveZoomLevel3DetailType>>;
  id: Scalars['String']['output'];
  objectNumber?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};


export type ArchiveZoomLevel3DetailTypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type ArchivesRecordZoomLevel3Type = {
  __typename?: 'ArchivesRecordZoomLevel3Type';
  access?: Maybe<Scalars['String']['output']>;
  asteriskSuggestions?: Maybe<Array<BaseArchiveRecordZoomLevel3AsteriskType>>;
  custodialHistory?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionLevel?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBaseArchivesRecordZoomLevel3Type>>;
  existence?: Maybe<Scalars['String']['output']>;
  existenceLocation?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  period?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  photographCreator?: Maybe<Scalars['String']['output']>;
  referenceCode?: Maybe<Scalars['String']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Scalars['String']['output']>;
  systemOfArrangement?: Maybe<Scalars['String']['output']>;
  titleType?: Maybe<Scalars['String']['output']>;
};


export type ArchivesRecordZoomLevel3TypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type ArchivesRelationsCountType = {
  __typename?: 'ArchivesRelationsCountType';
  total?: Maybe<Scalars['String']['output']>;
};

export type ArchivesZoomLevelHoverType = {
  __typename?: 'ArchivesZoomLevelHoverType';
  creators?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Author = {
  __typename?: 'Author';
  createdAt?: Maybe<Scalars['Date']['output']>;
  firstName: Scalars['String']['output'];
  insertion?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']['output']>;
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

export type BaseArchiveRecordZoomLevel3AsteriskType = {
  __typename?: 'BaseArchiveRecordZoomLevel3AsteriskType';
  /** asterisk value for the content field */
  asterisk_date_content?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the location field */
  asterisk_date_location?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the subject field */
  asterisk_date_subject?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the content field */
  asterisk_name_content?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the location field */
  asterisk_name_location?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the subject field */
  asterisk_name_subject?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the content field */
  asterisk_subject_content?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the location field */
  asterisk_subject_location?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the subject field */
  asterisk_subject_subject?: Maybe<Scalars['String']['output']>;
};

export type BaseObjectRecordZoomLevel3AsteriskType = {
  __typename?: 'BaseObjectRecordZoomLevel3AsteriskType';
  /** asterisk value for the geoKeywords field */
  asterisk_date_geoKeywords?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the relatedKeyword field */
  asterisk_date_relatedKeyword?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the geoKeywords field */
  asterisk_name_geoKeywords?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the relatedKeyword field */
  asterisk_name_relatedKeyword?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the geoKeywords field */
  asterisk_subject_geoKeywords?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the relatedKeyword field */
  asterisk_subject_relatedKeyword?: Maybe<Scalars['String']['output']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  between?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCoreButton = {
  __typename?: 'ComponentCoreButton';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentCoreButtonFiltersInput = {
  and?: InputMaybe<Array<ComponentCoreButtonFiltersInput>>;
  not?: InputMaybe<ComponentCoreButtonFiltersInput>;
  or?: InputMaybe<Array<ComponentCoreButtonFiltersInput>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreCarouselImage = {
  __typename?: 'ComponentCoreCarouselImage';
  alt_text?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  story?: Maybe<StoryEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  triply_record?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentCoreGridFeaturedFields = {
  __typename?: 'ComponentCoreGridFeaturedFields';
  id: Scalars['ID']['output'];
  story?: Maybe<StoryEntityResponse>;
  subtitle: Scalars['String']['output'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String']['output'];
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentCoreImageCarouselItem = {
  __typename?: 'ComponentCoreImageCarouselItem';
  alt_text: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  story?: Maybe<StoryEntityResponse>;
  triply_record?: Maybe<TriplyRecordEntityResponse>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentCoreMuxAudio = {
  __typename?: 'ComponentCoreMuxAudio';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  muxAudioRelation?: Maybe<MuxAudioResponse>;
};

export type ComponentCoreMuxVideo = {
  __typename?: 'ComponentCoreMuxVideo';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  muxVideoRelation?: Maybe<MuxVideoResponse>;
};

export type ComponentCorePublicationDate = {
  __typename?: 'ComponentCorePublicationDate';
  date?: Maybe<Scalars['Date']['output']>;
  displayType?: Maybe<EnumComponentcorepublicationdateDisplaytype>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ComponentCorePublicationDateFiltersInput = {
  and?: InputMaybe<Array<ComponentCorePublicationDateFiltersInput>>;
  date?: InputMaybe<DateFilterInput>;
  displayType?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCorePublicationDateFiltersInput>;
  or?: InputMaybe<Array<ComponentCorePublicationDateFiltersInput>>;
};

export type ComponentCoreStandAloneLink = {
  __typename?: 'ComponentCoreStandAloneLink';
  attachment?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentCoreTimeframe = {
  __typename?: 'ComponentCoreTimeframe';
  id: Scalars['ID']['output'];
  yearEnd?: Maybe<Scalars['Float']['output']>;
  yearStart?: Maybe<Scalars['Float']['output']>;
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
  buttons?: Maybe<Array<ComponentCoreButton>>;
  id: Scalars['ID']['output'];
};

export type ComponentModulesButtonsModuleFiltersInput = {
  and?: InputMaybe<Array<ComponentModulesButtonsModuleFiltersInput>>;
  buttons?: InputMaybe<ComponentCoreButtonFiltersInput>;
  not?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>;
  or?: InputMaybe<Array<ComponentModulesButtonsModuleFiltersInput>>;
};

export type ComponentModulesCarousel = {
  __typename?: 'ComponentModulesCarousel';
  description?: Maybe<Scalars['String']['output']>;
  explore_collection_button?: Maybe<ComponentCoreButton>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<ComponentCoreCarouselImage>>;
  title: Scalars['String']['output'];
  variant?: Maybe<EnumComponentmodulescarouselVariant>;
};

export type ComponentModulesGridModule = {
  __typename?: 'ComponentModulesGridModule';
  cards?: Maybe<Array<ComponentCoreGridFeaturedFields>>;
  exploreCollectionButton?: Maybe<ComponentCoreButton>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentModulesHighlight = {
  __typename?: 'ComponentModulesHighlight';
  buttons?: Maybe<Array<ComponentCoreButton>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  image_alt_text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ComponentModulesImage = {
  __typename?: 'ComponentModulesImage';
  alt_text?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  story?: Maybe<StoryEntityResponse>;
  triplyRecord?: Maybe<TriplyRecordEntityResponse>;
};

export type ComponentModulesImageCarousel = {
  __typename?: 'ComponentModulesImageCarousel';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items: Array<ComponentCoreImageCarouselItem>;
};

export type ComponentModulesPullquote = {
  __typename?: 'ComponentModulesPullquote';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentModulesSideImageWithText = {
  __typename?: 'ComponentModulesSideImageWithText';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  image_alt_text: Scalars['String']['output'];
  sideText: Scalars['String']['output'];
};

export type ComponentModulesStandaloneLinks = {
  __typename?: 'ComponentModulesStandaloneLinks';
  id: Scalars['ID']['output'];
  standaloneLinks?: Maybe<Array<ComponentCoreStandAloneLink>>;
};

export type ComponentModulesSubtitle = {
  __typename?: 'ComponentModulesSubtitle';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentModulesTextModule = {
  __typename?: 'ComponentModulesTextModule';
  Richtext?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentModulesTitleModule = {
  __typename?: 'ComponentModulesTitleModule';
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type DateFilterInput = {
  and?: InputMaybe<Array<Scalars['Date']['input']>>;
  between?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<Scalars['Date']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['Date']['input']>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<Scalars['Date']['input']>>;
  between?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<Scalars['Date']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['Date']['input']>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type EnrichedBaseArchiveZoomLevel3DetailType = {
  __typename?: 'EnrichedBaseArchiveZoomLevel3DetailType';
  description?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  objectNumber?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};

export type EnrichedBaseArchivesRecordZoomLevel3Type = {
  __typename?: 'EnrichedBaseArchivesRecordZoomLevel3Type';
  access?: Maybe<Scalars['String']['output']>;
  custodialHistory?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionLevel?: Maybe<Scalars['String']['output']>;
  existence?: Maybe<Scalars['String']['output']>;
  existenceLocation?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  period?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  photographCreator?: Maybe<Scalars['String']['output']>;
  referenceCode?: Maybe<Scalars['String']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Scalars['String']['output']>;
  systemOfArrangement?: Maybe<Scalars['String']['output']>;
  titleType?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBaseOArchiveZoomLevel3AsteriskDetailType = {
  __typename?: 'EnrichedBaseOArchiveZoomLevel3AsteriskDetailType';
  /** asterisk value for the description field */
  asterisk_date_description?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the title field */
  asterisk_date_title?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the description field */
  asterisk_name_description?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the title field */
  asterisk_name_title?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the description field */
  asterisk_subject_description?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the title field */
  asterisk_subject_title?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBaseObjectRecordZoomLevel3Type = {
  __typename?: 'EnrichedBaseObjectRecordZoomLevel3Type';
  archiveCode?: Maybe<Scalars['String']['output']>;
  creditLine?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  dimension?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  geoKeywords?: Maybe<Scalars['String']['output']>;
  hasParts?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  maker?: Maybe<Scalars['String']['output']>;
  materials?: Maybe<Scalars['String']['output']>;
  objectName?: Maybe<Scalars['String']['output']>;
  objectNumber?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  relatedKeywords?: Maybe<Scalars['String']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  scale?: Maybe<Scalars['String']['output']>;
  techniques?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBaseObjectsZoomLevel3AsteriskDetailType = {
  __typename?: 'EnrichedBaseObjectsZoomLevel3AsteriskDetailType';
  /** asterisk value for the title field */
  asterisk_date_title?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the title field */
  asterisk_name_title?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the title field */
  asterisk_subject_title?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBaseObjectsZoomLevel3DetailType = {
  __typename?: 'EnrichedBaseObjectsZoomLevel3DetailType';
  description?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mediaType?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};

export type EnrichedBasePeopleRecordZoomLevel3Type = {
  __typename?: 'EnrichedBasePeopleRecordZoomLevel3Type';
  association?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['String']['output']>;
  birthPlace?: Maybe<Scalars['String']['output']>;
  deathDate?: Maybe<Scalars['String']['output']>;
  deathPlace?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  nameVariation?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBasePeopleZoomLevel3DetailType = {
  __typename?: 'EnrichedBasePeopleZoomLevel3DetailType';
  description?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};

export type EnrichedBasePublicationRecordZoomLevel3Type = {
  __typename?: 'EnrichedBasePublicationRecordZoomLevel3Type';
  annotation?: Maybe<Scalars['String']['output']>;
  authorRole?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  codeOfArchive?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  geoKeyword?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  illustration?: Maybe<Scalars['String']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  objectNumber?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  placeOfPublication?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  relatedKeyword?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  yearOfPublication?: Maybe<Scalars['String']['output']>;
};

export type EnrichedBasePublicationZoomLevel3DetailType = {
  __typename?: 'EnrichedBasePublicationZoomLevel3DetailType';
  description?: Maybe<Scalars['String']['output']>;
  externalSourceType: ExternalSource;
  externalSourceUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  objectNumber?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
  yearOfPublication?: Maybe<Scalars['String']['output']>;
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

export enum EnumComponentcorepublicationdateDisplaytype {
  Date = 'Date',
  Year = 'Year'
}

export enum EnumComponentmodulescarouselVariant {
  FourUp = 'FourUp',
  ThreeUp = 'ThreeUp',
  TwoUp = 'TwoUp'
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
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export enum ExternalSource {
  Getty = 'getty',
  Rkd = 'rkd',
  Wikidata = 'wikidata'
}

export type FilterSuggestionType = {
  __typename?: 'FilterSuggestionType';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type HighlightedHomepageThemeEntity = {
  __typename?: 'HighlightedHomepageThemeEntity';
  attributes?: Maybe<HighlightedHomepageThemes>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HighlightedHomepageThemeEntityResponse = {
  __typename?: 'HighlightedHomepageThemeEntityResponse';
  data: HighlightedHomepageThemeEntity;
  meta?: Maybe<ResponseCollectionMeta>;
};


export type HighlightedHomepageThemeEntityResponseMetaArgs = {
  locale: Scalars['String']['input'];
  paginationArgs?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
};

export type HighlightedHomepageThemes = {
  __typename?: 'HighlightedHomepageThemes';
  highlightedThemes?: Maybe<ThemeRelationResponseCollection>;
};

export type Homepage = {
  __typename?: 'Homepage';
  Title: Scalars['String']['output'];
  carousel?: Maybe<ComponentModulesCarousel>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  grid?: Maybe<ComponentModulesGridModule>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data: HomepageEntity;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<Scalars['ID']['input']>>;
  between?: InputMaybe<Array<Scalars['ID']['input']>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type LandingPageArchive = {
  __typename?: 'LandingPageArchive';
  carousel?: Maybe<ComponentModulesCarousel>;
  grid?: Maybe<ComponentModulesGridModule>;
  highlight?: Maybe<ComponentModulesHighlight>;
  imageCarousel?: Maybe<ComponentModulesImageCarousel>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPageArchiveEntity = {
  __typename?: 'LandingPageArchiveEntity';
  attributes?: Maybe<LandingPageArchive>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPageArchiveEntityResponse = {
  __typename?: 'LandingPageArchiveEntityResponse';
  data?: Maybe<LandingPageArchiveEntity>;
};

export type LandingPageObject = {
  __typename?: 'LandingPageObject';
  carousel?: Maybe<ComponentModulesCarousel>;
  grid?: Maybe<ComponentModulesGridModule>;
  highlight?: Maybe<ComponentModulesHighlight>;
  imageCarousel?: Maybe<ComponentModulesImageCarousel>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPageObjectEntity = {
  __typename?: 'LandingPageObjectEntity';
  attributes?: Maybe<LandingPageObject>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPageObjectEntityResponse = {
  __typename?: 'LandingPageObjectEntityResponse';
  data?: Maybe<LandingPageObjectEntity>;
};

export type LandingPagePeople = {
  __typename?: 'LandingPagePeople';
  carousel?: Maybe<ComponentModulesCarousel>;
  grid?: Maybe<ComponentModulesGridModule>;
  highlight?: Maybe<ComponentModulesHighlight>;
  imageCarousel?: Maybe<ComponentModulesImageCarousel>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPagePeopleEntity = {
  __typename?: 'LandingPagePeopleEntity';
  attributes?: Maybe<LandingPagePeople>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPagePeopleEntityResponse = {
  __typename?: 'LandingPagePeopleEntityResponse';
  data?: Maybe<LandingPagePeopleEntity>;
};

export type LandingPagePublication = {
  __typename?: 'LandingPagePublication';
  carousel?: Maybe<ComponentModulesCarousel>;
  grid?: Maybe<ComponentModulesGridModule>;
  highlight?: Maybe<ComponentModulesHighlight>;
  imageCarousel?: Maybe<ComponentModulesImageCarousel>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type LandingPagePublicationEntity = {
  __typename?: 'LandingPagePublicationEntity';
  attributes?: Maybe<LandingPagePublication>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPagePublicationEntityResponse = {
  __typename?: 'LandingPagePublicationEntityResponse';
  data?: Maybe<LandingPagePublicationEntity>;
};

export enum Locale {
  En = 'en',
  Nl = 'nl'
}

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LocationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  stories?: Maybe<StoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']['output']>;
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
  and?: InputMaybe<Array<Scalars['Int']['input']>>;
  between?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['Int']['input']>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type MuxAudio = {
  __typename?: 'MuxAudio';
  aspect_ratio?: Maybe<Scalars['String']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  isReady?: Maybe<Scalars['Boolean']['output']>;
  playback_id?: Maybe<Scalars['String']['output']>;
  signed: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  upload_id?: Maybe<Scalars['String']['output']>;
};

export type MuxAudioEntity = {
  __typename?: 'MuxAudioEntity';
  attributes?: Maybe<MuxAudio>;
  id?: Maybe<Scalars['String']['output']>;
};

export type MuxAudioResponse = {
  __typename?: 'MuxAudioResponse';
  data?: Maybe<MuxAudioEntity>;
};

export type MuxVideo = {
  __typename?: 'MuxVideo';
  aspect_ratio?: Maybe<Scalars['String']['output']>;
  asset_id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  isReady?: Maybe<Scalars['Boolean']['output']>;
  playback_id?: Maybe<Scalars['String']['output']>;
  signed: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  upload_id?: Maybe<Scalars['String']['output']>;
};

export type MuxVideoEntity = {
  __typename?: 'MuxVideoEntity';
  attributes?: Maybe<MuxVideo>;
  id?: Maybe<Scalars['String']['output']>;
};

export type MuxVideoResponse = {
  __typename?: 'MuxVideoResponse';
  data?: Maybe<MuxVideoEntity>;
};

export type ObjectRecordZoomLevel3Type = {
  __typename?: 'ObjectRecordZoomLevel3Type';
  archiveCode?: Maybe<Scalars['String']['output']>;
  asteriskSuggestions?: Maybe<Array<BaseObjectRecordZoomLevel3AsteriskType>>;
  creditLine?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  dimension?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBaseObjectRecordZoomLevel3Type>>;
  externalSource?: Maybe<Scalars['String']['output']>;
  geoKeywords?: Maybe<Scalars['String']['output']>;
  hasParts?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  maker?: Maybe<Scalars['String']['output']>;
  materials?: Maybe<Scalars['String']['output']>;
  objectName?: Maybe<Scalars['String']['output']>;
  objectNumber?: Maybe<Scalars['String']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  relatedKeywords?: Maybe<Scalars['String']['output']>;
  rights?: Maybe<Scalars['String']['output']>;
  scale?: Maybe<Scalars['String']['output']>;
  techniques?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ObjectRecordZoomLevel3TypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type ObjectRelationsCountType = {
  __typename?: 'ObjectRelationsCountType';
  total?: Maybe<Scalars['String']['output']>;
};

export type ObjectRelationsType = {
  __typename?: 'ObjectRelationsType';
  /** the date the asterisk value was added to the person field */
  asterisk_date_person?: Maybe<Scalars['String']['output']>;
  /** the person that added the asterisk value for the person field */
  asterisk_name_person?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the person field */
  asterisk_subject_person?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  idRelation?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  titleR?: Maybe<Scalars['String']['output']>;
};

export type ObjectsZoomLevel3DetailType = {
  __typename?: 'ObjectsZoomLevel3DetailType';
  asteriskSuggestions?: Maybe<Array<EnrichedBaseObjectsZoomLevel3AsteriskDetailType>>;
  description?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBaseObjectsZoomLevel3DetailType>>;
  id: Scalars['String']['output'];
  mediaType?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};


export type ObjectsZoomLevel3DetailTypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type ObjectsZoomLevelHoverType = {
  __typename?: 'ObjectsZoomLevelHoverType';
  description?: Maybe<Scalars['String']['output']>;
  maker?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PeopleRecordZoomLevel3Type = {
  __typename?: 'PeopleRecordZoomLevel3Type';
  association?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['String']['output']>;
  birthPlace?: Maybe<Scalars['String']['output']>;
  deathDate?: Maybe<Scalars['String']['output']>;
  deathPlace?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBasePeopleRecordZoomLevel3Type>>;
  externalSource?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  nameVariation?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type PeopleRecordZoomLevel3TypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type PeopleRelationsCountType = {
  __typename?: 'PeopleRelationsCountType';
  total?: Maybe<Scalars['String']['output']>;
};

export type PeopleRelationsType = {
  __typename?: 'PeopleRelationsType';
  externalSource?: Maybe<Scalars['String']['output']>;
  idRelation?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  relationName?: Maybe<Scalars['String']['output']>;
  titleR?: Maybe<Scalars['String']['output']>;
};

export type PeopleZoomLevel3DetailAsteriskType = {
  __typename?: 'PeopleZoomLevel3DetailAsteriskType';
  /** the date the asterisk value was added to the description field */
  asterisk_date_description?: Maybe<Scalars['String']['output']>;
  /** the person that added the asterisk value for the description field */
  asterisk_name_description?: Maybe<Scalars['String']['output']>;
  /** asterisk value for the description field */
  asterisk_subject_description?: Maybe<Scalars['String']['output']>;
};

export type PeopleZoomLevel3DetailType = {
  __typename?: 'PeopleZoomLevel3DetailType';
  asteriskSuggestions?: Maybe<Array<PeopleZoomLevel3DetailAsteriskType>>;
  description?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBasePeopleZoomLevel3DetailType>>;
  id: Scalars['String']['output'];
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
};


export type PeopleZoomLevel3DetailTypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type PeopleZoomLevelHoverType = {
  __typename?: 'PeopleZoomLevelHoverType';
  description?: Maybe<Scalars['String']['output']>;
  profession?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PublicationRecordZoomLevel3Type = {
  __typename?: 'PublicationRecordZoomLevel3Type';
  annotation?: Maybe<Scalars['String']['output']>;
  authorRole?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  codeOfArchive?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBasePublicationRecordZoomLevel3Type>>;
  externalSource?: Maybe<Scalars['String']['output']>;
  geoKeyword?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  illustration?: Maybe<Scalars['String']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  objectNumber?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['String']['output']>;
  permanentLink?: Maybe<Scalars['String']['output']>;
  placeOfPublication?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  relatedKeyword?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  yearOfPublication?: Maybe<Scalars['String']['output']>;
};


export type PublicationRecordZoomLevel3TypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type PublicationRelationsType = {
  __typename?: 'PublicationRelationsType';
  externalSource?: Maybe<Scalars['String']['output']>;
  idRelation?: Maybe<Scalars['String']['output']>;
  titleR?: Maybe<Scalars['String']['output']>;
  typePub?: Maybe<Scalars['String']['output']>;
  yearPub?: Maybe<Scalars['String']['output']>;
};

export type PublicationZoomLevel3DetailType = {
  __typename?: 'PublicationZoomLevel3DetailType';
  description?: Maybe<Scalars['String']['output']>;
  enrichedSources?: Maybe<Array<EnrichedBasePublicationZoomLevel3DetailType>>;
  id: Scalars['String']['output'];
  objectNumber?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntityNames>;
  yearOfPublication?: Maybe<Scalars['String']['output']>;
};


export type PublicationZoomLevel3DetailTypeEnrichedSourcesArgs = {
  locale: Locale;
};

export type PublicationsRelationsCountType = {
  __typename?: 'PublicationsRelationsCountType';
  total?: Maybe<Scalars['String']['output']>;
};

export type PublicationsZoomLevelHoverType = {
  __typename?: 'PublicationsZoomLevelHoverType';
  authors?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  archivesRecordRelations?: Maybe<Array<ArchiveRelationsType>>;
  archivesRecordRelationsCount?: Maybe<Array<ArchivesRelationsCountType>>;
  archivesRecordZoomLevel3?: Maybe<ArchivesRecordZoomLevel3Type>;
  archivesZoomRecordHover: ArchivesZoomLevelHoverType;
  author: AuthorEntityResponse;
  authors: AuthorEntityResponseCollection;
  filterSuggestions?: Maybe<Array<FilterSuggestionType>>;
  highlightedHomepageThemes: HighlightedHomepageThemeEntityResponse;
  homepage: HomepageEntityResponse;
  landingPageArchive: LandingPageArchiveEntityResponse;
  landingPageObject: LandingPageObjectEntityResponse;
  landingPagePeople: LandingPagePeopleEntityResponse;
  landingPagePublication: LandingPagePublicationEntityResponse;
  location: LocationEntityResponse;
  locations: LocationRelationResponseCollection;
  objectRecordRelations?: Maybe<Array<ObjectRelationsType>>;
  objectRecordRelationsCount?: Maybe<Array<ObjectRelationsCountType>>;
  objectsRecordZoomLevel3?: Maybe<ObjectRecordZoomLevel3Type>;
  objectsZoomRecordHover: ObjectsZoomLevelHoverType;
  peopleRecordRelations?: Maybe<Array<PeopleRelationsType>>;
  peopleRecordRelationsCount?: Maybe<Array<PeopleRelationsCountType>>;
  peopleRecordZoomLevel3?: Maybe<PeopleRecordZoomLevel3Type>;
  peopleZoomLevelHover: PeopleZoomLevelHoverType;
  publicationRecordRelations?: Maybe<Array<PublicationRelationsType>>;
  publicationsRecordRelationsCount?: Maybe<Array<PublicationsRelationsCountType>>;
  publicationsRecordZoomLevel3?: Maybe<PublicationRecordZoomLevel3Type>;
  publicationsZoomRecordHover: PublicationsZoomLevelHoverType;
  relations?: Maybe<Array<ZoomLevel3RelationsType>>;
  searchTriply: SearchResultType;
  stories: StoryEntityResponseCollection;
  storiesRealtedWithinTheme: StoriesRelatedToThemeResponse;
  storiesWithoutRelations: StoryWithoutRelationsEntityResponseCollection;
  story: StoryEntityResponse;
  storyByLocale: StoryEntityResponse;
  storyMetaByLocale: StoryMetaEntityResponseCollection;
  storyRelationsCount?: Maybe<ZoomLevel3StoryRelationsCountType>;
  storyWithoutRelations: StoryWithoutRelationsEntityResponse;
  theme: ThemeEntityResponse;
  themes: ThemeRelationResponseCollection;
  triplyRecord: TriplyRecordEntityResponse;
  triplyRecords: TriplyRecordRelationResponseCollection;
  usersPermissionsUser: UsersPermissionsUserEntityResponse;
  usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection;
  zoomLevel2: ZoomLevel2ParentType;
  zoomLevel2Amount: ZoomLevel2AmountParentType;
  zoomLevel3Archive?: Maybe<ArchiveZoomLevel3DetailType>;
  zoomLevel3Object?: Maybe<ObjectsZoomLevel3DetailType>;
  zoomLevel3People?: Maybe<PeopleZoomLevel3DetailType>;
  zoomLevel3Publication?: Maybe<PublicationZoomLevel3DetailType>;
  zoomLevel3StoriesRelationsForRecord?: Maybe<ZoomLevel3StoriesRelatedToRecordType>;
};


export type QueryArchivesRecordRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  type: EntityNames;
};


export type QueryArchivesRecordRelationsCountArgs = {
  id: Scalars['String']['input'];
  type: EntityNames;
};


export type QueryArchivesRecordZoomLevel3Args = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryArchivesZoomRecordHoverArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFilterSuggestionsArgs = {
  locale: Locale;
  search: Scalars['String']['input'];
  type: EnumTriplyrecordType;
};


export type QueryHighlightedHomepageThemesArgs = {
  locale: Scalars['String']['input'];
  paginationArgs?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomepageArgs = {
  locale: Locale;
  publicationState?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLandingPageArchiveArgs = {
  locale: Locale;
};


export type QueryLandingPageObjectArgs = {
  locale: Locale;
};


export type QueryLandingPagePeopleArgs = {
  locale: Locale;
};


export type QueryLandingPagePublicationArgs = {
  locale: Locale;
};


export type QueryLocationArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  locale: Locale;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryObjectRecordRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  type: EntityNames;
};


export type QueryObjectRecordRelationsCountArgs = {
  id: Scalars['String']['input'];
  type: EntityNames;
};


export type QueryObjectsRecordZoomLevel3Args = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryObjectsZoomRecordHoverArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryPeopleRecordRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  type: EntityNames;
};


export type QueryPeopleRecordRelationsCountArgs = {
  id: Scalars['String']['input'];
  type: EntityNames;
};


export type QueryPeopleRecordZoomLevel3Args = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryPeopleZoomLevelHoverArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryPublicationRecordRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  type: EntityNames;
};


export type QueryPublicationsRecordRelationsCountArgs = {
  id: Scalars['String']['input'];
  type: EntityNames;
};


export type QueryPublicationsRecordZoomLevel3Args = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryPublicationsZoomRecordHoverArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  type: EntityNames;
};


export type QuerySearchTriplyArgs = {
  lang: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};


export type QueryStoriesArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale: Locale;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryStoriesRealtedWithinThemeArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryStoriesWithoutRelationsArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale: Locale;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryStoryArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryStoryByLocaleArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale: Locale;
  publicationState?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoryMetaByLocaleArgs = {
  filters?: InputMaybe<StoryFiltersInput>;
  locale: Locale;
  publicationState?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoryRelationsCountArgs = {
  locale: Locale;
  storyId: Scalars['String']['input'];
};


export type QueryStoryWithoutRelationsArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryThemeArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  locale: Locale;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTriplyRecordArgs = {
  id: Scalars['String']['input'];
};


export type QueryTriplyRecordsArgs = {
  filters?: InputMaybe<TriplyRecordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryZoomLevel2Args = {
  entityName: EntityNames;
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryZoomLevel2AmountArgs = {
  entityName: EntityNames;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion>>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type QueryZoomLevel3ArchiveArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryZoomLevel3ObjectArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryZoomLevel3PeopleArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryZoomLevel3PublicationArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
};


export type QueryZoomLevel3StoriesRelationsForRecordArgs = {
  id: Scalars['String']['input'];
  locale: Locale;
  type: EntityNames;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SearchResultItemType = {
  __typename?: 'SearchResultItemType';
  id: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: EntityNames;
};

export type SearchResultType = {
  __typename?: 'SearchResultType';
  nodes?: Maybe<Array<SearchResultItemType>>;
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SelectedFilterSuggestion = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type StoriesRelatedToThemeResponse = {
  __typename?: 'StoriesRelatedToThemeResponse';
  stories?: Maybe<Array<StoryEntity>>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Story = {
  __typename?: 'Story';
  author?: Maybe<AuthorEntityResponse>;
  child_stories?: Maybe<StoryRelationResponseCollection>;
  components?: Maybe<Array<StoryComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<StoryRelationResponseCollection>;
  locations?: Maybe<LocationRelationResponseCollection>;
  parent_story?: Maybe<StoryEntityResponse>;
  publicationDate?: Maybe<ComponentCorePublicationDate>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  siblings?: Maybe<Array<StoryEntity>>;
  slug?: Maybe<Scalars['String']['output']>;
  storyLinks?: Maybe<ComponentModulesButtonsModule>;
  themes?: Maybe<ThemeRelationResponseCollection>;
  timeframe?: Maybe<ComponentCoreTimeframe>;
  title: Scalars['String']['output'];
  triplyRecords?: Maybe<TriplyRecordRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type StoryComponentsDynamicZone = ComponentCoreMuxAudio | ComponentCoreMuxVideo | ComponentCoreStandAloneLink | ComponentModulesButtonsModule | ComponentModulesImage | ComponentModulesImageCarousel | ComponentModulesPullquote | ComponentModulesSideImageWithText | ComponentModulesStandaloneLinks | ComponentModulesSubtitle | ComponentModulesTextModule | ComponentModulesTitleModule | Error;

export type StoryCountType = {
  __typename?: 'StoryCountType';
  archives?: Maybe<Scalars['Float']['output']>;
  objects?: Maybe<Scalars['Float']['output']>;
  people?: Maybe<Scalars['Float']['output']>;
  publications?: Maybe<Scalars['Float']['output']>;
};

export type StoryEntity = {
  __typename?: 'StoryEntity';
  attributes?: Maybe<Story>;
  id: Scalars['ID']['output'];
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
  child_stories?: InputMaybe<StoryFiltersInput>;
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
  parent_story?: InputMaybe<StoryFiltersInput>;
  publicationDate?: InputMaybe<ComponentCorePublicationDateFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  siblings?: InputMaybe<StoryFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  storyLinks?: InputMaybe<ComponentModulesButtonsModuleFiltersInput>;
  themes?: InputMaybe<ThemeFiltersInput>;
  timeframe?: InputMaybe<ComponentCoreTimeframeFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  triplyRecords?: InputMaybe<TriplyRecordFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StoryMetaEntityResponseCollection = {
  __typename?: 'StoryMetaEntityResponseCollection';
  data?: Maybe<StoryEntity>;
};

export type StoryRelationResponseCollection = {
  __typename?: 'StoryRelationResponseCollection';
  data?: Maybe<Array<StoryEntity>>;
};

export type StoryWithoutRelations = {
  __typename?: 'StoryWithoutRelations';
  author?: Maybe<AuthorEntityResponse>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type StoryWithoutRelationsEntity = {
  __typename?: 'StoryWithoutRelationsEntity';
  attributes?: Maybe<StoryWithoutRelations>;
  id?: Maybe<Scalars['ID']['output']>;
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
  and?: InputMaybe<Array<Scalars['String']['input']>>;
  between?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Theme = {
  __typename?: 'Theme';
  createdAt?: Maybe<Scalars['Date']['output']>;
  highlightedStories?: Maybe<StoryRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ThemeRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  stories?: Maybe<StoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  attributes?: Maybe<Theme>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse';
  data?: Maybe<ThemeEntity>;
};

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<ThemeFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insertion?: InputMaybe<StringFilterInput>;
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
  createdAt?: Maybe<Scalars['Date']['output']>;
  entityName: EntityNames;
  label?: Maybe<Scalars['String']['output']>;
  object?: Maybe<ObjectsZoomLevel3DetailType>;
  people?: Maybe<PeopleZoomLevel3DetailType>;
  publication?: Maybe<PublicationZoomLevel3DetailType>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  recordId: Scalars['String']['output'];
  stories?: Maybe<StoryRelationResponseCollection>;
  subject_collectionHighlights?: Maybe<Scalars['Boolean']['output']>;
  type: EnumTriplyrecordType;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type TriplyRecordArchiveArgs = {
  locale: Locale;
};


export type TriplyRecordObjectArgs = {
  locale: Locale;
};


export type TriplyRecordPeopleArgs = {
  locale: Locale;
};


export type TriplyRecordPublicationArgs = {
  locale: Locale;
};

export type TriplyRecordEntity = {
  __typename?: 'TriplyRecordEntity';
  attributes: TriplyRecord;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TriplyRecordEntityResponse = {
  __typename?: 'TriplyRecordEntityResponse';
  data?: Maybe<TriplyRecordEntity>;
};

export type TriplyRecordFiltersInput = {
  and?: InputMaybe<Array<TriplyRecordFiltersInput>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TriplyRecordFiltersInput>;
  or?: InputMaybe<Array<TriplyRecordFiltersInput>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recordId?: InputMaybe<StringFilterInput>;
  stories?: InputMaybe<StoryFiltersInput>;
  subject_collectionHighlights?: InputMaybe<BooleanFilterInput>;
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
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['String']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
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
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
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
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
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

export type ZoomLevel2AmountParentType = {
  __typename?: 'ZoomLevel2AmountParentType';
  total: Scalars['String']['output'];
};

export type ZoomLevel2ParentType = {
  __typename?: 'ZoomLevel2ParentType';
  nodes?: Maybe<Array<ZoomLevel2Type>>;
  page: Scalars['Int']['output'];
};

export type ZoomLevel2Type = {
  __typename?: 'ZoomLevel2Type';
  id: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ZoomLevel3RelationsType = {
  __typename?: 'ZoomLevel3RelationsType';
  paginatedRelations?: Maybe<Array<Scalars['String']['output']>>;
  total?: Maybe<Scalars['Float']['output']>;
  type: EntityNames;
};

export type ZoomLevel3StoriesRelatedToRecordType = {
  __typename?: 'ZoomLevel3StoriesRelatedToRecordType';
  stories?: Maybe<Array<StoryEntity>>;
  total?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ZoomLevel3StoryRelationsCountType = {
  __typename?: 'ZoomLevel3StoryRelationsCountType';
  linkedStoryCount?: Maybe<Scalars['Float']['output']>;
  linkedTriplyRecords?: Maybe<StoryCountType>;
};

export type StoryFragmentFragment = { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null };

export type StoryWithoutRelationsFragmentFragment = { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null };

export type ThemeFragmentFragment = { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null };

export type ThemeFragmentWithHighlightedStoriesFragment = { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, highlightedStories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null };

export type BaseTriplyRecordFragmentFragment = { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } };

export type ButtonFragmentFragment = { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null };

export type MuxAudioFragmentFragment = { __typename: 'ComponentCoreMuxAudio', id: string, caption?: string | null, muxAudioRelation?: { __typename?: 'MuxAudioResponse', data?: { __typename?: 'MuxAudioEntity', id?: string | null, attributes?: { __typename?: 'MuxAudio', title: string, upload_id?: string | null, asset_id?: string | null, playback_id?: string | null, signed: boolean, error_message?: string | null, isReady?: boolean | null, duration?: number | null, aspect_ratio?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null };

export type MuxVideoFragmentFragment = { __typename: 'ComponentCoreMuxVideo', id: string, caption?: string | null, muxVideoRelation?: { __typename?: 'MuxVideoResponse', data?: { __typename?: 'MuxVideoEntity', id?: string | null, attributes?: { __typename?: 'MuxVideo', title: string, upload_id?: string | null, asset_id?: string | null, playback_id?: string | null, signed: boolean, error_message?: string | null, isReady?: boolean | null, duration?: number | null, aspect_ratio?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null };

export type StandAloneLinkFragmentFragment = { __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null };

export type UploadFileFragmentFragment = { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null };

export type ButtonsModuleFragmentFragment = { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null };

export type CarouselModuleFragmentFragment = { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null };

export type GridModuleFragmentFragment = { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null };

export type HighlightModulesFragmentFragment = { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null };

export type ImageCarouselModuleFragmentFragment = { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> };

export type ImageModuleFragmentFragment = { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null };

export type PullquoteModuleFragmentFragment = { __typename: 'ComponentModulesPullquote', id: string, text?: string | null };

export type StandaloneLinksModuleFragmentFragment = { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null };

export type SubtitleModuleFragmentFragment = { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null };

export type TextModuleFragmentFragment = { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null };

export type TitleModuleFragmentFragment = { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null };

export type SideImageWithTextModuleFragmentFragment = { __typename: 'ComponentModulesSideImageWithText', id: string, sideText: string, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null } };

export type Zoom3RelationsFragmentFragment = { __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null };

export type FilterSuggestionsQueryVariables = Exact<{
  type: EnumTriplyrecordType;
  locale: Locale;
  search: Scalars['String']['input'];
}>;


export type FilterSuggestionsQuery = { __typename?: 'Query', filterSuggestions?: Array<{ __typename?: 'FilterSuggestionType', key: string, value: string }> | null };

export type HighlightedHomepageThemesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
}>;


export type HighlightedHomepageThemesQuery = { __typename?: 'Query', highlightedHomepageThemes: { __typename?: 'HighlightedHomepageThemeEntityResponse', data: { __typename?: 'HighlightedHomepageThemeEntity', attributes?: { __typename?: 'HighlightedHomepageThemes', highlightedThemes?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, highlightedStories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null }> | null } | null } | null }, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageCount: number, pageSize: number } } | null } };

export type HomepageQueryVariables = Exact<{
  locale: Locale;
  publicationState?: InputMaybe<Scalars['String']['input']>;
}>;


export type HomepageQuery = { __typename?: 'Query', homepage: { __typename?: 'HomepageEntityResponse', data: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Title: string, text: string, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null } | null } } };

export type LandingPageObjectQueryVariables = Exact<{
  locale: Locale;
}>;


export type LandingPageObjectQuery = { __typename?: 'Query', landingPageObject: { __typename?: 'LandingPageObjectEntityResponse', data?: { __typename?: 'LandingPageObjectEntity', id?: string | null, attributes?: { __typename?: 'LandingPageObject', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null } | null } | null } };

export type LandingPageObjectFragmentFragment = { __typename?: 'LandingPageObject', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null };

export type LandingPageArchiveQueryVariables = Exact<{
  locale: Locale;
}>;


export type LandingPageArchiveQuery = { __typename?: 'Query', landingPageArchive: { __typename?: 'LandingPageArchiveEntityResponse', data?: { __typename?: 'LandingPageArchiveEntity', id?: string | null, attributes?: { __typename?: 'LandingPageArchive', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null } | null } | null } };

export type LandingPageArchiveFragmentFragment = { __typename?: 'LandingPageArchive', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null };

export type LandingPagePeopleQueryVariables = Exact<{
  locale: Locale;
}>;


export type LandingPagePeopleQuery = { __typename?: 'Query', landingPagePeople: { __typename?: 'LandingPagePeopleEntityResponse', data?: { __typename?: 'LandingPagePeopleEntity', id?: string | null, attributes?: { __typename?: 'LandingPagePeople', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null } | null } | null } };

export type LandingPagePeopleFragmentFragment = { __typename?: 'LandingPagePeople', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null };

export type LandingPagePublicationQueryVariables = Exact<{
  locale: Locale;
}>;


export type LandingPagePublicationQuery = { __typename?: 'Query', landingPagePublication: { __typename?: 'LandingPagePublicationEntityResponse', data?: { __typename?: 'LandingPagePublicationEntity', id?: string | null, attributes?: { __typename?: 'LandingPagePublication', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null } | null } | null } };

export type LandingPagePublicationFragmentFragment = { __typename?: 'LandingPagePublication', title: string, text?: string | null, highlight?: { __typename: 'ComponentModulesHighlight', id: string, title: string, description?: string | null, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null }, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, grid?: { __typename: 'ComponentModulesGridModule', id: string, title?: string | null, exploreCollectionButton?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, cards?: Array<{ __typename?: 'ComponentCoreGridFeaturedFields', id: string, title: string, subtitle: string, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null, updatedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', attributes: { __typename?: 'TriplyRecord', recordId: string } } | null } | null }> | null } | null, carousel?: { __typename: 'ComponentModulesCarousel', id: string, title: string, description?: string | null, variant?: EnumComponentmodulescarouselVariant | null, explore_collection_button?: { __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null } | null, images?: Array<{ __typename?: 'ComponentCoreCarouselImage', id: string, alt_text?: string | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null, caption?: string | null, height?: number | null, width?: number | null } | null } | null } | null, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null }> | null } | null, imageCarousel?: { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | null };

export type SearchAllQueryVariables = Exact<{
  text: Scalars['String']['input'];
  lang: Locale;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchAllQuery = { __typename?: 'Query', searchTriply: { __typename?: 'SearchResultType', page: number, total: number, nodes?: Array<{ __typename?: 'SearchResultItemType', title?: string | null, thumbnail?: string | null, id: string, type: EntityNames }> | null } };

export type StoriesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  locale: Locale;
}>;


export type StoriesQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, shortDescription?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type SearchByStoriesQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  locationsFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  themesFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  authorFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  locale: Locale;
}>;


export type SearchByStoriesQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, total: number } } | null } };

export type StoriesRealtedWithinThemeQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type StoriesRealtedWithinThemeQuery = { __typename?: 'Query', storiesRealtedWithinTheme: { __typename?: 'StoriesRelatedToThemeResponse', type?: string | null, total?: number | null, stories?: Array<{ __typename: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null } | null }> | null } };

export type StoriesWithoutRelationsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  locale: Locale;
}>;


export type StoriesWithoutRelationsQuery = { __typename?: 'Query', storiesWithoutRelations: { __typename?: 'StoryWithoutRelationsEntityResponseCollection', data?: Array<{ __typename?: 'StoryWithoutRelationsEntity', id?: string | null, attributes?: { __typename?: 'StoryWithoutRelations', title: string, slug?: string | null, shortDescription?: string | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number } } | null } };

export type StoryByIdQueryVariables = Exact<{
  locale: Locale;
  id?: InputMaybe<Scalars['ID']['input']>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
}>;


export type StoryByIdQuery = { __typename?: 'Query', storyByLocale: { __typename?: 'StoryEntityResponse', data?: { __typename: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, description?: string | null, locale?: string | null, storyLinks?: { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, child_stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, locale?: string | null } | null }> | null } | null, parent_story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, locale?: string | null } | null } | null } | null, components?: Array<{ __typename: 'ComponentCoreMuxAudio', id: string, caption?: string | null, muxAudioRelation?: { __typename?: 'MuxAudioResponse', data?: { __typename?: 'MuxAudioEntity', id?: string | null, attributes?: { __typename?: 'MuxAudio', title: string, upload_id?: string | null, asset_id?: string | null, playback_id?: string | null, signed: boolean, error_message?: string | null, isReady?: boolean | null, duration?: number | null, aspect_ratio?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | { __typename: 'ComponentCoreMuxVideo', id: string, caption?: string | null, muxVideoRelation?: { __typename?: 'MuxVideoResponse', data?: { __typename?: 'MuxVideoEntity', id?: string | null, attributes?: { __typename?: 'MuxVideo', title: string, upload_id?: string | null, asset_id?: string | null, playback_id?: string | null, signed: boolean, error_message?: string | null, isReady?: boolean | null, duration?: number | null, aspect_ratio?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | { __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename: 'ComponentModulesSideImageWithText', id: string, sideText: string, image_alt_text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, caption?: string | null } | null } | null } } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null } | null } | null } };

export type StoryImagesQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type StoryImagesQuery = { __typename?: 'Query', story: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null } | null } | null } };

export type StoryMetaByIdQueryVariables = Exact<{
  locale: Locale;
  id?: InputMaybe<Scalars['ID']['input']>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
}>;


export type StoryMetaByIdQuery = { __typename?: 'Query', storyMetaByLocale: { __typename?: 'StoryMetaEntityResponseCollection', data?: { __typename: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', city?: string | null } | null }> } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, themes?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string } | null }> | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', type: EnumTriplyrecordType, recordId: string, people?: { __typename?: 'PeopleZoomLevel3DetailType', title?: string | null } | null } }> } | null, storyLinks?: { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | null, child_stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null } | null }> | null } | null, parent_story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null } | null } | null } | null, siblings?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null } | null }> | null } | null } | null } };

export type ThemesQueryVariables = Exact<{
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
}>;


export type ThemesQuery = { __typename?: 'Query', themes: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', name: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, stories?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, locale?: string | null, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename: 'ComponentModulesButtonsModule', id: string, buttons?: Array<{ __typename?: 'ComponentCoreButton', id: string, text?: string | null, url?: string | null }> | null } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename: 'ComponentModulesImageCarousel', id: string, description?: string | null, items: Array<{ __typename?: 'ComponentCoreImageCarouselItem', id: string, url?: string | null, alt_text: string, triply_record?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', slug?: string | null } | null } | null } | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, caption?: string | null, width?: number | null, height?: number | null, size: number } | null } | null } }> } | { __typename: 'ComponentModulesPullquote', id: string, text?: string | null } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename: 'ComponentModulesStandaloneLinks', id: string, standaloneLinks?: Array<{ __typename: 'ComponentCoreStandAloneLink', id: string, label: string, url?: string | null, attachment?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null }> | null } | { __typename: 'ComponentModulesSubtitle', id: string, text?: string | null } | { __typename: 'ComponentModulesTextModule', id: string, Richtext?: string | null } | { __typename: 'ComponentModulesTitleModule', id: string, Title?: string | null } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null } | null } | null, timeframe?: { __typename?: 'ComponentCoreTimeframe', id: string, yearStart?: number | null, yearEnd?: number | null } | null, locations?: { __typename?: 'LocationRelationResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null }> } | null, publicationDate?: { __typename?: 'ComponentCorePublicationDate', id?: string | null, date?: any | null, displayType?: EnumComponentcorepublicationdateDisplaytype | null } | null, triplyRecords?: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } }> } | null, localizations?: { __typename?: 'StoryRelationResponseCollection', data?: Array<{ __typename?: 'StoryEntity', id: string }> | null } | null } | null }> | null } | null, localizations?: { __typename?: 'ThemeRelationResponseCollection', data?: Array<{ __typename?: 'ThemeEntity', id?: string | null }> | null } | null } | null }> | null, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageSize: number, pageCount: number, total: number } } | null } };

export type TotalCounterQueryVariables = Exact<{
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
  locationsFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  themesFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  authorFilterTerm?: InputMaybe<Scalars['ID']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
}>;


export type TotalCounterQuery = { __typename?: 'Query', stories: { __typename?: 'StoryEntityResponseCollection', meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } | null }, archives: { __typename?: 'ZoomLevel2AmountParentType', total: string }, objects: { __typename?: 'ZoomLevel2AmountParentType', total: string }, people: { __typename?: 'ZoomLevel2AmountParentType', total: string }, publications: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type ArchivesZoomRecordHoverQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ArchivesZoomRecordHoverQuery = { __typename?: 'Query', archivesZoomRecordHover: { __typename?: 'ArchivesZoomLevelHoverType', title?: string | null, creators?: string | null, description?: string | null } };

export type ObjectsZoomRecordHoverQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ObjectsZoomRecordHoverQuery = { __typename?: 'Query', objectsZoomRecordHover: { __typename?: 'ObjectsZoomLevelHoverType', title?: string | null, description?: string | null, maker?: string | null } };

export type PeopleZoomRecordHoverQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type PeopleZoomRecordHoverQuery = { __typename?: 'Query', peopleZoomLevelHover: { __typename?: 'PeopleZoomLevelHoverType', title?: string | null, profession?: string | null, description?: string | null } };

export type PublicationsZoomRecordHoverQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type PublicationsZoomRecordHoverQuery = { __typename?: 'Query', publicationsZoomRecordHover: { __typename?: 'PublicationsZoomLevelHoverType', title?: string | null, authors?: string | null, description?: string | null } };

export type SearchBySelectedHighlightsQueryVariables = Exact<{
  filters?: InputMaybe<TriplyRecordFiltersInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  isArchive: Scalars['Boolean']['input'];
  isPerson: Scalars['Boolean']['input'];
  isPublication: Scalars['Boolean']['input'];
  isObject: Scalars['Boolean']['input'];
  locale: Locale;
}>;


export type SearchBySelectedHighlightsQuery = { __typename?: 'Query', triplyRecords: { __typename?: 'TriplyRecordRelationResponseCollection', data: Array<{ __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', label?: string | null, entityName: EntityNames, recordId: string, archive?: { __typename?: 'ArchiveZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null } | null, people?: { __typename?: 'PeopleZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null } | null, publication?: { __typename?: 'PublicationZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null } | null, object?: { __typename?: 'ObjectsZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null } | null } }>, meta?: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, total: number } } | null } };

export type Zoom2QueryVariables = Exact<{
  entityName: EntityNames;
  page: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2Query = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id: string }> | null } };

export type Zoom2AmountQueryVariables = Exact<{
  entityName: EntityNames;
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2AmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2ArchivesQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2ArchivesQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id: string }> | null } };

export type Zoom2ArchiveAmountQueryVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2ArchiveAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2ObjectsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2ObjectsQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id: string }> | null } };

export type Zoom2ObjectsAmountQueryVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2ObjectsAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2PeopleQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2PeopleQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id: string }> | null } };

export type Zoom2PeopleAmountQueryVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2PeopleAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type Zoom2PublicationsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2PublicationsQuery = { __typename?: 'Query', zoomLevel2: { __typename?: 'ZoomLevel2ParentType', page: number, nodes?: Array<{ __typename?: 'ZoomLevel2Type', title?: string | null, thumbnail?: string | null, id: string }> | null } };

export type Zoom2PublicationsAmountQueryVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  locale: Locale;
  selectedFilterSuggestions?: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>;
}>;


export type Zoom2PublicationsAmountQuery = { __typename?: 'Query', zoomLevel2Amount: { __typename?: 'ZoomLevel2AmountParentType', total: string } };

export type ZoomLevel3ArchiveQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3ArchiveQuery = { __typename?: 'Query', zoomLevel3Archive?: { __typename: 'ArchiveZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null, asteriskSuggestions?: Array<{ __typename?: 'EnrichedBaseOArchiveZoomLevel3AsteriskDetailType', asterisk_date_title?: string | null, asterisk_name_title?: string | null, asterisk_subject_title?: string | null, asterisk_date_description?: string | null, asterisk_name_description?: string | null, asterisk_subject_description?: string | null }> | null, enrichedSources?: Array<{ __typename: 'EnrichedBaseArchiveZoomLevel3DetailType', externalSourceType: ExternalSource, externalSourceUrl: string, id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null }> | null } | null };

export type ZoomLevel3ArchiveRecordQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3ArchiveRecordQuery = { __typename?: 'Query', archivesRecordZoomLevel3?: { __typename: 'ArchivesRecordZoomLevel3Type', referenceCode?: string | null, titleType?: string | null, descriptionLevel?: string | null, size?: string | null, period?: string | null, access?: string | null, photographCreator?: string | null, rights?: string | null, permanentLink?: string | null, externalSource?: string | null, description?: string | null, custodialHistory?: string | null, systemOfArrangement?: string | null, sources?: string | null, existence?: string | null, existenceLocation?: string | null, asteriskSuggestions?: Array<{ __typename?: 'BaseArchiveRecordZoomLevel3AsteriskType', asterisk_date_subject?: string | null, asterisk_name_subject?: string | null, asterisk_subject_subject?: string | null, asterisk_date_location?: string | null, asterisk_name_location?: string | null, asterisk_subject_location?: string | null, asterisk_date_content?: string | null, asterisk_name_content?: string | null, asterisk_subject_content?: string | null }> | null, enrichedSources?: Array<{ __typename: 'EnrichedBaseArchivesRecordZoomLevel3Type', id: string, externalSourceType: ExternalSource, externalSourceUrl: string, referenceCode?: string | null, titleType?: string | null, descriptionLevel?: string | null, size?: string | null, period?: string | null, access?: string | null, photographCreator?: string | null, rights?: string | null, permanentLink?: string | null, externalSource?: string | null, description?: string | null, custodialHistory?: string | null, systemOfArrangement?: string | null, sources?: string | null, existence?: string | null, existenceLocation?: string | null }> | null } | null };

export type ZoomLevel3ObjectRecordQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3ObjectRecordQuery = { __typename?: 'Query', objectsRecordZoomLevel3?: { __typename?: 'ObjectRecordZoomLevel3Type', id: string, title?: string | null, objectNumber?: string | null, objectType?: string | null, objectName?: string | null, archiveCode?: string | null, date?: string | null, relatedKeywords?: string | null, maker?: string | null, materials?: string | null, techniques?: string | null, hasParts?: string | null, dimension?: string | null, scale?: string | null, creditLine?: string | null, rights?: string | null, geoKeywords?: string | null, permanentLink?: string | null, externalSource?: string | null, asteriskSuggestions?: Array<{ __typename?: 'BaseObjectRecordZoomLevel3AsteriskType', asterisk_date_relatedKeyword?: string | null, asterisk_name_relatedKeyword?: string | null, asterisk_subject_relatedKeyword?: string | null, asterisk_date_geoKeywords?: string | null, asterisk_name_geoKeywords?: string | null, asterisk_subject_geoKeywords?: string | null }> | null, enrichedSources?: Array<{ __typename?: 'EnrichedBaseObjectRecordZoomLevel3Type', id: string, title?: string | null, objectNumber?: string | null, objectType?: string | null, objectName?: string | null, archiveCode?: string | null, date?: string | null, relatedKeywords?: string | null, maker?: string | null, materials?: string | null, techniques?: string | null, hasParts?: string | null, dimension?: string | null, scale?: string | null, creditLine?: string | null, rights?: string | null, geoKeywords?: string | null, permanentLink?: string | null, externalSource?: string | null }> | null } | null };

export type ZoomLevel3PeopleRecordQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3PeopleRecordQuery = { __typename?: 'Query', peopleRecordZoomLevel3?: { __typename?: 'PeopleRecordZoomLevel3Type', type?: string | null, profession?: string | null, nameVariation?: string | null, birthDate?: string | null, birthPlace?: string | null, deathDate?: string | null, deathPlace?: string | null, nationality?: string | null, gender?: string | null, period?: string | null, association?: string | null, permanentLink?: string | null, externalSource?: string | null, enrichedSources?: Array<{ __typename?: 'EnrichedBasePeopleRecordZoomLevel3Type', id: string, externalSourceType: ExternalSource, externalSourceUrl: string, type?: string | null, profession?: string | null, nameVariation?: string | null, birthDate?: string | null, birthPlace?: string | null, deathDate?: string | null, deathPlace?: string | null, nationality?: string | null, gender?: string | null, period?: string | null, association?: string | null, permanentLink?: string | null, externalSource?: string | null }> | null } | null };

export type ZoomLevel3PublicationRecordQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3PublicationRecordQuery = { __typename?: 'Query', publicationsRecordZoomLevel3?: { __typename?: 'PublicationRecordZoomLevel3Type', objectNumber?: string | null, subType?: string | null, authors?: string | null, authorRole?: string | null, publisher?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, isbn?: string | null, annotation?: string | null, codeOfArchive?: string | null, edition?: string | null, illustration?: string | null, pages?: string | null, language?: string | null, series?: string | null, number?: string | null, category?: string | null, relatedKeyword?: string | null, geoKeyword?: string | null, availability?: string | null, permanentLink?: string | null, externalSource?: string | null, enrichedSources?: Array<{ __typename?: 'EnrichedBasePublicationRecordZoomLevel3Type', id: string, externalSourceType: ExternalSource, externalSourceUrl: string, objectNumber?: string | null, subType?: string | null, authors?: string | null, authorRole?: string | null, publisher?: string | null, yearOfPublication?: string | null, placeOfPublication?: string | null, isbn?: string | null, annotation?: string | null, codeOfArchive?: string | null, edition?: string | null, illustration?: string | null, pages?: string | null, language?: string | null, series?: string | null, number?: string | null, category?: string | null, relatedKeyword?: string | null, geoKeyword?: string | null, availability?: string | null, permanentLink?: string | null, externalSource?: string | null }> | null } | null };

export type StoryHoverRecordRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type StoryHoverRecordRelationsQuery = { __typename?: 'Query', storyWithoutRelations: { __typename?: 'StoryWithoutRelationsEntityResponse', data?: { __typename?: 'StoryWithoutRelationsEntity', id?: string | null, attributes?: { __typename?: 'StoryWithoutRelations', title: string, shortDescription?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', firstName: string, lastName: string } | null } | null } | null } | null } | null } };

export type ArchiveRecordRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type ArchiveRecordRelationsQuery = { __typename?: 'Query', archivesRecordRelations?: Array<{ __typename?: 'ArchiveRelationsType', idRelation?: string | null, titleR?: string | null, referenceNumber?: string | null, period?: string | null, asterisk_date_person?: string | null, asterisk_name_person?: string | null, asterisk_subject_person?: string | null }> | null };

export type ObjectRecordRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type ObjectRecordRelationsQuery = { __typename?: 'Query', objectRecordRelations?: Array<{ __typename?: 'ObjectRelationsType', idRelation?: string | null, titleR?: string | null, referenceNumber?: string | null, period?: string | null, asterisk_date_person?: string | null, asterisk_name_person?: string | null, asterisk_subject_person?: string | null }> | null };

export type PeopleRecordRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type PeopleRecordRelationsQuery = { __typename?: 'Query', peopleRecordRelations?: Array<{ __typename?: 'PeopleRelationsType', idRelation?: string | null, relationName?: string | null, titleR?: string | null, occupation?: string | null, period?: string | null }> | null };

export type PublicationRecordRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
  locale: Locale;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type PublicationRecordRelationsQuery = { __typename?: 'Query', publicationRecordRelations?: Array<{ __typename?: 'PublicationRelationsType', idRelation?: string | null, titleR?: string | null, typePub?: string | null, yearPub?: string | null }> | null };

export type ArchivesRecordRelationsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
}>;


export type ArchivesRecordRelationsCountQuery = { __typename?: 'Query', archivesRecordRelationsCount?: Array<{ __typename?: 'ArchivesRelationsCountType', total?: string | null }> | null };

export type ObjectRecordRelationsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
}>;


export type ObjectRecordRelationsCountQuery = { __typename?: 'Query', objectRecordRelationsCount?: Array<{ __typename?: 'ObjectRelationsCountType', total?: string | null }> | null };

export type PeopleRecordRelationsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
}>;


export type PeopleRecordRelationsCountQuery = { __typename?: 'Query', peopleRecordRelationsCount?: Array<{ __typename?: 'PeopleRelationsCountType', total?: string | null }> | null };

export type PublicationsRecordRelationsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
}>;


export type PublicationsRecordRelationsCountQuery = { __typename?: 'Query', publicationsRecordRelationsCount?: Array<{ __typename?: 'PublicationsRelationsCountType', total?: string | null }> | null };

export type ArchivesRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  locale: Locale;
}>;


export type ArchivesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null }> | null };

export type StoryRelationsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type StoryRelationsCountQuery = { __typename?: 'Query', storyRelationsCount?: { __typename?: 'ZoomLevel3StoryRelationsCountType', linkedStoryCount?: number | null, linkedTriplyRecords?: { __typename?: 'StoryCountType', archives?: number | null, people?: number | null, publications?: number | null, objects?: number | null } | null } | null };

export type ObjectRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  locale: Locale;
}>;


export type ObjectRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null }> | null };

export type PeopleRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  locale: Locale;
}>;


export type PeopleRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null }> | null };

export type PublicationRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  locale: Locale;
}>;


export type PublicationRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null }> | null };

export type StoriesRelationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  locale: Locale;
}>;


export type StoriesRelationsQuery = { __typename?: 'Query', relations?: Array<{ __typename?: 'ZoomLevel3RelationsType', type: EntityNames, total?: number | null, paginatedRelations?: Array<string> | null }> | null };

export type StoriesRelationForRecordQueryVariables = Exact<{
  id: Scalars['String']['input'];
  type: EntityNames;
  locale: Locale;
}>;


export type StoriesRelationForRecordQuery = { __typename?: 'Query', zoomLevel3StoriesRelationsForRecord?: { __typename?: 'ZoomLevel3StoriesRelatedToRecordType', type?: string | null, total?: number | null, stories?: Array<{ __typename: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, components?: Array<{ __typename?: 'ComponentCoreMuxAudio' } | { __typename?: 'ComponentCoreMuxVideo' } | { __typename?: 'ComponentCoreStandAloneLink' } | { __typename?: 'ComponentModulesButtonsModule' } | { __typename: 'ComponentModulesImage', id: string, caption?: string | null, alt_text?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null }, story?: { __typename?: 'StoryEntityResponse', data?: { __typename?: 'StoryEntity', id: string, attributes?: { __typename?: 'Story', title: string, slug?: string | null, description?: string | null, shortDescription?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, locale?: string | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string } | null } | null } | null } | null } | null } | null, triplyRecord?: { __typename?: 'TriplyRecordEntityResponse', data?: { __typename?: 'TriplyRecordEntity', id?: string | null, attributes: { __typename?: 'TriplyRecord', recordId: string, type: EnumTriplyrecordType } } | null } | null } | { __typename?: 'ComponentModulesImageCarousel' } | { __typename?: 'ComponentModulesPullquote' } | { __typename?: 'ComponentModulesSideImageWithText' } | { __typename?: 'ComponentModulesStandaloneLinks' } | { __typename?: 'ComponentModulesSubtitle' } | { __typename?: 'ComponentModulesTextModule' } | { __typename?: 'ComponentModulesTitleModule' } | { __typename?: 'Error' }> | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', attributes?: { __typename?: 'Author', firstName: string, lastName: string, insertion?: string | null } | null } | null } | null } | null }> | null } | null };

export type ZoomLevel3ObjectQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3ObjectQuery = { __typename?: 'Query', zoomLevel3Object?: { __typename: 'ObjectsZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null, asteriskSuggestions?: Array<{ __typename?: 'EnrichedBaseObjectsZoomLevel3AsteriskDetailType', asterisk_date_title?: string | null, asterisk_name_title?: string | null, asterisk_subject_title?: string | null }> | null, enrichedSources?: Array<{ __typename: 'EnrichedBaseObjectsZoomLevel3DetailType', externalSourceType: ExternalSource, externalSourceUrl: string, id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null }> | null } | null };

export type ZoomLevel3PublicationQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3PublicationQuery = { __typename?: 'Query', zoomLevel3Publication?: { __typename: 'PublicationZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null, enrichedSources?: Array<{ __typename: 'EnrichedBasePublicationZoomLevel3DetailType', externalSourceType: ExternalSource, externalSourceUrl: string, id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null }> | null } | null };

export type ZoomLevel3PeopleQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Locale;
}>;


export type ZoomLevel3PeopleQuery = { __typename?: 'Query', zoomLevel3People?: { __typename: 'PeopleZoomLevel3DetailType', id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null, asteriskSuggestions?: Array<{ __typename?: 'PeopleZoomLevel3DetailAsteriskType', asterisk_subject_description?: string | null, asterisk_date_description?: string | null, asterisk_name_description?: string | null }> | null, enrichedSources?: Array<{ __typename: 'EnrichedBasePeopleZoomLevel3DetailType', externalSourceType: ExternalSource, externalSourceUrl: string, id: string, title?: string | null, thumbnail?: Array<string> | null, description?: string | null }> | null } | null };

export const TextModuleFragmentFragmentDoc = gql`
    fragment textModuleFragment on ComponentModulesTextModule {
  id
  __typename
  Richtext
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
}
    ${StoryWithoutRelationsFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
export const PullquoteModuleFragmentFragmentDoc = gql`
    fragment pullquoteModuleFragment on ComponentModulesPullquote {
  id
  __typename
  text
}
    `;
export const TitleModuleFragmentFragmentDoc = gql`
    fragment titleModuleFragment on ComponentModulesTitleModule {
  id
  __typename
  Title
}
    `;
export const ImageCarouselModuleFragmentFragmentDoc = gql`
    fragment imageCarouselModuleFragment on ComponentModulesImageCarousel {
  id
  __typename
  description
  items {
    id
    url
    alt_text
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
    image {
      data {
        id
        attributes {
          url
          caption
          width
          height
          size
        }
      }
    }
  }
}
    ${BaseTriplyRecordFragmentFragmentDoc}`;
export const ButtonsModuleFragmentFragmentDoc = gql`
    fragment buttonsModuleFragment on ComponentModulesButtonsModule {
  id
  __typename
  buttons {
    id
    text
    url
  }
}
    `;
export const StandAloneLinkFragmentFragmentDoc = gql`
    fragment standAloneLinkFragment on ComponentCoreStandAloneLink {
  id
  __typename
  label
  url
  attachment {
    data {
      attributes {
        url
        height
        width
      }
    }
  }
}
    `;
export const StandaloneLinksModuleFragmentFragmentDoc = gql`
    fragment standaloneLinksModuleFragment on ComponentModulesStandaloneLinks {
  id
  __typename
  standaloneLinks {
    ...standAloneLinkFragment
  }
}
    ${StandAloneLinkFragmentFragmentDoc}`;
export const SubtitleModuleFragmentFragmentDoc = gql`
    fragment subtitleModuleFragment on ComponentModulesSubtitle {
  id
  __typename
  text
}
    `;
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
      ... on ComponentModulesTitleModule {
        ...titleModuleFragment
      }
      ... on ComponentModulesImageCarousel {
        ...imageCarouselModuleFragment
      }
      ... on ComponentModulesButtonsModule {
        ...buttonsModuleFragment
      }
      ... on ComponentModulesStandaloneLinks {
        ...standaloneLinksModuleFragment
      }
      ... on ComponentModulesSubtitle {
        ...subtitleModuleFragment
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
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${ButtonsModuleFragmentFragmentDoc}
${StandaloneLinksModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
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
    ${StoryFragmentFragmentDoc}`;
export const MuxAudioFragmentFragmentDoc = gql`
    fragment muxAudioFragment on ComponentCoreMuxAudio {
  __typename
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
    `;
export const MuxVideoFragmentFragmentDoc = gql`
    fragment muxVideoFragment on ComponentCoreMuxVideo {
  __typename
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
    `;
export const SideImageWithTextModuleFragmentFragmentDoc = gql`
    fragment sideImageWithTextModuleFragment on ComponentModulesSideImageWithText {
  id
  __typename
  sideText
  image_alt_text
  image {
    data {
      attributes {
        url
        height
        width
        caption
      }
    }
  }
}
    `;
export const Zoom3RelationsFragmentFragmentDoc = gql`
    fragment zoom3RelationsFragment on ZoomLevel3RelationsType {
  type
  total
  paginatedRelations
}
    `;
export const ButtonFragmentFragmentDoc = gql`
    fragment ButtonFragment on ComponentCoreButton {
  id
  text
  url
}
    `;
export const HighlightModulesFragmentFragmentDoc = gql`
    fragment highlightModulesFragment on ComponentModulesHighlight {
  id
  __typename
  title
  description
  image {
    data {
      id
      attributes {
        url
        height
        width
        caption
      }
    }
  }
  image_alt_text
  buttons {
    ...ButtonFragment
  }
}
    ${ButtonFragmentFragmentDoc}`;
export const GridModuleFragmentFragmentDoc = gql`
    fragment gridModuleFragment on ComponentModulesGridModule {
  __typename
  id
  title
  exploreCollectionButton {
    id
    text
    url
  }
  cards {
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
        id
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
          recordId
        }
      }
    }
  }
}
    `;
export const UploadFileFragmentFragmentDoc = gql`
    fragment UploadFileFragment on UploadFileEntity {
  id
  attributes {
    size
    url
    alternativeText
    caption
    height
    width
  }
}
    `;
export const CarouselModuleFragmentFragmentDoc = gql`
    fragment carouselModuleFragment on ComponentModulesCarousel {
  id
  __typename
  title
  description
  variant
  explore_collection_button {
    id
    text
    url
  }
  images {
    id
    alt_text
    title
    description
    image {
      data {
        ...UploadFileFragment
      }
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
}
    ${UploadFileFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
export const LandingPageObjectFragmentFragmentDoc = gql`
    fragment LandingPageObjectFragment on LandingPageObject {
  title
  text
  highlight {
    ...highlightModulesFragment
  }
  grid {
    ...gridModuleFragment
  }
  carousel {
    ...carouselModuleFragment
  }
  imageCarousel {
    ...imageCarouselModuleFragment
  }
}
    ${HighlightModulesFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}`;
export const LandingPageArchiveFragmentFragmentDoc = gql`
    fragment LandingPageArchiveFragment on LandingPageArchive {
  title
  text
  highlight {
    ...highlightModulesFragment
  }
  grid {
    ...gridModuleFragment
  }
  carousel {
    ...carouselModuleFragment
  }
  imageCarousel {
    ...imageCarouselModuleFragment
  }
}
    ${HighlightModulesFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}`;
export const LandingPagePeopleFragmentFragmentDoc = gql`
    fragment LandingPagePeopleFragment on LandingPagePeople {
  title
  text
  highlight {
    ...highlightModulesFragment
  }
  grid {
    ...gridModuleFragment
  }
  carousel {
    ...carouselModuleFragment
  }
  imageCarousel {
    ...imageCarouselModuleFragment
  }
}
    ${HighlightModulesFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}`;
export const LandingPagePublicationFragmentFragmentDoc = gql`
    fragment LandingPagePublicationFragment on LandingPagePublication {
  title
  text
  highlight {
    ...highlightModulesFragment
  }
  grid {
    ...gridModuleFragment
  }
  carousel {
    ...carouselModuleFragment
  }
  imageCarousel {
    ...imageCarouselModuleFragment
  }
}
    ${HighlightModulesFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}
${CarouselModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}`;
export const FilterSuggestionsDocument = gql`
    query filterSuggestions($type: Enum_Triplyrecord_Type!, $locale: Locale!, $search: String!) {
  filterSuggestions(type: $type, locale: $locale, search: $search) {
    key
    value
  }
}
    `;
export const HighlightedHomepageThemesDocument = gql`
    query highlightedHomepageThemes($pagination: PaginationArg, $publicationState: String, $locale: String!) {
  highlightedHomepageThemes(
    paginationArgs: $pagination
    publicationState: $publicationState
    locale: $locale
  ) {
    data {
      attributes {
        highlightedThemes {
          data {
            ...ThemeFragmentWithHighlightedStories
          }
        }
      }
    }
    meta(
      paginationArgs: $pagination
      publicationState: $publicationState
      locale: $locale
    ) {
      pagination {
        total
        page
        pageCount
        pageSize
      }
    }
  }
}
    ${ThemeFragmentWithHighlightedStoriesFragmentDoc}`;
export const HomepageDocument = gql`
    query homepage($locale: Locale!, $publicationState: String = "LIVE") {
  homepage(locale: $locale, publicationState: $publicationState) {
    data {
      id
      attributes {
        Title
        text
        carousel {
          ...carouselModuleFragment
        }
        grid {
          ...gridModuleFragment
        }
      }
    }
  }
}
    ${CarouselModuleFragmentFragmentDoc}
${GridModuleFragmentFragmentDoc}`;
export const LandingPageObjectDocument = gql`
    query landingPageObject($locale: Locale!) {
  landingPageObject(locale: $locale) {
    data {
      id
      attributes {
        ...LandingPageObjectFragment
      }
    }
  }
}
    ${LandingPageObjectFragmentFragmentDoc}`;
export const LandingPageArchiveDocument = gql`
    query landingPageArchive($locale: Locale!) {
  landingPageArchive(locale: $locale) {
    data {
      id
      attributes {
        ...LandingPageArchiveFragment
      }
    }
  }
}
    ${LandingPageArchiveFragmentFragmentDoc}`;
export const LandingPagePeopleDocument = gql`
    query landingPagePeople($locale: Locale!) {
  landingPagePeople(locale: $locale) {
    data {
      id
      attributes {
        ...LandingPagePeopleFragment
      }
    }
  }
}
    ${LandingPagePeopleFragmentFragmentDoc}`;
export const LandingPagePublicationDocument = gql`
    query landingPagePublication($locale: Locale!) {
  landingPagePublication(locale: $locale) {
    data {
      id
      attributes {
        ...LandingPagePublicationFragment
      }
    }
  }
}
    ${LandingPagePublicationFragmentFragmentDoc}`;
export const SearchAllDocument = gql`
    query searchAll($text: String!, $lang: Locale!, $page: Int!, $pageSize: Int) {
  searchTriply(page: $page, lang: $lang, pageSize: $pageSize, text: $text) {
    page
    nodes {
      title
      thumbnail
      id
      type
    }
    total
  }
}
    `;
export const StoriesDocument = gql`
    query stories($pagination: PaginationArg, $locale: Locale!) {
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
export const SearchByStoriesDocument = gql`
    query searchByStories($searchTerm: String, $page: Int, $pageSize: Int, $locationsFilterTerm: ID, $themesFilterTerm: ID, $authorFilterTerm: ID, $locale: Locale!) {
  stories(
    filters: {and: [{or: [{locations: {id: {eq: $locationsFilterTerm}}}, {themes: {id: {eq: $themesFilterTerm}}}, {author: {id: {eq: $authorFilterTerm}}}]}, {or: [{title: {containsi: $searchTerm}}, {description: {containsi: $searchTerm}}, {shortDescription: {containsi: $searchTerm}}]}], or: [{title: {containsi: $searchTerm}}, {description: {containsi: $searchTerm}}, {shortDescription: {containsi: $searchTerm}}]}
    pagination: {page: $page, pageSize: $pageSize}
    locale: $locale
  ) {
    data {
      id
      attributes {
        title
        components {
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
        }
      }
    }
    meta {
      pagination {
        page
        total
      }
    }
  }
}
    ${ImageModuleFragmentFragmentDoc}`;
export const StoriesRealtedWithinThemeDocument = gql`
    query storiesRealtedWithinTheme($id: String!, $locale: Locale!) {
  storiesRealtedWithinTheme(id: $id, locale: $locale) {
    type
    total
    stories {
      id
      __typename
      attributes {
        title
        components {
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
        }
        author {
          data {
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
    ${ImageModuleFragmentFragmentDoc}`;
export const StoriesWithoutRelationsDocument = gql`
    query storiesWithoutRelations($pagination: PaginationArg, $locale: Locale!) {
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
    query storyById($locale: Locale!, $id: ID, $publicationState: String = "LIVE") {
  storyByLocale(
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
        locale
        storyLinks {
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
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
          ... on ComponentModulesTitleModule {
            ...titleModuleFragment
          }
          ... on ComponentModulesImageCarousel {
            ...imageCarouselModuleFragment
          }
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
          ... on ComponentModulesStandaloneLinks {
            ...standaloneLinksModuleFragment
          }
          ... on ComponentModulesSubtitle {
            ...subtitleModuleFragment
          }
          ... on ComponentCoreStandAloneLink {
            ...standAloneLinkFragment
          }
          ... on ComponentCoreMuxAudio {
            ...muxAudioFragment
          }
          ... on ComponentCoreMuxVideo {
            ...muxVideoFragment
          }
          ... on ComponentModulesSideImageWithText {
            ...sideImageWithTextModuleFragment
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
    ${ButtonsModuleFragmentFragmentDoc}
${TextModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}
${PullquoteModuleFragmentFragmentDoc}
${TitleModuleFragmentFragmentDoc}
${ImageCarouselModuleFragmentFragmentDoc}
${StandaloneLinksModuleFragmentFragmentDoc}
${SubtitleModuleFragmentFragmentDoc}
${StandAloneLinkFragmentFragmentDoc}
${MuxAudioFragmentFragmentDoc}
${MuxVideoFragmentFragmentDoc}
${SideImageWithTextModuleFragmentFragmentDoc}
${BaseTriplyRecordFragmentFragmentDoc}`;
export const StoryImagesDocument = gql`
    query storyImages($id: String!, $locale: Locale!) {
  story(id: $id, locale: $locale) {
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
export const StoryMetaByIdDocument = gql`
    query storyMetaById($locale: Locale!, $id: ID, $publicationState: String = "LIVE") {
  storyMetaByLocale(
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
        shortDescription
        createdAt
        updatedAt
        publishedAt
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
        publicationDate {
          id
          date
          displayType
        }
        locations {
          data {
            id
            attributes {
              city
            }
          }
        }
        timeframe {
          id
          yearStart
          yearEnd
        }
        themes {
          data {
            id
            attributes {
              name
            }
          }
        }
        triplyRecords {
          data {
            id
            attributes {
              type
              recordId
              people(locale: $locale) {
                title
              }
            }
          }
        }
        storyLinks {
          ... on ComponentModulesButtonsModule {
            ...buttonsModuleFragment
          }
        }
        child_stories {
          data {
            id
            attributes {
              title
              components {
                ... on ComponentModulesImage {
                  ...imageModuleFragment
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
        parent_story {
          data {
            id
            attributes {
              title
              components {
                ... on ComponentModulesImage {
                  ...imageModuleFragment
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
        siblings {
          id
          attributes {
            title
            components {
              ... on ComponentModulesImage {
                ...imageModuleFragment
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
}
    ${ButtonsModuleFragmentFragmentDoc}
${ImageModuleFragmentFragmentDoc}`;
export const ThemesDocument = gql`
    query themes($filters: ThemeFiltersInput, $pagination: PaginationArg, $sort: [String!], $publicationState: String, $locale: Locale!) {
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
export const TotalCounterDocument = gql`
    query totalCounter($locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!], $locationsFilterTerm: ID, $themesFilterTerm: ID, $authorFilterTerm: ID, $searchTerm: String) {
  stories(
    filters: {and: [{or: [{locations: {id: {eq: $locationsFilterTerm}}}, {themes: {id: {eq: $themesFilterTerm}}}, {author: {id: {eq: $authorFilterTerm}}}]}, {or: [{title: {containsi: $searchTerm}}, {description: {containsi: $searchTerm}}, {shortDescription: {containsi: $searchTerm}}]}], or: [{title: {containsi: $searchTerm}}, {description: {containsi: $searchTerm}}, {shortDescription: {containsi: $searchTerm}}]}
    pagination: {page: 1, pageSize: 1}
    locale: $locale
  ) {
    meta {
      pagination {
        total
      }
    }
  }
  archives: zoomLevel2Amount(
    entityName: Archives
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
    text: $searchTerm
  ) {
    total
  }
  objects: zoomLevel2Amount(
    entityName: Objects
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
    text: $searchTerm
  ) {
    total
  }
  people: zoomLevel2Amount(
    entityName: People
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
    text: $searchTerm
  ) {
    total
  }
  publications: zoomLevel2Amount(
    entityName: Publications
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
    text: $searchTerm
  ) {
    total
  }
}
    `;
export const ArchivesZoomRecordHoverDocument = gql`
    query ArchivesZoomRecordHover($id: String!, $locale: Locale!) {
  archivesZoomRecordHover(id: $id, locale: $locale) {
    title
    creators
    description
  }
}
    `;
export const ObjectsZoomRecordHoverDocument = gql`
    query ObjectsZoomRecordHover($id: String!, $locale: Locale!) {
  objectsZoomRecordHover(id: $id, locale: $locale) {
    title
    description
    maker
  }
}
    `;
export const PeopleZoomRecordHoverDocument = gql`
    query PeopleZoomRecordHover($id: String!, $locale: Locale!) {
  peopleZoomLevelHover(id: $id, locale: $locale) {
    title
    profession
    description
  }
}
    `;
export const PublicationsZoomRecordHoverDocument = gql`
    query PublicationsZoomRecordHover($id: String!, $locale: Locale!) {
  publicationsZoomRecordHover(id: $id, locale: $locale) {
    title
    authors
    description
  }
}
    `;
export const SearchBySelectedHighlightsDocument = gql`
    query searchBySelectedHighlights($filters: TriplyRecordFiltersInput, $page: Int, $pageSize: Int, $isArchive: Boolean!, $isPerson: Boolean!, $isPublication: Boolean!, $isObject: Boolean!, $locale: Locale!) {
  triplyRecords(filters: $filters, pagination: {page: $page, pageSize: $pageSize}) {
    data {
      id
      attributes {
        label
        entityName
        recordId
        archive(locale: $locale) @include(if: $isArchive) {
          id
          title
          thumbnail
        }
        people(locale: $locale) @include(if: $isPerson) {
          id
          title
          thumbnail
        }
        publication(locale: $locale) @include(if: $isPublication) {
          id
          title
          thumbnail
        }
        object(locale: $locale) @include(if: $isObject) {
          id
          title
          thumbnail
        }
      }
    }
    meta {
      pagination {
        page
        total
      }
    }
  }
}
    `;
export const Zoom2Document = gql`
    query Zoom2($entityName: EntityNames!, $page: Int!, $pageSize: Int, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2(
    entityName: $entityName
    page: $page
    pageSize: $pageSize
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
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
    query Zoom2Amount($entityName: EntityNames!, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2Amount(
    entityName: $entityName
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
    total
  }
}
    `;
export const Zoom2ArchivesDocument = gql`
    query Zoom2Archives($page: Int!, $pageSize: Int!, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2(
    entityName: Archives
    page: $page
    pageSize: $pageSize
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
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
    query Zoom2ArchiveAmount($text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2Amount(
    entityName: Archives
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
    total
  }
}
    `;
export const Zoom2ObjectsDocument = gql`
    query Zoom2Objects($page: Int!, $pageSize: Int!, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2(
    entityName: Objects
    page: $page
    pageSize: $pageSize
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
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
    query Zoom2ObjectsAmount($text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2Amount(
    entityName: Objects
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
    total
  }
}
    `;
export const Zoom2PeopleDocument = gql`
    query Zoom2People($page: Int!, $pageSize: Int!, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2(
    entityName: People
    page: $page
    pageSize: $pageSize
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
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
    query Zoom2PeopleAmount($text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2Amount(
    entityName: People
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
    total
  }
}
    `;
export const Zoom2PublicationsDocument = gql`
    query Zoom2Publications($page: Int!, $pageSize: Int!, $text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2(
    entityName: Publications
    page: $page
    pageSize: $pageSize
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
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
    query Zoom2PublicationsAmount($text: String, $locale: Locale!, $selectedFilterSuggestions: [SelectedFilterSuggestion!]) {
  zoomLevel2Amount(
    entityName: Publications
    text: $text
    locale: $locale
    selectedFilterSuggestions: $selectedFilterSuggestions
  ) {
    total
  }
}
    `;
export const ZoomLevel3ArchiveDocument = gql`
    query ZoomLevel3Archive($id: String!, $locale: Locale!) {
  zoomLevel3Archive(id: $id, locale: $locale) {
    __typename
    id
    title
    thumbnail
    description
    asteriskSuggestions {
      asterisk_date_title
      asterisk_name_title
      asterisk_subject_title
      asterisk_date_description
      asterisk_name_description
      asterisk_subject_description
    }
    enrichedSources(locale: $locale) {
      externalSourceType
      externalSourceUrl
      __typename
      id
      title
      thumbnail
      description
    }
  }
}
    `;
export const ZoomLevel3ArchiveRecordDocument = gql`
    query ZoomLevel3ArchiveRecord($id: String!, $locale: Locale!) {
  archivesRecordZoomLevel3(id: $id, locale: $locale) {
    __typename
    referenceCode
    titleType
    descriptionLevel
    size
    period
    access
    photographCreator
    rights
    permanentLink
    externalSource
    description
    custodialHistory
    systemOfArrangement
    sources
    existence
    existenceLocation
    asteriskSuggestions {
      asterisk_date_subject
      asterisk_name_subject
      asterisk_subject_subject
      asterisk_date_location
      asterisk_name_location
      asterisk_subject_location
      asterisk_date_content
      asterisk_name_content
      asterisk_subject_content
    }
    enrichedSources(locale: $locale) {
      id
      externalSourceType
      externalSourceUrl
      __typename
      referenceCode
      titleType
      descriptionLevel
      size
      period
      access
      photographCreator
      rights
      permanentLink
      externalSource
      description
      custodialHistory
      systemOfArrangement
      sources
      existence
      existenceLocation
    }
  }
}
    `;
export const ZoomLevel3ObjectRecordDocument = gql`
    query ZoomLevel3ObjectRecord($id: String!, $locale: Locale!) {
  objectsRecordZoomLevel3(id: $id, locale: $locale) {
    id
    title
    objectNumber
    objectType
    objectName
    archiveCode
    date
    relatedKeywords
    maker
    materials
    techniques
    hasParts
    dimension
    scale
    creditLine
    rights
    geoKeywords
    permanentLink
    externalSource
    asteriskSuggestions {
      asterisk_date_relatedKeyword
      asterisk_name_relatedKeyword
      asterisk_subject_relatedKeyword
      asterisk_date_geoKeywords
      asterisk_name_geoKeywords
      asterisk_subject_geoKeywords
    }
    enrichedSources(locale: $locale) {
      id
      title
      objectNumber
      objectType
      objectName
      archiveCode
      date
      relatedKeywords
      maker
      materials
      techniques
      hasParts
      dimension
      scale
      creditLine
      rights
      geoKeywords
      permanentLink
      externalSource
    }
  }
}
    `;
export const ZoomLevel3PeopleRecordDocument = gql`
    query ZoomLevel3PeopleRecord($id: String!, $locale: Locale!) {
  peopleRecordZoomLevel3(id: $id, locale: $locale) {
    type
    profession
    nameVariation
    birthDate
    birthPlace
    deathDate
    deathPlace
    nationality
    gender
    period
    association
    permanentLink
    externalSource
    enrichedSources(locale: $locale) {
      id
      externalSourceType
      externalSourceUrl
      type
      profession
      nameVariation
      birthDate
      birthPlace
      deathDate
      deathPlace
      nationality
      gender
      period
      association
      permanentLink
      externalSource
    }
  }
}
    `;
export const ZoomLevel3PublicationRecordDocument = gql`
    query ZoomLevel3PublicationRecord($id: String!, $locale: Locale!) {
  publicationsRecordZoomLevel3(id: $id, locale: $locale) {
    objectNumber
    subType
    authors
    authorRole
    publisher
    yearOfPublication
    placeOfPublication
    isbn
    annotation
    codeOfArchive
    edition
    illustration
    pages
    language
    series
    number
    category
    relatedKeyword
    geoKeyword
    availability
    permanentLink
    externalSource
    enrichedSources(locale: $locale) {
      id
      externalSourceType
      externalSourceUrl
      objectNumber
      subType
      authors
      authorRole
      publisher
      yearOfPublication
      placeOfPublication
      isbn
      annotation
      codeOfArchive
      edition
      illustration
      pages
      language
      series
      number
      category
      relatedKeyword
      geoKeyword
      availability
      permanentLink
      externalSource
    }
  }
}
    `;
export const StoryHoverRecordRelationsDocument = gql`
    query StoryHoverRecordRelations($id: String!, $locale: Locale!) {
  storyWithoutRelations(id: $id, locale: $locale) {
    data {
      id
      attributes {
        title
        shortDescription
        author {
          data {
            id
            attributes {
              firstName
              lastName
            }
          }
        }
      }
    }
  }
}
    `;
export const ArchiveRecordRelationsDocument = gql`
    query ArchiveRecordRelations($id: String!, $type: EntityNames!, $locale: Locale!, $page: Int!, $pageSize: Int!) {
  archivesRecordRelations(
    type: $type
    id: $id
    locale: $locale
    page: $page
    pageSize: $pageSize
  ) {
    idRelation
    titleR
    referenceNumber
    period
    asterisk_date_person
    asterisk_name_person
    asterisk_subject_person
  }
}
    `;
export const ObjectRecordRelationsDocument = gql`
    query ObjectRecordRelations($id: String!, $type: EntityNames!, $locale: Locale!, $page: Int!, $pageSize: Int!) {
  objectRecordRelations(
    type: $type
    id: $id
    locale: $locale
    page: $page
    pageSize: $pageSize
  ) {
    idRelation
    titleR
    referenceNumber
    period
    asterisk_date_person
    asterisk_name_person
    asterisk_subject_person
  }
}
    `;
export const PeopleRecordRelationsDocument = gql`
    query PeopleRecordRelations($id: String!, $type: EntityNames!, $locale: Locale!, $page: Int!, $pageSize: Int!) {
  peopleRecordRelations(
    type: $type
    id: $id
    locale: $locale
    page: $page
    pageSize: $pageSize
  ) {
    idRelation
    relationName
    titleR
    occupation
    period
  }
}
    `;
export const PublicationRecordRelationsDocument = gql`
    query PublicationRecordRelations($id: String!, $type: EntityNames!, $locale: Locale!, $page: Int!, $pageSize: Int!) {
  publicationRecordRelations(
    type: $type
    id: $id
    locale: $locale
    page: $page
    pageSize: $pageSize
  ) {
    idRelation
    titleR
    typePub
    yearPub
  }
}
    `;
export const ArchivesRecordRelationsCountDocument = gql`
    query ArchivesRecordRelationsCount($id: String!, $type: EntityNames!) {
  archivesRecordRelationsCount(type: $type, id: $id) {
    total
  }
}
    `;
export const ObjectRecordRelationsCountDocument = gql`
    query ObjectRecordRelationsCount($id: String!, $type: EntityNames!) {
  objectRecordRelationsCount(type: $type, id: $id) {
    total
  }
}
    `;
export const PeopleRecordRelationsCountDocument = gql`
    query PeopleRecordRelationsCount($id: String!, $type: EntityNames!) {
  peopleRecordRelationsCount(type: $type, id: $id) {
    total
  }
}
    `;
export const PublicationsRecordRelationsCountDocument = gql`
    query PublicationsRecordRelationsCount($id: String!, $type: EntityNames!) {
  publicationsRecordRelationsCount(type: $type, id: $id) {
    total
  }
}
    `;
export const ArchivesRelationsDocument = gql`
    query ArchivesRelations($id: String!, $page: Int!, $locale: Locale!) {
  relations(type: Archives, id: $id, page: $page, locale: $locale) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const StoryRelationsCountDocument = gql`
    query StoryRelationsCount($id: String!, $locale: Locale!) {
  storyRelationsCount(storyId: $id, locale: $locale) {
    linkedTriplyRecords {
      archives
      people
      publications
      objects
    }
    linkedStoryCount
  }
}
    `;
export const ObjectRelationsDocument = gql`
    query ObjectRelations($id: String!, $page: Int!, $locale: Locale!) {
  relations(type: Objects, id: $id, page: $page, locale: $locale) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const PeopleRelationsDocument = gql`
    query PeopleRelations($id: String!, $page: Int!, $locale: Locale!) {
  relations(type: People, id: $id, page: $page, locale: $locale) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const PublicationRelationsDocument = gql`
    query PublicationRelations($id: String!, $page: Int!, $locale: Locale!) {
  relations(type: Publications, id: $id, page: $page, locale: $locale) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const StoriesRelationsDocument = gql`
    query StoriesRelations($id: String!, $page: Int!, $locale: Locale!) {
  relations(type: Stories, id: $id, page: $page, locale: $locale) {
    ...zoom3RelationsFragment
  }
}
    ${Zoom3RelationsFragmentFragmentDoc}`;
export const StoriesRelationForRecordDocument = gql`
    query StoriesRelationForRecord($id: String!, $type: EntityNames!, $locale: Locale!) {
  zoomLevel3StoriesRelationsForRecord(type: $type, id: $id, locale: $locale) {
    type
    total
    stories {
      id
      __typename
      attributes {
        title
        components {
          ... on ComponentModulesImage {
            ...imageModuleFragment
          }
        }
        author {
          data {
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
    ${ImageModuleFragmentFragmentDoc}`;
export const ZoomLevel3ObjectDocument = gql`
    query ZoomLevel3Object($id: String!, $locale: Locale!) {
  zoomLevel3Object(id: $id, locale: $locale) {
    id
    __typename
    title
    thumbnail
    description
    asteriskSuggestions {
      asterisk_date_title
      asterisk_name_title
      asterisk_subject_title
    }
    enrichedSources(locale: $locale) {
      externalSourceType
      externalSourceUrl
      __typename
      id
      title
      thumbnail
      description
    }
  }
}
    `;
export const ZoomLevel3PublicationDocument = gql`
    query ZoomLevel3Publication($id: String!, $locale: Locale!) {
  zoomLevel3Publication(id: $id, locale: $locale) {
    id
    __typename
    title
    thumbnail
    description
    enrichedSources(locale: $locale) {
      externalSourceType
      externalSourceUrl
      __typename
      id
      title
      thumbnail
      description
    }
  }
}
    `;
export const ZoomLevel3PeopleDocument = gql`
    query ZoomLevel3People($id: String!, $locale: Locale!) {
  zoomLevel3People(id: $id, locale: $locale) {
    __typename
    id
    title
    thumbnail
    description
    asteriskSuggestions {
      asterisk_subject_description
      asterisk_date_description
      asterisk_name_description
    }
    enrichedSources(locale: $locale) {
      externalSourceType
      externalSourceUrl
      __typename
      id
      title
      thumbnail
      description
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    filterSuggestions(variables: FilterSuggestionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilterSuggestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FilterSuggestionsQuery>(FilterSuggestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'filterSuggestions', 'query');
    },
    highlightedHomepageThemes(variables: HighlightedHomepageThemesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HighlightedHomepageThemesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HighlightedHomepageThemesQuery>(HighlightedHomepageThemesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'highlightedHomepageThemes', 'query');
    },
    homepage(variables: HomepageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomepageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomepageQuery>(HomepageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'homepage', 'query');
    },
    landingPageObject(variables: LandingPageObjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPageObjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageObjectQuery>(LandingPageObjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingPageObject', 'query');
    },
    landingPageArchive(variables: LandingPageArchiveQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPageArchiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageArchiveQuery>(LandingPageArchiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingPageArchive', 'query');
    },
    landingPagePeople(variables: LandingPagePeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPagePeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPagePeopleQuery>(LandingPagePeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingPagePeople', 'query');
    },
    landingPagePublication(variables: LandingPagePublicationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LandingPagePublicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPagePublicationQuery>(LandingPagePublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'landingPagePublication', 'query');
    },
    searchAll(variables: SearchAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchAllQuery>(SearchAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchAll', 'query');
    },
    stories(variables: StoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesQuery>(StoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stories', 'query');
    },
    searchByStories(variables: SearchByStoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchByStoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchByStoriesQuery>(SearchByStoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchByStories', 'query');
    },
    storiesRealtedWithinTheme(variables: StoriesRealtedWithinThemeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesRealtedWithinThemeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesRealtedWithinThemeQuery>(StoriesRealtedWithinThemeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storiesRealtedWithinTheme', 'query');
    },
    storiesWithoutRelations(variables: StoriesWithoutRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesWithoutRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesWithoutRelationsQuery>(StoriesWithoutRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storiesWithoutRelations', 'query');
    },
    storyById(variables: StoryByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryByIdQuery>(StoryByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyById', 'query');
    },
    storyImages(variables: StoryImagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryImagesQuery>(StoryImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyImages', 'query');
    },
    storyMetaById(variables: StoryMetaByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryMetaByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryMetaByIdQuery>(StoryMetaByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storyMetaById', 'query');
    },
    themes(variables: ThemesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ThemesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ThemesQuery>(ThemesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'themes', 'query');
    },
    totalCounter(variables: TotalCounterQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TotalCounterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TotalCounterQuery>(TotalCounterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'totalCounter', 'query');
    },
    ArchivesZoomRecordHover(variables: ArchivesZoomRecordHoverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchivesZoomRecordHoverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchivesZoomRecordHoverQuery>(ArchivesZoomRecordHoverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchivesZoomRecordHover', 'query');
    },
    ObjectsZoomRecordHover(variables: ObjectsZoomRecordHoverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ObjectsZoomRecordHoverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObjectsZoomRecordHoverQuery>(ObjectsZoomRecordHoverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ObjectsZoomRecordHover', 'query');
    },
    PeopleZoomRecordHover(variables: PeopleZoomRecordHoverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PeopleZoomRecordHoverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PeopleZoomRecordHoverQuery>(PeopleZoomRecordHoverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PeopleZoomRecordHover', 'query');
    },
    PublicationsZoomRecordHover(variables: PublicationsZoomRecordHoverQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationsZoomRecordHoverQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationsZoomRecordHoverQuery>(PublicationsZoomRecordHoverDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PublicationsZoomRecordHover', 'query');
    },
    searchBySelectedHighlights(variables: SearchBySelectedHighlightsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchBySelectedHighlightsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchBySelectedHighlightsQuery>(SearchBySelectedHighlightsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchBySelectedHighlights', 'query');
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
    Zoom2ArchiveAmount(variables: Zoom2ArchiveAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ArchiveAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ArchiveAmountQuery>(Zoom2ArchiveAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2ArchiveAmount', 'query');
    },
    Zoom2Objects(variables: Zoom2ObjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ObjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ObjectsQuery>(Zoom2ObjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Objects', 'query');
    },
    Zoom2ObjectsAmount(variables: Zoom2ObjectsAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2ObjectsAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2ObjectsAmountQuery>(Zoom2ObjectsAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2ObjectsAmount', 'query');
    },
    Zoom2People(variables: Zoom2PeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PeopleQuery>(Zoom2PeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2People', 'query');
    },
    Zoom2PeopleAmount(variables: Zoom2PeopleAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PeopleAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PeopleAmountQuery>(Zoom2PeopleAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2PeopleAmount', 'query');
    },
    Zoom2Publications(variables: Zoom2PublicationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PublicationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PublicationsQuery>(Zoom2PublicationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2Publications', 'query');
    },
    Zoom2PublicationsAmount(variables: Zoom2PublicationsAmountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Zoom2PublicationsAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Zoom2PublicationsAmountQuery>(Zoom2PublicationsAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Zoom2PublicationsAmount', 'query');
    },
    ZoomLevel3Archive(variables: ZoomLevel3ArchiveQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ArchiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ArchiveQuery>(ZoomLevel3ArchiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Archive', 'query');
    },
    ZoomLevel3ArchiveRecord(variables: ZoomLevel3ArchiveRecordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ArchiveRecordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ArchiveRecordQuery>(ZoomLevel3ArchiveRecordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3ArchiveRecord', 'query');
    },
    ZoomLevel3ObjectRecord(variables: ZoomLevel3ObjectRecordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ObjectRecordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ObjectRecordQuery>(ZoomLevel3ObjectRecordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3ObjectRecord', 'query');
    },
    ZoomLevel3PeopleRecord(variables: ZoomLevel3PeopleRecordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PeopleRecordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PeopleRecordQuery>(ZoomLevel3PeopleRecordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3PeopleRecord', 'query');
    },
    ZoomLevel3PublicationRecord(variables: ZoomLevel3PublicationRecordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PublicationRecordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PublicationRecordQuery>(ZoomLevel3PublicationRecordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3PublicationRecord', 'query');
    },
    StoryHoverRecordRelations(variables: StoryHoverRecordRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryHoverRecordRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryHoverRecordRelationsQuery>(StoryHoverRecordRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StoryHoverRecordRelations', 'query');
    },
    ArchiveRecordRelations(variables: ArchiveRecordRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchiveRecordRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchiveRecordRelationsQuery>(ArchiveRecordRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchiveRecordRelations', 'query');
    },
    ObjectRecordRelations(variables: ObjectRecordRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ObjectRecordRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObjectRecordRelationsQuery>(ObjectRecordRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ObjectRecordRelations', 'query');
    },
    PeopleRecordRelations(variables: PeopleRecordRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PeopleRecordRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PeopleRecordRelationsQuery>(PeopleRecordRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PeopleRecordRelations', 'query');
    },
    PublicationRecordRelations(variables: PublicationRecordRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationRecordRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationRecordRelationsQuery>(PublicationRecordRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PublicationRecordRelations', 'query');
    },
    ArchivesRecordRelationsCount(variables: ArchivesRecordRelationsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchivesRecordRelationsCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchivesRecordRelationsCountQuery>(ArchivesRecordRelationsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchivesRecordRelationsCount', 'query');
    },
    ObjectRecordRelationsCount(variables: ObjectRecordRelationsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ObjectRecordRelationsCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ObjectRecordRelationsCountQuery>(ObjectRecordRelationsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ObjectRecordRelationsCount', 'query');
    },
    PeopleRecordRelationsCount(variables: PeopleRecordRelationsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PeopleRecordRelationsCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PeopleRecordRelationsCountQuery>(PeopleRecordRelationsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PeopleRecordRelationsCount', 'query');
    },
    PublicationsRecordRelationsCount(variables: PublicationsRecordRelationsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PublicationsRecordRelationsCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublicationsRecordRelationsCountQuery>(PublicationsRecordRelationsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PublicationsRecordRelationsCount', 'query');
    },
    ArchivesRelations(variables: ArchivesRelationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchivesRelationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchivesRelationsQuery>(ArchivesRelationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchivesRelations', 'query');
    },
    StoryRelationsCount(variables: StoryRelationsCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoryRelationsCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryRelationsCountQuery>(StoryRelationsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StoryRelationsCount', 'query');
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
    StoriesRelationForRecord(variables: StoriesRelationForRecordQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoriesRelationForRecordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoriesRelationForRecordQuery>(StoriesRelationForRecordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StoriesRelationForRecord', 'query');
    },
    ZoomLevel3Object(variables: ZoomLevel3ObjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3ObjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3ObjectQuery>(ZoomLevel3ObjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Object', 'query');
    },
    ZoomLevel3Publication(variables: ZoomLevel3PublicationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PublicationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PublicationQuery>(ZoomLevel3PublicationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3Publication', 'query');
    },
    ZoomLevel3People(variables: ZoomLevel3PeopleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ZoomLevel3PeopleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZoomLevel3PeopleQuery>(ZoomLevel3PeopleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ZoomLevel3People', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;