import { ArchivesFondsCreatorType, ArchivesFondsZoomLevel5DetailType, ArchivesOtherZoomLevel5DetailType, ArchivesZoomLevel4FiltersArgs, Author, AuthorEntity, AuthorEntityResponse, AuthorEntityResponseCollection, AuthorFiltersInput, BooleanFilterInput, ComponentCoreButton, ComponentCoreButtonFiltersInput, ComponentCoreCarouselItem, ComponentCoreFeaturedFields, ComponentCoreGridFeaturedFields, ComponentCoreModuleLayouts, ComponentCoreModuleLayoutsFiltersInput, ComponentCorePublicationDate, ComponentCorePublicationDateFiltersInput, ComponentCoreTableBody, ComponentCoreTableBodyFiltersInput, ComponentCoreTableBodyItem, ComponentCoreTableBodyItemFiltersInput, ComponentCoreTableHead, ComponentCoreTableHeadFiltersInput, ComponentCoreTableHeadItem, ComponentCoreTableHeadItemFiltersInput, ComponentCoreTimeframe, ComponentCoreTimeframeFiltersInput, ComponentModulesButtonsModule, ComponentModulesButtonsModuleFiltersInput, ComponentModulesCarousel, ComponentModulesGridModule, ComponentModulesImage, ComponentModulesImageCarousel, ComponentModulesPullquote, ComponentModulesSubtitle, ComponentModulesTableModule, ComponentModulesTextModule, ComponentModulesTitleModule, DateFilterInput, DateTimeFilterInput, Error, Homepage, HomepageEntity, HomepageEntityResponse, HomepageRelationResponseCollection, IdFilterInput, Landingpage, LandingpageEntity, LandingpageEntityResponse, LandingpageEntityResponseCollection, LandingpageFiltersInput, LandingpageRelationResponseCollection, Location, LocationEntity, LocationEntityResponse, LocationFiltersInput, LocationRelationResponseCollection, LongFilterInput, Menupage, MenupageEntity, MenupageEntityResponse, MenupageEntityResponseCollection, MenupageFiltersInput, MenupageRelationResponseCollection, ObjectMakerType, ObjectMaterialType, ObjectTechniqueType, ObjectsZoomLevel4FiltersArgs, ObjectsZoomLevel5DetailType, Pagination, PaginationArg, PeopleAssociationType, PeopleZoomLevel4FiltersArgs, PoepleZoomLevel5DetailType, PublicationAuthorType, PublicationsArticleZoomLevel5DetailType, PublicationsAudioVisualZoomLevel5DetailType, PublicationsBookZoomLevel5DetailType, PublicationsSerialZoomLevel5DetailType, PublicationsZoomLevel4FiltersArgs, Query, RelatedRecordType, ResponseCollectionMeta, Story, StoryEntity, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput, StoryRelationResponseCollection, StoryWithoutRelations, StoryWithoutRelationsEntity, StoryWithoutRelationsEntityResponse, StoryWithoutRelationsEntityResponseCollection, StringFilterInput, Table, TableEntity, TableEntityResponse, TableEntityResponseCollection, TableFiltersInput, TriplyRecord, TriplyRecordEntity, TriplyRecordEntityResponse, TriplyRecordFiltersInput, TriplyRecordRelationResponseCollection, UploadFile, UploadFileEntity, UploadFileEntityResponse, UploadFileRelationResponseCollection, UsersPermissionsPermission, UsersPermissionsPermissionEntity, UsersPermissionsPermissionFiltersInput, UsersPermissionsPermissionRelationResponseCollection, UsersPermissionsRole, UsersPermissionsRoleEntity, UsersPermissionsRoleEntityResponse, UsersPermissionsRoleFiltersInput, UsersPermissionsUser, UsersPermissionsUserEntity, UsersPermissionsUserEntityResponse, UsersPermissionsUserEntityResponseCollection, UsersPermissionsUserFiltersInput, UsersPermissionsUserRelationResponseCollection, ZoomLevel1Type, ZoomLevel2Type, ZoomLevel3Type, ZoomLevel4ParentType, ZoomLevel4Type, ZoomLevel5RelatedRecordType, ZoomLevel5RelationsType, ArchivesZoomLevel5Types, EntityNames, EnumComponentcorecarouselitemType, EnumComponentcoremodulelayoutsSpacingbottom, EnumComponentcoremodulelayoutsSpacingtop, EnumComponentcorepublicationdateDisplaytype, EnumComponentmodulesbuttonsmoduleButtonstyle, EnumComponentmodulescarouselType, EnumComponentmodulesgridmoduleFieldtypes, EnumTriplyrecordType, PublicationsZoomLevel5Types, TriplyExternalSourceEnum } from '../generated/graphql';

export const anArchivesFondsCreatorType = (overrides?: Partial<ArchivesFondsCreatorType>, _relationshipsToOmit: Array<string> = []): ArchivesFondsCreatorType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesFondsCreatorType']);
    return {
        creator: overrides && overrides.hasOwnProperty('creator') ? overrides.creator! : 'assumenda',
        creatorHistory: overrides && overrides.hasOwnProperty('creatorHistory') ? overrides.creatorHistory! : 'omnis',
        creatorLabel: overrides && overrides.hasOwnProperty('creatorLabel') ? overrides.creatorLabel! : 'pariatur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quam',
        populatedCreator: overrides && overrides.hasOwnProperty('populatedCreator') ? overrides.populatedCreator! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
    };
};

