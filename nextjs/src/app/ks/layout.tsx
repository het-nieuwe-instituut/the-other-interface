import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    return notFound()
  }

  return (
    <div>
      {/* <GoBack /> */}
      {children}
    </div>
  )
}
