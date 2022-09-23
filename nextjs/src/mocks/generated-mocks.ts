import { Author, AuthorEntity, AuthorEntityResponse, AuthorEntityResponseCollection, AuthorFiltersInput, AuthorInput, BooleanFilterInput, ComponentCoreButton, ComponentCoreButtonFiltersInput, ComponentCoreCarouselItem, ComponentCoreCarouselItemFiltersInput, ComponentCoreModuleLayouts, ComponentCorePageHeader, ComponentCorePublicationDate, ComponentCorePublicationDateFiltersInput, ComponentCorePublicationDateInput, ComponentCoreTableBody, ComponentCoreTableBodyFiltersInput, ComponentCoreTableBodyInput, ComponentCoreTableBodyItem, ComponentCoreTableBodyItemFiltersInput, ComponentCoreTableBodyItemInput, ComponentCoreTableHead, ComponentCoreTableHeadFiltersInput, ComponentCoreTableHeadInput, ComponentCoreTableHeadItem, ComponentCoreTableHeadItemFiltersInput, ComponentCoreTableHeadItemInput, ComponentCoreTimeframe, ComponentCoreTimeframeFiltersInput, ComponentCoreTimeframeInput, ComponentModulesButtonsModule, ComponentModulesCarousel, ComponentModulesImage, ComponentModulesImageCarousel, ComponentModulesPullquote, ComponentModulesSubtitle, ComponentModulesTableModule, ComponentModulesTextModule, ComponentModulesTitleModule, ComponentTriplyPeople, ComponentTriplyPeopleFiltersInput, ComponentTriplyPeopleInput, DateFilterInput, DateTimeFilterInput, Error, FileInfoInput, FloatFilterInput, Homepage, HomepageEntity, HomepageEntityResponse, HomepageInput, HomepageRelationResponseCollection, I18NLocale, I18NLocaleEntity, I18NLocaleEntityResponse, I18NLocaleEntityResponseCollection, I18NLocaleFiltersInput, IdFilterInput, IntFilterInput, JsonFilterInput, Landingpage, LandingpageEntity, LandingpageEntityResponse, LandingpageEntityResponseCollection, LandingpageFiltersInput, LandingpageInput, LandingpageRelationResponseCollection, Location, LocationEntity, LocationEntityResponse, LocationEntityResponseCollection, LocationFiltersInput, LocationInput, LocationRelationResponseCollection, LongFilterInput, Menupage, MenupageEntity, MenupageEntityResponse, MenupageEntityResponseCollection, MenupageFiltersInput, MenupageInput, MenupageRelationResponseCollection, Mutation, Pagination, PaginationArg, Query, ResponseCollectionMeta, Story, StoryEntity, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput, StoryInput, StoryRelationResponseCollection, StringFilterInput, Table, TableEntity, TableEntityResponse, TableEntityResponseCollection, TableFiltersInput, TableInput, UploadFile, UploadFileEntity, UploadFileEntityResponse, UploadFileEntityResponseCollection, UploadFileFiltersInput, UploadFileInput, UploadFileRelationResponseCollection, UploadFolder, UploadFolderEntity, UploadFolderEntityResponse, UploadFolderEntityResponseCollection, UploadFolderFiltersInput, UploadFolderInput, UploadFolderRelationResponseCollection, UsersPermissionsCreateRolePayload, UsersPermissionsDeleteRolePayload, UsersPermissionsLoginInput, UsersPermissionsLoginPayload, UsersPermissionsMe, UsersPermissionsMeRole, UsersPermissionsPasswordPayload, UsersPermissionsPermission, UsersPermissionsPermissionEntity, UsersPermissionsPermissionFiltersInput, UsersPermissionsPermissionRelationResponseCollection, UsersPermissionsRegisterInput, UsersPermissionsRole, UsersPermissionsRoleEntity, UsersPermissionsRoleEntityResponse, UsersPermissionsRoleEntityResponseCollection, UsersPermissionsRoleFiltersInput, UsersPermissionsRoleInput, UsersPermissionsUpdateRolePayload, UsersPermissionsUser, UsersPermissionsUserEntity, UsersPermissionsUserEntityResponse, UsersPermissionsUserEntityResponseCollection, UsersPermissionsUserFiltersInput, UsersPermissionsUserInput, UsersPermissionsUserRelationResponseCollection, EnumComponentcorecarouselitemType, EnumComponentcoremodulelayoutsSpacingbottom, EnumComponentcoremodulelayoutsSpacingtop, EnumComponentcorepublicationdateDisplaytype, EnumComponentmodulesbuttonsmoduleButtonstyle, EnumComponentmodulescarouselType, PublicationState } from '../generated/graphql';

export const anAuthor = (overrides?: Partial<Author>, _relationshipsToOmit: Array<string> = []): Author => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Author']);
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'distinctio',
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'omnis',
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : 'illo',
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'ipsum',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'rerum',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'hic',
    };
};

export const anAuthorEntity = (overrides?: Partial<AuthorEntity>, _relationshipsToOmit: Array<string> = []): AuthorEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'AuthorEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Author') ? {} as Author : anAuthor({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0a2062cc-e102-46e6-88f9-ba9d3ea2e38f',
    };
};

export const anAuthorEntityResponse = (overrides?: Partial<AuthorEntityResponse>, _relationshipsToOmit: Array<string> = []): AuthorEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'AuthorEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('AuthorEntity') ? {} as AuthorEntity : anAuthorEntity({}, relationshipsToOmit),
    };
};

export const anAuthorEntityResponseCollection = (overrides?: Partial<AuthorEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): AuthorEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'AuthorEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('AuthorEntity') ? {} as AuthorEntity : anAuthorEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const anAuthorFiltersInput = (overrides?: Partial<AuthorFiltersInput>, _relationshipsToOmit: Array<string> = []): AuthorFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'AuthorFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('AuthorFiltersInput') ? {} as AuthorFiltersInput : anAuthorFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('AuthorFiltersInput') ? {} as AuthorFiltersInput : anAuthorFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('AuthorFiltersInput') ? {} as AuthorFiltersInput : anAuthorFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const anAuthorInput = (overrides?: Partial<AuthorInput>, _relationshipsToOmit: Array<string> = []): AuthorInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'AuthorInput']);
    return {
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'aut',
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : 'cum',
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'odio',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'sit',
    };
};

export const aBooleanFilterInput = (overrides?: Partial<BooleanFilterInput>, _relationshipsToOmit: Array<string> = []): BooleanFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'BooleanFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [true],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : [true],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : false,
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : false,
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : true,
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : true,
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : false,
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : false,
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : true,
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [true],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : false,
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : true,
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : true,
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('BooleanFilterInput') ? {} as BooleanFilterInput : aBooleanFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : false,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : false,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [true],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [false],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : true,
    };
};

export const aComponentCoreButton = (overrides?: Partial<ComponentCoreButton>, _relationshipsToOmit: Array<string> = []): ComponentCoreButton => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreButton']);
    return {
        attachment: overrides && overrides.hasOwnProperty('attachment') ? overrides.attachment! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        hasAttachment: overrides && overrides.hasOwnProperty('hasAttachment') ? overrides.hasAttachment! : false,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5742f597-253d-4ebb-af50-de4e5ae6b06e',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'natus',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'autem',
    };
};

export const aComponentCoreButtonFiltersInput = (overrides?: Partial<ComponentCoreButtonFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreButtonFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreButtonFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreButtonFiltersInput') ? {} as ComponentCoreButtonFiltersInput : aComponentCoreButtonFiltersInput({}, relationshipsToOmit)],
        hasAttachment: overrides && overrides.hasOwnProperty('hasAttachment') ? overrides.hasAttachment! : relationshipsToOmit.includes('BooleanFilterInput') ? {} as BooleanFilterInput : aBooleanFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreButtonFiltersInput') ? {} as ComponentCoreButtonFiltersInput : aComponentCoreButtonFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreButtonFiltersInput') ? {} as ComponentCoreButtonFiltersInput : aComponentCoreButtonFiltersInput({}, relationshipsToOmit)],
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
    };
};

export const aComponentCoreCarouselItem = (overrides?: Partial<ComponentCoreCarouselItem>, _relationshipsToOmit: Array<string> = []): ComponentCoreCarouselItem => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreCarouselItem']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'corporis',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e6259d63-611f-4e6c-84e7-28ad8094f5b8',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'adipisci',
        picture: overrides && overrides.hasOwnProperty('picture') ? overrides.picture! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EnumComponentcorecarouselitemType.Highlight,
    };
};

export const aComponentCoreCarouselItemFiltersInput = (overrides?: Partial<ComponentCoreCarouselItemFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreCarouselItemFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreCarouselItemFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreCarouselItemFiltersInput') ? {} as ComponentCoreCarouselItemFiltersInput : aComponentCoreCarouselItemFiltersInput({}, relationshipsToOmit)],
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreCarouselItemFiltersInput') ? {} as ComponentCoreCarouselItemFiltersInput : aComponentCoreCarouselItemFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreCarouselItemFiltersInput') ? {} as ComponentCoreCarouselItemFiltersInput : aComponentCoreCarouselItemFiltersInput({}, relationshipsToOmit)],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
    };
};

export const aComponentCoreModuleLayouts = (overrides?: Partial<ComponentCoreModuleLayouts>, _relationshipsToOmit: Array<string> = []): ComponentCoreModuleLayouts => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreModuleLayouts']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '57280df8-4370-466c-bd69-ed6c9ebdbf6a',
        spacingBottom: overrides && overrides.hasOwnProperty('spacingBottom') ? overrides.spacingBottom! : EnumComponentcoremodulelayoutsSpacingbottom.Lg,
        spacingTop: overrides && overrides.hasOwnProperty('spacingTop') ? overrides.spacingTop! : EnumComponentcoremodulelayoutsSpacingtop.Lg,
    };
};

