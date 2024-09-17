module.exports = {
  async up(knex) {
    return knex.transaction(async trx => {
      try {
        // check if the stories_authors_links table exists
        const tableExists = await trx.schema.hasTable('stories_authors_links')
        // and if it doesn't create it and set up all the fields
        if (!tableExists) {
          await trx.schema.createTable('stories_authors_links', table => {
            table.increments('id').primary()
            table
              .integer('story_id')
              .notNullable()
              .references('id')
              .inTable('stories')
              .onDelete('CASCADE')
            table
              .integer('author_id')
              .notNullable()
              .references('id')
              .inTable('authors')
              .onDelete('CASCADE')
            table.integer('author_order')
          })
        }

        // get the stories_author_links table
        const storyAuthorLinks = await trx.select('*').from('stories_author_links')

        // loop over each one and add a default author_order of 1
        for (let row of storyAuthorLinks) {
          delete row['id']
          row['author_order'] = 1
        }

        // insert all the rows into the new table
        await knex('stories_authors_links').insert(storyAuthorLinks)
      } catch (error) {
        console.log('MIGRATION FAILED')
        console.error(error)
        throw error
      }
    })
  },

  async down(knex) {},
}
