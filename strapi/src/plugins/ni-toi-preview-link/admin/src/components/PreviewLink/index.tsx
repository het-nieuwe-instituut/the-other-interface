// ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
import { LinkButton } from '@strapi/design-system/LinkButton'
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import Eye from '@strapi/icons/Eye'
import React from 'react'

import { usePreviewConfig } from '../../utils/hooks/usePreviewConfig'

const PreviewLink = () => {
  const { data: previewConfig, isLoading, isError } = usePreviewConfig()
  const { initialData, slug: collectionTypeSlug } = useCMEditViewDataManager()

  if (!initialData?.createdAt || initialData?.publishedAt || isError) return null

  if (isLoading) return <div>Preview is Loading...</div>

  return (
    <LinkButton
      size="S"
      startIcon={<Eye />}
      style={{ width: '100%' }}
      href={`${previewConfig.clientPreviewUrl}?secret=${
        previewConfig.clientPreviewSecret
      }&data=${JSON.stringify(initialData)}&collectionTypeSlug=${collectionTypeSlug}`}
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
