import MuxPlayer from '@mux/mux-player-react/lazy'

interface MuxVideoPlayerProps {
  title: string
  playbackId: string
  //   posterUrl?: string
  caption?: string | null
  //   placeholder?: string
  //   aspectRatio?: string
  //   thumbnailTime: number
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId,
  //   posterUrl,
  //   thumbnailTime,
  caption,
  // aspectRatio,
  title,
}) => {
  return (
    <>
      <MuxPlayer
        placeholder={undefined}
        title={title}
        streamType="on-demand"
        playbackId={playbackId}
        // thumbnailTime={thumbnailTime}
        // poster={posterUrl ? posterUrl : undefined}
        accentColor="#A0AEC0"
        // style={{ aspectRatio: internalAspectRatio }}
      />
      {caption && <p>{caption}</p>}
    </>
  )
}
