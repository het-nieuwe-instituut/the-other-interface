import MuxPlayer from '@mux/mux-player-react/lazy'

interface MuxVideoPlayerProps {
  title: string
  playbackId: string
  caption?: string | null
  aspectRatio?: string
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId,
  caption,
  aspectRatio,
  title,
}) => {
  return (
    <>
      <MuxPlayer
        placeholder={undefined}
        title={title}
        streamType="on-demand"
        playbackId={playbackId}
        accentColor="#A0AEC0"
        style={{ aspectRatio: aspectRatio }}
        className="h-[400px] "
      />
      {caption && <p className="mt-[-30px]">{caption}</p>}
    </>
  )
}
