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
    social: {
      xl: [
        'self-stretch not-italic text-black font-bold leading-[110%_]',
        'font-social-medium text-[52px] tracking-[-0.52px]',
        'lg:font-social-large lg:text-[32px] lg:tracking-[-0.32px] ',
      ],
      lg: [
        'self-stretch not-italic text-black font-normal leading-[130%_]',
        'font-social-medium text-[32px] tracking-[0.32px]',
        'lg:font-social-large lg:text-[21px] lg:tracking-[0.21px]',
      ],
      md: [
        'self-stretch not-italic text-black font-normal leading-[130%_]',
        'font-social-medium text-[24px] tracking-[0.48px]',
        'lg:font-social-large lg:text-[14px] lg:tracking-[-0.25px]',
      ],

      sm: [
        'self-stretch not-italic text-black font-normal leading-[130%_]',
        'font-social-medium text-[12px] tracking-[0.4px]',
        'lg:font-social-large lg:text-[14px]',
      ],
      xs: [
        'self-stretch not-italic text-black font-normal leading-[130%_]',
        'font-social-medium text-[10px]',
      ],

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
  },
})
