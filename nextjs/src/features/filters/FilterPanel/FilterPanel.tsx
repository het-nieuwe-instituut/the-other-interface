import OpenMenu from '@/icons/open-menu.svg'
import { FilterTypes } from '../filtersTypes'
import { FilterPanelButton } from './FilterPanelStyled'
import usePresenter from './usePresenter'

const FiltersPanel = () => {
    const { setFilter } = usePresenter()

    return (
        <div>
            <FilterPanelButton onClick={() => setFilter(FilterTypes.MAKER)}>Set Filter</FilterPanelButton>
            <OpenMenu />
        </div>
    )
}

export default FiltersPanel
