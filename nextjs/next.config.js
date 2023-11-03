/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const env = require('dotenv').config({
  path: `.env.${process.env.NEXT_PUBLIC_ENV ?? 'production'}`,
})
const parsed = env.parsed

const nextConfig = {
  webpack(config) {
    config.externals = [...config.externals, 'canvas', 'bufferutil', 'utf-8-validate']

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    localeDetection: false,
  },
  images: {
    domains: [
      'hni-toi-test-api.lifely.nl',
      'localhost',
      'hni-toi-staging.s3.eu-central-1.amazonaws.com',
      'hni-toi-acceptance.s3.eu-central-1.amazonaws.com',
      'hni-toi-production.s3.eu-central-1.amazonaws.com',
      'picsum.photos',
    ],
  },
  output: 'standalone',
  env: {
    parsed,
  },
}

module.exports = nextTranslate(nextConfig)
