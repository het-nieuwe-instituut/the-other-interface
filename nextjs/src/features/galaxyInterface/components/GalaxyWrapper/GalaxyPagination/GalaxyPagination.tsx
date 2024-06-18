'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Grid } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Loader } from '@/features/shared/components/Loading/Loading'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { IconButton } from '@/features/ui/components/icon-button/component'
import { ArrowIcon } from './fragments/ArrowIcon'

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
  handleLeftClick,
  handleRightClick,
  text,
  isResultError,
}) => {
  const { t } = useTypeSafeTranslation('navigation')

  const renderPaginationContent = () => {
    if (isResultError) {
      return (
        <ErrorBox className={cn(TypographyVariants({ socialLarge: 'sm' }), 'self-center ml-2')} />
      )
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
        <IconButton
          intent={'ghost'}
          disabled={currentPageNumber === 1}
          size={'small'}
          icon={<ArrowIcon rotation="rotate(180deg)" />}
          className={'w-9 border-none px-2 py-1'}
          onClick={handleLeftClick}
        />

        <div className={'flex flex-col items-center justify-center'}>
          <span className={cn(TypographyVariants({ socialLarge: 'sm' }), 'text-center')}>
            {text ? text : t('page')} {currentPageNumber} {t('of')} {pageAmount || 1}
          </span>
        </div>

        <IconButton
          intent={'ghost'}
          disabled={currentPageNumber === pageAmount || pageAmount < 1}
          size={'small'}
          icon={<ArrowIcon />}
          className={'w-9 border-none px-2 py-1'}
          onClick={handleRightClick}
        />
      </>
    )
  }

  return (
    <Grid
      position={'relative'}
      height="60px"
      border={'1px solid'}
      borderColor={'blueAlpha.100'}
      padding={'4px'}
      zIndex={FOOTER_Z_INDEX}
      color={'blueAlpha.100'}
      templateColumns={isResultAmountLoading || isResultError ? '1fr' : '36px 1fr 36px'}
      gap="5px"
    >
      {renderPaginationContent()}
    </Grid>
  )
}
