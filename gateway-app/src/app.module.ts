import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { HttpModule } from '@nestjs/axios'
import { StoryModule } from './modules/story/story.module'
import { StrapiModule } from './modules/strapi/strapi.module'
import { TriplyModule } from './modules/triply/triply.module'
import { ArchivesModule } from './modules/archives/archives.module'
import { ObjectsModule } from './modules/objects/objects.module'
import { PeopleModule } from './modules/people/people.module'
import { PublicationsModule } from './modules/publications/publications.module'
import { ZoomLevel3Module } from './modules/zoomLevel3/zoomLevel3.module'
import { ZoomLevel2Module } from './modules/zoomLevel2/zoomLevel2.module'
import { HomepageModule } from './modules/homepage/homepage.module'
import { TriplyRecordModule } from './modules/triplyRecord/triplyRecord.module'
import { AuthorModule } from './modules/author/author.module'
import { LocationModule } from './modules/location/location.module'
import { LandingPageModule } from './modules/landingPage/landingPage.module'
import { UserModule } from './modules/user/user.module'
import { UtilModule } from './modules/util/util.module'
import { AuthModule } from './modules/auth/auth.module'
import { ThemeModule } from './modules/theme/theme.module'
import { TriplyElasticSearchModule } from './modules/triplyElasticSearch/triplyElasticSearch.module'
import { DataloaderModule } from './dataloader/dataloader.module'
import { DataloaderService } from './dataloader/dataloader.service'
import { IDataloaders } from './dataloader/dataloader.interface'

export interface GraphqlContext {
  loaders: IDataloaders
}

@Module({
  imports: [
    AuthModule,
    UtilModule,
    StoryModule,
    TriplyModule,
    StrapiModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [DataloaderModule],
      useFactory: (dataloaderService: DataloaderService) => ({
        autoSchemaFile: true,
        debug: process.env.ENV === 'development',
        playground: process.env.ENV === 'development',
        buildSchemaOptions: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dateScalarMode: 'Date' as any,
        },
        context: () => ({
          loaders: dataloaderService.loaders,
        }),
      }),
      inject: [DataloaderService],
    }),
    HttpModule,
    ArchivesModule,
    ObjectsModule,
    PeopleModule,
    PublicationsModule,
    ZoomLevel2Module,
    ZoomLevel3Module,
    TriplyRecordModule,
    TriplyElasticSearchModule,
    AuthorModule,
    LocationModule,
    HomepageModule,
    LandingPageModule,
    UserModule,
    ThemeModule,
    DataloaderModule,
  ],
})
export class AppModule {}
