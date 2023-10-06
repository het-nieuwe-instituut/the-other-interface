import { Box } from '@chakra-ui/react'

interface Props {
  onClick: () => void
}

export const CancelButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      cursor="pointer"
      onClick={onClick}
      _before={{
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '7px',
        height: '1px',
        backgroundColor: 'currentColor',
        transform: 'translate(-50%, -50%) rotate(45deg)',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '7px',
        height: '1px',
        backgroundColor: 'currentColor',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
      }}
    />
  )
}
