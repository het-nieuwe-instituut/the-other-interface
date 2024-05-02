import utils from '@strapi/utils'
import slugify from 'slugify'

const { ValidationError } = utils.errors
const storyApi = 'api::story.story'

export default {
  async beforeCreate(event) {
    await checkParentChildConstraintsOrThrow(event)

    if (!event.params.data.slug) {
      throw new ValidationError('slug must be provided')
    }

    if (event.params.data.slug) {
      event.params.data.slug = getSlug(event.params.data.slug)
    }
  },

  async beforeUpdate(event) {
    await checkParentChildConstraintsOrThrow(event)

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
      const parentId = event.params.data.parent_story
      if (parentId === null) {
        data['parent_story'] = null
      } else {
        await changeOtherLocalesParent(parentId, event.result.localizations)
      }
    }

    await Promise.all(
      event.result.localizations.map(s => strapi.entityService.update(storyApi, s.id, { data }))
    )
  }
}

async function checkParentChildConstraintsOrThrow(event) {
  const parentId = event.params.data.parent_story
  const childrenIds = event.params.data.child_stories
  const id = event.params.where?.id // could be null if this method is called beforeCreate
  const story = id
    ? await strapi.entityService.findOne(storyApi, id, {
        populate: ['child_stories'],
      })
    : undefined

  // cannot be parent of itself
  if (parentId && parentId === id) {
    throw new ValidationError('Story cannot be parent of itself')
  }

  // cannot be child of itself
  if (childrenIds?.includes(id)) {
    throw new ValidationError('Story cannot be child of itself')
  }

  // cannot have both a parent and children
  if (parentId && childrenIds?.length) {
    throw new ValidationError('Story cannot have both a parent and children')
  }

  // cannot add or remove children (field effectively disabled)
  const isEditing = story && childrenIds !== undefined
  const isCreating = !story
  const removedOrAddedChildren = story?.child_stories.length !== childrenIds?.length
  const changedChildren = !story?.child_stories.every(c => childrenIds?.includes(c.id))

  if (
    (isCreating && childrenIds?.length) ||
    (isEditing && (removedOrAddedChildren || changedChildren))
  ) {
    throw new ValidationError(`Cannot add or remove child stories`)
  }

  // children cannot have children
  if (childrenIds?.length) {
    await checkIfChildrenAreNotParentsOrThrow(event)
  }

  // parent cannot have a parent
  if (parentId) {
    await checkIfParentIsNotAChildOrThrow(event)
  }
}

async function checkIfChildrenAreNotParentsOrThrow(event) {
  const childrenIds = event.params.data.child_stories
  if (!childrenIds?.length) return

  const children = await strapi.entityService.findMany(storyApi, {
    filters: {
      id: { $in: childrenIds },
    },
    populate: ['child_stories'],
  })

  if (children.some(c => c.child_stories.length)) {
    throw new ValidationError('Children stories cannot be parents of other stories')
  }
}

async function checkIfParentIsNotAChildOrThrow(event) {
  const item = event.params.data
  const id = event.params.where?.id

  if (!item.parent_story) return
  if (id && item.parent_story === id) {
    throw new ValidationError('Parent story cannot be the same as the current story')
  }

  const parentStory = await strapi.entityService.findOne(storyApi, item.parent_story, {
    populate: ['parent_story'],
  })

  if (parentStory.parent_story) {
    throw new ValidationError(
      `Parent story ${parentStory.id} cannot be a child of another story ${parentStory.parent_story.id}`
    )
  }
}

async function changeOtherLocalesParent(parentId: number, localizations: any[]) {
  const parentWithLocales = await strapi.entityService.findOne(storyApi, parentId, {
    populate: ['localizations'],
  })

  await Promise.all(
    localizations.map(l => {
      const parentLocale = parentWithLocales.localizations.find(p => p.locale === l.locale)
      if (!parentLocale) {
        console.debug(`Locale ${l.locale} not found for parent story ${parentId}`)
        return Promise.resolve()
      }

      const data = { parent_story: parentLocale.id }
      return strapi.entityService.update(storyApi, l.id, { data })
    })
  )
}
