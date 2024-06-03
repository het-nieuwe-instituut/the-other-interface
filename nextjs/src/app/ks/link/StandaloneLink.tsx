import { LinkButton, LinkButtonProps } from '@/features/ui/components/link-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import File from '@/features/ui/icons/file.svg'
import { cn } from '@/features/ui/utils/cn'

interface ExternalLinkProps {
  children: string
  variant?: 'external' | 'download'
  href: LinkButtonProps['href']
  className?: string
  size?: LinkButtonProps['size']
}

export const StandaloneLink = ({
  children,
  variant = 'external',
  className,
  href,
  size,
}: ExternalLinkProps) => {
  const Icon = variant === 'download' ? File : ExternalLink
  return (
    <LinkButton
      href={href}
      className={cn('flex gap-2', className)}
      intent={'tertiary'}
      size={size}
      download={variant === 'download'}
    >
      {children}
      <Icon className="size-5" />
    </LinkButton>
  )
}
