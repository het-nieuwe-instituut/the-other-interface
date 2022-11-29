/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const { parsed } = require('dotenv').config({ path: `.env.${process.env.ENV}` })

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
        localeDetection: false,
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
    env: {
        parsed,
    },
}

module.exports = nextTranslate(nextConfig)
