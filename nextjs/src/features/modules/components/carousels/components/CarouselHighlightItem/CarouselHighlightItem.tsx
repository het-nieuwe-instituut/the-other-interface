import React from 'react'
import { Flex, Img, Text } from '@chakra-ui/react'
interface Props {
    src: string;
    key: number
    name: string
    description: string
    width?: number
} 

export const CarouselHighlightItem = (props: Props) => {
    const { src, key, name, description, width } = props;
        return (
            <Flex  flexDirection='column' marginRight='1'>
                <Img   
                    key={key}
                    src={src}
                    objectFit='scale-down'
                    mb={'5'}
                    w={width ? `${width}px!important` :'100%'}
                />
                <Text textStyle={'h3'} mb={'5px'}>{name}</Text>
                <Text textStyle={'micro'}>{description}</Text>   
            </Flex>
        )                                
 }