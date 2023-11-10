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
    <Flex direction="column" align="center">
      <Box height="523.605px" width="100%">
        <ResponsiveImage src={selectedImage} size={'523px'} maxHeight="523px" />
      </Box>
      <Flex mt="30px">
        {props.imageUrls.map(url => (
          <Box key={url} mx="6px">
            <ResponsiveImage
              src={url}
              size="154.78px"
              //   width="154.78px"
              maxHeight="103.702px"
              //   onClick={() => handleThumbnailClick(url)}
            />
          </Box>
        ))}
        <Box position="absolute" right="0" width="68px">
          <Button onClick={handleBack}>{'<'}</Button>
          <Button onClick={handleNext}>{'>'}</Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default RecordCarousel
