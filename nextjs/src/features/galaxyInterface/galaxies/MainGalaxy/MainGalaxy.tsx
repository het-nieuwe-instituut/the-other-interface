'use client'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useSearchParams } from 'next/navigation'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { ThemeTitle } from '../../components/ThemeTitle/ThemeTitle'
import { CategoryCloud, Cloud, Stories } from './fragments'
import { useThemesQuery } from './hooks/useThemes'
import { usePresenter } from './usePresenter'

const categoryClouds: CategoryCloud[] = [
  {
    title: 'archives',
    size: { base: '144.4vw', xl: '2905.31px' },
    titlePosition: {
      left: { base: '4.2vw', xl: '60.48px' },
      bottom: { base: '42.5%', xl: '42.5%' },
    },
    cloudPosition: {
      left: { base: 'calc(-144.4vw + 32vw)', xl: '-2539.56px' },
      bottom: { base: 'calc(-144.4vw / 2 + 34%)', xl: 'calc(-2079.36px / 2)' },
    },
  },

  {
    title: 'publications',
    size: { base: '135.4vw', xl: '1949.760px' },
    titlePosition: {
      right: { base: '14vw', xl: '201.6px' },
      bottom: { base: '26%', xl: '26vh' },
    },
    cloudPosition: {
      right: { base: 'calc(-135.4vw / 2 + 13vw)', xl: '-783px' },
      bottom: { base: 'calc(-135.4vw + 44%)', xl: 'calc(-1949.760px + 35%)' },
    },
  },
  {
    title: 'objects',
    size: { base: '84.41vw', xl: '1038.87px' },
    titlePosition: {
      right: { base: '5.4vw', xl: '77.76px' },
      top: { base: '22%', xl: '22vh' },
    },
    cloudPosition: {
      top: { base: 'calc(-84.41vw / 2 + 12.7%)', xl: 'calc(-1038.87px / 2 + 11%)' },
      right: { base: 'calc(-84.41vw + 22vw)', xl: '-832px' },
    },
  },
  {
    title: 'people',
    size: { base: '62.42vw', xl: '1215.824px' },
    titlePosition: {
      left: { base: '41vw', xl: '590.4px' },
      top: { base: '6.4%', xl: '6.4vh' },
    },
    cloudPosition: {
      top: { base: 'calc(-62.42vw + 23.7%)', xl: 'calc(-1215.824px + 10.7%)' },
      left: { base: 'calc(-62.42vw / 2 + 44vw)', xl: '70px' },
    },
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

  const renderMainContent = () => {
    if (isError) {
      return (
        <div className="flex h-full items-center justify-center">
          <p className={TypographyVariants({ times: 'md' })}>{t('errorLoadingThemes')}</p>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div className="flex h-full  items-center justify-center">
          <ThemedSpinner />
        </div>
      )
    }

    return (
      <>
        <Stories stories={stories} nextStories={nextStories} />
        <ThemeTitle title={storyTitle} />
      </>
    )
  }

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto h-screen w-screen max-w-[1440px]">
        {categoryClouds.map(cloud => (
          <Cloud key={cloud.title} cloud={cloud} />
        ))}

        {renderMainContent()}

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
      </div>
    </div>
  )
}
