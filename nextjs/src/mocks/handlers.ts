import { setupServer } from 'msw/node'
import { mockHomepageQuery, mockLandingpageBySlugQuery, mockStoryBySlugQuery } from 'src/generated/graphql'
import { aComponentModulesTextModule, aHomepage, aHomepageEntityResponse, aLandingpage, aStory } from './generated-mocks'

export const mockServer = setupServer(
    mockHomepageQuery((req, res, ctx) => {
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
    }),
    mockLandingpageBySlugQuery((req, res, ctx) => {
        const mocks = {
            data: [{
                id: '1',
                attributes: {
                    ...aLandingpage({
                        components: [{ __typename: 'ComponentModulesTextModule' as const, ...aComponentModulesTextModule() }],
                        localizations: {
                            data: []
                        }
                    }),
                }
            }]
        }
        return res(
            ctx.data({ __typename: 'Query', landingpages: mocks })
        )
    }),
    mockStoryBySlugQuery((req, res, ctx) => {
        const mocks = {
            data: [{
                id: '1',
                attributes: {
                    ...aStory({
                        components: [{ __typename: 'ComponentModulesTextModule' as const, ...aComponentModulesTextModule() }],
                        localizations: {
                            data: []
                        }
                    }),
                }
            }]
        }
        return res(
            ctx.data({ __typename: 'Query', stories: mocks })
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
