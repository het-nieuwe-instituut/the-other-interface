import React from 'react'
import {  Box, Img, Text } from '@chakra-ui/react'
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
            <Box css={{display: 'flex', flexDirection: 'column'}} mr='20px'>
                <Img   
                    key={key}
                    src={src}
                    borderRadius='full'
                    objectFit='cover'
                    mb={'30px'}
                    css={{width: `${boxSize}px!important`, height: `${boxSize}px`}}
                    boxSize={`${boxSize}px`}
                />
                <Text textStyle={'h3'} mb={'5px'}>{name}</Text>
                <Text textStyle={'micro'}>{description}</Text>   
            </Box>
        )                                
 }