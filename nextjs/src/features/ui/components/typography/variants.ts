import { cva } from 'class-variance-authority'

export const TypographyVariants = cva('', {
  variants: {
    times: {
      '2xl': [
        'font-times-large text-[96px] font-normal leading-[100%_]  tracking-[-1.92px] text-shadow  ',
      ],
      xl: ['font-times-large text-[64px] font-normal leading-[100%_] tracking-[-1.28px]'],
      lg: ['font-times-large text-[32px] font-normal leading-[105%_]'],
      md: ['font-times-large text-[20px] font-normal leading-[105%_] tracking-[0.2px]'],
      sm: ['font-times-large text-[12px] font-normal leading-[100%_] tracking-[0.48px]'],
      xs: ['font-times-large text-[9px] font-normal leading-[100%_] tracking-[0.36px]'],
    },
    impact: {
      xl: ['font-impact-large text-[80px] font-normal leading-[100%_] tracking-[-0.8px] '],
      lg: [
        'font-impact-large text-[32px] font-normal leading-[120%_] tracking-[-0.32px] text-shadow',
      ],
      md: ['font-impact-large text-[25px] font-normal leading-[120%_] tracking-[-0.25px]'],
    },
    social: {
      xl: [
        ' self-stretch font-bold not-italic leading-[110%_] text-black-100',
        'font-social-medium text-[52px] tracking-[-0.52px]',
        'lg:font-social-large lg:text-[32px] lg:tracking-[-0.32px] ',
      ],
      lg: [
        ' self-stretch font-normal not-italic leading-[130%_] text-black-100',
        'font-social-medium text-[32px] tracking-[0.32px]',
        'lg:font-social-large lg:text-[21px] lg:tracking-[0.21px]',
      ],
      md: [
        ' self-stretch font-normal not-italic leading-[130%_] text-black-100',
        'font-social-medium text-[24px] tracking-[0.48px]',
        'lg:font-social-large lg:text-[14px] lg:tracking-[-0.25px]',
      ],

      sm: [
        ' self-stretch font-normal not-italic leading-[130%_] text-black-100',
        'font-social-medium text-[12px] tracking-[0.4px]',
        'lg:font-social-large lg:text-[14px]',
      ],
      xs: [
        ' self-stretch font-normal not-italic leading-[130%_] text-black-100',
        'font-social-medium text-[10px]',
      ],
      placeholder:
        ' self-stretch font-social-large text-[21px] font-normal italic  leading-[130%_] tracking-[0.21px] text-black-100',
      label:
        ' self-stretch font-social-large text-[11px] font-normal not-italic leading-[11px_] tracking-[0.11px] text-black-100',
    },
  },
})
