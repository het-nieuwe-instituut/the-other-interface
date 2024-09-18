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
          'duration-100 transition-colors fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto',
          className
        )}
      >
        <div
          className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6"
          role="button"
          aria-label="scroll"
          tabIndex={0}
          onClick={handleHeaderClick}
          onKeyDown={handleKeyDown}
        >
          <Logo text={tNavigation('headerTitle')} />
          <div>
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

export const Logo = ({ text }: { text?: string }) => {
  const dispatch = useDispatch()
  const lang = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const galaxyHeight = useSelector((state: State) => state.shared.galaxyHeight)
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  const updateClipPercentage = useCallback((currentGalaxyHeight: number) => {
    const currentScrollY = parseInt(document.documentElement.dataset.scroll || '0')
    if (currentScrollY !== lastScrollY.current) {
      lastScrollY.current = currentScrollY
      const scrollProgress = Math.max(0, currentScrollY - currentGalaxyHeight)
      const navbarScrollProgress = Math.max(0, currentScrollY - currentGalaxyHeight + 200)
      const newClipPercentage = Math.min(scrollProgress / 1.3, 100)
      const navbarPercentage = Math.min(navbarScrollProgress / 1.3, 100)
      const text1 = document.getElementById('text-1')
      const text2 = document.getElementById('text-2')
      const navbar = document.getElementById('navbar')

      if (text2) {
        text2.style.display = scrollProgress > 0 ? 'block' : 'none'
      }

      if (text1 && text2 && navbar) {
        text1.style.clipPath = `inset(0 0 ${newClipPercentage}% 0)`
        text2.style.clipPath = `inset(${100 - newClipPercentage}% 0 0 0)`
        // set background opacity based on scroll progress
        navbar.style.backgroundColor = `rgba(255, 230, 221, ${navbarPercentage}%)`
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = debounce(() => {
      document.documentElement.dataset.scroll = `${window.scrollY}`
      updateClipPercentage(galaxyHeight)
    })

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [galaxyHeight, updateClipPercentage])

  return (
    <div className="h-full items-center">
      <DelayedNextLinkWithZoomAnimationsContext
        onClick={() => dispatch(sharedActions.menuOpen({ isMenuOpen: false }))}
        animation={'backwards'}
        delay={300}
        href={lang ? `/?lang=${lang}` : '/?lang=nl'}
        className={cn('cursor-pointer h-full flex m-0 relative')}
      >
        <div ref={containerRef} className="relative flex items-center" style={{ height: '42px' }}>
          <p
            id={'text-2'}
            className={cn(
              MenuTypogrpahyVariants({ default: 'secondary' }),
              isMenuOpen && MenuTypogrpahyVariants({ inverted: 'secondary' }),
              'mr-2 max-sm:overflow-visible max-sm:whitespace-normal max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px] text-nowrap flex-nowrap transition-[clip-path] duration-200 ease-out',
              'absolute w-full'
            )}
            style={{
              display: 'none',
            }}
          >
            {text}
          </p>
          <p
            id={'text-1'}
            className={cn(
              MenuTypogrpahyVariants({ default: 'primary' }),
              isMenuOpen && MenuTypogrpahyVariants({ inverted: 'primary' }),
              'mr-2 max-sm:overflow-visible max-sm:whitespace-normal max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px] text-nowrap flex-nowrap transition-[clip-path] duration-200 ease-out'
            )}
            style={{
              clipPath: `inset(0 0 0 0)`,
            }}
          >
            {text}
          </p>
        </div>
      </DelayedNextLinkWithZoomAnimationsContext>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <T extends (...args: any[]) => void>(fn: T) => {
  let frame: number | null = null

  return (...params: Parameters<T>): void => {
    if (frame) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}
