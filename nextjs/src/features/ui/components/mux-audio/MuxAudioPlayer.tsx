import MuxPlayer from '@mux/mux-player-react/lazy'

interface MuxAudioPlayerProps {
  title?: string | null
  playbackId?: string | null
  caption?: string | null
}

export const MuxAudioPlayer: React.FC<MuxAudioPlayerProps> = ({ playbackId, caption, title }) => {
  if (!title || !playbackId) return null

  return (
    <>
      <MuxPlayer
        title={title}
        streamType="on-demand"
        playbackId={playbackId}
        audio
        style={{ height: '50px' }}
      />
      {caption && <p>{caption}</p>}
    </>
  )
}
