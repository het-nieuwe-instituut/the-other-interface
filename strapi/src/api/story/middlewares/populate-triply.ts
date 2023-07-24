export default (options, { strapi }) => {
  return async (ctx, next, third) => {
    console.log(third)
    console.log({
      options: options,
    })
    await next()

    const story = await strapi.entityService.findOne(
      'api::story.story',
      ctx.response.body.localizations[0].id,
      {
        populate: ['triplyRecords'],
      }
    )

    console.log(story)

    // console.log(ctx.request.header)
    // console.log(ctx.request.params)
    console.log(ctx.response.body)
    // We can populate here notLocalizedFields with triplyRecords, and when we add it it will be always awailable
    ctx.response.body = {
      ...ctx.response.body,
      nonLocalizedFields: {
        ...ctx.response.body.nonLocalizedFields,
        triplyRecords: story.triplyRecords,
      },
    }
    strapi.log.info('here')
  }
}
