import { useEffect, useState } from 'react'

export const useCalculateLine = () => {
  // need to know start and end
  const [coordinates, setCoordinates] = useState({ x1: '0', y1: '0', x2: '0', y2: '0' })

  useEffect(() => {
    const draw = () => {
      const mainElement = Array.from(document.querySelectorAll('#detail-galaxy-grid'))[0]
      const rect = mainElement.getBoundingClientRect()
      const hoveredElement = Array.from(document.querySelectorAll('.hovered'))[0]

      if (hoveredElement) {
        const hoveredRect = hoveredElement.getBoundingClientRect()

        setCoordinates({
          x1: `${hoveredRect.left - rect.left + hoveredElement.clientWidth / 2}`,
          y1: `${hoveredRect.top - rect.top + hoveredElement.clientHeight / 2}`,
          x2: `${(rect.right - rect.left) / 2}`,
          y2: `${(rect.bottom - rect.top) / 2}`,
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

  return coordinates
}
