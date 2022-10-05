import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Props
    extends Pick<
        React.SVGProps<SVGForeignObjectElement>,
        'id' | 'className' | 'height' | 'width' | 'x' | 'y' | 'pointerEvents' | 'children'
    > {
    defaultBackground: string
    hoverBackground: string
}

export const Circle: React.FC<Props> = props => {
    return (
        <>
            <foreignObject
                xmlns="http://www.w3.org/1999/xhtml"
                className={`foreign-${props.className}`}
                id={props.id}
                width={props.width}
                height={props.height}
                x={props.x}
                y={props.y}
                pointerEvents={props.pointerEvents}
            >
                <Flex
                    width={'100%'}
                    height="100%"
                    transition={'all 1s ease'}
                    position={'absolute'}
                    _hover={{
                        _before: {
                            opacity: 0,
                        },
                        _after: {
                            opacity: 1,
                        },
                    }}
                    _before={{
                        transition: 'all 1s ease',
                        content: `''`,
                        background: props.defaultBackground,

                        display: 'block',
                        height: '100%',
                        position: 'absolute',
                        top: '0',
                        opacity: 1,
                        width: '100%',
                    }}
                    _after={{
                        transition: 'all 1s ease',
                        content: `''`,
                        background: props.hoverBackground,

                        display: 'block',
                        height: '100%',
                        position: 'absolute',
                        top: '0',
                        opacity: 0,
                        width: '100%',
                    }}
                    justifyContent="center"
                    alignItems="center"
                >
                    {props.children}
                </Flex>
            </foreignObject>
        </>
    )
}
