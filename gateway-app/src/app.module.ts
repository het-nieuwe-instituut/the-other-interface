import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppResolver } from './app.resolver'
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            debug: true,
            playground: false,
        }),
        HttpModule,
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}