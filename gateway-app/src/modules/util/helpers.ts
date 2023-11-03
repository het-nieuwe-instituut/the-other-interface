import { random } from 'lodash'

export function getRandom2ItemsFromArray<T>(arr: T | T[]): T[] {
  if (!Array.isArray(arr)) {
    return []
  }

  if (arr.length <= 2) {
    return arr
  }

  const cp = [...arr]
  const rand1 = random(0, cp.length - 1)
  const random1 = cp.splice(rand1, 1)[0]

  const rand2 = random(0, cp.length - 1)
  const random2 = cp.splice(rand2, 1)[0]

  return [random1, random2]
}

export function getHttpThumbnailOrNull(image?: string | null) {
  if (image?.startsWith('http')) {
    return image
  }

  return null
}

export function getUniqueById<T extends { id: string | number }>(arr: T[]): T[] {
  const seenIds = new Set<string | number>()

  return arr.filter(item => {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id)
      return true
    }
    return false
  })
}
