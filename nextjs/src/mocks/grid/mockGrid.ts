import { uniqueId } from 'lodash'
import {
    ComponentCoreButton,
    ComponentCoreModuleLayouts,
    Maybe,
    Scalars,
    StoryEntityResponse,
    TriplyRecordEntityResponse,
    UploadFileEntityResponse,
} from 'src/generated/graphql'
import {
    aComponentCoreButton,
    aComponentCoreModuleLayouts,
    anUploadFileEntityResponse,
    aStoryEntityResponse,
    aTriplyRecordEntityResponse,
} from '../generated-mocks'

export enum EnumComponentfieldTypes {
    TriplyRecords = 'TriplyRecords',
    Stories = 'Stories',
}

export type ComponentCoreGridItem = {
    __typename?: 'ComponentCoreGridItem'
    id: Scalars['ID']
    title?: Maybe<Scalars['String']>
    subtitle?: Maybe<Scalars['String']>
    thumbnail?: Maybe<UploadFileEntityResponse>
    triplyRecord?: Maybe<TriplyRecordEntityResponse>
    story?: Maybe<StoryEntityResponse>
}

export type ComponentCoreFeaturedField = {
    __typename?: 'ComponentCoreFeaturedField'
    id: Scalars['ID']
    label?: Maybe<Scalars['String']>
    value?: Maybe<Scalars['String']>
}

function getField(): ComponentCoreFeaturedField {
    return {
        __typename: 'ComponentCoreFeaturedField',
        id: `${uniqueId()}`,
        label: 'Maker',
        value: 'Theo van Doesburg',
    }
}

export type ComponentModulesGridModule = {
    __typename?: 'ComponentModulesGridModule'
    id: Scalars['ID']
    title?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    featuredFields?: Maybe<Array<ComponentCoreFeaturedField>>
    fieldTypes?: Maybe<EnumComponentfieldTypes>
    fieldTitlesAreInverted?: Maybe<Scalars['Boolean']>
    fields?: Maybe<Array<ComponentCoreGridItem>>
    buttons?: Maybe<Array<ComponentCoreButton>>
    gridModuleLayout: ComponentCoreModuleLayouts
    loadMoreButtonTitle?: Maybe<Scalars['String']>
    pageSize?: Maybe<number>
}

function getGridStory(): ComponentCoreGridItem {
    return {
        id: `${uniqueId()}`,
        title: 'Sed convallis aliquet tempor.',
        subtitle:
            'Nulla efficitur, arcu in accumsan luctus, dolor leo fermentum risus, at laoreet sapien odio at elit. Nullam at aliquet quam. Aenean convallis et quam a aliquet. Curabitur pulvinar ipsum arcu, finibus hendrerit ligula euismod vel.',
        story: aStoryEntityResponse(),
        thumbnail: anUploadFileEntityResponse(),
    }
}

function getGridTriplyRecord(): ComponentCoreGridItem {
    return {
        id: `${uniqueId()}`,
        title: 'Sed convallis aliquet tempor.',
        subtitle:
            'Nulla efficitur, arcu in accumsan luctus, dolor leo fermentum risus, at laoreet sapien odio at elit. Nullam at aliquet quam. Aenean convallis et quam a aliquet. Curabitur pulvinar ipsum arcu, finibus hendrerit ligula euismod vel.',
        thumbnail: anUploadFileEntityResponse(),
        triplyRecord: aTriplyRecordEntityResponse(),
    }
}

export const componentMock: ComponentModulesGridModule = {
    __typename: 'ComponentModulesGridModule',
    id: `${uniqueId()}`,
    title: 'Featured stories',
    fieldTypes: EnumComponentfieldTypes.Stories,
    fieldTitlesAreInverted: false,
    fields: [
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
        getGridStory(),
    ],
    buttons: [aComponentCoreButton(), aComponentCoreButton(), aComponentCoreButton(), aComponentCoreButton()],
    gridModuleLayout: aComponentCoreModuleLayouts(),
    loadMoreButtonTitle: 'Load More',
}

export const componentMock2: ComponentModulesGridModule = {
    __typename: 'ComponentModulesGridModule',
    id: `${uniqueId()}`,
    title: 'Aliquam rhoncus urna eget tempus blandit.',
    description:
        'Aliquam efficitur ante felis, ac consequat nulla convallis sit amet. Aliquam nec ipsum ullamcorper, tristique nibh eu, bibendum arcu. Ut consequat maximus semper. Praesent ligula felis, vehicula quis erat in, tristique tincidunt dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec urna magna, porta a dui id, ornare consequat dui. Mauris tincidunt, metus eu sollicitudin rutrum, magna leo lobortis lectus, eu luctus purus justo eget lacus. Pellentesque malesuada, purus eu tincidunt vehicula, arcu enim eleifend est.',
    featuredFields: [getField(), getField(), getField()],
    fieldTypes: EnumComponentfieldTypes.TriplyRecords,
    fieldTitlesAreInverted: false,
    fields: [getGridTriplyRecord(), getGridTriplyRecord(), getGridTriplyRecord()],
    gridModuleLayout: aComponentCoreModuleLayouts(),
    loadMoreButtonTitle: 'Load More',
}

export const componentMock3: ComponentModulesGridModule = {
    __typename: 'ComponentModulesGridModule',
    id: `${uniqueId()}`,
    fieldTypes: EnumComponentfieldTypes.TriplyRecords,
    fieldTitlesAreInverted: true,
    fields: [
        getGridTriplyRecord(),
        getGridTriplyRecord(),
        getGridTriplyRecord(),
        getGridTriplyRecord(),
        getGridTriplyRecord(),
        getGridTriplyRecord(),
    ],
    gridModuleLayout: aComponentCoreModuleLayouts(),
    loadMoreButtonTitle: 'Load More',
}
