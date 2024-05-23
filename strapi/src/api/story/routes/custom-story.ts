export default {
  routes: [
    {
      method: 'GET',
      path: '/stories',
      handler: 'story.find',
    },
    {
      method: 'GET',
      path: '/stories/:id',
      handler: 'story.findOne',
    },
    {
      method: 'GET',
      path: '/stories',
      handler: 'story.find',
    },
    {
      method: 'GET',
      path: '/stories/slug/:slug',
      handler: 'story.findOneBySlug',
    },
  ],
}
