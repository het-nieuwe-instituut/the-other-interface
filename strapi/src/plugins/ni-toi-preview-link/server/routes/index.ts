export default [
  {
    method: 'GET',
    path: '/preview-config',
    handler: 'myController.config',
    config: {
      policies: [],
    },
  },
]