export const anArchivesFondsZoomLevel5DetailType = (overrides?: Partial<ArchivesFondsZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): ArchivesFondsZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesFondsZoomLevel5DetailType']);
    return {
        appendices: overrides && overrides.hasOwnProperty('appendices') ? overrides.appendices! : 'et',
        conditionsGoverningAccess: overrides && overrides.hasOwnProperty('conditionsGoverningAccess') ? overrides.conditionsGoverningAccess! : 'et',
        contentScope: overrides && overrides.hasOwnProperty('contentScope') ? overrides.contentScope! : 'et',
        creators: overrides && overrides.hasOwnProperty('creators') ? overrides.creators! : [relationshipsToOmit.includes('ArchivesFondsCreatorType') ? {} as ArchivesFondsCreatorType : anArchivesFondsCreatorType({}, relationshipsToOmit)],
        custodialHistory: overrides && overrides.hasOwnProperty('custodialHistory') ? overrides.custodialHistory! : 'temporibus',
        descriptionLevel: overrides && overrides.hasOwnProperty('descriptionLevel') ? overrides.descriptionLevel! : 'et',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'itaque',
        extent: overrides && overrides.hasOwnProperty('extent') ? overrides.extent! : 'accusamus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'incidunt',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'molestiae',
        partReference: overrides && overrides.hasOwnProperty('partReference') ? overrides.partReference! : 'atque',
        partTitle: overrides && overrides.hasOwnProperty('partTitle') ? overrides.partTitle! : 'fuga',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'laudantium',
        productionDate: overrides && overrides.hasOwnProperty('productionDate') ? overrides.productionDate! : 'id',
        recordTitle: overrides && overrides.hasOwnProperty('recordTitle') ? overrides.recordTitle! : 'tempora',
        relatedMaterial: overrides && overrides.hasOwnProperty('relatedMaterial') ? overrides.relatedMaterial! : 'quos',
        repository: overrides && overrides.hasOwnProperty('repository') ? overrides.repository! : 'reprehenderit',
        repositoryLabel: overrides && overrides.hasOwnProperty('repositoryLabel') ? overrides.repositoryLabel! : 'adipisci',
        right: overrides && overrides.hasOwnProperty('right') ? overrides.right! : 'quam',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'voluptas',
        source: overrides && overrides.hasOwnProperty('source') ? overrides.source! : 'nam',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'ut',
        systemOfArrangement: overrides && overrides.hasOwnProperty('systemOfArrangement') ? overrides.systemOfArrangement! : 'consequatur',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ArchivesZoomLevel5Types.Fonds,
    };
};

export const anArchivesOtherZoomLevel5DetailType = (overrides?: Partial<ArchivesOtherZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): ArchivesOtherZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesOtherZoomLevel5DetailType']);
    return {
        dateLabel: overrides && overrides.hasOwnProperty('dateLabel') ? overrides.dateLabel! : 'sint',
        dimensionFree: overrides && overrides.hasOwnProperty('dimensionFree') ? overrides.dimensionFree! : 'corrupti',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'molestiae',
        existenceOfOriginals: overrides && overrides.hasOwnProperty('existenceOfOriginals') ? overrides.existenceOfOriginals! : 'beatae',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'occaecati',
        mediaReference: overrides && overrides.hasOwnProperty('mediaReference') ? overrides.mediaReference! : 'dignissimos',
        mediaReferenceLabel: overrides && overrides.hasOwnProperty('mediaReferenceLabel') ? overrides.mediaReferenceLabel! : 'fugit',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'similique',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'quia',
        pidWorkURIs: overrides && overrides.hasOwnProperty('pidWorkURIs') ? overrides.pidWorkURIs! : ['labore'],
        relatedMaterial: overrides && overrides.hasOwnProperty('relatedMaterial') ? overrides.relatedMaterial! : 'quia',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'impedit',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'laborum',
        scopeContent: overrides && overrides.hasOwnProperty('scopeContent') ? overrides.scopeContent! : 'officiis',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'deserunt',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'praesentium',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ArchivesZoomLevel5Types.Fonds,
    };
};

export const anArchivesZoomLevel4FiltersArgs = (overrides?: Partial<ArchivesZoomLevel4FiltersArgs>, _relationshipsToOmit: Array<string> = []): ArchivesZoomLevel4FiltersArgs => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ArchivesZoomLevel4FiltersArgs']);
    return {
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : 'architecto',
        descriptionLevel: overrides && overrides.hasOwnProperty('descriptionLevel') ? overrides.descriptionLevel! : 'ratione',
        relatedName: overrides && overrides.hasOwnProperty('relatedName') ? overrides.relatedName! : 'ea',
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
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
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

export const aComponentCoreModuleLayouts = (overrides?: Partial<ComponentCoreModuleLayouts>, _relationshipsToOmit: Array<string> = []): ComponentCoreModuleLayouts => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentCoreModuleLayouts']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '57280df8-4370-466c-bd69-ed6c9ebdbf6a',
        spacingBottom: overrides && overrides.hasOwnProperty('spacingBottom') ? overrides.spacingBottom! : EnumComponentcoremodulelayoutsSpacingbottom.Lg,
        spacingTop: overrides && overrides.hasOwnProperty('spacingTop') ? overrides.spacingTop! : EnumComponentcoremodulelayoutsSpacingtop.Lg,
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
        buttonsModuleLayout: overrides && overrides.hasOwnProperty('buttonsModuleLayout') ? overrides.buttonsModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
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
        carouselModuleLayout: overrides && overrides.hasOwnProperty('carouselModuleLayout') ? overrides.carouselModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
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
        gridModuleLayout: overrides && overrides.hasOwnProperty('gridModuleLayout') ? overrides.gridModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
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
        imageModuleLayout: overrides && overrides.hasOwnProperty('imageModuleLayout') ? overrides.imageModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
    };
};

export const aComponentModulesImageCarousel = (overrides?: Partial<ComponentModulesImageCarousel>, _relationshipsToOmit: Array<string> = []): ComponentModulesImageCarousel => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ComponentModulesImageCarousel']);
    return {
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'nostrum',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'caa291cc-f344-4c8e-b7ad-3f6d9c22152d',
        imageCarouselModuleLayout: overrides && overrides.hasOwnProperty('imageCarouselModuleLayout') ? overrides.imageCarouselModuleLayout! : relationshipsToOmit.includes('ComponentCoreModuleLayouts') ? {} as ComponentCoreModuleLayouts : aComponentCoreModuleLayouts({}, relationshipsToOmit),
        images: overrides && overrides.hasOwnProperty('images') ? overrides.images! : relationshipsToOmit.includes('UploadFileRelationResponseCollection') ? {} as UploadFileRelationResponseCollection : anUploadFileRelationResponseCollection({}, relationshipsToOmit),
        items: overrides && overrides.hasOwnProperty('items') ? overrides.items! : [relationshipsToOmit.includes('ComponentCoreCarouselItem') ? {} as ComponentCoreCarouselItem : aComponentCoreCarouselItem({}, relationshipsToOmit)],
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
        populatedMaker: overrides && overrides.hasOwnProperty('populatedMaker') ? overrides.populatedMaker! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
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

export const anObjectTechniqueType = (overrides?: Partial<ObjectTechniqueType>, _relationshipsToOmit: Array<string> = []): ObjectTechniqueType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectTechniqueType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'corrupti',
        technique: overrides && overrides.hasOwnProperty('technique') ? overrides.technique! : 'saepe',
        techniqueLabel: overrides && overrides.hasOwnProperty('techniqueLabel') ? overrides.techniqueLabel! : 'laudantium',
    };
};