export const aComponentCorePageHeader = (overrides?: Partial<ComponentCorePageHeader>, _relationshipsToOmit: Array<string> = []): ComponentCorePageHeader => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCorePageHeader']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'dolore',
        content: overrides && overrides.hasOwnProperty('content') ? overrides.content! : 'illum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '56b4f843-e03d-4027-af18-11fa3418caa8',
    };
};

export const aComponentCorePublicationDate = (overrides?: Partial<ComponentCorePublicationDate>, _relationshipsToOmit: Array<string> = []): ComponentCorePublicationDate => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCorePublicationDate']);
    return {
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : '1970-01-16T02:31:32.480Z',
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : EnumComponentcorepublicationdateDisplaytype.Date,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '315f9d7f-1a61-4489-8590-0fb737d3a0af',
    };
};

export const aComponentCorePublicationDateFiltersInput = (overrides?: Partial<ComponentCorePublicationDateFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCorePublicationDateFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCorePublicationDateFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit)],
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : relationshipsToOmit.includes('DateFilterInput') ? {} as DateFilterInput : aDateFilterInput({}, relationshipsToOmit),
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit)],
    };
};

export const aComponentCorePublicationDateInput = (overrides?: Partial<ComponentCorePublicationDateInput>, _relationshipsToOmit: Array<string> = []): ComponentCorePublicationDateInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCorePublicationDateInput']);
    return {
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : '1970-01-12T02:09:01.168Z',
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : EnumComponentcorepublicationdateDisplaytype.Date,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2621920b-860c-4ca6-97fd-1c8dc9a9231f',
    };
};

export const aComponentCoreTableBody = (overrides?: Partial<ComponentCoreTableBody>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBody => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBody']);
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : [relationshipsToOmit.includes('ComponentCoreTableBodyItem') ? {} as ComponentCoreTableBodyItem : aComponentCoreTableBodyItem({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bc6a110f-792c-4f21-bfd3-4f753f778921',
    };
};

export const aComponentCoreTableBodyFiltersInput = (overrides?: Partial<ComponentCoreTableBodyFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBodyFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBodyFiltersInput']);
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : relationshipsToOmit.includes('ComponentCoreTableBodyItemFiltersInput') ? {} as ComponentCoreTableBodyItemFiltersInput : aComponentCoreTableBodyItemFiltersInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreTableBodyFiltersInput') ? {} as ComponentCoreTableBodyFiltersInput : aComponentCoreTableBodyFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreTableBodyFiltersInput') ? {} as ComponentCoreTableBodyFiltersInput : aComponentCoreTableBodyFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreTableBodyFiltersInput') ? {} as ComponentCoreTableBodyFiltersInput : aComponentCoreTableBodyFiltersInput({}, relationshipsToOmit)],
    };
};

export const aComponentCoreTableBodyInput = (overrides?: Partial<ComponentCoreTableBodyInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBodyInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBodyInput']);
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : [relationshipsToOmit.includes('ComponentCoreTableBodyItemInput') ? {} as ComponentCoreTableBodyItemInput : aComponentCoreTableBodyItemInput({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '52febbb7-8443-40dd-a942-48e171bbe992',
    };
};

export const aComponentCoreTableBodyItem = (overrides?: Partial<ComponentCoreTableBodyItem>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBodyItem => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBodyItem']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '32dfba1a-9144-4d51-82b0-dfe908d3b05d',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'cum',
    };
};

export const aComponentCoreTableBodyItemFiltersInput = (overrides?: Partial<ComponentCoreTableBodyItemFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBodyItemFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBodyItemFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreTableBodyItemFiltersInput') ? {} as ComponentCoreTableBodyItemFiltersInput : aComponentCoreTableBodyItemFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreTableBodyItemFiltersInput') ? {} as ComponentCoreTableBodyItemFiltersInput : aComponentCoreTableBodyItemFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreTableBodyItemFiltersInput') ? {} as ComponentCoreTableBodyItemFiltersInput : aComponentCoreTableBodyItemFiltersInput({}, relationshipsToOmit)],
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
    };
};

export const aComponentCoreTableBodyItemInput = (overrides?: Partial<ComponentCoreTableBodyItemInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableBodyItemInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableBodyItemInput']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '70c4e7a1-60b8-4f71-89d5-67d141704c01',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'voluptates',
    };
};

export const aComponentCoreTableHead = (overrides?: Partial<ComponentCoreTableHead>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHead => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHead']);
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : [relationshipsToOmit.includes('ComponentCoreTableHeadItem') ? {} as ComponentCoreTableHeadItem : aComponentCoreTableHeadItem({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'be6b9d26-845a-4fb0-97b6-136da16cdb9e',
    };
};

export const aComponentCoreTableHeadFiltersInput = (overrides?: Partial<ComponentCoreTableHeadFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHeadFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHeadFiltersInput']);
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : relationshipsToOmit.includes('ComponentCoreTableHeadItemFiltersInput') ? {} as ComponentCoreTableHeadItemFiltersInput : aComponentCoreTableHeadItemFiltersInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreTableHeadFiltersInput') ? {} as ComponentCoreTableHeadFiltersInput : aComponentCoreTableHeadFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreTableHeadFiltersInput') ? {} as ComponentCoreTableHeadFiltersInput : aComponentCoreTableHeadFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreTableHeadFiltersInput') ? {} as ComponentCoreTableHeadFiltersInput : aComponentCoreTableHeadFiltersInput({}, relationshipsToOmit)],
    };
};

export const aComponentCoreTableHeadInput = (overrides?: Partial<ComponentCoreTableHeadInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHeadInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHeadInput']);
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : [relationshipsToOmit.includes('ComponentCoreTableHeadItemInput') ? {} as ComponentCoreTableHeadItemInput : aComponentCoreTableHeadItemInput({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '472a32d5-5e46-4315-a1ca-5ae91a544a8e',
    };
};

export const aComponentCoreTableHeadItem = (overrides?: Partial<ComponentCoreTableHeadItem>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHeadItem => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHeadItem']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd30d0267-fc95-405c-9478-85f94f089b2d',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'voluptatem',
    };
};

export const aComponentCoreTableHeadItemFiltersInput = (overrides?: Partial<ComponentCoreTableHeadItemFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHeadItemFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHeadItemFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreTableHeadItemFiltersInput') ? {} as ComponentCoreTableHeadItemFiltersInput : aComponentCoreTableHeadItemFiltersInput({}, relationshipsToOmit)],
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreTableHeadItemFiltersInput') ? {} as ComponentCoreTableHeadItemFiltersInput : aComponentCoreTableHeadItemFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreTableHeadItemFiltersInput') ? {} as ComponentCoreTableHeadItemFiltersInput : aComponentCoreTableHeadItemFiltersInput({}, relationshipsToOmit)],
    };
};

export const aComponentCoreTableHeadItemInput = (overrides?: Partial<ComponentCoreTableHeadItemInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTableHeadItemInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTableHeadItemInput']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0098b46b-a0ac-44b9-b2bb-6e8ab0955db0',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'quas',
    };
};

export const aComponentCoreTimeframe = (overrides?: Partial<ComponentCoreTimeframe>, _relationshipsToOmit: Array<string> = []): ComponentCoreTimeframe => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTimeframe']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dcfa1846-89bf-4421-ad22-7e270213f2a9',
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : 'architecto',
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : 'autem',
    };
};

export const aComponentCoreTimeframeFiltersInput = (overrides?: Partial<ComponentCoreTimeframeFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTimeframeFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTimeframeFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit)],
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : relationshipsToOmit.includes('LongFilterInput') ? {} as LongFilterInput : aLongFilterInput({}, relationshipsToOmit),
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : relationshipsToOmit.includes('LongFilterInput') ? {} as LongFilterInput : aLongFilterInput({}, relationshipsToOmit),
    };
};

export const aComponentCoreTimeframeInput = (overrides?: Partial<ComponentCoreTimeframeInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreTimeframeInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTimeframeInput']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6c954938-7d7e-4811-ad9f-b1a37bde7b40',
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : 'perferendis',
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : 'consequatur',
    };
};

export const aComponentModulesButtonsModule = (overrides?: Partial<ComponentModulesButtonsModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesButtonsModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesButtonsModule']);
    return {
        buttonStyle: overrides && overrides.hasOwnProperty('buttonStyle') ? overrides.buttonStyle! : EnumComponentmodulesbuttonsmoduleButtonstyle.Default,
        buttons: overrides && overrides.hasOwnProperty('buttons') ? overrides.buttons! : [relationshipsToOmit.includes('ComponentCoreButton') ? {} as ComponentCoreButton : aComponentCoreButton({}, relationshipsToOmit)],
        buttonsModuleLayout: overrides && overrides.hasOwnProperty('buttonsModuleLayout') ? overrides.buttonsModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '668ba96a-681d-472e-a861-bb5a737fd889',
    };
};

