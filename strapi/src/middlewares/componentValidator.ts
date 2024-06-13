import { Strapi } from '@strapi/strapi'
import { CoreCarouselImage, CoreStandAloneLink } from '../../types/generated/components'
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
    const carouselImages = body?.components?.filter(c => c?.__component === 'core.carousel-image')

    try {
      standAloneLinks?.forEach(validateStandAloneLinkOrThrow)
      carouselImages?.forEach(validateCarouseImageOrThrow)
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
