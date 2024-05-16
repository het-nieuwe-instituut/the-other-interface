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
      borderRadius={'5px'}
      padding={'4px 8px'}
      color={'blueAlpha.100'}
      width={'fit-content'}
      height={'100%'}
      zIndex={zIndex || 'inherit'}
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
      minHeight="50px"
      maxWidth={'100%'}
    >
      <Flex
        position="relative"
        maxW={'100%'}
        alignItems={'center'}
        gap="5px"
        justifyContent={'space-between'}
      >
        <Text textStyle="socialLarge.sm" isTruncated>
          {category}
        </Text>

        {actionButton && (
          <ActionButton id={id} onClick={actionButtonClick}>
            {actionButton}
          </ActionButton>
        )}
      </Flex>

      <Text textStyle="socialLarge.xl" isTruncated>
        {subCategory}
      </Text>
    </GridItem>
  )
}
