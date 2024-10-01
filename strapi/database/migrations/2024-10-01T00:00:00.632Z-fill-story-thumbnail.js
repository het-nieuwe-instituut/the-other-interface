module.exports = {
  async up(knex) {
    return knex.transaction(async trx => {
      try {
        // get all the stories
        // const stories = await trx.select('*').from('stories')
        // // loop over each story
        // for (let story of stories) {
        // // for each story get all the components
        // const components = await trx.select('*').from('stories_components').where({ entity_id: story.id })
        // // find all the image components and sort by order
        // const imageComponents = components.filter(component => component.component_type === 'modules.image').sort((a, b) => a.order - b.order)
        // console.log('IMAGECOMPONENTS', imageComponents)
        // // get the image with the lowest order
        // const firstImage = imageComponents[0]
        // console.log('FIRSTIMAGE', firstImage)
        // // use this image to fill the thumbnail
        // await knex('stories_components')
        // .update({
        // })
        // await knex('components_core_image_thumbnails')
        // .update({
        // })
        // }
        //   // check if the stories_authors_links table exists
        //   const tableExists = await trx.schema.hasTable('stories_authors_links')
        //   // and if it doesn't create it and set up all the fields
        //   if (!tableExists) {
        //     await trx.schema.createTable('stories_authors_links', table => {
        //       table.increments('id').primary()
        //       table
        //         .integer('story_id')
        //         .notNullable()
        //         .references('id')
        //         .inTable('stories')
        //         .onDelete('CASCADE')
        //       table
        //         .integer('author_id')
        //         .notNullable()
        //         .references('id')
        //         .inTable('authors')
        //         .onDelete('CASCADE')
        //       table.integer('author_order')
        //     })
        //   }
        //   const newStoryAuthorLinks = await trx.select('*').from('stories_authors_links')
        //   if (newStoryAuthorLinks.length === 0) {
        //     // get the stories_author_links table
        //     const storyAuthorLinks = await trx.select('*').from('stories_author_links')
        //     // loop over each one and add a default author_order of 1
        //     for (let row of storyAuthorLinks) {
        //       delete row['id']
        //       row['author_order'] = 1
        //     }
        //     // insert all the rows into the new table
        //     await knex('stories_authors_links').insert(storyAuthorLinks)
        //   }
      } catch (error) {
        console.log('MIGRATION FAILED')
        console.error(error)
        throw error
      }
    })
  },

  async down(knex) {},
}
