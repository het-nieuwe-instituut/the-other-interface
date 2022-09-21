import { Author, AuthorEntity, AuthorEntityResponse, AuthorEntityResponseCollection, AuthorFiltersInput, AuthorInput, BooleanFilterInput, ComponentCorePageHeader, ComponentCorePublicationDate, ComponentCorePublicationDateFiltersInput, ComponentCorePublicationDateInput, ComponentCoreTableBody, ComponentCoreTableBodyFiltersInput, ComponentCoreTableBodyInput, ComponentCoreTableBodyItem, ComponentCoreTableBodyItemFiltersInput, ComponentCoreTableBodyItemInput, ComponentCoreTableHead, ComponentCoreTableHeadFiltersInput, ComponentCoreTableHeadInput, ComponentCoreTableHeadItem, ComponentCoreTableHeadItemFiltersInput, ComponentCoreTableHeadItemInput, ComponentCoreTimeframe, ComponentCoreTimeframeFiltersInput, ComponentCoreTimeframeInput, ComponentModulesImage, ComponentModulesImageCarousel, ComponentModulesPullquote, ComponentModulesTableModule, ComponentModulesTextModule, ComponentModulesTitleModule, DateFilterInput, DateTimeFilterInput, Error, FileInfoInput, FloatFilterInput, Homepage, HomepageEntity, HomepageEntityResponse, HomepageInput, HomepageRelationResponseCollection, I18NLocale, I18NLocaleEntity, I18NLocaleEntityResponse, I18NLocaleEntityResponseCollection, I18NLocaleFiltersInput, IdFilterInput, IntFilterInput, JsonFilterInput, Landingpage, LandingpageEntity, LandingpageEntityResponse, LandingpageEntityResponseCollection, LandingpageFiltersInput, LandingpageInput, LandingpageRelationResponseCollection, Location, LocationEntity, LocationEntityResponse, LocationEntityResponseCollection, LocationFiltersInput, LocationInput, LocationRelationResponseCollection, LongFilterInput, Menupage, MenupageEntity, MenupageEntityResponse, MenupageEntityResponseCollection, MenupageFiltersInput, MenupageInput, MenupageRelationResponseCollection, Mutation, Pagination, PaginationArg, Query, ResponseCollectionMeta, Story, StoryEntity, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput, StoryInput, StoryRelationResponseCollection, StringFilterInput, Table, TableEntity, TableEntityResponse, TableEntityResponseCollection, TableFiltersInput, TableInput, UploadFile, UploadFileEntity, UploadFileEntityResponse, UploadFileEntityResponseCollection, UploadFileFiltersInput, UploadFileInput, UploadFileRelationResponseCollection, UploadFolder, UploadFolderEntity, UploadFolderEntityResponse, UploadFolderEntityResponseCollection, UploadFolderFiltersInput, UploadFolderInput, UploadFolderRelationResponseCollection, UsersPermissionsCreateRolePayload, UsersPermissionsDeleteRolePayload, UsersPermissionsLoginInput, UsersPermissionsLoginPayload, UsersPermissionsMe, UsersPermissionsMeRole, UsersPermissionsPasswordPayload, UsersPermissionsPermission, UsersPermissionsPermissionEntity, UsersPermissionsPermissionFiltersInput, UsersPermissionsPermissionRelationResponseCollection, UsersPermissionsRegisterInput, UsersPermissionsRole, UsersPermissionsRoleEntity, UsersPermissionsRoleEntityResponse, UsersPermissionsRoleEntityResponseCollection, UsersPermissionsRoleFiltersInput, UsersPermissionsRoleInput, UsersPermissionsUpdateRolePayload, UsersPermissionsUser, UsersPermissionsUserEntity, UsersPermissionsUserEntityResponse, UsersPermissionsUserEntityResponseCollection, UsersPermissionsUserFiltersInput, UsersPermissionsUserInput, UsersPermissionsUserRelationResponseCollection, EnumComponentcorepublicationdateDisplaytype, EnumComponentmodulestablemoduleTablemodulespacingbottom, EnumComponentmodulestablemoduleTablemodulespacingtop, EnumComponentmodulestextmoduleTextmodulespacingbottom, EnumComponentmodulestextmoduleTextmodulespacingtop, PublicationState } from '../generated/graphql';

export const anAuthor = (overrides?: Partial<Author>): Author => {
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'distinctio',
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'omnis',
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : 'illo',
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'ipsum',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'rerum',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'hic',
    };
};

export const anAuthorEntity = (overrides?: Partial<AuthorEntity>): AuthorEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : anAuthor(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0a2062cc-e102-46e6-88f9-ba9d3ea2e38f',
    };
};

export const anAuthorEntityResponse = (overrides?: Partial<AuthorEntityResponse>): AuthorEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : anAuthorEntity(),
    };
};

export const anAuthorEntityResponseCollection = (overrides?: Partial<AuthorEntityResponseCollection>): AuthorEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anAuthorEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const anAuthorFiltersInput = (overrides?: Partial<AuthorFiltersInput>): AuthorFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [anAuthorFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : aStringFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : aStringFilterInput(),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anAuthorFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [anAuthorFiltersInput()],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const anAuthorInput = (overrides?: Partial<AuthorInput>): AuthorInput => {
    return {
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'aut',
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : 'cum',
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'odio',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'sit',
    };
};

export const aBooleanFilterInput = (overrides?: Partial<BooleanFilterInput>): BooleanFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aBooleanFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : false,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : false,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [true],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [false],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : true,
    };
};

export const aComponentCorePageHeader = (overrides?: Partial<ComponentCorePageHeader>): ComponentCorePageHeader => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'dolore',
        content: overrides && overrides.hasOwnProperty('content') ? overrides.content! : 'illum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '56b4f843-e03d-4027-af18-11fa3418caa8',
    };
};

export const aComponentCorePublicationDate = (overrides?: Partial<ComponentCorePublicationDate>): ComponentCorePublicationDate => {
    return {
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : '1970-01-16T02:31:32.480Z',
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : EnumComponentcorepublicationdateDisplaytype.Date,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '315f9d7f-1a61-4489-8590-0fb737d3a0af',
    };
};

