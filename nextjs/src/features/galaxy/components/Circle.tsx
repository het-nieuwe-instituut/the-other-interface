import { Box, Flex } from '@chakra-ui/react'
import * as CSS from 'csstype'
import React from 'react'

interface Props
    extends Pick<
        React.SVGProps<SVGForeignObjectElement>,
        'id' | 'className' | 'height' | 'width' | 'x' | 'y' | 'pointerEvents' | 'children'
    > {
    defaultBackground?: string
    hoverBackground?: string
    backgroundAnimation?: string
    disableHover?: boolean
}

export const Circle: React.FC<Props> = props => {
    return (
        <Box
            as={'foreignObject'}
            xmlns="http://www.w3.org/1999/xhtml"
            className={`foreign-${props.className}`}
            id={props.id}
            width={props.width}
            height={props.height}
            x={props.x}
            y={props.y}
            pointerEvents={props.pointerEvents as CSS.Property.PointerEvents}
            style={{ overflow: 'visible' }}
        >
            <Flex
                width={'100%'}
                height="100%"
                transition={'all 1s ease'}
                position={'absolute'}
                _hover={
                    !props.disableHover
                        ? {
                              _before: {
                                  opacity: 0,
                              },
                              _after: {
                                  opacity: 1,
                              },
                          }
                        : undefined
                }
                _before={{
                    transition: !props.disableHover ? 'all 1s ease' : undefined,
                    content: `''`,
                    background: props.defaultBackground,
                    display: 'block',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    opacity: !props.disableHover ? 1 : undefined,
                    width: '100%',
                    animation: props.backgroundAnimation,
                    animationFillMode: 'forwards',
                }}
                _after={
                    !props.disableHover
                        ? {
                              transition: 'all 1s ease',
                              content: `''`,
                              background: props.hoverBackground,
                              display: 'block',
                              height: '100%',
                              position: 'absolute',
                              top: '0',
                              opacity: 0,
                              width: '100%',
                              animation: props.backgroundAnimation,
                              animationFillMode: 'forwards',
                          }
                        : undefined
                }
                justifyContent="center"
                alignItems="center"
            >
                {props.children}
            </Flex>
        </Box>
    )
}
