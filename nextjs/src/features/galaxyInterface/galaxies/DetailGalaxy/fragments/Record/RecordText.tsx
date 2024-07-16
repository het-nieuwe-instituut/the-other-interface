import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  categoryType: Category
  title?: string | null
  className?: string
}

export const RecordText: React.FC<Props> = ({ title = '', categoryType, className }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <div className={cn('flex w-full text-blue-100 flex-col flex-1 mt-2', className)}>
      <p
        className={
          'mt-2 line-clamp-2 break-all text-center font-times-dot text-[12px] leading-[12px]'
        }
      >
        {title}
      </p>
      <p
        className={
          'mt-1 line-clamp-1 break-all text-center font-times-dot text-[9px] leading-[9px]'
        }
      >
        {t(toSingularCategory(categoryType))}
      </p>
    </div>
  )
}
