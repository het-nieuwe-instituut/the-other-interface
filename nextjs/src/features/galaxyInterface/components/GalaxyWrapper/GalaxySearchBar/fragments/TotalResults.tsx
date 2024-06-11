import { useTotalCounterQuery } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useTotalCounterQuery'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

const TotalResults = () => {
  const { data: total, isLoading: isTotalLoading, isError: isTotalError } = useTotalCounterQuery()
  const { t } = useTypeSafeTranslation('category')

  if (isTotalError) {
    return <ErrorBox className={TypographyVariants({ socialLarge: 'sm' })} />
  }

  if (isTotalLoading) {
    return (
      <div className="ml-2 flex h-full items-center justify-center">
        <Loader />
      </div>
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

export default TotalResults
