'use client'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { GalaxyFooter } from '../../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { RelatedCategory, RelatedStories } from '../fragments'
import { usePresenter } from '../usePresenter'

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

  if (!category || !id) return null

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {isSearchModeActive && <BlurOverlay />}
        <div
          id="detail-galaxy-grid"
          className="group-hover-blur absolute inset-x-[2vw] top-[6%] grid h-[calc(80%-1rem-60px)] w-[96vw] grid-cols-3 grid-rows-2"
        >
          {relatedCategories.map(({ category: cloudCategory, grid }) => (
            <RelatedCategory
              key={cloudCategory}
              category={cloudCategory}
              gridRow={grid.gridRow}
              gridColumn={grid.gridColumn}
              allRelationTotals={allRelationTotals}
            />
          ))}

          <RelatedStories allRelationTotals={allRelationTotals} />
        </div>

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
      </div>
    </>
  )
}
