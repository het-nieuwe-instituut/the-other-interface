import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'

import { Record as TRecord } from './types'

type Props = {
  record: TRecord & {
    position: Position
  }
}

export const Record: React.FC<Props> = ({ record }) => (
  <GridItem position="relative" border={'1px solid blue'}>
    {record && (
      <Flex
        position="absolute"
        style={{ ...record.position }}
        width="70%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        border={'1px solid purple'}
      >
        <ResponsiveImage
          src={record.image}
          alt={record.title}
          maxHeight="calc(100% - 2vw - 10px)" // where 1.6vw is a title's line height, 10px is gap
        />

        <Box w="100%">
          <Text
            align="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            textStyle="headingTimesLarge.md"
          >
            {record.title}
          </Text>
        </Box>
      </Flex>
    )}
  </GridItem>
)
