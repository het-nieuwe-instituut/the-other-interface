import { Box } from '@chakra-ui/react'

interface Props {
  onClick: () => void
  isOpen: boolean
}

export const ChangeButton: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <Box
      position="relative"
      width="9px"
      height="4.5px"
      cursor="pointer"
      onClick={onClick}
      _before={{
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '0',
        height: '0',
        borderLeft: '4.5px solid transparent',
        borderRight: '4.5px solid transparent',
        borderTop: '4.5px solid currentColor',
        transform: isOpen
          ? 'translate(-50%, -50%) rotate(180deg)'
          : 'translate(-50%, -50%) rotate(0deg)',
        transition: 'transform 0.3s ease-in-out',
      }}
    />
  )
}
