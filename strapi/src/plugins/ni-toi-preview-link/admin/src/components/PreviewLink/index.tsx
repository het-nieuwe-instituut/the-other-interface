// ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
import { LinkButton } from '@strapi/design-system/LinkButton'
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import Eye from '@strapi/icons/Eye'
import React from 'react'
import { useQuery } from 'react-query'

import axiosInstance from '../../utils/axiosInstance'

const fetchPreviewConfig = async () => {
  try {
    const { data, headers } = await axiosInstance.get('/ni-toi-preview-link/preview-config')

    if (!headers['content-type'].includes('application/json')) {
      throw new Error('Not found')
    }

    return data
  } catch (error) {
    throw new Error(error)
  }
}

const PreviewLink = () => {
  const { initialData, slug: collectionTypeSlug } = useCMEditViewDataManager()

  const { isLoading, isError, data, error } = useQuery({
    queryFn: fetchPreviewConfig,
  })

  if (!initialData?.createdAt || initialData?.publishedAt) return null

  if (isLoading) return <span>Loading...</span>

  if (isError && error) return error

  return (
    <LinkButton
      size="S"
      startIcon={<Eye />}
      style={{ width: '100%' }}
      href={`${data.clientPreviewUrl}?secret=${data.clientPreviewSecret}&data=${JSON.stringify(
        initialData
      )}&collectionTypeSlug=${collectionTypeSlug}`}
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
