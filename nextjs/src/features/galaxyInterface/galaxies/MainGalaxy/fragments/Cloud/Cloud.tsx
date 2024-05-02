import { Box, PlacementWithLogical, useBreakpoint } from '@chakra-ui/react'
import { CategoryCloud } from '../types'
import { HOMEPAGE_Z_INDEXES } from '../constants'
import { CloudTitle } from '../CloudTitle'
import { Text } from '@chakra-ui/react'
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
  console.log(window.matchMedia('(min-width: 768px)').matches)

  const hoverTranslations = {
    publications: t('hoverpublications'),
    archives: t('hoverarchives'),
    objects: t('hoverobjects'),
    people: t('hoverpeople'),
  }

  return (
    <>
      <Tooltip
        label={
          <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'400'}>
            {hoverTranslations[category]}
          </Text>
        }
        placement={placement.placement}
        xAxis={placement.right}
        yAxis={placement.top}
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
      placement.right = breakpoint === 'md' ? '100px' : '275px'
      placement.top = breakpoint === 'lg' ? '30px' : '0px'
      break
    case CATEGORIES.objects:
      placement.placement = 'auto'
      placement.right = breakpoint === 'md' ? '-40px' : '-120px'
      placement.top = breakpoint === 'lg' ? '200px' : '10px'
      break
    case CATEGORIES.people:
      placement.placement = 'bottom'
      placement.right = '0'
      placement.top = breakpoint === 'xl' ? '-90px' : '-100px'
      break
    case CATEGORIES.publications:
      placement.placement = 'bottom'
      placement.right = '50px'
      placement.top = '90px'
      break
  }
  return placement
}
