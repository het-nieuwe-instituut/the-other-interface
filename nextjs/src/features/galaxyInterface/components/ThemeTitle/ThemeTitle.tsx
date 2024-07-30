import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { cn } from '@/features/ui/utils/cn'
import { HOMEPAGE_Z_INDEXES } from '../../galaxies/MainGalaxy/fragments/constants'
import { useContext } from 'react'
import { GalaxyZoomAnimationStateContext } from '../../galaxies/hooks/GalaxyZoomAnimationStateProvider'

interface Props {
  title?: string
}

export const ThemeTitle: React.FC<Props> = ({ title }) => {
  const { t } = useLooseTypeSafeTranslation('homepage')
  const { animationState } = useContext(GalaxyZoomAnimationStateContext)

  if (!title) return null

  return (
    <p
      style={{
        zIndex: HOMEPAGE_Z_INDEXES.THEME_TITLE,
      }}
      className={cn(
        ' bottom-[calc(12vh+88px)] lg:bottom-[calc(12vh+80px)] font-times-dot font-[400] absolute left-6 max-w-[70vw] line-clamp-1 text-blue-100 pointer-events-none overflow-hidden',
        'leading-[33.6px] lg:leading-[64px] text-[32px] lg:text-[64px]',
        animationState && 'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
      )}
    >
      {t('storiesOver', {
        title,
      })}
    </p>
  )
}
