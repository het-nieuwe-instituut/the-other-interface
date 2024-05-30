/**
 * `componentValidator` middleware
 */

import { Strapi } from '@strapi/strapi'
import { CoreStandAloneLink } from '../../types/generated/components'
import { errors } from '@strapi/utils'

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In componentValidator middleware.')

    const { method, url, body } = ctx.request
    const contentManagementUrls = [
      '/content-manager/collection-types/api::',
      '/content-manager/single-types/api::',
    ]

    if (!['POST', 'PUT'].includes(method) || !contentManagementUrls.some(c => url?.startsWith(c))) {
      await next()
      return
    }

    const standAloneLinks = body?.components?.filter(c => {
      return c?.__component === 'core.stand-alone-link'
    })

    try {
      standAloneLinks?.forEach(validateStandAloneLinkOrThrow)
    } catch (error) {
      return ctx.throw(400, error.message)
    }

    await next()
  }
}

function validateStandAloneLinkOrThrow(component: Partial<CoreStandAloneLink['attributes']>) {
  if (!component.url || !component.attachment) {
    throw new errors.ApplicationError('Stand alone link must have either a url or attachment')
  }
}
