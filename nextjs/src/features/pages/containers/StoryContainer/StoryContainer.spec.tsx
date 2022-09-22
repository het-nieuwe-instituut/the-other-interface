import { mockedClient } from '@/features/graphql/config/mockedApollo'
import { renderWithProviders } from '@/features/shared/utils/test-utils'
import { mockStoryBySlugQuery } from 'src/generated/graphql'
import { aComponentModulesTextModule } from 'src/mocks/generated-mocks'
import { mockServer } from 'src/mocks/handlers'
import { StoryContainer } from './StoryContainer'
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
describe('StoryContainer', () => {
    afterEach(() => {
        mockedClient.clearStore()
    })
    it('should load and display hello', async () => {
        const { findByText, getByText } = renderWithProviders(<StoryContainer />)

        getByText('loading')
        await findByText(aComponentModulesTextModule().Richtext ?? '')
    })

    it('should display error', async () => {
        mockServer.use(
            mockStoryBySlugQuery((req, res, ctx) => {
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
        const { findByText, getByText } = renderWithProviders(<StoryContainer />)

        getByText('loading')
        await findByText('Not authenticated')
    })
})