export const anObjectsZoomLevel4FiltersArgs = (overrides?: Partial<ObjectsZoomLevel4FiltersArgs>, _relationshipsToOmit: Array<string> = []): ObjectsZoomLevel4FiltersArgs => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectsZoomLevel4FiltersArgs']);
    return {
        Maker: overrides && overrides.hasOwnProperty('Maker') ? overrides.Maker! : 'id',
        Material: overrides && overrides.hasOwnProperty('Material') ? overrides.Material! : 'deleniti',
        Objectname: overrides && overrides.hasOwnProperty('Objectname') ? overrides.Objectname! : 'omnis',
        PerInst: overrides && overrides.hasOwnProperty('PerInst') ? overrides.PerInst! : 'omnis',
        Subject: overrides && overrides.hasOwnProperty('Subject') ? overrides.Subject! : 'voluptatem',
        Technique: overrides && overrides.hasOwnProperty('Technique') ? overrides.Technique! : 'doloremque',
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : 'fugit',
    };
};

export const anObjectsZoomLevel5DetailType = (overrides?: Partial<ObjectsZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): ObjectsZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ObjectsZoomLevel5DetailType']);
    return {
        archiveCollectionCode: overrides && overrides.hasOwnProperty('archiveCollectionCode') ? overrides.archiveCollectionCode! : 'nihil',
        associationPerson: overrides && overrides.hasOwnProperty('associationPerson') ? overrides.associationPerson! : 'eveniet',
        associationPersonLabel: overrides && overrides.hasOwnProperty('associationPersonLabel') ? overrides.associationPersonLabel! : 'eum',
        associationPersonType: overrides && overrides.hasOwnProperty('associationPersonType') ? overrides.associationPersonType! : 'quis',
        creationPlace: overrides && overrides.hasOwnProperty('creationPlace') ? overrides.creationPlace! : 'molestias',
        creationPlaceLabel: overrides && overrides.hasOwnProperty('creationPlaceLabel') ? overrides.creationPlaceLabel! : 'ut',
        creditLine: overrides && overrides.hasOwnProperty('creditLine') ? overrides.creditLine! : 'hic',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'et',
        dimDepth: overrides && overrides.hasOwnProperty('dimDepth') ? overrides.dimDepth! : 'non',
        dimHeight: overrides && overrides.hasOwnProperty('dimHeight') ? overrides.dimHeight! : 'quis',
        dimWidth: overrides && overrides.hasOwnProperty('dimWidth') ? overrides.dimWidth! : 'dolore',
        dimensionUnit: overrides && overrides.hasOwnProperty('dimensionUnit') ? overrides.dimensionUnit! : 'et',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'commodi',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'mollitia',
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'voluptatem',
        imageLabel: overrides && overrides.hasOwnProperty('imageLabel') ? overrides.imageLabel! : 'occaecati',
        makers: overrides && overrides.hasOwnProperty('makers') ? overrides.makers! : [relationshipsToOmit.includes('ObjectMakerType') ? {} as ObjectMakerType : anObjectMakerType({}, relationshipsToOmit)],
        materials: overrides && overrides.hasOwnProperty('materials') ? overrides.materials! : [relationshipsToOmit.includes('ObjectMaterialType') ? {} as ObjectMaterialType : anObjectMaterialType({}, relationshipsToOmit)],
        numberOfParts: overrides && overrides.hasOwnProperty('numberOfParts') ? overrides.numberOfParts! : 'atque',
        objectName: overrides && overrides.hasOwnProperty('objectName') ? overrides.objectName! : 'autem',
        objectNameLabel: overrides && overrides.hasOwnProperty('objectNameLabel') ? overrides.objectNameLabel! : 'quo',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'corporis',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'deleniti',
        relatedObjectTitle: overrides && overrides.hasOwnProperty('relatedObjectTitle') ? overrides.relatedObjectTitle! : 'non',
        rights: overrides && overrides.hasOwnProperty('rights') ? overrides.rights! : 'accusantium',
        rightsLabel: overrides && overrides.hasOwnProperty('rightsLabel') ? overrides.rightsLabel! : 'ut',
        scale: overrides && overrides.hasOwnProperty('scale') ? overrides.scale! : 'officiis',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'officiis',
        techniques: overrides && overrides.hasOwnProperty('techniques') ? overrides.techniques! : [relationshipsToOmit.includes('ObjectTechniqueType') ? {} as ObjectTechniqueType : anObjectTechniqueType({}, relationshipsToOmit)],
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'ad',
        titleType: overrides && overrides.hasOwnProperty('titleType') ? overrides.titleType! : 'reiciendis',
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

export const aPeopleZoomLevel4FiltersArgs = (overrides?: Partial<PeopleZoomLevel4FiltersArgs>, _relationshipsToOmit: Array<string> = []): PeopleZoomLevel4FiltersArgs => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PeopleZoomLevel4FiltersArgs']);
    return {
        BirthDate: overrides && overrides.hasOwnProperty('BirthDate') ? overrides.BirthDate! : 'reiciendis',
        DeathDate: overrides && overrides.hasOwnProperty('DeathDate') ? overrides.DeathDate! : 'molestiae',
        NameType: overrides && overrides.hasOwnProperty('NameType') ? overrides.NameType! : 'optio',
        Period: overrides && overrides.hasOwnProperty('Period') ? overrides.Period! : 'porro',
        Place: overrides && overrides.hasOwnProperty('Place') ? overrides.Place! : 'quam',
        Profession: overrides && overrides.hasOwnProperty('Profession') ? overrides.Profession! : 'occaecati',
    };
};

