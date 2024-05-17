import { ArchiveRelationsType, ArchiveZoomLevel3DetailType, ArchivesFondsCreatorType, ArchivesFondsZoomLevel3DetailType, ArchivesOtherZoomLevel3DetailType, ArchivesRecordZoomLevel3Type, ArchivesRelationsCountType, ArchivesZoomLevelHoverType, Author, AuthorEntity, AuthorEntityResponse, AuthorEntityResponseCollection, AuthorFiltersInput, BooleanFilterInput, ComponentCoreButton, ComponentCoreButtonFiltersInput, ComponentCoreCarouselItem, ComponentCoreFeaturedFields, ComponentCoreGridFeaturedFields, ComponentCoreModuleLayoutsFiltersInput, ComponentCorePublicationDate, ComponentCorePublicationDateFiltersInput, ComponentCoreTimeframe, ComponentCoreTimeframeFiltersInput, ComponentModulesButtonsModule, ComponentModulesButtonsModuleFiltersInput, ComponentModulesCarousel, ComponentModulesGridModule, ComponentModulesImage, ComponentModulesImageCarousel, ComponentModulesPullquote, ComponentModulesSubtitle, ComponentModulesTextModule, ComponentModulesTitleModule, DateFilterInput, DateTimeFilterInput, Error, Homepage, HomepageEntity, HomepageEntityResponse, HomepageRelationResponseCollection, IdFilterInput, Landingpage, LandingpageEntity, LandingpageEntityResponse, LandingpageEntityResponseCollection, LandingpageFiltersInput, LandingpageRelationResponseCollection, Location, LocationEntity, LocationEntityResponse, LocationFiltersInput, LocationRelationResponseCollection, LongFilterInput, Menupage, MenupageEntity, MenupageEntityResponse, MenupageEntityResponseCollection, MenupageFiltersInput, MenupageRelationResponseCollection, ObjectMakerType, ObjectMaterialType, ObjectRecordZoomLevel3Type, ObjectRelationsCountType, ObjectRelationsType, ObjectTechniqueType, ObjectsZoomLevel3DetailType, ObjectsZoomLevelHoverType, Pagination, PaginationArg, PeopleAssociationType, PeopleRecordZoomLevel3Type, PeopleRelationsCountType, PeopleRelationsType, PeopleZoomLevel3DetailType, PeopleZoomLevelHoverType, PublicationAuthorType, PublicationRecordZoomLevel3Type, PublicationRelationsType, PublicationZoomLevel3DetailType, PublicationsArticleZoomLevel3DetailType, PublicationsAudioVisualZoomLevel3DetailType, PublicationsBookZoomLevel3DetailType, PublicationsRelationsCountType, PublicationsSerialZoomLevel3DetailType, PublicationsZoomLevelHoverType, Query, ResponseCollectionMeta, StoriesRelatedToThemeResponse, Story, StoryCountType, StoryEntity, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput, StoryMetaEntityResponseCollection, StoryRelationResponseCollection, StoryWithoutRelations, StoryWithoutRelationsEntity, StoryWithoutRelationsEntityResponse, StoryWithoutRelationsEntityResponseCollection, StringFilterInput, Theme, ThemeEntity, ThemeEntityResponse, ThemeFiltersInput, ThemeRelationResponseCollection, TriplyRecord, TriplyRecordEntity, TriplyRecordEntityResponse, TriplyRecordFiltersInput, TriplyRecordRelationResponseCollection, UploadFile, UploadFileEntity, UploadFileEntityResponse, UploadFileRelationResponseCollection, UsersPermissionsPermission, UsersPermissionsPermissionEntity, UsersPermissionsPermissionFiltersInput, UsersPermissionsPermissionRelationResponseCollection, UsersPermissionsRole, UsersPermissionsRoleEntity, UsersPermissionsRoleEntityResponse, UsersPermissionsRoleFiltersInput, UsersPermissionsUser, UsersPermissionsUserEntity, UsersPermissionsUserEntityResponse, UsersPermissionsUserEntityResponseCollection, UsersPermissionsUserFiltersInput, UsersPermissionsUserRelationResponseCollection, ZoomLevel1Type, ZoomLevel2AmountParentType, ZoomLevel2ParentType, ZoomLevel2Type, ZoomLevel3RelationsType, ZoomLevel3StoriesRelatedToRecordType, ZoomLevel3StoryRelationsCountType, ArchivesZoomLevel3Types, EntityNames, EnumComponentcorecarouselitemType, EnumComponentcorepublicationdateDisplaytype, EnumComponentmodulesbuttonsmoduleButtonstyle, EnumComponentmodulescarouselType, EnumComponentmodulesgridmoduleFieldtypes, EnumTriplyrecordType, PublicationsZoomLevel3Types } from '../generated/graphql';

export const anArchiveRelationsType = (overrides?: Partial<ArchiveRelationsType>, _relationshipsToOmit: Array<string> = []): ArchiveRelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchiveRelationsType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'voluptas',
        period: overrides && overrides.hasOwnProperty('period') ? overrides.period! : 'asperiores',
        referenceNumber: overrides && overrides.hasOwnProperty('referenceNumber') ? overrides.referenceNumber! : 'porro',
        titleR: overrides && overrides.hasOwnProperty('titleR') ? overrides.titleR! : 'fugit',
    };
};

export const anArchiveZoomLevel3DetailType = (overrides?: Partial<ArchiveZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): ArchiveZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchiveZoomLevel3DetailType']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'facere',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'tempora',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'consequatur',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : ['consequatur'],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'enim',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};

export const anArchivesFondsCreatorType = (overrides?: Partial<ArchivesFondsCreatorType>, _relationshipsToOmit: Array<string> = []): ArchivesFondsCreatorType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesFondsCreatorType']);
    return {
        creator: overrides && overrides.hasOwnProperty('creator') ? overrides.creator! : 'assumenda',
        creatorHistory: overrides && overrides.hasOwnProperty('creatorHistory') ? overrides.creatorHistory! : 'omnis',
        creatorLabel: overrides && overrides.hasOwnProperty('creatorLabel') ? overrides.creatorLabel! : 'pariatur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quam',
        populatedCreator: overrides && overrides.hasOwnProperty('populatedCreator') ? overrides.populatedCreator! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
    };
};

export const anArchivesFondsZoomLevel3DetailType = (overrides?: Partial<ArchivesFondsZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): ArchivesFondsZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesFondsZoomLevel3DetailType']);
    return {
        appendices: overrides && overrides.hasOwnProperty('appendices') ? overrides.appendices! : 'ducimus',
        conditionsGoverningAccess: overrides && overrides.hasOwnProperty('conditionsGoverningAccess') ? overrides.conditionsGoverningAccess! : 'animi',
        contentScope: overrides && overrides.hasOwnProperty('contentScope') ? overrides.contentScope! : 'quis',
        creators: overrides && overrides.hasOwnProperty('creators') ? overrides.creators! : [relationshipsToOmit.includes('ArchivesFondsCreatorType') ? {} as ArchivesFondsCreatorType : anArchivesFondsCreatorType({}, relationshipsToOmit)],
        custodialHistory: overrides && overrides.hasOwnProperty('custodialHistory') ? overrides.custodialHistory! : 'necessitatibus',
        descriptionLevel: overrides && overrides.hasOwnProperty('descriptionLevel') ? overrides.descriptionLevel! : 'dolorem',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'mollitia',
        extent: overrides && overrides.hasOwnProperty('extent') ? overrides.extent! : 'sint',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'sunt',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'aut',
        partReference: overrides && overrides.hasOwnProperty('partReference') ? overrides.partReference! : 'maiores',
        partTitle: overrides && overrides.hasOwnProperty('partTitle') ? overrides.partTitle! : 'est',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'nulla',
        productionDate: overrides && overrides.hasOwnProperty('productionDate') ? overrides.productionDate! : 'nesciunt',
        recordTitle: overrides && overrides.hasOwnProperty('recordTitle') ? overrides.recordTitle! : 'qui',
        relatedMaterial: overrides && overrides.hasOwnProperty('relatedMaterial') ? overrides.relatedMaterial! : 'quia',
        repository: overrides && overrides.hasOwnProperty('repository') ? overrides.repository! : 'delectus',
        repositoryLabel: overrides && overrides.hasOwnProperty('repositoryLabel') ? overrides.repositoryLabel! : 'unde',
        right: overrides && overrides.hasOwnProperty('right') ? overrides.right! : 'molestias',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'quisquam',
        source: overrides && overrides.hasOwnProperty('source') ? overrides.source! : 'ut',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'harum',
        systemOfArrangement: overrides && overrides.hasOwnProperty('systemOfArrangement') ? overrides.systemOfArrangement! : 'et',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'aliquid',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'rem',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ArchivesZoomLevel3Types.Fonds,
    };
};

export const anArchivesOtherZoomLevel3DetailType = (overrides?: Partial<ArchivesOtherZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): ArchivesOtherZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesOtherZoomLevel3DetailType']);
    return {
        dateLabel: overrides && overrides.hasOwnProperty('dateLabel') ? overrides.dateLabel! : 'asperiores',
        dimensionFree: overrides && overrides.hasOwnProperty('dimensionFree') ? overrides.dimensionFree! : 'laudantium',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'perspiciatis',
        existenceOfOriginals: overrides && overrides.hasOwnProperty('existenceOfOriginals') ? overrides.existenceOfOriginals! : 'suscipit',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ex',
        mediaReference: overrides && overrides.hasOwnProperty('mediaReference') ? overrides.mediaReference! : 'facere',
        mediaReferenceLabel: overrides && overrides.hasOwnProperty('mediaReferenceLabel') ? overrides.mediaReferenceLabel! : 'enim',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'qui',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'qui',
        pidWorkURIs: overrides && overrides.hasOwnProperty('pidWorkURIs') ? overrides.pidWorkURIs! : ['totam'],
        relatedMaterial: overrides && overrides.hasOwnProperty('relatedMaterial') ? overrides.relatedMaterial! : 'harum',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'dignissimos',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'voluptas',
        scopeContent: overrides && overrides.hasOwnProperty('scopeContent') ? overrides.scopeContent! : 'omnis',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'voluptatem',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'repudiandae',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'iste',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ArchivesZoomLevel3Types.Fonds,
    };
};

