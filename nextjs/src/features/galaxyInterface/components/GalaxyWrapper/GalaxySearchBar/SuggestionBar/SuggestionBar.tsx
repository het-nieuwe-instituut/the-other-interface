import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { Flex, Box, Grid, Text, Wrap } from '@chakra-ui/react'

interface Props {
  isOpen?: boolean
  label?: string
  children?: React.ReactNode
  offset?: number
}

const SUGGESTION_BAR_PADDING = 0

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
      backgroundColor={'blueAlpha.80'}
      zIndex={FOOTER_Z_INDEX - 1}
      transform={isOpen ? 'translateY(0)' : 'translateY(90%)'}
      transition={
        isOpen
          ? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
          : 'transform 0.3s ease-in-out 0.1s, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
      }
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
      templateColumns={'160px 1fr'}
      className={'px-4 py-2 gap-4'}
    >
      <Flex width="146px" pt={4}>
        <p className={cn('text-pink.100', TypographyVariants({ social: 'textfield' }))}>{label}</p>
      </Flex>
      <Box
        overflow="hidden"
        width="100%"
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? 'visible' : 'hidden'}
        transition="opacity 0.1s ease-in-out 0.2s, visibility 0.1s ease-in-out 0.2s"
      >
        <Wrap gap="5px" width={'100%'} paddingBottom="25px" marginBottom="-25px">
          {children}
        </Wrap>
      </Box>
    </Grid>
  )
}
