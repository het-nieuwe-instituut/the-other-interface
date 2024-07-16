import { isExternalURL } from '@/features/shared/utils/links'
import { NavButton } from '@/features/ui/components/nav-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { VariantProps } from 'class-variance-authority'
import { ReactElement } from 'react'
import { cn } from '../../utils/cn'
import { JumboLinkButton } from '../jumbo-button/component'
import { NavButtonVariants } from '../nav-button/variants'
import { NavLinkButton } from '../nav-link-button/component'

export interface ButtonGroupProps {
  children:
    | ReactElement<LinkButtonGroupItemProps | ButtonGroupItemProps>
    | Array<ReactElement<LinkButtonGroupItemProps | ButtonGroupItemProps> | null>
    | null
  className?: string
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => {
  return <div className={cn('w-full bg-inherit', className)}>{children}</div>
}

interface LinkButtonGroupItemProps extends VariantProps<typeof NavButtonVariants> {
  href: string
  children: string
}

export const LinkButtonGroupItem: React.FC<LinkButtonGroupItemProps> = ({
  href,
  children,
  variant,
  color = 'blue',
}: LinkButtonGroupItemProps) => {
  const isExternal = isExternalURL(href, process.env.parsed.NEXT_PUBLIC_URL ?? '')
  return (
    <NavLinkButton href={href} variant={variant} color={color} className="relative w-full">
      {children}
      <i>{isExternal && <ExternalLink className="size-6" />}</i>
    </NavLinkButton>
  )
}

interface JumboLinkButtonGroupItemProps {
  href: string
  children: string
}
export const JumboLinkButtonGroupItem: React.FC<JumboLinkButtonGroupItemProps> = ({
  href,
  children,
}: LinkButtonGroupItemProps) => {
  const isExternal = isExternalURL(href, process.env.parsed.NEXT_PUBLIC_URL ?? '')
  return (
    <JumboLinkButton href={href}>
      {children}
      <i>{isExternal && <ExternalLink className="ml-2 inline-flex size-6" />}</i>
    </JumboLinkButton>
  )
}

interface ButtonGroupItemProps {
  children: string
  onClick: () => void
}
export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  children,
  onClick,
}: ButtonGroupItemProps) => {
  return (
    <NavButton onClick={onClick} variant={'footerPrimary'}>
      {children}
    </NavButton>
  )
}
