import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Position } from '@/features/shared/types/position'
import { GridItem, Flex } from '@chakra-ui/react'

import { Record as TRecord } from './types'
import { RecordText } from './RecordText'

type Props = {
  record: TRecord & {
    position: Position
  }
}

export const Record: React.FC<Props> = ({ record }) => {
  const { image, categoryType, position, title } = record

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
      >
        <ResponsiveImage
          src={image}
          alt={title}
          maxHeight="calc(100% - 2.5vw - 12px)" // where 2.6vw are a texts' line heights, 12px are gaps
        />

        <RecordText
          title={title}
          categoryType={categoryType}
          css={{
            position: !image ? 'absolute' : 'relative',
          }}
        />
      </Flex>
    </GridItem>
  )
}
