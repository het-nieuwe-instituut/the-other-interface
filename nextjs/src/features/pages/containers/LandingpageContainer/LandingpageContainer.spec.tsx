import { mockedClient } from '@/features/graphql/config/mockedApollo'
import { renderWithProviders } from '@/features/shared/utils/test-utils'
import { mockLandingpageBySlugQuery } from 'src/generated/graphql'
import { mockServer } from 'src/mocks/handlers'
import { LandingpageContainer } from './LandingpageContainer'

describe('LandingpageContainer', () => {
    afterEach(() => {
        mockedClient.clearStore()
    })
    it('should load and display hello', async () => {
        const { findByText, getByText } = renderWithProviders(<LandingpageContainer slug="objects" />)

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
        const { findByText, getByText } = renderWithProviders(<LandingpageContainer slug="objects" />)

        getByText('loading')
        await findByText('Not authenticated')
    })
})
