import { Injectable } from '@nestjs/common'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
import { TriplyUtils } from '../triply/triply.utils'
import { getUniqueById } from '../util/helpers'

interface ZoomLevel2Data {
  thumbnail: string
  title: string
  id: string
}

const zoomLevel2DataKeys: KeysToVerify<ZoomLevel2Data> = {
  thumbnail: true,
  title: true,
  id: true,
}

@Injectable()
export class ZoomLevel2Service {
  public constructor(private readonly triplyService: TriplyService) {}
  public getData(entity: EntityNames, paginationArgs: PaginationArgs, text?: string) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2Data({
          type: entity,
          page: paginationArgs.page,
          pageSize: paginationArgs.pageSize,
          text,
        })

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  public getDataAmount(entity: EntityNames, text?: string) {
    switch (entity) {
      case EntityNames.Archives:
      case EntityNames.Objects:
      case EntityNames.People:
      case EntityNames.Publications:
        return this.getZoomLevel2DataAmount(entity, text)

      case EntityNames.Stories:
      default: {
        throw CustomError.internalCritical(`Zoomlevel 2 for ${entity} not implemented`)
      }
    }
  }

  private async getZoomLevel2Data({
    type,
    page = 1,
    pageSize = 48,
    text,
  }: {
    type: EntityNames
    page?: number
    pageSize?: number
    text?: string
  }) {
    const uri = TriplyUtils.getUriForLevel2Data({ type, text, isDataAmount: false })

    const result = await this.triplyService.queryTriplyData<ZoomLevel2Data>(
      uri,
      zoomLevel2DataKeys,
      { page, pageSize },
      text ? { text } : undefined
    )

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page,
      nodes: uniqueNodes,
    }
  }

  private async getZoomLevel2DataAmount(type: EntityNames, text?: string) {
    const uri = TriplyUtils.getUriForLevel2Data({ type, text, isDataAmount: true })

    const countResult = await this.triplyService.queryTriplyData<{ total?: string }>(
      uri,
      { total: true },
      undefined,
      text ? { text } : undefined
    )

    const total = countResult?.data.pop()?.total ?? '0'

    return {
      total,
    }
  }
}
