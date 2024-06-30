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
import recordTable from './en/recordTable.json'
import footer from './en/footer.json'
import readmore from './en/readmore.json'
import collection from './en/collection.json'
import asterisk from './en/asterisk.json'
import externalSources from './en/externalSources.json'
import contribute from './en/contribute.json'

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
  recordTable: Paths<typeof recordTable>
  footer: Paths<typeof footer>
  readmore: Paths<typeof readmore>
  collection: Paths<typeof collection>
  asterisk: Paths<typeof asterisk>
  externalSources: Paths<typeof externalSources>
  contribute: Paths<typeof contribute>
}

type GenericTranslateT<T> = (
  s: Paths<T>,
  q?: TranslationQuery | undefined,
  o?:
    | {
        returnObjects?: boolean | undefined
        fallback?: string | string[] | undefined
        default?: string | undefined
      }
    | undefined
) => string | undefined

export type navigationT = GenericTranslateT<typeof navigation>
export type recordMetaT = GenericTranslateT<typeof recordMeta>
export type recordMetaArchiveT = GenericTranslateT<typeof recordMetaArchive>
export type recordMetaPublicationT = GenericTranslateT<typeof recordMetaPublication>
export type recordMetaObjectT = GenericTranslateT<typeof recordMetaObject>
export type recordMetaPersonT = GenericTranslateT<typeof recordMetaPerson>
export type recordTableT = GenericTranslateT<typeof recordTable>

export type recordMetaType = Paths<typeof recordMeta>
