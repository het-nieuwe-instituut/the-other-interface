// we use english by default, so types will be taken from there

import { Paths } from 'src/features/shared/utils/translations'
import common from './en/common.json'
import stories from './en/stories.json'

export type TranslationKeys = {
    common: Paths<typeof common>
    stories: Paths<typeof stories>
}
