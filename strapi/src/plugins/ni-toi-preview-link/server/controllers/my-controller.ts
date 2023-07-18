import '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('ni-toi-preview-link')
      .service('myService')
      .getWelcomeMessage();
  },
});
