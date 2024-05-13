import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { GridItem, Flex, Text } from '@chakra-ui/react'

import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { usePresenter } from './usePresenter'
import { useZoomHoverRecordResult } from '@/features/shared/hooks/queries/useZoomHoverRecordResult'
import { Position } from '@/features/shared/types/position'
import { Category } from '@/features/shared/utils/categories'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'

type Props = {
  record: PositionedRecord
}

interface RecordDetailsType {
  thumbnail?: string[] | null
  title?: string | null
}

export const Record: React.FC<Props> = ({ record }) => {
  const { id, category, position, grid } = record
  const { recordDetails, isLoading, handleClick } = usePresenter(id, category)
  // TODO: HNIT-1833 - add in loading and error handling
  const { data } = useZoomHoverRecordResult({ id, category })

  if (!recordDetails && !isLoading) return null

  return (
    <GridItem position="relative" css={{ ...grid }}>
      {data === null ? (
        RecordData(recordDetails, position, handleClick, category)
      ) : (
        <Tooltip
          label={
            <div>
              <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'700'}>
                {data?.title}
              </Text>
              <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'400'}>
                {data?.description}
              </Text>
            </div>
          }
        >
          {RecordData(recordDetails, position, handleClick, category)}
        </Tooltip>
      )}
    </GridItem>
  )
}

const RecordData = (
  recordDetails: RecordDetailsType | undefined | null,
  position: Position,
  handleClick: () => void,
  category: Category
) => {
  return (
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
        disableRightClick
      />

      <RecordText title={recordDetails?.title} categoryType={category} />
    </Flex>
  )
}
