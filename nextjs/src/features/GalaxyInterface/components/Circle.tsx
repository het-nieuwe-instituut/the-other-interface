/* eslint-disable @typescript-eslint/no-empty-interface */
import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Props extends React.SVGProps<SVGForeignObjectElement> {}

export const Circle: React.FC<Props> = props => {
    return (
        <>
            <foreignObject xmlns="http://www.w3.org/1999/xhtml" className={`foreign-${props.className}`}>
                <Flex
                    width={'100%'}
                    height="100%"
                    background="radial-gradient(50% 50% at 50% 50%, #F7FF96 0%, rgba(249, 255, 181, 0.12) 92.71%, rgba(255, 255, 255, 0) 100%)"
                >
                    {props.children}
                </Flex>
            </foreignObject>
        </>
    )
}