export const anArchivesRecordZoomLevel3Type = (overrides?: Partial<ArchivesRecordZoomLevel3Type>, _relationshipsToOmit: Array<string> = []): ArchivesRecordZoomLevel3Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesRecordZoomLevel3Type']);
    return {
        access: overrides && overrides.hasOwnProperty('access') ? overrides.access! : 'sit',
        descriptionLevel: overrides && overrides.hasOwnProperty('descriptionLevel') ? overrides.descriptionLevel! : 'voluptatem',
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'dolore',
        period: overrides && overrides.hasOwnProperty('period') ? overrides.period! : 'tempore',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'illo',
        photographCreator: overrides && overrides.hasOwnProperty('photographCreator') ? overrides.photographCreator! : 'maxime',
        referenceCode: overrides && overrides.hasOwnProperty('referenceCode') ? overrides.referenceCode! : 'quia',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'maxime',
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : 'et',
        titleType: overrides && overrides.hasOwnProperty('titleType') ? overrides.titleType! : 'quis',
    };
};

export const anArchivesRelationsCountType = (overrides?: Partial<ArchivesRelationsCountType>, _relationshipsToOmit: Array<string> = []): ArchivesRelationsCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesRelationsCountType']);
    return {
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 'ipsa',
    };
};

export const anArchivesZoomLevelHoverType = (overrides?: Partial<ArchivesZoomLevelHoverType>, _relationshipsToOmit: Array<string> = []): ArchivesZoomLevelHoverType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesZoomLevelHoverType']);
    return {
        creators: overrides && overrides.hasOwnProperty('creators') ? overrides.creators! : 'magni',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'repellat',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'ut',
    };
};

export const anAuthor = (overrides?: Partial<Author>, _relationshipsToOmit: Array<string> = []): Author => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Author']);
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-12T04:23:33.190Z',
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : 'omnis',
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : 'illo',
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : 'ipsum',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-11T20:21:31.357Z',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-17T02:07:36.591Z',
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
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        triply_record: overrides && overrides.hasOwnProperty('triply_record') ? overrides.triply_record! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EnumComponentcorecarouselitemType.Highlight,
    };
};

export const aComponentCoreFeaturedFields = (overrides?: Partial<ComponentCoreFeaturedFields>, _relationshipsToOmit: Array<string> = []): ComponentCoreFeaturedFields => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreFeaturedFields']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f749938e-0fd9-46d9-a8a9-72ed50c5f6d8',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'vitae',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'aperiam',
    };
};

export const aComponentCoreGridFeaturedFields = (overrides?: Partial<ComponentCoreGridFeaturedFields>, _relationshipsToOmit: Array<string> = []): ComponentCoreGridFeaturedFields => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreGridFeaturedFields']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5e683159-dffa-49bc-aa67-03fa04311536',
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        subtitle: overrides && overrides.hasOwnProperty('subtitle') ? overrides.subtitle! : 'sit',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'dolore',
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
    };
};

export const aComponentCoreModuleLayoutsFiltersInput = (overrides?: Partial<ComponentCoreModuleLayoutsFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentCoreModuleLayoutsFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreModuleLayoutsFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentCoreModuleLayoutsFiltersInput') ? {} as ComponentCoreModuleLayoutsFiltersInput : aComponentCoreModuleLayoutsFiltersInput({}, relationshipsToOmit)],
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentCoreModuleLayoutsFiltersInput') ? {} as ComponentCoreModuleLayoutsFiltersInput : aComponentCoreModuleLayoutsFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentCoreModuleLayoutsFiltersInput') ? {} as ComponentCoreModuleLayoutsFiltersInput : aComponentCoreModuleLayoutsFiltersInput({}, relationshipsToOmit)],
        spacingBottom: overrides && overrides.hasOwnProperty('spacingBottom') ? overrides.spacingBottom! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        spacingTop: overrides && overrides.hasOwnProperty('spacingTop') ? overrides.spacingTop! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
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

export const aComponentCoreTimeframe = (overrides?: Partial<ComponentCoreTimeframe>, _relationshipsToOmit: Array<string> = []): ComponentCoreTimeframe => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreTimeframe']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dcfa1846-89bf-4421-ad22-7e270213f2a9',
        yearEnd: overrides && overrides.hasOwnProperty('yearEnd') ? overrides.yearEnd! : 0.73,
        yearStart: overrides && overrides.hasOwnProperty('yearStart') ? overrides.yearStart! : 3.73,
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

export const aComponentModulesButtonsModule = (overrides?: Partial<ComponentModulesButtonsModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesButtonsModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesButtonsModule']);
    return {
        buttonStyle: overrides && overrides.hasOwnProperty('buttonStyle') ? overrides.buttonStyle! : EnumComponentmodulesbuttonsmoduleButtonstyle.Default,
        buttons: overrides && overrides.hasOwnProperty('buttons') ? overrides.buttons! : [relationshipsToOmit.includes('ComponentCoreButton') ? {} as ComponentCoreButton : aComponentCoreButton({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '668ba96a-681d-472e-a861-bb5a737fd889',
    };
};

export const aComponentModulesButtonsModuleFiltersInput = (overrides?: Partial<ComponentModulesButtonsModuleFiltersInput>, _relationshipsToOmit: Array<string> = []): ComponentModulesButtonsModuleFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesButtonsModuleFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ComponentModulesButtonsModuleFiltersInput') ? {} as ComponentModulesButtonsModuleFiltersInput : aComponentModulesButtonsModuleFiltersInput({}, relationshipsToOmit)],
        buttonStyle: overrides && overrides.hasOwnProperty('buttonStyle') ? overrides.buttonStyle! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        buttons: overrides && overrides.hasOwnProperty('buttons') ? overrides.buttons! : relationshipsToOmit.includes('ComponentCoreButtonFiltersInput') ? {} as ComponentCoreButtonFiltersInput : aComponentCoreButtonFiltersInput({}, relationshipsToOmit),
        buttonsModuleLayout: overrides && overrides.hasOwnProperty('buttonsModuleLayout') ? overrides.buttonsModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayoutsFiltersInput') ? {} as ComponentCoreModuleLayoutsFiltersInput : aComponentCoreModuleLayoutsFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ComponentModulesButtonsModuleFiltersInput') ? {} as ComponentModulesButtonsModuleFiltersInput : aComponentModulesButtonsModuleFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ComponentModulesButtonsModuleFiltersInput') ? {} as ComponentModulesButtonsModuleFiltersInput : aComponentModulesButtonsModuleFiltersInput({}, relationshipsToOmit)],
    };
};

export const aComponentModulesCarousel = (overrides?: Partial<ComponentModulesCarousel>, _relationshipsToOmit: Array<string> = []): ComponentModulesCarousel => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesCarousel']);
    return {
        buttonText: overrides && overrides.hasOwnProperty('buttonText') ? overrides.buttonText! : 'fugiat',
        buttonUrl: overrides && overrides.hasOwnProperty('buttonUrl') ? overrides.buttonUrl! : 'amet',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'animi',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '02a9c5e5-9a6b-482e-9ea3-e1114441bf57',
        items: overrides && overrides.hasOwnProperty('items') ? overrides.items! : [relationshipsToOmit.includes('ComponentCoreCarouselItem') ? {} as ComponentCoreCarouselItem : aComponentCoreCarouselItem({}, relationshipsToOmit)],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'beatae',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EnumComponentmodulescarouselType.Combined,
    };
};

export const aComponentModulesGridModule = (overrides?: Partial<ComponentModulesGridModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesGridModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesGridModule']);
    return {
        buttons: overrides && overrides.hasOwnProperty('buttons') ? overrides.buttons! : [relationshipsToOmit.includes('ComponentCoreButton') ? {} as ComponentCoreButton : aComponentCoreButton({}, relationshipsToOmit)],
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptas',
        featuredFields: overrides && overrides.hasOwnProperty('featuredFields') ? overrides.featuredFields! : [relationshipsToOmit.includes('ComponentCoreFeaturedFields') ? {} as ComponentCoreFeaturedFields : aComponentCoreFeaturedFields({}, relationshipsToOmit)],
        fieldTitlesAreInverted: overrides && overrides.hasOwnProperty('fieldTitlesAreInverted') ? overrides.fieldTitlesAreInverted! : false,
        fieldTypes: overrides && overrides.hasOwnProperty('fieldTypes') ? overrides.fieldTypes! : EnumComponentmodulesgridmoduleFieldtypes.Stories,
        fields: overrides && overrides.hasOwnProperty('fields') ? overrides.fields! : [relationshipsToOmit.includes('ComponentCoreGridFeaturedFields') ? {} as ComponentCoreGridFeaturedFields : aComponentCoreGridFeaturedFields({}, relationshipsToOmit)],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aa6f0062-16b8-4f8d-b646-3abab2435078',
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 9461,
        showMoreButtonTitle: overrides && overrides.hasOwnProperty('showMoreButtonTitle') ? overrides.showMoreButtonTitle! : 'optio',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'non',
    };
};

export const aComponentModulesImage = (overrides?: Partial<ComponentModulesImage>, _relationshipsToOmit: Array<string> = []): ComponentModulesImage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesImage']);
    return {
        alt_text: overrides && overrides.hasOwnProperty('alt_text') ? overrides.alt_text! : 'sint',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'possimus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8439cee4-53c6-4340-b9ee-9b88e7cafe67',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : relationshipsToOmit.includes('UploadFileEntityResponse') ? {} as UploadFileEntityResponse : anUploadFileEntityResponse({}, relationshipsToOmit),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
    };
};

export const aComponentModulesImageCarousel = (overrides?: Partial<ComponentModulesImageCarousel>, _relationshipsToOmit: Array<string> = []): ComponentModulesImageCarousel => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesImageCarousel']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'nostrum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'caa291cc-f344-4c8e-b7ad-3f6d9c22152d',
        images: overrides && overrides.hasOwnProperty('images') ? overrides.images! : relationshipsToOmit.includes('UploadFileRelationResponseCollection') ? {} as UploadFileRelationResponseCollection : anUploadFileRelationResponseCollection({}, relationshipsToOmit),
    };
};

export const aComponentModulesPullquote = (overrides?: Partial<ComponentModulesPullquote>, _relationshipsToOmit: Array<string> = []): ComponentModulesPullquote => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesPullquote']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '473a3cf9-ea98-4cd3-80c7-7052f59eceb2',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'ut',
    };
};

export const aComponentModulesSubtitle = (overrides?: Partial<ComponentModulesSubtitle>, _relationshipsToOmit: Array<string> = []): ComponentModulesSubtitle => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesSubtitle']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '549df5f1-4269-41cf-a4c5-ce2a8917985b',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'voluptatem',
    };
};

export const aComponentModulesTextModule = (overrides?: Partial<ComponentModulesTextModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesTextModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesTextModule']);
    return {
        Richtext: overrides && overrides.hasOwnProperty('Richtext') ? overrides.Richtext! : 'quod',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '67c6aef3-e334-4d10-978d-30c1a76d59a3',
    };
};

