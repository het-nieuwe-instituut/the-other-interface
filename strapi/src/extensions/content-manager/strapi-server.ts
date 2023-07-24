const { getService } = require('@strapi/plugin-content-manager/server/utils')

module.exports = plugin => {
  const controller = plugin.controllers['collection-types']

  // Save the original create controller action
  controller.strapiCreate = controller.create
  controller.strapiFind = controller.findOne

  // extend action find
  controller.findOne = async ctx => {
    const { model } = ctx.params
    const { body } = ctx.request

    // console.log(ctx.params)
    // console.log(ctx.request)

    // if (model === 'api::story.story') {
    //   const data: Object = {}
    //   const story = await strapi.entityService.findOne('api::story.story', ctx.params.id, {
    //     populate: ['triplyRecords', 'locations', 'createdBy', 'updatedBy'],
    //   })

    //   if (story.triplyRecords !== undefined) {
    //     data['triplyRecords'] = story.triplyRecords
    //   }

    //   //   if (story.triplyRecords) {
    //   //     data['slug'] = event.params.data.slug
    //   //   }

    //   console.log(story)
    //   console.log(data)

    //   const newData = await strapi.entityService.update('api::story.story', story.id, { data })
    //   console.log(newData)
    // }

    return controller.strapiFind(ctx)
  }

  return plugin
}
