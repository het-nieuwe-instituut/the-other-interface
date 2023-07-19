// Path: ./src/admin/webpack.config.js
'use strict'

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(
    new webpack.DefinePlugin({
      CUSTOM_VARIABLES: {
        CLIENT_FRONTEND_PREVIEW_URL: JSON.stringify(process.env.CLIENT_FRONTEND_PREVIEW_URL),
        CLIENT_PREVIEW_SECRET: JSON.stringify(process.env.CLIENT_PREVIEW_SECRET),
      },
    })
  )
  return config
}
