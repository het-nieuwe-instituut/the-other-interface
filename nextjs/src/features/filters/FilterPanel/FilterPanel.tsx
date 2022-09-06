import { Button, useTheme } from '@chakra-ui/react'
import { FilterTypes } from '../filtersTypes'
import { FilterPanelButton } from './FilterPanelStyled'
import usePresenter from './usePresenter'
import OpenMenu from '@/icons/open-menu.svg'

const FiltersPanel = () => {
    const theme = useTheme()
    const { setFilter } = usePresenter()

    return (
        <div>
            <Button />
            <FilterPanelButton sx={{ background: theme.colors.levels.z0.linkedOpenData}} onClick={() => setFilter(FilterTypes.MAKER)}>
                Set Filter
            </FilterPanelButton>
            <OpenMenu />
        </div>
    )
}

export default FiltersPanel
