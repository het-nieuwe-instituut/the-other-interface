import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { LayerWrapper } from '../Layers/LayerWrapper'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { Paragraph } from '@/features/ui/components/Paragraph/Paragraph'
import { cn } from '@/features/ui/utils/cn'

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

interface StaticPageListProps {
  items: string[]
  children?: never
}
export const StaticPageList = ({ items }: StaticPageListProps) => {
  const listItems = items.map(i => `- ${i}`).join('\n')

  return <Paragraph>{listItems}</Paragraph>
}

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

interface StaticPageMarkdownLinkProps {
  href: string
  label: string
}

export const getStaticPageMarkdownLink = ({ href, label }: StaticPageMarkdownLinkProps) =>
  `<a class="prose underline" href="${href}" target="_blank" rel="noreferrer">${label}</a>`

interface StaticPageLinkProps {
  href: string
  label: string
  external?: boolean
  className?: string
}

export const StaticPageLink = ({ href, label, external, className }: StaticPageLinkProps) => (
  <a
    href={href}
    target={external ? '_blank' : '_self'}
    rel={external ? 'noreferrer' : ''}
    className={cn('underline', className)}
  >
    {label}
  </a>
)
