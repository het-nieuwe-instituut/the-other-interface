import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'

import { useRecordDetailQuery } from '@/features/record/hooks/useRecordDetailQuery'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import {
  ReadMoreTooltip,
  ReadMoreTooltipProps,
} from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { cn } from '@/features/ui/utils/cn'
import { useRouter } from 'next/navigation'
import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { useCalculateLine } from './useCalculateLine'

type Props = {
  record: PositionedRecord
  tabIndex?: number
  style?: React.CSSProperties
  tooltipPlace?: ReadMoreTooltipProps['place']
  isIdLoading?: boolean
}

export const Record: React.FC<Props> = ({
  record,
  style,
  tabIndex = 0,
  tooltipPlace = 'bottom',
}) => {
  const router = useRouter()
  const lang = useLocale()
  const { id, category, position, grid } = record

  const {
    data: recordDetails,
    isLoading,
    isError,
  } = useRecordDetailQuery({ type: category, id, options: { refetchOnWindowFocus: false } })

  const {
    data,
    isError: isLoadingHoverError,
    isLoading: isLoadingHover,
  } = useZoomHoverRecordResultQuery({ id, category })
  const { coordinates, ref } = useCalculateLine()
  const { t } = useTypeSafeTranslation('category')

  if (isLoading && tabIndex === 0) {
    return (
      <div className="h-full items-center justify-center">
        <Loader />
      </div>
    )
  }
  if (!recordDetails || isError) return null

  return (
    <div style={{ ...grid, ...style }}>
      <div className="peer relative size-full">
        <ReadMoreTooltip
          isLoading={isLoadingHover}
          error={isLoadingHoverError ? t('couldNotFetchHover') : ''}
          place={tooltipPlace}
          isEmpty={!data?.description && !data?.title}
          title={data?.title ?? undefined}
          description={data?.description ?? undefined}
          className="size-full"
          color="blue"
        >
          <button
            ref={ref}
            tabIndex={tabIndex}
            className={cn(
              'ease-in-out duration-[.4] transition-all absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px] hover:scale-105',
              'use-calculate-line-element',
              'group-hover-blur-item'
            )}
            onClick={handleClick}
            style={{ ...position }}
          >
            <ResponsiveImage
              src={recordDetails?.thumbnail?.[0]}
              alt={recordDetails?.title}
              className="max-h-[calc(100%-2vw-5px)]" // where 1.6vw are a texts' line heights, 5px are gaps
              size={'11vw'}
              style={{
                flex: '1 1 calc(100% - 2vw - 5px)',
              }}
            />

            <RecordText title={recordDetails?.title} categoryType={category} />
          </button>
        </ReadMoreTooltip>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -80,
        }}
        className="hidden peer-hover:block"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            strokeWidth={1}
            stroke={'RGBA(0, 81, 255, .4)'}
          />
        </svg>
      </div>
    </div>
  )

  function handleClick() {
    let url = `/detail/${category}/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }
}
