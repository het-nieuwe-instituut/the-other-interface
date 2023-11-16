import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage'
import { RecordCarouselButton } from './RecordCarouselButton'

const RecordCarousel = (props: { imageUrls: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(props.imageUrls[0])
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const thumbnailsPerPage = 4

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
      <Box height="523.605px" width="100%">
        <ResponsiveImage
          src={selectedImage ?? props.imageUrls[0]}
          css={{ height: '100%' }}
          maxHeight="523px"
          fit="fill"
        />
      </Box>
      <Flex mt="30px" position={'relative'} width={'100%'}>
        {displayedThumbnails.map(url => (
          <Box key={url} mx="6px" height={'103.702px'} width="25%">
            <ResponsiveImage
              src={url}
              css={{
                height: '100%',
                width: '100%',
                transition: 'opacity 0.5s ease-out',
                cursor: 'pointer',
              }}
              maxHeight="103.702px"
              fit="fill"
              onClick={() => handleThumbnailClick(url)}
            />
          </Box>
        ))}
        <Box
          position="absolute"
          right="80px"
          width="46.211px"
          height={'100%'}
          background="linear-gradient(270deg, #FFF -0.01%, rgba(255, 255, 255, 0.00) 100%)"
        />
        <Box
          position="absolute"
          right="0"
          width="80px"
          height={'100%'}
          backgroundColor={'ivoryAlpha.95'}
          display={'flex'}
          alignItems={'center'}
        >
          <RecordCarouselButton direction="left" onClick={handleBack} />
          <RecordCarouselButton direction="right" onClick={handleNext} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default RecordCarousel
