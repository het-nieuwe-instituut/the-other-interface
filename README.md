# hni-toi

# Getting started

Make sure to open the `hni-toi.code-workspace` file in the root of the project so all your folders are configured correctly.
If you use any other editors than VSCode, make sure all your folders work correctly with eslint, prettier and husky.

For husky, make sure to run `npm run prepare`

## Using iTermocil

If you use iTerm2, then you can use [iTermocil](https://github.com/TomAnthony/itermocil) to run all the startup commands at once:

- Make sure the right nodejs version is the default, so new iTerm windows will use the right one: `nvm alias default 16.15.1`
- Run iTermocil in the project root directory: `npm i && npm run start`

> Note: Our standard iTermocil layout is configured in `itermocil.yml`. You can create an `itermocil.custom.yml` file to override our default layout.

## Strapi backend

- Install nodejs v16.15.1 (run `nvm use` to automatically use this version if you have nvm installed).
- Run `npm install` in `./strapi` to install all packages.
- Run `npm run copyenv` in `./strapi` to generate environment variables.
- Run `npm run build`.
- Make sure the database is running. Run `npm run start-services` to start the database.
- Run `npm run develop` to start Strapi.

## Nestjs Gateway

- Install nodejs v16.15.1 (run `nvm use` to automatically use this version if you have nvm installed).
- Run `npm ci` in `./gateway-app` to install all packages.
- Run `npm run copyenv` in `./gateway-app` to create .env file from .env.example.
- Run `npm run start:debug` in `./gateway-app` to start the nestjs application.-

## Nextjs frontend

- Install nodejs v16.15.1 (run `nvm use` to automatically use this version if you have nvm installed).
- Run `npm ci` in `./nextjs` to install all packages.
- Make sure that Strapi is running.
- Run `npm run dev` to start the nextjs application.

## Database Data

It is highly recommended to use a sample dump of production strapi data during development. This can be obtained from other developers working on the project. Data should be sent through a secure messaging app such as Keybase. To restore the data use a GUI tool for relational databases such as [TablePlus](https://tableplus.com/). 

The following instructions assume you are using TablePlus.
1. Make sure the database is running. Run `npm run start-services` to start the database if it isn't.
2. Set up the connection in TablePlus. Create a postgreSQL database. See the database.ts file for setup details.
    - If you already have a database set up and have been creating your own content in strapi, this should be deleted before restoring. Selected all to delete (make sure to check Cascade) and then press cmd-s to save.
3. On the TablePlus main page click 'Restore'. Select the connection and database you wish to restore then click 'Start restore...'. Select the production dump in the window that is opened and click 'Start restore'. This may take a few minutes. 
    - Once the restore is complete, check the database in TablePlus. Even if there are errors, the restore may still have populated the tables.
4. The database should now be populated with production data. Go to http://localhost:3000/. You may need to restart strapi with `npm run develop` to see the data displayed on your browers.
5. Go to http://localhost:1337/admin/auth/login - you will need to add an Admin user to login. In the command line go to the strapi directory and run `npm run strapi admin:create-user --firstname=YourFirstName --lastname=YourLastName --email=YourEmail --password=NewPassword` filling in the firstname, lastname, email, and password. You will be prompted to re-enter this information. Select 'Yes' for 'Do you really want to create a new admin?'. Once this command has run, you can now log into the strapi admin as the user you created.

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
