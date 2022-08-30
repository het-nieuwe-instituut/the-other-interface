import setLanguage from 'next-translate/setLanguage'
import getT from 'next-translate/getT'
import { TranslationKeys } from 'locales/locales'
import { TranslationQuery } from 'next-translate'

type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}.${S2}` : never) : never

export type Paths<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K
}[keyof T]

export const setAppLanguage = setLanguage

export const getTranslation = async <T extends keyof TranslationKeys>(locale: string, ns: T) => {
    const t = await getT(locale, ns)

    return (
        s: TranslationKeys[T],
        q?: TranslationQuery,
        o?: {
            returnObjects?: boolean
            fallback?: string | string[]
            default?: string
        }
    ) => t(s, q, o)
}
