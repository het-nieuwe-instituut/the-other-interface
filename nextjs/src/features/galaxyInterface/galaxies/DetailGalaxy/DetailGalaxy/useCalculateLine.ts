import { useEffect } from 'react'

export const useCalculateLine = () => {
  // need to now start and end

  const coordinates = {
    x1: '1',
    y1: '1',
    x2: '1000',
    y2: '1000',
  }
  useEffect(() => {
    const draw = () => {
      console.log('drawing')
    }
    draw()

    window.addEventListener('resize', draw)

    return () => {
      window.removeEventListener('resize', draw)
    }
  }, [])

  return coordinates
}
