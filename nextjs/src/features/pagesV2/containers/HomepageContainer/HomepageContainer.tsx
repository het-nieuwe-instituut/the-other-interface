import { HomepageQuery, ZoomLevel1Query } from 'src/generated/graphql'

import { HomepageProvider, Homepage } from './fragments'

export type Props = {
  homepage: HomepageQuery | undefined
  host?: string | null
  imagePath?: string
  zoomLevel1Data: ZoomLevel1Query | undefined
}

export const HomepageContainer = (props: Props) => {
  return (
    <HomepageProvider zoomLevel1={props.zoomLevel1Data}>
      <Homepage data={props.homepage} />
    </HomepageProvider>
  )
}
