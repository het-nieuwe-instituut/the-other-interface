import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'
import { Enum_Triplyrecord_Type } from '../../generated/strapi-sdk'
import { StrapiAuthGuard } from '../auth/strapi-auth.guard'
import { StrapiUtils } from '../strapi/strapi.utils'
import { Locale } from '../util/locale.type'
import { ZoomLevel3Service } from './zoomLevel3.service'

interface DetailQueryParams {
  recordId?: string
  type?: string
}

@Controller('/zoomLevel3')
export class ZoomLevel3Controller {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

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

    const detail = await this.zoomLevel3Service.getDetail(
      params.recordId,
      StrapiUtils.getEntityNameForRecordType(params.type),
      Locale.nl // no need for translation in strapi
    )

    res.send(detail)
  }
}
