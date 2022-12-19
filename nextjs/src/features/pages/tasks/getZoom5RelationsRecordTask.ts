import ApiClient from "@/features/graphql/api"
import { SupportedQuerys, zoom5Config } from "./zoom5Config"


export async function getZoom5RelationsRecordTask(record: string) {
    try {
        const type = record.split('/')[1] as SupportedQuerys
        const id: string = record.split('/')[2]
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
