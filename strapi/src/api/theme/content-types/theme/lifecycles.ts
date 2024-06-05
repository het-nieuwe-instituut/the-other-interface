import { errors } from '@strapi/utils'
const themeApi = 'api::theme.theme'

export default {
  async beforeCreate(event) {
    const isConnecting = event.params.data.highlightedStories.connect.length > 0
    const isDisconnecting = event.params.data.highlightedStories.disconnect.length > 0

    const id = event.params.where?.id
    const theme = id
      ? await strapi.entityService.findOne(themeApi, id, {
          populate: { highlightedStories: true },
        })
      : undefined

    if (theme.highlightedStories.length === 5 && isConnecting && !isDisconnecting) {
      throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
    }
  },
  async beforeUpdate(event) {
    const isConnecting = event.params.data.highlightedStories.connect.length > 0
    const isDisconnecting = event.params.data.highlightedStories.disconnect.length > 0

    const id = event.params.where?.id
    const theme = id
      ? await strapi.entityService.findOne(themeApi, id, {
          populate: { highlightedStories: true },
        })
      : undefined

    if (theme.highlightedStories.length === 5 && isConnecting && !isDisconnecting) {
      throw new errors.ApplicationError('Cannot select more than 5 highlighted stories')
    }
  },
}
