import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
  isClickable?: boolean
  onClick?: () => void
}

export const SearchFilterBox: React.FC<Props> = ({
  category,
  subCategory,
  actionButton,
  isClickable = false,
  onClick,
}) => {
  return (
    <GridItem
      backgroundColor={'navyAlpha.100'}
      borderRadius={'5px'}
      padding={'4px 8px'}
      color={'blueAlpha.100'}
      width={'fit-content'}
      zIndex={'inherit'}
      cursor={isClickable ? 'pointer' : 'default'}
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

      <Text textStyle="socialLarge.lg">{subCategory}</Text>
    </GridItem>
  )
}
