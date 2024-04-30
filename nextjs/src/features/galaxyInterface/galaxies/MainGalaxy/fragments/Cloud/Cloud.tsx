import { Box, PlacementWithLogical, useBreakpoint } from '@chakra-ui/react'
import { CategoryCloud } from '../types'
import { HOMEPAGE_Z_INDEXES } from '../constants'
import { CloudTitle } from '../CloudTitle'

import { usePresenter } from './usePresenter'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { category, size, cloudPosition, titlePosition, handleCloudClick, setEnabled, t } =
    usePresenter(cloud)
  const breakpoint = useBreakpoint()

  const placement = tooltipPlacement(category, breakpoint)

  return (
    <>
      <Tooltip
        label={t(`hover${category}`)}
        placement={placement.placement}
        right={placement.right}
        top={placement.top}
      >
        <Box
          position="absolute"
          w={size}
          h={size}
          backgroundImage="url(/images/cloud.svg)"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          style={{ ...cloudPosition }}
          borderRadius="50%"
          zIndex={HOMEPAGE_Z_INDEXES.CLOUD}
          cursor="pointer"
          _hover={{ transform: 'scale(1.1)' }}
          transition="all .4s ease-in-out"
          onClick={handleCloudClick}
          onMouseEnter={() => setEnabled(true)}
        />
      </Tooltip>
      <CloudTitle position={titlePosition}>{t(category) ?? ''}</CloudTitle>
    </>
  )
}

const tooltipPlacement = (category: CloudCategory, breakpoint: string) => {
  const placement: { placement: PlacementWithLogical; right: string; top: string } = {
    placement: 'bottom',
    right: '0px',
    top: '0px',
  }

  switch (category) {
    case CATEGORIES.archives:
      placement.placement = 'auto'
      placement.right = breakpoint === 'md' ? '60px' : '250px'
      break
    case CATEGORIES.objects:
      placement.placement = 'auto'
      placement.right = breakpoint === 'md' ? '0px' : '-100px'
      placement.top = '50px'
      break
    case CATEGORIES.people:
      placement.placement = 'bottom'
      placement.right = '0px'
      placement.top = breakpoint === 'xl' ? '-110px' : '-80px'
      break
    case CATEGORIES.publications:
      placement.placement = 'bottom'
      placement.right = '0px'
      placement.top = breakpoint === 'xl' ? '100px' : '60px'
      break
  }
  return placement
}
