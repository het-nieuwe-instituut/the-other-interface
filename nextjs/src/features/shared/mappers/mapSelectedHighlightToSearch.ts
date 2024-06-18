import { EntityNames, SearchBySelectedHighlightsQuery } from 'src/generated/graphql'

type SelectedHighlightItem = SearchBySelectedHighlightsQuery['triplyRecords']['data'][0]
type SelectionHighlightCategoryItem =
  | SelectedHighlightItem['attributes']['archive']
  | SelectedHighlightItem['attributes']['object']
  | SelectedHighlightItem['attributes']['people']
  | SelectedHighlightItem['attributes']['publication']

const mapSelectedHighlightToSearch = (item: SelectedHighlightItem) => {
  const { entityName } = item?.attributes

  let currentItem: SelectionHighlightCategoryItem | undefined

  switch (entityName) {
    case EntityNames.Archives:
      currentItem = item.attributes?.archive
      break
    case EntityNames.Objects:
      currentItem = item.attributes?.object
      break
    case EntityNames.People:
      currentItem = item.attributes?.people
      break
    case EntityNames.Publications:
      currentItem = item.attributes?.publication
      break
  }

  if (!currentItem) {
    return {
      id: item.attributes?.recordId,
      title: item.attributes?.label ?? '',
      thumbnail: '',
      type: entityName,
    }
  }

  const thumbnail = Array.isArray(currentItem?.thumbnail)
    ? currentItem.thumbnail[0]
    : currentItem?.thumbnail

  return {
    id: item.attributes?.recordId,
    title: currentItem?.title ?? '',
    thumbnail: thumbnail ?? '',
    type: entityName,
  }
}

export default mapSelectedHighlightToSearch
