import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  isOpen?: boolean
  label?: string
  children?: React.ReactNode
  offset?: number
}

const SUGGESTION_BAR_PADDING = 0

export const SuggestionBar: React.FC<Props> = ({
  isOpen = false,
  children,
  label = '',
  offset,
}) => {
  return (
    <div
      style={{
        bottom: offset ? `calc(${offset + SUGGESTION_BAR_PADDING}px)` : '60px',
        transition: isOpen
          ? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
          : 'transform 0.3s ease-in-out 0.1s, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      }}
      className={cn(
        'grid absolute bg-blue-80 z-[9998] grid-cols-[160px,1fr] gap-4 px-4 py-2 w-full',
        isOpen ? 'translate-y-[0] opacity-100 visible' : 'translate-y-[90%] opacity-0 invisible'
      )}
    >
      <div className="flex w-[146px] py-4">
        <p className={cn('text-pink.100', TypographyVariants({ socialLarge: 'textfield' }))}>
          {label}
        </p>
      </div>
      <div
        style={{
          transition: 'opacity 0.1s ease-in-out 0.2s, visibility 0.1s ease-in-out 0.2s',
        }}
        className={cn(
          'overflow-hidden w-full',
          isOpen ? ' opacity-100 visible' : ' opacity-0 invisible'
        )}
      >
        <div className="mb-[-25px] flex w-full flex-wrap gap-[5px] pb-[25px]">{children}</div>
      </div>
    </div>
  )
}
