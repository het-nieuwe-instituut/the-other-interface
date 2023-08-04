import { getZoom5RelationsRecordTask } from '@/features/pages/tasks/getZoom5RelationsRecordTask'
import useQuery from '@/features/shared/hooks/useQuery'
import { initApiClient } from '@/features/shared/utils/api'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import RecordRelations from '../components/RecordRelations/RecordRelations'

interface RelationsContainerProps {
  parentRef: React.RefObject<SVGSVGElement>
}

const RelationsContainer = (props: RelationsContainerProps) => {
  const router = useRouter()
  const { record, slug } = router.query

  const apiClient = initApiClient(null)

  const { data } = useQuery(() =>
    getZoom5RelationsRecordTask(router.asPath, (record as string) ?? (slug as string), apiClient)
  )

  const relations = useMemo(() => {
    return data?.zoom5relations?.relations?.filter(item => item?.total > 0)
  }, [data?.zoom5relations?.relations])

  return relations ? (
    <RecordRelations relations={relations ?? []} parentRef={props.parentRef} />
  ) : null
}

export default RelationsContainer
