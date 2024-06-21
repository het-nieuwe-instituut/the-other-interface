import { Box, PlacementWithLogical, useBreakpoint } from '@chakra-ui/react'
import { CategoryCloud } from '../types'
import { HOMEPAGE_Z_INDEXES } from '../constants'
import { CloudTitle } from '../CloudTitle'
import { Text } from '@chakra-ui/react'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { CollectionHighlightsFilter } from '@/features/galaxyInterface/components/GalaxyWrapper/Suggestions/Suggestions'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { t } = useTypeSafeTranslation('homepage')
  const router = useRouter()
  const { lang } = useZoom2Params()
  const [enabled, setEnabled] = useState(false)
  const { title: category, size, cloudPosition, titlePosition } = cloud
  const selectedFilters = useSelectedFilters()

  useSearchByCategoryQuery({
    category,
    enabled,
    selectedFilters,
  })

  const handleCloudClick = () => {
    let url = `/landingpage?category=${category}&filters=${encodeFilters([
      CollectionHighlightsFilter,
    ])}&searchResult=true&fallback=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  const breakpoint = useBreakpoint()
  const placement = tooltipPlacement(category, breakpoint)

  const hoverTranslations = {
    publications: t('hoverpublications'),
    archives: t('hoverarchives'),
    objects: t('hoverobjects'),
    people: t('hoverpeople'),
  }

  const hoverTitleTranslations = {
    publications: t('publications'),
    archives: t('archives'),
    objects: t('objects'),
    people: t('people'),
  }

  return (
    <>
      <Tooltip
        label={
          <>
            <Text
              fontFamily={'Social'}
              fontSize={'12px'}
              fontWeight={'700'}
              paddingBottom={'4px'}
              color={'pinkAlpha.100'}
            >
              {hoverTitleTranslations[category]}
            </Text>
            <Text
              fontFamily={'Social'}
              fontSize={'12px'}
              fontWeight={'400'}
              color={'pinkAlpha.100'}
            >
              {hoverTranslations[category]}
            </Text>
          </>
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
          left={cloudPosition.left ?? 'auto'}
          right={cloudPosition.right ?? 'auto'}
          top={cloudPosition.top ?? 'auto'}
          bottom={cloudPosition.bottom ?? 'auto'}
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