export const aPoepleZoomLevel5DetailType = (overrides?: Partial<PoepleZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): PoepleZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PoepleZoomLevel5DetailType']);
    return {
        associations: overrides && overrides.hasOwnProperty('associations') ? overrides.associations! : [relationshipsToOmit.includes('PeopleAssociationType') ? {} as PeopleAssociationType : aPeopleAssociationType({}, relationshipsToOmit)],
        birthDate: overrides && overrides.hasOwnProperty('birthDate') ? overrides.birthDate! : 'est',
        birthPlace: overrides && overrides.hasOwnProperty('birthPlace') ? overrides.birthPlace! : 'corrupti',
        birthPlaceLabel: overrides && overrides.hasOwnProperty('birthPlaceLabel') ? overrides.birthPlaceLabel! : 'magnam',
        deathDate: overrides && overrides.hasOwnProperty('deathDate') ? overrides.deathDate! : 'nulla',
        deathPlace: overrides && overrides.hasOwnProperty('deathPlace') ? overrides.deathPlace! : 'tenetur',
        deathPlaceLabel: overrides && overrides.hasOwnProperty('deathPlaceLabel') ? overrides.deathPlaceLabel! : 'iusto',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'voluptas',
        endDate: overrides && overrides.hasOwnProperty('endDate') ? overrides.endDate! : 'et',
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'quia',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'hic',
        institution: overrides && overrides.hasOwnProperty('institution') ? overrides.institution! : 'repellat',
        institutionLabel: overrides && overrides.hasOwnProperty('institutionLabel') ? overrides.institutionLabel! : 'distinctio',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aspernatur',
        nameTypes: overrides && overrides.hasOwnProperty('nameTypes') ? overrides.nameTypes! : ['aut'],
        nameVariation: overrides && overrides.hasOwnProperty('nameVariation') ? overrides.nameVariation! : 'minus',
        nationality: overrides && overrides.hasOwnProperty('nationality') ? overrides.nationality! : 'atque',
        nationalityLabel: overrides && overrides.hasOwnProperty('nationalityLabel') ? overrides.nationalityLabel! : 'enim',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'esse',
        place: overrides && overrides.hasOwnProperty('place') ? overrides.place! : 'est',
        placeLabel: overrides && overrides.hasOwnProperty('placeLabel') ? overrides.placeLabel! : 'quasi',
        profession: overrides && overrides.hasOwnProperty('profession') ? overrides.profession! : 'id',
        professionLabel: overrides && overrides.hasOwnProperty('professionLabel') ? overrides.professionLabel! : 'beatae',
        relatedItem: overrides && overrides.hasOwnProperty('relatedItem') ? overrides.relatedItem! : 'facilis',
        relatedItemLabel: overrides && overrides.hasOwnProperty('relatedItemLabel') ? overrides.relatedItemLabel! : 'quibusdam',
        startDate: overrides && overrides.hasOwnProperty('startDate') ? overrides.startDate! : 'accusantium',
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
        populatedAuthor: overrides && overrides.hasOwnProperty('populatedAuthor') ? overrides.populatedAuthor! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
    };
};

export const aPublicationsArticleZoomLevel5DetailType = (overrides?: Partial<PublicationsArticleZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsArticleZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsArticleZoomLevel5DetailType']);
    return {
        abstract: overrides && overrides.hasOwnProperty('abstract') ? overrides.abstract! : 'qui',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'enim',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'cum',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'ullam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'hic',
        issue: overrides && overrides.hasOwnProperty('issue') ? overrides.issue! : 'quod',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'eius',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'aut',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'beatae',
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 'aut',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'quae',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'nihil',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'quia',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'necessitatibus',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'porro',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'officiis',
        sourceTitle: overrides && overrides.hasOwnProperty('sourceTitle') ? overrides.sourceTitle! : 'natus',
        sourceTitleLabel: overrides && overrides.hasOwnProperty('sourceTitleLabel') ? overrides.sourceTitleLabel! : 'placeat',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'voluptatibus',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'autem',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'consequatur',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel5Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'facere',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'est',
        volume: overrides && overrides.hasOwnProperty('volume') ? overrides.volume! : 'cupiditate',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'tenetur',
    };
};

export const aPublicationsAudioVisualZoomLevel5DetailType = (overrides?: Partial<PublicationsAudioVisualZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsAudioVisualZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsAudioVisualZoomLevel5DetailType']);
    return {
        abstract: overrides && overrides.hasOwnProperty('abstract') ? overrides.abstract! : 'alias',
        annotation: overrides && overrides.hasOwnProperty('annotation') ? overrides.annotation! : 'consequatur',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'ea',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'id',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'ut',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'deserunt',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'illo',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'consequuntur',
        medium: overrides && overrides.hasOwnProperty('medium') ? overrides.medium! : 'tenetur',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'consequatur',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'atque',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'ut',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'voluptatem',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'pariatur',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'ut',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'ut',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'quis',
        scope: overrides && overrides.hasOwnProperty('scope') ? overrides.scope! : 'officia',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'nulla',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'deserunt',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'mollitia',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'ratione',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel5Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'doloremque',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'quia',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'eos',
    };
};

export const aPublicationsBookZoomLevel5DetailType = (overrides?: Partial<PublicationsBookZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsBookZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsBookZoomLevel5DetailType']);
    return {
        annotation: overrides && overrides.hasOwnProperty('annotation') ? overrides.annotation! : 'laboriosam',
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : [relationshipsToOmit.includes('PublicationAuthorType') ? {} as PublicationAuthorType : aPublicationAuthorType({}, relationshipsToOmit)],
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'in',
        codeOfArchive: overrides && overrides.hasOwnProperty('codeOfArchive') ? overrides.codeOfArchive! : 'aut',
        codeOfArchiveLabel: overrides && overrides.hasOwnProperty('codeOfArchiveLabel') ? overrides.codeOfArchiveLabel! : 'omnis',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'nemo',
        edition: overrides && overrides.hasOwnProperty('edition') ? overrides.edition! : 'ducimus',
        geographicalKeyword: overrides && overrides.hasOwnProperty('geographicalKeyword') ? overrides.geographicalKeyword! : 'quam',
        geographicalKeywordLabel: overrides && overrides.hasOwnProperty('geographicalKeywordLabel') ? overrides.geographicalKeywordLabel! : 'eius',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'et',
        illustration: overrides && overrides.hasOwnProperty('illustration') ? overrides.illustration! : 'non',
        isbn: overrides && overrides.hasOwnProperty('isbn') ? overrides.isbn! : 'quis',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'quis',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'est',
        number: overrides && overrides.hasOwnProperty('number') ? overrides.number! : 'ipsam',
        numberOfPages: overrides && overrides.hasOwnProperty('numberOfPages') ? overrides.numberOfPages! : 'neque',
        objectNumber: overrides && overrides.hasOwnProperty('objectNumber') ? overrides.objectNumber! : 'totam',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'aut',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'laborum',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'rerum',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'commodi',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'ad',
        relatedPerInst: overrides && overrides.hasOwnProperty('relatedPerInst') ? overrides.relatedPerInst! : 'natus',
        relatedPerInstLabel: overrides && overrides.hasOwnProperty('relatedPerInstLabel') ? overrides.relatedPerInstLabel! : 'recusandae',
        seriesLabel: overrides && overrides.hasOwnProperty('seriesLabel') ? overrides.seriesLabel! : 'rerum',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'ut',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'rerum',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'vero',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'eos',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel5Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'rerum',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'aut',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'enim',
    };
};

