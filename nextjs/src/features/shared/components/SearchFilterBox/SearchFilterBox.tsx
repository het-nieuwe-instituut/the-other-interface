import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
  zIndex?: number
  onClick?: () => void
}

export const SearchFilterBox: React.FC<Props> = ({
  category,
  subCategory,
  actionButton,
  onClick,
  zIndex,
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
    >
      <Flex
        position="relative"
        width="100%"
        alignItems={'center'}
        gap="5px"
        justifyContent={'space-between'}
      >
        <Text textStyle="socialLarge.sm">{category}</Text>

        {actionButton && (
          <Box position="relative" width="7px" height="7px" cursor="pointer">
            {actionButton}
          </Box>
        )}
      </Flex>

      <Text textStyle="socialLarge.xl">{subCategory}</Text>
    </GridItem>
  )
}
