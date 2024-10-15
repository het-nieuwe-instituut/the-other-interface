import { GraphQLClientInject, GraphQLRequestModule } from '@golevelup/nestjs-graphql-request'
import { Module } from '@nestjs/common'
import { getSdk } from '../../generated/strapi-sdk'
import { GraphQLClient } from 'graphql-request'
// import { PerformanceInterceptor } from '../util/performance.interceptor'

@Module({
  imports: [
    GraphQLRequestModule.forRoot(GraphQLRequestModule, {
      endpoint: process.env.STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
      options: {
        headers: {
          'content-type': 'application/json',
        },
      },
    }),
  ],
  providers: [
    {
      // This provides typed gql SDK, to get the SDK instance, add @Inject("StrapiGqlSDK") to the service
      provide: 'StrapiGqlSDK',
      inject: [GraphQLClientInject],
      useFactory: (client: GraphQLClient) => getSdk(client),
    },
    // {
    //   // Apply the interceptor with a threshold of 1000ms (1 second)
    //   provide: 'APP_INTERCEPTOR',
    //   useFactory: () => new PerformanceInterceptor('CMS', 1500),
    // },
  ],
  exports: ['StrapiGqlSDK'],
})
export class StrapiModule {}
