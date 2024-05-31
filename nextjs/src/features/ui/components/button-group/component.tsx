/* eslint-disable @typescript-eslint/no-explicit-any */
import { isExternalURL } from '@/features/shared/utils/links'
import { NavButton, NavLinkButton } from '@/features/ui/components/nav-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { ReactElement } from 'react'
import { cn } from '../../utils/cn'

export interface ButtonGroupProps {
  children:
    | ReactElement<LinkButtonGroupItemProps>
    | ReactElement<ButtonGroupItemProps>
    | Array<ReactElement<LinkButtonGroupItemProps> | ReactElement<ButtonGroupItemProps> | null>
    | null
  className?: string
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => {
  return <div className={cn('flex w-full gap-4 bg-inherit', className)}>{children}</div>
}

export interface LinkButtonGroupItemProps {
  href: string
  children: string
}
export const LinkButtonGroupItem: React.FC<LinkButtonGroupItemProps> = ({
  href,
  children,
}: LinkButtonGroupItemProps) => {
  const isExternal = isExternalURL(href, process.env.parsed.NEXT_PUBLIC_URL ?? '')
  return (
    <NavLinkButton href={href} variant={'footerPrimary'}>
      {children}
      {isExternal && <ExternalLink className="size-6" />}
    </NavLinkButton>
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