export const aComponentModulesTitleModule = (overrides?: Partial<ComponentModulesTitleModule>, _relationshipsToOmit: Array<string> = []): ComponentModulesTitleModule => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesTitleModule']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'quibusdam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aeabb66f-3a23-42b4-8215-f8fb4e849040',
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
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['1970-01-04T16:46:01.353Z'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['1970-01-08T00:27:36.593Z'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : '1970-01-12T03:50:11.223Z',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : '1970-01-10T08:47:40.122Z',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : '1970-01-01T01:25:42.436Z',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : '1970-01-01T04:07:39.259Z',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : '1970-01-15T00:43:24.569Z',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : '1970-01-06T09:56:13.065Z',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : '1970-01-14T18:19:24.529Z',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['1970-01-05T23:37:48.684Z'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : '1970-01-17T01:40:33.653Z',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : '1970-01-03T07:53:08.334Z',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : '1970-01-01T08:32:13.968Z',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '1970-01-12T00:32:26.816Z',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : '1970-01-06T10:22:16.778Z',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['1970-01-15T14:52:56.664Z'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['1970-01-16T15:40:41.202Z'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '1970-01-14T14:08:53.359Z',
    };
};

export const anError = (overrides?: Partial<Error>, _relationshipsToOmit: Array<string> = []): Error => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Error']);
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'voluptas',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'et',
    };
};

export const aHomepage = (overrides?: Partial<Homepage>, _relationshipsToOmit: Array<string> = []): Homepage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Homepage']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'illum',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-01T12:02:09.059Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'est',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'aut',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('HomepageRelationResponseCollection') ? {} as HomepageRelationResponseCollection : aHomepageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-09T06:26:40.004Z',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-16T23:50:58.325Z',
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

export const aHomepageRelationResponseCollection = (overrides?: Partial<HomepageRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): HomepageRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'HomepageRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('HomepageEntity') ? {} as HomepageEntity : aHomepageEntity({}, relationshipsToOmit)],
    };
};

export const anIdFilterInput = (overrides?: Partial<IdFilterInput>, _relationshipsToOmit: Array<string> = []): IdFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'IdFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : ['481cf7ee-7558-4bdc-a5c8-0c6220d883ba'],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : ['33f6e0fa-710b-43a7-83b9-1b99cc93ce3d'],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : '75ee9d54-e27c-4a8a-b811-6afd05a950e9',
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : '2b64f1fb-0354-46f2-a2e0-1df1f395ed7b',
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : '2f0c4e56-da08-4386-96e0-cf4ee4442889',
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : '366c4f10-a1b5-409b-8987-78cddb048c0b',
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : '018baa3c-7646-40a1-96fd-b4e251965848',
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'ea38c4a0-f7cc-4eff-8806-505aaf296dcd',
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : '27a9fb51-ff93-4f12-a66e-410f56906582',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['b941e43d-c796-48d3-8676-4219ff470b18'],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : '0a1c6d4b-7e1a-4983-99f8-42981ca22f05',
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'b8af5f48-f5d8-4feb-a4e2-697d8c9728c0',
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : '85db91e3-79e2-4098-abb2-254d6ac25b3a',
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : '8d386b3d-ff2b-4f53-aa8b-d0ddee1422c0',
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 'a43ba140-11a4-41ad-8e70-55a642cbaafe',
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : ['b515a8bf-ec81-4213-82d0-356c326d90fe'],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : false,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : ['ebf0754c-1f23-476d-a7ba-d05ec370fc22'],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : '213645b0-af70-4236-a498-5a6944a3d669',
    };
};

export const aLandingpage = (overrides?: Partial<Landingpage>, _relationshipsToOmit: Array<string> = []): Landingpage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Landingpage']);
    return {
        Description: overrides && overrides.hasOwnProperty('Description') ? overrides.Description! : 'modi',
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'culpa',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-09T07:20:38.253Z',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'consequuntur',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LandingpageRelationResponseCollection') ? {} as LandingpageRelationResponseCollection : aLandingpageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-12T04:59:24.956Z',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'dolore',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-02T23:32:58.098Z',
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
        Description: overrides && overrides.hasOwnProperty('Description') ? overrides.Description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
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
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-14T21:37:06.036Z',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'tempore',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-02T11:12:09.698Z',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-10T20:32:41.168Z',
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

export const aLocationFiltersInput = (overrides?: Partial<LocationFiltersInput>, _relationshipsToOmit: Array<string> = []): LocationFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aLocationRelationResponseCollection = (overrides?: Partial<LocationRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): LocationRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LocationRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('LocationEntity') ? {} as LocationEntity : aLocationEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aLongFilterInput = (overrides?: Partial<LongFilterInput>, _relationshipsToOmit: Array<string> = []): LongFilterInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'LongFilterInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [9628],
        between: overrides && overrides.hasOwnProperty('between') ? overrides.between! : [3696],
        contains: overrides && overrides.hasOwnProperty('contains') ? overrides.contains! : 4.19,
        containsi: overrides && overrides.hasOwnProperty('containsi') ? overrides.containsi! : 3.78,
        endsWith: overrides && overrides.hasOwnProperty('endsWith') ? overrides.endsWith! : 5.56,
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 0.15,
        eqi: overrides && overrides.hasOwnProperty('eqi') ? overrides.eqi! : 5.93,
        gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 8.15,
        gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 3.59,
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [3000],
        lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 0.03,
        lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 5.27,
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 0.4,
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('LongFilterInput') ? {} as LongFilterInput : aLongFilterInput({}, relationshipsToOmit),
        notContains: overrides && overrides.hasOwnProperty('notContains') ? overrides.notContains! : 2.31,
        notContainsi: overrides && overrides.hasOwnProperty('notContainsi') ? overrides.notContainsi! : 6.41,
        notIn: overrides && overrides.hasOwnProperty('notIn') ? overrides.notIn! : [4430],
        notNull: overrides && overrides.hasOwnProperty('notNull') ? overrides.notNull! : false,
        null: overrides && overrides.hasOwnProperty('null') ? overrides.null! : true,
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [8254],
        startsWith: overrides && overrides.hasOwnProperty('startsWith') ? overrides.startsWith! : 4.26,
    };
};

export const aMenupage = (overrides?: Partial<Menupage>, _relationshipsToOmit: Array<string> = []): Menupage => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Menupage']);
    return {
        Title: overrides && overrides.hasOwnProperty('Title') ? overrides.Title! : 'aperiam',
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-01T11:08:22.225Z',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'id',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('MenupageRelationResponseCollection') ? {} as MenupageRelationResponseCollection : aMenupageRelationResponseCollection({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-06T06:58:27.963Z',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'sit',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-10T08:30:46.231Z',
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

export const aMenupageRelationResponseCollection = (overrides?: Partial<MenupageRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): MenupageRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'MenupageRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('MenupageEntity') ? {} as MenupageEntity : aMenupageEntity({}, relationshipsToOmit)],
    };
};

export const anObjectMakerType = (overrides?: Partial<ObjectMakerType>, _relationshipsToOmit: Array<string> = []): ObjectMakerType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectMakerType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'et',
        maker: overrides && overrides.hasOwnProperty('maker') ? overrides.maker! : 'enim',
        makerLabel: overrides && overrides.hasOwnProperty('makerLabel') ? overrides.makerLabel! : 'accusamus',
        makerRole: overrides && overrides.hasOwnProperty('makerRole') ? overrides.makerRole! : 'doloribus',
        makerRoleLabel: overrides && overrides.hasOwnProperty('makerRoleLabel') ? overrides.makerRoleLabel! : 'expedita',
        populatedMaker: overrides && overrides.hasOwnProperty('populatedMaker') ? overrides.populatedMaker! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
    };
};

export const anObjectMaterialType = (overrides?: Partial<ObjectMaterialType>, _relationshipsToOmit: Array<string> = []): ObjectMaterialType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectMaterialType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'corrupti',
        material: overrides && overrides.hasOwnProperty('material') ? overrides.material! : 'iure',
        materialLabel: overrides && overrides.hasOwnProperty('materialLabel') ? overrides.materialLabel! : 'repudiandae',
    };
};

export const anObjectRecordZoomLevel3Type = (overrides?: Partial<ObjectRecordZoomLevel3Type>, _relationshipsToOmit: Array<string> = []): ObjectRecordZoomLevel3Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectRecordZoomLevel3Type']);
    return {
        archiveCode: overrides && overrides.hasOwnProperty('archiveCode') ? overrides.archiveCode! : 'et',
        creditLine: overrides && overrides.hasOwnProperty('creditLine') ? overrides.creditLine! : 'aperiam',
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : 'earum',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'sit',
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'atque',
        hasParts: overrides && overrides.hasOwnProperty('hasParts') ? overrides.hasParts! : 'enim',
        materials: overrides && overrides.hasOwnProperty('materials') ? overrides.materials! : 'voluptas',
        objectName: overrides && overrides.hasOwnProperty('objectName') ? overrides.objectName! : 'qui',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'rerum',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'reiciendis',
        relatedKeywords: overrides && overrides.hasOwnProperty('relatedKeywords') ? overrides.relatedKeywords! : 'maxime',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'modi',
        scale: overrides && overrides.hasOwnProperty('scale') ? overrides.scale! : 'doloribus',
        techniques: overrides && overrides.hasOwnProperty('techniques') ? overrides.techniques! : 'nemo',
        titleType: overrides && overrides.hasOwnProperty('titleType') ? overrides.titleType! : 'sit',
    };
};

export const anObjectRelationsCountType = (overrides?: Partial<ObjectRelationsCountType>, _relationshipsToOmit: Array<string> = []): ObjectRelationsCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectRelationsCountType']);
    return {
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 'quos',
    };
};

export const anObjectRelationsType = (overrides?: Partial<ObjectRelationsType>, _relationshipsToOmit: Array<string> = []): ObjectRelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectRelationsType']);
    return {
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'cupiditate',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quaerat',
        period: overrides && overrides.hasOwnProperty('period') ? overrides.period! : 'consequatur',
        referenceNumber: overrides && overrides.hasOwnProperty('referenceNumber') ? overrides.referenceNumber! : 'tempore',
        titleR: overrides && overrides.hasOwnProperty('titleR') ? overrides.titleR! : 'perferendis',
    };
};

export const anObjectTechniqueType = (overrides?: Partial<ObjectTechniqueType>, _relationshipsToOmit: Array<string> = []): ObjectTechniqueType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectTechniqueType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'corrupti',
        technique: overrides && overrides.hasOwnProperty('technique') ? overrides.technique! : 'saepe',
        techniqueLabel: overrides && overrides.hasOwnProperty('techniqueLabel') ? overrides.techniqueLabel! : 'laudantium',
    };
};

