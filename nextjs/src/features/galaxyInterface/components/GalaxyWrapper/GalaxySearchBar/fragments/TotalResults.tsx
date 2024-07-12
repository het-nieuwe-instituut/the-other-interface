import { useTotalCounterQuery } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useTotalCounterQuery'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  text: string
}

export const TotalResults = ({ text }: Props) => {
  const selectedFilters = useSelectedFilters()
  const {
    data: total,
    isLoading: isTotalLoading,
    isError: isTotalError,
  } = useTotalCounterQuery(selectedFilters, text)
  const { t } = useTypeSafeTranslation('category')
  const { t: commonT } = useTypeSafeTranslation('common')

  if (isTotalError) {
    return (
      <ErrorBox className={TypographyVariants({ socialLarge: 'sm', className: 'text-[9px]' })} />
    )
  }

  if (!isTotalLoading) {
    return (
      <p className={cn('text-pink-100', TypographyVariants({ socialLarge: 'textfield' }))}>
        {commonT('loadingResults')}
      </p>
    )
  }

  return (
    <>
      <p className={cn('text-pink-100', TypographyVariants({ socialLarge: 'textfield' }))}>
        {total}
      </p>
      <p className={cn('text-pink-100', TypographyVariants({ socialLarge: 'textfield' }))}>
        {t('resultsFor')}
      </p>
    </>
  )
}
