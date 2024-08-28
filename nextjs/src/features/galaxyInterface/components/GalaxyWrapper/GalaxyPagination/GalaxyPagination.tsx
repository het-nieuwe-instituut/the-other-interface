'use client'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { IconButton } from '@/features/ui/components/icon-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties } from 'react'
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
      return <ErrorBox size="small" className={'ml-2 self-center'} />
    }

    if (isResultAmountLoading) {
      return (
        <>
          <IconButton
            aria-label="Previous page"
            intent={'ghost'}
            disabled={true}
            size={'small'}
            icon={<ArrowIcon rotation="rotate(180deg)" />}
            className={'w-9 border-none px-2 py-1 disabled:text-blue-50'}
            onClick={handleLeftClick}
          />

          <div className={'flex flex-col items-center justify-center'}>
            <span className={cn(TypographyVariants({ socialLarge: 'sm' }), 'text-center')}>
              {text ? text : t('page')} {1} {t('of')} {1}
            </span>
          </div>

          <IconButton
            aria-label="Next page"
            intent={'ghost'}
            disabled={true}
            size={'small'}
            icon={<ArrowIcon />}
            className={'w-9 border-none px-2 py-1 disabled:text-blue-50'}
            onClick={handleRightClick}
          />
        </>
      )
    }

    return (
      <>
        <IconButton
          aria-label="Previous page"
          intent={'ghost'}
          disabled={currentPageNumber === 1}
          size={'small'}
          icon={<ArrowIcon rotation="rotate(180deg)" />}
          className={'w-9 border-none px-2 py-1 disabled:text-blue-50'}
          onClick={handleLeftClick}
        />

        <div className={'flex flex-col items-center justify-center text-nowrap'}>
          <span className={cn(TypographyVariants({ socialLarge: 'sm' }), 'text-center')}>
            {text ? text : t('page')} {currentPageNumber} {t('of')} {pageAmount || 1}
          </span>
        </div>

        <IconButton
          aria-label="Next page"
          intent={'ghost'}
          disabled={currentPageNumber === pageAmount || pageAmount < 1}
          size={'small'}
          icon={<ArrowIcon />}
          className={'w-9 border-none px-2 py-1 disabled:text-blue-50'}
          onClick={handleRightClick}
        />
      </>
    )
  }

  return (
    <div
      style={{ '--z-index': FOOTER_Z_INDEX } as CSSProperties}
      className={cn(
        'relative z-[var(--z-index)] h-[60px] gap-[5px] border border-solid border-blue p-1 text-blue-100 flex'
      )}
    >
      {renderPaginationContent()}
    </div>
  )
}
