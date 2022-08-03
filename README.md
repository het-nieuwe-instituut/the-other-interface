# hni-toi

# Getting started

## Using iTermocil

If you use iTerm2, then you can use [iTermocil](https://github.com/TomAnthony/itermocil) to run all the startup commands at once:

- Make sure the right nodejs version is the default, so new iTerm windows will use the right one: `nvm alias default 16.15.1`
- Run iTermocil in the project root directory: `npm i && npm run start`

> Note: Our standard iTermocil layout is configured in `itermocil.yml`. You can create an `itermocil.custom.yml` file to override our default layout.

## Strapi backend

- TODO

## Nestjs Gateway

- TODO

## Nextjs frontend

- Install nodejs v16.15.1 (run `nvm use` to automatically use this version if you have nvm installed).
- Run `npm ci` in `./nextjs` to install all packages.
- Make sure that Strapi is running.
- Run `npm run dev` to start the nextjs application.

---

# Strapi backend

## Initial project setup

Initital setup was done using this command:

- `npx create-strapi-app strapi` https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project

## Configuration

- TODO


## Insomnia (API client)

We use [Insomnia](https://insomnia.rest/) as API client, to test our graphql API. An export of our Insomnia workspace/collection is available in the `Insomnia.json` file in this git repo. Use the import feature in Insomnia to import the collection.

## Some more strapi resources

- Release from dev to prod https://forum.strapi.io/t/how-to-release-from-dev-to-stage-prd/2790
- Import/export content plugin https://www.npmjs.com/package/strapi-plugin-import-export-content
- Production Docker container: https://github.com/strapi/strapi-docker#how-to-use-strapibase
- Uploads storage plugins: https://www.npmjs.com/search?q=strapi-provider-upload-&ranking=popularity
- S3 storage permissions: https://bleepcoder.com/strapi/439462189/strapi-provider-upload-aws-s3-upload-send-region-null

# Infrastructure

- TODO