export const anObjectsZoomLevel3DetailType = (overrides?: Partial<ObjectsZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): ObjectsZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectsZoomLevel3DetailType']);
    return {
        archiveCollectionCode: overrides && overrides.hasOwnProperty('archiveCollectionCode') ? overrides.archiveCollectionCode! : 'ipsam',
        associationPerson: overrides && overrides.hasOwnProperty('associationPerson') ? overrides.associationPerson! : 'rerum',
        associationPersonLabel: overrides && overrides.hasOwnProperty('associationPersonLabel') ? overrides.associationPersonLabel! : 'aperiam',
        associationPersonType: overrides && overrides.hasOwnProperty('associationPersonType') ? overrides.associationPersonType! : 'fuga',
        creationPlace: overrides && overrides.hasOwnProperty('creationPlace') ? overrides.creationPlace! : 'omnis',
        creationPlaceLabel: overrides && overrides.hasOwnProperty('creationPlaceLabel') ? overrides.creationPlaceLabel! : 'soluta',
        creditLine: overrides && overrides.hasOwnProperty('creditLine') ? overrides.creditLine! : 'aspernatur',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptatem',
        dimDepth: overrides && overrides.hasOwnProperty('dimDepth') ? overrides.dimDepth! : 'dicta',
        dimHeight: overrides && overrides.hasOwnProperty('dimHeight') ? overrides.dimHeight! : 'facere',
        dimWidth: overrides && overrides.hasOwnProperty('dimWidth') ? overrides.dimWidth! : 'ut',
        dimensionUnit: overrides && overrides.hasOwnProperty('dimensionUnit') ? overrides.dimensionUnit! : 'provident',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'nihil',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'adipisci',
        imageLabel: overrides && overrides.hasOwnProperty('imageLabel') ? overrides.imageLabel! : 'magnam',
        makers: overrides && overrides.hasOwnProperty('makers') ? overrides.makers! : [relationshipsToOmit.includes('ObjectMakerType') ? {} as ObjectMakerType : anObjectMakerType({}, relationshipsToOmit)],
        materials: overrides && overrides.hasOwnProperty('materials') ? overrides.materials! : [relationshipsToOmit.includes('ObjectMaterialType') ? {} as ObjectMaterialType : anObjectMaterialType({}, relationshipsToOmit)],
        numberOfParts: overrides && overrides.hasOwnProperty('numberOfParts') ? overrides.numberOfParts! : 'aliquam',
        objectName: overrides && overrides.hasOwnProperty('objectName') ? overrides.objectName! : 'explicabo',
        objectNameLabel: overrides && overrides.hasOwnProperty('objectNameLabel') ? overrides.objectNameLabel! : 'autem',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'quos',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'quas',
        relatedObjectTitle: overrides && overrides.hasOwnProperty('relatedObjectTitle') ? overrides.relatedObjectTitle! : 'aut',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'qui',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'omnis',
        scale: overrides && overrides.hasOwnProperty('scale') ? overrides.scale! : 'qui',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'asperiores',
        techniques: overrides && overrides.hasOwnProperty('techniques') ? overrides.techniques! : [relationshipsToOmit.includes('ObjectTechniqueType') ? {} as ObjectTechniqueType : anObjectTechniqueType({}, relationshipsToOmit)],
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : ['esse'],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'ut',
        titleType: overrides && overrides.hasOwnProperty('titleType') ? overrides.titleType! : 'unde',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};

export const anObjectsZoomLevelHoverType = (overrides?: Partial<ObjectsZoomLevelHoverType>, _relationshipsToOmit: Array<string> = []): ObjectsZoomLevelHoverType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectsZoomLevelHoverType']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'et',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'architecto',
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
        limit: overrides && overrides.hasOwnProperty('limit') ? overrides.limit! : 1.66,
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 2.63,
        pageSize: overrides && overrides.hasOwnProperty('pageSize') ? overrides.pageSize! : 1.62,
        start: overrides && overrides.hasOwnProperty('start') ? overrides.start! : 1.03,
    };
};

export const aPeopleAssociationType = (overrides?: Partial<PeopleAssociationType>, _relationshipsToOmit: Array<string> = []): PeopleAssociationType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleAssociationType']);
    return {
        association: overrides && overrides.hasOwnProperty('association') ? overrides.association! : 'ut',
        associationLabel: overrides && overrides.hasOwnProperty('associationLabel') ? overrides.associationLabel! : 'minima',
    };
};

export const aPeopleRecordZoomLevel3Type = (overrides?: Partial<PeopleRecordZoomLevel3Type>, _relationshipsToOmit: Array<string> = []): PeopleRecordZoomLevel3Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleRecordZoomLevel3Type']);
    return {
        association: overrides && overrides.hasOwnProperty('association') ? overrides.association! : 'omnis',
        birthDate: overrides && overrides.hasOwnProperty('birthDate') ? overrides.birthDate! : 'officia',
        birthPlace: overrides && overrides.hasOwnProperty('birthPlace') ? overrides.birthPlace! : 'vel',
        deathDate: overrides && overrides.hasOwnProperty('deathDate') ? overrides.deathDate! : 'consequatur',
        deathPlace: overrides && overrides.hasOwnProperty('deathPlace') ? overrides.deathPlace! : 'nihil',
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'culpa',
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'qui',
        nameVariation: overrides && overrides.hasOwnProperty('nameVariation') ? overrides.nameVariation! : 'nihil',
        nationality: overrides && overrides.hasOwnProperty('nationality') ? overrides.nationality! : 'dolores',
        period: overrides && overrides.hasOwnProperty('period') ? overrides.period! : 'nostrum',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'et',
        profession: overrides && overrides.hasOwnProperty('profession') ? overrides.profession! : 'quia',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'quos',
    };
};

export const aPeopleRelationsCountType = (overrides?: Partial<PeopleRelationsCountType>, _relationshipsToOmit: Array<string> = []): PeopleRelationsCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleRelationsCountType']);
    return {
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 'at',
    };
};

export const aPeopleRelationsType = (overrides?: Partial<PeopleRelationsType>, _relationshipsToOmit: Array<string> = []): PeopleRelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleRelationsType']);
    return {
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'qui',
        idRelation: overrides && overrides.hasOwnProperty('idRelation') ? overrides.idRelation! : 'ut',
        occupation: overrides && overrides.hasOwnProperty('occupation') ? overrides.occupation! : 'qui',
        period: overrides && overrides.hasOwnProperty('period') ? overrides.period! : 'dolorem',
        relationName: overrides && overrides.hasOwnProperty('relationName') ? overrides.relationName! : 'quibusdam',
        titleR: overrides && overrides.hasOwnProperty('titleR') ? overrides.titleR! : 'qui',
    };
};

export const aPeopleZoomLevel3DetailType = (overrides?: Partial<PeopleZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PeopleZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleZoomLevel3DetailType']);
    return {
        associations: overrides && overrides.hasOwnProperty('associations') ? overrides.associations! : [relationshipsToOmit.includes('PeopleAssociationType') ? {} as PeopleAssociationType : aPeopleAssociationType({}, relationshipsToOmit)],
        birthDate: overrides && overrides.hasOwnProperty('birthDate') ? overrides.birthDate! : 'sed',
        birthPlace: overrides && overrides.hasOwnProperty('birthPlace') ? overrides.birthPlace! : 'non',
        birthPlaceLabel: overrides && overrides.hasOwnProperty('birthPlaceLabel') ? overrides.birthPlaceLabel! : 'qui',
        deathDate: overrides && overrides.hasOwnProperty('deathDate') ? overrides.deathDate! : 'deleniti',
        deathPlace: overrides && overrides.hasOwnProperty('deathPlace') ? overrides.deathPlace! : 'officiis',
        deathPlaceLabel: overrides && overrides.hasOwnProperty('deathPlaceLabel') ? overrides.deathPlaceLabel! : 'eius',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'dolorem',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'voluptate',
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'recusandae',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'praesentium',
        institution: overrides && overrides.hasOwnProperty('institution') ? overrides.institution! : 'et',
        institutionLabel: overrides && overrides.hasOwnProperty('institutionLabel') ? overrides.institutionLabel! : 'ullam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'repudiandae',
        nameTypes: overrides && overrides.hasOwnProperty('nameTypes') ? overrides.nameTypes! : ['cum'],
        nameVariation: overrides && overrides.hasOwnProperty('nameVariation') ? overrides.nameVariation! : 'eaque',
        nationality: overrides && overrides.hasOwnProperty('nationality') ? overrides.nationality! : 'quia',
        nationalityLabel: overrides && overrides.hasOwnProperty('nationalityLabel') ? overrides.nationalityLabel! : 'sint',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'deleniti',
        place: overrides && overrides.hasOwnProperty('place') ? overrides.place! : 'nobis',
        placeLabel: overrides && overrides.hasOwnProperty('placeLabel') ? overrides.placeLabel! : 'est',
        profession: overrides && overrides.hasOwnProperty('profession') ? overrides.profession! : 'ut',
        professionLabel: overrides && overrides.hasOwnProperty('professionLabel') ? overrides.professionLabel! : 'odit',
        relatedItem: overrides && overrides.hasOwnProperty('relatedItem') ? overrides.relatedItem! : 'ad',
        relatedItemLabel: overrides && overrides.hasOwnProperty('relatedItemLabel') ? overrides.relatedItemLabel! : 'eum',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'sunt',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : ['soluta'],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'illum',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};

export const aPeopleZoomLevelHoverType = (overrides?: Partial<PeopleZoomLevelHoverType>, _relationshipsToOmit: Array<string> = []): PeopleZoomLevelHoverType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleZoomLevelHoverType']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'qui',
        profession: overrides && overrides.hasOwnProperty('profession') ? overrides.profession! : 'quia',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'nisi',
    };
};

export const aPublicationAuthorType = (overrides?: Partial<PublicationAuthorType>, _relationshipsToOmit: Array<string> = []): PublicationAuthorType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationAuthorType']);
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : 'omnis',
        authorLabel: overrides && overrides.hasOwnProperty('authorLabel') ? overrides.authorLabel! : 'explicabo',
        authorRole: overrides && overrides.hasOwnProperty('authorRole') ? overrides.authorRole! : 'quod',
        authorRoleLabel: overrides && overrides.hasOwnProperty('authorRoleLabel') ? overrides.authorRoleLabel! : 'optio',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'accusantium',
        populatedAuthor: overrides && overrides.hasOwnProperty('populatedAuthor') ? overrides.populatedAuthor! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
    };
};

