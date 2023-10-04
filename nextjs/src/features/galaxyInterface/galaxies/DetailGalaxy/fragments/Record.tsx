import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { GridItem, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { PositionedRecord } from './types'
import { RecordText } from './RecordText'
import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'

type Props = {
  record: PositionedRecord
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, category, position, grid } = record
  const { data, isLoading } = useRecordDetail(category, id)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/detail/${category}/${id}`)
  }
  if (!data && !isLoading) return null

  return (
    <GridItem position="relative" css={{ ...grid }}>
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
      >
        <ResponsiveImage
          src={data?.thumbnail}
          alt={data?.title}
          maxHeight={!data?.thumbnail ? '80%' : 'calc(100% - 1.6vw - 12px)'} // where 2.6vw are a texts' line heights, 16px are gaps
        />

        <RecordText
          title={data?.title}
          categoryType={category}
          css={{
            position: !data?.thumbnail ? 'absolute' : 'relative',
          }}
        />
      </Flex>
    </GridItem>
  )
}
