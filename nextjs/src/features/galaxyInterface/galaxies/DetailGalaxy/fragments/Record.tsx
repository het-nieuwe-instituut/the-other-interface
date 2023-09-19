import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { GridItem, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { PositionedRecord, Record as TRecord } from './types'
import { RecordText } from './RecordText'

type Props = {
  record: TRecord & PositionedRecord
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, thumbnail, category, position, grid, title } = record
  const router = useRouter()

  const handleClick = () => {
    router.push(`/detail/${category}/${id}`)
  }

  return (
    <GridItem position="relative" css={{ ...grid }} border={'1px solid yellow'}>
      <Flex
        position="absolute"
        width="80%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        cursor={'pointer'}
        onClick={handleClick}
        _hover={{ transform: 'scale(1.05)' }}
        transition="all .4s ease-in-out"
        style={{ ...position }}
        border={'1px solid yellow'}
      >
        <ResponsiveImage
          src={thumbnail}
          alt={title}
          maxHeight={!thumbnail ? '80%' : 'calc(100% - 1.6vw - 12px)'} // where 2.6vw are a texts' line heights, 16px are gaps
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
