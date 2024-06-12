import MuxPlayer from '@mux/mux-player-react/lazy'
import { TypographyVariants } from '../typography/variants'
import { cn } from '../../utils/cn'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

interface MuxVideoPlayerProps {
  title: string
  playbackId: string
  caption?: string | null
  aspectRatio?: string
  isReady?: boolean | null
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId,
  caption,
  aspectRatio,
  title,
  isReady,
}) => {
  const { t } = useTypeSafeTranslation('common')
  if (!isReady) {
    return <p className={TypographyVariants({ socialLarge: 'lg' })}>{t('video')}</p>
  }

  return (
    <div>
      <div className="h-[500px] overflow-hidden">
        <MuxPlayer
          placeholder={undefined}
          title={title}
          streamType="on-demand"
          playbackId={playbackId}
          accentColor="#A0AEC0"
          className={cn(`aspect-[${aspectRatio}]`, 'h-[500px]')}
        />
      </div>
      <p className={`${cn(TypographyVariants({ socialLarge: 'sm' }), 'pt-[16px]')}`}>{caption}</p>
    </div>
  )
}