export const aComponentModulesCarousel = (overrides?: Partial<ComponentModulesCarousel>, _relationshipsToOmit: Array<string> = []): ComponentModulesCarousel => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesCarousel']);
    return {
        buttonText: overrides && overrides.hasOwnProperty('buttonText') ? overrides.buttonText! : 'fugiat',
        buttonUrl: overrides && overrides.hasOwnProperty('buttonUrl') ? overrides.buttonUrl! : 'amet',
        carouselModuleLayout: overrides && overrides.hasOwnProperty('carouselModuleLayout') ? overrides.carouselModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'animi',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '02a9c5e5-9a6b-482e-9ea3-e1114441bf57',
        items: overrides && overrides.hasOwnProperty('items') ? overrides.items! : [relationshipsToOmit.includes('ComponentCoreCarouselItem') ? {} as ComponentCoreCarouselItem : aComponentCoreCarouselItem({}, relationshipsToOmit)],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'beatae',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EnumComponentmodulescarouselType.Combined,
    };
};

export const aComponentModulesImage = (overrides?: Partial<ComponentModulesImage>, _relationshipsToOmit: Array<string> = []): ComponentModulesImage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesImage']);
    return {
        alt_text: overrides && overrides.hasOwnProperty('alt_text') ? overrides.alt_text! : 'sint',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'possimus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8439cee4-53c6-4340-b9ee-9b88e7cafe67',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        imageModuleLayout: overrides && overrides.hasOwnProperty('imageModuleLayout') ? overrides.imageModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
    };
};

export const aComponentModulesImageCarousel = (overrides?: Partial<ComponentModulesImageCarousel>, _relationshipsToOmit: Array<string> = []): ComponentModulesImageCarousel => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesImageCarousel']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'nostrum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'caa291cc-f344-4c8e-b7ad-3f6d9c22152d',
        imageCarouselModuleLayout: overrides && overrides.hasOwnProperty('imageCarouselModuleLayout') ? overrides.imageCarouselModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        images: overrides && overrides.hasOwnProperty('images') ? overrides.images! : relationshipsToOmit.includes('UploadFileRelationResponseCollection') ? {} as UploadFileRelationResponseCollection : anUploadFileRelationResponseCollection({}, relationshipsToOmit),
    };
};

export const aComponentModulesPullquote = (overrides?: Partial<ComponentModulesPullquote>, _relationshipsToOmit: Array<string> = []): ComponentModulesPullquote => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesPullquote']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '473a3cf9-ea98-4cd3-80c7-7052f59eceb2',
        pullquoteModuleLayout: overrides && overrides.hasOwnProperty('pullquoteModuleLayout') ? overrides.pullquoteModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'ut',
    };
};

export const aComponentModulesSubtitle = (overrides?: Partial<ComponentModulesSubtitle>, _relationshipsToOmit: Array<string> = []): ComponentModulesSubtitle => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesSubtitle']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '549df5f1-4269-41cf-a4c5-ce2a8917985b',
        subtitleModuleLayout: overrides && overrides.hasOwnProperty('subtitleModuleLayout') ? overrides.subtitleModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'voluptatem',
    };
};

export const aComponentModulesTableModule = (overrides?: Partial<ComponentModulesTableModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesTableModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesTableModule']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'c786a0d0-1be7-4ff6-9cd7-235d871cc40b',
        table: overrides && overrides.hasOwnProperty('table') ? overrides.table! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        tableModuleLayout: overrides && overrides.hasOwnProperty('tableModuleLayout') ? overrides.tableModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
    };
};

export const aComponentModulesTextModule = (overrides?: Partial<ComponentModulesTextModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesTextModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesTextModule']);
    return {
        Richtext: overrides && overrides.hasOwnProperty('Richtext') ? overrides.Richtext! : 'quod',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '67c6aef3-e334-4d10-978d-30c1a76d59a3',
        textModuleLayout: overrides && overrides.hasOwnProperty('textModuleLayout') ? overrides.textModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
    };
};

export const aComponentModulesTitleModule = (overrides?: Partial<ComponentModulesTitleModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesTitleModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesTitleModule']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'quibusdam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aeabb66f-3a23-42b4-8215-f8fb4e849040',
        titleModuleLayout: overrides && overrides.hasOwnProperty('titleModuleLayout') ? overrides.titleModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
    };
};

export const aComponentTriplyPeople = (overrides?: Partial<ComponentTriplyPeople>, _relationshipsToOmit: Array<string> = []): ComponentTriplyPeople => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentTriplyPeople']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '492edfb7-baff-4c21-b52e-abf8598a62b1',
        uri_id: overrides && overrides.hasOwnProperty('uri_id') ? overrides.uri_id! : 'sit',
    };
};

export const aComponentTriplyPeopleFiltersInput = (overrides?: Partial<ComponentTriplyPeopleFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentTriplyPeopleFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentTriplyPeopleFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentTriplyPeopleFiltersInput') ? {} as ComponentTriplyPeopleFiltersInput : aComponentTriplyPeopleFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentTriplyPeopleFiltersInput') ? {} as ComponentTriplyPeopleFiltersInput : aComponentTriplyPeopleFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentTriplyPeopleFiltersInput') ? {} as ComponentTriplyPeopleFiltersInput : aComponentTriplyPeopleFiltersInput({}, relationshipsToOmit)],
        uri_id: overrides && overrides.hasOwnProperty('uri_id') ? overrides.uri_id! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
    };
};

export const aComponentTriplyPeopleInput = (overrides?: Partial<ComponentTriplyPeopleInput>, _relationshipsToOmit: Array<string> = []): ComponentTriplyPeopleInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentTriplyPeopleInput']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2d1b513c-b0f9-4aaf-b371-99fac5055b35',
        uri_id: overrides && overrides.hasOwnProperty('uri_id') ? overrides.uri_id! : 'qui',
    };
};

export const aDateFilterInput = (overrides?: Partial<DateFilterInput>, _relationshipsToOmit: Array<string> = []): DateFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'DateFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['1970-01-11T04:58:59.069Z'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['1970-01-03T10:30:12.707Z'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : '1970-01-13T04:23:34.998Z',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : '1970-01-06T13:24:29.508Z',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : '1970-01-06T15:47:11.254Z',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : '1970-01-05T20:54:04.270Z',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : '1970-01-14T13:00:14.712Z',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : '1970-01-14T17:54:49.544Z',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : '1970-01-06T04:16:38.278Z',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['1970-01-09T13:20:15.886Z'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : '1970-01-07T10:17:59.549Z',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : '1970-01-05T15:12:59.762Z',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : '1970-01-05T08:19:28.298Z',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('DateFilterInput') ? {} as DateFilterInput : aDateFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '1970-01-05T22:04:37.725Z',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : '1970-01-04T20:58:04.572Z',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['1970-01-03T08:46:19.872Z'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['1970-01-05T00:29:49.006Z'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '1970-01-11T11:23:51.132Z',
    };
};

export const aDateTimeFilterInput = (overrides?: Partial<DateTimeFilterInput>, _relationshipsToOmit: Array<string> = []): DateTimeFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'DateTimeFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['eius'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['esse'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 'distinctio',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 'omnis',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 'consequatur',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'perferendis',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 'eum',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'voluptatem',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'vel',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['exercitationem'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'rerum',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'eos',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'voluptatem',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'et',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'quia',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['eos'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['et'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'et',
    };
};

export const anError = (overrides?: Partial<Error>, _relationshipsToOmit: Array<string> = []): Error => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Error']);
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'voluptas',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'et',
    };
};

export const aFileInfoInput = (overrides?: Partial<FileInfoInput>, _relationshipsToOmit: Array<string> = []): FileInfoInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'FileInfoInput']);
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : 'voluptatem',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'eius',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'laudantium',
    };
};

export const aFloatFilterInput = (overrides?: Partial<FloatFilterInput>, _relationshipsToOmit: Array<string> = []): FloatFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'FloatFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [4.04],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : [8.64],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 3.25,
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 2.14,
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 9.84,
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 7.19,
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 1.08,
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 0.39,
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 5.29,
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [7.88],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 0.06,
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 7.49,
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 0.42,
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('FloatFilterInput') ? {} as FloatFilterInput : aFloatFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 1.95,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 2.56,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [1.41],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [3.07],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 9.37,
    };
};

export const aHomepage = (overrides?: Partial<Homepage>, _relationshipsToOmit: Array<string> = []): Homepage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Homepage']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'illum',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'doloremque',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'aut',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('HomepageRelationResponseCollection') ? {} as HomepageRelationResponseCollection : aHomepageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'corrupti',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'earum',
    };
};

export const aHomepageEntity = (overrides?: Partial<HomepageEntity>, _relationshipsToOmit: Array<string> = []): HomepageEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'HomepageEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Homepage') ? {} as Homepage : aHomepage({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '79c69378-0bef-4bce-9b4a-f6091ff460f6',
    };
};

export const aHomepageEntityResponse = (overrides?: Partial<HomepageEntityResponse>, _relationshipsToOmit: Array<string> = []): HomepageEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'HomepageEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('HomepageEntity') ? {} as HomepageEntity : aHomepageEntity({}, relationshipsToOmit),
    };
};

export const aHomepageInput = (overrides?: Partial<HomepageInput>, _relationshipsToOmit: Array<string> = []): HomepageInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'HomepageInput']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'vero',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['totam'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nobis',
    };
};

export const aHomepageRelationResponseCollection = (overrides?: Partial<HomepageRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): HomepageRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'HomepageRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('HomepageEntity') ? {} as HomepageEntity : aHomepageEntity({}, relationshipsToOmit)],
    };
};

export const anI18NLocale = (overrides?: Partial<I18NLocale>, _relationshipsToOmit: Array<string> = []): I18NLocale => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'I18NLocale']);
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'vitae',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'est',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ut',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'harum',
    };
};

