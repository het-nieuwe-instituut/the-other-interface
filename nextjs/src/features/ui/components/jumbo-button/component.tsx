import { type VariantProps } from 'class-variance-authority'
import React, { AnchorHTMLAttributes } from 'react'
import Loader from '@/features/ui/icons/loading.svg'
import { cn } from '../../utils/cn'
import { ButtonVariants } from './variants'

interface JumboButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  disabled?: boolean
}

const JumboButton = React.forwardRef<HTMLButtonElement, JumboButtonProps>(
  ({ className, state, children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        <div
          className={cn(
            'transition-colors',
            'py-10 bg-black-100 px-4 relative border border-black rounded-[4px]',
            'hover:bg-ivory-90 hover:text-black-100',
            'text-center text-ivory-90 text-[32px] font-bold font-social-large leading-9',
            state === 'loading' && 'text-blue-100',
            className
          )}
        >
          {state === 'loading' ? <Loader className={'animate-spin'} /> : children}
        </div>
      </button>
    )
  }
)
JumboButton.displayName = 'JumboButton'

interface JumboLinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof ButtonVariants> {
  disabled?: boolean
}

const JumboLinkButton = React.forwardRef<HTMLAnchorElement, JumboLinkButtonProps>(
  ({ className, state, children, ...props }, ref) => {
    return (
      <a ref={ref} {...props}>
        <div
          className={cn(
            'transition-colors',
            'py-10 bg-black-100 px-4 relative border border-black rounded-[4px]',
            'hover:bg-ivory-90 hover:text-black-100',
            'text-center text-ivory-90 text-[32px] font-bold font-social-large leading-9',
            state === 'loading' && 'text-blue-100',
            className
          )}
        >
          {state === 'loading' ? <Loader className={'animate-spin'} /> : children}
        </div>
      </a>
    )
  }
)
JumboLinkButton.displayName = 'JumboLinkButton'

export { JumboButton, type JumboButtonProps, JumboLinkButton, type JumboLinkButtonProps }
