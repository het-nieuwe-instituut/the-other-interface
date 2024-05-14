import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Flex, Box, Grid, Text, Wrap } from '@chakra-ui/react'

interface Props {
  isOpen?: boolean
  label?: string
  children?: React.ReactNode
  offset?: number
}

const SUGGESTION_BAR_PADDING = 10

export const SuggestionBar: React.FC<Props> = ({
  isOpen = false,
  children,
  label = '',
  offset,
}) => {
  return (
    <Grid
      position={'absolute'}
      bottom={offset ? `calc(${offset + SUGGESTION_BAR_PADDING}px)` : '60px'}
      width={'100%'}
      gap="15px"
      borderRadius={'5px 5px 0 0'}
      backgroundColor={'blueAlpha.80'}
      padding={'5px 15px'}
      zIndex={FOOTER_Z_INDEX - 1}
      transform={isOpen ? 'translateY(0)' : 'translateY(90%)'}
      transition={
        isOpen
          ? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
          : 'transform 0.3s ease-in-out 0.1s, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
      }
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
      templateColumns={'145px 1fr'}
    >
      <Flex width="146px" pt={4}>
        <Text textStyle="socialLarge.xl">{label}</Text>
      </Flex>
      <Box
        overflow="hidden"
        width="100%"
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? 'visible' : 'hidden'}
        transition="opacity 0.1s ease-in-out 0.2s, visibility 0.1s ease-in-out 0.2s"
      >
        <Wrap gap="5px" width={'100%'} overflowX="auto" paddingBottom="25px" marginBottom="-25px">
          {children}
        </Wrap>
      </Box>
    </Grid>
  )
}
