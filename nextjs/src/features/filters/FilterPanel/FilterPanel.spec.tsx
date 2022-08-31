import { fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'src/common/utils/test-utils'
import { FilterTypes } from '../filtersTypes'
import FilterPanel from './FilterPanel'

describe('filtersSlice', () => {
    it('should be able to FilterType to Make when clicking on a button', async () => {
        const { getByRole, store } = renderWithProviders(<FilterPanel />)

        expect(store.getState().filters.activeFilter).toBe(FilterTypes.TimePeriod)

        await fireEvent.click(getByRole('button'))

        expect(store.getState().filters.activeFilter).toBe(FilterTypes.MAKER)
    })
})
