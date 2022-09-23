import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const ArrowPrevContainer = styled(Box)`
    right: 55px;
    bottom: 71px; 
    position: absolute; 
    outline: none; 
    border: none; 
    z-index: 2;
    cursor: pointer;
    width:44px;
    background: linear-gradient(270deg, #FBFBFB 84.57%, rgba(251, 251, 251, 0) 100%);
    display:flex;
    justify-content: center;
    align-items: center;
`

export const ArrowNextContainer = styled(Box)`
    right: 24px;
    bottom: 71px; 
    position: absolute; 
    outline: none; 
    border: none; 
    z-index: 2;
    cursor: pointer;
    width:44px;
    background: linear-gradient(270deg, #FBFBFB 84.57%, rgba(251, 251, 251, 0) 100%);
    display:flex;
    justify-content: center;
    align-items: center;
`
