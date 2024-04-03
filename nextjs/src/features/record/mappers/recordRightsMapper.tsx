import { recordMetaT } from 'locales/locales'
import { CopyrightIcon } from './CopyrightIcon'
import { CcIcon } from './CcIcon'
import { QuestionIcon } from './QuestionIcon'
import { AttributionIcon } from './AttributionIcon'
import { PublicDomainIcon } from './PublicDomainIcon'

export function recordRightsFieldMapper(record: string, translate: recordMetaT) {
  console.log('record', record)
  switch (record) {
    case 'Auteursrechtelijke status niet geëvalueerd':
      return {
        url: 'https://rightsstatements.org/page/CNE/1.0/',
        description: translate('rightsStatusNotEvaluatedText'),
        icon: () => <QuestionIcon style={{ width: '55px', height: '55px' }} />,
        text: translate('rightsStatusNotEvaluated'),
      }
    case 'Auteursrechtelijk beschermd':
      return {
        url: 'https://rightsstatements.org/page/InC/1.0/',
        description: translate('rightsStatusProtectedText'),
        icon: () => <CopyrightIcon style={{ width: '55px', height: '55px' }} />,
        text: translate('rightsStatusProtected'),
      }
    case 'Auteursrechtelijke bescherming niet bepaald':
      return {
        url: 'https://rightsstatements.org/page/UND/1.0/',
        description: translate('rightsStatusNotDeterminedText'),
        icon: () => <QuestionIcon style={{ width: '55px', height: '55px' }} />,
        text: translate('rightsStatusNotDetermined'),
      }
    case 'Creative Commons Naamsvermelding 4.0':
      return {
        url: 'https://creativecommons.org/licenses/by/4.0/',
        description: translate('rightsStatusCCBYText'),
        icon: () => <CcIcon style={{ width: '55px', height: '55px' }} />,
        secondaryIcon: () => (
          <AttributionIcon style={{ width: '55px', height: '55px', marginLeft: '2' }} />
        ),
        text: translate('rightsStatusCCBY'),
      }
    case 'Publiek domein':
      return {
        url: 'https://creativecommons.org/publicdomain/mark/1.0/',
        description: translate('rightsStatusPublicText'),
        icon: () => <CcIcon style={{ width: '55px', height: '55px' }} />,
        secondaryIcon: () => (
          <PublicDomainIcon style={{ width: '55px', height: '55px', marginLeft: '2' }} />
        ),
        text: translate('rightsStatusPublic'),
      }

    default:
      return null
  }
}
