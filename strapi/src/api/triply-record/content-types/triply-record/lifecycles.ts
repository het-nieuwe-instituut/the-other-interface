export default {
  async beforeCreate(event) {
    if (event.params.data.recordId && event.params.data.type) {
      event.params.data.label = await strapi
        .service('api::triply-record.triply-record')
        .getLabel(event.params.data)
    }
  },

  async beforeUpdate(event) {
    if (event.params.data.recordId && event.params.data.type) {
      event.params.data.label = await strapi
        .service('api::triply-record.triply-record')
        .getLabel(event.params.data)
    }
  },
}