export const aPublicationsSerialZoomLevel5DetailType = (overrides?: Partial<PublicationsSerialZoomLevel5DetailType>, _relationshipsToOmit: Array<string> = []): PublicationsSerialZoomLevel5DetailType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsSerialZoomLevel5DetailType']);
    return {
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'error',
        continuedAs: overrides && overrides.hasOwnProperty('continuedAs') ? overrides.continuedAs! : 'natus',
        continuedFrom: overrides && overrides.hasOwnProperty('continuedFrom') ? overrides.continuedFrom! : 'vel',
        holding: overrides && overrides.hasOwnProperty('holding') ? overrides.holding! : 'aliquam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'perspiciatis',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'placeat',
        languageLabel: overrides && overrides.hasOwnProperty('languageLabel') ? overrides.languageLabel! : 'omnis',
        permanentLink: overrides && overrides.hasOwnProperty('permanentLink') ? overrides.permanentLink! : 'in',
        placeOfPublication: overrides && overrides.hasOwnProperty('placeOfPublication') ? overrides.placeOfPublication! : 'ducimus',
        placeOfPublicationLabel: overrides && overrides.hasOwnProperty('placeOfPublicationLabel') ? overrides.placeOfPublicationLabel! : 'quod',
        populatedPublisher: overrides && overrides.hasOwnProperty('populatedPublisher') ? overrides.populatedPublisher! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        publisher: overrides && overrides.hasOwnProperty('publisher') ? overrides.publisher! : 'earum',
        publisherLabel: overrides && overrides.hasOwnProperty('publisherLabel') ? overrides.publisherLabel! : 'pariatur',
        remarks: overrides && overrides.hasOwnProperty('remarks') ? overrides.remarks! : 'eius',
        shelfmark: overrides && overrides.hasOwnProperty('shelfmark') ? overrides.shelfmark! : 'sed',
        subject: overrides && overrides.hasOwnProperty('subject') ? overrides.subject! : 'quasi',
        subjectLabel: overrides && overrides.hasOwnProperty('subjectLabel') ? overrides.subjectLabel! : 'veniam',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'non',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : PublicationsZoomLevel5Types.Article,
        typeOfPublication: overrides && overrides.hasOwnProperty('typeOfPublication') ? overrides.typeOfPublication! : 'et',
        typeOfPublicationLabel: overrides && overrides.hasOwnProperty('typeOfPublicationLabel') ? overrides.typeOfPublicationLabel! : 'voluptate',
        yearOfPublication: overrides && overrides.hasOwnProperty('yearOfPublication') ? overrides.yearOfPublication! : 'aliquid',
    };
};

export const aPublicationsZoomLevel4FiltersArgs = (overrides?: Partial<PublicationsZoomLevel4FiltersArgs>, _relationshipsToOmit: Array<string> = []): PublicationsZoomLevel4FiltersArgs => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'PublicationsZoomLevel4FiltersArgs']);
    return {
        Author: overrides && overrides.hasOwnProperty('Author') ? overrides.Author! : 'repudiandae',
        GeograficalKeyword: overrides && overrides.hasOwnProperty('GeograficalKeyword') ? overrides.GeograficalKeyword! : 'quaerat',
        RelatedPerInst: overrides && overrides.hasOwnProperty('RelatedPerInst') ? overrides.RelatedPerInst! : 'qui',
        Subject: overrides && overrides.hasOwnProperty('Subject') ? overrides.Subject! : 'quae',
        TypeOfPublication: overrides && overrides.hasOwnProperty('TypeOfPublication') ? overrides.TypeOfPublication! : 'inventore',
    };
};

