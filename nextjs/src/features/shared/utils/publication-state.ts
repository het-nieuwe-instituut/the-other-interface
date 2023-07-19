import { PublicationState } from '../types/enums'

export const getPublicationState = (isPreview?: boolean | null) => {
  if (isPreview === true) return PublicationState.Preview

  return PublicationState.Live
}
