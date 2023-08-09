// ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
import { LinkButton } from '@strapi/design-system/LinkButton'
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import Eye from '@strapi/icons/Eye'
import React from 'react'

import { usePreviewConfig } from '../../utils/hooks/usePreviewConfig'

type PrimitivesObject = Record<string, string | number | boolean>

const PreviewLink = () => {
  const { data: previewConfig, isLoading, isError } = usePreviewConfig()
  const { initialData, slug: collectionTypeSlug } = useCMEditViewDataManager()

  const getPrimitiveValues = (data: Record<string, any>) => {
    const primitives: PrimitivesObject = {}
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (['string', 'number', 'boolean'].includes(typeof data[key])) {
          primitives[key] = data[key]
        }
      }
    }
    return primitives
  }

  const primitivesData = getPrimitiveValues(initialData)

  if (!initialData?.createdAt || initialData?.publishedAt || isError) return null

  if (isLoading) return <div>Preview is Loading...</div>

  return (
    <LinkButton
      size="S"
      startIcon={<Eye />}
      style={{ width: '100%' }}
      href={`${previewConfig.clientPreviewUrl}?secret=${
        previewConfig.clientPreviewSecret
      }&data=${JSON.stringify(primitivesData)}&collectionTypeSlug=${collectionTypeSlug}`}
      variant="secondary"
      target="_blank"
      rel="noopener noreferrer"
      title="page preview"
    >
      Preview
    </LinkButton>
  )
}

export default PreviewLink
