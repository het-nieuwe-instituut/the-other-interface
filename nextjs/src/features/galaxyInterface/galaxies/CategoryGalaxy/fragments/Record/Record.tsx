import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { Position } from '@/features/shared/types/position'
import { CloudCategory } from '@/features/shared/utils/categories'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { useRouter } from 'next/navigation'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { RecordText } from '../RecordText'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  record: RecordProps
}

type RecordProps = ZoomLevel2Type & {
  position: Position
  category: CloudCategory
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, category } = record
  const { t } = useTypeSafeTranslation('category')
  const { lang, search } = useZoom2Params()
  // TODO: HNIT-1833 - add in loading and error handling
  const { data, isLoading, isError } = useZoomHoverRecordResultQuery({ id, category })

  return (
    <div className="relative">
      {data === null ? (
        RecordData(record, lang, search)
      ) : (
        <div className="absolute flex h-4/5 w-[70%]" style={{ ...record.position }}>
          <ReadMoreTooltip
            error={isError ? t('couldNotFetchHover') : ''}
            place="bottom-start"
            isLoading={isLoading}
            title={data?.title ?? undefined}
            description={data?.description ?? undefined}
            className="size-full"
          >
            {RecordData(record, lang, search)}
          </ReadMoreTooltip>
        </div>
      )}
    </div>
  )
}

const RecordData = (record: RecordProps, lang?: string | null, search?: string) => {
  const { id, thumbnail, category, title } = record
  const router = useRouter()

  const handleClick = () => {
    const searchParam = search ? `?search=${search}` : ''
    let url = `/detail/${category}/${id}${searchParam}`
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
        maxHeight="calc(100% - 2.6vw - 7px)" // where 2.6vw are a texts' line heights, 15px are gaps
        size={'16vw'}
        css={{
          flex: `1 1 calc(100% - 2.6vw - 7px)`,
        }}
        disableRightClick
      />

      <RecordText title={title} categoryType={category} />
    </button>
  )
}
