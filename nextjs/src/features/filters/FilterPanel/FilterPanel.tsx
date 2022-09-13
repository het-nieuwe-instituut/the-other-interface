import { Box } from '@chakra-ui/react'
// import { FilterTypes } from '../filtersTypes'
// import { FilterPanelButton } from './FilterPanelStyled'
// import usePresenter from './usePresenter'
// import OpenMenu from '@/icons/open-menu.svg'
import MediaImage from '@/features/modules/Media/Image/Image'

const FiltersPanel = () => {
    // const theme = useTheme()
    // const { setFilter } = usePresenter()

    return (
        <div>
            {/* <Button />
            <FilterPanelButton sx={{ background: theme.colors.levels.z0.linkedOpenData}} onClick={() => setFilter(FilterTypes.MAKER)}>
                Set Filter
            </FilterPanelButton>
            <OpenMenu /> */}
            <Box height='300px'>
                <MediaImage image={'https://picsum.photos/500/'} />
            </Box>
             
        </div>
    )
}

export default FiltersPanel
