export function keyExtractor<
  Item extends { id?: string | null } | string,
  Index extends number,
  Array
>(item?: Item | null, index?: Index, array?: Array[]) {
  if (typeof item === 'string') {
    return `${item}-${index}-${array?.length}`
  }
  return `${item?.id}-${index}-${array?.length}`
}

export function chunk<A extends Array<A[0]>>(arr: A, size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
}
