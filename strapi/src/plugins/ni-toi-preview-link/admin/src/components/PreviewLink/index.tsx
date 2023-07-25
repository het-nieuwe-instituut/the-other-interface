// ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
import { LinkButton } from '@strapi/design-system/LinkButton'
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import Eye from '@strapi/icons/Eye'
import React from 'react'

const PreviewLink = () => {
  const { initialData, slug: collectionTypeSlug } = useCMEditViewDataManager()

  if (!initialData?.createdAt || initialData?.publishedAt) return null

  return (
    <LinkButton
      size="S"
      startIcon={<Eye />}
      style={{ width: '100%' }}
      href={`${process.env.STRAPI_ADMIN_CLIENT_FRONTEND_PREVIEW_URL}?secret=${
        process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET
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
