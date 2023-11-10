'use client'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  description: string
}

export const RecordDescription: React.FC<Props> = props => {
  return (
    <Box mt={4}>
      <Text as="p" textStyle="recordText">
        {props.description}
      </Text>
    </Box>
  )
}
