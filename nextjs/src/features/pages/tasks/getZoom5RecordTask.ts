import { extractSlugAndId } from "@/features/galaxyInterface/utils/extractors"
import { SupportedQuerys, zoom5Config } from "./zoom5Config"


export async function getZoom5RecordTask(type: SupportedQuerys, record: string) {
    try {
        const { id } = extractSlugAndId(record)

        if (type === SupportedQuerys.stories) {
            return
        }
        const configByType = zoom5Config[type]

        const detailQuery = await configByType.zoomLevelQuery?.({ id: id })

        return {
            zoom5detail: configByType.accesor(detailQuery) ?? null,
        }
    } catch (e) {
        console.log(e, 'Error accured in zoom level 5 task')
    }
}
