'use client'
import { PageHeader } from '../../PageHeader/PageHeader'
import { StoryMeta } from '../../Story/StoryMeta/StoryMeta'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '../LayerWrapper'
import { StoryBottomContent } from '../../Story/StoryBottomContent/StoryBottomContent'
import { useStoryByIdQuery } from '@/features/shared/hooks/queries/useStoryByIdQuery'
import { useParams } from 'next/navigation'

import { useRedirectToErrorOnError } from '@/features/shared/hooks/useRedirectToErrorOnError'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'

export const StoryLayer = () => {
  const params = useParams()
  const id = params?.id as string
  const { data, isLoading, error } = useStoryByIdQuery(id)
  const story = data

  useRedirectToErrorOnError(error)

  if (isLoading) {
    return (
      <div className="flex h-full w-screen items-center justify-center p-12">
        <ThemedSpinner />
      </div>
    )
  }

  return (
    <LayerWrapper
      LeftContent={
        <>
          <PageHeader title={story?.title} preface={story?.description} />
          <DynamicComponentRenderer components={story?.attributes?.components} isStoryPage={true} />
        </>
      }
      RightContent={<StoryMeta />}
      BottomContent={<StoryBottomContent />}
    />
  )
}
