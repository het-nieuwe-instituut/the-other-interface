import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { Position } from '@/features/shared/types/position'
import { getTriplyRecordPathForTypeAndId } from '@/features/shared/utils/links'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useContext, useEffect, useState } from 'react'
import { PlacesType } from 'react-tooltip'
import { EntityNames, Locale, SearchResultItemType } from 'src/generated/graphql'
import {
  GalaxyZoomAnimationStateContext,
  useMoveElementToCenterValues,
} from '../../../hooks/GalaxyZoomAnimationStateProvider'
import { RecordText } from '../RecordText'
import { Category } from '@/features/shared/utils/categories'

export type RecordComponentProps = {
  className?: string
  record: RecordProps
  tooltipPlace: PlacesType
  onFullyLoaded?: () => void
  positionClassName?: string
}

type RecordProps = SearchResultItemType & {
  position: Position
  category: EntityNames
}

export const Record: React.FC<RecordComponentProps> = ({
  className,
  record,
  tooltipPlace,
  onFullyLoaded,
  positionClassName,
}) => {
  const { id, category } = record
  const { t } = useTypeSafeTranslation('category')
  const { lang } = useZoom2Params()
  const { data, isLoading, isError } = useZoomHoverRecordResultQuery({ id, category })
  const [imageLoaded, setImageLoaded] = useState(false)
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)

  const [clicked, setClicked] = useState(false)
  const [animationCssVariables, positionRef] = useMoveElementToCenterValues({
    scale: 1.65,
    offsetTop: -80,
  })

  useEffect(() => {
    if (imageLoaded && !isLoading) onFullyLoaded?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageLoaded, isLoading])

  return (
    <div className={cn('relative', className)}>
      <div
        ref={positionRef}
        style={{ ...animationCssVariables, ...record.position } as CSSProperties}
        className={cn(
          'ease-toi-cubic-bezier',
          'absolute flex h-4/5 w-[70%]',
          animationState === 'forward' && !clicked && 'animate-[toBlurAndHide_300ms_forwards]',
          animationState === 'forward' &&
            clicked &&
            'animate-[toCenterOfGalaxy_500ms_forwards] z-[1000]',
          positionClassName
        )}
      >
        <ReadMoreTooltip
          floating={true}
          isLoading={isLoading}
          hideTooltip={animationState === 'forward' || animationState === 'backwards'}
          error={isError ? t('couldNotFetchHover') : ''}
          place={tooltipPlace}
          isEmpty={!data?.description && !data?.title}
          title={data?.title ?? undefined}
          description={data?.description ?? undefined}
          className="size-full"
          color="blue"
        >
          <RecordData
            onClick={() => setClicked(true)}
            record={record}
            lang={lang}
            onLoad={() => setImageLoaded(true)}
          />
        </ReadMoreTooltip>
      </div>
    </div>
  )
}

const RecordData = ({
  record,
  lang,
  onLoad,
  onClick,
}: {
  record: RecordProps
  lang?: Locale | null
  onLoad: () => void
  onClick: () => void
}) => {
  const { id, thumbnail, category, title } = record
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)

  let url = getTriplyRecordPathForTypeAndId(category, id, '/detail')
  url = addLocaleToUrl(url, lang)

  return (
    <DelayedNextLinkWithZoomAnimationsContext
      delay={600}
      animation="forward"
      href={url}
      className={cn(
        'ease-toi-cubic-bezier',
        'flex size-full cursor-pointer flex-col items-center justify-center gap-[5px]',
        animationState === 'forward' ||
          (animationState === 'backwards' &&
            'group-hover-blur-item transition-all duration-300 hover:scale-105')
      )}
      onClick={onClick}
    >
      <ResponsiveImage
        onLoad={onLoad}
        src={thumbnail}
        alt={title ?? ''}
        className="max-h-[calc(100%-2.6vw-7px)]" // where 2.6vw are a texts' line heights, 15px are gaps
        imageClassName="object-bottom"
        size={'16vw'}
        style={{
          flex: `1 1 calc(100% - 2.6vw - 7px)`,
        }}
      />

      <RecordText
        className={cn(
          'ease-toi-cubic-bezier',
          animationState === 'forward' && 'animate-[toBlurAndHide_300ms_forwards]'
        )}
        title={title}
        categoryType={category.toLocaleLowerCase() as Category}
      />
    </DelayedNextLinkWithZoomAnimationsContext>
  )
}
