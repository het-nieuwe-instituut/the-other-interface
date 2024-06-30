import { TypographyVariants } from '@/features/ui/components/typography/variants'

interface ParagraphProps {
  children: React.ReactNode
}

export const StaticPageParagraph = ({ children }: ParagraphProps) => (
  <p className={TypographyVariants({ socialLarge: 'lg' })}>{children}</p>
)

interface SectionTitleProps {
  children: React.ReactNode
}

export const StaticPageSectionTitle = ({ children }: SectionTitleProps) => (
  <p className={TypographyVariants({ socialLarge: 'lg', className: 'font-bold mt-2' })}>
    {children}
  </p>
)
