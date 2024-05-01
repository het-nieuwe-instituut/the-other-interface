import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { PositionedStory } from '../types'

export const useDrawLines = (selector: string, template: number, stories: PositionedStory[]) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const searchParams = useSearchParams()

  const page = parseInt(searchParams?.get('page') ?? '1')
  const lang = searchParams?.get('lang')

  const calculatePoint = useCallback((element: Element): { x: number; y: number } => {
    const rect = element.getBoundingClientRect()
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
  }, [])

  const drawLinesForTemplate = useCallback(
    (gridElements: Element[]) => {
      const svg = svgRef.current
      if (!svg) return
      svg.innerHTML = ''

      const fragment = document.createDocumentFragment()

      for (let i = 0; i < gridElements.length - 1; i++) {
        const startElement = gridElements[i]
        const endElement = gridElements[i + 1]

        if (startElement && endElement) {
          const startPoint = calculatePoint(startElement)
          const endPoint = calculatePoint(endElement)

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
          line.setAttribute('x1', startPoint.x.toString())
          line.setAttribute('y1', startPoint.y.toString())
          line.setAttribute('x2', endPoint.x.toString())
          line.setAttribute('y2', endPoint.y.toString())
          line.setAttribute('stroke', 'RGBA(0, 81, 255, .8)')
          fragment.appendChild(line)
        }
      }

      svg.appendChild(fragment)
    },
    [calculatePoint]
  )

  useEffect(() => {
    const drawAfterLayout = () => {
      const gridElements = Array.from(document.querySelectorAll(selector))
      if (gridElements.length) {
        drawLinesForTemplate(gridElements)
      }
    }

    drawAfterLayout()

    window.addEventListener('resize', drawAfterLayout)

    return () => {
      window.removeEventListener('resize', drawAfterLayout)
    }
  }, [template, drawLinesForTemplate, selector, page, lang, stories])

  return svgRef
}
