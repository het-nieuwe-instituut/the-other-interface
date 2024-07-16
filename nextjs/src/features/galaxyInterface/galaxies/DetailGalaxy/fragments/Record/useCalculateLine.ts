import { useEffect, useRef, useState } from 'react'

export const useCalculateLine = ({ trigger }: { trigger: boolean }) => {
  const ref = useRef<HTMLDivElement>(null) // Change to HTMLDivElement to match usage in Record component
  const [coordinates, setCoordinates] = useState({
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '0',
  })

  useEffect(() => {
    const draw = () => {
      if (!trigger) {
        return
      }
      const mainElement = document.querySelector('#detail-galaxy-grid')
      if (!mainElement) return

      const hoveredElement = ref.current

      if (hoveredElement) {
        const topPos = hoveredElement.getBoundingClientRect().top
        const leftPos = hoveredElement.getBoundingClientRect().left
        const windowCenterX = window.innerWidth / 2
        const windowCenterY = window.innerHeight / 2

        // set the line to the center of the screen
        setCoordinates({
          x1: `50%`,
          y1: `50%`,
          x2: `${windowCenterX - leftPos}`,
          y2: `${windowCenterY - topPos - 80}`,
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
  }, [trigger])

  return { coordinates, ref }
}
