'use client'
import { PageHeader } from '../../PageHeader/PageHeader'
import { StoryMeta } from '../../Story/StoryMeta/StoryMeta'
import { usePresenter } from './usePresenter'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '../LayerWrapper'
import { StoryBottomContent } from '../../Story/StoryBottomContent/StoryBottomContent'

export const StoryLayer = () => {
  const { story } = usePresenter()

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
