import { Box, Text, useDimensions } from '@chakra-ui/react'
import Image from 'next/image'
import { createRef } from 'react'

import { ComponentModulesImage } from 'src/generated/graphql'

import { calculateImagePropotions } from '../../helpers/modulesHelpers'
import { imageBasePath } from '../../modulesConstants'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface MediaImageProps {
  component: ComponentModulesImage
  onClick?: () => void
}

const IMAGE_HEIGHT = 680

const MediaImage = (props: MediaImageProps) => {
  const { image, alt_text, caption } = props.component
  const url = image?.data?.attributes?.url
  const imageRef = createRef<HTMLDivElement>()
  const dimensions = useDimensions(imageRef, true)
  const originalHeight = image?.data?.attributes?.height ?? 1
  const originalWidth = image?.data?.attributes?.width ?? 1
  const proportions = calculateImagePropotions(
    originalWidth,
    originalHeight,
    IMAGE_HEIGHT,
    dimensions?.borderBox.width || 1223
  )
  const imagePath = imageBasePath(url) || ''

  return (
    <Box
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.Image.spacingTop}
      pb={modulesSpacingMapper?.Image.spacingBottom}
    >
      <Box maxW={'80rem'} ref={imageRef}>
        <Box pb="2.5">
          {/* <Img alt={alt_text || ''} src={imagePath} w="full" maxH={'42.5rem'} /> */}
          <Image
            src={imagePath}
            height={proportions.height}
            width={proportions.width || IMAGE_HEIGHT}
            layout="fixed"
            alt={alt_text || ''}
            loading="eager"
            onContextMenu={e => e.preventDefault()}
          />
        </Box>
        {caption && (
          <Box width={'100'} pb="1">
            <Text textStyle={'micro'}>{caption}</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default MediaImage
