import '@strapi/strapi'
import { Strapi } from '@strapi/strapi'

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀'
  },
  getConfig() {
    return {
      clientPreviewUrl: process.env.STRAPI_ADMIN_CLIENT_FRONTEND_PREVIEW_URL,
      clientPreviewSecret: process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET,
    }
  },
})
