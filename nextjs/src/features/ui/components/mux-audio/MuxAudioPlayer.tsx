import MuxPlayer from '@mux/mux-player-react/lazy'

interface MuxAudioPlayerProps {
  title: string
  playbackId: string
  caption?: string | null
}

export const MuxAudioPlayer: React.FC<MuxAudioPlayerProps> = ({ playbackId, caption, title }) => {
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
