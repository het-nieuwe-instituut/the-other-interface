import { PublicationState } from '../types/enums'

import { getPublicationState } from './publication-state'

describe('getPublicationState', () => {
  it('returns PublicationState.Preview when isPreview is true', () => {
    const result = getPublicationState(true)
    expect(result).toEqual(PublicationState.Preview)
  })

  it('returns PublicationState.Live when isPreview is false', () => {
    const result = getPublicationState(false)
    expect(result).toEqual(PublicationState.Live)
  })

  it('returns PublicationState.Live when isPreview is null', () => {
    const result = getPublicationState(null)
    expect(result).toEqual(PublicationState.Live)
  })

  it('returns PublicationState.Live when isPreview is undefined', () => {
    const result = getPublicationState()
    expect(result).toEqual(PublicationState.Live)
  })
})
