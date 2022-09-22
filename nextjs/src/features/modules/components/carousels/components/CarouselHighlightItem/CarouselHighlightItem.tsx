import React from 'react'
import {  Box, Img, Text } from '@chakra-ui/react'
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
            <Box css={{display: 'flex', flexDirection: 'column', marginRight: '16px'}}>
                <Img   
                    key={key}
                    src={src}
                    objectFit='scale-down'
                    mb={'20px'}
                    css={{width: width ? `${width}px!important` :'100%'}}
                />
                <Text textStyle={'h3'} mb={'5px'}>{name}</Text>
                <Text textStyle={'micro'}>{description}</Text>   
            </Box>
        )                                
 }