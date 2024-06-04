'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { PaginationButton } from './fragments/PaginationButton'
import { Loader } from '@/features/shared/components/Loading/Loading'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  currentPageNumber: number
  pageAmount: number
  isResultAmountLoading: boolean
  isResultEmpty: boolean
  handleLeftClick?: () => void
  handleRightClick?: () => void
  text?: string
  isResultError?: boolean
}

export const GalaxyPagination: React.FC<Props> = ({
  currentPageNumber,
  pageAmount,
  isResultAmountLoading,
  isResultEmpty,
  handleLeftClick,
  handleRightClick,
  text,
  isResultError,
}) => {
  const { t } = useTypeSafeTranslation('navigation')

  if (isResultEmpty) {
    return null
  }

  const renderPaginationContent = () => {
    if (isResultError) {
      return <ErrorBox className={cn(TypographyVariants({ social: 'sm' }), 'self-center ml-2')} />
    }

    if (isResultAmountLoading) {
      return (
        <div className="ml-2 flex h-full items-center justify-center">
          <Loader />
        </div>
      )
    }

    return (
      <>
        <PaginationButton handleClick={handleLeftClick} disabled={currentPageNumber === 1} />

        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          textStyle="socialLarge.md"
          gap="3px"
        >
          <>
            <Text>{text ? text : t('page')}</Text>
            <Text>
              {currentPageNumber} {t('of')}
            </Text>
            <Text>{pageAmount || 1}</Text>
          </>
        </Flex>
        <PaginationButton
          side="right"
          handleClick={handleRightClick}
          disabled={currentPageNumber === pageAmount || pageAmount < 1}
        />
      </>
    )
  }

  return (
    <Grid
      position={'relative'}
      height="60px"
      backgroundColor={'blueAlpha.100'}
      padding={'4px'}
      borderRadius={'5px'}
      zIndex={FOOTER_Z_INDEX}
      color={'pinkAlpha.100'}
      templateColumns={isResultAmountLoading || isResultError ? '1fr' : '40px 1fr 40px'}
      gap="5px"
    >
      {renderPaginationContent()}
    </Grid>
  )
}