export const anI18NLocaleEntity = (overrides?: Partial<I18NLocaleEntity>, _relationshipsToOmit: Array<string> = []): I18NLocaleEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'I18NLocaleEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('I18NLocale') ? {} as I18NLocale : anI18NLocale({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '30679fcb-3c22-469a-b720-81b60d58f231',
    };
};

export const anI18NLocaleEntityResponse = (overrides?: Partial<I18NLocaleEntityResponse>, _relationshipsToOmit: Array<string> = []): I18NLocaleEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'I18NLocaleEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('I18NLocaleEntity') ? {} as I18NLocaleEntity : anI18NLocaleEntity({}, relationshipsToOmit),
    };
};

export const anI18NLocaleEntityResponseCollection = (overrides?: Partial<I18NLocaleEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): I18NLocaleEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'I18NLocaleEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('I18NLocaleEntity') ? {} as I18NLocaleEntity : anI18NLocaleEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const anI18NLocaleFiltersInput = (overrides?: Partial<I18NLocaleFiltersInput>, _relationshipsToOmit: Array<string> = []): I18NLocaleFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'I18NLocaleFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('I18NLocaleFiltersInput') ? {} as I18NLocaleFiltersInput : anI18NLocaleFiltersInput({}, relationshipsToOmit)],
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('I18NLocaleFiltersInput') ? {} as I18NLocaleFiltersInput : anI18NLocaleFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('I18NLocaleFiltersInput') ? {} as I18NLocaleFiltersInput : anI18NLocaleFiltersInput({}, relationshipsToOmit)],
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const anIdFilterInput = (overrides?: Partial<IdFilterInput>, _relationshipsToOmit: Array<string> = []): IdFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'IdFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['0270d200-7662-47e2-ba4c-726a870e5a11'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['ce783653-8fae-4dda-8c81-e9b8f2b34ecc'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : '9f2811a4-57ec-481b-bcb7-fbebe3f32b21',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : '87ed46ae-db5a-49f5-bbcd-e1b2e2b47fa9',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 'e19418e6-92db-47a2-8aee-bbaa0a5dac6d',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'b101c9e9-245c-4a10-9b21-6d8677655f8d',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 'a161d825-aaa2-4bfb-b99a-adea8d2753fd',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : '4b6b2aee-0a53-43a8-893b-855c091f707a',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : '3ef277ae-ee71-40fe-8952-7558693d96e7',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['48928c04-f12a-479c-9f85-65645052175f'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : '4b805797-4796-46bc-858e-1a9138865ac0',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : '468d224b-9b5d-41ab-ae2f-d04704636985',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : '1198f531-1ae3-4811-95d3-bfb887b6103b',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '95e48f5a-459d-4027-a8ba-d2865db771ef',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : '7e51ca6a-b077-4c4e-b0b5-46d68932e39f',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['2b88c577-47fd-4581-b919-bd87830aeb40'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['eff70043-e02b-4406-b482-db16b3eca790'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '85ee213b-f8b7-446f-ac41-a9d7352556a8',
    };
};

export const anIntFilterInput = (overrides?: Partial<IntFilterInput>, _relationshipsToOmit: Array<string> = []): IntFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'IntFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [3964],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : [9320],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 1946,
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 5386,
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 3619,
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 5689,
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 6621,
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 2842,
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 1839,
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [492],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 3668,
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 5274,
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 9666,
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('IntFilterInput') ? {} as IntFilterInput : anIntFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 3816,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 4218,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [7133],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [334],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 8478,
    };
};

export const aJsonFilterInput = (overrides?: Partial<JsonFilterInput>, _relationshipsToOmit: Array<string> = []): JsonFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'JsonFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['suscipit'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['necessitatibus'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 'ullam',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 'aliquam',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 'ea',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'nam',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 'sapiente',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'perspiciatis',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'hic',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['aliquam'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'ab',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'ut',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'quas',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('JsonFilterInput') ? {} as JsonFilterInput : aJsonFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'autem',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'optio',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['itaque'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['magnam'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'sapiente',
    };
};

export const aLandingpage = (overrides?: Partial<Landingpage>, _relationshipsToOmit: Array<string> = []): Landingpage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Landingpage']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'culpa',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'quos',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'consequuntur',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LandingpageRelationResponseCollection') ? {} as LandingpageRelationResponseCollection : aLandingpageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'distinctio',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'dolore',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sed',
    };
};

export const aLandingpageEntity = (overrides?: Partial<LandingpageEntity>, _relationshipsToOmit: Array<string> = []): LandingpageEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Landingpage') ? {} as Landingpage : aLandingpage({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9710332d-4e06-453b-a6aa-18c7eb6d2980',
    };
};

export const aLandingpageEntityResponse = (overrides?: Partial<LandingpageEntityResponse>, _relationshipsToOmit: Array<string> = []): LandingpageEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('LandingpageEntity') ? {} as LandingpageEntity : aLandingpageEntity({}, relationshipsToOmit),
    };
};

export const aLandingpageEntityResponseCollection = (overrides?: Partial<LandingpageEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): LandingpageEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('LandingpageEntity') ? {} as LandingpageEntity : aLandingpageEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aLandingpageFiltersInput = (overrides?: Partial<LandingpageFiltersInput>, _relationshipsToOmit: Array<string> = []): LandingpageFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageFiltersInput']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('LandingpageFiltersInput') ? {} as LandingpageFiltersInput : aLandingpageFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LandingpageFiltersInput') ? {} as LandingpageFiltersInput : aLandingpageFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('LandingpageFiltersInput') ? {} as LandingpageFiltersInput : aLandingpageFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('LandingpageFiltersInput') ? {} as LandingpageFiltersInput : aLandingpageFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aLandingpageInput = (overrides?: Partial<LandingpageInput>, _relationshipsToOmit: Array<string> = []): LandingpageInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageInput']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'excepturi',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['minima'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nihil',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'at',
    };
};

export const aLandingpageRelationResponseCollection = (overrides?: Partial<LandingpageRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): LandingpageRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LandingpageRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('LandingpageEntity') ? {} as LandingpageEntity : aLandingpageEntity({}, relationshipsToOmit)],
    };
};

export const aLocation = (overrides?: Partial<Location>, _relationshipsToOmit: Array<string> = []): Location => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Location']);
    return {
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'sit',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'qui',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'tempore',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'dicta',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'culpa',
    };
};

export const aLocationEntity = (overrides?: Partial<LocationEntity>, _relationshipsToOmit: Array<string> = []): LocationEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f0359d58-6fc7-45be-924c-60ba9cc6719f',
    };
};

export const aLocationEntityResponse = (overrides?: Partial<LocationEntityResponse>, _relationshipsToOmit: Array<string> = []): LocationEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('LocationEntity') ? {} as LocationEntity : aLocationEntity({}, relationshipsToOmit),
    };
};

export const aLocationEntityResponseCollection = (overrides?: Partial<LocationEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): LocationEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('LocationEntity') ? {} as LocationEntity : aLocationEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aLocationFiltersInput = (overrides?: Partial<LocationFiltersInput>, _relationshipsToOmit: Array<string> = []): LocationFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit)],
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aLocationInput = (overrides?: Partial<LocationInput>, _relationshipsToOmit: Array<string> = []): LocationInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationInput']);
    return {
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'nihil',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'aut',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : ['60ed9ce4-80ed-456c-a0e7-d1188a82a1f1'],
    };
};

export const aLocationRelationResponseCollection = (overrides?: Partial<LocationRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): LocationRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('LocationEntity') ? {} as LocationEntity : aLocationEntity({}, relationshipsToOmit)],
    };
};

export const aLongFilterInput = (overrides?: Partial<LongFilterInput>, _relationshipsToOmit: Array<string> = []): LongFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LongFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['sapiente'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['quis'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 'quam',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 'vel',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 'iste',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'sit',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 'deserunt',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'vel',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'ea',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['ullam'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'consequatur',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'non',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'ipsa',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('LongFilterInput') ? {} as LongFilterInput : aLongFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'incidunt',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'rerum',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['dignissimos'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['dolorem'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'molestiae',
    };
};

export const aMenupage = (overrides?: Partial<Menupage>, _relationshipsToOmit: Array<string> = []): Menupage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Menupage']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'aperiam',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'doloremque',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'id',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('MenupageRelationResponseCollection') ? {} as MenupageRelationResponseCollection : aMenupageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'ipsam',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'sit',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'omnis',
    };
};

export const aMenupageEntity = (overrides?: Partial<MenupageEntity>, _relationshipsToOmit: Array<string> = []): MenupageEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Menupage') ? {} as Menupage : aMenupage({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd088facc-8511-4616-899f-36a1a4068495',
    };
};

export const aMenupageEntityResponse = (overrides?: Partial<MenupageEntityResponse>, _relationshipsToOmit: Array<string> = []): MenupageEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('MenupageEntity') ? {} as MenupageEntity : aMenupageEntity({}, relationshipsToOmit),
    };
};

export const aMenupageEntityResponseCollection = (overrides?: Partial<MenupageEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): MenupageEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('MenupageEntity') ? {} as MenupageEntity : aMenupageEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aMenupageFiltersInput = (overrides?: Partial<MenupageFiltersInput>, _relationshipsToOmit: Array<string> = []): MenupageFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageFiltersInput']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('MenupageFiltersInput') ? {} as MenupageFiltersInput : aMenupageFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('MenupageFiltersInput') ? {} as MenupageFiltersInput : aMenupageFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('MenupageFiltersInput') ? {} as MenupageFiltersInput : aMenupageFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('MenupageFiltersInput') ? {} as MenupageFiltersInput : aMenupageFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aMenupageInput = (overrides?: Partial<MenupageInput>, _relationshipsToOmit: Array<string> = []): MenupageInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageInput']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'in',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['eius'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'quo',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'rem',
    };
};

