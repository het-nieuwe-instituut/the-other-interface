import { Injectable } from '@nestjs/common'
import { TripliService } from '../tripli/tripli.service'
import { PeopleType } from './story.type'

export interface PeopleData {
    name: string | null
    birthDate: string | null
    deathDate: string | null
    nationalityLabel: string | null
}
@Injectable()
export class StoryService {
    public constructor(private readonly tripliService: TripliService) {}
    public async getPeopleData(peopleLink: string) {
        const endpoint = `https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-acceptance/zoom-5-people/run?record=${peopleLink}`

        const res = await this.tripliService.getData<PeopleData[]>(endpoint)

        const parsedResponse: PeopleType = {}
        res.forEach(d => {
            if (d.name) parsedResponse.name = d.name
            if (d.birthDate) parsedResponse.birthDate = d.birthDate
            if (d.deathDate) parsedResponse.deathDate = d.deathDate
            if (d.nationalityLabel) parsedResponse.nationalityLabel = d.nationalityLabel
        })

        return parsedResponse
    }
}
