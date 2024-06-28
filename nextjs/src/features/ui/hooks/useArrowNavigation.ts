import { useEffect } from 'react'

export const useArrowNavigation = ({
  disabled = false,
  onRight,
  onLeft,
}: {
  disabled?: boolean
  onRight: () => void
  onLeft: () => void
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (disabled) return

      if (e.key === 'ArrowRight') {
        onRight()
      } else if (e.key === 'ArrowLeft') {
        onLeft()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [disabled, onLeft, onRight])
}
