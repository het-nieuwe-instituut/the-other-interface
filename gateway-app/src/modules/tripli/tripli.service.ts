import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { lastValueFrom } from 'rxjs'
import { EntityMappingType, EntityNames } from './tripli.type'

export const EntityIdentifierMapping: EntityMappingType[] = [
    {
        id: EntityNames.Archives,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-archives/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/archives',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Objects,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-objects/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/objects',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.People,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-people/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/people',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Publications,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-books/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/books',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Stories,
        metadata: {
            url: 'aa',
        },
        type: 'strapi',
    },
]

interface ObjectPerTypeData {
    count: string
    dataset: string
    graph: string
}

@Injectable()
export class TripliService {
    public constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    public async getData<DataType>(endpoint: string) {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')
        const res = await lastValueFrom(
            this.httpService.get<DataType>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )

        return res.data
    }

    public async getCounts() {
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

        const endpoint =
            'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-1-record-counts/run'

        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await lastValueFrom(
            this.httpService.get<ObjectPerTypeData[]>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )
        return res.data.map(r => {
            return {
                name: r.dataset,
                count: parseInt(r.count, 10),
                id: EntityIdentifierMapping.find(e => e.metadata?.identifiableURI === r.graph)?.id,
            }
        })
    }
}
