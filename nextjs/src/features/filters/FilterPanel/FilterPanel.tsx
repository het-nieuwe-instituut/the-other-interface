import { useTheme } from '@chakra-ui/react'
import { FilterTypes } from '../filtersTypes'
import { FilterPanelButton } from './FilterPanelStyled'
import usePresenter from './usePresenter'

const FiltersPanel = () => {
    const theme = useTheme()
    const { setFilter } = usePresenter()

    return (
        <div>
            <FilterPanelButton sx={{ color: theme.colors.shit }} onClick={() => setFilter(FilterTypes.MAKER)}>
                Set Filter
            </FilterPanelButton>
        </div>
    )
}

export default FiltersPanel
