'use client'

import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '../LayerWrapper'
import { StoryBottomContent } from '../../Story/StoryBottomContent/StoryBottomContent'
import { useStoryByIdQuery } from '@/features/shared/hooks/queries/useStoryByIdQuery'
import { useParams } from 'next/navigation'

import { useRedirectToErrorOnError } from '@/features/shared/hooks/useRedirectToErrorOnError'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { StoryMeta } from '../../Story/StoryMeta/StoryMeta'
import { ButtonGroup } from '@/features/ui/components/button-group/component'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'

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
          <PageHeader title={story?.title} preface={story?.description} constrainPreface={true} />
          <DynamicComponentRenderer components={story?.attributes?.components} isStoryPage={true} />
          {story?.attributes?.storyLinks?.buttons && (
            <ButtonGroup className="flex gap-4 pt-10">
              {story?.attributes?.storyLinks?.buttons.map(link => {
                if (!link.url || !link.text) return null

                return (
                  <StandaloneLink href={link.url} key={link.id}>
                    {link.text}
                  </StandaloneLink>
                )
              })}
            </ButtonGroup>
          )}
        </>
      }
      RightContent={
        <ErrorBoundaryWrapper>
          <StoryMeta />
        </ErrorBoundaryWrapper>
      }
      BottomContent={<StoryBottomContent />}
    />
  )
}
