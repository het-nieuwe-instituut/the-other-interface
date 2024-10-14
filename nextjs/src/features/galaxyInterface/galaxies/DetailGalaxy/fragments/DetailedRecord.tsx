import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useParams, useSearchParams } from 'next/navigation'
import { useContext } from 'react'
import { GalaxyZoomAnimationStateContext } from '../../hooks/GalaxyZoomAnimationStateProvider'
import { useStoryOrRecordImageQuery } from '../../MainGalaxy/hooks/useStoryOrRecordImageQuery'
import { useZoomLevel3Query } from '@/features/record/hooks/useZoomLevel3Query'
import { GalaxyPaginationAnimationStateContext } from '../../hooks/GalaxyPaginationAnimationStateProvider'

interface Props {
  className?: string
}

export const DetailedRecord: React.FC<Props> = ({ className }) => {
  const { t } = useLooseTypeSafeTranslation('category')
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const locale = useLocale()
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)
  const { conditions } = useContext(GalaxyPaginationAnimationStateContext)
  const searchParams = useSearchParams()
  const page = Number(searchParams?.get('page') ?? '1')

  const { data: record, isLoading } = useZoomLevel3Query({
    type: category,
    id,
    options: { refetchOnWindowFocus: false },
    locale,
    page,
  })
  const { data } = useStoryOrRecordImageQuery({
    id,
  })

  return (
    <div
      className={cn(
        'ease-toi-cubic-bezier',
        'w-full ',
        className,
        animationState === 'forward' && 'animate-[toBlurAndHide_300ms_forwards]'
      )}
    >
      <div className="relative flex size-4/5 flex-col items-center justify-center gap-[2px]">
        {renderContent()}
      </div>
    </div>
  )

  function renderContent() {
    return (
      <>
        <ResponsiveImage
          src={data ?? record?.thumbnail?.[0]}
          alt={record?.title}
          className="max-h-[176.48px]"
          imageClassName="object-bottom"
          size={'25vw'}
          style={{
            flex: `1 1 calc(100% - 3vw - 8px)`,
          }}
        />
        <div
          className={cn(
            'ease-toi-cubic-bezier',
            'mt-[12px] flex w-full flex-col text-blue-100',
            !(animationState === 'forward' || animationState === 'backwards') &&
              !isLoading &&
              conditions === 'firstRender' &&
              'animate-[fromHideToShow_1000ms_forwards]',
            isLoading && 'opacity-0'
          )}
        >
          <p
            lang="nl"
            className={TypographyVariants({
              responsive: 'detailedStoryOrRecordTitle',
              className: 'text-center line-clamp-1 leading-normal w-full hyphens-auto',
            })}
          >
            {record?.title}
          </p>

          <p
            lang="nl"
            className={TypographyVariants({
              responsive: 'detailedStoryOrRecordSubTitle',
              className: 'text-center mt-1',
            })}
          >
            {t(toSingularCategory(category))}
          </p>
        </div>
      </>
    )
  }
}
