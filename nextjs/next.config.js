/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextTranslate(nextConfig)
