import { TranslationKeys } from 'locales/locales'
import { TranslationQuery } from 'next-translate'
import createTranslation from 'next-translate/createTranslation'

type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}.${S2}` : never) : never

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K
}[keyof T]

export const createTypeSafeTranslation = <T extends keyof TranslationKeys>(ns: T) => {
  const { t, lang } = createTranslation(ns)

  return {
    t: (
      s: TranslationKeys[T],
      q?: TranslationQuery,
      o?: {
        returnObjects?: boolean
        fallback?: string | string[]
        default?: string
      }
    ) => t(s, q, o),
    lang,
  }
}
