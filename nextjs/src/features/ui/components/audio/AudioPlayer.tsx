'use client'

import { cn } from '../../utils/cn'

interface Props {
  src: string
  type: string
  className?: string
}

export const AudioPlayer: React.FC<Props> = ({ src, type, className }) => (
  <div className={cn(className)}>
    <div className="h-[80px] overflow-hidden">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio className="h-[50px]" controls>
        <source src={src} type={type} />
      </audio>
    </div>
  </div>
)
