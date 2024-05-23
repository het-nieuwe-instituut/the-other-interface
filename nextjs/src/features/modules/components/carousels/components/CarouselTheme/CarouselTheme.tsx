import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  key: number
  name: string
  description: string
  boxSize: number
}

export const CarouselTheme = (props: Props) => {
  const { key, name, description, boxSize } = props
  return (
    <Flex
      key={key}
      pl={'2.25'}
      pr={'2.25'}
      flexDirection="column"
      width={`${boxSize}px`}
      height={`${boxSize}px`}
      borderRadius={`${boxSize / 2}px`}
      background={'radial-gradient(50% 50% at 50% 50%, #CCCED0 0%, rgba(204, 206, 208, 0) 100%)'}
      boxSizing={'content-box'}
    >
      <Text textStyle={'h3'} pt={'33%'} mb={'4'}>
        {name}
      </Text>
      <Text textStyle={'small'} textAlign="center">
        {description}
      </Text>
    </Flex>
  )
}
