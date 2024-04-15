import utils from '@strapi/utils'
import slugify from 'slugify'

const { ValidationError } = utils.errors
const storyApi = 'api::story.story'

export default {
  async beforeCreate(event) {
    await checkIfParentIsNotAChild(event)
    if (!event.params.data.slug) {
      throw new ValidationError('slug must be provided')
    }

    if (event.params.data.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }
  },

  async beforeUpdate(event) {
    await checkIfParentIsNotAChild(event)
    const story = await strapi.entityService.findOne(storyApi, event.params.where.id, {
      populate: ['localizations', 'parent_story'],
    })
    if (event.params.data.slug && event.params.data.slug !== story.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }

    // TODO: It takes current localization for parent, but update dosent work, need to fix

    // if (story.localizations.length > 0) {
    //   const localizedStoryId = story.localizations[0]?.id
    //   const currentStoryId = event.params.where.id

    //   if (localizedStoryId === currentStoryId) return

    //   const parentStoryId = story.parent_story?.id

    //   if (parentStoryId) {
    //     const localizedStoryParent = await strapi.entityService.findOne(storyApi, parentStoryId, {
    //       populate: ['localizations'],
    //     })

    //     if (localizedStoryParent.localizations.length > 0) {
    //       event.params.data.parent_story = localizedStoryParent.localizations[0].id
    //     }
    //   }
    // }
  },

  async afterCreate(event) {
    await applyToAllLocales(event)
  },

  async afterUpdate(event) {
    await applyToAllLocales(event)
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

    try {
      event.result.localizations.forEach(async s => {
        strapi.entityService.update(storyApi, s.id, { data })
      })
    } catch (e) {
      console.error(e)
    }
  }
}

async function checkIfParentIsNotAChild(event) {
  const item = event.params.data

  if (!item.parent_story) return
  if (item.parent_story === event.params.where.id) {
    throw new ValidationError('Parent story cannot be the same as the current story')
  }

  const parentStory = await strapi.entityService.findOne(storyApi, item.parent_story, {
    populate: ['parent_story'],
  })

  if (parentStory.parent_story) {
    throw new ValidationError('Parent story cannot be a child of another story')
  }
}