export const aQuery = (overrides?: Partial<Query>, _relationshipsToOmit: Array<string> = []): Query => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Query']);
    return {
        allRelations: overrides && overrides.hasOwnProperty('allRelations') ? overrides.allRelations! : [relationshipsToOmit.includes('ZoomLevel5RelatedRecordType') ? {} as ZoomLevel5RelatedRecordType : aZoomLevel5RelatedRecordType({}, relationshipsToOmit)],
        archiveOther: overrides && overrides.hasOwnProperty('archiveOther') ? overrides.archiveOther! : relationshipsToOmit.includes('ArchivesFondsZoomLevel5DetailType') ? {} as ArchivesFondsZoomLevel5DetailType : anArchivesFondsZoomLevel5DetailType({}, relationshipsToOmit),
        author: overrides && overrides.hasOwnProperty('author') ? overrides.author! : relationshipsToOmit.includes('AuthorEntityResponse') ? {} as AuthorEntityResponse : anAuthorEntityResponse({}, relationshipsToOmit),
        authors: overrides && overrides.hasOwnProperty('authors') ? overrides.authors! : relationshipsToOmit.includes('AuthorEntityResponseCollection') ? {} as AuthorEntityResponseCollection : anAuthorEntityResponseCollection({}, relationshipsToOmit),
        homepage: overrides && overrides.hasOwnProperty('homepage') ? overrides.homepage! : relationshipsToOmit.includes('HomepageEntityResponse') ? {} as HomepageEntityResponse : aHomepageEntityResponse({}, relationshipsToOmit),
        landingpage: overrides && overrides.hasOwnProperty('landingpage') ? overrides.landingpage! : relationshipsToOmit.includes('LandingpageEntityResponse') ? {} as LandingpageEntityResponse : aLandingpageEntityResponse({}, relationshipsToOmit),
        landingpages: overrides && overrides.hasOwnProperty('landingpages') ? overrides.landingpages! : relationshipsToOmit.includes('LandingpageEntityResponseCollection') ? {} as LandingpageEntityResponseCollection : aLandingpageEntityResponseCollection({}, relationshipsToOmit),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.includes('LocationEntityResponse') ? {} as LocationEntityResponse : aLocationEntityResponse({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        menupage: overrides && overrides.hasOwnProperty('menupage') ? overrides.menupage! : relationshipsToOmit.includes('MenupageEntityResponse') ? {} as MenupageEntityResponse : aMenupageEntityResponse({}, relationshipsToOmit),
        menupages: overrides && overrides.hasOwnProperty('menupages') ? overrides.menupages! : relationshipsToOmit.includes('MenupageEntityResponseCollection') ? {} as MenupageEntityResponseCollection : aMenupageEntityResponseCollection({}, relationshipsToOmit),
        object: overrides && overrides.hasOwnProperty('object') ? overrides.object! : relationshipsToOmit.includes('ObjectsZoomLevel5DetailType') ? {} as ObjectsZoomLevel5DetailType : anObjectsZoomLevel5DetailType({}, relationshipsToOmit),
        publicationArticle: overrides && overrides.hasOwnProperty('publicationArticle') ? overrides.publicationArticle! : relationshipsToOmit.includes('PublicationsArticleZoomLevel5DetailType') ? {} as PublicationsArticleZoomLevel5DetailType : aPublicationsArticleZoomLevel5DetailType({}, relationshipsToOmit),
        publicationAudioVisual: overrides && overrides.hasOwnProperty('publicationAudioVisual') ? overrides.publicationAudioVisual! : relationshipsToOmit.includes('PublicationsAudioVisualZoomLevel5DetailType') ? {} as PublicationsAudioVisualZoomLevel5DetailType : aPublicationsAudioVisualZoomLevel5DetailType({}, relationshipsToOmit),
        publicationBook: overrides && overrides.hasOwnProperty('publicationBook') ? overrides.publicationBook! : relationshipsToOmit.includes('PublicationsBookZoomLevel5DetailType') ? {} as PublicationsBookZoomLevel5DetailType : aPublicationsBookZoomLevel5DetailType({}, relationshipsToOmit),
        publicationSerial: overrides && overrides.hasOwnProperty('publicationSerial') ? overrides.publicationSerial! : relationshipsToOmit.includes('PublicationsSerialZoomLevel5DetailType') ? {} as PublicationsSerialZoomLevel5DetailType : aPublicationsSerialZoomLevel5DetailType({}, relationshipsToOmit),
        relations: overrides && overrides.hasOwnProperty('relations') ? overrides.relations! : [relationshipsToOmit.includes('ZoomLevel5RelationsType') ? {} as ZoomLevel5RelationsType : aZoomLevel5RelationsType({}, relationshipsToOmit)],
        stories: overrides && overrides.hasOwnProperty('stories') ? overrides.stories! : relationshipsToOmit.includes('StoryEntityResponseCollection') ? {} as StoryEntityResponseCollection : aStoryEntityResponseCollection({}, relationshipsToOmit),
        storiesWithoutRelations: overrides && overrides.hasOwnProperty('storiesWithoutRelations') ? overrides.storiesWithoutRelations! : relationshipsToOmit.includes('StoryWithoutRelationsEntityResponseCollection') ? {} as StoryWithoutRelationsEntityResponseCollection : aStoryWithoutRelationsEntityResponseCollection({}, relationshipsToOmit),
        story: overrides && overrides.hasOwnProperty('story') ? overrides.story! : relationshipsToOmit.includes('StoryEntityResponse') ? {} as StoryEntityResponse : aStoryEntityResponse({}, relationshipsToOmit),
        storyWithoutRelations: overrides && overrides.hasOwnProperty('storyWithoutRelations') ? overrides.storyWithoutRelations! : relationshipsToOmit.includes('StoryWithoutRelationsEntityResponse') ? {} as StoryWithoutRelationsEntityResponse : aStoryWithoutRelationsEntityResponse({}, relationshipsToOmit),
        table: overrides && overrides.hasOwnProperty('table') ? overrides.table! : relationshipsToOmit.includes('TableEntityResponse') ? {} as TableEntityResponse : aTableEntityResponse({}, relationshipsToOmit),
        tables: overrides && overrides.hasOwnProperty('tables') ? overrides.tables! : relationshipsToOmit.includes('TableEntityResponseCollection') ? {} as TableEntityResponseCollection : aTableEntityResponseCollection({}, relationshipsToOmit),
        triplyRecord: overrides && overrides.hasOwnProperty('triplyRecord') ? overrides.triplyRecord! : relationshipsToOmit.includes('TriplyRecordEntityResponse') ? {} as TriplyRecordEntityResponse : aTriplyRecordEntityResponse({}, relationshipsToOmit),
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordRelationResponseCollection') ? {} as TriplyRecordRelationResponseCollection : aTriplyRecordRelationResponseCollection({}, relationshipsToOmit),
        usersPermissionsUser: overrides && overrides.hasOwnProperty('usersPermissionsUser') ? overrides.usersPermissionsUser! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponse') ? {} as UsersPermissionsUserEntityResponse : aUsersPermissionsUserEntityResponse({}, relationshipsToOmit),
        usersPermissionsUsers: overrides && overrides.hasOwnProperty('usersPermissionsUsers') ? overrides.usersPermissionsUsers! : relationshipsToOmit.includes('UsersPermissionsUserEntityResponseCollection') ? {} as UsersPermissionsUserEntityResponseCollection : aUsersPermissionsUserEntityResponseCollection({}, relationshipsToOmit),
        zoomLevel1: overrides && overrides.hasOwnProperty('zoomLevel1') ? overrides.zoomLevel1! : [relationshipsToOmit.includes('ZoomLevel1Type') ? {} as ZoomLevel1Type : aZoomLevel1Type({}, relationshipsToOmit)],
        zoomLevel2: overrides && overrides.hasOwnProperty('zoomLevel2') ? overrides.zoomLevel2! : [relationshipsToOmit.includes('ZoomLevel2Type') ? {} as ZoomLevel2Type : aZoomLevel2Type({}, relationshipsToOmit)],
        zoomLevel3: overrides && overrides.hasOwnProperty('zoomLevel3') ? overrides.zoomLevel3! : [relationshipsToOmit.includes('ZoomLevel3Type') ? {} as ZoomLevel3Type : aZoomLevel3Type({}, relationshipsToOmit)],
        zoomLevel4: overrides && overrides.hasOwnProperty('zoomLevel4') ? overrides.zoomLevel4! : relationshipsToOmit.includes('ZoomLevel4ParentType') ? {} as ZoomLevel4ParentType : aZoomLevel4ParentType({}, relationshipsToOmit),
        zoomLevel5Archive: overrides && overrides.hasOwnProperty('zoomLevel5Archive') ? overrides.zoomLevel5Archive! : relationshipsToOmit.includes('ArchivesFondsZoomLevel5DetailType') ? {} as ArchivesFondsZoomLevel5DetailType : anArchivesFondsZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5ArchivesFonds: overrides && overrides.hasOwnProperty('zoomLevel5ArchivesFonds') ? overrides.zoomLevel5ArchivesFonds! : relationshipsToOmit.includes('ArchivesFondsZoomLevel5DetailType') ? {} as ArchivesFondsZoomLevel5DetailType : anArchivesFondsZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5ArchivesOther: overrides && overrides.hasOwnProperty('zoomLevel5ArchivesOther') ? overrides.zoomLevel5ArchivesOther! : relationshipsToOmit.includes('ArchivesOtherZoomLevel5DetailType') ? {} as ArchivesOtherZoomLevel5DetailType : anArchivesOtherZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5Object: overrides && overrides.hasOwnProperty('zoomLevel5Object') ? overrides.zoomLevel5Object! : relationshipsToOmit.includes('ObjectsZoomLevel5DetailType') ? {} as ObjectsZoomLevel5DetailType : anObjectsZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5Person: overrides && overrides.hasOwnProperty('zoomLevel5Person') ? overrides.zoomLevel5Person! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5Publication: overrides && overrides.hasOwnProperty('zoomLevel5Publication') ? overrides.zoomLevel5Publication! : relationshipsToOmit.includes('PublicationsArticleZoomLevel5DetailType') ? {} as PublicationsArticleZoomLevel5DetailType : aPublicationsArticleZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsArticle: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsArticle') ? overrides.zoomLevel5PublicationsArticle! : relationshipsToOmit.includes('PublicationsArticleZoomLevel5DetailType') ? {} as PublicationsArticleZoomLevel5DetailType : aPublicationsArticleZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsAudiovisual: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsAudiovisual') ? overrides.zoomLevel5PublicationsAudiovisual! : relationshipsToOmit.includes('PublicationsAudioVisualZoomLevel5DetailType') ? {} as PublicationsAudioVisualZoomLevel5DetailType : aPublicationsAudioVisualZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsBook: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsBook') ? overrides.zoomLevel5PublicationsBook! : relationshipsToOmit.includes('PublicationsBookZoomLevel5DetailType') ? {} as PublicationsBookZoomLevel5DetailType : aPublicationsBookZoomLevel5DetailType({}, relationshipsToOmit),
        zoomLevel5PublicationsSerial: overrides && overrides.hasOwnProperty('zoomLevel5PublicationsSerial') ? overrides.zoomLevel5PublicationsSerial! : relationshipsToOmit.includes('PublicationsSerialZoomLevel5DetailType') ? {} as PublicationsSerialZoomLevel5DetailType : aPublicationsSerialZoomLevel5DetailType({}, relationshipsToOmit),
    };
};

