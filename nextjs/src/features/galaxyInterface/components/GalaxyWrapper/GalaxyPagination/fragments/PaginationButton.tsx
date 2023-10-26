import { Button } from '@chakra-ui/react'
import { ArrowIcon } from './ArrowIcon'
import { useState } from 'react'
import colors from '@/features/shared/styles/theme/foundations/colors'

type Props = {
  handleClick: () => void
  side?: 'left' | 'right'
  disabled?: boolean
}

colors
export const PaginationButton: React.FC<Props> = ({
  handleClick,
  side = 'left',
  disabled = false,
}) => {
  const rotation = side === 'left' ? '' : 'rotate(180deg)'

  const [fillColor, setFillColor] = useState(colors.blueAlpha[100])

  return (
    <Button
      bg="transparent"
      p={0}
      padding={'0'}
      onClick={handleClick}
      _hover={{ bg: 'blueAlpha.100' }}
      transition="transform all 0.2s ease-in-out"
      border="none"
      borderRadius={'0'}
      display={'flex'}
      _focus={{ boxShadow: 'none' }}
      _disabled={{ bg: 'blueAlpha.100' }}
      disabled={disabled}
      onMouseEnter={() => setFillColor(colors.pinkAlpha[100])} // Set fill color to transparent on hover
      onMouseLeave={() => setFillColor(colors.blueAlpha[100])}
    >
      <ArrowIcon rotation={rotation} fill={fillColor} />
    </Button>
  )
}
