import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { EntityNames, SearchResultItemType } from 'src/generated/graphql'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { Position } from '@/features/shared/types/position'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { cn } from '@/features/ui/utils/cn'
import { useRouter } from 'next/navigation'
import { PlacesType } from 'react-tooltip'
import { Locale } from 'src/generated/graphql'
import { RecordText } from '../RecordText'

type Props = {
  record: RecordProps
  tooltipPlace: PlacesType
}

type RecordProps = SearchResultItemType & {
  position: Position
  category: EntityNames
}

export const Record: React.FC<Props> = ({ record, tooltipPlace }) => {
  const { id, category } = record
  const { t } = useTypeSafeTranslation('category')
  const { lang } = useZoom2Params()
  const { data, isLoading, isError } = useZoomHoverRecordResultQuery({ id, category })

  return (
    <div className="relative">
      {data === null ? (
        RecordData(record, lang)
      ) : (
        <div className="absolute flex h-4/5 w-[70%]" style={{ ...record.position }}>
          <ReadMoreTooltip
            isLoading={isLoading}
            error={isError ? t('couldNotFetchHover') : ''}
            place={tooltipPlace}
            isEmpty={!data?.description && !data?.title}
            title={data?.title ?? undefined}
            description={data?.description ?? undefined}
            className="size-full"
          >
            {RecordData(record, lang)}
          </ReadMoreTooltip>
        </div>
      )}
    </div>
  )
}

const RecordData = (record: RecordProps, lang?: Locale | null) => {
  const { id, thumbnail, category, title } = record
  const router = useRouter()

  const handleClick = () => {
    let url = `/detail/${category}/${id}`
    url = addLocaleToUrl(url, lang)

    router.push(url)
  }

  return (
    <button
      className={cn(
        'flex size-full cursor-pointer flex-col items-center justify-center gap-[5px] transition-all duration-300 ease-in-out hover:scale-105',
        'group-hover-blur-item'
      )}
      onClick={handleClick}
    >
      <ResponsiveImage
        src={thumbnail}
        alt={title ?? ''}
        className="max-h-[calc(100%-2.6vw-7px)]" // where 2.6vw are a texts' line heights, 15px are gaps
        size={'16vw'}
        style={{
          flex: `1 1 calc(100% - 2.6vw - 7px)`,
        }}
      />

      <RecordText title={title} categoryType={category} />
    </button>
  )
}