export const aMenupageRelationResponseCollection = (overrides?: Partial<MenupageRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): MenupageRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('MenupageEntity') ? {} as MenupageEntity : aMenupageEntity({}, relationshipsToOmit)],
    };
};

export const aMutation = (overrides?: Partial<Mutation>, _relationshipsToOmit: Array<string> = []): Mutation => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Mutation']);
    return {
        createAuthor: overrides && overrides.hasOwnProperty('createAuthor') ? overrides.createAuthor! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        createHomepageLocalization: overrides && overrides.hasOwnProperty('createHomepageLocalization') ? overrides.createHomepageLocalization! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        createLandingpage: overrides && overrides.hasOwnProperty('createLandingpage') ? overrides.createLandingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        createLandingpageLocalization: overrides && overrides.hasOwnProperty('createLandingpageLocalization') ? overrides.createLandingpageLocalization! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        createLocation: overrides && overrides.hasOwnProperty('createLocation') ? overrides.createLocation! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        createLocationLocalization: overrides && overrides.hasOwnProperty('createLocationLocalization') ? overrides.createLocationLocalization! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        createMenupage: overrides && overrides.hasOwnProperty('createMenupage') ? overrides.createMenupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        createMenupageLocalization: overrides && overrides.hasOwnProperty('createMenupageLocalization') ? overrides.createMenupageLocalization! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        createStory: overrides && overrides.hasOwnProperty('createStory') ? overrides.createStory! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        createStoryLocalization: overrides && overrides.hasOwnProperty('createStoryLocalization') ? overrides.createStoryLocalization! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        createTable: overrides && overrides.hasOwnProperty('createTable') ? overrides.createTable! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        createUploadFile: overrides && overrides.hasOwnProperty('createUploadFile') ? overrides.createUploadFile! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        createUploadFolder: overrides && overrides.hasOwnProperty('createUploadFolder') ? overrides.createUploadFolder! : relationshipsToOmit.includes('UploadFolderEntityResponse') ? {} as UploadFolderEntityResponse : anUploadFolderEntityResponse({}, relationshipsToOmit),
        createUsersPermissionsRole: overrides && overrides.hasOwnProperty('createUsersPermissionsRole') ? overrides.createUsersPermissionsRole! : relationshipsToOmit.includes('UsersPermissionsCreateRolePayload') ? {} as UsersPermissionsCreateRolePayload : aUsersPermissionsCreateRolePayload({}, relationshipsToOmit),
        createUsersPermissionsUser: overrides && overrides.hasOwnProperty('createUsersPermissionsUser') ? overrides.createUsersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        deleteAuthor: overrides && overrides.hasOwnProperty('deleteAuthor') ? overrides.deleteAuthor! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        deleteHomepage: overrides && overrides.hasOwnProperty('deleteHomepage') ? overrides.deleteHomepage! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        deleteLandingpage: overrides && overrides.hasOwnProperty('deleteLandingpage') ? overrides.deleteLandingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        deleteLocation: overrides && overrides.hasOwnProperty('deleteLocation') ? overrides.deleteLocation! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        deleteMenupage: overrides && overrides.hasOwnProperty('deleteMenupage') ? overrides.deleteMenupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        deleteStory: overrides && overrides.hasOwnProperty('deleteStory') ? overrides.deleteStory! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        deleteTable: overrides && overrides.hasOwnProperty('deleteTable') ? overrides.deleteTable! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        deleteUploadFile: overrides && overrides.hasOwnProperty('deleteUploadFile') ? overrides.deleteUploadFile! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        deleteUploadFolder: overrides && overrides.hasOwnProperty('deleteUploadFolder') ? overrides.deleteUploadFolder! : relationshipsToOmit.includes('UploadFolderEntityResponse') ? {} as UploadFolderEntityResponse : anUploadFolderEntityResponse({}, relationshipsToOmit),
        deleteUsersPermissionsRole: overrides && overrides.hasOwnProperty('deleteUsersPermissionsRole') ? overrides.deleteUsersPermissionsRole! : relationshipsToOmit.includes('UsersPermissionsDeleteRolePayload') ? {} as UsersPermissionsDeleteRolePayload : aUsersPermissionsDeleteRolePayload({}, relationshipsToOmit),
        deleteUsersPermissionsUser: overrides && overrides.hasOwnProperty('deleteUsersPermissionsUser') ? overrides.deleteUsersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        emailConfirmation: overrides && overrides.hasOwnProperty('emailConfirmation') ? overrides.emailConfirmation! : relationshipsToOmit.includes('UsersPermissionsLoginPayload') ? {} as UsersPermissionsLoginPayload : aUsersPermissionsLoginPayload({}, relationshipsToOmit),
        forgotPassword: overrides && overrides.hasOwnProperty('forgotPassword') ? overrides.forgotPassword! : relationshipsToOmit.includes('UsersPermissionsPasswordPayload') ? {} as UsersPermissionsPasswordPayload : aUsersPermissionsPasswordPayload({}, relationshipsToOmit),
        login: overrides && overrides.hasOwnProperty('login') ? overrides.login! : relationshipsToOmit.includes('UsersPermissionsLoginPayload') ? {} as UsersPermissionsLoginPayload : aUsersPermissionsLoginPayload({}, relationshipsToOmit),
        multipleUpload: overrides && overrides.hasOwnProperty('multipleUpload') ? overrides.multipleUpload! : [relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit)],
        register: overrides && overrides.hasOwnProperty('register') ? overrides.register! : relationshipsToOmit.includes('UsersPermissionsLoginPayload') ? {} as UsersPermissionsLoginPayload : aUsersPermissionsLoginPayload({}, relationshipsToOmit),
        removeFile: overrides && overrides.hasOwnProperty('removeFile') ? overrides.removeFile! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        resetPassword: overrides && overrides.hasOwnProperty('resetPassword') ? overrides.resetPassword! : relationshipsToOmit.includes('UsersPermissionsLoginPayload') ? {} as UsersPermissionsLoginPayload : aUsersPermissionsLoginPayload({}, relationshipsToOmit),
        updateAuthor: overrides && overrides.hasOwnProperty('updateAuthor') ? overrides.updateAuthor! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        updateFileInfo: overrides && overrides.hasOwnProperty('updateFileInfo') ? overrides.updateFileInfo! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        updateHomepage: overrides && overrides.hasOwnProperty('updateHomepage') ? overrides.updateHomepage! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        updateLandingpage: overrides && overrides.hasOwnProperty('updateLandingpage') ? overrides.updateLandingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        updateLocation: overrides && overrides.hasOwnProperty('updateLocation') ? overrides.updateLocation! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        updateMenupage: overrides && overrides.hasOwnProperty('updateMenupage') ? overrides.updateMenupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        updateStory: overrides && overrides.hasOwnProperty('updateStory') ? overrides.updateStory! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        updateTable: overrides && overrides.hasOwnProperty('updateTable') ? overrides.updateTable! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        updateUploadFile: overrides && overrides.hasOwnProperty('updateUploadFile') ? overrides.updateUploadFile! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        updateUploadFolder: overrides && overrides.hasOwnProperty('updateUploadFolder') ? overrides.updateUploadFolder! : relationshipsToOmit.includes('UploadFolderEntityResponse') ? {} as UploadFolderEntityResponse : anUploadFolderEntityResponse({}, relationshipsToOmit),
        updateUsersPermissionsRole: overrides && overrides.hasOwnProperty('updateUsersPermissionsRole') ? overrides.updateUsersPermissionsRole! : relationshipsToOmit.includes('UsersPermissionsUpdateRolePayload') ? {} as UsersPermissionsUpdateRolePayload : aUsersPermissionsUpdateRolePayload({}, relationshipsToOmit),
        updateUsersPermissionsUser: overrides && overrides.hasOwnProperty('updateUsersPermissionsUser') ? overrides.updateUsersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        upload: overrides && overrides.hasOwnProperty('upload') ? overrides.upload! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
    };
};

export const aPagination = (overrides?: Partial<Pagination>, _relationshipsToOmit: Array<string> = []): Pagination => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Pagination']);
    return {
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 9885,
        pageCount: overrides && overrides.hasOwnProperty('pageCount') ? overrides.pageCount! : 8144,
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 9732,
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 8641,
    };
};

