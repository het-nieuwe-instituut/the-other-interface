'use client'

import { cn } from '../../utils/cn'

interface Props {
  src: string
  type: string
  className?: string
}

export const VideoPlayer: React.FC<Props> = ({ src, type, className }) => (
  <div className={cn(className)}>
    <div className="max-h-[500px] overflow-hidden">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video height={500} controls>
        <source src={src} type={type} />
      </video>
    </div>
  </div>
)
