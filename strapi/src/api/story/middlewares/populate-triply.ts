const storyApi = 'api::story.story'

export default (options, { strapi }) => {
  return async (ctx, next) => {
    await next()

    if (ctx.request.body.model === storyApi) {
      const story = await strapi.entityService.findOne(storyApi, ctx.request.body.id, {
        populate: ['triplyRecords', 'author'],
      })

      ctx.response.body = {
        ...ctx.response.body,
        nonLocalizedFields: {
          ...ctx.response.body.nonLocalizedFields,
          triplyRecords: story.triplyRecords,
          author: story.author,
        },
      }
    }
  }
}
