import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'
import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { StrapiAuthGuard } from '../auth/strapi-auth.guard'
import { StrapiUtils } from '../strapi/strapi.utils'
import { ZoomLevel5Service } from './zoomLevel5.service'

interface DetailQueryParams {
  recordId?: string
  type?: string
}

@Controller('/zoomLevel5')
export class ZoomLevel5Controller {
  public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

  @Get('/detail')
  @UseGuards(StrapiAuthGuard)
  public async getDetail(@Res() res: Response, @Query() params?: DetailQueryParams) {
    if (!params?.recordId || !params.type) {
      return res.status(400).send('Required query params not passed')
    }

    if (!(params.type in Enum_Triplyrecord_Type)) {
      return res
        .status(400)
        .send(
          `Incorrect type passed. Type must be one of ${Object.values(Enum_Triplyrecord_Type).join(
            ', '
          )}`
        )
    }

    const detail = await this.zoomLevel5Service.getDetail(
      params.recordId,
      StrapiUtils.getEntityNameForRecordType(params.type as Enum_Triplyrecord_Type)
    )

    res.send(detail)
  }
}
