import { mockedClient } from '@/features/graphql/config/mockedApollo'
import { renderWithProviders } from '@/features/shared/utils/test-utils'
import { mockHomepageQuery } from 'src/generated/graphql'
import { aComponentModulesTextModule } from 'src/mocks/generated-mocks'
import { mockServer } from 'src/mocks/handlers'
import { HomepageContainer } from './HomepageContainer'

describe('hello', () => {
    afterEach(() => {
        mockedClient.clearStore()
    })
    it('should load and display hello', async () => {
        const { findByText, getByText } = renderWithProviders(<HomepageContainer />)

        getByText('loading')
        await findByText(aComponentModulesTextModule().Richtext ?? '')
    })

    it('should display error', async () => {
        mockServer.use(
            mockHomepageQuery((req, res, ctx) => {
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
        const { findByText, getByText } = renderWithProviders(<HomepageContainer />)

        getByText('loading')
        await findByText('Not authenticated')
    })
})
