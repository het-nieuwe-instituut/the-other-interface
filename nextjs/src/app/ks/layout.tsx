import { PropsWithChildren } from 'react'
import { GoBack } from './GoBackButton'
import { notFound } from 'next/navigation'

export default function Layout({ children }: PropsWithChildren) {
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    return notFound()
  }

  return (
    <div>
      <GoBack />
      {children}
    </div>
  )
}
