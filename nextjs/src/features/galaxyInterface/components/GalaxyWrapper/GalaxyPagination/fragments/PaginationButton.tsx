import { Button } from '@chakra-ui/react'
import { ArrowIcon } from './ArrowIcon'
import { useState } from 'react'
import colors from '@/features/shared/styles/theme/foundations/colors'

type Props = {
  handleClick?: () => void
  side?: 'left' | 'right'
  disabled?: boolean
}

export const PaginationButton: React.FC<Props> = ({
  handleClick,
  side = 'left',
  disabled = false,
}) => {
  const rotation = side === 'left' ? '' : 'rotate(180deg)'
  const [fillColor, setFillColor] = useState(colors.pinkAlpha[100])

  return (
    <Button
      bg="blueAlpha.100"
      p={0}
      padding={'0'}
      onClick={handleClick}
      transition="transform all 0.2s ease-in-out"
      border="none"
      borderRadius={'3px'}
      display={'flex'}
      isDisabled={disabled}
      _focus={{ boxShadow: 'none' }}
      _disabled={{ opacity: '0.3', cursor: 'default', _hover: { bg: 'blueAlpha.100' } }}
      _hover={{ bg: 'pinkAlpha.100' }}
      onMouseEnter={() => setFillColor(colors.blueAlpha[100])} // Set fill color to transparent on hover
      onMouseLeave={() => setFillColor(colors.pinkAlpha[100])}
    >
      <ArrowIcon rotation={rotation} fill={fillColor} />
    </Button>
  )
}
