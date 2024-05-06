import { cva } from 'class-variance-authority'

export const TypographyVariants = cva('', {
  variants: {
    times: {
      '2xl': [
        'font-times-large font-normal text-[96px] text-shadow  leading-[100%_] tracking-[-1.92px] ',
      ],
      xl: ['font-times-large font-normal text-[64px] leading-[100%_] tracking-[-1.28px]'],
      lg: ['font-times-large font-normal text-[32px] leading-[105%_]'],
      md: ['font-times-large font-normal text-[20px] leading-[105%_] tracking-[0.2px]'],
      sm: ['font-times-large font-normal text-[12px] leading-[100%_] tracking-[0.48px]'],
      xs: ['font-times-large font-normal text-[9px] leading-[100%_] tracking-[0.36px]'],
    },
    impact: {
      xl: ['font-impact-large font-normal text-[80px] leading-[100%_] tracking-[-0.8px] '],
      lg: [
        'font-impact-large font-normal text-[32px] text-shadow leading-[120%_] tracking-[-0.32px]',
      ],
      md: ['font-impact-large font-normal text-[25px] leading-[120%_] tracking-[-0.25px]'],
    },
    socialLarge: {
      xl: 'self-stretch font-social-large not-italic text-black text-[32px] font-bold leading-[110%_] tracking-[-0.32px] ',
      lg: 'self-stretch font-social-large font-normal not-italic text-black text-[21px] leading-[130%_] tracking-[0.21px]',
      md: 'self-stretch font-social-large font-normal not-italic text-black text-sm leading-[130%_]',
      sm: 'self-stretch font-social-large font-normal not-italic text-black text-xs leading-[130%_]',

      // specific to components
      // TODO: Should this even be here? Shouldn't this be in the component itself?
      'sidebar-title':
        'self-stretch font-social-large font-normal not-italic text-black text-base font-bold leading-[130%_]',
      'footer-large':
        'self-stretch font-social-large font-normal not-italic text-black text-[32px] leading-[110%_] tracking-[-0.32px]',
      'footer-small':
        'self-stretch font-social-large font-normal not-italic text-black text-[21px] leading-[130%_] tracking-[0.21px]',
      'search-large':
        'self-stretch font-social-large font-normal not-italic text-black text-[21px] leading-[130%_] tracking-[0.21px]',
      placeholder:
        'self-stretch font-social-large font-normal not-italic text-black text-[21px] italic leading-[130%_] tracking-[0.21px]',
      'search-small':
        'self-stretch font-social-large font-normal not-italic text-black text-[21px] leading-[130%_] tracking-[0.21px]',
      label:
        'self-stretch font-social-large font-normal not-italic text-black text-[11px] leading-[11px_] tracking-[0.11px]',
    },
    socialMedium: {
      xl: 'self-stretch text-black not-italic font-normal font-social-medium text-[52px] font-bold leading-[110%_] tracking-[-0.52px]',
      lg: 'self-stretch text-black not-italic font-normal font-social-medium text-[32px] leading-[130%_] tracking-[0.32px]',
      md: 'self-stretch text-black not-italic font-normal font-social-medium text-2xl leading-[130%_] tracking-[0.48px]',
      sm: 'self-stretch text-black not-italic font-normal font-social-medium text-xl leading-[130%_] tracking-[0.4px]',
      xs: 'self-stretch text-black not-italic font-normal font-social-medium text-[10px] leading-[130%_]',
    },
  },
})
