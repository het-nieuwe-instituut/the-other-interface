import MuxPlayer from '@mux/mux-player-react/lazy'

interface MuxAudioPlayerProps {
  title?: string | null
  playbackId: string
  caption?: string | null
}

export const MuxAudioPlayer: React.FC<MuxAudioPlayerProps> = ({ playbackId, caption, title }) => {
  if (title === null) return null

  return (
    <>
      <MuxPlayer
        title={title}
        streamType="on-demand"
        playbackId={playbackId}
        accentColor="#A0AEC0"
        audio
        className="h-[50px]"
      />
      {caption && <p>{caption}</p>}
    </>
  )
}
