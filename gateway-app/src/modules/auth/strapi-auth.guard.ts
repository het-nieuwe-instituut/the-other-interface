import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Config } from 'src/config/config'

@Injectable()
export class StrapiAuthGuard implements CanActivate {
    private strapiApiKey: string

    public constructor(configService: ConfigService<Config>) {
        this.strapiApiKey = configService.getOrThrow('STRAPI_AUTH_GUARD_API_KEY')
    }
    public canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        return this.strapiApiKey === req.headers['X-API-KEY']
    }
}
