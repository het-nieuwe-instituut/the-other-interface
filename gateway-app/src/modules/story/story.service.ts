import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from 'src/generated/strapi-sdk'
import { EntityNames } from '../tripli/tripli.type'

export interface PeopleData {
    name: string | null
    birthDate: string | null
    deathDate: string | null
    nationalityLabel: string | null
}
@Injectable()
export class StoryService {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    public async getPeopleDataForZoomLevel1() {
        const allStories = await this.strapiGqlSdk.stories()
        return {
            name: 'Stories',
            count: allStories.stories?.data.length || 0,
            id: EntityNames.Stories,
        }
    }
}