export const aPaginationArg = (overrides?: Partial<PaginationArg>, _relationshipsToOmit: Array<string> = []): PaginationArg => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PaginationArg']);
    return {
        limit: overrides && overrides.hasOwnProperty('limit') ? overrides.limit! : 1659,
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 2627,
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 1621,
        start: overrides && overrides.hasOwnProperty('start') ? overrides.start! : 1033,
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Array<string> = []): Query => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Query']);
    return {
        StoryPostBySlug: overrides && overrides.hasOwnProperty('StoryPostBySlug') ? overrides.StoryPostBySlug! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : relationshipsToOmit.includes('AuthorEntityResponseCollection') ? {} as AuthorEntityResponseCollection : anAuthorEntityResponseCollection({}, relationshipsToOmit),
        homepage: overrides && overrides.hasOwnProperty('homepage') ? overrides.homepage! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        i18NLocale: overrides && overrides.hasOwnProperty('i18NLocale') ? overrides.i18NLocale! : relationshipsToOmit.includes('I18NLocaleEntityResponse') ? {} as I18NLocaleEntityResponse : anI18NLocaleEntityResponse({}, relationshipsToOmit),
        i18NLocales: overrides && overrides.hasOwnProperty('i18NLocales') ? overrides.i18NLocales! : relationshipsToOmit.includes('I18NLocaleEntityResponseCollection') ? {} as I18NLocaleEntityResponseCollection : anI18NLocaleEntityResponseCollection({}, relationshipsToOmit),
        landingpage: overrides && overrides.hasOwnProperty('landingpage') ? overrides.landingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        landingpages: overrides && overrides.hasOwnProperty('landingpages') ? overrides.landingpages! : relationshipsToOmit.includes('LandingpageEntityResponseCollection') ? {} as LandingpageEntityResponseCollection : aLandingpageEntityResponseCollection({}, relationshipsToOmit),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationEntityResponseCollection') ? {} as LocationEntityResponseCollection : aLocationEntityResponseCollection({}, relationshipsToOmit),
        me: overrides && overrides.hasOwnProperty('me') ? overrides.me! : relationshipsToOmit.includes('UsersPermissionsMe') ? {} as UsersPermissionsMe : aUsersPermissionsMe({}, relationshipsToOmit),
        menupage: overrides && overrides.hasOwnProperty('menupage') ? overrides.menupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        menupages: overrides && overrides.hasOwnProperty('menupages') ? overrides.menupages! : relationshipsToOmit.includes('MenupageEntityResponseCollection') ? {} as MenupageEntityResponseCollection : aMenupageEntityResponseCollection({}, relationshipsToOmit),
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryEntityResponseCollection') ? {} as StoryEntityResponseCollection : aStoryEntityResponseCollection({}, relationshipsToOmit),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        table: overrides && overrides.hasOwnProperty('table') ? overrides.table! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        tables: overrides && overrides.hasOwnProperty('tables') ? overrides.tables! : relationshipsToOmit.includes('TableEntityResponseCollection') ? {} as TableEntityResponseCollection : aTableEntityResponseCollection({}, relationshipsToOmit),
        uploadFile: overrides && overrides.hasOwnProperty('uploadFile') ? overrides.uploadFile! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        uploadFiles: overrides && overrides.hasOwnProperty('uploadFiles') ? overrides.uploadFiles! : relationshipsToOmit.includes('UploadFileEntityResponseCollection') ? {} as UploadFileEntityResponseCollection : anUploadFileEntityResponseCollection({}, relationshipsToOmit),
        uploadFolder: overrides && overrides.hasOwnProperty('uploadFolder') ? overrides.uploadFolder! : relationshipsToOmit.includes('UploadFolderEntityResponse') ? {} as UploadFolderEntityResponse : anUploadFolderEntityResponse({}, relationshipsToOmit),
        uploadFolders: overrides && overrides.hasOwnProperty('uploadFolders') ? overrides.uploadFolders! : relationshipsToOmit.includes('UploadFolderEntityResponseCollection') ? {} as UploadFolderEntityResponseCollection : anUploadFolderEntityResponseCollection({}, relationshipsToOmit),
        usersPermissionsRole: overrides && overrides.hasOwnProperty('usersPermissionsRole') ? overrides.usersPermissionsRole! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponse') ? {} as UsersPermissionsRoleEntityResponse : aUsersPermissionsRoleEntityResponse({}, relationshipsToOmit),
        usersPermissionsRoles: overrides && overrides.hasOwnProperty('usersPermissionsRoles') ? overrides.usersPermissionsRoles! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponseCollection') ? {} as UsersPermissionsRoleEntityResponseCollection : aUsersPermissionsRoleEntityResponseCollection({}, relationshipsToOmit),
        usersPermissionsUser: overrides && overrides.hasOwnProperty('usersPermissionsUser') ? overrides.usersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        usersPermissionsUsers: overrides && overrides.hasOwnProperty('usersPermissionsUsers') ? overrides.usersPermissionsUsers! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponseCollection') ? {} as UsersPermissionsUserEntityResponseCollection : aUsersPermissionsUserEntityResponseCollection({}, relationshipsToOmit),
    };
};

export const aResponseCollectionMeta = (overrides?: Partial<ResponseCollectionMeta>, _relationshipsToOmit: Array<string> = []): ResponseCollectionMeta => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ResponseCollectionMeta']);
    return {
        pagination: overrides && overrides.hasOwnProperty('pagination') ? overrides.pagination! : relationshipsToOmit.includes('Pagination') ? {} as Pagination : aPagination({}, relationshipsToOmit),
    };
};

export const aStory = (overrides?: Partial<Story>, _relationshipsToOmit: Array<string> = []): Story => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Story']);
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'impedit',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'ratione',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'laudantium',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDate') ? {} as ComponentCorePublicationDate : aComponentCorePublicationDate({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'et',
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : 'quae',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'minima',
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframe') ? {} as ComponentCoreTimeframe : aComponentCoreTimeframe({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'deleniti',
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : [relationshipsToOmit.includes('ComponentTriplyPeople') ? {} as ComponentTriplyPeople : aComponentTriplyPeople({}, relationshipsToOmit)],
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'cumque',
    };
};

export const aStoryEntity = (overrides?: Partial<StoryEntity>, _relationshipsToOmit: Array<string> = []): StoryEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Story') ? {} as Story : aStory({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f181cbb0-0fb8-42a2-9a5a-07a9bb5fd22c',
    };
};

export const aStoryEntityResponse = (overrides?: Partial<StoryEntityResponse>, _relationshipsToOmit: Array<string> = []): StoryEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit),
    };
};

export const aStoryEntityResponseCollection = (overrides?: Partial<StoryEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): StoryEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aStoryFiltersInput = (overrides?: Partial<StoryFiltersInput>, _relationshipsToOmit: Array<string> = []): StoryFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit)],
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorFiltersInput') ? {} as AuthorFiltersInput : anAuthorFiltersInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit)],
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : relationshipsToOmit.includes('ComponentTriplyPeopleFiltersInput') ? {} as ComponentTriplyPeopleFiltersInput : aComponentTriplyPeopleFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aStoryInput = (overrides?: Partial<StoryInput>, _relationshipsToOmit: Array<string> = []): StoryInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryInput']);
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : 'da466e6a-9e48-4074-8653-af51bc678fec',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['nesciunt'],
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptas',
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : ['6160e737-90eb-492d-b5fe-34a5ddb88a50'],
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDateInput') ? {} as ComponentCorePublicationDateInput : aComponentCorePublicationDateInput({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nemo',
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : 'totam',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'earum',
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframeInput') ? {} as ComponentCoreTimeframeInput : aComponentCoreTimeframeInput({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'voluptates',
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : [relationshipsToOmit.includes('ComponentTriplyPeopleInput') ? {} as ComponentTriplyPeopleInput : aComponentTriplyPeopleInput({}, relationshipsToOmit)],
    };
};

export const aStoryRelationResponseCollection = (overrides?: Partial<StoryRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): StoryRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
    };
};

export const aStringFilterInput = (overrides?: Partial<StringFilterInput>, _relationshipsToOmit: Array<string> = []): StringFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StringFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['excepturi'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['hic'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 'laudantium',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 'quaerat',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 'non',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'voluptatum',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 'distinctio',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'repellendus',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'illo',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['qui'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'et',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'temporibus',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'et',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'dolorem',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'est',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['veritatis'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['aperiam'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'quia',
    };
};

export const aTable = (overrides?: Partial<Table>, _relationshipsToOmit: Array<string> = []): Table => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Table']);
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : [relationshipsToOmit.includes('ComponentCoreTableBody') ? {} as ComponentCoreTableBody : aComponentCoreTableBody({}, relationshipsToOmit)],
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : relationshipsToOmit.includes('ComponentCoreTableHead') ? {} as ComponentCoreTableHead : aComponentCoreTableHead({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'vel',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'aperiam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sequi',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nemo',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'amet',
    };
};

export const aTableEntity = (overrides?: Partial<TableEntity>, _relationshipsToOmit: Array<string> = []): TableEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TableEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Table') ? {} as Table : aTable({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bc044baf-2bc1-4347-b2f7-28bdb3548bf8',
    };
};

export const aTableEntityResponse = (overrides?: Partial<TableEntityResponse>, _relationshipsToOmit: Array<string> = []): TableEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TableEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('TableEntity') ? {} as TableEntity : aTableEntity({}, relationshipsToOmit),
    };
};

export const aTableEntityResponseCollection = (overrides?: Partial<TableEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): TableEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TableEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('TableEntity') ? {} as TableEntity : aTableEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aTableFiltersInput = (overrides?: Partial<TableFiltersInput>, _relationshipsToOmit: Array<string> = []): TableFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TableFiltersInput']);
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : relationshipsToOmit.includes('ComponentCoreTableBodyFiltersInput') ? {} as ComponentCoreTableBodyFiltersInput : aComponentCoreTableBodyFiltersInput({}, relationshipsToOmit),
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : relationshipsToOmit.includes('ComponentCoreTableHeadFiltersInput') ? {} as ComponentCoreTableHeadFiltersInput : aComponentCoreTableHeadFiltersInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('TableFiltersInput') ? {} as TableFiltersInput : aTableFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('TableFiltersInput') ? {} as TableFiltersInput : aTableFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('TableFiltersInput') ? {} as TableFiltersInput : aTableFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aTableInput = (overrides?: Partial<TableInput>, _relationshipsToOmit: Array<string> = []): TableInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TableInput']);
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : [relationshipsToOmit.includes('ComponentCoreTableBodyInput') ? {} as ComponentCoreTableBodyInput : aComponentCoreTableBodyInput({}, relationshipsToOmit)],
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : relationshipsToOmit.includes('ComponentCoreTableHeadInput') ? {} as ComponentCoreTableHeadInput : aComponentCoreTableHeadInput({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'reiciendis',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'optio',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'est',
    };
};