export const aPublicationRecordZoomLevel3Type = (overrides?: Partial<PublicationRecordZoomLevel3Type>, _relationshipsToOmit: Array<string> = []): PublicationRecordZoomLevel3Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationRecordZoomLevel3Type']);
    return {
        annotation: overrides && overrides.hasOwnProperty('annotation') ? overrides.annotation! : 'quasi',
        authorRole: overrides && overrides.hasOwnProperty('authorRole') ? overrides.authorRole! : 'minima',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : 'qui',
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'sunt',
        category: overrides && overrides.hasOwnProperty('category') ? overrides.category! : 'consequatur',
        codeOfArchive: overrides && overrides.hasOwnProperty('codeOfArchive') ? overrides.codeOfArchive! : 'rerum',
        edition: overrides && overrides.hasOwnProperty('edition') ? overrides.edition! : 'minus',
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'non',
        geoKeyword: overrides && overrides.hasOwnProperty('geoKeyword') ? overrides.geoKeyword! : 'eos',
        illustration: overrides && overrides.hasOwnProperty('illustration') ? overrides.illustration! : 'aut',
        isbn: overrides && overrides.hasOwnProperty('isbn') ? overrides.isbn! : 'quaerat',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'quas',
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 'suscipit',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'tempora',
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : 'velit',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'non',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'facilis',
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'cumque',
        relatedKeyword: overrides && overrides.hasOwnProperty('relatedKeyword') ? overrides.relatedKeyword! : 'quis',
        series: overrides && overrides.hasOwnProperty('series') ? overrides.series! : 'est',
        subType: overrides && overrides.hasOwnProperty('subType') ? overrides.subType! : 'voluptatum',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'vitae',
    };
};

export const aPublicationRelationsType = (overrides?: Partial<PublicationRelationsType>, _relationshipsToOmit: Array<string> = []): PublicationRelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationRelationsType']);
    return {
        externalSource: overrides && overrides.hasOwnProperty('externalSource') ? overrides.externalSource! : 'a',
        idRelation: overrides && overrides.hasOwnProperty('idRelation') ? overrides.idRelation! : 'maiores',
        titleR: overrides && overrides.hasOwnProperty('titleR') ? overrides.titleR! : 'voluptatem',
        typePub: overrides && overrides.hasOwnProperty('typePub') ? overrides.typePub! : 'neque',
        yearPub: overrides && overrides.hasOwnProperty('yearPub') ? overrides.yearPub! : 'natus',
    };
};

export const aPublicationZoomLevel3DetailType = (overrides?: Partial<PublicationZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PublicationZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationZoomLevel3DetailType']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'beatae',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'quibusdam',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : ['corporis'],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'ab',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'possimus',
    };
};

export const aPublicationsArticleZoomLevel3DetailType = (overrides?: Partial<PublicationsArticleZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsArticleZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsArticleZoomLevel3DetailType']);
    return {
        abstract: overrides && overrides.hasOwnProperty('abstract') ? overrides.abstract! : 'voluptatum',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'consequatur',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'voluptatem',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'dolore',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dicta',
        issue: overrides && overrides.hasOwnProperty('issue') ? overrides.issue! : 'velit',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'doloribus',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'enim',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'similique',
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 'qui',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'nobis',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'iusto',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'dolorem',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'nam',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'ipsam',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'sint',
        sourceTitle: overrides && overrides.hasOwnProperty('sourceTitle') ? overrides.sourceTitle! : 'nisi',
        sourceTitleLabel: overrides && overrides.hasOwnProperty('sourceTitleLabel') ? overrides.sourceTitleLabel! : 'minus',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'deserunt',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'quia',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'soluta',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'non',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel3Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'consectetur',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'ducimus',
        volume: overrides && overrides.hasOwnProperty('volume') ? overrides.volume! : 'velit',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'cumque',
    };
};

export const aPublicationsAudioVisualZoomLevel3DetailType = (overrides?: Partial<PublicationsAudioVisualZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsAudioVisualZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsAudioVisualZoomLevel3DetailType']);
    return {
        abstract: overrides && overrides.hasOwnProperty('abstract') ? overrides.abstract! : 'eveniet',
        annotation: overrides && overrides.hasOwnProperty('annotation') ? overrides.annotation! : 'voluptate',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'quidem',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'voluptatem',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'cumque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'voluptas',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'est',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'voluptas',
        medium: overrides && overrides.hasOwnProperty('medium') ? overrides.medium! : 'voluptas',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'aperiam',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'eos',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'et',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'soluta',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'ullam',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'veritatis',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'nesciunt',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'culpa',
        scope: overrides && overrides.hasOwnProperty('scope') ? overrides.scope! : 'qui',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'cum',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'eius',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'rerum',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'voluptas',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'beatae',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel3Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'consequatur',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'molestiae',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'expedita',
    };
};

export const aPublicationsBookZoomLevel3DetailType = (overrides?: Partial<PublicationsBookZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsBookZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsBookZoomLevel3DetailType']);
    return {
        annotation: overrides && overrides.hasOwnProperty('annotation') ? overrides.annotation! : 'dolor',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'delectus',
        codeOfArchive: overrides && overrides.hasOwnProperty('codeOfArchive') ? overrides.codeOfArchive! : 'ex',
        codeOfArchiveLabel: overrides && overrides.hasOwnProperty('codeOfArchiveLabel') ? overrides.codeOfArchiveLabel! : 'porro',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'quaerat',
        edition: overrides && overrides.hasOwnProperty('edition') ? overrides.edition! : 'earum',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'natus',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'placeat',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'fugit',
        illustration: overrides && overrides.hasOwnProperty('illustration') ? overrides.illustration! : 'in',
        isbn: overrides && overrides.hasOwnProperty('isbn') ? overrides.isbn! : 'earum',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'saepe',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'qui',
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 'eos',
        numberOfPages: overrides && overrides.hasOwnProperty('numberOfPages') ? overrides.numberOfPages! : 'nihil',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'maxime',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'dicta',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'non',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'et',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'perferendis',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'eius',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'nesciunt',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'architecto',
        seriesLabel: overrides && overrides.hasOwnProperty('seriesLabel') ? overrides.seriesLabel! : 'asperiores',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'mollitia',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'reprehenderit',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'temporibus',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'occaecati',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'deleniti',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel3Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'id',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'natus',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'quo',
    };
};

export const aPublicationsRelationsCountType = (overrides?: Partial<PublicationsRelationsCountType>, _relationshipsToOmit: Array<string> = []): PublicationsRelationsCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsRelationsCountType']);
    return {
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 'et',
    };
};

export const aPublicationsSerialZoomLevel3DetailType = (overrides?: Partial<PublicationsSerialZoomLevel3DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsSerialZoomLevel3DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsSerialZoomLevel3DetailType']);
    return {
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'nihil',
        continuedAs: overrides && overrides.hasOwnProperty('continuedAs') ? overrides.continuedAs! : 'voluptatem',
        continuedFrom: overrides && overrides.hasOwnProperty('continuedFrom') ? overrides.continuedFrom! : 'recusandae',
        holding: overrides && overrides.hasOwnProperty('holding') ? overrides.holding! : 'doloremque',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'eaque',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'nulla',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'similique',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'eaque',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'corrupti',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'ut',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'quas',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'sed',
        remarks: overrides && overrides.hasOwnProperty('remarks') ? overrides.remarks! : 'ullam',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'et',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'in',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'laborum',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'id',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'aliquid',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel3Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'officiis',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'quisquam',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'in',
    };
};

