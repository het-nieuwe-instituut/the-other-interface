import { renderHookWithProviders } from '@/features/shared/utils/test-utils'
import { act } from 'react-dom/test-utils'

import { FilterTypes } from '../filtersTypes'
import usePresenter from './usePresenter'

describe('filtersSlice', () => {
    it('should set default filter on mount ', async () => {
        const { store, result } = renderHookWithProviders(() => usePresenter())

        expect(store.getState().filters.activeFilter).toBe(FilterTypes.TimePeriod)
        act(() => {
            result.current.setFilter(FilterTypes.MAKER)
        })
        expect(store.getState().filters.activeFilter).toBe(FilterTypes.MAKER)
        expect(result.current.filters).toStrictEqual([])
    })
})
