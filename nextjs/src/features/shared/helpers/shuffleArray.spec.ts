import { shuffleArray } from './shuffleArray'

describe('shuffleArray', () => {
  it('should shuffle the array', () => {
    const array = [1, 2, 3, 4, 5]
    const shuffledArray = shuffleArray(array)

    expect(shuffledArray).toHaveLength(array.length)
    expect(new Set(shuffledArray)).toEqual(new Set(array))
  })

  it('should return an empty array when given an empty array', () => {
    const array: number[] = []
    const shuffledArray = shuffleArray(array)

    expect(shuffledArray).toEqual([])
  })

  it('should return an array with one element when given an array with one element', () => {
    const array = [1]
    const shuffledArray = shuffleArray(array)

    expect(shuffledArray).toEqual([1])
  })
})
