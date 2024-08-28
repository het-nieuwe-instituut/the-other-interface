'use client'

import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useStoryByIdQuery } from '@/features/shared/hooks/queries/useStoryByIdQuery'
import { useRedirectToErrorOnError } from '@/features/shared/hooks/useRedirectToErrorOnError'
import { useRedirectToLocale } from '@/features/shared/hooks/useRedirectToLocale'
import { ButtonGroup } from '@/features/ui/components/button-group/component'
import { useParams } from 'next/navigation'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'
import { StoryBottomContent } from '../../Story/StoryBottomContent/StoryBottomContent'
import { StoryMeta } from '../../Story/StoryMeta/StoryMeta'
import { LayerWrapper } from '../LayerWrapper'

export const StoryLayer = () => {
  const id = useParams()?.id as string

  const { data: story, isLoading, error } = useStoryByIdQuery(id)

  useRedirectToErrorOnError(error)
  useRedirectToLocale(story?.locale, story?.id)

  const themeIds: string[] = (story?.themes?.map(t => t.id).filter(Boolean) as string[]) ?? []

  return (
    <LayerWrapper
      isLoading={isLoading}
      LeftContent={
        <>
          <PageHeader
            title={story?.title}
            preface={story?.description}
            constrainPreface={true}
            showReadMore={false}
          />
          <DynamicComponentRenderer components={story?.components} isStoryPage={true} />
          {story?.storyLinks?.buttons && (
            <ButtonGroup className="flex gap-4 pt-10">
              {story?.storyLinks?.buttons.map(link => {
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
      BottomContent={<StoryBottomContent themeIds={themeIds} id={id} />}
    />
  )
}
