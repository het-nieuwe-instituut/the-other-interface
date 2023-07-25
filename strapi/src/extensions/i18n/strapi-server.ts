module.exports = plugin => {
  const middlewares = plugin.middlewares

  // getNonLocalizedAttributes is a name of i18n handler which return non-localized fields when you create a draft localization
  const index = plugin.routes.admin.routes.findIndex(
    route => route.handler === 'content-types.getNonLocalizedAttributes'
  )
  const item = plugin.routes.admin.routes[index]

  item.config.middlewares = ['api::story.populate-triply']

  return plugin
}
