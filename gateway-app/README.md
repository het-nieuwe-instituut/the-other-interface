# Gateway App

A gateway app built on [Nest](https://github.com/nestjs/nest) that handles various technical requirements.

<br />

## Stiching Strapi's schema with data from TriplyDB

Basically the approach is no different than a usual nestjs graphql app with a db. Instead of resolving through the db, the data is requested from Strapi and/or TriplyDB. The nestjs object types & resolvers still need to manually declared with the types for the Strapi data being enforced via codegen. For TriplyDB however, the response types will need to be cast.

The current approach revolves around:

- creating an `ObjectType` with fields from Strapi and/or TriplyDB
- generating a typed Strapi SDK
- querying/resolving Strapi `ObjectType`/fields through the generated SDK
- querying/resolving TriplyDB `ObjectType`/fields through its api
  - type casting & parsing the received data (requires error handling & dynamic type verification)

### Some sample development flows:

- To add a new `ObjectType` based on Triply data:

  1. create the triply service method calling api for the new data (make sure to cache the call)
  2. add response type to cast
  3. add the `ObjectType` inside the appropriate module
  4. update the module's resolver(s) accordingly
  5. if the `ObjectType` has a related Strapi data, add & resolve the field

- To add a new `ObjectType` based on Strapi data:

  1. create a new graphql file in the appropriate module or update the existing graphql file for the new types/fields/fragments/queries/mutations
  2. run the `graphql-codegen` script
  3. add the `ObjectType` inside the appropriate module
  4. update the module's resolver(s) accordingly
  5. if the `ObjectType` has a related Triply data, add & resolve the field

- To update Triply `ObjectTypes`:

  1. locate & update the triply service method where the call to api is being made
  2. if needed, update the cast response type
  3. make sure update the nestjs types/resolvers accordingly

- To update Strapi `ObjectTypes`:
  1. locate & update the `.graphql` where the types/fields/fragments/queries/mutations
  2. run the `graphql-codegen` script
  3. make sure update the nestjs types/resolvers accordingly
