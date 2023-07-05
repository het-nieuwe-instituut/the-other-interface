/**
 *  story controller
 */
import { factories } from '@strapi/strapi'

const {
  constants: { DP_PUB_STATE_LIVE },
} = require('@strapi/utils').contentTypes

// https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#adding-a-new-controller
export default factories.createCoreController('api::story.story', ({ strapi }) => ({
  async findOneBySlug(ctx) {
    // slug will be set when using REST API
    // _slug will be set when using Graphql API
    const { slug, _slug } = ctx.params

    const whereSlug = slug || _slug

    const entity = await strapi.query('story').findOne({
      where: { Slug: whereSlug, _publicationState: DP_PUB_STATE_LIVE },
    })

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  },
}))
