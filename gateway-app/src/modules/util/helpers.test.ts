import { getHttpThumbnailOrNull, getRandom2ItemsFromArray } from './helpers'

describe('getRandom2ItemsFromArray', () => {
  it('returns an empty array if the input array is not an array', () => {
    expect(getRandom2ItemsFromArray(null)).toEqual([])
    expect(getRandom2ItemsFromArray(undefined)).toEqual([])
    expect(getRandom2ItemsFromArray('not an array')).toEqual([])
    expect(getRandom2ItemsFromArray(123)).toEqual([])
    expect(getRandom2ItemsFromArray({})).toEqual([])
  })

  it('returns the original array if it has 2 or fewer items', () => {
    expect(getRandom2ItemsFromArray([])).toEqual([])
    expect(getRandom2ItemsFromArray([1])).toEqual([1])
    expect(getRandom2ItemsFromArray([1, 2])).toEqual([1, 2])
  })

  it('returns 2 random items from the input array', () => {
    const input = [1, 2, 3, 4, 5]
    const output = getRandom2ItemsFromArray(input)
    expect(output.length).toEqual(2)
    expect(input.includes(output[0])).toBe(true)
    expect(input.includes(output[1])).toBe(true)
    expect(output[0]).not.toEqual(output[1])
  })
})

describe('getHttpThumbnailOrNull', () => {
  it('returns null if the input is null or undefined', () => {
    expect(getHttpThumbnailOrNull(null)).toEqual(null)
    expect(getHttpThumbnailOrNull(undefined)).toEqual(null)
  })

  it('returns the input if it includes "http"', () => {
    expect(getHttpThumbnailOrNull('http://example.com')).toEqual('http://example.com')
    expect(getHttpThumbnailOrNull('https://example.com')).toEqual('https://example.com')
    expect(getHttpThumbnailOrNull('http://example.com/image.jpg')).toEqual(
      'http://example.com/image.jpg'
    )
    expect(getHttpThumbnailOrNull('https://example.com/image.jpg')).toEqual(
      'https://example.com/image.jpg'
    )
  })

  it('returns null if the input does not include "http"', () => {
    expect(getHttpThumbnailOrNull('example.com')).toEqual(null)
    expect(getHttpThumbnailOrNull('example.com/image.jpg')).toEqual(null)
    expect(getHttpThumbnailOrNull('ftp://example.com')).toEqual(null)
  })
})
