// we use english by default, so types will be taken from there

import { Paths } from 'src/features/shared/utils/translations'
import common from './en/common.json'
import stories from './en/stories.json'
import homepage from './en/homepage.json'
import landingpage from './en/landingpage.json'
import navigation from './en/navigation.json'
import { TranslationQuery } from 'next-translate'

export type TranslationKeys = {
    common: Paths<typeof common>
    stories: Paths<typeof stories>
    homepage: Paths<typeof homepage>
    landingpage: Paths<typeof landingpage>
    navigation: Paths<typeof navigation>
}

export type navigationT =  (s: Paths<
    typeof navigation
>, q?: TranslationQuery | undefined, o?: {
    returnObjects?: boolean | undefined;
    fallback?: string | string[] | undefined;
    default?: string | undefined;
} | undefined) => string