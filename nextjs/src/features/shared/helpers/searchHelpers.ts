import * as LZString from 'lz-string'
import { FilterArray } from '../hooks/search/useFilters'

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
