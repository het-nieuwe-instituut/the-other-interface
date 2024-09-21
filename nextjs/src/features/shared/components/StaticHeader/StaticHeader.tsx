'use client'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { STATIC_HEADER_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { useLocale } from '../../hooks/useLocale'
import { sharedActions } from '../../stores/shared.store'

export const StaticHeader = ({
  isNotGalaxyPage,
  className,
}: {
  isNotGalaxyPage?: boolean
  className?: string
}) => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const handleHeaderClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (isNotGalaxyPage) {
    return <StaticPageHeader />
  }

  return (
    <>
      <div
        id={'navbar'}
        style={{ '--z-index': `${STATIC_HEADER_Z_INDEX}` } as CSSProperties}
        className={cn(
          'ease-toi-cubic-bezier',
          'duration-100 transition-[transform] fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto',
          'will-change-[transform]',
          className
        )}
      >
        <div
          id="navbar-background"
          className="absolute inset-0 origin-bottom bg-[#FFE6DD] ease-toi-cubic-bezier"
          style={{ transform: 'scaleY(0)', transformOrigin: 'bottom' }}
        ></div>
        <div
          className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6"
          role="button"
          aria-label="scroll"
          tabIndex={0}
          onClick={handleHeaderClick}
          onKeyDown={handleKeyDown}
        >
          <Logo text={tNavigation('headerTitle')} />
          <div className="z-10">
            <GalaxyTopRight />
          </div>
        </div>
      </div>
    </>
  )
}

export const StaticPageHeader = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const lang = useLocale()

  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  return (
    <>
      <div
        style={{ '--z-index': `${STATIC_HEADER_Z_INDEX}` } as CSSProperties}
        className={cn(
          'ease-toi-cubic-bezier',
          isMenuOpen ? 'bg-blue-90' : 'bg-pink-100',
          'duration-200 fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto'
        )}
      >
        <div className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6">
          <div className="h-full items-center">
            <DelayedNextLinkWithZoomAnimationsContext
              animation={'backwards'}
              delay={300}
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              className={cn(
                !isMenuOpen && MenuTypogrpahyVariants({ default: 'secondary' }),
                isMenuOpen && MenuTypogrpahyVariants({ inverted: 'secondary' }),
                'cursor-pointer overflow-hidden h-full flex m-0 '
              )}
            >
              <p className="mr-2 max-sm:overflow-visible max-sm:whitespace-normal max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px]">
                {tNavigation('headerTitle')}
              </p>
            </DelayedNextLinkWithZoomAnimationsContext>
          </div>
          <div>
            <GalaxyTopRight />
          </div>
        </div>
      </div>
    </>
  )
}

const HEADER_HEIGHT = 74
const Logo = ({ text }: { text?: string }) => {
  const dispatch = useDispatch()
  const lang = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const galaxyHeight = useSelector((state: State) => state.shared.galaxyHeight)
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  const updateClipPercentage = useCallback(() => {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      if (currentScrollY !== lastScrollY.current) {
        lastScrollY.current = currentScrollY
        const scrollProgress = Math.max(
          0,
          currentScrollY - galaxyHeight + HEADER_HEIGHT + HEADER_HEIGHT / 2
        )
        const navbarScrollProgress = Math.max(0, currentScrollY - galaxyHeight + HEADER_HEIGHT)
        const newClipPercentage = Math.min(scrollProgress / 0.6, 100)
        const navbarPercentage = Math.min(navbarScrollProgress / 0.6, 100)
        const text1 = document.getElementById('text-1')
        const text2 = document.getElementById('text-2')
        const navbarBackground = document.getElementById('navbar-background')

        if (text1 && text2 && navbarBackground) {
          // Batch DOM writes
          text2.style.display = scrollProgress > 0 ? 'block' : 'none'
          text1.style.clipPath = `inset(0 0 ${newClipPercentage}% 0)`
          text2.style.clipPath = `inset(${100 - newClipPercentage}% 0 0 0)`
          navbarBackground.style.transform = `scaleY(${navbarPercentage / 100})`
          navbarBackground.style.bottom = `${-navbarPercentage}%`
        }
      }
    })
  }, [galaxyHeight])

  useEffect(() => {
    document.addEventListener('scroll', updateClipPercentage, { passive: true })

    return () => {
      document.removeEventListener('scroll', updateClipPercentage)
    }
  }, [updateClipPercentage])

  return (
    <div className="h-full items-center">
      <DelayedNextLinkWithZoomAnimationsContext
        onClick={() => dispatch(sharedActions.menuOpen({ isMenuOpen: false }))}
        animation={'backwards'}
        delay={300}
        href={lang ? `/?lang=${lang}` : '/?lang=nl'}
        className={cn('cursor-pointer h-full flex m-0 relative')}
      >
        <div
          ref={containerRef}
          className="relative flex flex-wrap items-center overflow-hidden max-sm:w-[200px]  "
          style={{ height: '42px' }}
        >
          <p
            id={'text-2'}
            className={cn(
              MenuTypogrpahyVariants({ default: 'secondary' }),
              isMenuOpen && MenuTypogrpahyVariants({ inverted: 'secondary' }),
              'mr-2 max-sm:overflow-visible  max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px] sm:text-nowrap sm:flex-nowrap',
              'absolute w-full will-change-[clip-path]'
            )}
            style={{
              display: 'none',
              clipPath: 'inset(100% 0 0 0)',
            }}
          >
            {text}
          </p>
          <p
            id={'text-1'}
            className={cn(
              MenuTypogrpahyVariants({ default: 'primary' }),
              isMenuOpen && MenuTypogrpahyVariants({ inverted: 'primary' }),
              'mr-2 max-sm:overflow-visible max-sm:text-[20px]  max-sm:font-normal max-sm:leading-[21px] sm:text-nowrap sm:flex-nowrap',
              'will-change-[clip-path]'
            )}
            style={{
              clipPath: 'inset(0 0 0% 0)',
            }}
          >
            {text}
          </p>
        </div>
      </DelayedNextLinkWithZoomAnimationsContext>
    </div>
  )
}
