import { extractSlugAndId, extractType } from "@/features/galaxyInterface/utils/extractors"
import ApiClient from "@/features/graphql/api"
import { SupportedQuerys, zoom5Config } from "./zoom5Config"


export async function getZoom5RelationsRecordTask(path: string, record: string) {
    try {
        const { id } = extractSlugAndId(record)
        const type = extractType(path)
        let realtions

        if (type === SupportedQuerys.stories) {
            realtions =  await ApiClient?.StoriesRelations({ id })
            return {
                zoom5relations: realtions,
            }
        }

        const configByType = zoom5Config[type]

        realtions = await configByType.relationsQuery?.({ id: id })

        return {
            zoom5relations: realtions,
        }
        
    } catch (e) {
        console.log(e, 'Error accured in zoom level 5 task')
    }
}