export const aComponentCorePublicationDateFiltersInput = (overrides?: Partial<ComponentCorePublicationDateFiltersInput>): ComponentCorePublicationDateFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCorePublicationDateFiltersInput()],
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : aDateFilterInput(),
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCorePublicationDateFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCorePublicationDateFiltersInput()],
    };
};

export const aComponentCorePublicationDateInput = (overrides?: Partial<ComponentCorePublicationDateInput>): ComponentCorePublicationDateInput => {
    return {
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : '1970-01-12T02:09:01.168Z',
        displayType: overrides && overrides.hasOwnProperty('displayType') ? overrides.displayType! : EnumComponentcorepublicationdateDisplaytype.Date,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2621920b-860c-4ca6-97fd-1c8dc9a9231f',
    };
};

export const aComponentCoreTableBody = (overrides?: Partial<ComponentCoreTableBody>): ComponentCoreTableBody => {
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : [aComponentCoreTableBodyItem()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bc6a110f-792c-4f21-bfd3-4f753f778921',
    };
};

export const aComponentCoreTableBodyFiltersInput = (overrides?: Partial<ComponentCoreTableBodyFiltersInput>): ComponentCoreTableBodyFiltersInput => {
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : aComponentCoreTableBodyItemFiltersInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCoreTableBodyFiltersInput()],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCoreTableBodyFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCoreTableBodyFiltersInput()],
    };
};

export const aComponentCoreTableBodyInput = (overrides?: Partial<ComponentCoreTableBodyInput>): ComponentCoreTableBodyInput => {
    return {
        TableBodyItem: overrides && overrides.hasOwnProperty('TableBodyItem') ? overrides.TableBodyItem! : [aComponentCoreTableBodyItemInput()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '52febbb7-8443-40dd-a942-48e171bbe992',
    };
};

export const aComponentCoreTableBodyItem = (overrides?: Partial<ComponentCoreTableBodyItem>): ComponentCoreTableBodyItem => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '32dfba1a-9144-4d51-82b0-dfe908d3b05d',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'cum',
    };
};

export const aComponentCoreTableBodyItemFiltersInput = (overrides?: Partial<ComponentCoreTableBodyItemFiltersInput>): ComponentCoreTableBodyItemFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCoreTableBodyItemFiltersInput()],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCoreTableBodyItemFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCoreTableBodyItemFiltersInput()],
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : aStringFilterInput(),
    };
};

export const aComponentCoreTableBodyItemInput = (overrides?: Partial<ComponentCoreTableBodyItemInput>): ComponentCoreTableBodyItemInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '70c4e7a1-60b8-4f71-89d5-67d141704c01',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'voluptates',
    };
};

export const aComponentCoreTableHead = (overrides?: Partial<ComponentCoreTableHead>): ComponentCoreTableHead => {
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : [aComponentCoreTableHeadItem()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'be6b9d26-845a-4fb0-97b6-136da16cdb9e',
    };
};

export const aComponentCoreTableHeadFiltersInput = (overrides?: Partial<ComponentCoreTableHeadFiltersInput>): ComponentCoreTableHeadFiltersInput => {
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : aComponentCoreTableHeadItemFiltersInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCoreTableHeadFiltersInput()],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCoreTableHeadFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCoreTableHeadFiltersInput()],
    };
};

export const aComponentCoreTableHeadInput = (overrides?: Partial<ComponentCoreTableHeadInput>): ComponentCoreTableHeadInput => {
    return {
        TableHeadItem: overrides && overrides.hasOwnProperty('TableHeadItem') ? overrides.TableHeadItem! : [aComponentCoreTableHeadItemInput()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '472a32d5-5e46-4315-a1ca-5ae91a544a8e',
    };
};

export const aComponentCoreTableHeadItem = (overrides?: Partial<ComponentCoreTableHeadItem>): ComponentCoreTableHeadItem => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd30d0267-fc95-405c-9478-85f94f089b2d',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'voluptatem',
    };
};

export const aComponentCoreTableHeadItemFiltersInput = (overrides?: Partial<ComponentCoreTableHeadItemFiltersInput>): ComponentCoreTableHeadItemFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCoreTableHeadItemFiltersInput()],
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCoreTableHeadItemFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCoreTableHeadItemFiltersInput()],
    };
};

export const aComponentCoreTableHeadItemInput = (overrides?: Partial<ComponentCoreTableHeadItemInput>): ComponentCoreTableHeadItemInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0098b46b-a0ac-44b9-b2bb-6e8ab0955db0',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'quas',
    };
};

export const aComponentCoreTimeframe = (overrides?: Partial<ComponentCoreTimeframe>): ComponentCoreTimeframe => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dcfa1846-89bf-4421-ad22-7e270213f2a9',
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : 'architecto',
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : 'autem',
    };
};

export const aComponentCoreTimeframeFiltersInput = (overrides?: Partial<ComponentCoreTimeframeFiltersInput>): ComponentCoreTimeframeFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aComponentCoreTimeframeFiltersInput()],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aComponentCoreTimeframeFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aComponentCoreTimeframeFiltersInput()],
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : aLongFilterInput(),
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : aLongFilterInput(),
    };
};

export const aComponentCoreTimeframeInput = (overrides?: Partial<ComponentCoreTimeframeInput>): ComponentCoreTimeframeInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6c954938-7d7e-4811-ad9f-b1a37bde7b40',
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : 'perferendis',
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : 'consequatur',
    };
};

export const aComponentModulesImage = (overrides?: Partial<ComponentModulesImage>): ComponentModulesImage => {
    return {
        alt_text: overrides && overrides.hasOwnProperty('alt_text') ? overrides.alt_text! : 'sint',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'possimus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8439cee4-53c6-4340-b9ee-9b88e7cafe67',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : anUploadFileEntityResponse(),
    };
};

export const aComponentModulesImageCarousel = (overrides?: Partial<ComponentModulesImageCarousel>): ComponentModulesImageCarousel => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'nostrum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'caa291cc-f344-4c8e-b7ad-3f6d9c22152d',
        images: overrides && overrides.hasOwnProperty('images') ? overrides.images! : anUploadFileRelationResponseCollection(),
    };
};

export const aComponentModulesPullquote = (overrides?: Partial<ComponentModulesPullquote>): ComponentModulesPullquote => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '473a3cf9-ea98-4cd3-80c7-7052f59eceb2',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'ut',
    };
};

