import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { GridItem, Flex } from '@chakra-ui/react'

import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { usePresenter } from './usePresenter'

type Props = {
  record: PositionedRecord
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, category, position, grid } = record
  const { recordDetails, isLoading, handleClick } = usePresenter(id, category)

  if (!recordDetails && !isLoading) return null

  return (
    <GridItem position="relative" css={{ ...grid }}>
      <Flex
        position="absolute"
        width="80%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="2px"
        cursor={'pointer'}
        onClick={handleClick}
        _hover={{ transform: 'scale(1.05)' }}
        transition="all .4s ease-in-out"
        style={{ ...position }}
      >
        <ResponsiveImage
          src={recordDetails?.thumbnail?.[0]}
          alt={recordDetails?.title}
          maxHeight={'calc(100% - 2vw - 5px)'} // where 1.6vw are a texts' line heights, 5px are gaps
          size={'11vw'}
          css={{
            flex: '1 1 calc(100% - 2vw - 5px)',
          }}
        />

        <RecordText title={recordDetails?.title} categoryType={category} />
      </Flex>
    </GridItem>
  )
}
