import React from 'react'
import {  Box, Text } from '@chakra-ui/react'
interface Props {
    key: number
    name: string
    description: string
    boxSize: number
} 

export const CarouselTheme = (props: Props) => {
    const { key, name, description, boxSize } = props;
        return (
            <Box key={key} pl={'34px'} pr={'34px'} css={{display: 'flex', flexDirection: 'column', width: `${boxSize}px`, height: `${boxSize}px`, borderRadius: `${boxSize / 2}px`, background: 'radial-gradient(50% 50% at 50% 50%, #CCCED0 0%, rgba(204, 206, 208, 0) 100%)', boxSizing: 'content-box'}}>
                <Text textStyle={'h3'} pt={'33%'} mb={'16px'}>{name}</Text>
                <Text textStyle={'small'} textAlign='center'>{description}</Text>   
            </Box>
        )                                
 }