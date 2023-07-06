import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'
import { StrapiAuthGuard } from '../auth/strapi-auth.guard'
import { SlackService } from './slack.service'

@Controller('/utils')
export class UtilController {
  public constructor(private readonly slackService: SlackService) {}

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
}
