import { GraphQLClientInject, GraphQLRequestModule } from '@golevelup/nestjs-graphql-request'
import { Module } from '@nestjs/common'
import { getSdk } from '../../generated/strapi-sdk'
import { GraphQLClient } from 'graphql-request'

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
  ],
  exports: ['StrapiGqlSDK'],
})
export class StrapiModule {}
