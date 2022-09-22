import { Inject, Injectable } from '@nestjs/common'
import { Sdk } from 'src/generated/strapi-sdk'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@Injectable()
export class StoryService {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    public async getStoryDataForZoomLevel1() {
        const storiesTotal = await this.strapiGqlSdk.storiesTotal()
        return {
            name: EntityNames.Stories,
            count: storiesTotal.stories?.meta.pagination.total || 0,
            id: EntityNames.Stories,
        }
    }
}
