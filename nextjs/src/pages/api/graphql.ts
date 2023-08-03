import { HomePageData } from '../../mocks/mockData/homepageData'
import { LandingPagesData } from '../../mocks/mockData/landingpagesData'
import { ZoomLevel1Data } from '../../mocks/mockData/zoomLevel1Data'
import { loadSchemaSync } from '@graphql-tools/load'
import { JsonFileLoader } from '@graphql-tools/json-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import {
  peopleZoomLevel2Data,
  publicationZoomLevel2Data,
  objectZoomLevel2Data,
  archivesZoomLevel2Data,
} from '../../mocks/mockData/zoomLevel2Data'

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    zoomLevel2(filter: string, params: { entityName: string }) {
      const { entityName } = params
      switch (entityName) {
        case 'Publications':
          return publicationZoomLevel2Data
        case 'Objects':
          return objectZoomLevel2Data
        case 'People':
          return peopleZoomLevel2Data
        case 'Archives':
          return archivesZoomLevel2Data
        default:
          return []
      }
    },
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // landingpageBySlug(slug: string, locale: string, publicationState: string) {
    //   return HomePageData.homepage
    // },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    landingpages(slug: string, locale: string) {
      return LandingPagesData.landingpages
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
