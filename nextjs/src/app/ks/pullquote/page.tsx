import { EditorialPageWrapper } from '@/features/editorial/components/EditorialPageWrapper'
import { Pullquote } from '@/features/modules/components/Pullquote/Pullquote'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Pullquote</h1>
      <EditorialPageWrapper>
        <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
          <div className="col-span-6 gap-4 bg-gray-100 lg:col-span-7">
            <Pullquote>
              Het Nieuwe Instituut also manages the State Archives for Dutch Architecture and Urban
              Planning, with drawings, photos, posters and models from the archives and collections
              of Dutch architects and urban planners. In addition, there is an internationally
              oriented library open for public and available for research.
            </Pullquote>
            <Pullquote>
              Het Nieuwe Instituut also manages the State Archives for Dutch Architecture and Urban
              Planning, with drawings, photos, posters and models from the archives and collections
              of Dutch architects and urban planners. In addition, there is an internationally
              oriented library open for public and available for research.
            </Pullquote>
          </div>
          <div className="col-span-6 bg-gray-100 lg:col-start-9 lg:col-end-13">side</div>
        </div>
      </EditorialPageWrapper>
    </div>
  )
}

export default Page
