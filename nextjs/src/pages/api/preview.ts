// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

type Data = {
  message: string
}

const supportedCollectionType = z.enum([
  'api::landingpage.landingpage',
  'api::story.story',
  'api::menupage.menupage',
  'api::homepage.homepage',
])
const QueryParams = z.object({
  secret: z.string(),
  collectionTypeSlug: supportedCollectionType,
  data: z.string(),
})

const LandingPagePreviewInputSchema = z.object({
  slug: z.string(),
})

const StoryPreviewinputSchema = z.object({
  id: z.number(),
  slug: z.string(),
})

const MenupagePreviewinputSchema = z.object({
  slug: z.string(),
})

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { collectionTypeSlug, secret, data } = QueryParams.parse(req.query)
  const parsedData = JSON.parse(data) as unknown

  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  let url: string

  switch (collectionTypeSlug) {
    case supportedCollectionType.Enum['api::landingpage.landingpage']:
      const landingPageData = LandingPagePreviewInputSchema.parse(parsedData)
      url = `/landingpage/${landingPageData.slug}`
      break
    case supportedCollectionType.Enum['api::story.story']:
      const storyData = StoryPreviewinputSchema.parse(parsedData)
      url = `/story/${storyData.id}-${storyData.slug}`
      break
    case supportedCollectionType.Enum['api::homepage.homepage']:
      url = `/`
      break
    case supportedCollectionType.Enum['api::menupage.menupage']:
      const menuPageData = MenupagePreviewinputSchema.parse(parsedData)
      url = `/menupage/${menuPageData.slug}`
      break
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
