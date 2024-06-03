import type { NextPage } from 'next'
import { StandaloneLink } from './StandaloneLink'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Standalone link:</p>

      <div>
        <StandaloneLink href={'https://pdfobject.com/pdf/sample.pdf'} variant="download">
          This is a link
        </StandaloneLink>
        <StandaloneLink href={'/'}>This is a link </StandaloneLink>
      </div>
    </div>
  )
}

export default Page
