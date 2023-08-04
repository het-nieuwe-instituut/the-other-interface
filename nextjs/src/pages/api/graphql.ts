import { JsonFileLoader } from '@graphql-tools/json-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'

import { HomePageData } from '../../mocks/mockData/homepageData'
import { LandingPagesData } from '../../mocks/mockData/landingpagesData'
import { menuPagesData } from '../../mocks/mockData/menuPagesData'
import { relationsData } from '../../mocks/mockData/relationsData'
import { storiesData } from '../../mocks/mockData/storiesData'
import { storiesWithoutRelations } from '../../mocks/mockData/storiesWithoutRelationsData'
import { storyData } from '../../mocks/mockData/storyData'
import { ZoomLevel1Data } from '../../mocks/mockData/zoomLevel1Data'
import {
  peopleZoomLevel2Data,
  publicationZoomLevel2Data,
  objectZoomLevel2Data,
  archivesZoomLevel2Data,
} from '../../mocks/mockData/zoomLevel2Data'
import { zoomLevel3Data } from '../../mocks/mockData/zoomLevel3Data'
import { zoomLevel4Data } from '../../mocks/mockData/zoomLevel4Data'
import { zoomLevel5Data } from '../../mocks/mockData/zoomLevel5Data'

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

    zoomLevel3() {
      return zoomLevel3Data
    },
    zoomLevel4() {
      return zoomLevel4Data
    },
    // TODO if you want to check galaxy traveling more then to from object to story - mock this
    zoomLevel5Publication() {
      return null
    },
    zoomLevel5Person() {
      return null
    },
    zoomLevel5Archive() {
      return null
    },
    zoomLevel5Object() {
      return zoomLevel5Data['zoomLevel5Object'].zoom5detail
    },

    story() {
      return storyData.story
    },

    stories() {
      return storiesData.stories
    },

    storiesWithoutRelations() {
      return storiesWithoutRelations.storiesWithoutRelations
    },

    relations: () => {
      return relationsData.relations
    },

    menupages() {
      return menuPagesData.menupages
    },

    menupage() {
      return menuPagesData.menupages.data[0]
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
