'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { PaginationButton } from './fragments/PaginationButton'

type Props = {
  currentPageNumber: number
  pageAmount: number
  isResultAmountLoading: boolean
  isResultEmpty: boolean
  handleLeftClick?: () => void
  handleRightClick?: () => void
  text?: string
}

export const GalaxyPagination: React.FC<Props> = ({
  currentPageNumber,
  pageAmount,
  isResultAmountLoading,
  isResultEmpty,
  handleLeftClick,
  handleRightClick,
  text,
}) => {
  const { t } = useTypeSafeTranslation('navigation')

  return (
    <Grid
      position={'relative'}
      height="60px"
      backgroundColor={'blueAlpha.100'}
      padding={'4px'}
      borderRadius={'5px'}
      zIndex={FOOTER_Z_INDEX}
      color={'pinkAlpha.100'}
      templateColumns="40px 1fr 40px"
      gap="5px"
    >
      <PaginationButton
        handleClick={handleLeftClick}
        disabled={isResultAmountLoading || currentPageNumber === 1}
      />

      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textStyle="socialLarge.md"
        gap="3px"
      >
        {!isResultAmountLoading && !isResultEmpty && (
          <>
            <Text>{text ? text : t('page')}</Text>
            <Text>
              {currentPageNumber} {t('of')}
            </Text>
            <Text>{pageAmount || 1}</Text>
          </>
        )}
      </Flex>
      <PaginationButton
        side="right"
        handleClick={handleRightClick}
        disabled={isResultAmountLoading || currentPageNumber === pageAmount || pageAmount < 1}
      />
    </Grid>
  )
}
