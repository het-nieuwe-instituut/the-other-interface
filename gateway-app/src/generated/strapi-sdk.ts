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
    DateTime: any
    HomepageComponentsDynamicZoneInput: any
    I18NLocaleCode: any
    JSON: any
    LandingpageComponentsDynamicZoneInput: any
    MenupageComponentsDynamicZoneInput: any
    StoryComponentsDynamicZoneInput: any
    Upload: any
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

export type ComponentModulesImage = {
    __typename?: 'ComponentModulesImage'
    alt_text?: Maybe<Scalars['String']>
    caption?: Maybe<Scalars['String']>
    id: Scalars['ID']
    image: UploadFileEntityResponse
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

export type ComponentModulesTableModule = {
    __typename?: 'ComponentModulesTableModule'
    id: Scalars['ID']
    table?: Maybe<TableEntityResponse>
    tableModuleSpacingBottom?: Maybe<Enum_Componentmodulestablemodule_Tablemodulespacingbottom>
    tableModuleSpacingTop?: Maybe<Enum_Componentmodulestablemodule_Tablemodulespacingtop>
}

export type ComponentModulesTextModule = {
    __typename?: 'ComponentModulesTextModule'
    Richtext?: Maybe<Scalars['String']>
    id: Scalars['ID']
    textModuleSpacingBottom?: Maybe<Enum_Componentmodulestextmodule_Textmodulespacingbottom>
    textModuleSpacingTop?: Maybe<Enum_Componentmodulestextmodule_Textmodulespacingtop>
}

export type ComponentModulesTitleModule = {
    __typename?: 'ComponentModulesTitleModule'
    Title?: Maybe<Scalars['String']>
    id: Scalars['ID']
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

export enum Enum_Componentmodulestablemodule_Tablemodulespacingbottom {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum Enum_Componentmodulestablemodule_Tablemodulespacingtop {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum Enum_Componentmodulestextmodule_Textmodulespacingbottom {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
}

export enum Enum_Componentmodulestextmodule_Textmodulespacingtop {
    Lg = 'lg',
    Md = 'md',
    Sm = 'sm',
    Xl = 'xl',
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
    | ComponentCoreTableBody
    | ComponentCoreTableBodyItem
    | ComponentCoreTableHead
    | ComponentCoreTableHeadItem
    | ComponentModulesImage
    | ComponentModulesImageCarousel
    | ComponentModulesPullquote
    | ComponentModulesTableModule
    | ComponentModulesTextModule
    | ComponentModulesTitleModule
    | Homepage
    | I18NLocale
    | Landingpage
    | Menupage
    | Story
    | Table
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
    | ComponentModulesImage
    | ComponentModulesImageCarousel
    | ComponentModulesPullquote
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
    | ComponentModulesImage
    | ComponentModulesImageCarousel
    | ComponentModulesPullquote
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
    | ComponentModulesImage
    | ComponentModulesImageCarousel
    | ComponentModulesPullquote
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
    createHomepageLocalization?: Maybe<HomepageEntityResponse>
    createLandingpage?: Maybe<LandingpageEntityResponse>
    createLandingpageLocalization?: Maybe<LandingpageEntityResponse>
    createMenupage?: Maybe<MenupageEntityResponse>
    createMenupageLocalization?: Maybe<MenupageEntityResponse>
    createStory?: Maybe<StoryEntityResponse>
    createStoryLocalization?: Maybe<StoryEntityResponse>
    createTable?: Maybe<TableEntityResponse>
    createUploadFile?: Maybe<UploadFileEntityResponse>
    createUploadFolder?: Maybe<UploadFolderEntityResponse>
    /** Create a new role */
    createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse
    deleteHomepage?: Maybe<HomepageEntityResponse>
    deleteLandingpage?: Maybe<LandingpageEntityResponse>
    deleteMenupage?: Maybe<MenupageEntityResponse>
    deleteStory?: Maybe<StoryEntityResponse>
    deleteTable?: Maybe<TableEntityResponse>
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
    updateFileInfo: UploadFileEntityResponse
    updateHomepage?: Maybe<HomepageEntityResponse>
    updateLandingpage?: Maybe<LandingpageEntityResponse>
    updateMenupage?: Maybe<MenupageEntityResponse>
    updateStory?: Maybe<StoryEntityResponse>
    updateTable?: Maybe<TableEntityResponse>
    updateUploadFile?: Maybe<UploadFileEntityResponse>
    updateUploadFolder?: Maybe<UploadFolderEntityResponse>
    /** Update an existing role */
    updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
    upload: UploadFileEntityResponse
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

export type MutationDeleteHomepageArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteLandingpageArgs = {
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
    homepage?: Maybe<HomepageEntityResponse>
    i18NLocale?: Maybe<I18NLocaleEntityResponse>
    i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
    landingpage?: Maybe<LandingpageEntityResponse>
    landingpages?: Maybe<LandingpageEntityResponseCollection>
    me?: Maybe<UsersPermissionsMe>
    menupage?: Maybe<MenupageEntityResponse>
    menupages?: Maybe<MenupageEntityResponseCollection>
    stories?: Maybe<StoryEntityResponseCollection>
    story?: Maybe<StoryEntityResponse>
    table?: Maybe<TableEntityResponse>
    tables?: Maybe<TableEntityResponseCollection>
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
    components?: Maybe<Array<Maybe<StoryComponentsDynamicZone>>>
    createdAt?: Maybe<Scalars['DateTime']>
    locale?: Maybe<Scalars['String']>
    localizations?: Maybe<StoryRelationResponseCollection>
    publishedAt?: Maybe<Scalars['DateTime']>
    slug?: Maybe<Scalars['String']>
    title: Scalars['String']
    triply_people?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['DateTime']>
}

export type StoryLocalizationsArgs = {
    filters?: InputMaybe<StoryFiltersInput>
    pagination?: InputMaybe<PaginationArg>
    publicationState?: InputMaybe<PublicationState>
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type StoryComponentsDynamicZone =
    | ComponentModulesImage
    | ComponentModulesImageCarousel
    | ComponentModulesPullquote
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
    createdAt?: InputMaybe<DateTimeFilterInput>
    id?: InputMaybe<IdFilterInput>
    locale?: InputMaybe<StringFilterInput>
    localizations?: InputMaybe<StoryFiltersInput>
    not?: InputMaybe<StoryFiltersInput>
    or?: InputMaybe<Array<InputMaybe<StoryFiltersInput>>>
    publishedAt?: InputMaybe<DateTimeFilterInput>
    slug?: InputMaybe<StringFilterInput>
    title?: InputMaybe<StringFilterInput>
    triply_people?: InputMaybe<StringFilterInput>
    updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type StoryInput = {
    components?: InputMaybe<Array<Scalars['StoryComponentsDynamicZoneInput']>>
    publishedAt?: InputMaybe<Scalars['DateTime']>
    slug?: InputMaybe<Scalars['String']>
    title?: InputMaybe<Scalars['String']>
    triply_people?: InputMaybe<Scalars['String']>
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

export type StoriesQueryVariables = Exact<{ [key: string]: never }>

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
                triply_people?: string | null
            } | null
        }>
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
        triply_people?: string | null
    } | null
}

export const StoryFragmentFragmentDoc = gql`
    fragment StoryFragment on StoryEntity {
        id
        attributes {
            title
            slug
            createdAt
            updatedAt
            publishedAt
            triply_people
        }
    }
`
export const StoriesDocument = gql`
    query stories {
        stories {
            data {
                ...StoryFragment
            }
        }
    }
    ${StoryFragmentFragmentDoc}
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
