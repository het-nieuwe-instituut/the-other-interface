import { times, uniqueId } from 'lodash'
import { StoriesItem } from '../types'

export function mappedStoriesToCloudStoriesItems(
    // TODO refactor to generic type :T 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storiesData: any[],
): StoriesItem[] {
    const parents = times(storiesData.length / 10, i => `test${i}`)
    return storiesData
        .map(item => ({
            parent: parents[Math.floor((Math.random() * storiesData.length) / 10) + 1] ?? parents[0],
            id: uniqueId(),
            title: item?.attributes?.title ?? '',
            shortDescription: item?.attributes?.shortDescription ?? '',
            slug: item?.attributes?.slug ?? '',
        }))
        .slice(0, 1000)
}
