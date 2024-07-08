import { useRecordDetailQuery } from '@/features/record/hooks/useRecordDetailQuery'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { cn } from '@/features/ui/utils/cn'
import { Text } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useStoryOrRecordImageQuery } from '../../MainGalaxy/hooks/useStoryOrRecordImageQuery'
import { useContext } from 'react'
import { GalaxyZoomAnimationStateContext } from '../../hooks/GalaxyZoomAnimationStateProvider'

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

  const { data: record } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false },
    locale,
  })
  const { data } = useStoryOrRecordImageQuery({
    id,
  })

  return (
    <div
      className={cn(
        ' col-start-1 col-end-3 row-start-2 row-end-4 flex items-center justify-center',
        className,
        animationState === 'forward' && 'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
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
          className="max-h-[calc(100%-3vw-8px)]"
          size={'25vw'}
          style={{
            flex: `1 1 calc(100% - 3vw - 8px)`,
          }}
        />
        <div
          className={cn(
            'mt-2 flex w-full flex-1 flex-col text-blue-100',
            !(animationState === 'forward' || animationState === 'backwards') &&
              'animate-[fromHideToShow_1000ms_ease-in-out_forwards]'
          )}
        >
          <Text
            align="center"
            isTruncated
            textStyle="headingTimesLarge.md"
            fontSize={{ base: '12px', lg: '20px' }}
            lineHeight={{ base: '12px', lg: '21px' }}
          >
            {record?.title}
          </Text>
          <Text
            align="center"
            textStyle="headingTimesLarge.sm"
            fontSize={{ base: '9px', lg: '12px' }}
            lineHeight={'normal'}
            mt={1}
          >
            {t(toSingularCategory(category))}
          </Text>
        </div>
      </>
    )
  }
}
