// we use english by default, so types will be taken from there
import { Paths } from 'src/common/utils/translations'
import common from './en/common.json'

export type TranslationKeys = {
    common: Paths<typeof common>
}
