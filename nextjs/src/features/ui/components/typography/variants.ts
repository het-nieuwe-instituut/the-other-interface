import { cva } from 'class-variance-authority'

export const TypographyVariants = cva('', {
  variants: {
    modifier: {
      shadow: 'text-shadow',
    },
    timesDot: {
      '2xl': ['font-times-dot text-[96px] leading-[100%_]  tracking-[-1.92px]'],
      lg: ['font-times-dot text-[32px] leading-[105%_]'],
    },
    times: {
      '2xl': ['font-times-large text-[96px] leading-[100%_]  tracking-[-1.92px]'],
      xl: ['font-times-large text-[64px] leading-[100%_] tracking-[-1.28px]'],
      lg: ['font-times-large text-[32px] leading-[105%_]'],
      md: ['font-times-large text-[20px] leading-[105%_] tracking-[0.01em]'],
      sm: ['font-times-large text-[12px] leading-[100%_] tracking-[0.04em]'],
      xs: ['font-times-large text-[9px] leading-[100%_] tracking-[0.36px]'],
    },
    impact: {
      xl: ['font-impact-large text-[80px] leading-[100%_] tracking-[-0.8px]'],
      lg: ['font-impact-large text-[54px] leading-[120%_] tracking-[-0.54px]'],
      md: ['font-impact-large text-[32px] leading-[120%_] tracking-[-0.32px]'],
      sm: ['font-impact-large text-[25px] leading-[120%_] tracking-[-0.25px]'],
    },
    socialLarge: {
      xl: [
        'self-stretch font-bold not-italic leading-[110%_]',
        'font-social-large text-[32px] tracking-[-0.32px]',
      ],
      lg: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-large text-[21px] tracking-[0.21px]',
      ],
      md: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-large text-[14px] tracking-[-0.25px]',
      ],
      sm: ['self-stretch not-italic leading-[130%_]', 'font-social-large text-[12px]'],
      placeholder:
        ' self-stretch font-social-large text-[21px] italic  leading-[130%_] tracking-[0.21px]',
      label:
        ' self-stretch font-social-large text-[11px] not-italic leading-[11px_] tracking-[0.11px]',
      textfield: 'self-stretch font-social-large text-[18px] leading-[18px_] tracking-[0.18px]',
      sidebarTitle: 'font-social-large text-[16px] font-bold leading-[130%]',
    },
    socialMedium: {
      xl: [
        'self-stretch font-bold not-italic leading-[110%_]',
        'font-social-medium text-[52px] tracking-[-0.52px]',
      ],
      lg: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-medium text-[32px] tracking-[0.32px]',
      ],
      md: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-medium text-[24px]  tracking-wide',
      ],
      sm: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-medium text-[20px] tracking-tight',
      ],
      xs: ['self-stretch not-italic leading-[130%_]', 'font-social-medium text-[10px]'],
    },
    responsive: {
      paragraph: [
        'self-stretch not-italic leading-[130%_]',
        'font-social-medium text-[32px] tracking-[0.32px]',
        'md:font-social-large md:text-[21px] md:tracking-[0.21px]',
        'max-md:font-social-large max-md:text-[21px] max-md:tracking-[0.21px]',
      ],
      title: [
        'font-impact-large text-[54px] leading-[100%_] tracking-[-0.8px] break-all',
        'lg:text-[80px]',
      ],
      storyOrRecordTitle: [
        'font-times-large text-[12px] leading-[100%_] tracking-[0.04em]',
        'lg:font-times-large lg:text-[20px] lg:leading-[105%_] lg:tracking-[0.01em]',
      ],
    },
  },
})
