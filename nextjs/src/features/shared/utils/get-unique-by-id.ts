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
