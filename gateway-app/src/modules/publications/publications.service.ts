import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

export interface PublicationsZoomLevel2Data {
  thumbnail: true
  title: true
  id: true
}

export const publicationsZoomLevel2DataKeys: KeysToVerify<PublicationsZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

interface PublicationsZoomLevel3Data {
  thumbnail: true
  title: true
  id: true
}
const publicationsDetailZoomLevel3DataKeys: KeysToVerify<PublicationsZoomLevel3Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

@Injectable()
export class PublicationsService {
  protected entityType = 'triply'
  private readonly ZoomLevel2Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage/run'

  private readonly ZoomLevel2CountEndpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/zoom-2/books-landingPage-count/run'

  private readonly ZoomLevel3Endpoint =
    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-testing/publications-recordPage/run?'

  private readonly publicationDescriptionLevelEndpoint = 'Zoom-3-books-type/run'

  public constructor(
    private readonly triplyService: TriplyService,
    @Inject(forwardRef(() => ZoomLevel3Service))
    private readonly zoomLevel3Service: ZoomLevel3Service
  ) {}

  public async getZoomLevel2Data(page = 1, pageSize = 48) {
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel2Data>(
      this.ZoomLevel2Endpoint,
      publicationsZoomLevel2DataKeys,
      { page, pageSize }
    )

    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      this.ZoomLevel2CountEndpoint,
      { total: true },
      undefined
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      page,
      total,
      nodes: result.data.map(res => {
        return {
          thumbnail: res.thumbnail,
          title: res.title,
          id: res.id,
        }
      }),
    }
  }

  public async getZoomLevel3Data(type: EntityNames, id: string) {
    const uri = TriplyUtils.getUriForTypeAndId(EntityNames.Publications, id)
    const result = await this.triplyService.queryTriplyData<PublicationsZoomLevel3Data>(
      this.ZoomLevel3Endpoint,
      publicationsDetailZoomLevel3DataKeys,
      { page: 1, pageSize: 2 },
      { id: uri }
    )

    return {
      type,
      id,
      thumbnail: result.data[0]?.thumbnail,
      title: result.data[0]?.title,
    }
  }
}