export const aPublicationsZoomLevelHoverType = (overrides?: Partial<PublicationsZoomLevelHoverType>, _relationshipsToOmit: Array<string> = []): PublicationsZoomLevelHoverType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsZoomLevelHoverType']);
    return {
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : 'omnis',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'maiores',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'perferendis',
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Array<string> = []): Query => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Query']);
    return {
        archiveOther: overrides && overrides.hasOwnProperty('archiveOther') ? overrides.archiveOther! : relationshipsToOmit.includes('ArchivesFondsZoomLevel3DetailType') ? {} as ArchivesFondsZoomLevel3DetailType : anArchivesFondsZoomLevel3DetailType({}, relationshipsToOmit),
        archivesDetailZoomLevel3: overrides && overrides.hasOwnProperty('archivesDetailZoomLevel3') ? overrides.archivesDetailZoomLevel3! : relationshipsToOmit.includes('ArchiveZoomLevel3DetailType') ? {} as ArchiveZoomLevel3DetailType : anArchiveZoomLevel3DetailType({}, relationshipsToOmit),
        archivesRecordRelations: overrides && overrides.hasOwnProperty('archivesRecordRelations') ? overrides.archivesRecordRelations! : [relationshipsToOmit.includes('ArchiveRelationsType') ? {} as ArchiveRelationsType : anArchiveRelationsType({}, relationshipsToOmit)],
        archivesRecordRelationsCount: overrides && overrides.hasOwnProperty('archivesRecordRelationsCount') ? overrides.archivesRecordRelationsCount! : [relationshipsToOmit.includes('ArchivesRelationsCountType') ? {} as ArchivesRelationsCountType : anArchivesRelationsCountType({}, relationshipsToOmit)],
        archivesRecordZoomLevel3: overrides && overrides.hasOwnProperty('archivesRecordZoomLevel3') ? overrides.archivesRecordZoomLevel3! : [relationshipsToOmit.includes('ArchivesRecordZoomLevel3Type') ? {} as ArchivesRecordZoomLevel3Type : anArchivesRecordZoomLevel3Type({}, relationshipsToOmit)],
        archivesZoomRecordHover: overrides && overrides.hasOwnProperty('archivesZoomRecordHover') ? overrides.archivesZoomRecordHover! : relationshipsToOmit.includes('ArchivesZoomLevelHoverType') ? {} as ArchivesZoomLevelHoverType : anArchivesZoomLevelHoverType({}, relationshipsToOmit),
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : relationshipsToOmit.includes('AuthorEntityResponseCollection') ? {} as AuthorEntityResponseCollection : anAuthorEntityResponseCollection({}, relationshipsToOmit),
        homepage: overrides && overrides.hasOwnProperty('homepage') ? overrides.homepage! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        landingpage: overrides && overrides.hasOwnProperty('landingpage') ? overrides.landingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        landingpages: overrides && overrides.hasOwnProperty('landingpages') ? overrides.landingpages! : relationshipsToOmit.includes('LandingpageEntityResponseCollection') ? {} as LandingpageEntityResponseCollection : aLandingpageEntityResponseCollection({}, relationshipsToOmit),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        menupage: overrides && overrides.hasOwnProperty('menupage') ? overrides.menupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        menupages: overrides && overrides.hasOwnProperty('menupages') ? overrides.menupages! : relationshipsToOmit.includes('MenupageEntityResponseCollection') ? {} as MenupageEntityResponseCollection : aMenupageEntityResponseCollection({}, relationshipsToOmit),
        objectDetailZoomLevel3: overrides && overrides.hasOwnProperty('objectDetailZoomLevel3') ? overrides.objectDetailZoomLevel3! : relationshipsToOmit.includes('ObjectsZoomLevel3DetailType') ? {} as ObjectsZoomLevel3DetailType : anObjectsZoomLevel3DetailType({}, relationshipsToOmit),
        objectRecordRelations: overrides && overrides.hasOwnProperty('objectRecordRelations') ? overrides.objectRecordRelations! : [relationshipsToOmit.includes('ObjectRelationsType') ? {} as ObjectRelationsType : anObjectRelationsType({}, relationshipsToOmit)],
        objectRecordRelationsCount: overrides && overrides.hasOwnProperty('objectRecordRelationsCount') ? overrides.objectRecordRelationsCount! : [relationshipsToOmit.includes('ObjectRelationsCountType') ? {} as ObjectRelationsCountType : anObjectRelationsCountType({}, relationshipsToOmit)],
        objectsRecordZoomLevel3: overrides && overrides.hasOwnProperty('objectsRecordZoomLevel3') ? overrides.objectsRecordZoomLevel3! : [relationshipsToOmit.includes('ObjectRecordZoomLevel3Type') ? {} as ObjectRecordZoomLevel3Type : anObjectRecordZoomLevel3Type({}, relationshipsToOmit)],
        objectsZoomRecordHover: overrides && overrides.hasOwnProperty('objectsZoomRecordHover') ? overrides.objectsZoomRecordHover! : relationshipsToOmit.includes('ObjectsZoomLevelHoverType') ? {} as ObjectsZoomLevelHoverType : anObjectsZoomLevelHoverType({}, relationshipsToOmit),
        peopleRecordRelations: overrides && overrides.hasOwnProperty('peopleRecordRelations') ? overrides.peopleRecordRelations! : [relationshipsToOmit.includes('PeopleRelationsType') ? {} as PeopleRelationsType : aPeopleRelationsType({}, relationshipsToOmit)],
        peopleRecordRelationsCount: overrides && overrides.hasOwnProperty('peopleRecordRelationsCount') ? overrides.peopleRecordRelationsCount! : [relationshipsToOmit.includes('PeopleRelationsCountType') ? {} as PeopleRelationsCountType : aPeopleRelationsCountType({}, relationshipsToOmit)],
        peopleRecordZoomLevel3: overrides && overrides.hasOwnProperty('peopleRecordZoomLevel3') ? overrides.peopleRecordZoomLevel3! : [relationshipsToOmit.includes('PeopleRecordZoomLevel3Type') ? {} as PeopleRecordZoomLevel3Type : aPeopleRecordZoomLevel3Type({}, relationshipsToOmit)],
        peopleZoomLevelHover: overrides && overrides.hasOwnProperty('peopleZoomLevelHover') ? overrides.peopleZoomLevelHover! : relationshipsToOmit.includes('PeopleZoomLevelHoverType') ? {} as PeopleZoomLevelHoverType : aPeopleZoomLevelHoverType({}, relationshipsToOmit),
        publicationArticle: overrides && overrides.hasOwnProperty('publicationArticle') ? overrides.publicationArticle! : relationshipsToOmit.includes('PublicationsArticleZoomLevel3DetailType') ? {} as PublicationsArticleZoomLevel3DetailType : aPublicationsArticleZoomLevel3DetailType({}, relationshipsToOmit),
        publicationAudioVisual: overrides && overrides.hasOwnProperty('publicationAudioVisual') ? overrides.publicationAudioVisual! : relationshipsToOmit.includes('PublicationsAudioVisualZoomLevel3DetailType') ? {} as PublicationsAudioVisualZoomLevel3DetailType : aPublicationsAudioVisualZoomLevel3DetailType({}, relationshipsToOmit),
        publicationBook: overrides && overrides.hasOwnProperty('publicationBook') ? overrides.publicationBook! : relationshipsToOmit.includes('PublicationsBookZoomLevel3DetailType') ? {} as PublicationsBookZoomLevel3DetailType : aPublicationsBookZoomLevel3DetailType({}, relationshipsToOmit),
        publicationDetailZoomLevel3: overrides && overrides.hasOwnProperty('publicationDetailZoomLevel3') ? overrides.publicationDetailZoomLevel3! : relationshipsToOmit.includes('PublicationZoomLevel3DetailType') ? {} as PublicationZoomLevel3DetailType : aPublicationZoomLevel3DetailType({}, relationshipsToOmit),
        publicationRecordRelations: overrides && overrides.hasOwnProperty('publicationRecordRelations') ? overrides.publicationRecordRelations! : [relationshipsToOmit.includes('PublicationRelationsType') ? {} as PublicationRelationsType : aPublicationRelationsType({}, relationshipsToOmit)],
        publicationSerial: overrides && overrides.hasOwnProperty('publicationSerial') ? overrides.publicationSerial! : relationshipsToOmit.includes('PublicationsSerialZoomLevel3DetailType') ? {} as PublicationsSerialZoomLevel3DetailType : aPublicationsSerialZoomLevel3DetailType({}, relationshipsToOmit),
        publicationsRecordRelationsCount: overrides && overrides.hasOwnProperty('publicationsRecordRelationsCount') ? overrides.publicationsRecordRelationsCount! : [relationshipsToOmit.includes('PublicationsRelationsCountType') ? {} as PublicationsRelationsCountType : aPublicationsRelationsCountType({}, relationshipsToOmit)],
        publicationsRecordZoomLevel3: overrides && overrides.hasOwnProperty('publicationsRecordZoomLevel3') ? overrides.publicationsRecordZoomLevel3! : [relationshipsToOmit.includes('PublicationRecordZoomLevel3Type') ? {} as PublicationRecordZoomLevel3Type : aPublicationRecordZoomLevel3Type({}, relationshipsToOmit)],
        publicationsZoomRecordHover: overrides && overrides.hasOwnProperty('publicationsZoomRecordHover') ? overrides.publicationsZoomRecordHover! : relationshipsToOmit.includes('PublicationsZoomLevelHoverType') ? {} as PublicationsZoomLevelHoverType : aPublicationsZoomLevelHoverType({}, relationshipsToOmit),
        relations: overrides && overrides.hasOwnProperty('relations') ? overrides.relations! : [relationshipsToOmit.includes('ZoomLevel3RelationsType') ? {} as ZoomLevel3RelationsType : aZoomLevel3RelationsType({}, relationshipsToOmit)],
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryEntityResponseCollection') ? {} as StoryEntityResponseCollection : aStoryEntityResponseCollection({}, relationshipsToOmit),
        storiesRealtedWithinTheme: overrides && overrides.hasOwnProperty('storiesRealtedWithinTheme') ? overrides.storiesRealtedWithinTheme! : relationshipsToOmit.includes('StoriesRelatedToThemeResponse') ? {} as StoriesRelatedToThemeResponse : aStoriesRelatedToThemeResponse({}, relationshipsToOmit),
        storiesWithoutRelations: overrides && overrides.hasOwnProperty('storiesWithoutRelations') ? overrides.storiesWithoutRelations! : relationshipsToOmit.includes('StoryWithoutRelationsEntityResponseCollection') ? {} as StoryWithoutRelationsEntityResponseCollection : aStoryWithoutRelationsEntityResponseCollection({}, relationshipsToOmit),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        storyByLocale: overrides && overrides.hasOwnProperty('storyByLocale') ? overrides.storyByLocale! : relationshipsToOmit.includes('StoryEntityResponseCollection') ? {} as StoryEntityResponseCollection : aStoryEntityResponseCollection({}, relationshipsToOmit),
        storyMetaByLocale: overrides && overrides.hasOwnProperty('storyMetaByLocale') ? overrides.storyMetaByLocale! : relationshipsToOmit.includes('StoryMetaEntityResponseCollection') ? {} as StoryMetaEntityResponseCollection : aStoryMetaEntityResponseCollection({}, relationshipsToOmit),
        storyRelationsCount: overrides && overrides.hasOwnProperty('storyRelationsCount') ? overrides.storyRelationsCount! : relationshipsToOmit.includes('ZoomLevel3StoryRelationsCountType') ? {} as ZoomLevel3StoryRelationsCountType : aZoomLevel3StoryRelationsCountType({}, relationshipsToOmit),
        storyWithoutRelations: overrides && overrides.hasOwnProperty('storyWithoutRelations') ? overrides.storyWithoutRelations! : relationshipsToOmit.includes('StoryWithoutRelationsEntityResponse') ? {} as StoryWithoutRelationsEntityResponse : aStoryWithoutRelationsEntityResponse({}, relationshipsToOmit),
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : relationshipsToOmit.includes('ThemeEntityResponse') ? {} as ThemeEntityResponse : aThemeEntityResponse({}, relationshipsToOmit),
        themes: overrides && overrides.hasOwnProperty('themes') ? overrides.themes! : relationshipsToOmit.includes('ThemeRelationResponseCollection') ? {} as ThemeRelationResponseCollection : aThemeRelationResponseCollection({}, relationshipsToOmit),
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordRelationResponseCollection') ? {} as TriplyRecordRelationResponseCollection : aTriplyRecordRelationResponseCollection({}, relationshipsToOmit),
        usersPermissionsUser: overrides && overrides.hasOwnProperty('usersPermissionsUser') ? overrides.usersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        usersPermissionsUsers: overrides && overrides.hasOwnProperty('usersPermissionsUsers') ? overrides.usersPermissionsUsers! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponseCollection') ? {} as UsersPermissionsUserEntityResponseCollection : aUsersPermissionsUserEntityResponseCollection({}, relationshipsToOmit),
        zoomLevel1: overrides && overrides.hasOwnProperty('zoomLevel1') ? overrides.zoomLevel1! : [relationshipsToOmit.includes('ZoomLevel1Type') ? {} as ZoomLevel1Type : aZoomLevel1Type({}, relationshipsToOmit)],
        zoomLevel2: overrides && overrides.hasOwnProperty('zoomLevel2') ? overrides.zoomLevel2! : relationshipsToOmit.includes('ZoomLevel2ParentType') ? {} as ZoomLevel2ParentType : aZoomLevel2ParentType({}, relationshipsToOmit),
        zoomLevel2Amount: overrides && overrides.hasOwnProperty('zoomLevel2Amount') ? overrides.zoomLevel2Amount! : relationshipsToOmit.includes('ZoomLevel2AmountParentType') ? {} as ZoomLevel2AmountParentType : aZoomLevel2AmountParentType({}, relationshipsToOmit),
        zoomLevel3Archive: overrides && overrides.hasOwnProperty('zoomLevel3Archive') ? overrides.zoomLevel3Archive! : relationshipsToOmit.includes('ArchiveZoomLevel3DetailType') ? {} as ArchiveZoomLevel3DetailType : anArchiveZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel3Object: overrides && overrides.hasOwnProperty('zoomLevel3Object') ? overrides.zoomLevel3Object! : relationshipsToOmit.includes('ObjectsZoomLevel3DetailType') ? {} as ObjectsZoomLevel3DetailType : anObjectsZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel3Person: overrides && overrides.hasOwnProperty('zoomLevel3Person') ? overrides.zoomLevel3Person! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel3Publication: overrides && overrides.hasOwnProperty('zoomLevel3Publication') ? overrides.zoomLevel3Publication! : relationshipsToOmit.includes('PublicationZoomLevel3DetailType') ? {} as PublicationZoomLevel3DetailType : aPublicationZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel3StoriesRelationsForRecord: overrides && overrides.hasOwnProperty('zoomLevel3StoriesRelationsForRecord') ? overrides.zoomLevel3StoriesRelationsForRecord! : relationshipsToOmit.includes('ZoomLevel3StoriesRelatedToRecordType') ? {} as ZoomLevel3StoriesRelatedToRecordType : aZoomLevel3StoriesRelatedToRecordType({}, relationshipsToOmit),
        zoomLevel5Archive: overrides && overrides.hasOwnProperty('zoomLevel5Archive') ? overrides.zoomLevel5Archive! : relationshipsToOmit.includes('ArchivesFondsZoomLevel3DetailType') ? {} as ArchivesFondsZoomLevel3DetailType : anArchivesFondsZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5ArchivesFonds: overrides && overrides.hasOwnProperty('zoomLevel5ArchivesFonds') ? overrides.zoomLevel5ArchivesFonds! : relationshipsToOmit.includes('ArchivesFondsZoomLevel3DetailType') ? {} as ArchivesFondsZoomLevel3DetailType : anArchivesFondsZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5ArchivesOther: overrides && overrides.hasOwnProperty('zoomLevel5ArchivesOther') ? overrides.zoomLevel5ArchivesOther! : relationshipsToOmit.includes('ArchivesOtherZoomLevel3DetailType') ? {} as ArchivesOtherZoomLevel3DetailType : anArchivesOtherZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5Publication: overrides && overrides.hasOwnProperty('zoomLevel5Publication') ? overrides.zoomLevel5Publication! : relationshipsToOmit.includes('PublicationsArticleZoomLevel3DetailType') ? {} as PublicationsArticleZoomLevel3DetailType : aPublicationsArticleZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsArticle: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsArticle') ? overrides.zoomLevel5PublicationsArticle! : relationshipsToOmit.includes('PublicationsArticleZoomLevel3DetailType') ? {} as PublicationsArticleZoomLevel3DetailType : aPublicationsArticleZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsAudiovisual: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsAudiovisual') ? overrides.zoomLevel5PublicationsAudiovisual! : relationshipsToOmit.includes('PublicationsAudioVisualZoomLevel3DetailType') ? {} as PublicationsAudioVisualZoomLevel3DetailType : aPublicationsAudioVisualZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsBook: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsBook') ? overrides.zoomLevel5PublicationsBook! : relationshipsToOmit.includes('PublicationsBookZoomLevel3DetailType') ? {} as PublicationsBookZoomLevel3DetailType : aPublicationsBookZoomLevel3DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsSerial: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsSerial') ? overrides.zoomLevel5PublicationsSerial! : relationshipsToOmit.includes('PublicationsSerialZoomLevel3DetailType') ? {} as PublicationsSerialZoomLevel3DetailType : aPublicationsSerialZoomLevel3DetailType({}, relationshipsToOmit),
    };
};