export const aComponentModulesTableModule = (overrides?: Partial<ComponentModulesTableModule>): ComponentModulesTableModule => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'c786a0d0-1be7-4ff6-9cd7-235d871cc40b',
        table: overrides && overrides.hasOwnProperty('table') ? overrides.table! : aTableEntityResponse(),
        tableModuleSpacingBottom: overrides && overrides.hasOwnProperty('tableModuleSpacingBottom') ? overrides.tableModuleSpacingBottom! : EnumComponentmodulestablemoduleTablemodulespacingbottom.Lg,
        tableModuleSpacingTop: overrides && overrides.hasOwnProperty('tableModuleSpacingTop') ? overrides.tableModuleSpacingTop! : EnumComponentmodulestablemoduleTablemodulespacingtop.Lg,
    };
};

export const aComponentModulesTextModule = (overrides?: Partial<ComponentModulesTextModule>): ComponentModulesTextModule => {
    return {
        Richtext: overrides && overrides.hasOwnProperty('Richtext') ? overrides.Richtext! : 'quod',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '67c6aef3-e334-4d10-978d-30c1a76d59a3',
        textModuleSpacingBottom: overrides && overrides.hasOwnProperty('textModuleSpacingBottom') ? overrides.textModuleSpacingBottom! : EnumComponentmodulestextmoduleTextmodulespacingbottom.Lg,
        textModuleSpacingTop: overrides && overrides.hasOwnProperty('textModuleSpacingTop') ? overrides.textModuleSpacingTop! : EnumComponentmodulestextmoduleTextmodulespacingtop.Lg,
    };
};

export const aComponentModulesTitleModule = (overrides?: Partial<ComponentModulesTitleModule>): ComponentModulesTitleModule => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'quibusdam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aeabb66f-3a23-42b4-8215-f8fb4e849040',
    };
};

export const aDateFilterInput = (overrides?: Partial<DateFilterInput>): DateFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aDateFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '1970-01-05T22:04:37.725Z',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : '1970-01-04T20:58:04.572Z',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['1970-01-03T08:46:19.872Z'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['1970-01-05T00:29:49.006Z'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '1970-01-11T11:23:51.132Z',
    };
};

export const aDateTimeFilterInput = (overrides?: Partial<DateTimeFilterInput>): DateTimeFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aDateTimeFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'et',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'quia',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['eos'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['et'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'et',
    };
};

export const anError = (overrides?: Partial<Error>): Error => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'voluptas',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'et',
    };
};

export const aFileInfoInput = (overrides?: Partial<FileInfoInput>): FileInfoInput => {
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : 'voluptatem',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'eius',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'laudantium',
    };
};

export const aFloatFilterInput = (overrides?: Partial<FloatFilterInput>): FloatFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aFloatFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 1.95,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 2.56,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [1.41],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [3.07],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 9.37,
    };
};

export const aHomepage = (overrides?: Partial<Homepage>): Homepage => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'illum',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [aComponentModulesImage()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'doloremque',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'aut',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aHomepageRelationResponseCollection(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'corrupti',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'earum',
    };
};

export const aHomepageEntity = (overrides?: Partial<HomepageEntity>): HomepageEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aHomepage(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '79c69378-0bef-4bce-9b4a-f6091ff460f6',
    };
};

export const aHomepageEntityResponse = (overrides?: Partial<HomepageEntityResponse>): HomepageEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aHomepageEntity(),
    };
};

export const aHomepageInput = (overrides?: Partial<HomepageInput>): HomepageInput => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'vero',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['totam'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nobis',
    };
};

export const aHomepageRelationResponseCollection = (overrides?: Partial<HomepageRelationResponseCollection>): HomepageRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aHomepageEntity()],
    };
};

export const anI18NLocale = (overrides?: Partial<I18NLocale>): I18NLocale => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'vitae',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'est',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ut',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'harum',
    };
};

export const anI18NLocaleEntity = (overrides?: Partial<I18NLocaleEntity>): I18NLocaleEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : anI18NLocale(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '30679fcb-3c22-469a-b720-81b60d58f231',
    };
};

export const anI18NLocaleEntityResponse = (overrides?: Partial<I18NLocaleEntityResponse>): I18NLocaleEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : anI18NLocaleEntity(),
    };
};

export const anI18NLocaleEntityResponseCollection = (overrides?: Partial<I18NLocaleEntityResponseCollection>): I18NLocaleEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anI18NLocaleEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const anI18NLocaleFiltersInput = (overrides?: Partial<I18NLocaleFiltersInput>): I18NLocaleFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [anI18NLocaleFiltersInput()],
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : aStringFilterInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anI18NLocaleFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [anI18NLocaleFiltersInput()],
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const anIdFilterInput = (overrides?: Partial<IdFilterInput>): IdFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anIdFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '95e48f5a-459d-4027-a8ba-d2865db771ef',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : '7e51ca6a-b077-4c4e-b0b5-46d68932e39f',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['2b88c577-47fd-4581-b919-bd87830aeb40'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['eff70043-e02b-4406-b482-db16b3eca790'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '85ee213b-f8b7-446f-ac41-a9d7352556a8',
    };
};

export const anIntFilterInput = (overrides?: Partial<IntFilterInput>): IntFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anIntFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 3816,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 4218,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [7133],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [334],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 8478,
    };
};

export const aJsonFilterInput = (overrides?: Partial<JsonFilterInput>): JsonFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aJsonFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'autem',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'optio',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['itaque'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : true,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['magnam'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'sapiente',
    };
};

export const aLandingpage = (overrides?: Partial<Landingpage>): Landingpage => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'culpa',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [aComponentModulesImage()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'quos',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'consequuntur',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aLandingpageRelationResponseCollection(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'distinctio',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'dolore',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sed',
    };
};

export const aLandingpageEntity = (overrides?: Partial<LandingpageEntity>): LandingpageEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aLandingpage(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9710332d-4e06-453b-a6aa-18c7eb6d2980',
    };
};

export const aLandingpageEntityResponse = (overrides?: Partial<LandingpageEntityResponse>): LandingpageEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aLandingpageEntity(),
    };
};

