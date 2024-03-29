import { recordMetaT } from 'locales/locales'
import EducationalRights from '@/icons/rights/EducationalRights.svg'
import NonCommertialRights from '@/icons/rights/NonCommertialRights.svg'
import EuOpharnWorkRights from '@/icons/rights/EuOpharnWorkRights.svg'
import UnknownRightsHolderRights from '@/icons/rights/UnknownRightsHolderRights.svg'
import InCopyrightRights from '@/icons/rights/InCopyrightRights.svg'

export function recordRightsFieldMapper(record: string, recordMetaT: recordMetaT) {
  switch (record) {
    case 'Auteursrechtelijke status niet geëvalueerd':
      return {
        url: 'https://rightsstatements.org/page/CNE/1.0/',
        description: recordMetaT('rightsStatusNotEvaluated'),
        // TODO update the icon when LbA provide a correct one
        icon: EducationalRights,
      }
    case 'Auteursrechtelijk beschermd':
      return {
        url: 'https://rightsstatements.org/page/InC/1.0/',
        description: recordMetaT('rightsStatusProtected'),
        // TODO update the icon when LbA provide a correct one
        icon: InCopyrightRights,
      }
    case 'Auteursrechtelijke bescherming niet bepaald':
      return {
        url: 'https://rightsstatements.org/page/UND/1.0/',
        description: recordMetaT('rightsStatusNotDetermined'),
        // TODO update the icon when LbA provide a correct one
        icon: UnknownRightsHolderRights,
      }
    case 'Creative Commons Naamsvermelding 4.0':
      return {
        url: 'https://creativecommons.org/licenses/by/4.0/',
        description: recordMetaT('rightsStatusCCBY'),
        // TODO update the icon when LbA provide a correct one
        icon: EuOpharnWorkRights,
      }

    case 'Publiek domein':
      return {
        url: 'https://creativecommons.org/publicdomain/mark/1.0/',
        description: recordMetaT('rightsStatusPublic'),
        // TODO update the icon when LbA provide a correct one
        icon: NonCommertialRights,
      }

    default:
      return null
  }
}
