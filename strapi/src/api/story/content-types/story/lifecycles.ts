import utils from '@strapi/utils'
import slugify from 'slugify'

const { ValidationError } = utils.errors
const storyApi = 'api::story.story'

export default {
  beforeCreate(event) {
    if (!event.params.data.slug) {
      throw new ValidationError('slug must be provided')
    }

    if (event.params.data.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }
  },

  async beforeUpdate(event) {
    const story = await strapi.entityService.findOne(storyApi, event.params.where.id)

    if (event.params.data.slug && event.params.data.slug !== story.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }
  },

  afterCreate(event) {
    applyToAllLocales(event)
  },

  afterUpdate(event) {
    applyToAllLocales(event)
  },
}

function getSlug(text) {
  return slugify(text, { lower: true, strict: true })
}

function applyToAllLocales(event) {
  if (event.result.localizations?.length) {
    const data: Object = {}

    if (event.params.data.triplyRecords !== undefined) {
      data['triplyRecords'] = event.params.data.triplyRecords
    }

    if (event.params.data.locations !== undefined) {
      data['locations'] = event.params.data.locations
    }

    if (event.params.data.author !== undefined) {
      data['author'] = event.params.data.author
    }

    if (event.params.data.themes !== undefined) {
      data['themes'] = event.params.data.themes
    }

    if (event.params.data.slug) {
      data['slug'] = event.params.data.slug
    }

    event.result.localizations.forEach(s => strapi.entityService.update(storyApi, s.id, { data }))
  }
}
