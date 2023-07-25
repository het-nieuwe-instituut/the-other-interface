const storyApi = 'api::story.story'

export default (options, { strapi }) => {
  return async (ctx, next) => {
    await next()

    if (ctx.request.body.model === storyApi) {
      console.log('after')
      const story = await strapi.entityService.findOne(storyApi, ctx.request.body.id, {
        populate: ['triplyRecords'],
      })

      ctx.response.body = {
        ...ctx.response.body,
        nonLocalizedFields: {
          ...ctx.response.body.nonLocalizedFields,
          triplyRecords: story.triplyRecords,
        },
      }
    }
  }
}
