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

export type ComponentCoreCarouselItem = {
    __typename?: 'ComponentCoreCarouselItem'
    description?: Maybe<Scalars['String']>
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    picture?: Maybe<UploadFileEntityResponse>
    type?: Maybe<Enum_Componentcorecarouselitem_Type>
    uri_id?: Maybe<Scalars['String']>
}

export type ComponentCoreCarouselItemFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselItemFiltersInput>>>
    description?: InputMaybe<StringFilterInput>
    name?: InputMaybe<StringFilterInput>
    not?: InputMaybe<ComponentCoreCarouselItemFiltersInput>
    or?: InputMaybe<Array<InputMaybe<ComponentCoreCarouselItemFiltersInput>>>
    type?: InputMaybe<StringFilterInput>
    uri_id?: InputMaybe<StringFilterInput>
}

export type ComponentCoreModuleLayouts = {
    __typename?: 'ComponentCoreModuleLayouts'
    id: Scalars['ID']
    spacingBottom?: Maybe<Enum_Componentcoremodulelayouts_Spacingbottom>
    spacingTop?: Maybe<Enum_Componentcoremodulelayouts_Spacingtop>
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

export type ComponentModulesImage = {
    __typename?: 'ComponentModulesImage'
    alt_text?: Maybe<Scalars['String']>
    caption?: Maybe<Scalars['String']>
    id: Scalars['ID']
    image: UploadFileEntityResponse
    imageModuleLayout: ComponentCoreModuleLayouts
}

export type ComponentModulesImageCarousel = {
    __typename?: 'ComponentModulesImageCarousel'
    description?: Maybe<Scalars['String']>
    id: Scalars['ID']
    imageCarouselModuleLayout: ComponentCoreModuleLayouts
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
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum Enum_Componentcoremodulelayouts_Spacingtop {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum Enum_Componentcorepublicationdate_Displaytype {
    Date = 'date',
    Year = 'year',
}

export enum Enum_Componentmodulesbuttonsmodule_Buttonstyle {
    Default = 'default',
    Large = 'large',
}

export enum Enum_Componentmodulescarousel_Type {
    Combined = 'Combined',
    Highlights = 'Highlights',
    Makers = 'Makers',
    Themes = 'Themes',
}

export enum Enum_Triplyrecord_Type {
    Archive = 'archive',
    Media = 'media',
    Object = 'object',
    People = 'people',
    Publication = 'publication',
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
    slug?: Maybe<Scalars['String']>
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

export type StoryTriplyRecordsArgs = {
    filters?: InputMaybe<TriplyRecordFiltersInput>
    pagination?: InputMaybe<PaginationArg>
    publicationState?: InputMaybe<PublicationState>
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryComponentsDynamicZone =
    | ComponentModulesButtonsModule
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

export type TriplyRecord = {
    __typename?: 'TriplyRecord'
    createdAt?: Maybe<Scalars['DateTime']>
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
    not?: InputMaybe<TriplyRecordFiltersInput>
    or?: InputMaybe<Array<InputMaybe<TriplyRecordFiltersInput>>>
    publishedAt?: InputMaybe<DateTimeFilterInput>
    recordId?: InputMaybe<StringFilterInput>
    stories?: InputMaybe<StoryFiltersInput>
    type?: InputMaybe<StringFilterInput>
    updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type TriplyRecordInput = {
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
            pagination: { __typename?: 'Pagination'; total: number; page: number; pageSize: number; pageCount: number }
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
            pagination: { __typename?: 'Pagination'; total: number; page: number; pageSize: number; pageCount: number }
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
                slug?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
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
        }>
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
                slug?: string | null
                createdAt?: any | null
                updatedAt?: any | null
                publishedAt?: any | null
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
            attributes?: { __typename?: 'Story'; title: string } | null
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
        meta: { __typename?: 'ResponseCollectionMeta'; pagination: { __typename?: 'Pagination'; total: number } }
    } | null
}

export type StoryFragmentFragment = {
    __typename?: 'StoryEntity'
    id?: string | null
    attributes?: {
        __typename?: 'Story'
        title: string
        slug?: string | null
        createdAt?: any | null
        updatedAt?: any | null
        publishedAt?: any | null
        triplyRecords?: {
            __typename?: 'TriplyRecordRelationResponseCollection'
            data: Array<{
                __typename?: 'TriplyRecordEntity'
                id?: string | null
                attributes?: { __typename?: 'TriplyRecord'; recordId: string; type: Enum_Triplyrecord_Type } | null
            }>
        } | null
    } | null
}

export type BaseTriplyRecordFragmentFragment = {
    __typename?: 'TriplyRecordEntity'
    id?: string | null
    attributes?: { __typename?: 'TriplyRecord'; recordId: string; type: Enum_Triplyrecord_Type } | null
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
export const BaseTriplyRecordFragmentFragmentDoc = gql`
    fragment BaseTriplyRecordFragment on TriplyRecordEntity {
        id
        attributes {
            recordId
            type
        }
    }
`
export const StoryFragmentFragmentDoc = gql`
    fragment StoryFragment on StoryEntity {
        id
        attributes {
            title
            slug
            createdAt
            updatedAt
            publishedAt
            triplyRecords {
                data {
                    ...BaseTriplyRecordFragment
                }
            }
        }
    }
    ${BaseTriplyRecordFragmentFragmentDoc}
`
export const AuthorDocument = gql`
    query author($id: ID) {
        author {
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
        authors {
            data {
                ...AuthorFragment
            }
            meta {
                pagination {
                    total
                    page
                    pageSize
                    pageCount
                }
            }
        }
    }
    ${AuthorFragmentFragmentDoc}
`
export const LocationDocument = gql`
    query location($id: ID, $locale: I18NLocaleCode) {
        location {
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
        locations {
            data {
                ...LocationFragment
            }
            meta {
                pagination {
                    total
                    page
                    pageSize
                    pageCount
                }
            }
        }
    }
    ${LocationFragmentFragmentDoc}
`
export const StoriesDocument = gql`
    query stories(
        $filters: StoryFiltersInput
        $pagination: PaginationArg
        $sort: [String]
        $publicationState: PublicationState
        $locale: I18NLocaleCode
    ) {
        stories {
            data {
                ...StoryFragment
            }
        }
    }
    ${StoryFragmentFragmentDoc}
`
export const StoryDocument = gql`
    query story($id: ID, $locale: I18NLocaleCode) {
        story {
            data {
                ...StoryFragment
            }
        }
    }
    ${StoryFragmentFragmentDoc}
`
export const StoriesLinkedToTriplyRecordDocument = gql`
    query storiesLinkedToTriplyRecord($recordId: String!, $type: String!) {
        stories(filters: { triplyRecords: { recordId: { eq: $recordId }, type: { eq: $type } } }) {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }
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

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        author(variables?: AuthorQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<AuthorQuery> {
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
        authors(variables?: AuthorsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<AuthorsQuery> {
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
        stories(variables?: StoriesQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<StoriesQuery> {
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
        story(variables?: StoryQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<StoryQuery> {
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
        storiesLinkedToTriplyRecord(
            variables: StoriesLinkedToTriplyRecordQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<StoriesLinkedToTriplyRecordQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<StoriesLinkedToTriplyRecordQuery>(StoriesLinkedToTriplyRecordDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'storiesLinkedToTriplyRecord',
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
    }
}
export type Sdk = ReturnType<typeof getSdk>
