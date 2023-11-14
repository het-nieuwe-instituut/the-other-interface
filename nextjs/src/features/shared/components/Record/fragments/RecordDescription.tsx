import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { RecordTruncateButton } from './RecordTruncateButton'

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
          bottom="27px"
          left="0"
          right="0"
          height="72px"
          bg="linear-gradient(0deg, #F9F6EE 29.41%, rgba(249, 246, 238, 0.00) 138.24%)"
        />
      )}
      {description.split(' ').length > 250 && (
        <RecordTruncateButton onClick={() => setIsTruncated(!isTruncated)} isTruncated />
      )}
    </Box>
  )
}
