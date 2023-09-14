import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { GridItem, Flex } from '@chakra-ui/react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { Record as TRecord } from './types'
import { RecordText } from './RecordText'
import { useRouter } from 'next/navigation'

type Props = {
  record: TRecord & {
    position: Position
    category: CloudCategory
  }
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, thumbnail, category, position, title } = record
  const router = useRouter()

  const handleClick = () => {
    router.push(`/detail/${category}/${id}`)
  }

  return (
    <GridItem position="relative">
      <Flex
        position="absolute"
        style={{ ...position }}
        width="70%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        cursor={'pointer'}
        onClick={handleClick}
        _hover={{ transform: 'scale(1.05)' }}
        transition="all .4s ease-in-out"
      >
        <ResponsiveImage
          src={thumbnail}
          alt={title}
          maxHeight="calc(100% - 2.5vw - 12px)" // where 2.6vw are a texts' line heights, 12px are gaps
        />

        <RecordText
          title={title}
          categoryType={category}
          css={{
            position: !thumbnail ? 'absolute' : 'relative',
          }}
        />
      </Flex>
    </GridItem>
  )
}
