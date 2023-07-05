import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import dynamic from 'next/dynamic'
import { useContext } from 'react'

export enum SupportedLandingPages {
  Publications = 'publications',
  People = 'people',
  Archives = 'archives',
  Objects = 'objects',
}

type Props = {
  dimensions: {
    height: number
    width: number
  }
  type: SupportedLandingPages
}

const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./PaginatedFilterClouds'), {
  ssr: false,
})

const PaginatedFilterCloudsContainer: React.FunctionComponent<Props> = props => {
  const { zoomLevel3: zoom3 } = useContext(LandingpageContext)

  return (
    <>
      <DynamicPaginatedFilterCloudsNoSsr
        zoom3={zoom3?.zoomLevel3 ?? []}
        dimensions={props.dimensions}
        type={props.type}
      />
    </>
  )
}

export default PaginatedFilterCloudsContainer
