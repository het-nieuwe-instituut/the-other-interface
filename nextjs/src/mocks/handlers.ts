import { setupServer } from 'msw/node'
import { mockHomepageQuery } from 'src/generated/graphql'
import { aComponentModulesTextModule, aHomepage, aHomepageEntityResponse } from './generated-mocks'

export const mockServer = setupServer(
    mockHomepageQuery((req, res, ctx) => {
            console.log('whoop')
        const mocks = {
            data: {
                id: '1',
                attributes: {
                    ...aHomepage({
                        components: [{ __typename: 'ComponentModulesTextModule' as const, ...aComponentModulesTextModule() }],
                        localizations: {
                            data: []
                        }
                    }),
                }
            }
        }
        return res(
            ctx.data({ __typename: 'Query', homepage: mocks })
        )
    })
)

// mockHelloQuery((req, res, ctx) => {
//     return res(
//         ctx.data({
//             hello: aQuery().hello,
//         })
//     )
// })
