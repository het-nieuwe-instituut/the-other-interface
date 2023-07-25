export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/preview-config',
    handler: 'myController.config',
    config: {
      policies: [],
    },
  },
]
