import Breadcrumb from '@/icons/arrows/breadcrumb.svg'
import styled from '@emotion/styled'

export const ArrowPrev = styled(Breadcrumb)`
    right: 46px;
    bottom: 71px; 
    position: absolute; 
    outline: none; 
    border: none; 
    z-index: 2;
    transform: rotate(0.5turn);
    cursor: pointer;
`

export const ArrowNext = styled(Breadcrumb)`
    right: 24px;
    bottom: 71px; 
    position: absolute; 
    outline: none; 
    border: none; 
    z-index: 2;
    cursor: pointer;
`
