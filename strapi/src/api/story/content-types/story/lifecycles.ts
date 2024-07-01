import { errors } from '@strapi/utils'
import slugify from 'slugify'
import { handleError } from '../../../lifecycleUtils'

const storyApi = 'api::story.story'

export default {
  async beforeCreate(event) {
    try {
      if (!event.params.data.slug) {
        throw new errors.ApplicationError('slug must be provided')
      }

      if (event.params.data.slug) {
        event.params.data.slug = getSlug(event.params.data.slug)
      }
    } catch (err) {
      handleError(err)
    }
  },

  async beforeUpdate(event) {
    try {
      const story = await strapi.entityService.findOne(storyApi, event.params.where.id)

      if (event.params.data.slug && event.params.data.slug !== story.slug) {
        event.params.data.slug = getSlug(event.params.data.slug)
      }
    } catch (err) {
      handleError(err)
    }
  },

  async afterCreate(event) {
    try {
      await applyToAllLocales(event)
    } catch (err) {
      handleError(err)
    }
  },

  async afterUpdate(event) {
    try {
      await applyToAllLocales(event)
    } catch (err) {
      handleError(err)
    }
  },
}

function getSlug(text) {
  return slugify(text, { lower: true, strict: true })
}

async function applyToAllLocales(event) {
  if (event.result.localizations?.length) {
    const data: Object = {}
    if (event.params.data.triplyRecords !== undefined) {
      data['triplyRecords'] = event.params.data.triplyRecords
    }

    if (event.params.data.author !== undefined) {
      data['author'] = event.params.data.author
    }

    if (event.params.data.slug) {
      data['slug'] = event.params.data.slug
    }

    await Promise.all(
      event.result.localizations.map(s => strapi.entityService.update(storyApi, s.id, { data }))
    )
  }
}
