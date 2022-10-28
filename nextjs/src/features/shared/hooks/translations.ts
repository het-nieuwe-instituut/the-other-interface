// useTypeSafeTranslation.ts

import useTranslation from 'next-translate/useTranslation'
import { TranslationQuery } from 'next-translate'
import { TranslationKeys } from 'locales/locales'

export const useTypeSafeTranslation = <T extends keyof TranslationKeys>(ns: T) => {
    const { t, lang } = useTranslation(ns)

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

/**
 *  usefull when dealing with dynamic translated values, this is an escape hatch when needed, try to solve it with useTypeSafeTranslation first
 */
export const useLooseTypeSafeTranslation = <T extends keyof TranslationKeys>(ns: T) => {
    const { t, lang } = useTranslation(ns)

    return {
        t: (
            s: string,
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
