import MemoizedRecordClouds from '@/features/galaxyInterface/galaxies/RecordClouds/RecordClouds'
import { SupportedQuerys } from '@/features/pages/tasks/getZoom5RecordTask'
import { uniqueId } from 'lodash'
import {
    EntityNames,
    ObjectRelationsQuery,
    ZoomLevel5ArchivesQuery,
    ZoomLevel5ObjectQuery,
    ZoomLevel5PersonQuery,
    ZoomLevel5PublicationQuery,
} from 'src/generated/graphql'
import { Dimensions } from '../../../types/galaxy'

type Zoom5detail =
    | ZoomLevel5PublicationQuery['zoomLevel5Publication']
    | ZoomLevel5ArchivesQuery['zoomLevel5Archive']
    | ZoomLevel5ObjectQuery['zoomLevel5Object']
    | ZoomLevel5PersonQuery['zoomLevel5Person']
type Zoom5relations = ObjectRelationsQuery['relations']

const relations: Zoom5relations = [
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

const publications = [
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
const zoom5DetailStub: Zoom5detail = publications[0]

export const DynamicRecordCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    return (
        <MemoizedRecordClouds
            zoomLevel5={zoom5DetailStub}
            relations={relations}
            dimensions={dimensions}
            type={SupportedQuerys.publications}
        />
    )
}
