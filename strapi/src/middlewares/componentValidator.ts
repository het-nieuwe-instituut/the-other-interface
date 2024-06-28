import { Strapi } from '@strapi/strapi'
import {
  CoreCarouselImage,
  CoreGridFeaturedFields,
  CoreStandAloneLink,
} from '../../types/generated/components'
import { errors } from '@strapi/utils'

export default (_config, { strapi: _strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    const { method, url, body } = ctx.request
    const contentManagementUrls = [
      '/content-manager/collection-types/api::',
      '/content-manager/single-types/api::',
    ]

    if (!['POST', 'PUT'].includes(method) || !contentManagementUrls.some(c => url?.startsWith(c))) {
      await next()
      return
    }

    const standAloneLinks = body?.components?.filter(
      c => c?.__component === 'core.stand-alone-link'
    )
    const coreCarouselImages = body?.components?.filter(
      c => c?.__component === 'core.carousel-image'
    )
    const gridFeaturedFields = body?.grid?.cards || []
    const moduleCarouselImages = body?.carousel?.images || []

    try {
      standAloneLinks?.forEach(validateStandAloneLinkOrThrow)
      coreCarouselImages?.forEach(validateCarouseImageOrThrow)

      if (method === 'POST') {
        gridFeaturedFields.forEach(validateNewGridFeaturedFieldOrThrow)
        moduleCarouselImages.forEach(validateNewCarouseImageOrThrow)
      }

      if (method === 'PUT') {
        await Promise.all(gridFeaturedFields.map(validateUpdateGridFeaturedFieldOrThrow(strapi)))
        await Promise.all(moduleCarouselImages.map(validateUpdateCarouselImageOrThrow(strapi)))
      }
    } catch (error) {
      return ctx.throw(400, error.message)
    }

    await next()
  }
}

function validateStandAloneLinkOrThrow(component: Partial<CoreStandAloneLink['attributes']>) {
  if (!component.url && !component.attachment) {
    throw new errors.ApplicationError('Stand alone link must have either a url or attachment')
  }
}

function validateCarouseImageOrThrow(component: Partial<CoreCarouselImage['attributes']>) {
  if (component.story && component.triply_record) {
    throw new errors.ApplicationError('Carousel image cannot have both story and triply record')
  }
}

type Card = Partial<CoreGridFeaturedFields['attributes']>

function validateNewGridFeaturedFieldOrThrow(card: Card) {
  const storyToConnect = 'connect' in card.story ? (card.story['connect'] as []) : []
  const triplyRecordToConnect =
    'connect' in card.triplyRecord ? (card.triplyRecord['connect'] as []) : []

  if (storyToConnect?.length && triplyRecordToConnect?.length) {
    throw new errors.ApplicationError('Grid card cannot have both story and triply record')
  }
}

function validateNewCarouseImageOrThrow(image: any) {
  if (image.story?.connect?.length && image.triplyRecord?.connect?.length) {
    throw new errors.ApplicationError('Carousel image cannot have both story and triply record')
  }
}

function validateUpdateGridFeaturedFieldOrThrow(strapi: Strapi) {
  return async (card: Card) => {
    const storyToConnect = 'connect' in card.story ? (card.story['connect'] as []) : []
    const triplyRecordToConnect =
      'connect' in card.triplyRecord ? (card.triplyRecord['connect'] as []) : []

    if (storyToConnect?.length && triplyRecordToConnect?.length) {
      throw new errors.ApplicationError('Grid card cannot have both story and triply record')
    }

    const cardId = card['id']
    if (!cardId) {
      return
    }

    if (storyToConnect?.length) {
      return checkIfAllCardTriplyRecordsAreRemovedOrThrow(strapi, cardId, card)
    }

    if (triplyRecordToConnect?.length) {
      return checkIfAllCardStoriesAreRemovedOrThrow(strapi, cardId, card)
    }
  }
}

type CarouselImage = Partial<CoreCarouselImage['attributes']>

function validateUpdateCarouselImageOrThrow(strapi: Strapi) {
  return async (image: CarouselImage) => {
    const storyToConnect = 'connect' in image.story ? (image.story['connect'] as []) : []
    const triplyRecordToConnect =
      'connect' in image.triply_record ? (image.triply_record['connect'] as []) : []

    if (storyToConnect?.length && triplyRecordToConnect?.length) {
      throw new errors.ApplicationError('Carousel image cannot have both story and triply record')
    }

    const imageId = image['id']
    if (!imageId) {
      return
    }

    if (storyToConnect?.length) {
      return checkIfAllCarouselImageTriplyRecordsAreRemovedOrThrow(strapi, imageId, image)
    }

    if (triplyRecordToConnect?.length) {
      return checkIfAllCarouselImageStoriesAreRemovedOrThrow(strapi, imageId, image)
    }
  }
}

