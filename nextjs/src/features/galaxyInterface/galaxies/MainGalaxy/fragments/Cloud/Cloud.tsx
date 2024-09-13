import { PlacementWithLogical, useBreakpoint } from '@chakra-ui/react'
import { HOMEPAGE_Z_INDEXES } from '../constants'
import { CategoryCloud } from '../types'

import { useGetUrlLandingPageUrl } from '@/features/galaxyInterface/utils/galaxyRoutes'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useContext, useState } from 'react'
import { GalaxyPaginationAnimationStateContext } from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import {
  GalaxyZoomAnimationStateContext,
  useMoveElementToCenterValues,
} from '../../../hooks/GalaxyZoomAnimationStateProvider'
interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { t } = useTypeSafeTranslation('homepage')
  const { title: category, sizeClassNames, cloudClassNames, titleClassNames } = cloud
  const selectedFilters = useSelectedFilters()
  useSearchByCategoryQuery({
    category,
    enabled: true,
    selectedFilters,
  })

  const url = useGetUrlLandingPageUrl(category)

  const breakpoint = useBreakpoint()
  const placement = tooltipPlacement(category, breakpoint)

  const hoverTranslations = {
    publications: t('hoverpublications'),
    archives: t('hoverarchives'),
    objects: t('hoverobjects'),
    people: t('hoverpeople'),
  }

  const hoverTitleTranslations = {
    publications: t('publications'),
    archives: t('archives'),
    objects: t('objects'),
    people: t('people'),
  }
  const hoverTitleTranslation = hoverTitleTranslations[category]
  const hoverTranslation = hoverTranslations[category]
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)
  const [clicked, setClicked] = useState(false)
  const { conditions: paginationAnimationConditions } = useContext(
    GalaxyPaginationAnimationStateContext
  )
  const [animationCssVariables, positionRef] = useMoveElementToCenterValues({
    scale: 1.2,
    offsetTop: 0,
    opacity: 0,
  })

  return (
    <div className="group">
      <Tooltip
        openDelay={300}
        hidden={!!animationState}
        label={
          <>
            {hoverTitleTranslation && (
              <h2
                className={TypographyVariants({
                  socialLarge: 'sm',
                  className: cn('text-pink-100 font-bold', hoverTranslation && 'pb-2'),
                })}
              >
                {hoverTitleTranslation}
              </h2>
            )}

            {hoverTranslation && (
              <p
                className={TypographyVariants({
                  socialLarge: 'sm',
                  className: cn('text-pink-100 line-clamp-[7]'),
                })}
              >
                {hoverTranslation}
              </p>
            )}
          </>
        }
        placement={placement.placement}
        xAxis={placement.right}
        yAxis={placement.top}
      >
        <div
          className={cn(sizeClassNames, cloudClassNames, 'absolute')}
          style={
            {
              zIndex: HOMEPAGE_Z_INDEXES.CLOUD,
            } as CSSProperties
          }
        >
          <DelayedNextLinkWithZoomAnimationsContext
            ref={positionRef}
            aria-label={t(category)}
            delay={600}
            style={
              {
                zIndex: HOMEPAGE_Z_INDEXES.CLOUD,
                ...animationCssVariables,
              } as CSSProperties
            }
            className={cn(
              'ease-toi-cubic-bezier',
              'size-full',
              'absolute',
              'cursor-pointer rounded-[50%] bg-[url(/images/cloud.svg)] bg-cover bg-no-repeat flex items-center justify-center',
              paginationAnimationConditions === 'firstRender' &&
                'animate-[fromHideToShow_1000ms_forwards]',
              animationState !== 'forward' &&
                'transition-transform duration-[400] group-hover:scale-110 ',
              animationState === 'forward' &&
                clicked &&
                'animate-[toCenterOfGalaxy_600ms_forwards]',
              animationState === 'forward' && !clicked && 'animate-[toBlurAndHide_500ms_forwards]'
            )}
            animation="forward"
            onClick={() => setClicked(true)}
            href={url} // delayed for animation
          >
            <div className="left-0 top-0 m-auto size-3/4 bg-[url(/images/cloud.svg)] bg-contain opacity-0 transition-opacity ease-toi-cubic-bezier group-hover:opacity-95"></div>
          </DelayedNextLinkWithZoomAnimationsContext>
        </div>
      </Tooltip>

      <p
        className={cn(
          'ease-toi-cubic-bezier',
          TypographyVariants({
            timesDot: 'lg',
            className: cn(
              'ease-toi-cubic-bezier',
              titleClassNames,
              'text-blue-100 absolute',
              'blur-[1.5px] pointer-events-none',
              'transition-all duration-200', // Add this line
              'group-hover:blur-[0px] ',
              category === 'objects' && 'group-hover:translate-x-2 group-hover:-translate-y-1',
              category === 'people' && 'group-hover:-translate-x-[2px] group-hover:-translate-y-2',
              category === 'publications' && 'group-hover:translate-x-1 group-hover:translate-y-2',
              category === 'archives' && 'group-hover:-translate-x-2 group-hover:translate-y-2'
            ),
          }),
          'text-[20px] lg:text-[32px]',
          'leading-[21px] lg:leading-[33.6px] xl:leading-[41.6px]',
          animationState === 'forward' && 'animate-[toBlurAndHide_500ms_forwards]'
        )}
      >
        {t(category)}
      </p>
    </div>
  )
}

const tooltipPlacement = (category: CloudCategory, breakpoint: string) => {
  const placement: { placement: PlacementWithLogical; right: string; top: string } = {
    placement: 'bottom',
    right: '0px',
    top: '0px',
  }

  switch (category) {
    case CATEGORIES.archives:
      placement.placement = 'auto'
      placement.right = breakpoint === 'md' ? '100px' : '275px'
      placement.top = breakpoint === 'lg' ? '30px' : '0px'
      break
    case CATEGORIES.objects:
      placement.placement = 'auto'
      placement.right = breakpoint === 'md' ? '-40px' : '-120px'
      placement.top = breakpoint === 'lg' ? '200px' : '10px'
      break
    case CATEGORIES.people:
      placement.placement = 'bottom'
      placement.right = '0'
      placement.top = breakpoint === 'xl' ? '-90px' : '-100px'
      break
    case CATEGORIES.publications:
      placement.placement = 'bottom'
      placement.right = '50px'
      placement.top = '90px'
      break
  }
  return placement
}
