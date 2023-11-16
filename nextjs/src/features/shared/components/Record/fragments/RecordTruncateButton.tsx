import { Link } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  onClick: () => void
  isTruncated: boolean
}

export const RecordTruncateButton: React.FC<Props> = props => {
  const { t: tRecord } = useTranslation('record')
  return (
    <Link
      onClick={props.onClick}
      variant={'navigationDecorative'}
      color={'blackAlpha.100'}
      width={'fit-content'}
      _hover={{ color: 'blackAlpha.100' }}
      _active={{ color: 'blackAlpha.100' }}
      _focus={{ color: 'blackAlpha.100' }}
      display={'block'}
      mt={4}
    >
      {props.isTruncated ? tRecord('readMore') : tRecord('readLess')}
    </Link>
  )
}
