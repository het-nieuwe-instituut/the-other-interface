'use client'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { State } from '@/features/shared/configs/store'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { useSearchParams } from 'next/navigation'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { Pulse } from '../../components/Pulse/Pulse'
import { ThemeTitle } from '../../components/ThemeTitle/ThemeTitle'
import {
  GalaxyPaginationAnimationStateContext,
  GalaxyPaginationAnimationStateProvider,
} from '../hooks/GalaxyPaginationAnimationStateProvider'
import { GalaxyZoomAnimationStateProvider } from '../hooks/GalaxyZoomAnimationStateProvider'
import { CategoryCloud, Cloud, Stories } from './fragments'
import { useThemesQuery } from './hooks/useThemesQuery'

const categoryClouds: CategoryCloud[] = [
  {
    title: 'archives',
    sizeClassNames: 'size-[144.4vw] xl:size-[2905.31px]',
    titleClassNames: 'left-[4.2vw] xl:left-[60.48px] bottom-[42.5%] xl:bottom-[42.5%]',
    cloudClassNames:
      'left-[calc(-144.4vw+32vw)] xl:left-[-2539.56px] bottom-[calc(-144.4vw/2+34%)] xl:bottom-[calc(-2079.36px/2)]',
  },

  {
    title: 'publications',
    sizeClassNames: 'size-[135.4vw] xl:size-[1949.760px]',
    titleClassNames: 'right-[14vw] xl:right-[201.6px] bottom-[26%] xl:bottom-[26vh]',
    cloudClassNames:
      'right-[calc(-135.4vw/2+13vw)] xl:right-[-783px] bottom-[calc(-135.4vw+44%)] xl:bottom-[calc(-1949.760px+35%)]',
  },
  {
    title: 'objects',
    sizeClassNames: 'size-[84.41vw] xl:size-[1038.87px]',
    titleClassNames: 'right-[5.4vw] xl:right-[77.76px] top-[22%] xl:top-[22vh]',
    cloudClassNames:
      'top-[calc(-84.41vw/2+12.7%)] xl:top-[calc(-1038.87px/2+11%)] right-[calc(-84.41vw+22vw)] xl:right-[-832px]',
  },
  {
    title: 'people',
    sizeClassNames: 'size-[62.42vw] xl:size-[1215.824px]',
    titleClassNames: 'left-[41vw] xl:left-[590.4px] top-[6.4%] xl:top-[6.4vh]',
    cloudClassNames:
      'top-[calc(-62.42vw+23.7%)] xl:top-[calc(-1215.824px+10.7%)] left-[calc(-62.42vw/2+44vw)] xl:left-[70px]',
  },
]

export const MainGalaxy = () => {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')

  return (
    <GalaxyPaginationAnimationStateProvider>
      <GalaxyZoomAnimationStateProvider>
        <MainGalaxyContent key={currentPage} />
      </GalaxyZoomAnimationStateProvider>
    </GalaxyPaginationAnimationStateProvider>
  )
}

const MainGalaxyContent = React.memo(() => {
  const { t } = useTypeSafeTranslation('navigation')
  const galaxyPaginationAnimationState = useContext(GalaxyPaginationAnimationStateContext)
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')

  const {
    data: mainData,
    isLoading: isMainLoading,
    isError,
  } = useThemesQuery({ page: currentPage })
  const { data: nextData } = useThemesQuery({ page: currentPage + 1 })
  const { data: prevData } = useThemesQuery({ page: currentPage - 1 })

  const pagination = mainData?.pagination
  const totalPages = pagination?.pageCount || 0
  const storyTitle = mainData?.storyTitle
  const stories = mainData?.stories ?? []
  const nextStories = nextData?.stories ?? []

  const { increasePageNumber, decreasePageNumber } = useSearchParamPagination(totalPages, false)
  useArrowNavigation({
    onLeft: handleLeftClick,
    onRight: handleRightClick,
    disabled: isSearchModeActive,
  })
  const renderMainContent = () => {
    if (isError) {
      return (
        <div className="flex h-full items-center justify-center">
          <p className={TypographyVariants({ times: 'md' })}>{t('errorLoadingThemes')}</p>
        </div>
      )
    }

    if (isMainLoading && prevData) {
      return (
        <>
          <Pulse />
          <Stories stories={prevData?.stories} nextStories={[]} />
          <ThemeTitle title={storyTitle} />
        </>
      )
    }

    if (isMainLoading && !mainData) {
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
      <BlurOverlay hide={!isSearchModeActive} />
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
              isResultAmountLoading={isMainLoading}
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
              isResultEmpty={stories.length === 0}
              text={t('theme')}
            />
          }
        />
      </div>
    </div>
  )

  function handleLeftClick() {
    galaxyPaginationAnimationState.setAnimationState('backwards')
    //hacky, we should actually listen for event when the animation ends
    setTimeout(() => {
      decreasePageNumber()
    }, 500)
  }

  function handleRightClick() {
    galaxyPaginationAnimationState.setAnimationState('forward')
    setTimeout(() => {
      //hacky, we should actually listen for event when the animation ends
      increasePageNumber()
    }, 500)
  }
})
MainGalaxyContent.displayName = 'MainGalaxyContent'
