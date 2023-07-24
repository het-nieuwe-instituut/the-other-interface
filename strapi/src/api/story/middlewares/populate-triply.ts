export default (options, { strapi }) => {
  return async (ctx, next, third) => {
    console.log(third)
    console.log({
      options: options,
    })
    await next()

    console.log(ctx.request.header)
    console.log(ctx.request.params)
    console.log(ctx.response.body)
    strapi.log.info('here')
  }
}