export const anUploadFile = (overrides?: Partial<UploadFile>, _relationshipsToOmit: Array<string> = []): UploadFile => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFile']);
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : 'enim',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'in',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'quis',
        ext: overrides && overrides.hasOwnProperty('ext') ? overrides.ext! : 'est',
        formats: overrides && overrides.hasOwnProperty('formats') ? overrides.formats! : 'qui',
        hash: overrides && overrides.hasOwnProperty('hash') ? overrides.hash! : 'nihil',
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 9217,
        mime: overrides && overrides.hasOwnProperty('mime') ? overrides.mime! : 'dolorum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odit',
        previewUrl: overrides && overrides.hasOwnProperty('previewUrl') ? overrides.previewUrl! : 'distinctio',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'dolorem',
        provider_metadata: overrides && overrides.hasOwnProperty('provider_metadata') ? overrides.provider_metadata! : 'qui',
        related: overrides && overrides.hasOwnProperty('related') ? overrides.related! : [relationshipsToOmit.includes('Author') ? {} as Author : anAuthor({}, relationshipsToOmit)],
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : 6.1,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'ut',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'vel',
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 6280,
    };
};

export const anUploadFileEntity = (overrides?: Partial<UploadFileEntity>, _relationshipsToOmit: Array<string> = []): UploadFileEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('UploadFile') ? {} as UploadFile : anUploadFile({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5f057c44-fdac-4e38-9b86-faa8ab3e968c',
    };
};

export const anUploadFileEntityResponse = (overrides?: Partial<UploadFileEntityResponse>, _relationshipsToOmit: Array<string> = []): UploadFileEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('UploadFileEntity') ? {} as UploadFileEntity : anUploadFileEntity({}, relationshipsToOmit),
    };
};

export const anUploadFileEntityResponseCollection = (overrides?: Partial<UploadFileEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): UploadFileEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UploadFileEntity') ? {} as UploadFileEntity : anUploadFileEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const anUploadFileFiltersInput = (overrides?: Partial<UploadFileFiltersInput>, _relationshipsToOmit: Array<string> = []): UploadFileFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileFiltersInput']);
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('UploadFileFiltersInput') ? {} as UploadFileFiltersInput : anUploadFileFiltersInput({}, relationshipsToOmit)],
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        ext: overrides && overrides.hasOwnProperty('ext') ? overrides.ext! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit),
        folderPath: overrides && overrides.hasOwnProperty('folderPath') ? overrides.folderPath! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        formats: overrides && overrides.hasOwnProperty('formats') ? overrides.formats! : relationshipsToOmit.includes('JsonFilterInput') ? {} as JsonFilterInput : aJsonFilterInput({}, relationshipsToOmit),
        hash: overrides && overrides.hasOwnProperty('hash') ? overrides.hash! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : relationshipsToOmit.includes('IntFilterInput') ? {} as IntFilterInput : anIntFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        mime: overrides && overrides.hasOwnProperty('mime') ? overrides.mime! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('UploadFileFiltersInput') ? {} as UploadFileFiltersInput : anUploadFileFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('UploadFileFiltersInput') ? {} as UploadFileFiltersInput : anUploadFileFiltersInput({}, relationshipsToOmit)],
        previewUrl: overrides && overrides.hasOwnProperty('previewUrl') ? overrides.previewUrl! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        provider_metadata: overrides && overrides.hasOwnProperty('provider_metadata') ? overrides.provider_metadata! : relationshipsToOmit.includes('JsonFilterInput') ? {} as JsonFilterInput : aJsonFilterInput({}, relationshipsToOmit),
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : relationshipsToOmit.includes('FloatFilterInput') ? {} as FloatFilterInput : aFloatFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : relationshipsToOmit.includes('IntFilterInput') ? {} as IntFilterInput : anIntFilterInput({}, relationshipsToOmit),
    };
};

export const anUploadFileInput = (overrides?: Partial<UploadFileInput>, _relationshipsToOmit: Array<string> = []): UploadFileInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileInput']);
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : 'at',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'facilis',
        ext: overrides && overrides.hasOwnProperty('ext') ? overrides.ext! : 'totam',
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : '8dd0c176-78dc-4517-8ef2-426ca384345e',
        folderPath: overrides && overrides.hasOwnProperty('folderPath') ? overrides.folderPath! : 'nesciunt',
        formats: overrides && overrides.hasOwnProperty('formats') ? overrides.formats! : 'rerum',
        hash: overrides && overrides.hasOwnProperty('hash') ? overrides.hash! : 'qui',
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 7997,
        mime: overrides && overrides.hasOwnProperty('mime') ? overrides.mime! : 'atque',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'consequuntur',
        previewUrl: overrides && overrides.hasOwnProperty('previewUrl') ? overrides.previewUrl! : 'et',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'consectetur',
        provider_metadata: overrides && overrides.hasOwnProperty('provider_metadata') ? overrides.provider_metadata! : 'sapiente',
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : 9.83,
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'quia',
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 5527,
    };
};

export const anUploadFileRelationResponseCollection = (overrides?: Partial<UploadFileRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UploadFileRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UploadFileEntity') ? {} as UploadFileEntity : anUploadFileEntity({}, relationshipsToOmit)],
    };
};

export const anUploadFolder = (overrides?: Partial<UploadFolder>, _relationshipsToOmit: Array<string> = []): UploadFolder => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolder']);
    return {
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : relationshipsToOmit.includes('UploadFolderRelationResponseCollection') ? {} as UploadFolderRelationResponseCollection : anUploadFolderRelationResponseCollection({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'non',
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : relationshipsToOmit.includes('UploadFileRelationResponseCollection') ? {} as UploadFileRelationResponseCollection : anUploadFileRelationResponseCollection({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aperiam',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : relationshipsToOmit.includes('UploadFolderEntityResponse') ? {} as UploadFolderEntityResponse : anUploadFolderEntityResponse({}, relationshipsToOmit),
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'ducimus',
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : 5135,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'est',
    };
};

export const anUploadFolderEntity = (overrides?: Partial<UploadFolderEntity>, _relationshipsToOmit: Array<string> = []): UploadFolderEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('UploadFolder') ? {} as UploadFolder : anUploadFolder({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e44e56c5-44e8-442e-88cd-54fd34829d44',
    };
};

export const anUploadFolderEntityResponse = (overrides?: Partial<UploadFolderEntityResponse>, _relationshipsToOmit: Array<string> = []): UploadFolderEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('UploadFolderEntity') ? {} as UploadFolderEntity : anUploadFolderEntity({}, relationshipsToOmit),
    };
};

export const anUploadFolderEntityResponseCollection = (overrides?: Partial<UploadFolderEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): UploadFolderEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UploadFolderEntity') ? {} as UploadFolderEntity : anUploadFolderEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const anUploadFolderFiltersInput = (overrides?: Partial<UploadFolderFiltersInput>, _relationshipsToOmit: Array<string> = []): UploadFolderFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit)],
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : relationshipsToOmit.includes('UploadFileFiltersInput') ? {} as UploadFileFiltersInput : anUploadFileFiltersInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit)],
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : relationshipsToOmit.includes('UploadFolderFiltersInput') ? {} as UploadFolderFiltersInput : anUploadFolderFiltersInput({}, relationshipsToOmit),
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : relationshipsToOmit.includes('IntFilterInput') ? {} as IntFilterInput : anIntFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const anUploadFolderInput = (overrides?: Partial<UploadFolderInput>, _relationshipsToOmit: Array<string> = []): UploadFolderInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderInput']);
    return {
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : ['e4faf2bf-5c81-40c1-8a0d-212a3daab9ef'],
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : ['d731b7dd-706a-4f83-966a-633ea4ab590c'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aperiam',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : '3cf4262d-a1c7-487d-bf6e-2d1207f2fc24',
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'corporis',
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : 5851,
    };
};

export const anUploadFolderRelationResponseCollection = (overrides?: Partial<UploadFolderRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UploadFolderRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFolderRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UploadFolderEntity') ? {} as UploadFolderEntity : anUploadFolderEntity({}, relationshipsToOmit)],
    };
};

export const aUsersPermissionsCreateRolePayload = (overrides?: Partial<UsersPermissionsCreateRolePayload>, _relationshipsToOmit: Array<string> = []): UsersPermissionsCreateRolePayload => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsCreateRolePayload']);
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : true,
    };
};

export const aUsersPermissionsDeleteRolePayload = (overrides?: Partial<UsersPermissionsDeleteRolePayload>, _relationshipsToOmit: Array<string> = []): UsersPermissionsDeleteRolePayload => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsDeleteRolePayload']);
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : false,
    };
};

export const aUsersPermissionsLoginInput = (overrides?: Partial<UsersPermissionsLoginInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsLoginInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsLoginInput']);
    return {
        identifier: overrides && overrides.hasOwnProperty('identifier') ? overrides.identifier! : 'totam',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'est',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'sequi',
    };
};

