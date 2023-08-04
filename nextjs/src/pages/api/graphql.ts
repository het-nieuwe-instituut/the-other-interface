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
import { zoomLevel3Data } from '../../mocks/mockData/zoomLevel3Data'
import { zoomLevel4Data } from '../../mocks/mockData/zoomLevel4Data'
import { zoomLevel5Data } from '../../mocks/mockData/zoomLevel5Data'
import { storiesWithoutRelations } from '../../mocks/mockData/storiesWithoutRelationsData'
import { storyImagesMock } from '../../mocks/mockData/storyImagesData'

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    landingpages(slug: string, locale: string) {
      return LandingPagesData.landingpages
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

    story() {
      return storyImagesMock.story
    },

    storiesWithoutRelations() {
      return storiesWithoutRelations.storiesWithoutRelations
    },
    zoomLevel3() {
      return zoomLevel3Data
    },
    zoomLevel4() {
      return zoomLevel4Data
    },
    zoomLevel5Object() {
      return zoomLevel5Data['zoomLevel5Object'].zoom5detail
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
