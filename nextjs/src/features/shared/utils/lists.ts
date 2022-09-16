// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function keyExtractor<Item extends { id: string }, Index extends number, Array>(
    item?: Item | null,
    index?: Index,
    array?: Array[]
) {
    return `${item?.id}-${index}-${array?.length}`
}
