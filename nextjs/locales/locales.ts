// we use english by default, so types will be taken from there
import { TranslationQuery } from 'next-translate'

import { Paths } from 'src/features/shared/utils/translations'

import common from './en/common.json'
import homepage from './en/homepage.json'
import landingpage from './en/landingpage.json'
import navigation from './en/navigation.json'
import record from './en/record.json'
import stories from './en/stories.json'
import category from './en/category.json'

export type TranslationKeys = {
  common: Paths<typeof common>
  stories: Paths<typeof stories>
  homepage: Paths<typeof homepage>
  landingpage: Paths<typeof landingpage>
  navigation: Paths<typeof navigation>
  record: Paths<typeof record>
  category: Paths<typeof category>
}

export type navigationT = (
  s: Paths<typeof navigation>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string
