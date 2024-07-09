import { Pulse } from '@/features/galaxyInterface/components/Pulse/Pulse'
import { useSetStoryOrRecordImageToCache } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useStoryOrRecordImageQuery'
import { useState } from 'react'
import { ResponsiveImage, ResponsiveImageProps } from './ResponsiveImage'

interface StoryOrRecordResponsiveImage extends ResponsiveImageProps {
  recordOrStoryId: string
}
export const StoryOrRecordResponsiveImage = (props: StoryOrRecordResponsiveImage) => {
  const { onClick, src, recordOrStoryId, ...restProps } = props
  const setStoryOrRecorImageToCache = useSetStoryOrRecordImageToCache()
  const [trigger, setTrigger] = useState(false)

  return (
    <>
      <Pulse trigger={trigger} delay={700} />
      <ResponsiveImage
        {...restProps}
        src={src}
        onClick={() => {
          setTrigger(true)
          if (src) setStoryOrRecorImageToCache({ id: recordOrStoryId, image: src })
          onClick?.()
        }}
      />
    </>
  )
}
