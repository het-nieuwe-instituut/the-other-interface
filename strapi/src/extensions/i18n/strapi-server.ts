module.exports = plugin => {
  const controller = plugin.controllers['content-types']
  const middlewares = plugin.middlewares

  const index = plugin.routes.admin.routes.findIndex(
    route => route.handler === 'content-types.getNonLocalizedAttributes'
  ) // 0
  const item = plugin.routes.admin.routes[index]

  // plugin.config = {
  //   ...plugin.config,
  //   middlewares: ['api::story.populate-triply'],
  // }
  // plugin.middlewares = {
  //   'content-types.getNonLocalizedAttributes': {
  //     middlewares: [
  //       (ctx, next) => {
  //         console.log('something')
  //         strapi.log.info('here')
  //         return next()
  //       },
  //     ],
  //   },
  // }

  // plugin.middlewares = {
  //   'content-types.getNonLocalizedAttributes': {
  //     middlewares: ['api::story.populate-triply'],
  //   },
  // }

  item.config.middlewares = ['api::story.populate-triply']

  controller.strapiGet = controller.getNonLocalizedAttributes

  controller.getNonLocalizedAttributes = async (ctx, payload, third, four, five) => {
    // console.log({ request: ctx.req })
    // console.log(third, 'third')
    // console.log(four, 'four')
    // console.log(five, 'five')
    // console.log(payload)
    // console.log(ctx)
    // const data = await controller.strapiGet(ctx)
    // console.log(data)

    // const triplyRecords = [
    //   {
    //     id: 24,
    //     recordId: '1008',
    //     type: 'Object',
    //     createdAt: '2023-07-11T11:58:18.193Z',
    //     updatedAt: '2023-07-23T03:00:04.553Z',
    //     publishedAt: null,
    //     label: 'MAQV1093 Star House One (1008/Object)',
    //   },
    // ]

    // return {
    //   nonLocalizedFields: {
    //     slug: 'new',
    //     triplyRecords,
    //   },
    //   localizations: [
    //     {
    //       id: 57,
    //       locale: 'nl',
    //       publishedAt: null,
    //     },
    //   ],
    // }

    // controller
    //   .strapiGet(ctx)
    //   .then((data, second, third) => {
    //     console.log(data, second, third)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    return controller.strapiGet(ctx)
  }

  return plugin
}
