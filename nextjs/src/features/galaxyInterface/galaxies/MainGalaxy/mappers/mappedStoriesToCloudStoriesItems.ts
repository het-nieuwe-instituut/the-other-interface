import { times, uniqueId } from 'lodash'
import { EntityNames, StoriesWithoutRelationsQuery } from 'src/generated/graphql'
import { CloudItem, StoriesItem } from '../types'

export function mappedStoriesToCloudStoriesItems(
    storiesData: StoriesWithoutRelationsQuery,
    cloudItems: CloudItem[]
): StoriesItem[] {
    const data = storiesData?.storiesWithoutRelations?.data || []

    if (!storiesData?.storiesWithoutRelations) return []
    if (!cloudItems) return []

    const storiesCount = cloudItems.find(item => item.id === EntityNames.Stories)?.count
    // on zoom level 0 and 1 we only need to show UI for galaxy, we don't need to fetch data.
    const endData = data ?? Array(storiesCount).fill(0)
    const parents = times(data.length / 10, i => `test${i}`)

    return endData
        .map(item => ({
            ...item,
            parent: parents[Math.floor((Math.random() * data.length) / 10) + 1] ?? parents[0],
            id: uniqueId(),
            title: item?.attributes?.title ?? '',
            shortDescription: item?.attributes?.shortDescription ?? '',
            slug: item?.attributes?.slug ?? '',
        }))
        .slice(0, 1000)
}
