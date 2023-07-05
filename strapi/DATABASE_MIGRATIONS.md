# Database migrations

See Strapi docs for general info about migrations: https://docs.strapi.io/developer-docs/latest/developer-resources/database-migrations.html

### Create a database migration

File format is `2022-10-17T11:00:00.000Z-name-of-my-migration.js` (adapted from the docs that say `2022.05.10T00.00.00.name-of-my-migration.js`) and the file should be created in the `strapi/database/migrations` directory. We adapted the format because it easier to generate the date.

Create the date with:

```
node -e "console.log((new Date()).toISOString())"
```

Then manually create the file. Note that we can't use Typescript files, must be Javascript.
