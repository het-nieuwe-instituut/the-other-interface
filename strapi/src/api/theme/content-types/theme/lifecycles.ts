import { errors } from '@strapi/utils'
import { handleError } from '../../../lifecycleUtils'
const themeApi = 'api::theme.theme'

export default {
  async beforeCreate(event) {
    try {
      const id = event.params.where?.id
      const theme = id
        ? await strapi.entityService.findOne(themeApi, id, {
            populate: { highlightedStories: true },
          })
        : undefined

      if (
        theme.highlightedStories.length + event.params.data.highlightedStories.connect.length > 5 &&
        !(
          theme.highlightedStories.length +
            event.params.data.highlightedStories.connect.length -
            event.params.data.highlightedStories.disconnect.length <=
          5
        ) &&
        !(
          theme.highlightedStories.length === 5 &&
          event?.params?.data?.highlightedStories?.connect[0]?.position?.before
        )
      ) {
        throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
      }
    } catch (err) {
      handleError(err)
    }
  },
  async beforeUpdate(event) {
    try {
      const id = event.params.where?.id
      const theme = id
        ? await strapi.entityService.findOne(themeApi, id, {
            populate: { highlightedStories: true },
          })
        : undefined

      if (
        theme.highlightedStories.length + event.params.data.highlightedStories.connect.length > 5 &&
        !(
          theme.highlightedStories.length +
            event.params.data.highlightedStories.connect.length -
            event.params.data.highlightedStories.disconnect.length <=
          5
        ) &&
        !(
          theme.highlightedStories.length === 5 &&
          event?.params?.data?.highlightedStories?.connect[0]?.position?.before
        )
      ) {
        throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
      }
    } catch (err) {
      handleError(err)
    }
  },
}
