This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Codegen

Codegen enables us to generate a bunch of stuff that we can use in our codebase, like:

-   typescript types
-   mock data
-   msw functions

Yoiu will have 2 options for running codegen:

### 1. Codegen in vscode

If you directly open the `/nextjs` folder in a vscode window, then it should be possible to use [VScode grapql codegen](https://marketplace.visualstudio.com/items?itemName=capaj.graphql-codegen-vscode). This extension will run codegen for you on every save of a file with an `.graphql` extension. This can be handy to have direct feedback when the codegen command fails. If you use another editor then option 2 would be better for you

### 2. Run codegen with nodemon

You can run `npm run codegen:watch` to automatically run codegen on every save of a file with the `.graphql`

## Testing

### Mock service worker

Mock service worker will intercept any calls that are made and will return a specified value. This will reduce the amount of `jest.mock` functions we have to write and the implementation will more in line wit the real world, because we are doing a real call in the end.

How to use Mock service worker:
All calls will have generated mock data and a handler that you can use in your tests.

What is a handler?:
this is generated by codegen

```
export const mockHelloQuery = (resolver: ResponseResolver<GraphQLRequest<HelloQueryVariables>, GraphQLContext<HelloQuery>, any>) =>
  graphql.query<HelloQuery, HelloQueryVariables>(
    'hello',
    resolver
  )

```

This will automatically type and setup things required for defining a query/mutation. Want to know more about how msw handles this? please refer to the [docs](https://mswjs.io/docs/getting-started/mocks/graphql-api)

How does the MockData work:
this is generated by codegen

```

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        hello: overrides && overrides.hasOwnProperty('hello') ? overrides.hello! : 'explicabo',
    }
}
```

A function will be generated that returns some mock data, the auto generated mock data can be jibberish and may not always be usable. To avoid that you can provide overrides within the argument of the function

```
// use the auto mocked values
aQuery()

// override values
aQuery({
    hello: 'Hola!'
})
```

Always try to use these mocks because this is always strongly typed and can avoid errors

Where to add handlers:
handlers can be added to the setupServer instance in `src/mocks/handlers`

```
export const mockServer = setupServer(
    mockHelloQuery((req, res, ctx) => {
        return res(
            ctx.data({
                hello: aQuery().hello,
            })
        )
    })
)
```

or directly in a testsuite to change the result you want

```
import {mockServer} from '...'

it('should work', () => {
    mockServer.use(
        mockHelloQuery((req, res, ctx) => {
            return res(
                ctx.data({
                    hello: aQuery().hello,
                })
            )
        })
    )
})
```

## Translations

Currently we use next-translate to handle our translations, but we abstract it away in our own utility functions/hooks, so we can switch libraries out more easily later. these utilities can be found in the `/common` folder

#### How to add new translations to a screen

When you want to add a translation domain to a screen then you should add it to `i18n.json` file in root

```
{
    ...
    "pages": {
        "*": ["common"],
        "/": ["filters"]
    }
}
```

This will make sure that only the translations files that we actually need are provided to a page

the strings represent the filenames used in the /locales folder

```
locales/
┣ en/
┃ ┣ common.json
┃ ┗ filters.json
┣ nl/
┃ ┣ common.json
┃ ┗ filters.json
┗ locales.ts
```

#### How to add new translations domains

not all translations are common and may only be used in one domain, like blog. there are a few steps you need to take to do this:

```
{
    ...
    "pages": {
        "*": ["common"],
        "/": ["filters"]
        "/article": ["blog"] <--- add this line if
    }
}
```

and

```
locales/
┣ en/
┃ ┣ common.json
┃ ┣ filters.json
┃ ┗ blog.json <--- add file here
┣ nl/
┃ ┣ common.json
┃ ┣ filters.json
┃ ┗ blog.json <--- add file here
┗ locales.ts
```

#### How to consume translations in React

```
import { useTypeSafeTranslation } from 'src/common/hooks/translations'

const Home: NextPage = () => {
    const { t, lang } = useTypeSafeTranslation('common')
    const example = t('commonTest', { count: 12 })

    return (
        <div className={styles.container}>
            {example}
        </div>
    )
}
```

#### How to consume translations outside of react

```
import { getTranslation } from 'src/common/utils/translations'

async function test() {
    const t = await getTranslation('nl', 'common')
    console.log(t('commonTest'))
}

test()
```

#### Typesafe translations

Some manual action is needed to keep Typesafe translations utilities. When you add a new domain to the locales folder, then you should also add a new entry to the `/locales/locales.ts` file

```
import { Paths } from 'src/common/utils/translations'
import common from './en/common.json'
import filters from './en/filters.json' <---- import it here

export type TranslationKeys = {
    common: Paths<typeof common>
    filters: Paths<typeof filters> <---- add it here
}

```
