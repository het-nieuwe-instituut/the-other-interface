import { FilterTypes } from '../filtersTypes'
import usePresenter from './usePresenter'

const FiltersPanel = () => {
    const { setFilter } = usePresenter()

    return (
        <div>
            <button onClick={() => setFilter(FilterTypes.MAKER)}>Set filter</button>
        </div>
    )
}

export default FiltersPanel
