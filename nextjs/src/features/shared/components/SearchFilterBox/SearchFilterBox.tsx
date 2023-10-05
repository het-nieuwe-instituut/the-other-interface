import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
}

export const SearchFilterBox: React.FC<Props> = ({ category, subCategory, actionButton }) => {
  return (
    <GridItem
      backgroundColor={'navyAlpha.100'}
      borderRadius={'5px'}
      padding={'4px 8px'}
      color={'blueAlpha.100'}
      width={'fit-content'}
    >
      <Flex position="relative" width="100%" alignItems={'center'} justifyContent={'space-between'}>
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