export const aLandingpageEntityResponseCollection = (overrides?: Partial<LandingpageEntityResponseCollection>): LandingpageEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aLandingpageEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aLandingpageFiltersInput = (overrides?: Partial<LandingpageFiltersInput>): LandingpageFiltersInput => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : aStringFilterInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aLandingpageFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : aStringFilterInput(),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aLandingpageFiltersInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aLandingpageFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aLandingpageFiltersInput()],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : aStringFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aLandingpageInput = (overrides?: Partial<LandingpageInput>): LandingpageInput => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'excepturi',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['minima'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nihil',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'at',
    };
};

export const aLandingpageRelationResponseCollection = (overrides?: Partial<LandingpageRelationResponseCollection>): LandingpageRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aLandingpageEntity()],
    };
};

export const aLocation = (overrides?: Partial<Location>): Location => {
    return {
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'sit',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'qui',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'tempore',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aLocationRelationResponseCollection(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'dicta',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : aStoryRelationResponseCollection(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'culpa',
    };
};

export const aLocationEntity = (overrides?: Partial<LocationEntity>): LocationEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aLocation(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f0359d58-6fc7-45be-924c-60ba9cc6719f',
    };
};

export const aLocationEntityResponse = (overrides?: Partial<LocationEntityResponse>): LocationEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aLocationEntity(),
    };
};

export const aLocationEntityResponseCollection = (overrides?: Partial<LocationEntityResponseCollection>): LocationEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aLocationEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aLocationFiltersInput = (overrides?: Partial<LocationFiltersInput>): LocationFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aLocationFiltersInput()],
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : aStringFilterInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : aStringFilterInput(),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aLocationFiltersInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aLocationFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aLocationFiltersInput()],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : aStoryFiltersInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aLocationInput = (overrides?: Partial<LocationInput>): LocationInput => {
    return {
        city: overrides && overrides.hasOwnProperty('city') ? overrides.city! : 'nihil',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'aut',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : ['60ed9ce4-80ed-456c-a0e7-d1188a82a1f1'],
    };
};

export const aLocationRelationResponseCollection = (overrides?: Partial<LocationRelationResponseCollection>): LocationRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aLocationEntity()],
    };
};

export const aLongFilterInput = (overrides?: Partial<LongFilterInput>): LongFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aLongFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'incidunt',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'rerum',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['dignissimos'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['dolorem'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'molestiae',
    };
};

export const aMenupage = (overrides?: Partial<Menupage>): Menupage => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'aperiam',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [aComponentModulesImage()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'doloremque',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'id',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aMenupageRelationResponseCollection(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'ipsam',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'sit',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'omnis',
    };
};

export const aMenupageEntity = (overrides?: Partial<MenupageEntity>): MenupageEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aMenupage(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd088facc-8511-4616-899f-36a1a4068495',
    };
};

export const aMenupageEntityResponse = (overrides?: Partial<MenupageEntityResponse>): MenupageEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aMenupageEntity(),
    };
};

export const aMenupageEntityResponseCollection = (overrides?: Partial<MenupageEntityResponseCollection>): MenupageEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aMenupageEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aMenupageFiltersInput = (overrides?: Partial<MenupageFiltersInput>): MenupageFiltersInput => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : aStringFilterInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aMenupageFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : aStringFilterInput(),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aMenupageFiltersInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aMenupageFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aMenupageFiltersInput()],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : aStringFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aMenupageInput = (overrides?: Partial<MenupageInput>): MenupageInput => {
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'in',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['eius'],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'quo',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'rem',
    };
};

