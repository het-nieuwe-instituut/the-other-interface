import { SupportedQuerys, zoom5Config } from "./zoom5Config"


export async function getZoom5RelationsRecordTask(record: string) {
    try {
        const type = record.split('-')[1] as SupportedQuerys
        const id: string = record.split('-')[0]

        if (type === SupportedQuerys.stories) {
            return
        }
        
        const configByType = zoom5Config[type]

        const relations = await configByType.relationsQuery?.({ id: id })

        return {
            zoom5relations: relations,
        }
    } catch (e) {
        console.log(e, 'Error accured in zoom level 5 task')
    }
}