export const aResponseCollectionMeta = (overrides?: Partial<ResponseCollectionMeta>, _relationshipsToOmit: Array<string> = []): ResponseCollectionMeta => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ResponseCollectionMeta']);
    return {
        pagination: overrides && overrides.hasOwnProperty('pagination') ? overrides.pagination! : relationshipsToOmit.includes('Pagination') ? {} as Pagination : aPagination({}, relationshipsToOmit),
    };
};

export const aStoriesRelatedToThemeResponse = (overrides?: Partial<StoriesRelatedToThemeResponse>, _relationshipsToOmit: Array<string> = []): StoriesRelatedToThemeResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoriesRelatedToThemeResponse']);
    return {
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 8.91,
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'harum',
    };
};

export const aStory = (overrides?: Partial<Story>, _relationshipsToOmit: Array<string> = []): Story => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Story']);
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        child_stories: overrides && overrides.hasOwnProperty('child_stories') ? overrides.child_stories! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        components: overrides && overrides.hasOwnProperty('components') ? overrides.components! : [relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-12T23:57:50.299Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'ratione',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'laudantium',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        parent_story: overrides && overrides.hasOwnProperty('parent_story') ? overrides.parent_story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDate') ? {} as ComponentCorePublicationDate : aComponentCorePublicationDate({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-02T01:42:16.891Z',
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : 'quae',
        siblings: overrides && overrides.hasOwnProperty('siblings') ? overrides.siblings! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'minima',
        storyLinks: overrides && overrides.hasOwnProperty('storyLinks') ? overrides.storyLinks! : relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit),
        themes: overrides && overrides.hasOwnProperty('themes') ? overrides.themes! : relationshipsToOmit.includes('ThemeRelationResponseCollection') ? {} as ThemeRelationResponseCollection : aThemeRelationResponseCollection({}, relationshipsToOmit),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframe') ? {} as ComponentCoreTimeframe : aComponentCoreTimeframe({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'deleniti',
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordRelationResponseCollection') ? {} as TriplyRecordRelationResponseCollection : aTriplyRecordRelationResponseCollection({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-12T21:40:03.398Z',
    };
};

export const aStoryCountType = (overrides?: Partial<StoryCountType>, _relationshipsToOmit: Array<string> = []): StoryCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryCountType']);
    return {
        archives: overrides && overrides.hasOwnProperty('archives') ? overrides.archives! : 8.23,
        objects: overrides && overrides.hasOwnProperty('objects') ? overrides.objects! : 8.37,
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : 5.11,
        publications: overrides && overrides.hasOwnProperty('publications') ? overrides.publications! : 6.89,
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
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit),
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aStoryFiltersInput = (overrides?: Partial<StoryFiltersInput>, _relationshipsToOmit: Array<string> = []): StoryFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit)],
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorFiltersInput') ? {} as AuthorFiltersInput : anAuthorFiltersInput({}, relationshipsToOmit),
        child_stories: overrides && overrides.hasOwnProperty('child_stories') ? overrides.child_stories! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit)],
        parent_story: overrides && overrides.hasOwnProperty('parent_story') ? overrides.parent_story! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        siblings: overrides && overrides.hasOwnProperty('siblings') ? overrides.siblings! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        storyLinks: overrides && overrides.hasOwnProperty('storyLinks') ? overrides.storyLinks! : relationshipsToOmit.includes('ComponentModulesButtonsModuleFiltersInput') ? {} as ComponentModulesButtonsModuleFiltersInput : aComponentModulesButtonsModuleFiltersInput({}, relationshipsToOmit),
        themes: overrides && overrides.hasOwnProperty('themes') ? overrides.themes! : relationshipsToOmit.includes('ThemeFiltersInput') ? {} as ThemeFiltersInput : aThemeFiltersInput({}, relationshipsToOmit),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordFiltersInput') ? {} as TriplyRecordFiltersInput : aTriplyRecordFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aStoryMetaEntityResponseCollection = (overrides?: Partial<StoryMetaEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): StoryMetaEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryMetaEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit),
    };
};

export const aStoryRelationResponseCollection = (overrides?: Partial<StoryRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): StoryRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
    };
};

export const aStoryWithoutRelations = (overrides?: Partial<StoryWithoutRelations>, _relationshipsToOmit: Array<string> = []): StoryWithoutRelations => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryWithoutRelations']);
    return {
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-07T07:34:02.023Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'reprehenderit',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'sequi',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-03T00:39:11.026Z',
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : 'ut',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'unde',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'modi',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-10T05:23:31.955Z',
    };
};

export const aStoryWithoutRelationsEntity = (overrides?: Partial<StoryWithoutRelationsEntity>, _relationshipsToOmit: Array<string> = []): StoryWithoutRelationsEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryWithoutRelationsEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('StoryWithoutRelations') ? {} as StoryWithoutRelations : aStoryWithoutRelations({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'fb0d7b1c-42a7-44e4-8e28-73216d3a975a',
    };
};

export const aStoryWithoutRelationsEntityResponse = (overrides?: Partial<StoryWithoutRelationsEntityResponse>, _relationshipsToOmit: Array<string> = []): StoryWithoutRelationsEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryWithoutRelationsEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('StoryWithoutRelationsEntity') ? {} as StoryWithoutRelationsEntity : aStoryWithoutRelationsEntity({}, relationshipsToOmit),
    };
};

export const aStoryWithoutRelationsEntityResponseCollection = (overrides?: Partial<StoryWithoutRelationsEntityResponseCollection>, _relationshipsToOmit: Array<string> = []): StoryWithoutRelationsEntityResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'StoryWithoutRelationsEntityResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('StoryWithoutRelationsEntity') ? {} as StoryWithoutRelationsEntity : aStoryWithoutRelationsEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
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

export const aTheme = (overrides?: Partial<Theme>, _relationshipsToOmit: Array<string> = []): Theme => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Theme']);
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-11T08:39:10.744Z',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'tempore',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('ThemeRelationResponseCollection') ? {} as ThemeRelationResponseCollection : aThemeRelationResponseCollection({}, relationshipsToOmit),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'voluptas',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-08T20:25:41.963Z',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-17T22:07:55.461Z',
    };
};

export const aThemeEntity = (overrides?: Partial<ThemeEntity>, _relationshipsToOmit: Array<string> = []): ThemeEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ThemeEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('Theme') ? {} as Theme : aTheme({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '60ac1968-01c1-4074-aa0a-30e090b54114',
    };
};

export const aThemeEntityResponse = (overrides?: Partial<ThemeEntityResponse>, _relationshipsToOmit: Array<string> = []): ThemeEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ThemeEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('ThemeEntity') ? {} as ThemeEntity : aThemeEntity({}, relationshipsToOmit),
    };
};

