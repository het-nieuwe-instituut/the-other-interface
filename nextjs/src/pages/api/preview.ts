// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { LOCALES } from '@/features/shared/constants/locales'

type Data = {
  message: string
}

type UrlPath = `/${string}`

const supportedCollectionType = z.enum([
  'api::landingpage.landingpage',
  'api::story.story',
  'api::menupage.menupage',
  'api::homepage.homepage',
])

const locale = z.enum(LOCALES)

const QueryParams = z.object({
  secret: z.string(),
  collectionTypeSlug: supportedCollectionType,
  data: z.string(),
})

const LandingPagePreviewInputSchema = z.object({
  slug: z.string(),
  locale,
})

const StoryPreviewinputSchema = z.object({
  id: z.number(),
  slug: z.string(),
  locale,
})

const MenuPagePreviewinputSchema = z.object({
  slug: z.string(),
  locale,
})

const HomePagePreviewinputSchema = z.object({
  locale,
})

const getUrlLocale = (locale: 'en' | 'nl') => (locale === 'en' ? '/en' : '')

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { collectionTypeSlug, secret, data } = QueryParams.parse(req.query)
  const parsedData = JSON.parse(data) as unknown

  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  let url: UrlPath

  switch (collectionTypeSlug) {
    case supportedCollectionType.Enum['api::landingpage.landingpage']: {
      const { slug, locale } = LandingPagePreviewInputSchema.parse(parsedData)
      const landingLocale = getUrlLocale(locale)
      // TODO: remove it when we refactored the galaxy
      const zoomState = slug === 'stories' ? ZoomStates.Zoom1ToZoom1Stories : ZoomStates.Zoom2

      url = `${landingLocale}/landingpage/${slug}?preservedZoom=${zoomState}`
      break
    }

    case supportedCollectionType.Enum['api::story.story']: {
      const { id, locale, slug } = StoryPreviewinputSchema.parse(parsedData)
      const storyLocale = getUrlLocale(locale)

      url = `${storyLocale}/story/${id}-${slug}`
      break
    }

    case supportedCollectionType.Enum['api::homepage.homepage']: {
      const { locale } = HomePagePreviewinputSchema.parse(parsedData)
      const homePageLocale = getUrlLocale(locale)

      url = `${homePageLocale}/`
      break
    }

    case supportedCollectionType.Enum['api::menupage.menupage']: {
      const { locale, slug } = MenuPagePreviewinputSchema.parse(parsedData)
      const menuPageLocale = getUrlLocale(locale)

      url = `${menuPageLocale}/menupage/${slug}`
      break
    }

    default:
      throw new Error('Unmatched collectionTypeSlug')
  }
  if (!url) {
    return res.status(401).json({ message: `Preview route is not supported` })
  }

  // If all good we set preview cookies
  // And we redirect the user to the preview version of the blog post
  res.setPreviewData({})

  res.writeHead(307, { Location: url })
  res.end()
}
