'use strict'

module.exports = {
  /**
   * Operations to be performed
   * 1. start the CMS with this migration commented out
   * 2. uncomment this migration
   * 3. remove the migration entry from the database
   * 4. restart the CMS to trigger the migration
   * 5. validate the migration
   *    - check that the image carousel images were removed & added to the items field
   * 6. do another deploy that removes the image carousel images from the component
   */
  async up(knex) {
    /**
     * insert components_core_image_carousel_items (ici)
     * - id: fr.related_id
     * - alt_text: image
     * - url: null
     *
     * insert components_modules_image_carousels_components
     * - id: default
     * - entity_id: fr.related_id
     * - component_id: ici.id
     * - component_type: core.image-carousel-item
     * - field: items
     * - order: fr.order
     *
     * update files_related_morphs
     * - related_id: ici.id
     * - related_type: core.image-carousel-item
     * - field: image
     */
    // const fileRelated = await knex.raw(
    //   `
    //   SELECT fr.* FROM stories_components sc
    //   INNER JOIN components_modules_image_carousels ic ON ic.id = sc.component_id
    //   INNER JOIN files_related_morphs fr ON fr.related_id = ic.id
    //   WHERE sc.component_type = 'modules.image-carousel'
    //   AND fr.related_type = 'modules.image-carousel'
    //   GROUP BY fr.id, ic.id;
    //   `
    // )
    // for (const fr of fileRelated.rows) {
    //   const [ici] = await knex('components_core_image_carousel_items')
    //     .insert({ alt_text: 'image' })
    //     .returning('*')
    //   await knex('components_modules_image_carousels_components').insert({
    //     entity_id: fr.related_id,
    //     component_id: ici.id,
    //     component_type: 'core.image-carousel-item',
    //     field: 'items',
    //     order: fr.order,
    //   })
    //   await knex('files_related_morphs')
    //     .update({
    //       related_id: ici.id,
    //       related_type: 'core.image-carousel-item',
    //       field: 'image',
    //     })
    //     .where({ id: fr.id })
    // }
  },
}