export const aRelatedRecordType = (overrides?: Partial<RelatedRecordType>, _relationshipsToOmit: Array<string> = []): RelatedRecordType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'RelatedRecordType']);
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'nisi',
        label: overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'sint',
        relations: overrides && overrides.hasOwnProperty('relations') ? overrides.relations! : [relationshipsToOmit.includes('ZoomLevel5RelationsType') ? {} as ZoomLevel5RelationsType : aZoomLevel5RelationsType({}, relationshipsToOmit)],
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'veniam',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
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
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-12T23:57:50.299Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'ratione',
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : 'laudantium',
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryRelationResponseCollection') ? {} as StoryRelationResponseCollection : aStoryRelationResponseCollection({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationRelationResponseCollection') ? {} as LocationRelationResponseCollection : aLocationRelationResponseCollection({}, relationshipsToOmit),
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDate') ? {} as ComponentCorePublicationDate : aComponentCorePublicationDate({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-02T01:42:16.891Z',
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : 'quae',
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'minima',
        storyLinks: overrides && overrides.hasOwnProperty('storyLinks') ? overrides.storyLinks! : relationshipsToOmit.includes('ComponentModulesButtonsModule') ? {} as ComponentModulesButtonsModule : aComponentModulesButtonsModule({}, relationshipsToOmit),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframe') ? {} as ComponentCoreTimeframe : aComponentCoreTimeframe({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'deleniti',
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordRelationResponseCollection') ? {} as TriplyRecordRelationResponseCollection : aTriplyRecordRelationResponseCollection({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-12T21:40:03.398Z',
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
        firstName: overrides && overrides.hasOwnProperty('firstName') ? overrides.firstName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : relationshipsToOmit.includes('IdFilterInput') ? {} as IdFilterInput : anIdFilterInput({}, relationshipsToOmit),
        insertion: overrides && overrides.hasOwnProperty('insertion') ? overrides.insertion! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        lastName: overrides && overrides.hasOwnProperty('lastName') ? overrides.lastName! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        locale: overrides && overrides.hasOwnProperty('locale') ? overrides.locale! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        localizations: overrides && overrides.hasOwnProperty('localizations') ? overrides.localizations! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : relationshipsToOmit.includes('LocationFiltersInput') ? {} as LocationFiltersInput : aLocationFiltersInput({}, relationshipsToOmit),
        not: overrides && overrides.hasOwnProperty('not') ? overrides.not! : relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit),
        or: overrides && overrides.hasOwnProperty('or') ? overrides.or! : [relationshipsToOmit.includes('StoryFiltersInput') ? {} as StoryFiltersInput : aStoryFiltersInput({}, relationshipsToOmit)],
        publicationDate: overrides && overrides.hasOwnProperty('publicationDate') ? overrides.publicationDate! : relationshipsToOmit.includes('ComponentCorePublicationDateFiltersInput') ? {} as ComponentCorePublicationDateFiltersInput : aComponentCorePublicationDateFiltersInput({}, relationshipsToOmit),
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
        shortDescription: overrides && overrides.hasOwnProperty('shortDescription') ? overrides.shortDescription! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        slug: overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        storyLinks: overrides && overrides.hasOwnProperty('storyLinks') ? overrides.storyLinks! : relationshipsToOmit.includes('ComponentModulesButtonsModuleFiltersInput') ? {} as ComponentModulesButtonsModuleFiltersInput : aComponentModulesButtonsModuleFiltersInput({}, relationshipsToOmit),
        timeframe: overrides && overrides.hasOwnProperty('timeframe') ? overrides.timeframe! : relationshipsToOmit.includes('ComponentCoreTimeframeFiltersInput') ? {} as ComponentCoreTimeframeFiltersInput : aComponentCoreTimeframeFiltersInput({}, relationshipsToOmit),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : relationshipsToOmit.includes('StringFilterInput') ? {} as StringFilterInput : aStringFilterInput({}, relationshipsToOmit),
        triplyRecords: overrides && overrides.hasOwnProperty('triplyRecords') ? overrides.triplyRecords! : relationshipsToOmit.includes('TriplyRecordFiltersInput') ? {} as TriplyRecordFiltersInput : aTriplyRecordFiltersInput({}, relationshipsToOmit),
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : relationshipsToOmit.includes('DateTimeFilterInput') ? {} as DateTimeFilterInput : aDateTimeFilterInput({}, relationshipsToOmit),
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

