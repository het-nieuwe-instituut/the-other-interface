'use client'
import { useMenuPages } from '../../hooks/queries/useMenuPages'
import { Footer } from '../Footer/Footer'
import { Navigation } from '../Navigation/Navigation'

export default function BaseElementWrapper() {
  const { data } = useMenuPages()
  return (
    <>
      {data && (
        <>
          <Navigation menupages={data} />
          <Footer menupages={data} />
        </>
      )}
    </>
  )
}
