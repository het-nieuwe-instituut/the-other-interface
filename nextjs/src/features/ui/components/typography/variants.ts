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
      '2xl': [
        'font-times-large text-[70px] leading-[120%] tracking-[-1.92px] md:text-[96px]  md:leading-[100%_]',
      ],
      xl: ['font-times-large text-[64px] leading-[100%_] tracking-[-1.28px]'],
      lg: ['font-times-large text-[32px] leading-[105%_]'],
      md: ['font-times-large text-[20px] leading-[105%_] tracking-[0.01em]'],
      sm: ['font-times-large text-[12px] leading-[100%_] tracking-[0.04em]'],
      xs: ['font-times-large text-[9px] leading-[100%_] tracking-[0.36px]'],
    },
    impact: {
      xl: [
        'font-impact-large text-[55px] leading-[120%] tracking-[-0.8px] md:text-[80px] md:leading-[100%_]',
      ],
      lg: ['hyphens-auto font-impact-large text-[54px] leading-[120%_] tracking-[-0.54px]'],
      md: ['font-impact-large text-[32px] leading-[120%_] tracking-[-0.32px]'],
      sm: ['font-impact-large text-[25px] leading-[120%_] tracking-[-0.25px]'],
    },
    socialLarge: {
      xl: [
        'self-stretch font-bold not-italic',
        'font-social-large text-[32px] leading-[120%] tracking-[-0.32px]',
      ],
      lg: [
        'self-stretch not-italic leading-[120%_]',
        'font-social-large text-[21px] tracking-[0.21px]',
      ],
      md: [
        'self-stretch not-italic leading-[120%_]',
        'font-social-large text-[14px] tracking-[-0.25px]',
      ],
      sm: ['self-stretch not-italic leading-[120%_]', 'font-social-large text-[12px]'],
      placeholder:
        ' self-stretch font-social-large text-[21px] italic  leading-[120%_] tracking-[0.21px]',
      label:
        ' self-stretch font-social-large text-[11px] not-italic leading-[11px_] tracking-[0.11px]',
      textfield: 'self-stretch font-social-large text-[18px] leading-[18px_] tracking-[0.18px]',
      sidebarTitle: 'font-social-large text-[16px] font-bold leading-[120%]',
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
      ],
      title: [
        'hyphens-auto font-impact-large text-[54px] leading-[100%_] tracking-[-0.8px]',
        'lg:text-[80px]',
      ],
      subTitle: ['hyphens-auto font-impact-large text-[54px] leading-[100%_] tracking-[-0.8px]'],
      storyOrRecordTitle: [
        'hyphens-auto font-times-dot text-[12px] leading-[100%_] tracking-[0.04em]',
        'lg:font-times-dot lg:text-[20px] lg:leading-[105%_] lg:tracking-[0.01em]',
      ],
      detailedStoryOrRecordTitle: [
        'hyphens-auto font-times-dot text-[12px] leading-[12px]',
        'lg:text-[20px] lg:leading-[21px]',
      ],
      detailedStoryOrRecordSubTitle: ['hyphens-auto font-times-dot text-[9px]', 'lg:text-[12px]'],
    },
  },
})
