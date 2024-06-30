import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { LayerWrapper } from '../Layers/LayerWrapper'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'

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

interface StaticPageContainerProps {
  title: string
  children: React.ReactNode
}

export const StaticPageContainer = ({ children, title }: StaticPageContainerProps) => (
  <div className="h-full bg-ivory-100">
    <div className="bg-ivory-100 pb-[42px]">
      <StaticHeader />
    </div>
    <LayerWrapper
      LeftContent={<PageHeader title={title} />}
      BottomContent={
        <div className={'mx-auto mb-10 flex max-w-[90em] flex-col gap-[10px] px-6 pt-6'}>
          {children}
        </div>
      }
    />
  </div>
)
