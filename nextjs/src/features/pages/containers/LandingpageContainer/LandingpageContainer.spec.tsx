import { mockedClient } from '@/features/graphql/config/mockedApollo'
import { renderWithProviders } from '@/features/shared/utils/test-utils'
import { mockLandingpageBySlugQuery } from 'src/generated/graphql'
import { mockServer } from 'src/mocks/handlers'
import { LandingpageContainer } from './LandingpageContainer'
jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {
                locale: 'nl',
                query: {
                    slug: 'test',
                },
            },
            asPath: '',
        }
    },
}))
describe('LandingpageContainer', () => {
    afterEach(() => {
        mockedClient.clearStore()
    })
    it('should load and display hello', async () => {
        const { findByText, getByText } = renderWithProviders(<LandingpageContainer />)

        getByText('loading')
        await findByText('incidunt')
    })

    it('should display error', async () => {
        mockServer.use(
            mockLandingpageBySlugQuery((req, res, ctx) => {
                return res(
                    ctx.errors([
                        {
                            message: 'Not authenticated',
                            errorType: 'AuthenticationError',
                        },
                    ])
                )
            })
        )
        const { findByText, getByText } = renderWithProviders(<LandingpageContainer />)

        getByText('loading')
        await findByText('Not authenticated')
    })
})
