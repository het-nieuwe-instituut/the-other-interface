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
            <Flex  flexDirection='column' marginRight='1' maxW={ width ? `${width}px!important` : 'auto'}>
                <Img   
                    key={key}
                    src={src}
                    objectFit='scale-down'
                    mb={'5'}
                    w={width ? `${width}px!important` :'100%'}
                />
                <Text textStyle={'h3'} textAlign={'left'} mb={'5px'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{name}</Text>
                <Text textStyle={'micro'} textAlign={'left'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>{description}</Text>   
            </Flex>
        )                                
 }