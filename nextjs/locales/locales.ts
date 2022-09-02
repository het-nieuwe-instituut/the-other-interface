// we use english by default, so types will be taken from there
import { Paths } from '@/features/shared/utils/translations'
import common from './en/common.json'

export type TranslationKeys = {
    common: Paths<typeof common>
}
