import { Box } from '@chakra-ui/react'
import BigArrowLeft from '@/icons/arrows/big-arrow-left.svg'
import BigArrowRight from '@/icons/arrows/big-arrow-right.svg'

interface Props {
  direction: 'left' | 'right'
  onClick: () => void
}

export const RecordCarouselButton: React.FC<Props> = props => {
  return (
    <Box width="30px" height={'61px'} cursor={'pointer'} mr={'3'}>
      {props.direction === 'left' ? (
        <BigArrowLeft onClick={props.onClick} />
      ) : (
        <BigArrowRight onClick={props.onClick} />
      )}
    </Box>
  )
}
