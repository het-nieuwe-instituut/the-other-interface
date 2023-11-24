import { useSize } from '@chakra-ui/react-use-size'
import { useRef } from 'react'
import { useTheme } from '@chakra-ui/react'
import useScroll from '@/features/shared/hooks/useScroll'
import { useDispatch } from 'react-redux'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { USER_LOOKS_ON } from '@/features/shared/constants/mainConstants'

export const usePresenter = () => {
  const theme = useTheme()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)
  const { scrollPosition } = useScroll()
  const dispatch = useDispatch()
  const HEADER_HEIGHT = 68

  if (sizes?.height && scrollPosition >= sizes?.height - HEADER_HEIGHT) {
    dispatch(sharedActions?.userChangeLooksOn({ lookOn: USER_LOOKS_ON.EDITORIAL }))
  } else {
    dispatch(sharedActions?.userChangeLooksOn({ lookOn: USER_LOOKS_ON.GALAXY }))
  }

  return { theme, graphRef, sizes, scrollPosition }
}
