import { render } from '@testing-library/react'

import { SeoHeader } from './SeoHeader'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})
describe('SEO header', () => {
  it('it should be able to render the seo header', () => {
    const renderComponent = () =>
      render(
        <SeoHeader title="test" preventIndexing={true} imageUrl="test" fullUrl="fullurl.com" />,
        {
          container: document.head,
        }
      )

    renderComponent()
    expect(document.title).toBe('test')
    expect(
      document.querySelector("meta[property='og:title']")?.attributes.getNamedItem('content')?.value
    ).toBe('test')
    expect(
      document.querySelector("meta[property='og:image']")?.attributes.getNamedItem('content')?.value
    ).toBe('test')
    expect(
      document.querySelector("meta[name='robots']")?.attributes.getNamedItem('content')?.value
    ).toBe('noindex')
  })

  it('it should not render image and robots', () => {
    const renderComponent = () =>
      render(<SeoHeader title="test" fullUrl="fullurl.com" />, {
        container: document.head,
      })

    renderComponent()
    expect(document.querySelector("meta[property='og:image']")).toBeFalsy()
    expect(document.querySelector("meta[name='robots']")).toBeFalsy()
  })
})
