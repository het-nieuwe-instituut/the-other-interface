import { Maybe, TriplyRecord } from 'src/generated/graphql'

import { imageBasePath } from '../modulesConstants'

interface DefaultTriplyFields {
  imageUrl: string
  title: string
  description: string
}

export type ExtractedTriplyFields = DefaultTriplyFields

const extractTriplyFields = (
  defaultFields: DefaultTriplyFields,
  record?: Maybe<Partial<TriplyRecord>>
): ExtractedTriplyFields => {
  const triplyType = record?.type

  if (!triplyType) {
    return {
      ...defaultFields,
      imageUrl: imageBasePath(defaultFields.imageUrl) || '',
    }
  }

  if (triplyType === 'Archive') {
    const item = record.archive
    return {
      ...defaultFields,
      title: item?.title ?? defaultFields?.title,
      description: item?.objectNumber ?? defaultFields?.description,
    }
  }

  if (triplyType === 'Object') {
    const item = record.object
    return {
      ...defaultFields,
      imageUrl: item?.thumbnail?.[0] ?? defaultFields.imageUrl,
      title: item?.title ?? defaultFields?.title,
      description: defaultFields?.description,
    }
  }

  if (triplyType === 'Publication') {
    const title = record.publication?.title

    return {
      ...defaultFields,
      title: title ?? defaultFields?.title,
    }
  }

  if (triplyType === 'People') {
    return {
      ...defaultFields,
      title: defaultFields?.title,
      description: defaultFields?.description,
    }
  }

  return defaultFields
}

export { extractTriplyFields }
