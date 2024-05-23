import '@strapi/strapi'
import { Strapi } from '@strapi/strapi'

export default ({ strapi }: { strapi: Strapi }) => ({
  config(ctx) {
    ctx.body = strapi.plugin('ni-toi-preview-link').service('myService').getConfig()
  },
})
