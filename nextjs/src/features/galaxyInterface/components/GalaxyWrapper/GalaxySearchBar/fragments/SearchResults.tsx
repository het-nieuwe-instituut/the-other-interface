import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

const SearchResults = () => {
  const { pageNumber } = usePageNumber()
  const { search } = useZoom2Params()
  const { pageCategory } = usePageCategory()
  const selectedFilters = useSelectedFilters()
  const { isLoading, isError, data } = useSearchByCategoryQuery({
    category: pageCategory,
    text: search,
    page: pageNumber,
    selectedFilters: selectedFilters.map(filter => ({ key: filter.key, value: filter.value })),
  })
  const { t } = useTypeSafeTranslation('category')
  const { t: commonT } = useTypeSafeTranslation('common')
  const { total } = data || { total: 0 }

  if (isError) {
    return <ErrorBox className={TypographyVariants({ socialLarge: 'sm' })} />
  }

  if (isLoading) {
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

export default SearchResults
