import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { HttpModule } from '@nestjs/axios'
import { StoryModule } from './modules/story/story.module'
import { StrapiModule } from './modules/strapi/strapi.module'
import { TripliModule } from './modules/tripli/tripli.module'
import { ArchivesModule } from './modules/archives/archives.module'
import { ObjectsModule } from './modules/objects/objects.module'
import { PeopleModule } from './modules/people/people.module'
import { PublicationsModule } from './modules/publications/publications.module'
import { ZoomLevel1Module } from './modules/zoomLevel1/zoomLevel1.module'
import { ZoomLevel2Module } from './modules/zoomLevel2/zoomLevel2.module'
import { ZoomLevel3Module } from './modules/zoomLevel3/zoomLevel3.module'

@Module({
    imports: [
        StoryModule,
        TripliModule,
        StrapiModule,
        ConfigModule.forRoot({ isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            debug: true,
            playground: false,
        }),
        HttpModule,
        ArchivesModule,
        ObjectsModule,
        PeopleModule,
        PublicationsModule,
        ZoomLevel1Module,
        ZoomLevel2Module,
        ZoomLevel3Module,
    ],
})
export class AppModule {}
