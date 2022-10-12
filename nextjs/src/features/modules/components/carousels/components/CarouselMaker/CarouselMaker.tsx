import React from 'react'
import {  Flex, Img, Text } from '@chakra-ui/react'
interface Props {
    src: string;
    key: number
    name: string
    description: string
    boxSize: number
} 

export const CarouselMaker = (props: Props) => {
    const { src, key, name, description, boxSize } = props;
        return (
            <Flex flexDirection='column' mr='5'>
                <Img   
                    key={key}
                    src={src}
                    borderRadius='full'
                    objectFit='cover'
                    mb={'2'}
                    width={`${boxSize}px!important`} 
                    height={`${boxSize}px`}
                    boxSize={`${boxSize}px!important`}
                />
                <Text textStyle={'h3'} mb={'1.5'}>{name}</Text>
                <Text textStyle={'micro'}>{description}</Text>   
            </Flex>
        )                                
 }