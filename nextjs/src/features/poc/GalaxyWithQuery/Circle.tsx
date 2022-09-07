import React, { Suspense } from 'react'

interface Props extends React.SVGProps<SVGCircleElement> {}

export const Circle: React.FC<Props> = props => {
    const ref = React.useRef(null)

    return (
        <>
            <circle ref={ref} fillOpacity={0.3} fill={`url('#gradient-${props.name}')`} {...props}></circle>
            <foreignObject xmlns="http://www.w3.org/1999/xhtml" className={`foreign-${props.className}`}>
                {props.children}
            </foreignObject>
        </>
    )
}
