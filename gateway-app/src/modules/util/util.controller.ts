import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'
import { StrapiAuthGuard } from '../auth/strapi-auth.guard'
import { CacheService } from './cache.service'
import { SlackService } from './slack.service'

@Controller('/utils')
export class UtilController {
  public constructor(
    private readonly slackService: SlackService,
    private readonly cacheService: CacheService
  ) {}

  @Post('/slackMessage')
  @UseGuards(StrapiAuthGuard)
  public async postSlackMessage(@Res() res: Response, @Body('message') message?: string) {
    if (!message || typeof message !== 'string') {
      return res.status(400).send('No message passed')
    }

    await this.slackService.postMessageToChannel(
      this.slackService.channels.systemNotification,
      message
    )

    res.sendStatus(200)
  }

  @Get('/invalidateCache')
  @UseGuards(StrapiAuthGuard)
  public async invalidateCache(@Res() res: Response) {
    await this.cacheService.invalidate()
    res.sendStatus(200)
  }
}
