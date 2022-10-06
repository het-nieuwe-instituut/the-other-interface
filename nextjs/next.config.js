/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

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
    i18n: {
        locales: ['nl', 'en'],
        defaultLocale: 'nl',
    },
    output: 'standalone',
}

module.exports = nextTranslate(nextConfig)
