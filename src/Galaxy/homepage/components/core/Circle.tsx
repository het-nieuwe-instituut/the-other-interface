import React, { Suspense } from 'react'

interface Props extends React.SVGProps<SVGCircleElement> {}

export const Circle: React.FC<Props> = props => {
    const ref = React.useRef(null)

    return (
        <>
            <circle ref={ref} fill="#69b3a2" fillOpacity={0.3} stroke={'#69a2b2'} strokeWidth={4} {...props}></circle>
            <foreignObject xmlns="http://www.w3.org/1999/xhtml" className={`foreign-${props.className}`}>
                {props.children}
            </foreignObject>
        </>
    )
}
