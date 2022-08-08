import { Query, Resolver } from '@nestjs/graphql'
import { AppService } from './app.service'

@Resolver()
export class AppResolver {
    public constructor(private readonly appService: AppService) {}

    @Query(() => String)
    public async hello() {
        return this.appService.getHello()
    }
}
