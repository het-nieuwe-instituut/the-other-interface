'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { PaginationButton } from './fragments/PaginationButton'

type Props = {
  currentPageNumber: number
  pagesAmount: number
  isLoading: boolean
  handleLeftClick?: () => void
  handleRightClick?: () => void
}

export const GalaxyPagination: React.FC<Props> = ({
  currentPageNumber,
  pagesAmount,
  isLoading,
  handleLeftClick,
  handleRightClick,
}) => {
  const { t } = useTypeSafeTranslation('navigation')

  if (isLoading) return null

  return (
    <Grid
      height="60px"
      backgroundColor={'transparent'}
      padding={'4px'}
      zIndex={FOOTER_Z_INDEX}
      color={'pinkAlpha.100'}
      border={'1px solid'}
      borderColor={'blueAlpha.100'}
      templateColumns="40px 1fr 40px"
      gap="5px"
    >
      <PaginationButton handleClick={handleLeftClick} disabled={currentPageNumber === 1} />

      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        color={'blueAlpha.100'}
        textStyle="socialLarge.md"
        gap="3px"
      >
        <Text>{t('page')}</Text>
        <Flex gap="3px" flexWrap={'wrap'} justifyContent={'center'}>
          <Text>{currentPageNumber}</Text>
          <Text>{t('of')}</Text>
          <Text>{pagesAmount}</Text>
        </Flex>
      </Flex>
      <PaginationButton side="right" handleClick={handleRightClick} />
    </Grid>
  )
}