export const aThemeFiltersInput = (overrides?: Partial<ThemeFiltersInput>, _relationshipsToOmit: Array<string> = []): ThemeFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ThemeFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('ThemeFiltersInput') ? {} as ThemeFiltersInput : aThemeFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('ThemeFiltersInput') ? {} as ThemeFiltersInput : aThemeFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('ThemeFiltersInput') ? {} as ThemeFiltersInput : aThemeFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aThemeRelationResponseCollection = (overrides?: Partial<ThemeRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): ThemeRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ThemeRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('ThemeEntity') ? {} as ThemeEntity : aThemeEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const aTriplyRecord = (overrides?: Partial<TriplyRecord>, _relationshipsToOmit: Array<string> = []): TriplyRecord => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecord']);
    return {
        archive: overrides && overrides.hasOwnProperty('archive') ? overrides.archive! : relationshipsToOmit.includes('ArchiveZoomLevel3DetailType') ? {} as ArchiveZoomLevel3DetailType : anArchiveZoomLevel3DetailType({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-03T05:28:06.708Z',
        object: overrides && overrides.hasOwnProperty('object') ? overrides.object! : relationshipsToOmit.includes('ObjectsZoomLevel3DetailType') ? {} as ObjectsZoomLevel3DetailType : anObjectsZoomLevel3DetailType({}, relationshipsToOmit),
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : relationshipsToOmit.includes('PeopleZoomLevel3DetailType') ? {} as PeopleZoomLevel3DetailType : aPeopleZoomLevel3DetailType({}, relationshipsToOmit),
        publication: overrides && overrides.hasOwnProperty('publication') ? overrides.publication! : relationshipsToOmit.includes('PublicationZoomLevel3DetailType') ? {} as PublicationZoomLevel3DetailType : aPublicationZoomLevel3DetailType({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-17T03:41:53.182Z',
        recordId: overrides && overrides.hasOwnProperty('recordId') ? overrides.recordId! : 'in',
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EnumTriplyrecordType.Archive,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-13T18:59:28.998Z',
    };
};

export const aTriplyRecordEntity = (overrides?: Partial<TriplyRecordEntity>, _relationshipsToOmit: Array<string> = []): TriplyRecordEntity => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecordEntity']);
    return {
        attributes: overrides && overrides.hasOwnProperty('attributes') ? overrides.attributes! : relationshipsToOmit.includes('TriplyRecord') ? {} as TriplyRecord : aTriplyRecord({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b672988b-b69e-4dba-968a-5068608f1500',
    };
};

export const aTriplyRecordEntityResponse = (overrides?: Partial<TriplyRecordEntityResponse>, _relationshipsToOmit: Array<string> = []): TriplyRecordEntityResponse => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecordEntityResponse']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : relationshipsToOmit.includes('TriplyRecordEntity') ? {} as TriplyRecordEntity : aTriplyRecordEntity({}, relationshipsToOmit),
    };
};

export const aTriplyRecordFiltersInput = (overrides?: Partial<TriplyRecordFiltersInput>, _relationshipsToOmit: Array<string> = []): TriplyRecordFiltersInput => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecordFiltersInput']);
    return {
        and: overrides && overrides.hasOwnProperty('and') ? overrides.and! : [relationshipsToOmit.includes('TriplyRecordFiltersInput') ? {} as TriplyRecordFiltersInput : aTriplyRecordFiltersInput({}, relationshipsToOmit)],
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('TriplyRecordFiltersInput') ? {} as TriplyRecordFiltersInput : aTriplyRecordFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('TriplyRecordFiltersInput') ? {} as TriplyRecordFiltersInput : aTriplyRecordFiltersInput({}, relationshipsToOmit)],
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        recordId: overrides && overrides.hasOwnProperty('recordId') ? overrides.recordId! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
    };
};

export const aTriplyRecordRelationResponseCollection = (overrides?: Partial<TriplyRecordRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): TriplyRecordRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecordRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('TriplyRecordEntity') ? {} as TriplyRecordEntity : aTriplyRecordEntity({}, relationshipsToOmit)],
        meta: overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : relationshipsToOmit.includes('ResponseCollectionMeta') ? {} as ResponseCollectionMeta : aResponseCollectionMeta({}, relationshipsToOmit),
    };
};

export const anUploadFile = (overrides?: Partial<UploadFile>, _relationshipsToOmit: Array<string> = []): UploadFile => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFile']);
    return {
        alternativeText: overrides && overrides.hasOwnProperty('alternativeText') ? overrides.alternativeText! : 'enim',
        caption: overrides && overrides.hasOwnProperty('caption') ? overrides.caption! : 'in',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-05T20:09:03.147Z',
        ext: overrides && overrides.hasOwnProperty('ext') ? overrides.ext! : 'est',
        formats: overrides && overrides.hasOwnProperty('formats') ? overrides.formats! : 'qui',
        hash: overrides && overrides.hasOwnProperty('hash') ? overrides.hash! : 'nihil',
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 9.22,
        mime: overrides && overrides.hasOwnProperty('mime') ? overrides.mime! : 'dolorum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'odit',
        previewUrl: overrides && overrides.hasOwnProperty('previewUrl') ? overrides.previewUrl! : 'distinctio',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'dolorem',
        provider_metadata: overrides && overrides.hasOwnProperty('provider_metadata') ? overrides.provider_metadata! : 'qui',
        size: overrides && overrides.hasOwnProperty('size') ? overrides.size! : 6.1,
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-16T06:20:16.781Z',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'vel',
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 6.28,
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

export const anUploadFileRelationResponseCollection = (overrides?: Partial<UploadFileRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UploadFileRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UploadFileRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UploadFileEntity') ? {} as UploadFileEntity : anUploadFileEntity({}, relationshipsToOmit)],
    };
};

export const aUsersPermissionsPermission = (overrides?: Partial<UsersPermissionsPermission>, _relationshipsToOmit: Array<string> = []): UsersPermissionsPermission => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsPermission']);
    return {
        action: overrides && overrides.hasOwnProperty('action') ? overrides.action! : 'aperiam',
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-07T20:56:08.514Z',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponse') ? {} as UsersPermissionsRoleEntityResponse : aUsersPermissionsRoleEntityResponse({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-03T14:37:04.623Z',
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

export const aUsersPermissionsRole = (overrides?: Partial<UsersPermissionsRole>, _relationshipsToOmit: Array<string> = []): UsersPermissionsRole => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsRole']);
    return {
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-11T02:55:14.625Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'harum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quae',
        permissions: overrides && overrides.hasOwnProperty('permissions') ? overrides.permissions! : relationshipsToOmit.includes('UsersPermissionsPermissionRelationResponseCollection') ? {} as UsersPermissionsPermissionRelationResponseCollection : aUsersPermissionsPermissionRelationResponseCollection({}, relationshipsToOmit),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'sed',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-04T02:36:09.159Z',
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

export const aUsersPermissionsUser = (overrides?: Partial<UsersPermissionsUser>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUser => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUser']);
    return {
        blocked: overrides && overrides.hasOwnProperty('blocked') ? overrides.blocked! : false,
        confirmed: overrides && overrides.hasOwnProperty('confirmed') ? overrides.confirmed! : false,
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-13T21:40:49.115Z',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'id',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'saepe',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : relationshipsToOmit.includes('UsersPermissionsRoleEntityResponse') ? {} as UsersPermissionsRoleEntityResponse : aUsersPermissionsRoleEntityResponse({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-06T13:27:18.696Z',
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

export const aUsersPermissionsUserRelationResponseCollection = (overrides?: Partial<UsersPermissionsUserRelationResponseCollection>, _relationshipsToOmit: Array<string> = []): UsersPermissionsUserRelationResponseCollection => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'UsersPermissionsUserRelationResponseCollection']);
    return {
        data: overrides && overrides.hasOwnProperty('data') ? overrides.data! : [relationshipsToOmit.includes('UsersPermissionsUserEntity') ? {} as UsersPermissionsUserEntity : aUsersPermissionsUserEntity({}, relationshipsToOmit)],
    };
};

export const aZoomLevel1Type = (overrides?: Partial<ZoomLevel1Type>, _relationshipsToOmit: Array<string> = []): ZoomLevel1Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel1Type']);
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 2197,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : EntityNames.Archives,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'consequatur',
    };
};

export const aZoomLevel2AmountParentType = (overrides?: Partial<ZoomLevel2AmountParentType>, _relationshipsToOmit: Array<string> = []): ZoomLevel2AmountParentType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel2AmountParentType']);
    return {
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 'eos',
    };
};

export const aZoomLevel2ParentType = (overrides?: Partial<ZoomLevel2ParentType>, _relationshipsToOmit: Array<string> = []): ZoomLevel2ParentType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel2ParentType']);
    return {
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [relationshipsToOmit.includes('ZoomLevel2Type') ? {} as ZoomLevel2Type : aZoomLevel2Type({}, relationshipsToOmit)],
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 8062,
    };
};

export const aZoomLevel2Type = (overrides?: Partial<ZoomLevel2Type>, _relationshipsToOmit: Array<string> = []): ZoomLevel2Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel2Type']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aut',
        thumbnail: overrides && overrides.hasOwnProperty('thumbnail') ? overrides.thumbnail! : 'consequatur',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'eaque',
    };
};

export const aZoomLevel3RelationsType = (overrides?: Partial<ZoomLevel3RelationsType>, _relationshipsToOmit: Array<string> = []): ZoomLevel3RelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel3RelationsType']);
    return {
        paginatedRelations: overrides && overrides.hasOwnProperty('paginatedRelations') ? overrides.paginatedRelations! : ['nobis'],
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 2.42,
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};

export const aZoomLevel3StoriesRelatedToRecordType = (overrides?: Partial<ZoomLevel3StoriesRelatedToRecordType>, _relationshipsToOmit: Array<string> = []): ZoomLevel3StoriesRelatedToRecordType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel3StoriesRelatedToRecordType']);
    return {
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : [relationshipsToOmit.includes('StoryEntity') ? {} as StoryEntity : aStoryEntity({}, relationshipsToOmit)],
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 2.47,
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'aut',
    };
};

export const aZoomLevel3StoryRelationsCountType = (overrides?: Partial<ZoomLevel3StoryRelationsCountType>, _relationshipsToOmit: Array<string> = []): ZoomLevel3StoryRelationsCountType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel3StoryRelationsCountType']);
    return {
        linkedStoryCount: overrides && overrides.hasOwnProperty('linkedStoryCount') ? overrides.linkedStoryCount! : 7.47,
        linkedTriplyRecords: overrides && overrides.hasOwnProperty('linkedTriplyRecords') ? overrides.linkedTriplyRecords! : relationshipsToOmit.includes('StoryCountType') ? {} as StoryCountType : aStoryCountType({}, relationshipsToOmit),
    };
};
