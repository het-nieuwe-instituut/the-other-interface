import { Flex, GridItem, Text } from '@chakra-ui/react'
import ActionButton from './buttons/ActionButton/ActionButton'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
  actionButtonClick?: (id: string) => void
  zIndex?: number
  onClick?: () => void
  id?: string
}

export const SearchFilterBox: React.FC<Props> = ({
  category,
  subCategory,
  actionButton,
  onClick,
  zIndex,
  actionButtonClick,
  id,
}) => {
  return (
    <GridItem
      backgroundColor={'pinkAlpha.100'}
      color={'blueAlpha.100'}
      width={'fit-content'}
      zIndex={zIndex || 'inherit'}
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
      maxWidth={'100%'}
      className={'px-2 h-[52px]'}
    >
      <Flex
        position="relative"
        maxW={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        className={'pt-1 pb-2'}
      >
        <Text className={'font-social-large text-xs leading-none text-blue.100'} isTruncated>
          {category}
        </Text>

        {actionButton && (
          <ActionButton id={id} onClick={actionButtonClick}>
            {actionButton}
          </ActionButton>
        )}
      </Flex>

      <Text className={'font-social-large text-lg leading-none truncate'} isTruncated>
        {subCategory}
      </Text>
    </GridItem>
  )
}
