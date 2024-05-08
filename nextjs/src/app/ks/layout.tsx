import { PropsWithChildren } from 'react'
import { GoBack } from './GoBackButton'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <GoBack />
      {children}
    </div>
  )
}