export const aMenupageRelationResponseCollection = (overrides?: Partial<MenupageRelationResponseCollection>): MenupageRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aMenupageEntity()],
    };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        createAuthor: overrides && overrides.hasOwnProperty('createAuthor') ? overrides.createAuthor! : anAuthorEntityResponse(),
        createHomepageLocalization: overrides && overrides.hasOwnProperty('createHomepageLocalization') ? overrides.createHomepageLocalization! : aHomepageEntityResponse(),
        createLandingpage: overrides && overrides.hasOwnProperty('createLandingpage') ? overrides.createLandingpage! : aLandingpageEntityResponse(),
        createLandingpageLocalization: overrides && overrides.hasOwnProperty('createLandingpageLocalization') ? overrides.createLandingpageLocalization! : aLandingpageEntityResponse(),
        createLocation: overrides && overrides.hasOwnProperty('createLocation') ? overrides.createLocation! : aLocationEntityResponse(),
        createLocationLocalization: overrides && overrides.hasOwnProperty('createLocationLocalization') ? overrides.createLocationLocalization! : aLocationEntityResponse(),
        createMenupage: overrides && overrides.hasOwnProperty('createMenupage') ? overrides.createMenupage! : aMenupageEntityResponse(),
        createMenupageLocalization: overrides && overrides.hasOwnProperty('createMenupageLocalization') ? overrides.createMenupageLocalization! : aMenupageEntityResponse(),
        createStory: overrides && overrides.hasOwnProperty('createStory') ? overrides.createStory! : aStoryEntityResponse(),
        createStoryLocalization: overrides && overrides.hasOwnProperty('createStoryLocalization') ? overrides.createStoryLocalization! : aStoryEntityResponse(),
        createTable: overrides && overrides.hasOwnProperty('createTable') ? overrides.createTable! : aTableEntityResponse(),
        createUploadFile: overrides && overrides.hasOwnProperty('createUploadFile') ? overrides.createUploadFile! : anUploadFileEntityResponse(),
        createUploadFolder: overrides && overrides.hasOwnProperty('createUploadFolder') ? overrides.createUploadFolder! : anUploadFolderEntityResponse(),
        createUsersPermissionsRole: overrides && overrides.hasOwnProperty('createUsersPermissionsRole') ? overrides.createUsersPermissionsRole! : aUsersPermissionsCreateRolePayload(),
        createUsersPermissionsUser: overrides && overrides.hasOwnProperty('createUsersPermissionsUser') ? overrides.createUsersPermissionsUser! : aUsersPermissionsUserEntityResponse(),
        deleteAuthor: overrides && overrides.hasOwnProperty('deleteAuthor') ? overrides.deleteAuthor! : anAuthorEntityResponse(),
        deleteHomepage: overrides && overrides.hasOwnProperty('deleteHomepage') ? overrides.deleteHomepage! : aHomepageEntityResponse(),
        deleteLandingpage: overrides && overrides.hasOwnProperty('deleteLandingpage') ? overrides.deleteLandingpage! : aLandingpageEntityResponse(),
        deleteLocation: overrides && overrides.hasOwnProperty('deleteLocation') ? overrides.deleteLocation! : aLocationEntityResponse(),
        deleteMenupage: overrides && overrides.hasOwnProperty('deleteMenupage') ? overrides.deleteMenupage! : aMenupageEntityResponse(),
        deleteStory: overrides && overrides.hasOwnProperty('deleteStory') ? overrides.deleteStory! : aStoryEntityResponse(),
        deleteTable: overrides && overrides.hasOwnProperty('deleteTable') ? overrides.deleteTable! : aTableEntityResponse(),
        deleteUploadFile: overrides && overrides.hasOwnProperty('deleteUploadFile') ? overrides.deleteUploadFile! : anUploadFileEntityResponse(),
        deleteUploadFolder: overrides && overrides.hasOwnProperty('deleteUploadFolder') ? overrides.deleteUploadFolder! : anUploadFolderEntityResponse(),
        deleteUsersPermissionsRole: overrides && overrides.hasOwnProperty('deleteUsersPermissionsRole') ? overrides.deleteUsersPermissionsRole! : aUsersPermissionsDeleteRolePayload(),
        deleteUsersPermissionsUser: overrides && overrides.hasOwnProperty('deleteUsersPermissionsUser') ? overrides.deleteUsersPermissionsUser! : aUsersPermissionsUserEntityResponse(),
        emailConfirmation: overrides && overrides.hasOwnProperty('emailConfirmation') ? overrides.emailConfirmation! : aUsersPermissionsLoginPayload(),
        forgotPassword: overrides && overrides.hasOwnProperty('forgotPassword') ? overrides.forgotPassword! : aUsersPermissionsPasswordPayload(),
        login: overrides && overrides.hasOwnProperty('login') ? overrides.login! : aUsersPermissionsLoginPayload(),
        multipleUpload: overrides && overrides.hasOwnProperty('multipleUpload') ? overrides.multipleUpload! : [anUploadFileEntityResponse()],
        register: overrides && overrides.hasOwnProperty('register') ? overrides.register! : aUsersPermissionsLoginPayload(),
        removeFile: overrides && overrides.hasOwnProperty('removeFile') ? overrides.removeFile! : anUploadFileEntityResponse(),
        resetPassword: overrides && overrides.hasOwnProperty('resetPassword') ? overrides.resetPassword! : aUsersPermissionsLoginPayload(),
        updateAuthor: overrides && overrides.hasOwnProperty('updateAuthor') ? overrides.updateAuthor! : anAuthorEntityResponse(),
        updateFileInfo: overrides && overrides.hasOwnProperty('updateFileInfo') ? overrides.updateFileInfo! : anUploadFileEntityResponse(),
        updateHomepage: overrides && overrides.hasOwnProperty('updateHomepage') ? overrides.updateHomepage! : aHomepageEntityResponse(),
        updateLandingpage: overrides && overrides.hasOwnProperty('updateLandingpage') ? overrides.updateLandingpage! : aLandingpageEntityResponse(),
        updateLocation: overrides && overrides.hasOwnProperty('updateLocation') ? overrides.updateLocation! : aLocationEntityResponse(),
        updateMenupage: overrides && overrides.hasOwnProperty('updateMenupage') ? overrides.updateMenupage! : aMenupageEntityResponse(),
        updateStory: overrides && overrides.hasOwnProperty('updateStory') ? overrides.updateStory! : aStoryEntityResponse(),
        updateTable: overrides && overrides.hasOwnProperty('updateTable') ? overrides.updateTable! : aTableEntityResponse(),
        updateUploadFile: overrides && overrides.hasOwnProperty('updateUploadFile') ? overrides.updateUploadFile! : anUploadFileEntityResponse(),
        updateUploadFolder: overrides && overrides.hasOwnProperty('updateUploadFolder') ? overrides.updateUploadFolder! : anUploadFolderEntityResponse(),
        updateUsersPermissionsRole: overrides && overrides.hasOwnProperty('updateUsersPermissionsRole') ? overrides.updateUsersPermissionsRole! : aUsersPermissionsUpdateRolePayload(),
        updateUsersPermissionsUser: overrides && overrides.hasOwnProperty('updateUsersPermissionsUser') ? overrides.updateUsersPermissionsUser! : aUsersPermissionsUserEntityResponse(),
        upload: overrides && overrides.hasOwnProperty('upload') ? overrides.upload! : anUploadFileEntityResponse(),
    };
};

export const aPagination = (overrides?: Partial<Pagination>): Pagination => {
    return {
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 9885,
        pageCount: overrides && overrides.hasOwnProperty('pageCount') ? overrides.pageCount! : 8144,
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 9732,
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 8641,
    };
};

