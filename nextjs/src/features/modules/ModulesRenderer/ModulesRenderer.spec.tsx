import { DynamicComponentRenderer } from './ModulesRenderer'
import { aComponentModulesTextModule } from 'src/mocks/generated-mocks'
import { renderWithProviders } from 'src/features/shared/utils/test-utils'

const testComponents = [{ __typename: 'ComponentModulesTextModule' as const, ...aComponentModulesTextModule() }]

describe('ModulesRenderer', () => {
    it('should render all testComponents', async () => {
        const { getByText } = renderWithProviders(<DynamicComponentRenderer components={testComponents} />)

        await getByText(testComponents[0].Richtext ?? '')
    })
})
