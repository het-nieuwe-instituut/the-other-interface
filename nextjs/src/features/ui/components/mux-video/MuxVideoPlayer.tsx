import MuxPlayer from '@mux/mux-player-react/lazy'
import { TypographyVariants } from '../typography/variants'
import { cn } from '../../utils/cn'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CSSProperties } from 'react'

interface MuxVideoPlayerProps {
  title: string
  playbackId: string
  caption?: string | null
  aspectRatio?: string
  isReady?: boolean | null
  className?: string
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId,
  caption,
  aspectRatio,
  title,
  isReady,
  className,
}) => {
  const { t } = useTypeSafeTranslation('common')
  if (!isReady) {
    return <p className={TypographyVariants({ socialLarge: 'lg' })}>{t('video')}</p>
  }

  return (
    <div>
      <div className="h-[500px] overflow-hidden">
        <MuxPlayer
          title={title}
          streamType="on-demand"
          playbackId={playbackId}
          accentColor="#A0AEC0"
          style={
            {
              '--aspect-ratio': aspectRatio,
            } as CSSProperties
          }
          className={cn('aspect-[var(--aspect-ratio)]', 'h-[500px]', className)}
        />
      </div>
      <p className={`${cn(TypographyVariants({ socialLarge: 'sm' }), 'pt-4')}`}>{caption}</p>
    </div>
  )
}
