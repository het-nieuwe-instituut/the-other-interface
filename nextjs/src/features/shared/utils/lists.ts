// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function keyExtractor<Item extends { id: string }, Index extends number, Array>(
    item?: Item | null,
    index?: Index,
    array?: Array[]
) {
    return `${item?.id}-${index}-${array?.length}`
}

export function chunk<A extends Array<A[0]>>(arr: A, size: number) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
}
