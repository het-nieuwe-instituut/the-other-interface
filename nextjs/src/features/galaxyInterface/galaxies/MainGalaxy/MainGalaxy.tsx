'use client'
import { Box, Flex } from '@chakra-ui/react'

import { Cloud, CategoryCloud, Stories } from './fragments'
import { ThemeTitle } from '../../components/ThemeTitle/ThemeTitle'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { usePresenter } from './usePresenter'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Loader } from '../../components/Loader/Loader'
import { useThemesQuery } from './hooks/useThemes'
import { useSearchParams } from 'next/navigation'

const categoryClouds: CategoryCloud[] = [
  {
    title: 'archives',
    size: '144.4vw',
    titlePosition: { left: '4.2vw', bottom: '42.5%' },
    cloudPosition: { left: 'calc(-144.4vw + 32vw)', bottom: 'calc(-144.4vw / 2 + 34%)' },
  },
  {
    title: 'publications',
    size: '135.4vw',
    titlePosition: { right: '14vw', bottom: '26%' },
    cloudPosition: { right: 'calc(-135.4vw / 2 + 13vw)', bottom: 'calc(-135.4vw + 44%)' },
  },
  {
    title: 'objects',
    size: '84.41vw',
    titlePosition: { right: '5.4vw', top: '22%' },
    cloudPosition: { top: 'calc(-84.41vw / 2 + 12.7%)', right: 'calc(-84.41vw + 22vw)' },
  },
  {
    title: 'people',
    size: '62.42vw',
    titlePosition: { left: '41vw', top: '6.4%' },
    cloudPosition: { top: 'calc(-62.42vw + 23.7%)', left: 'calc(-62.42vw / 2 + 44vw)' },
  },
]

export const MainGalaxy = () => {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')

  const {
    storyTitle,
    stories,
    pagination,
    isLoading: isMainLoading,
    isError,
  } = useThemesQuery(currentPage)
  const { stories: nextStories, isLoading: isNextLoading } = useThemesQuery(currentPage + 1)
  const { increasePageNumber, decreasePageNumber } = usePresenter(pagination?.pageCount || 0)
  const { t } = useTypeSafeTranslation('navigation')
  const isLoading = isMainLoading || isNextLoading

  return (
    <Box position="relative" width="100vw" height="100vh">
      {categoryClouds.map(cloud => (
        <Cloud key={cloud.title} cloud={cloud} />
      ))}

      {isError && (
        <div className="flex justify-center items-center h-full">
          <p className="text-black.100 times-large text-xl">{t('errorLoadingThemes')}</p>
        </div>
      )}

      {!isError && isLoading && (
        <Flex justify={'center'} align={'center'} height={'100%'}>
          <Loader />
        </Flex>
      )}
      {!isError && !isLoading && (
        <>
          <Stories stories={stories} nextStories={nextStories} />
          <ThemeTitle title={storyTitle} />
        </>
      )}

      <GalaxyFooter
        galaxyPagination={
          <GalaxyPagination
            currentPageNumber={pagination?.page || 0}
            pageAmount={pagination?.pageCount || 0}
            isResultAmountLoading={false}
            handleLeftClick={decreasePageNumber}
            handleRightClick={increasePageNumber}
            isResultEmpty={stories.length === 0}
            text={t('theme')}
          />
        }
      />
    </Box>
  )
}
