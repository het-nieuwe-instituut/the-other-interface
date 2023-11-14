import { Box, Flex, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage'
// Import Keen Slider or React Responsive Carousel if needed

const RecordCarousel = (props: { imageUrls: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(props.imageUrls[0])

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const handleNext = () => {
    // Logic to move to the next set of thumbnails
  }

  const handleBack = () => {
    // Logic to move to the previous set of thumbnails
  }

  return (
    <Flex direction="column" align="center" mt={8}>
      <Box height="523.605px" width="100%">
        <ResponsiveImage
          src={selectedImage}
          css={{ height: '100%' }}
          maxHeight="523px"
          fit="cover"
        />
      </Box>
      <Flex mt="30px" position={'relative'}>
        {props.imageUrls.map(url => (
          <Box key={url} mx="6px" height={'103.702px'} width="154.78px">
            <ResponsiveImage
              src={url}
              css={{
                height: '100%',
                width: '100%',
                transition: 'opacity 0.5s ease-out',
                opacity: selectedImage === url ? 1 : 0.5,
                cursor: 'pointer',
              }}
              maxHeight="103.702px"
              fit="cover"
              onClick={() => handleThumbnailClick(url)}
            />
          </Box>
        ))}
        <Box
          position="absolute"
          right="80px"
          width="46.211px"
          height={'100%'}
          background="linear-gradient(90deg, #FFF -0.01%, rgba(255, 255, 255, 0.00) 100%)"
        />
        <Box
          position="absolute"
          right="0"
          width="80px"
          height={'100%'}
          backgroundColor={'ivoryAlpha.95'}
        >
          <Button onClick={handleBack}>{'<'}</Button>
          <Button onClick={handleNext}>{'>'}</Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default RecordCarousel
