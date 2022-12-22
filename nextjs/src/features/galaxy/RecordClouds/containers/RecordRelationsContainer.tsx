import { getZoom5RelationsRecordTask } from "@/features/pages/tasks/getZoom5RelationsRecordTask";
import useQuery from "@/features/shared/hooks/useQuery";
import { useRouter } from "next/router";
import { useMemo } from "react";
import RecordRelations from "../components/RecordRelations/RecordRelations";

interface RelationsContainerProps {
    parentRef: React.RefObject<SVGSVGElement>
}

const RelationsContainer = (props: RelationsContainerProps) => {
    const router = useRouter()
    const {slug} = router.query
    
    const { data } = useQuery(() => getZoom5RelationsRecordTask(router.asPath, slug as string))
    const relations = useMemo(() => {
        return data?.zoom5relations?.relations?.filter(item => item?.total > 0)
    }, [data?.zoom5relations?.relations])

    return (
        relations ? <RecordRelations relations={relations ?? []} parentRef={props.parentRef}/> : null
    )
}

export default RelationsContainer