export const aPaginationArg = (overrides?: Partial<PaginationArg>): PaginationArg => {
    return {
        limit: overrides && overrides.hasOwnProperty('limit') ? overrides.limit! : 1659,
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 2627,
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 1621,
        start: overrides && overrides.hasOwnProperty('start') ? overrides.start! : 1033,
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        StoryPostBySlug: overrides && overrides.hasOwnProperty('StoryPostBySlug') ? overrides.StoryPostBySlug! : aStoryEntityResponse(),
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : anAuthorEntityResponse(),
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : anAuthorEntityResponseCollection(),
        homepage: overrides && overrides.hasOwnProperty('homepage') ? overrides.homepage! : aHomepageEntityResponse(),
        i18NLocale: overrides && overrides.hasOwnProperty('i18NLocale') ? overrides.i18NLocale! : anI18NLocaleEntityResponse(),
        i18NLocales: overrides && overrides.hasOwnProperty('i18NLocales') ? overrides.i18NLocales! : anI18NLocaleEntityResponseCollection(),
        landingpage: overrides && overrides.hasOwnProperty('landingpage') ? overrides.landingpage! : aLandingpageEntityResponse(),
        landingpages: overrides && overrides.hasOwnProperty('landingpages') ? overrides.landingpages! : aLandingpageEntityResponseCollection(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : aLocationEntityResponse(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : aLocationEntityResponseCollection(),
        me: overrides && overrides.hasOwnProperty('me') ? overrides.me! : aUsersPermissionsMe(),
        menupage: overrides && overrides.hasOwnProperty('menupage') ? overrides.menupage! : aMenupageEntityResponse(),
        menupages: overrides && overrides.hasOwnProperty('menupages') ? overrides.menupages! : aMenupageEntityResponseCollection(),
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : aStoryEntityResponseCollection(),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : aStoryEntityResponse(),
        table: overrides && overrides.hasOwnProperty('table') ? overrides.table! : aTableEntityResponse(),
        tables: overrides && overrides.hasOwnProperty('tables') ? overrides.tables! : aTableEntityResponseCollection(),
        uploadFile: overrides && overrides.hasOwnProperty('uploadFile') ? overrides.uploadFile! : anUploadFileEntityResponse(),
        uploadFiles: overrides && overrides.hasOwnProperty('uploadFiles') ? overrides.uploadFiles! : anUploadFileEntityResponseCollection(),
        uploadFolder: overrides && overrides.hasOwnProperty('uploadFolder') ? overrides.uploadFolder! : anUploadFolderEntityResponse(),
        uploadFolders: overrides && overrides.hasOwnProperty('uploadFolders') ? overrides.uploadFolders! : anUploadFolderEntityResponseCollection(),
        usersPermissionsRole: overrides && overrides.hasOwnProperty('usersPermissionsRole') ? overrides.usersPermissionsRole! : aUsersPermissionsRoleEntityResponse(),
        usersPermissionsRoles: overrides && overrides.hasOwnProperty('usersPermissionsRoles') ? overrides.usersPermissionsRoles! : aUsersPermissionsRoleEntityResponseCollection(),
        usersPermissionsUser: overrides && overrides.hasOwnProperty('usersPermissionsUser') ? overrides.usersPermissionsUser! : aUsersPermissionsUserEntityResponse(),
        usersPermissionsUsers: overrides && overrides.hasOwnProperty('usersPermissionsUsers') ? overrides.usersPermissionsUsers! : aUsersPermissionsUserEntityResponseCollection(),
    };
};

export const aResponseCollectionMeta = (overrides?: Partial<ResponseCollectionMeta>): ResponseCollectionMeta => {
    return {
        pagination: overrides && overrides.hasOwnProperty('pagination') ? overrides.pagination! : aPagination(),
    };
};

export const aStory = (overrides?: Partial<Story>): Story => {
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : anAuthorEntityResponse(),
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [aComponentModulesImage()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'impedit',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'laudantium',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aStoryRelationResponseCollection(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : aLocationRelationResponseCollection(),
        preface: overrides && overrides.hasOwnProperty('preface') ? overrides.preface! : 'aspernatur',
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : aComponentCorePublicationDate(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'et',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'minima',
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : aComponentCoreTimeframe(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'deleniti',
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : 'error',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'cumque',
    };
};

export const aStoryEntity = (overrides?: Partial<StoryEntity>): StoryEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aStory(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f181cbb0-0fb8-42a2-9a5a-07a9bb5fd22c',
    };
};

export const aStoryEntityResponse = (overrides?: Partial<StoryEntityResponse>): StoryEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aStoryEntity(),
    };
};

export const aStoryEntityResponseCollection = (overrides?: Partial<StoryEntityResponseCollection>): StoryEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aStoryEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aStoryFiltersInput = (overrides?: Partial<StoryFiltersInput>): StoryFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aStoryFiltersInput()],
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : anAuthorFiltersInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : aStringFilterInput(),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : aStoryFiltersInput(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : aLocationFiltersInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aStoryFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aStoryFiltersInput()],
        preface: overrides && overrides.hasOwnProperty('preface') ? overrides.preface! : aStringFilterInput(),
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : aComponentCorePublicationDateFiltersInput(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : aStringFilterInput(),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : aComponentCoreTimeframeFiltersInput(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : aStringFilterInput(),
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : aStringFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aStoryInput = (overrides?: Partial<StoryInput>): StoryInput => {
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : 'da466e6a-9e48-4074-8653-af51bc678fec',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : ['nesciunt'],
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : ['6160e737-90eb-492d-b5fe-34a5ddb88a50'],
        preface: overrides && overrides.hasOwnProperty('preface') ? overrides.preface! : 'id',
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : aComponentCorePublicationDateInput(),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nemo',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'earum',
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : aComponentCoreTimeframeInput(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'voluptates',
        triply_people: overrides && overrides.hasOwnProperty('triply_people') ? overrides.triply_people! : 'modi',
    };
};

export const aStoryRelationResponseCollection = (overrides?: Partial<StoryRelationResponseCollection>): StoryRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aStoryEntity()],
    };
};

export const aStringFilterInput = (overrides?: Partial<StringFilterInput>): StringFilterInput => {
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
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aStringFilterInput(),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 'dolorem',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'est',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['veritatis'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['aperiam'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 'quia',
    };
};

export const aTable = (overrides?: Partial<Table>): Table => {
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : [aComponentCoreTableBody()],
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : aComponentCoreTableHead(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'vel',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'aperiam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sequi',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'nemo',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'amet',
    };
};

export const aTableEntity = (overrides?: Partial<TableEntity>): TableEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aTable(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bc044baf-2bc1-4347-b2f7-28bdb3548bf8',
    };
};

export const aTableEntityResponse = (overrides?: Partial<TableEntityResponse>): TableEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aTableEntity(),
    };
};

export const aTableEntityResponseCollection = (overrides?: Partial<TableEntityResponseCollection>): TableEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aTableEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aTableFiltersInput = (overrides?: Partial<TableFiltersInput>): TableFiltersInput => {
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : aComponentCoreTableBodyFiltersInput(),
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : aComponentCoreTableHeadFiltersInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aTableFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aTableFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aTableFiltersInput()],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : aDateTimeFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aTableInput = (overrides?: Partial<TableInput>): TableInput => {
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : [aComponentCoreTableBodyInput()],
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : aComponentCoreTableHeadInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'reiciendis',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'optio',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : 'est',
    };
};