export const aTable = (overrides?: Partial<Table>, _relationshipsToOmit: Array<string> = []): Table => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'Table']);
    return {
        TableBody: overrides && overrides.hasOwnProperty('TableBody') ? overrides.TableBody! : [relationshipsToOmit.includes('ComponentCoreTableBody') ? {} as ComponentCoreTableBody : aComponentCoreTableBody({}, relationshipsToOmit)],
        Tablehead: overrides && overrides.hasOwnProperty('Tablehead') ? overrides.Tablehead! : relationshipsToOmit.includes('ComponentCoreTableHead') ? {} as ComponentCoreTableHead : aComponentCoreTableHead({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-14T18:15:38.232Z',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'aperiam',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sequi',
        publishedAt: overrides && overrides.hasOwnProperty('publishedAt') ? overrides.publishedAt! : '1970-01-06T04:40:41.139Z',
        updatedAt: overrides && overrides.hasOwnProperty('updatedAt') ? overrides.updatedAt! : '1970-01-04T03:57:09.985Z',
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

export const aTriplyRecord = (overrides?: Partial<TriplyRecord>, _relationshipsToOmit: Array<string> = []): TriplyRecord => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'TriplyRecord']);
    return {
        archive: overrides && overrides.hasOwnProperty('archive') ? overrides.archive! : relationshipsToOmit.includes('ArchivesFondsZoomLevel5DetailType') ? {} as ArchivesFondsZoomLevel5DetailType : anArchivesFondsZoomLevel5DetailType({}, relationshipsToOmit),
        createdAt: overrides && overrides.hasOwnProperty('createdAt') ? overrides.createdAt! : '1970-01-03T05:28:06.708Z',
        object: overrides && overrides.hasOwnProperty('object') ? overrides.object! : relationshipsToOmit.includes('ObjectsZoomLevel5DetailType') ? {} as ObjectsZoomLevel5DetailType : anObjectsZoomLevel5DetailType({}, relationshipsToOmit),
        people: overrides && overrides.hasOwnProperty('people') ? overrides.people! : relationshipsToOmit.includes('PoepleZoomLevel5DetailType') ? {} as PoepleZoomLevel5DetailType : aPoepleZoomLevel5DetailType({}, relationshipsToOmit),
        publication: overrides && overrides.hasOwnProperty('publication') ? overrides.publication! : relationshipsToOmit.includes('PublicationsArticleZoomLevel5DetailType') ? {} as PublicationsArticleZoomLevel5DetailType : aPublicationsArticleZoomLevel5DetailType({}, relationshipsToOmit),
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

export const aZoomLevel2Type = (overrides?: Partial<ZoomLevel2Type>, _relationshipsToOmit: Array<string> = []): ZoomLevel2Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel2Type']);
    return {
        filter: overrides && overrides.hasOwnProperty('filter') ? overrides.filter! : 'qui',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'aut',
    };
};

export const aZoomLevel3Type = (overrides?: Partial<ZoomLevel3Type>, _relationshipsToOmit: Array<string> = []): ZoomLevel3Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel3Type']);
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 8464,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'asperiores',
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 6476,
        uri: overrides && overrides.hasOwnProperty('uri') ? overrides.uri! : 'qui',
    };
};

export const aZoomLevel4ParentType = (overrides?: Partial<ZoomLevel4ParentType>, _relationshipsToOmit: Array<string> = []): ZoomLevel4ParentType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel4ParentType']);
    return {
        appliedFilters: overrides && overrides.hasOwnProperty('appliedFilters') ? overrides.appliedFilters! : 'est',
        hasMore: overrides && overrides.hasOwnProperty('hasMore') ? overrides.hasMore! : true,
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [relationshipsToOmit.includes('ZoomLevel4Type') ? {} as ZoomLevel4Type : aZoomLevel4Type({}, relationshipsToOmit)],
        page: overrides && overrides.hasOwnProperty('page') ? overrides.page! : 908,
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 3138,
    };
};

export const aZoomLevel4Type = (overrides?: Partial<ZoomLevel4Type>, _relationshipsToOmit: Array<string> = []): ZoomLevel4Type => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel4Type']);
    return {
        firstImage: overrides && overrides.hasOwnProperty('firstImage') ? overrides.firstImage! : 'odio',
        imageLabel: overrides && overrides.hasOwnProperty('imageLabel') ? overrides.imageLabel! : 'ipsa',
        pidWorkURI: overrides && overrides.hasOwnProperty('pidWorkURI') ? overrides.pidWorkURI! : 'voluptatem',
        record: overrides && overrides.hasOwnProperty('record') ? overrides.record! : 'eligendi',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'aut',
    };
};

export const aZoomLevel5RelatedRecordType = (overrides?: Partial<ZoomLevel5RelatedRecordType>, _relationshipsToOmit: Array<string> = []): ZoomLevel5RelatedRecordType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel5RelatedRecordType']);
    return {
        availability: overrides && overrides.hasOwnProperty('availability') ? overrides.availability! : 'voluptas',
        birthDate: overrides && overrides.hasOwnProperty('birthDate') ? overrides.birthDate! : 'corrupti',
        creator: overrides && overrides.hasOwnProperty('creator') ? overrides.creator! : 'consequatur',
        creatorLabel: overrides && overrides.hasOwnProperty('creatorLabel') ? overrides.creatorLabel! : 'iste',
        date: overrides && overrides.hasOwnProperty('date') ? overrides.date! : 'et',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'expedita',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'pariatur',
        pidWorkURI: overrides && overrides.hasOwnProperty('pidWorkURI') ? overrides.pidWorkURI! : 'eum',
        profession: overrides && overrides.hasOwnProperty('profession') ? overrides.profession! : 'ab',
        professionLabel: overrides && overrides.hasOwnProperty('professionLabel') ? overrides.professionLabel! : 'voluptas',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};

export const aZoomLevel5RelationsType = (overrides?: Partial<ZoomLevel5RelationsType>, _relationshipsToOmit: Array<string> = []): ZoomLevel5RelationsType => {
    const relationshipsToOmit = ([..._relationshipsToOmit, 'ZoomLevel5RelationsType']);
    return {
        randomRelations: overrides && overrides.hasOwnProperty('randomRelations') ? overrides.randomRelations! : [relationshipsToOmit.includes('RelatedRecordType') ? {} as RelatedRecordType : aRelatedRecordType({}, relationshipsToOmit)],
        total: overrides && overrides.hasOwnProperty('total') ? overrides.total! : 9.57,
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : EntityNames.Archives,
    };
};
