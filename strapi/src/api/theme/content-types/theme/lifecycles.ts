import { errors } from '@strapi/utils'
import slugify from 'slugify'

const storyApi = 'api::theme.highlightedStories '

export default {
  async beforeCreate(event) {
    console.log('before create', event)
    // if (data.categories && data.categories.length > 5) {
    //   throw new Error('An article can only have up to 5 categories.')
    // }
  },
  async beforeUpdate(event) {
    console.log('before update', event)
  },
}
