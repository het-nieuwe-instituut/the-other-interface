import { errors } from '@strapi/utils'
import slugify from 'slugify'

const storyApi = 'api::story.story'

export default {
  async beforeCreate(event) {
    try {
      await checkParentChildConstraintsOrThrow(event)

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
      await checkParentChildConstraintsOrThrow(event)

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

    if (event.params.data.parent_story !== undefined) {
      const parentChanges = event.params.data.parent_story
      if (parentChanges.disconnect.length) {
        data['parent_story'] = parentChanges
      } else {
        await changeOtherLocalesParent(event.result.localizations, parentChanges?.connect?.[0]?.id)
      }
    }

    await Promise.all(
      event.result.localizations.map(s => strapi.entityService.update(storyApi, s.id, { data }))
    )
  }
}

async function checkParentChildConstraintsOrThrow(event) {
  const parentChanges = event.params.data.parent_story
  if (parentChanges?.connect?.length > 1) {
    throw new errors.ApplicationError('Story cannot have more than one parent')
  }

  const parentId = parentChanges?.connect?.[0]?.id
  const childrenChanges = event.params.data.child_stories
  const id = event.params.where?.id // could be null if this method is called beforeCreate
  const story = id
    ? await strapi.entityService.findOne(storyApi, id, {
        populate: ['child_stories'],
      })
    : undefined

  // cannot be parent of itself
  if (parentId && parentId === id) {
    throw new errors.ApplicationError('Story cannot be parent of itself')
  }

  // cannot be child of itself
  if (childrenChanges?.connect?.includes(id)) {
    throw new errors.ApplicationError('Story cannot be child of itself')
  }

  // cannot have both a parent and children
  if (parentId && childrenChanges?.connect?.length) {
    throw new errors.ApplicationError('Story cannot have both a parent and children')
  }

  // cannot add or remove children (field effectively disabled)
  const isEditing = story && childrenChanges !== undefined
  const isCreating = !story
  const removedOrAddedChildren =
    childrenChanges?.connect?.length || childrenChanges?.disconnect?.length

  if (removedOrAddedChildren && (isEditing || isCreating)) {
    throw new errors.ApplicationError(`Cannot add or remove child stories`)
  }

  // children cannot have children
  if (childrenChanges?.connect?.length) {
    await checkIfChildrenAreNotParentsOrThrow(childrenChanges?.connect.map(c => c.id))
  }

  // parent cannot have a parent
  if (parentId) {
    await checkIfParentIsNotAChildOrThrow(event, parentId)
  }
}

async function checkIfChildrenAreNotParentsOrThrow(childrenIds: number[]) {
  if (!childrenIds?.length) return

  const children = await strapi.entityService.findMany(storyApi, {
    filters: {
      id: { $in: childrenIds },
    },
    populate: ['child_stories'],
  })

  if (children.some(c => c.child_stories.length)) {
    throw new errors.ApplicationError('Children stories cannot be parents of other stories')
  }
}

async function checkIfParentIsNotAChildOrThrow(event, parentId: number) {
  const item = event.params.data
  const id = event.params.where?.id

  if (!item.parent_story) return
  if (id && parentId === id) {
    throw new errors.ApplicationError('Parent story cannot be the same as the current story')
  }

  const parentStory = await strapi.entityService.findOne(storyApi, parentId, {
    populate: ['parent_story'],
  })

  if (parentStory.parent_story) {
    throw new errors.ApplicationError(
      `Parent story ${parentStory.id} cannot be a child of another story ${parentStory.parent_story.id}`
    )
  }
}

async function changeOtherLocalesParent(localizations: any[], parentId?: number) {
  if (!parentId) return
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

      const data = { parent_story: { connect: [{ id: parentLocale.id }], disconnect: [] } } as any
      return strapi.entityService.update(storyApi, l.id, { data })
    })
  )
}

function handleError(err: unknown) {
  const ctx = strapi.requestContext.get()
  if (err instanceof errors.ApplicationError) {
    ctx.throw(400, err)
  }

  ctx.throw(500, err)
}
