import { errors } from '@strapi/utils'
import { handleError } from '../../../lifecycleUtils'
const themeApi = 'api::theme.theme'

export default {
  async beforeCreate(event) {
    try {
      const isConnecting = event.params.data.highlightedStories.connect.length > 0
      const isDisconnecting = event.params.data.highlightedStories.disconnect.length > 0

      const id = event.params.where?.id
      const theme = id
        ? await strapi.entityService.findOne(themeApi, id, {
            populate: { highlightedStories: true },
          })
        : undefined

      if (
        theme.highlightedStories.length + event.params.data.highlightedStories.connect.length >
        5
      ) {
        throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
      }
    } catch (err) {
      handleError(err)
    }
  },
  async beforeUpdate(event) {
    try {
      const isConnecting = event.params.data.highlightedStories.connect.length > 0
      const isDisconnecting = event.params.data.highlightedStories.disconnect.length > 0

      const id = event.params.where?.id
      const theme = id
        ? await strapi.entityService.findOne(themeApi, id, {
            populate: { highlightedStories: true },
          })
        : undefined

      if (
        theme.highlightedStories.length + event.params.data.highlightedStories.connect.length >
        5
      ) {
        throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
      }
    } catch (err) {
      handleError(err)
    }
  },
}
