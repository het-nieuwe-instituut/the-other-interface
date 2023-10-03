import { JsonFileLoader } from '@graphql-tools/json-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'

import '../../../graphql.schema.json'
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
import { themesData } from '../../mocks/mockData/themesData'
import { EntityNames } from 'src/generated/graphql'

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
    zoomLevel2(
      root: unknown,
      args: {
        entityName: EntityNames // Add or remove as required
        page: number
        pageSize: number
        total: string
      }
    ) {
      const { entityName } = args
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
          return {
            data: [],
            total: '0',
          }
      }
    },

    zoomLevel3Publication() {
      return zoomLevel3Data.zoomLevel3Publication
    },

    zoomLevel3Person() {
      return zoomLevel3Data.zoomLevel3Person
    },

    zoomLevel3Archive() {
      return zoomLevel3Data.zoomLevel3Archive
    },

    zoomLevel3Object() {
      return zoomLevel3Data.zoomLevel3Object
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
      return zoomLevel3Data.relations.relations
    },

    menupages() {
      return menuPagesData.menupages
    },

    menupage() {
      return menuPagesData.menupages.data[0]
    },

    themes() {
      return themesData.themes
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
