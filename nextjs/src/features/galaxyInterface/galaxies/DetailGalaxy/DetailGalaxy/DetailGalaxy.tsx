'use client'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { Box, Grid } from '@chakra-ui/react'
import { RelatedCategory, RelatedStories } from '../fragments'
import { GridParams } from '@/features/shared/types/position'
import { GalaxyFooter } from '../../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { usePresenter } from '../usePresenter'
import { GalaxyPagination } from '../../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { useState } from 'react'
import { useCalculateLine } from './useCalculateLine'

const relatedCategories: Array<{ category: CloudCategory; grid: GridParams }> = [
  { category: CLOUD_CATEGORIES.people, grid: { gridRow: '1 / 2', gridColumn: '1 / 2' } },
  { category: CLOUD_CATEGORIES.objects, grid: { gridRow: '1 / 2', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.publications, grid: { gridRow: '2 / 3', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.archives, grid: { gridRow: '2 / 3', gridColumn: '1 / 2' } },
]

export const DetailGalaxy: React.FC = () => {
  const {
    category,
    id,
    isSearchModeActive,
    currentPageNumber,
    pageAmount,
    increasePageNumber,
    decreasePageNumber,
    allRelationTotals,
  } = usePresenter()
  const [isHovered, setIsHovered] = useState(false)
  const line = useCalculateLine()
  if (!category || !id) return null

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      {isSearchModeActive && <BlurOverlay />}
      <Grid
        position="absolute"
        w="96vw"
        h={`calc(80% - 1rem - 60px)`} // considering fixed height of galaxy footer
        top="6%"
        left="2vw"
        right="2vw"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {relatedCategories.map(({ category: cloudCategory, grid }) => (
          <RelatedCategory
            key={cloudCategory}
            category={cloudCategory}
            gridRow={grid.gridRow}
            gridColumn={grid.gridColumn}
            allRelationTotals={allRelationTotals}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
          />
        ))}
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              zIndex: -10,
            }}
          >
            <svg width="96vw" height="96vw" xmlns="http://www.w3.org/2000/svg">
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                strokeWidth={1}
                stroke={'RGBA(0, 81, 255, .4)'}
              />
            </svg>
          </div>
        )}
        <RelatedStories
          gridRow="1 / 3"
          allRelationTotals={allRelationTotals}
          setIsHovered={setIsHovered}
          isHovered={isHovered}
        />
      </Grid>

      <GalaxyFooter
        galaxyPagination={
          <GalaxyPagination
            currentPageNumber={currentPageNumber}
            pageAmount={Math.ceil(pageAmount / 2)}
            isResultAmountLoading={false}
            handleLeftClick={decreasePageNumber}
            handleRightClick={increasePageNumber}
            isResultEmpty={false}
          />
        }
      />
    </Box>
  )
}
