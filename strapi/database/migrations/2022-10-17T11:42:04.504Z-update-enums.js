// Example from https://docs.strapi.io/developer-docs/latest/developer-resources/database-migrations.html#creating-a-migration-file
module.exports = {
    async up(knex) {
        await knex.from('triply_records').update({ type: 'Archive' }).where({ type: 'archive' })
        await knex.from('triply_records').update({ type: 'Media' }).where({ type: 'media' })
        await knex.from('triply_records').update({ type: 'Object' }).where({ type: 'object' })
        await knex.from('triply_records').update({ type: 'People' }).where({ type: 'people' })
        await knex.from('triply_records').update({ type: 'Publication' }).where({ type: 'publication' })
        
        await knex.from('components_modules_buttons_modules').update({ button_style: 'Default' }).where({ button_style: 'default' })
        await knex.from('components_modules_buttons_modules').update({ button_style: 'Large' }).where({ button_style: 'large' })
        
        await knex.from('components_core_publication_dates').update({ display_type: 'Date' }).where({ display_type: 'date' })
        await knex.from('components_core_publication_dates').update({ display_type: 'Year' }).where({ display_type: 'year' })
        
        await knex.from('components_core_module_layouts').update({ spacing_top: 'Lg' }).where({ spacing_top: 'lg' })
        await knex.from('components_core_module_layouts').update({ spacing_top: 'Md' }).where({ spacing_top: 'md' })
        await knex.from('components_core_module_layouts').update({ spacing_top: 'Sm' }).where({ spacing_top: 'sm' })
        await knex.from('components_core_module_layouts').update({ spacing_top: 'Xl' }).where({ spacing_top: 'xl' })
        
        await knex.from('components_core_module_layouts').update({ spacing_bottom: 'Lg' }).where({ spacing_bottom: 'lg' })
        await knex.from('components_core_module_layouts').update({ spacing_bottom: 'Md' }).where({ spacing_bottom: 'md' })
        await knex.from('components_core_module_layouts').update({ spacing_bottom: 'Sm' }).where({ spacing_bottom: 'sm' })
        await knex.from('components_core_module_layouts').update({ spacing_bottom: 'Xl' }).where({ spacing_bottom: 'xl' })
    },
}
