import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WebClient } from '@slack/web-api'
import { Config } from '../../config/config'

interface SlackChannel {
    systemNotification: string
}

@Injectable()
export class SlackService {
    private readonly webClient: WebClient
    private readonly ignoreRequest: boolean

    public readonly channels: SlackChannel

    public constructor(configService: ConfigService<Config>) {
        this.ignoreRequest = configService.get('ENV') === 'development'

        this.webClient = new WebClient(configService.getOrThrow('SLACK_TOKEN'))
        this.channels = {
            systemNotification: configService.getOrThrow('SLACK_SYSTEM_NOTIFICATION_CHANNEL'),
        }
    }

    public async postMessageToChannel(channel: string, text: string) {
        if (this.ignoreRequest) {
            console.log('ignoring slack service request', text)
            return
        }

        try {
            const res = await this.webClient.chat.postMessage({ channel, text })
            console.log('Message successfully posted to slack channel')

            return res
        } catch (err) {
            console.log('Post message to Slack channel failed', channel, text)
            console.log('Error', JSON.stringify(err))
        }
    }
}
