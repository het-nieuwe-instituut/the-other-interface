import { isExternalURL } from '@/features/shared/utils/links'
import { LinkButton, LinkButtonProps } from '@/features/ui/components/link-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import File from '@/features/ui/icons/file.svg'
import { cn } from '@/features/ui/utils/cn'

interface ExternalLinkProps {
  children: string
  variant?: 'link' | 'download'
  href: LinkButtonProps['href']
  className?: string
}

export const StandaloneLink = ({
  children,
  variant = 'link',
  className,
  href,
}: ExternalLinkProps) => {
  const Icon = variant === 'download' ? File : ExternalLink
  const isExternal = isExternalURL(href.toString(), process.env.parsed.NEXT_PUBLIC_URL ?? '')
  return (
    <LinkButton
      href={variant === 'download' ? `/api/attachmentProxy?filename=${href}` : href}
      target="_blank"
      className={cn('flex gap-2 px-1', className)}
      intent={'secondary'}
      size={'smallNoPadding'}
    >
      {children}
      {variant === 'link' ? isExternal && <Icon className="size-5" /> : <Icon className="size-5" />}
    </LinkButton>
  )
}