export const anUploadFile = (overrides?: Partial<UploadFile>): UploadFile => {
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
        related: overrides && overrides.hasOwnProperty('related') ? overrides.related! : [anAuthor()],
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : 6.1,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'ut',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'vel',
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 6280,
    };
};

export const anUploadFileEntity = (overrides?: Partial<UploadFileEntity>): UploadFileEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : anUploadFile(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5f057c44-fdac-4e38-9b86-faa8ab3e968c',
    };
};

export const anUploadFileEntityResponse = (overrides?: Partial<UploadFileEntityResponse>): UploadFileEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : anUploadFileEntity(),
    };
};

export const anUploadFileEntityResponseCollection = (overrides?: Partial<UploadFileEntityResponseCollection>): UploadFileEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anUploadFileEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const anUploadFileFiltersInput = (overrides?: Partial<UploadFileFiltersInput>): UploadFileFiltersInput => {
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : aStringFilterInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [anUploadFileFiltersInput()],
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : aStringFilterInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        ext: overrides && overrides.hasOwnProperty('ext') ? overrides.ext! : aStringFilterInput(),
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : anUploadFolderFiltersInput(),
        folderPath: overrides && overrides.hasOwnProperty('folderPath') ? overrides.folderPath! : aStringFilterInput(),
        formats: overrides && overrides.hasOwnProperty('formats') ? overrides.formats! : aJsonFilterInput(),
        hash: overrides && overrides.hasOwnProperty('hash') ? overrides.hash! : aStringFilterInput(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : anIntFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        mime: overrides && overrides.hasOwnProperty('mime') ? overrides.mime! : aStringFilterInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anUploadFileFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [anUploadFileFiltersInput()],
        previewUrl: overrides && overrides.hasOwnProperty('previewUrl') ? overrides.previewUrl! : aStringFilterInput(),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : aStringFilterInput(),
        provider_metadata: overrides && overrides.hasOwnProperty('provider_metadata') ? overrides.provider_metadata! : aJsonFilterInput(),
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : aFloatFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : aStringFilterInput(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : anIntFilterInput(),
    };
};

export const anUploadFileInput = (overrides?: Partial<UploadFileInput>): UploadFileInput => {
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

export const anUploadFileRelationResponseCollection = (overrides?: Partial<UploadFileRelationResponseCollection>): UploadFileRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anUploadFileEntity()],
    };
};

export const anUploadFolder = (overrides?: Partial<UploadFolder>): UploadFolder => {
    return {
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : anUploadFolderRelationResponseCollection(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'non',
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : anUploadFileRelationResponseCollection(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aperiam',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : anUploadFolderEntityResponse(),
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'ducimus',
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : 5135,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'est',
    };
};

export const anUploadFolderEntity = (overrides?: Partial<UploadFolderEntity>): UploadFolderEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : anUploadFolder(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e44e56c5-44e8-442e-88cd-54fd34829d44',
    };
};

export const anUploadFolderEntityResponse = (overrides?: Partial<UploadFolderEntityResponse>): UploadFolderEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : anUploadFolderEntity(),
    };
};

export const anUploadFolderEntityResponseCollection = (overrides?: Partial<UploadFolderEntityResponseCollection>): UploadFolderEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anUploadFolderEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const anUploadFolderFiltersInput = (overrides?: Partial<UploadFolderFiltersInput>): UploadFolderFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [anUploadFolderFiltersInput()],
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : anUploadFolderFiltersInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : anUploadFileFiltersInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : anUploadFolderFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [anUploadFolderFiltersInput()],
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : anUploadFolderFiltersInput(),
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : aStringFilterInput(),
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : anIntFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const anUploadFolderInput = (overrides?: Partial<UploadFolderInput>): UploadFolderInput => {
    return {
        children: overrides && overrides.hasOwnProperty('children') ? overrides.children! : ['e4faf2bf-5c81-40c1-8a0d-212a3daab9ef'],
        files: overrides && overrides.hasOwnProperty('files') ? overrides.files! : ['d731b7dd-706a-4f83-966a-633ea4ab590c'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aperiam',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : '3cf4262d-a1c7-487d-bf6e-2d1207f2fc24',
        path: overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'corporis',
        pathId: overrides && overrides.hasOwnProperty('pathId') ? overrides.pathId! : 5851,
    };
};

export const anUploadFolderRelationResponseCollection = (overrides?: Partial<UploadFolderRelationResponseCollection>): UploadFolderRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [anUploadFolderEntity()],
    };
};

export const aUsersPermissionsCreateRolePayload = (overrides?: Partial<UsersPermissionsCreateRolePayload>): UsersPermissionsCreateRolePayload => {
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : true,
    };
};

export const aUsersPermissionsDeleteRolePayload = (overrides?: Partial<UsersPermissionsDeleteRolePayload>): UsersPermissionsDeleteRolePayload => {
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : false,
    };
};

export const aUsersPermissionsLoginInput = (overrides?: Partial<UsersPermissionsLoginInput>): UsersPermissionsLoginInput => {
    return {
        identifier: overrides && overrides.hasOwnProperty('identifier') ? overrides.identifier! : 'totam',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'est',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'sequi',
    };
};

export const aUsersPermissionsLoginPayload = (overrides?: Partial<UsersPermissionsLoginPayload>): UsersPermissionsLoginPayload => {
    return {
        jwt: overrides && overrides.hasOwnProperty('jwt') ? overrides.jwt! : 'fugit',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : aUsersPermissionsMe(),
    };
};

export const aUsersPermissionsMe = (overrides?: Partial<UsersPermissionsMe>): UsersPermissionsMe => {
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : true,
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : true,
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'doloremque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dfcecf11-bbe0-4704-a84a-a3511c2d37e7',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aUsersPermissionsMeRole(),
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'aut',
    };
};

export const aUsersPermissionsMeRole = (overrides?: Partial<UsersPermissionsMeRole>): UsersPermissionsMeRole => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptas',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '291d136c-a2d0-4f86-b3ba-8f2cb50fc98e',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sed',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'accusantium',
    };
};

export const aUsersPermissionsPasswordPayload = (overrides?: Partial<UsersPermissionsPasswordPayload>): UsersPermissionsPasswordPayload => {
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : false,
    };
};