async function checkIfAllCardTriplyRecordsAreRemovedOrThrow(
  strapi: Strapi,
  cardId: number,
  card: Card
) {
  const linkedTriplyRecords = await getCardTriplyRecords(strapi, cardId)
  if (!linkedTriplyRecords) {
    return
  }

  const triplyRecordsToDisconnect =
    'disconnect' in card.triplyRecord ? (card.triplyRecord['disconnect'] as []) : []
  const triplyRecordIdsToDisconnect = triplyRecordsToDisconnect.map(r => r.id)
  if (!linkedTriplyRecords.every(r => triplyRecordIdsToDisconnect.includes(r))) {
    throw new errors.ApplicationError(
      'Cannot connect story and triply record to grid card at the same time'
    )
  }
}

async function checkIfAllCardStoriesAreRemovedOrThrow(strapi: Strapi, cardId: number, card: Card) {
  const linkedStories = await getCardStories(strapi, cardId)
  if (!linkedStories) {
    return
  }

  const storiesToDisconnect = 'disconnect' in card.story ? (card.story['disconnect'] as []) : []
  const storyIdsToDisconnect = storiesToDisconnect.map(s => s.id)
  if (!linkedStories.every(s => storyIdsToDisconnect.includes(s))) {
    throw new errors.ApplicationError(
      'Cannot connect story and triply record to grid card at the same time'
    )
  }
}

async function checkIfAllCarouselImageTriplyRecordsAreRemovedOrThrow(
  strapi: Strapi,
  imageId: number,
  image: CarouselImage
) {
  const linkedTriplyRecords = await getCarouselImageTriplyRecords(strapi, imageId)
  if (!linkedTriplyRecords) {
    return
  }

  const triplyRecordsToDisconnect =
    'disconnect' in image.triply_record ? (image.triply_record['disconnect'] as []) : []
  const triplyRecordIdsToDisconnect = triplyRecordsToDisconnect.map(r => r.id)
  if (!linkedTriplyRecords.every(r => triplyRecordIdsToDisconnect.includes(r))) {
    throw new errors.ApplicationError(
      'Cannot connect story and triply record to carousel image at the same time'
    )
  }
}

async function checkIfAllCarouselImageStoriesAreRemovedOrThrow(
  strapi: Strapi,
  imageId: number,
  image: CarouselImage
) {
  const linkedStories = await getCarouselImageStories(strapi, imageId)
  if (!linkedStories) {
    return
  }

  const storiesToDisconnect = 'disconnect' in image.story ? (image.story['disconnect'] as []) : []
  const storyIdsToDisconnect = storiesToDisconnect.map(s => s.id)
  if (!linkedStories.every(s => storyIdsToDisconnect.includes(s))) {
    throw new errors.ApplicationError(
      'Cannot connect story and triply record to carousel image at the same time'
    )
  }
}

async function getCardTriplyRecords(strapi: Strapi, id: number) {
  const triplyRecords = await strapi.db.connection
    .select('triply_record_id')
    .from('components_core_grid_featured_fields_triply_record_links')
    .where({ grid_featured_fields_id: id })

  return triplyRecords?.map(r => parseInt(r.triply_record_id))
}

async function getCardStories(strapi: Strapi, id: number) {
  const stories = await strapi.db.connection
    .select('story_id')
    .from('components_core_grid_featured_fields_story_links')
    .where({ grid_featured_fields_id: id })

  return stories?.map(s => parseInt(s.story_id))
}

async function getCarouselImageTriplyRecords(strapi: Strapi, id: number) {
  const triplyRecords = await strapi.db.connection
    .select('triply_record_id')
    .from('components_core_carousel_images_triply_record_links')
    .where({ carousel_image_id: id })

  return triplyRecords?.map(r => r.triply_record_id)
}

async function getCarouselImageStories(strapi: Strapi, id: number) {
  const stories = await strapi.db.connection
    .select('story_id')
    .from('components_core_carousel_images_story_links')
    .where({ carousel_image_id: id })

  return stories?.map(s => parseInt(s.story_id))
}
