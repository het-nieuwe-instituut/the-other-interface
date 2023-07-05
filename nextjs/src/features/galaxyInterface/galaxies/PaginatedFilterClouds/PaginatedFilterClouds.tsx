import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'

import { Cloud } from '../../components/Cloud'
import { Dimensions } from '../../types/galaxy'
import { PaginatedCloudItem } from './types'
import { getId, usePresenter } from './usePresenter'

export interface PaginatedFilterCloudsProps {
  paginatedCloudItems: PaginatedCloudItem[]
  total: number
  dimensions: Dimensions
  type: SupportedLandingPages
  filter: string
  page: number
}

type PaginatedCouldFiltersParams = {
  slug: SupportedLandingPages
}

const PaginatedFilterClouds: React.FunctionComponent<PaginatedFilterCloudsProps> = props => {
  const router = useRouter()
  const queryParams = router.query as unknown as PaginatedCouldFiltersParams
  const id = useId().replaceAll(':', '')
  const {
    svgRef,
    dimensions,
    backgrounds,
    paginateBack,
    paginateNext,
    total,
    totalPages,
    currentPage,
    paginatedCloudItems,
    conditionals,
    events: { handleClick },
  } = usePresenter({ ...props, selector: id })
  const { width, height } = dimensions
  const { t: tCommon } = useTypeSafeTranslation('common')
  const { t: tLandingpage } = useTypeSafeTranslation('landingpage')

  return (
    <Box overflow="hidden" height={height} width={width}>
      <svg
        width={width}
        height={height}
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{ overflow: 'visible' }}
      >
        {paginatedCloudItems.map((item, index, array) => {
          const backgroundItem = backgrounds.find(background => background.id === getId(item))

          return (
            <Cloud
              key={`${index}-${array.length}`}
              className={`foreign-${id}`}
              defaultBackground={backgroundItem?.background}
              hoverBackground={backgroundItem?.background}
            >
              <Box
                as="button"
                width="100%"
                height="100%"
                borderRadius="100%"
                zIndex="100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={(e: unknown) => handleClick(e as MouseEvent, item)}
              >
                {conditionals.shouldDisplayText && (
                  <Box>
                    <Text width="12.5rem" textStyle={'cloudText'}>
                      {tCommon(getGalaxyTypeByTranslationsKey(queryParams.slug))}
                    </Text>
                    <Text width="12.5rem" textStyle={'cloudText'}>
                      {item.name}
                    </Text>
                  </Box>
                )}
              </Box>
            </Cloud>
          )
        })}
        <Cloud className={'foreign-collision'}>
          <Flex
            width="100%"
            height="100%"
            borderRadius="100%"
            zIndex="100"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Text textStyle={'cloudText'} mb={4}>
                {total} {tLandingpage(router.query.slug as SupportedLandingPages)}
              </Text>
              <Flex alignItems={'center'} gap={1}>
                <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                  <PaginationLeft />
                </Box>
                <Text textStyle={'cloudText'}>{`${currentPage}/${totalPages}`}</Text>
                <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
                  <PaginationRight />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Cloud>
      </svg>
    </Box>
  )
}

export const MemoizedPaginatedFilterClouds = memo(PaginatedFilterClouds)
export default MemoizedPaginatedFilterClouds
