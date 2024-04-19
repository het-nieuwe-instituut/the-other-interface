import utils from '@strapi/utils'
import slugify from 'slugify'

const { ValidationError } = utils.errors
const storyApi = 'api::story.story'
const storyLocaleApi = 'api::story.stories_localization_links'

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

    const story = await strapi.entityService.findOne(storyApi, event.params.where.id)

    if (event.params.data.slug && event.params.data.slug !== story.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }
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

    if (event.params.data.parent_story !== undefined) {
      // TODO
      // find locales of the parent story
      // set locales' parent_story to the parent story's locale
    }

    if (event.params.data.child_stories !== undefined) {
      const childrenIds = event.params.data.child_stories?.join(', ')

      if (!childrenIds) {
        await setOtherLocalesChildrenToNull(event.result.localizations)
      } else {
        await changeOtherLocalesChildren(childrenIds, event.result.localizations)
      }
    }

    await Promise.all(
      event.result.localizations.map(s => strapi.entityService.update(storyApi, s.id, { data }))
    )
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

async function setOtherLocalesChildrenToNull(localizations: any[]) {
  if (!localizations.length) return

  const localeIds = localizations.map(s => s.id).join(', ')

  /**
   * set previous children to null
   * - get other locales' children
   * - set their parent_story to null
   */
  const previousChildren = await strapi.entityService.findMany(storyApi, {
    where: {
      // inv_story_id is the parent_story
      $in: `(SELECT inv_story_id FROM stories_parent_story_links WHERE story_id IN (${localeIds}))`,
    },
    select: ['id'],
  })

  await Promise.all(
    previousChildren?.map(s =>
      strapi.entityService.update(storyApi, s.id, { data: { parent_story: null } })
    )
  )
}

async function changeOtherLocalesChildren(childrenIds: string[], localizations: any[]) {
  if (!localizations.length) return

  await setOtherLocalesChildrenToNull(localizations)

  /**
   * set current children parent_story to their locale's parent_story
   * - get current children
   * - set their parent_story to their locale's parent_story
   */
  const currentChildren = await strapi.entityService.findMany(storyApi, {
    where: {
      id: { $in: childrenIds },
    },
    select: ['id', 'locale'],
  })

  await Promise.all(
    currentChildren?.map(s => {
      const localeParentStory = localizations.find(l => l.locale === s.locale)
      if (!localeParentStory) {
        console.debug(`Locale ${s.locale} not found for child story ${s.id}`)
        return Promise.resolve()
      }

      return strapi.entityService.update(storyApi, s.id, {
        data: { parent_story: localeParentStory.id },
      })
    })
  )
}