export const aUsersPermissionsLoginPayload = (overrides?: Partial<UsersPermissionsLoginPayload>, _relationshipsToOmit: Array<string> = []): UsersPermissionsLoginPayload => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsLoginPayload']);
    return {
        jwt: overrides && overrides.hasOwnProperty('jwt') ? overrides.jwt! : 'fugit',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : relationshipsToOmit.includes('UsersPermissionsMe') ? {} as UsersPermissionsMe : aUsersPermissionsMe({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsMe = (overrides?: Partial<UsersPermissionsMe>, _relationshipsToOmit: Array<string> = []): UsersPermissionsMe => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsMe']);
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : true,
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : true,
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'doloremque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dfcecf11-bbe0-4704-a84a-a3511c2d37e7',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsMeRole') ? {} as UsersPermissionsMeRole : aUsersPermissionsMeRole({}, relationshipsToOmit),
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'aut',
    };
};

export const aUsersPermissionsMeRole = (overrides?: Partial<UsersPermissionsMeRole>, _relationshipsToOmit: Array<string> = []): UsersPermissionsMeRole => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsMeRole']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptas',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '291d136c-a2d0-4f86-b3ba-8f2cb50fc98e',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sed',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'accusantium',
    };
};

export const aUsersPermissionsPasswordPayload = (overrides?: Partial<UsersPermissionsPasswordPayload>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPasswordPayload => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPasswordPayload']);
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : false,
    };
};

export const aUsersPermissionsPermission = (overrides?: Partial<UsersPermissionsPermission>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPermission => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPermission']);
    return {
        action: overrides && overrides.hasOwnProperty('action') ? overrides.action! : 'aperiam',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'voluptate',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponse') ? {} as UsersPermissionsRoleEntityResponse : aUsersPermissionsRoleEntityResponse({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sequi',
    };
};

export const aUsersPermissionsPermissionEntity = (overrides?: Partial<UsersPermissionsPermissionEntity>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPermissionEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPermissionEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('UsersPermissionsPermission') ? {} as UsersPermissionsPermission : aUsersPermissionsPermission({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a98791bc-3951-4555-a9a8-7e897074f68a',
    };
};

export const aUsersPermissionsPermissionFiltersInput = (overrides?: Partial<UsersPermissionsPermissionFiltersInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPermissionFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPermissionFiltersInput']);
    return {
        action: overrides && overrides.hasOwnProperty('action') ? overrides.action! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('UsersPermissionsPermissionFiltersInput') ? {} as UsersPermissionsPermissionFiltersInput : aUsersPermissionsPermissionFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('UsersPermissionsPermissionFiltersInput') ? {} as UsersPermissionsPermissionFiltersInput : aUsersPermissionsPermissionFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('UsersPermissionsPermissionFiltersInput') ? {} as UsersPermissionsPermissionFiltersInput : aUsersPermissionsPermissionFiltersInput({}, relationshipsToOmit)],
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleFiltersInput') ? {} as UsersPermissionsRoleFiltersInput : aUsersPermissionsRoleFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsPermissionRelationResponseCollection = (overrides?: Partial<UsersPermissionsPermissionRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPermissionRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPermissionRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UsersPermissionsPermissionEntity') ? {} as UsersPermissionsPermissionEntity : aUsersPermissionsPermissionEntity({}, relationshipsToOmit)],
    };
};

export const aUsersPermissionsRegisterInput = (overrides?: Partial<UsersPermissionsRegisterInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRegisterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRegisterInput']);
    return {
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'esse',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'dolore',
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'laudantium',
    };
};

export const aUsersPermissionsRole = (overrides?: Partial<UsersPermissionsRole>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRole => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRole']);
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'mollitia',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'harum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quae',
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : relationshipsToOmit.includes('UsersPermissionsPermissionRelationResponseCollection') ? {} as UsersPermissionsPermissionRelationResponseCollection : aUsersPermissionsPermissionRelationResponseCollection({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'sed',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'amet',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : relationshipsToOmit.includes('UsersPermissionsUserRelationResponseCollection') ? {} as UsersPermissionsUserRelationResponseCollection : aUsersPermissionsUserRelationResponseCollection({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsRoleEntity = (overrides?: Partial<UsersPermissionsRoleEntity>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRoleEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRoleEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('UsersPermissionsRole') ? {} as UsersPermissionsRole : aUsersPermissionsRole({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b15ef2a7-ca1d-4749-815f-83899100e9d7',
    };
};

export const aUsersPermissionsRoleEntityResponse = (overrides?: Partial<UsersPermissionsRoleEntityResponse>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRoleEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRoleEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('UsersPermissionsRoleEntity') ? {} as UsersPermissionsRoleEntity : aUsersPermissionsRoleEntity({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsRoleEntityResponseCollection = (overrides?: Partial<UsersPermissionsRoleEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRoleEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRoleEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UsersPermissionsRoleEntity') ? {} as UsersPermissionsRoleEntity : aUsersPermissionsRoleEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsRoleFiltersInput = (overrides?: Partial<UsersPermissionsRoleFiltersInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRoleFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRoleFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('UsersPermissionsRoleFiltersInput') ? {} as UsersPermissionsRoleFiltersInput : aUsersPermissionsRoleFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('UsersPermissionsRoleFiltersInput') ? {} as UsersPermissionsRoleFiltersInput : aUsersPermissionsRoleFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('UsersPermissionsRoleFiltersInput') ? {} as UsersPermissionsRoleFiltersInput : aUsersPermissionsRoleFiltersInput({}, relationshipsToOmit)],
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : relationshipsToOmit.includes('UsersPermissionsPermissionFiltersInput') ? {} as UsersPermissionsPermissionFiltersInput : aUsersPermissionsPermissionFiltersInput({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : relationshipsToOmit.includes('UsersPermissionsUserFiltersInput') ? {} as UsersPermissionsUserFiltersInput : aUsersPermissionsUserFiltersInput({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsRoleInput = (overrides?: Partial<UsersPermissionsRoleInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRoleInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRoleInput']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'est',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'suscipit',
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : ['82b8be2b-929e-4872-8e0e-33c7d8bea3ef'],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'facilis',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : ['af27511c-06bc-42c5-a943-60485dc06fde'],
    };
};

export const aUsersPermissionsUpdateRolePayload = (overrides?: Partial<UsersPermissionsUpdateRolePayload>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUpdateRolePayload => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUpdateRolePayload']);
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : true,
    };
};

export const aUsersPermissionsUser = (overrides?: Partial<UsersPermissionsUser>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUser => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUser']);
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : false,
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : false,
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'omnis',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'id',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'saepe',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponse') ? {} as UsersPermissionsRoleEntityResponse : aUsersPermissionsRoleEntityResponse({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'voluptas',
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'inventore',
    };
};

export const aUsersPermissionsUserEntity = (overrides?: Partial<UsersPermissionsUserEntity>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('UsersPermissionsUser') ? {} as UsersPermissionsUser : aUsersPermissionsUser({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '18b55aa1-2d62-42fa-8814-77d373abbe95',
    };
};

export const aUsersPermissionsUserEntityResponse = (overrides?: Partial<UsersPermissionsUserEntityResponse>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('UsersPermissionsUserEntity') ? {} as UsersPermissionsUserEntity : aUsersPermissionsUserEntity({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsUserEntityResponseCollection = (overrides?: Partial<UsersPermissionsUserEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UsersPermissionsUserEntity') ? {} as UsersPermissionsUserEntity : aUsersPermissionsUserEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsUserFiltersInput = (overrides?: Partial<UsersPermissionsUserFiltersInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('UsersPermissionsUserFiltersInput') ? {} as UsersPermissionsUserFiltersInput : aUsersPermissionsUserFiltersInput({}, relationshipsToOmit)],
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : relationshipsToOmit.includes('BooleanFilterInput') ? {} as BooleanFilterInput : aBooleanFilterInput({}, relationshipsToOmit),
        confirmationToken: overrides && overrides.hasOwnProperty('confirmationToken') ? overrides.confirmationToken! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : relationshipsToOmit.includes('BooleanFilterInput') ? {} as BooleanFilterInput : aBooleanFilterInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('UsersPermissionsUserFiltersInput') ? {} as UsersPermissionsUserFiltersInput : aUsersPermissionsUserFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('UsersPermissionsUserFiltersInput') ? {} as UsersPermissionsUserFiltersInput : aUsersPermissionsUserFiltersInput({}, relationshipsToOmit)],
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        resetPasswordToken: overrides && overrides.hasOwnProperty('resetPasswordToken') ? overrides.resetPasswordToken! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleFiltersInput') ? {} as UsersPermissionsRoleFiltersInput : aUsersPermissionsRoleFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
    };
};

export const aUsersPermissionsUserInput = (overrides?: Partial<UsersPermissionsUserInput>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserInput']);
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : true,
        confirmationToken: overrides && overrides.hasOwnProperty('confirmationToken') ? overrides.confirmationToken! : 'repellendus',
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : false,
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'nisi',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'delectus',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'tenetur',
        resetPasswordToken: overrides && overrides.hasOwnProperty('resetPasswordToken') ? overrides.resetPasswordToken! : 'quis',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : 'db6571ba-1357-4883-a01c-e9e7e3037fef',
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'eligendi',
    };
};

export const aUsersPermissionsUserRelationResponseCollection = (overrides?: Partial<UsersPermissionsUserRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UsersPermissionsUserEntity') ? {} as UsersPermissionsUserEntity : aUsersPermissionsUserEntity({}, relationshipsToOmit)],
    };
};