export const aUsersPermissionsPermission = (overrides?: Partial<UsersPermissionsPermission>): UsersPermissionsPermission => {
    return {
        action: overrides && overrides.hasOwnProperty('action') ? overrides.action! : 'aperiam',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'voluptate',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aUsersPermissionsRoleEntityResponse(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'sequi',
    };
};

export const aUsersPermissionsPermissionEntity = (overrides?: Partial<UsersPermissionsPermissionEntity>): UsersPermissionsPermissionEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aUsersPermissionsPermission(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a98791bc-3951-4555-a9a8-7e897074f68a',
    };
};

export const aUsersPermissionsPermissionFiltersInput = (overrides?: Partial<UsersPermissionsPermissionFiltersInput>): UsersPermissionsPermissionFiltersInput => {
    return {
        action: overrides && overrides.hasOwnProperty('action') ? overrides.action! : aStringFilterInput(),
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aUsersPermissionsPermissionFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aUsersPermissionsPermissionFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aUsersPermissionsPermissionFiltersInput()],
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aUsersPermissionsRoleFiltersInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
    };
};

export const aUsersPermissionsPermissionRelationResponseCollection = (overrides?: Partial<UsersPermissionsPermissionRelationResponseCollection>): UsersPermissionsPermissionRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aUsersPermissionsPermissionEntity()],
    };
};

export const aUsersPermissionsRegisterInput = (overrides?: Partial<UsersPermissionsRegisterInput>): UsersPermissionsRegisterInput => {
    return {
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'esse',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'dolore',
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'laudantium',
    };
};

export const aUsersPermissionsRole = (overrides?: Partial<UsersPermissionsRole>): UsersPermissionsRole => {
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'mollitia',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'harum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quae',
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : aUsersPermissionsPermissionRelationResponseCollection(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'sed',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'amet',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : aUsersPermissionsUserRelationResponseCollection(),
    };
};

export const aUsersPermissionsRoleEntity = (overrides?: Partial<UsersPermissionsRoleEntity>): UsersPermissionsRoleEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aUsersPermissionsRole(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b15ef2a7-ca1d-4749-815f-83899100e9d7',
    };
};

export const aUsersPermissionsRoleEntityResponse = (overrides?: Partial<UsersPermissionsRoleEntityResponse>): UsersPermissionsRoleEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aUsersPermissionsRoleEntity(),
    };
};

export const aUsersPermissionsRoleEntityResponseCollection = (overrides?: Partial<UsersPermissionsRoleEntityResponseCollection>): UsersPermissionsRoleEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aUsersPermissionsRoleEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aUsersPermissionsRoleFiltersInput = (overrides?: Partial<UsersPermissionsRoleFiltersInput>): UsersPermissionsRoleFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aUsersPermissionsRoleFiltersInput()],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aUsersPermissionsRoleFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aUsersPermissionsRoleFiltersInput()],
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : aUsersPermissionsPermissionFiltersInput(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : aStringFilterInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : aUsersPermissionsUserFiltersInput(),
    };
};

export const aUsersPermissionsRoleInput = (overrides?: Partial<UsersPermissionsRoleInput>): UsersPermissionsRoleInput => {
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'est',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'suscipit',
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : ['82b8be2b-929e-4872-8e0e-33c7d8bea3ef'],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'facilis',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : ['af27511c-06bc-42c5-a943-60485dc06fde'],
    };
};

export const aUsersPermissionsUpdateRolePayload = (overrides?: Partial<UsersPermissionsUpdateRolePayload>): UsersPermissionsUpdateRolePayload => {
    return {
        ok: overrides && overrides.hasOwnProperty('ok') ? overrides.ok! : true,
    };
};

export const aUsersPermissionsUser = (overrides?: Partial<UsersPermissionsUser>): UsersPermissionsUser => {
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : false,
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : false,
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : 'omnis',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'id',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'saepe',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aUsersPermissionsRoleEntityResponse(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : 'voluptas',
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : 'inventore',
    };
};

export const aUsersPermissionsUserEntity = (overrides?: Partial<UsersPermissionsUserEntity>): UsersPermissionsUserEntity => {
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : aUsersPermissionsUser(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '18b55aa1-2d62-42fa-8814-77d373abbe95',
    };
};

export const aUsersPermissionsUserEntityResponse = (overrides?: Partial<UsersPermissionsUserEntityResponse>): UsersPermissionsUserEntityResponse => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : aUsersPermissionsUserEntity(),
    };
};

export const aUsersPermissionsUserEntityResponseCollection = (overrides?: Partial<UsersPermissionsUserEntityResponseCollection>): UsersPermissionsUserEntityResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aUsersPermissionsUserEntity()],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : aResponseCollectionMeta(),
    };
};

export const aUsersPermissionsUserFiltersInput = (overrides?: Partial<UsersPermissionsUserFiltersInput>): UsersPermissionsUserFiltersInput => {
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [aUsersPermissionsUserFiltersInput()],
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : aBooleanFilterInput(),
        confirmationToken: overrides && overrides.hasOwnProperty('confirmationToken') ? overrides.confirmationToken! : aStringFilterInput(),
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : aBooleanFilterInput(),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : aDateTimeFilterInput(),
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : aStringFilterInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : anIdFilterInput(),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : aUsersPermissionsUserFiltersInput(),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [aUsersPermissionsUserFiltersInput()],
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : aStringFilterInput(),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : aStringFilterInput(),
        resetPasswordToken: overrides && overrides.hasOwnProperty('resetPasswordToken') ? overrides.resetPasswordToken! : aStringFilterInput(),
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aUsersPermissionsRoleFiltersInput(),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : aDateTimeFilterInput(),
        username: overrides && overrides.hasOwnProperty('username') ? overrides.username! : aStringFilterInput(),
    };
};

export const aUsersPermissionsUserInput = (overrides?: Partial<UsersPermissionsUserInput>): UsersPermissionsUserInput => {
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

export const aUsersPermissionsUserRelationResponseCollection = (overrides?: Partial<UsersPermissionsUserRelationResponseCollection>): UsersPermissionsUserRelationResponseCollection => {
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [aUsersPermissionsUserEntity()],
    };
};
