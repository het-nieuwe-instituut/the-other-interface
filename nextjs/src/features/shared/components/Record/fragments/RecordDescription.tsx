import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  description: string
}

export const RecordDescription: React.FC<Props> = ({ description }) => {
  const [isTruncated, setIsTruncated] = useState(true)

  const truncateText = (text: string, limit: number) => {
    const words = text.split(' ')
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...'
    }
    return text
  }

  const displayText = isTruncated ? truncateText(description, 250) : description

  return (
    <Box mt={4} position="relative">
      <Text as="p" textStyle="recordText">
        {displayText}
      </Text>
      {isTruncated && description.split(' ').length > 250 && (
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="4rem"
          bg="linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1))"
        />
      )}
      {description.split(' ').length > 250 && (
        <Button onClick={() => setIsTruncated(!isTruncated)} mt={2}>
          {isTruncated ? 'Read More' : 'Read Less'}
        </Button>
      )}
    </Box>
  )
}
