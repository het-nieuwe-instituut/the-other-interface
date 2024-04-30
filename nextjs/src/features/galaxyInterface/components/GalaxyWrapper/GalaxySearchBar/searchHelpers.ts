import { FilterArray } from '../Suggestions/Suggestions'
import * as LZString from 'lz-string'

const encodeFilters = (filters: FilterArray): string => {
  const json = JSON.stringify(filters)
  const compressed = LZString.compressToEncodedURIComponent(json)
  return compressed
}

const decodeFilters = (encoded: string): FilterArray => {
  const decompressed = LZString.decompressFromEncodedURIComponent(encoded)
  if (!decompressed) throw new Error('Decompression failed')
  return JSON.parse(decompressed)
}

export { encodeFilters, decodeFilters }
