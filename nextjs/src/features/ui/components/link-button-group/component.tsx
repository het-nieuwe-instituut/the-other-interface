/* eslint-disable @typescript-eslint/no-explicit-any */
import { isExternalURL } from '@/features/shared/utils/links'
import { NavLinkButton } from '@/features/ui/components/nav-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { ReactElement } from 'react'

interface ButtonGroupProps {
  children:
    | ReactElement<LinkButtonGroupItemProps>
    | Array<ReactElement<LinkButtonGroupItemProps> | null>
}

export const LinkButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className="flex w-full gap-4 bg-inherit">{children}</div>
}

interface LinkButtonGroupItemProps {
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
