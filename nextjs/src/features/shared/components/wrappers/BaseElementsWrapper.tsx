'use client'
import { Footer } from '../Footer/Footer'
import { Navigation } from '../Navigation/Navigation'
import { useSetDefaulLangInUrl } from '../../hooks/useSetDefaulLangInUrl'

export default function BaseElementWrapper() {
  useSetDefaulLangInUrl()

  return (
    <>
      <>
        <Navigation />
        <Footer />
      </>
    </>
  )
}
