import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage'
import { RecordCarouselButton } from './RecordCarouselButton'

const RecordCarousel = (props: { imageUrls: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(props.imageUrls[0])
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const thumbnailsPerPage = 5

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const handleNext = () => {
    const nextIndex = currentSetIndex + thumbnailsPerPage
    if (nextIndex < props.imageUrls.length) {
      setCurrentSetIndex(nextIndex)
    }
  }

  const handleBack = () => {
    const prevIndex = currentSetIndex - thumbnailsPerPage
    if (prevIndex >= 0) {
      setCurrentSetIndex(prevIndex)
    }
  }

  const displayedThumbnails = props.imageUrls.slice(
    currentSetIndex,
    currentSetIndex + thumbnailsPerPage
  )

  return (
    <Flex direction="column" align="center" mt={8}>
      <Box height="524px" width="100%">
        <ResponsiveImage
          src={selectedImage ?? props.imageUrls[0]}
          css={{ height: '100%' }}
          maxHeight="524px"
          fit="contain"
        />
      </Box>

      {props.imageUrls.length > 1 && (
        <Flex mt="30px" position={'relative'} width={'100%'} height={'104px'}>
          {displayedThumbnails.map(url => (
            <Box key={url} mx="6px" height={'104px'} width="25%">
              <ResponsiveImage
                src={url}
                css={{
                  height: '100%',
                  width: '100%',
                  transition: 'opacity 0.5s ease-out',
                  cursor: 'pointer',
                }}
                maxHeight="104px"
                fit="contain"
                onClick={() => handleThumbnailClick(url)}
              />
            </Box>
          ))}
          {props.imageUrls.length > thumbnailsPerPage - 1 && (
            <Box
              position="absolute"
              right="0"
              width="80px"
              height={'100%'}
              backgroundColor={'transparent'}
              display={'flex'}
              alignItems={'center'}
            >
              <RecordCarouselButton direction="left" onClick={handleBack} />
              <RecordCarouselButton direction="right" onClick={handleNext} />
            </Box>
          )}
        </Flex>
      )}
    </Flex>
  )
}

export default RecordCarousel
