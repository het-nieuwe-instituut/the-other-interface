'use client'
import { useMenuPages } from '../../hooks/queries/useMenuPages'
import { Footer } from '../Footer/Footer'
import { Navigation } from '../Navigation/Navigation'
import { useSetDefaulLangInUrl } from '../../hooks/useSetDefaulLangInUrl'

export default function BaseElementWrapper() {
  useSetDefaulLangInUrl()
  const { data } = useMenuPages()
  return (
    <>
      <>
        <Navigation menupages={data} />
        <Footer menupages={data} />
      </>
    </>
  )
}
