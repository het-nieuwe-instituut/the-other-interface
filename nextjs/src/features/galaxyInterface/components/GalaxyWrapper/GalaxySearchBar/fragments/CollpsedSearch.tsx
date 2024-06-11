import { Flex } from '@chakra-ui/react'
import SearchIconCollapsed from '@/icons/search-icon-collapsed.svg'

type Props = {
  toggleSearchBar: () => void
  className?: string
}

export const CollpsedSearch = ({ toggleSearchBar, className }: Props) => {
  return (
    <Flex
      className={className}
      alignItems={'center'}
      justifyContent="flex-end"
      zIndex={'inherit'}
      height={'full'}
      width={'full'}
    >
      <Flex
        width={'65px'}
        background={'blueAlpha.100'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'full'}
        zIndex={20}
        onClick={toggleSearchBar}
      >
        <SearchIconCollapsed />
      </Flex>
    </Flex>
  )
}
