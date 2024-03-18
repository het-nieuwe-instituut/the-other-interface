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
import recordMeta from './en/recordMeta.json'
import recordMetaPublication from './en/recordMetaPublication.json'
import recordMetaArchive from './en/recordMetaArchive.json'
import recordMetaObject from './en/recordMetaObject.json'
import recordMetaPerson from './en/recordMetaPerson.json'

export type TranslationKeys = {
  common: Paths<typeof common>
  stories: Paths<typeof stories>
  homepage: Paths<typeof homepage>
  landingpage: Paths<typeof landingpage>
  navigation: Paths<typeof navigation>
  record: Paths<typeof record>
  category: Paths<typeof category>
  recordMeta: Paths<typeof recordMeta>
  recordMetaPublication: Paths<typeof recordMetaPublication>
  recordMetaArchive: Paths<typeof recordMetaArchive>
  recordMetaObject: Paths<typeof recordMetaObject>
  recordMetaPerson: Paths<typeof recordMetaPerson>
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

export type recordMetaArchiveT = (
  s: Paths<typeof recordMetaArchive>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string | undefined

export type recordMetaPublicationT = (
  s: Paths<typeof recordMetaPublication>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string | undefined

export type recordMetaObjectT = (
  s: Paths<typeof recordMetaObject>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string | undefined

export type recordMetaPersonT = (
  s: Paths<typeof recordMetaPerson>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string | undefined

export type recordMetaType = Paths<typeof recordMeta>
