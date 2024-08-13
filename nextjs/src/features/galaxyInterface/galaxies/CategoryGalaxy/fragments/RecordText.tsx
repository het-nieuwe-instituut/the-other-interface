import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  categoryType: Category
  title?: string | null
  className: string
}

export const RecordText: React.FC<Props> = ({ title = '', categoryType, className }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <>
      <div
        className={cn(
          'w-full text-blue-100 overflow-hidden flex-col max-w-[210px] mt-2',
          className
        )}
      >
        <p
          className={
            'line-clamp-2 hyphens-auto text-center font-times-dot text-[12px] leading-[12px] lg:text-[20px] lg:leading-[21px]'
          }
        >
          {title}
        </p>
        <p
          className={
            'mt-1 line-clamp-1 hyphens-auto text-center font-times-dot text-[9px] leading-[9px] lg:text-[12px] lg:leading-[12px] '
          }
        >
          {t(toSingularCategory(categoryType))}
        </p>
      </div>
    </>
  )
}
