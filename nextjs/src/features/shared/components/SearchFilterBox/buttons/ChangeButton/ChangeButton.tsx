import { cn } from '@/features/ui/utils/cn'

interface Props {
  isOpen: boolean
}

export const ChangeButton: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        'relative w-[9px] h-[4.5px] cursor-pointer',
        'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0',
        'before:transition-transform',
        'before:border-l-[4.5px]  before:border-l-solid before:border-l-transparent  ',
        'before:border-r-[4.5px] before:border-r-solid before:border-r-transparent',
        'before:border-t-[4.5px] before:border-t-solid before:border-t-[currentColor]',
        isOpen ? 'before:rotate-180' : 'before:rotate-0'
      )}
    />
  )
}
