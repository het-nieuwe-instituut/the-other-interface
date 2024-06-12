import MuxPlayer from '@mux/mux-player-react/lazy'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

interface MuxAudioPlayerProps {
  title: string
  playbackId: string
  caption?: string | null
  isReady?: boolean | null
}

export const MuxAudioPlayer: React.FC<MuxAudioPlayerProps> = ({
  playbackId,
  caption,
  title,
  isReady,
}) => {
  const { t } = useTypeSafeTranslation('common')
  if (!isReady) {
    return <p className={TypographyVariants({ socialLarge: 'lg' })}>{t('audio')}</p>
  }

  return (
    <div>
      <div className="h-[80px] overflow-hidden">
        <MuxPlayer
          title={title}
          streamType="on-demand"
          playbackId={playbackId}
          accentColor="#A0AEC0"
          audio
          className="h-[50px] w-full"
        />
      </div>
      {caption && (
        <p className={`${cn(TypographyVariants({ socialLarge: 'sm' }))} pt-[16px]`}>{caption}</p>
      )}
    </div>
  )
}
