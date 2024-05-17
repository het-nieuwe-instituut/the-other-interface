import { Injectable } from '@nestjs/common'
import { CustomError } from '../util/customError'
import { PaginationArgs } from '../util/paginationArgs.type'
import { EntityNames } from '../util/entityNames.type'
import { KeysToVerify, TriplyService } from '../triply/triply.service'
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
        return this.getZoomLevel2Data(entity, paginationArgs, text)

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

  private async getZoomLevel2Data(
    type: EntityNames,
    paginationArgs: PaginationArgs,
    text?: string
  ) {
    const uri = this.getUriForLevel2Data(type, text, { forCount: false })

    const result = await this.triplyService.queryTriplyData<ZoomLevel2Data>(
      uri,
      zoomLevel2DataKeys,
      paginationArgs,
      text ? { text } : undefined
    )

    const uniqueNodes = getUniqueById(result?.data).map(res => ({
      thumbnail: res.thumbnail,
      title: res.title,
      id: res.id,
    }))

    return {
      page: paginationArgs.page ?? 1,
      nodes: uniqueNodes,
    }
  }

  private async getZoomLevel2DataAmount(type: EntityNames, text?: string) {
    const uri = this.getUriForLevel2Data(type, text, { forCount: true })

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

  private getUriForLevel2Data(type: EntityNames, text = '', { forCount }: { forCount: boolean }) {
    if (text) {
      return this.getUriForLevel2TextSearch(type, { forCount })
    }

    const dataAmountUri = forCount ? '-count' : ''

    switch (type) {
      case EntityNames.People:
        return `people-landingPage${dataAmountUri}/run`
      case EntityNames.Archives:
        return `archives-landingPage${dataAmountUri}/run`
      case EntityNames.Publications:
        return `publications-landingPage${dataAmountUri}/run`
      case EntityNames.Objects:
        return `objects-landingPage${dataAmountUri}/run`
      case EntityNames.Media:
      case EntityNames.Stories:
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }

  private getUriForLevel2TextSearch(type: EntityNames, { forCount }: { forCount: boolean }) {
    const dataAmountUri = forCount ? '-Count' : ''

    switch (type) {
      case EntityNames.People:
        return `people-textSearch${dataAmountUri}/run`
      case EntityNames.Archives:
        return `archives-textSearch${dataAmountUri}/run`
      case EntityNames.Publications:
        return `publications-textSearch${dataAmountUri}/run`
      case EntityNames.Objects:
        return `objects-textSearch${dataAmountUri}/run`
      case EntityNames.Media:
      case EntityNames.Stories:
      case EntityNames.External:
      default:
        throw CustomError.externalCritical(`uri for type ${type} not implemented`)
    }
  }
}
