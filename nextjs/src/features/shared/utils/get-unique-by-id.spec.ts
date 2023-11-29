import { getUniqueById } from './get-unique-by-id'

describe('getUniqueById', () => {
  it('should return an array with unique items based on the "id" property', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'Jack' },
      { id: 3, name: 'Jill' },
    ]

    const result = getUniqueById(arr)

    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jill' },
    ])
  })

  it('should handle an empty array', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr: any[] = []

    const result = getUniqueById(arr)

    expect(result).toEqual([])
  })

  it('should handle an array with a single item', () => {
    const arr = [{ id: 1, name: 'John' }]

    const result = getUniqueById(arr)

    expect(result).toEqual([{ id: 1, name: 'John' }])
  })

  it('should handle an array with multiple items having the same "id"', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 1, name: 'Jane' },
      { id: 1, name: 'Jack' },
    ]

    const result = getUniqueById(arr)

    expect(result).toEqual([{ id: 1, name: 'John' }])
  })
})
