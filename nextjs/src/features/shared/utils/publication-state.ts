import { PublicationState } from '../types/enums'

export const getPublicationState = (isPreview?: boolean | null) => {
  if (!isPreview) return PublicationState.Live

  return PublicationState.Preview
}
