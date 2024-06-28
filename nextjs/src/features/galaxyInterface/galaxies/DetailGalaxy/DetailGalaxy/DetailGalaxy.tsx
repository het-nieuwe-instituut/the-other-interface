'use client'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { State } from '@/features/shared/configs/store'
import { useRecordRelationsCount } from '@/features/shared/hooks/queries/useRecordRelationsCount'
import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, Category, CloudCategory } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { GalaxyFooter } from '../../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { RelatedCategory, RelatedStories } from '../fragments'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'

const relatedCategories: Array<{ category: CloudCategory; grid: GridParams }> = [
  { category: CLOUD_CATEGORIES.people, grid: { gridRow: '1 / 2', gridColumn: '1 / 2' } },
  { category: CLOUD_CATEGORIES.objects, grid: { gridRow: '1 / 2', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.publications, grid: { gridRow: '2 / 3', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.archives, grid: { gridRow: '2 / 3', gridColumn: '1 / 2' } },
]

export const DetailGalaxy: React.FC = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const { data } = useRecordRelationsCount(category, id)
  const { page, pageAmount, increasePageNumber, decreasePageNumber } = useSearchParamPagination(
    data?.totalPages ?? 0,
    false
  )

  useArrowNavigation({
    onLeft: decreasePageNumber,
    onRight: increasePageNumber,
    disabled: isSearchModeActive,
  })

  if (!category || !id) return null

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden">
        {isSearchModeActive && <BlurOverlay />}
        <div
          id="detail-galaxy-grid"
          className="group-hover-blur absolute inset-x-[2vw] top-[6%] grid h-[calc(80%-1rem-60px)] w-[96vw] max-w-[1382.4px] grid-cols-3 grid-rows-2 min-[1440px]:inset-x-[28.8px]"
        >
          {relatedCategories.map(({ category: cloudCategory, grid }) => (
            <RelatedCategory
              key={cloudCategory}
              category={cloudCategory}
              gridRow={grid.gridRow}
              gridColumn={grid.gridColumn}
              allRelationTotals={data?.allRelationTotals}
            />
          ))}

          <RelatedStories allRelationTotals={data?.allRelationTotals} />
        </div>

        <GalaxyFooter
          galaxyPagination={
            <GalaxyPagination
              currentPageNumber={page}
              pageAmount={Math.ceil(pageAmount / 2)}
              isResultAmountLoading={false}
              handleLeftClick={decreasePageNumber}
              handleRightClick={increasePageNumber}
              isResultEmpty={false}
            />
          }
        />
      </div>
    </div>
  )
}
