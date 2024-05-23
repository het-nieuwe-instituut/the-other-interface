import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import type { NextRequest } from 'next/server'

type Data = {
  locale: 'nl' | 'en'
  slug: string
  id: string
}

type UrlPath = `/${string}`

const supportedCollectionType = z.enum([
  'api::landingpage.landingpage',
  'api::story.story',
  'api::menupage.menupage',
  'api::homepage.homepage',
])

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const searchParams = new URLSearchParams(requestUrl.search)
  const secret = searchParams.get('secret')
  const collectionTypeSlug = searchParams.get('collectionTypeSlug')
  const data = searchParams.get('data') as string
  const parsedData = JSON.parse(data) as unknown as Data
  const { locale, slug, id } = parsedData

  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  let url: UrlPath

  switch (collectionTypeSlug) {
    case supportedCollectionType.Enum['api::landingpage.landingpage']: {
      url = `/landingpage?category=${slug}&lang=${locale}`
      break
    }

    case supportedCollectionType.Enum['api::story.story']: {
      url = `/detail/stories/${id}`
      break
    }

    case supportedCollectionType.Enum['api::homepage.homepage']: {
      url = `/?lang=${locale}`
      break
    }

    case supportedCollectionType.Enum['api::menupage.menupage']: {
      url = `/menupage/${slug}?lang=${locale}`
      break
    }

    default:
      throw new Error('Unmatched collectionTypeSlug')
  }

  if (!url) {
    return new Response('Preview route is not supported', { status: 401 })
  }

  draftMode().enable()

  redirect(url)
}
