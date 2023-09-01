import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'

import { Record as TRecord } from './types'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

type Props = {
  record: TRecord & {
    position: Position
  }
}

export const Record: React.FC<Props> = ({ record }) => {
  const { t } = useTypeSafeTranslation('landingpage')

  return (
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
          gap="8px"
          border={'1px solid purple'}
        >
          <ResponsiveImage
            src={record.image}
            alt={record.title}
            maxHeight="calc(100% - 2.5vw - 12px)" // where 2.6vw are a texts' line heights, 12px are gaps
          />

          <Box w="100%" color="blueAlpha.100">
            <Text
              align="center"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              textStyle="headingTimesLarge.md"
              fontSize={'1.6vw'}
              lineHeight={'1.6vw'}
            >
              {record.title}
            </Text>
            <Text
              align="center"
              textStyle="headingTimesLarge.sm"
              fontSize={'0.9vw'}
              lineHeight={'0.9vw'}
              mt={'4px'}
            >
              {t(record.categoryType)}
            </Text>
          </Box>
        </Flex>
      )}
    </GridItem>
  )
}
