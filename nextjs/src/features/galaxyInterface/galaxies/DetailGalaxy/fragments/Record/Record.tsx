import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { GridItem, Flex, Text } from '@chakra-ui/react'

import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { usePresenter } from './usePresenter'
import { useZoomHoverRecordResult } from '@/features/shared/hooks/queries/useZoomHoverRecordResult'
import { Position } from '@/features/shared/types/position'
import { Category } from '@/features/shared/utils/categories'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { Dispatch, SetStateAction } from 'react'
import { useCalculateLine } from './useCalculateLine'

type Props = {
  record: PositionedRecord
  setIsHovered?: Dispatch<SetStateAction<boolean>>
  setCurrentRecord?: Dispatch<SetStateAction<string>>
  style?: React.CSSProperties
  isHovered?: boolean
  currentRecord?: string
}

interface RecordDetailsType {
  thumbnail?: string[] | null
  title?: string | null
}

export const Record: React.FC<Props> = ({
  record,
  setIsHovered,
  setCurrentRecord,
  style,
  isHovered,
  currentRecord,
}) => {
  const { id, category, position, grid } = record
  const { recordDetails, isLoading, handleClick } = usePresenter(id, category)
  // TODO: HNIT-1833 - add in loading and error handling
  const { data } = useZoomHoverRecordResult({ id, category })

  const line = useCalculateLine()

  if (!recordDetails && !isLoading) return null

  return (
    <>
      <GridItem
        position="relative"
        css={{ ...grid, ...style }}
        onMouseOver={
          setIsHovered && setCurrentRecord
            ? () => {
                setCurrentRecord(id)
                setIsHovered(true)
              }
            : undefined
        }
        onMouseLeave={
          setIsHovered && setCurrentRecord
            ? () => {
                setCurrentRecord('')
                setIsHovered(false)
              }
            : undefined
        }
      >
        {data === null ? (
          RecordData(recordDetails, position, handleClick, category, isHovered, currentRecord, id)
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
            {RecordData(
              recordDetails,
              position,
              handleClick,
              category,
              isHovered,
              currentRecord,
              id
            )}
          </Tooltip>
        )}
      </GridItem>
      {isHovered && currentRecord === id && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -80,
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              strokeWidth={1}
              stroke={'RGBA(0, 81, 255, .4)'}
            />
          </svg>
        </div>
      )}
    </>
  )
}

const RecordData = (
  recordDetails: RecordDetailsType | undefined | null,
  position: Position,
  handleClick: () => void,
  category: Category,
  isHovered: boolean | undefined,
  currentRecord: string | undefined,
  id: string
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
      className={isHovered && currentRecord === id ? `hovered` : ''}
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
