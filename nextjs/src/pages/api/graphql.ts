import { HomePageData } from '../../mocks/mockData/homepageData'
import { ZoomLevel1Data } from '../../mocks/mockData/zoomLevel1Data'
import { loadSchemaSync } from '@graphql-tools/load'
import { JsonFileLoader } from '@graphql-tools/json-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

import { createYoga } from 'graphql-yoga'

const schema = loadSchemaSync('./graphql.schema.json', {
  loaders: [new JsonFileLoader()],
})

// Define your custom mock resolvers
const customResolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    homepage(publicationState: string, locale: string) {
      return HomePageData.homepage
    },
    zoomLevel1() {
      return ZoomLevel1Data
    },
  },
}

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers: customResolvers,
})

export default createYoga({
  schema: schemaWithResolvers,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})
