import { cva } from 'class-variance-authority'

export const TimesLargeTypographyVariants = cva('font-times-large font-normal', {
  variants: {
    intent: {
      '2xl': ['text-[96px] text-shadow  leading-[100%_] tracking-[-1.92px] '],
      xl: ['text-[64px] leading-[100%_] tracking-[-1.28px]'],
      lg: ['text-[32px] leading-[105%_]'],
      md: ['text-[20px] leading-[105%_] tracking-[0.2px]'],
      sm: ['text-[12px] leading-[100%_] tracking-[0.48px]'],
      xs: ['text-[9px] leading-[100%_] tracking-[0.36px]'],
    },
  },
  defaultVariants: {
    intent: '2xl',
  },
})

export const ImpactLargeTypographyVariants = cva('font-impact-large font-normal', {
  variants: {
    intent: {
      xl: ['text-[80px] leading-[100%_] tracking-[-0.8px] '],
      lg: ['text-[32px] text-shadow leading-[120%_] tracking-[-0.32px]'],
      md: ['text-[25px] leading-[120%_] tracking-[-0.25px]'],
    },
  },
  defaultVariants: {
    intent: 'xl',
  },
})

export const SocialLargeTypographyVariants = cva(
  'self-stretch font-social-large font-normal not-italic text-black',
  {
    variants: {
      intent: {
        xl: 'text-[32px] font-bold leading-[110%_] tracking-[-0.32px] ',
        lg: 'text-[21px] leading-[130%_] tracking-[0.21px]',
        md: 'text-sm leading-[130%_]',
        sm: 'text-xs leading-[130%_]',

        // specific to components
        // TODO: Should this even be here? Shouldn't this be in the component itself?
        'sidebar-title': 'text-base font-bold leading-[130%_]',
        'footer-large': 'text-[32px] leading-[110%_] tracking-[-0.32px]',
        'footer-small': 'text-[21px] leading-[130%_] tracking-[0.21px]',
        'search-large': 'text-[21px] leading-[130%_] tracking-[0.21px]',
        placeholder: 'text-[21px] italic leading-[130%_] tracking-[0.21px]',
        'search-small': 'text-[21px] leading-[130%_] tracking-[0.21px]',
        label: 'text-[11px] leading-[11px_] tracking-[0.11px]',
      },
    },
    defaultVariants: {
      intent: 'xl',
    },
  }
)

export const SocialMediumTypographyVariants = cva(
  'self-stretch text-black not-italic font-normal font-social-medium',
  {
    variants: {
      intent: {
        xl: 'text-[52px] font-bold leading-[110%_] tracking-[-0.52px]',
        lg: 'text-[32px] leading-[130%_] tracking-[0.32px]',
        md: 'text-2xl leading-[130%_] tracking-[0.48px]',
        sm: 'text-xl leading-[130%_] tracking-[0.4px]',
        xs: 'text-[10px] leading-[130%_]',
      },
    },
    defaultVariants: {
      intent: 'xl',
    },
  }
)
