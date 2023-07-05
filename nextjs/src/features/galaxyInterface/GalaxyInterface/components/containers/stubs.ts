import uniqueId from 'lodash/uniqueId'

import { EntityNames, Zoom3Query, Zoom4Query, ZoomLevel2Query } from 'src/generated/graphql'

export const zoom1Stub = {
  zoomLevel1: [
    {
      name: 'Personen en Instellingen',
      count: 124985,
      id: EntityNames.People,
      __typename: 'ZoomLevel1Type' as const,
    },
    {
      name: 'Publicaties',
      count: 157961,
      id: EntityNames.Publications,
      __typename: 'ZoomLevel1Type' as const,
    },
    {
      name: 'Archieven',
      count: 694,
      id: EntityNames.Archives,
      __typename: 'ZoomLevel1Type' as const,
    },
    {
      name: 'Archiefbestanddelen' as const,
      count: 491047,
      id: EntityNames.Archives,
      __typename: 'ZoomLevel1Type' as const,
    },
    {
      name: 'Objecten',
      count: 14303,
      id: EntityNames.Objects,
      __typename: 'ZoomLevel1Type' as const,
    },
    {
      name: 'Stories',
      count: 2,
      id: EntityNames.Stories,
      __typename: 'ZoomLevel1Type' as const,
    },
  ],
}

export const zoom2Stub: ZoomLevel2Query = {
  __typename: 'Query' as const,
  zoomLevel2: [
    { __typename: 'ZoomLevel2Type' as const, filter: 'test', id: 'author' },
    { __typename: 'ZoomLevel2Type' as const, filter: 'test2', id: 'subject' },
    { __typename: 'ZoomLevel2Type' as const, filter: 'test3', id: 'typeOfPublication' },
  ],
}

export const zoom3Stub: Zoom3Query = {
  __typename: 'Query' as const,
  zoomLevel3: [
    {
      __typename: 'ZoomLevel3Type' as const,
      uri: uniqueId(),
      name: uniqueId(),
      count: 100,
      total: 1000,
    },
    {
      __typename: 'ZoomLevel3Type' as const,
      uri: uniqueId(),
      name: uniqueId(),
      count: 100,
      total: 1000,
    },
    {
      __typename: 'ZoomLevel3Type' as const,
      uri: uniqueId(),
      name: uniqueId(),
      count: 100,
      total: 1000,
    },
    {
      __typename: 'ZoomLevel3Type' as const,
      uri: uniqueId(),
      name: uniqueId(),
      count: 100,
      total: 1000,
    },
  ],
}

export const zoom4Stub: Zoom4Query = {
  __typename: 'Query' as const,
  zoomLevel4: {
    __typename: 'ZoomLevel4ParentType',
    total: 100,
    hasMore: true,
    nodes: [
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record1',
        title: 'title1',
        firstImage: 'image1',
        imageLabel: 'imagelabel1',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record2',
        title: 'title2',
        firstImage: 'image2',
        imageLabel: 'imagelabel2',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record3',
        title: 'title3',
        firstImage: 'image3',
        imageLabel: 'imagelabel3',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record3',
        title: 'title3',
        firstImage: 'image3',
        imageLabel: 'imagelabel3',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record4',
        title: 'title4',
        firstImage: 'image4',
        imageLabel: 'imagelabel4',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record5',
        title: 'title5',
        firstImage: 'image5',
        imageLabel: 'imagelabel5',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record6',
        title: 'title6',
        firstImage: 'image6',
        imageLabel: 'imagelabel6',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record7',
        title: 'title7',
        firstImage: 'image7',
        imageLabel: 'imagelabel7',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record8',
        title: 'title8',
        firstImage: 'image8',
        imageLabel: 'imagelabel8',
      },
      {
        __typename: 'ZoomLevel4Type' as const,
        record: 'record9',
        title: 'title9',
        firstImage: 'image9',
        imageLabel: 'imagelabel9',
      },
    ],
  },
}

export const relationsStub = [
  {
    __typename: 'ZoomLevel5RelationsType' as const,
    type: EntityNames.People,
    total: 100,
    randomRelations: [
      {
        __typename: 'RelatedRecordType' as const,
        id: uniqueId(),
        label: 'label',
        type: EntityNames.People,
        slug: 'mySlug',
        relations: [],
      },
    ],
  },
]

export const publicationsStub = [
  {
    __typename: 'PublicationsArticleZoomLevel5DetailType' as const,
    typeOfPublication: '82T}yRO/k2',
    typeOfPublicationLabel: "=Hr<:?;'(v",
    title: "mIJ{FzI6'r",
    author: 'dg.ZBg+!O!',
    authorLabel: '46MC:@_`=6',
    authorRole: "Ku+'V'ShR;",
    authorRoleLabel: '@gx<?D({"i',
    sourceTitle: 'ky@-V?NJue',
    sourceTitleLabel: '7O=?M!v`&l',
    volume: 'zoGJ[%u2LL',
    issue: 'AtC?}B:"A]',
    yearOfPublication: "W-6|'V6AlM",
    page: 'ZM$p#dek&Z',
    publisher: '71a^O=Gv0z',
    publisherLabel: '#CO\\CO>TW!',
    abstract: ')6je_[DZgm',
    language: "'HIXL5N0/M",
    languageLabel: 'bZZ.`hnN/J',
    geographicalKeyword: '.1fm-n,D0_',
    geographicalKeywordLabel: '[=<kyG>G/B',
    subject: 'QNu&2"op4b',
    subjectLabel: 'jBTGE/5Z)7',
    relatedPerInst: ".>w':;)JfF",
    relatedPerInstLabel: 'Cp5(V]YFUG',
    objectNumber: 'eI&/Vti6|O',
    availability: 'za(0z8m[Rd',
    shelfmark: 'f(JxXD>/#|',
    permanentLink: 'Jf{|m\\JlL0',
  },
]
export const zoom5DetailStub = publicationsStub[0]
