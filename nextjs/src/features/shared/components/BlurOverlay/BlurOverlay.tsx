import { CSSProperties } from 'react'
import { SEARCH_MODE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'

const BlurOverlay: React.FC = () => {
  return (
    <div
      style={{ '--z-index': SEARCH_MODE_OVERLAY_Z_INDEX } as CSSProperties}
      className=" absolute inset-0 z-[var(--z-index)] cursor-pointer bg-pink-60 backdrop-blur-[5px] "
    />
  )
}

export default BlurOverlay
