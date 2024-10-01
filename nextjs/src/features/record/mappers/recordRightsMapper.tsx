import { recordMetaT } from 'locales/locales'
import { CopyrightIcon } from './CopyrightIcon'
import { CcIcon } from './CcIcon'
import { QuestionIcon } from './QuestionIcon'
import { AttributionIcon } from './AttributionIcon'
import { PublicDomainIcon } from './PublicDomainIcon'

export function recordRightsFieldMapper(record: string, translate: recordMetaT) {
  switch (record) {
    case 'Copyright status not evaluated':
    case 'Auteursrechtelijke status niet geëvalueerd':
      return {
        url: 'https://rightsstatements.org/page/CNE/1.0/',
        description: translate('rightsStatusNotEvaluatedText'),
        icon: () => <QuestionIcon style={{ width: '24px', height: '24px' }} />,
        text: translate('rightsStatusNotEvaluated'),
      }
    case 'Copyright protection':
    case 'Auteursrechtelijk beschermd':
      return {
        url: 'https://rightsstatements.org/page/InC/1.0/',
        description: translate('rightsStatusProtectedText'),
        icon: () => <CopyrightIcon style={{ width: '24px', height: '24px' }} />,
        text: translate('rightsStatusProtected'),
      }
    case 'Copyright protection not determined':
    case 'Auteursrechtelijke bescherming niet bepaald':
      return {
        url: 'https://rightsstatements.org/page/UND/1.0/',
        description: translate('rightsStatusNotDeterminedText'),
        icon: () => <QuestionIcon style={{ width: '24px', height: '24px' }} />,
        text: translate('rightsStatusNotDetermined'),
      }
    case 'Creative Commons Attribution 4.0':
    case 'Creative Commons Naamsvermelding 4.0':
      return {
        url: 'https://creativecommons.org/licenses/by/4.0/',
        description: translate('rightsStatusCCBYText'),
        icon: () => <CcIcon style={{ width: '24px', height: '24px' }} />,
        secondaryIcon: () => (
          <AttributionIcon style={{ width: '24px', height: '24px', marginLeft: '2' }} />
        ),
        text: translate('rightsStatusCCBY'),
      }
    case 'Public domain':
    case 'Publiek domein':
      return {
        url: 'https://creativecommons.org/publicdomain/mark/1.0/',
        description: translate('rightsStatusPublicText'),
        icon: () => <CcIcon style={{ width: '24px', height: '24px' }} />,
        secondaryIcon: () => (
          <PublicDomainIcon style={{ width: '24px', height: '24px', marginLeft: '2' }} />
        ),
        text: translate('rightsStatusPublic'),
      }

    default:
      return null
  }
}
