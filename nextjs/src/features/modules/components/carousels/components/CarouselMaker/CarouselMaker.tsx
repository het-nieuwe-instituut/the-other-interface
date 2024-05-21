import { Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  src: string
  key: number
  name: string
  description: string
  boxSize: number
}

export const CarouselMaker = (props: Props) => {
  const { src, key, name, description, boxSize } = props
  return (
    <Flex flexDirection="column" mr="5" width={`${boxSize}px!important`}>
      <Img
        key={key}
        src={src}
        borderRadius="full"
        objectFit="cover"
        mb={'2'}
        width={`${boxSize}px!important`}
        height={`${boxSize}px!important`}
        boxSize={`${boxSize}px!important`}
        onContextMenu={e => e.preventDefault()}
      />
      <Text
        textStyle={'h3'}
        mb={'1.5'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
        textOverflow={'ellipsis'}
      >
        {name}
      </Text>
      <Text textStyle={'micro'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>
        {description}
      </Text>
    </Flex>
  )
}
