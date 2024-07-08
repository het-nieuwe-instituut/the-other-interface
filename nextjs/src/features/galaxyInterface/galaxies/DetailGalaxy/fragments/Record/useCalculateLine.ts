import { useEffect, useRef, useState } from 'react'

export const useCalculateLine = () => {
  const ref = useRef<HTMLDivElement>(null) // Change to HTMLDivElement to match usage in Record component
  const [coordinates, setCoordinates] = useState({
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '0',
    offsetLeft: 0,
    offsetTop: 0,
  })

  useEffect(() => {
    const draw = () => {
      const mainElement = document.querySelector('#detail-galaxy-grid')
      if (!mainElement) return

      const rect = mainElement.getBoundingClientRect()
      const hoveredElement = ref.current

      if (hoveredElement) {
        const hoveredRect = hoveredElement.getBoundingClientRect()

        setCoordinates({
          x1: `${hoveredRect.left + hoveredElement.clientWidth / 2}`,
          y1: `${hoveredRect.top + hoveredElement.clientHeight / 2}`,
          x2: `${rect.width / 2}`,
          y2: `${rect.height / 2}`,
          offsetLeft: hoveredRect.left + window.scrollX,
          offsetTop: hoveredRect.top + window.scrollY,
        })
      }
    }

    draw()

    window.addEventListener('resize', draw)
    window.addEventListener('mousemove', draw)

    return () => {
      window.removeEventListener('resize', draw)
      window.removeEventListener('mousemove', draw)
    }
  }, [])

  return { coordinates, ref }
}
