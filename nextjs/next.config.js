/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
require('dotenv').config({ path: `.env.${process.env.ENV}` })

const nextConfig = {
    webpack(config) {
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
        localeDetection: false
    },
    images: {
        domains: [
            'hni-toi-staging-api.lifely.nl',
            'localhost',
            'hni-toi-staging.s3.eu-central-1.amazonaws.com',
            'hni-toi-acceptance.s3.eu-central-1.amazonaws.com',
            'hni-toi-production.s3.eu-central-1.amazonaws.com',
        ],
    },
    output: 'standalone',
    serverRuntimeConfig: {
        NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL,
    },
    env: {
        NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL,
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        NEXT_PUBLIC_DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
        NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    }
}

module.exports = nextTranslate(nextConfig)
