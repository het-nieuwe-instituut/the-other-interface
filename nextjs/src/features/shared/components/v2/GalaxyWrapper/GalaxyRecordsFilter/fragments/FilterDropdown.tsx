import { Text, GridItem } from '@chakra-ui/react'

interface Props {
  title: string
  selectedOption: string
}

export const FilterDropdown: React.FC<Props> = ({ title, selectedOption }) => {
  return (
    <GridItem
      backgroundColor={'navyAlpha.100'}
      borderRadius={'5px'}
      padding={'4px 8px'}
      color={'blueAlpha.100'}
    >
      <Text textStyle="socialLarge.sm">{title}</Text>
      <Text textStyle="socialLarge.lg">{selectedOption}</Text>
    </GridItem>
  )
}
