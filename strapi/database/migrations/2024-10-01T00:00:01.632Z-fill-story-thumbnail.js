module.exports = {
  async up(knex) {
    return knex.transaction(async trx => {
      try {
        //get all the stories
        const stories = await trx.select('*').from('stories')

        // loop over each story
        for (let story of stories) {
          // check if there is a thumbnail
          const thumbnail = await trx
            .select('*')
            .from('stories_components')
            .where({ entity_id: story.id, component_type: 'core.image-thumbnail' })

          // if no thumbnail continue with adding
          if (thumbnail.length === 0) {
            // for each story get all the image components

            const imageComponents = await trx
              .select('*')
              .from('stories_components')
              .where({ entity_id: story.id, component_type: 'modules.image' })

            // check if there are any image components
            if (imageComponents.length > 0) {
              // sort by order
              const sortedImageComponents = imageComponents.sort((a, b) => a.order - b.order)

              // get the image with the lowest order
              const firstImage = sortedImageComponents[0]

              // get the file_id of the first image
              const fileIdArray = await trx.select('file_id').from('files_related_morphs').where({
                related_type: 'modules.image',
                related_id: firstImage.component_id,
              })

              // check that there is a file id
              if (fileIdArray.length > 0) {
                const fileId = fileIdArray[0].file_id

                // add to components_core_image_thumbnails - create new, alt_text = thumbnail and return id
                // the componentsCoreImageThumbnailsId in components_core_image_thumbnails links the files_related_morphs and stories_components
                const componentsCoreImageThumbnails = await knex('components_core_image_thumbnails')
                  .insert({ alt_text: 'thumbnail' })
                  .returning('id')

                const componentsCoreImageThumbnailsId = componentsCoreImageThumbnails[0].id

                // add to files_related_morphs
                await knex('files_related_morphs')
                  .insert({
                    file_id: fileId,
                    related_id: componentsCoreImageThumbnailsId,
                    related_type: 'core.image-thumbnail',
                    field: 'imageThumbnail',
                    order: 1,
                  })
                  .returning('id')

                // update stories_components with new thumbnail image
                await knex('stories_components').insert({
                  entity_id: story.id,
                  component_id: componentsCoreImageThumbnailsId,
                  component_type: 'core.image-thumbnail',
                  field: 'thumbnail',
                  order: null,
                })
              }
            }
          }
        }
      } catch (error) {
        console.log('MIGRATION FAILED')
        console.error(error)
        throw error
      }
    })
  },

  async down(knex) {},
}
