// Don't remove. This is an example of how we can customize the content manager part of strapi. Right now it's not used. But it's here for future reference.
const { getService } = require('@strapi/plugin-content-manager/server/utils')

module.exports = plugin => {
  //   // example of customizing a controller
  //   const controller = plugin.controllers['collection-types']
  //   controller.strapiFindOne = controller.findOne

  //   controller.findOne = async ctx => {
  //     const { model } = ctx.params
  //     const { body } = ctx.response

  //     return controller.strapiFindOne(ctx)
  //   }

  //   // Example of adding a middleware to a route
  //   const index = plugin.routes.admin.routes.findIndex(
  //     route => route.handler === 'collection-types.findOne'
  //   )
  //   const item = plugin.routes.admin.routes[index]
  //   item.config.middlewares = ['api::story.pupulate-triply-fill-from-another-locale']

  return plugin
}
