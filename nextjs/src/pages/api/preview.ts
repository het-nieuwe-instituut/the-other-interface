// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { match } from 'ts-pattern'
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
  slug: z.string(),
})

const MenupagePreviewinputSchema = z.object({
  slug: z.string(),
})

// const HomepagePreviewInputSchema = z.object({
//   slug: z.string(),
// })

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.query)
  const queryParams = QueryParams.parse(req.query)
  const parsedData = JSON.parse(queryParams.data) as unknown

  if (queryParams.secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const url = match(queryParams)
    .with(
      { collectionTypeSlug: supportedCollectionType.Enum['api::landingpage.landingpage'] },
      () => {
        const data = LandingPagePreviewInputSchema.parse(parsedData)
        return `/landingpage/${data.slug}?preview=true`
      }
    )
    .with(
      {
        collectionTypeSlug: supportedCollectionType.Enum['api::story.story'],
      },
      () => {
        const data = StoryPreviewinputSchema.parse(parsedData)
        return `/story/${data.slug}`
      }
    )
    .with(
      {
        collectionTypeSlug: supportedCollectionType.Enum['api::homepage.homepage'],
      },
      () => {
        // const data = HomepagePreviewInputSchema.parse(parsedData)
        return `/`
      }
    )
    .with(
      {
        collectionTypeSlug: supportedCollectionType.Enum['api::menupage.menupage'],
      },
      () => {
        const data = MenupagePreviewinputSchema.parse(parsedData)
        return `/menupage/${data.slug}`
      }
    )
    .exhaustive()

  if (!url) {
    return res.status(401).json({ message: `Preview route is not supported` })
  }

  // If all good we set preview cookies
  // And we redirect the user to the preview version of the blog post
  res.setPreviewData({})

  res.writeHead(307, { Location: url })
  res.end()
}
