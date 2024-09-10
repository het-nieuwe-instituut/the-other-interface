import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { Paragraph } from '@/features/ui/components/Paragraph/Paragraph'
import { Subtitle } from '@/features/ui/components/subtitle/Subtitle'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { LayerWrapper } from '../Layers/LayerWrapper'
import { StaticPageHeader } from '../StaticHeader/StaticHeader'

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
  <Subtitle>{children as string}</Subtitle>
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
  className?: string
  title: string
  children: React.ReactNode
  disableBelowTheFold?: boolean
}

export const StaticPageContainer = ({
  children,
  title,
  className,
  disableBelowTheFold,
}: StaticPageContainerProps) => (
  <div className={cn('h-full bg-ivory-100', disableBelowTheFold && 'bg-pink-100', className)}>
    <div className="pb-[42px]">
      <StaticPageHeader />
    </div>
    <LayerWrapper
      suspense={true}
      disableBelowTheFold={disableBelowTheFold}
      LeftContent={<PageHeader title={title} />}
      BottomContent={
        <div className={'mx-auto mb-10 flex max-w-[90em] flex-col gap-[10px] px-5 pt-6 xl:px-6'}>
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
