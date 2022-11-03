import slugify from 'slugify'

export default {
    async beforeCreate(event) {
        if (event.params.data.title) {
            event.params.data.slug = slugify(event.params.data.title, {
                lower: true,
            })
        }
    },

    async beforeUpdate(event) {
        if (event.params.data.title) {
            event.params.data.slug = slugify(event.params.data.title, {
                lower: true,
            })
        }
    },
}
