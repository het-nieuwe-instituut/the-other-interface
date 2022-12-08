import MemoizedRecordClouds from '@/features/galaxyInterface/galaxies/RecordClouds/RecordClouds'
import RecordContext from '@/features/pages/containers/RecordContainer/RecordContext'
import { SupportedQuerys } from '@/features/pages/tasks/getZoom5RecordTask'
import { useContext } from 'react'
import { Dimensions } from '../../../types/galaxy'

export const DynamicRecordCloudsContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const zoom5Context = useContext(RecordContext)

    if (!zoom5Context.detail) {
        return null
    }

    return (
        <MemoizedRecordClouds
            zoomLevel5={zoom5Context.detail}
            relations={zoom5Context.relations}
            dimensions={dimensions}
            type={SupportedQuerys.publications}
        />
    )
}
