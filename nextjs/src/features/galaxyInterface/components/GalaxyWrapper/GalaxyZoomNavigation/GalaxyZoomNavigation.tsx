import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { isCloudCategory, isSearchCategory } from '@/features/shared/utils/categories'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { InputHTMLAttributes } from 'react'
const getZoom2Link = (searchParam: string, category?: string) => {
  const search = searchParam ? `&search=${searchParam}` : ''

  if (isCloudCategory(category)) {
    return `/landingpage?category=${category}${search}`
  }

  if (isSearchCategory(category)) {
    return `/landingpage?category=${category}${search}&searchResult=true`
  }

  return null
}

export const galaxyZooms = [
  {
    zoom: 1,
    title: 'collection',
    alignItems: 'flex-start',
  },
  {
    zoom: 2,
    title: 'category',
    alignItems: 'center',
  },
  {
    zoom: 3,
    title: 'detail',
    alignItems: 'flex-end',
  },
] as const

export const GalaxyZoomNavigation = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const locale = useLocale()

  const category = (params?.category as string) ?? searchParams?.get('category')

  const searchParam = searchParams?.get('search') || ''

  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const { t } = useTypeSafeTranslation('navigation')
  const zoom2Link = getZoom2Link(searchParam, category as string)

  return (
    <div className="flex flex-col gap-2">
      <p className={TypographyVariants({ socialLarge: 'label', className: 'text-blue-100' })}>
        {t('zoom')}
      </p>

      <form className="relative flex items-center justify-center gap-3">
        <DelayedNextLinkWithZoomAnimationsContext
          animation={'backwards'}
          delay={300}
          href="/"
          className="flex w-[48px] cursor-pointer flex-col flex-nowrap items-center  justify-center gap-2 whitespace-nowrap"
          startAnimation={currentZoomNumber !== 1}
        >
          <label
            htmlFor="zoom-0"
            className={TypographyVariants({
              socialLarge: 'label',
              className: 'text-blue-100 group flex flex-col gap-2 cursor-pointer',
            })}
          >
            <Radio
              defaultChecked={currentZoomNumber === 1}
              name="zoom"
              id="zoom-0"
              value="zoom-0"
              className="self-start"
            />

            {t('collection')}
          </label>
        </DelayedNextLinkWithZoomAnimationsContext>

        <DelayedNextLinkWithZoomAnimationsContext
          animation={'backwards'}
          delay={300}
          aria-disabled={!zoom2Link && currentZoomNumber === 2}
          href={addLocaleToUrl(zoom2Link ?? '', locale)}
          className={cn(
            'flex w-[45px] flex-col flex-nowrap items-center justify-center gap-2 whitespace-nowrap',
            !zoom2Link && currentZoomNumber === 2 && 'cursor-not-allowed pointer-events-none'
          )}
          startAnimation={currentZoomNumber !== 1 && currentZoomNumber !== 2}
        >
          <label
            htmlFor="zoom-1"
            className={TypographyVariants({
              socialLarge: 'label',
              className: cn(
                'text-blue-100 group flex flex-col gap-2',
                zoom2Link ? 'cursor-pointer' : 'cursor-not-allowed'
              ),
            })}
          >
            <Radio
              defaultChecked={currentZoomNumber === 2}
              name="zoom"
              id="zoom-1"
              value="zoom-1"
              disabled={currentZoomNumber === 1}
              className="self-center"
            />

            {t('category')}
          </label>
        </DelayedNextLinkWithZoomAnimationsContext>
        <div className="flex w-[28px] flex-col flex-nowrap items-center justify-center gap-2 whitespace-nowrap">
          <label
            htmlFor="zoom-2"
            className={TypographyVariants({
              socialLarge: 'label',
              className: cn(
                'text-blue-100 group flex flex-col gap-2',
                currentZoomNumber === 3 ? 'cursor-pointer' : 'cursor-not-allowed'
              ),
            })}
          >
            <Radio
              defaultChecked={currentZoomNumber === 3}
              name="zoom"
              id="zoom-2"
              value="zoom-2"
              className="self-end"
              disabled={currentZoomNumber === 1 || currentZoomNumber === 2}
            />

            {t('detail')}
          </label>
        </div>
        <div className="absolute top-1 flex w-full">
          <div className="w-2"></div>
          <div className=" pointer-events-none mt-[-0.5px] h-px w-[71px] bg-blue-50 opacity-50"></div>
          <div className="w-2"></div>
          <div className="pointer-events-none mt-[-0.5px] h-px w-[51px] bg-blue-50 opacity-50"></div>
          <div className="w-2"></div>
        </div>
      </form>
    </div>
  )
}

const Radio = ({ className, ...restProps }: Omit<InputHTMLAttributes<unknown>, 'type'>) => {
  return (
    <>
      <input {...restProps} type="radio" className="peer invisible absolute" />
      <div
        className={cn(
          'text-blue-600 bg-blue-50 bg-clip-border cursor-pointer rounded-full size-2 border border-blue border-solid relative',
          'group-focus:ring-blue-500 group-hover:border-blue-500 dark:focus:ring-blue-600 focus:ring-2',
          'group-hover:after:content-[""] group-hover:after:absolute group-hover:after:size-1 group-hover:after:bg-blue-50 group-hover:after:rounded-full group-hover:after:left-1/2 group-hover:after:top-1/2 group-hover:after:translate-y-[-50%] group-hover:after:translate-x-[-50%]',
          'peer-checked:after:content-[""] peer-checked:after:absolute peer-checked:after:size-1 peer-checked:after:bg-blue-100 peer-checked:after:rounded-full peer-checked:after:left-1/2 peer-checked:after:top-1/2 peer-checked:after:translate-y-[-50%] peer-checked:after:translate-x-[-50%] peer-checked:border-blue peer-checked:bg-transparent',
          'peer-disabled:cursor-not-allowed peer-disabled:bg-transparent peer-disabled:border-blue50 peer-disabled:after:invisible',
          className
        )}
      ></div>
    </>
  )
}
