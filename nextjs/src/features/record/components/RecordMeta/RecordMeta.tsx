'use client'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import {
  useLooseTypeSafeTranslation,
  useTypeSafeTranslation,
} from '@/features/shared/hooks/translations'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { isExternalURL } from '@/features/shared/utils/links'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import {
  AsteriskSourceBlock,
  AsteriskSourceBlockGroup,
} from '@/features/ui/components/Sources/AsteriskSource'
import { AsteriskTooltip } from '@/features/ui/components/tooltip/AsteriskTooltip'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import Asterisk from '@/features/ui/icons/asterisk-thin.svg'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { Fragment } from 'react'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'

import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
} from '@/features/ui/components/Sources/ExternalSource'
import { ExternalSourceTooltip } from '@/features/ui/components/tooltip/ExternalSourceTooltip'
import { useRecordMetaQuery } from '../../hooks/useRecordMetaQuery'
import {
  mapArchivesDataToSections,
  mapObjectDataToSections,
  mapPersonDataToSections,
  mapPublicationDataToSections,
} from '../../mappers/recordMetaDataMapper'
import { recordRightsFieldMapper } from '../../mappers/recordRightsMapper'
import { getExternalSourceTranslation } from '../../utils/enrichedSources'

export const RecordMeta = ({
  data,
  isLoading,
  category,
}: {
  data: ReturnType<typeof useRecordMetaQuery>['data']
  isLoading: ReturnType<typeof useRecordMetaQuery>['isLoading']
  category: Category
}) => {
  const { t: recordMetaPublicationT } = useTypeSafeTranslation('recordMetaPublication')
  const { t: recordMetaArchiveT } = useTypeSafeTranslation('recordMetaArchive')
  const { t: recordMetaObjectT } = useTypeSafeTranslation('recordMetaObject')
  const { t: recordMetaPersonT } = useTypeSafeTranslation('recordMetaPerson')
  const { t } = useLooseTypeSafeTranslation('common')

  let recordMetaSectionData
  if (category === CATEGORIES.archives && data) {
    recordMetaSectionData = mapArchivesDataToSections(
      data as ArchivesRecordZoomLevel3Type,
      recordMetaArchiveT
    )
  }

  if (category === CATEGORIES.publications) {
    recordMetaSectionData = mapPublicationDataToSections(
      data as PublicationRecordZoomLevel3Type,
      recordMetaPublicationT
    )
  }

  if (category === CATEGORIES.objects) {
    recordMetaSectionData = mapObjectDataToSections(
      data as ObjectRecordZoomLevel3Type,
      recordMetaObjectT
    )
  }

  if (category === CATEGORIES.people) {
    recordMetaSectionData = mapPersonDataToSections(
      data as PeopleRecordZoomLevel3Type,
      recordMetaPersonT
    )
  }

  if (isLoading) {
    return <ThemedSpinner />
  }

  if (!recordMetaSectionData) return null

  return (
    <div className="flex flex-row flex-wrap">
      {recordMetaSectionData.map(section => {
        if (!section.value) {
          return null
        }

        if (section.key === 'rights') {
          return (
            <Fragment key={section.key}>
              <MetaField name={section.title}>
                <RightsLogo value={section.value} />
              </MetaField>
            </Fragment>
          )
        }

        return (
          <MetaField
            name={section.title && !section.isLink ? section.title : undefined}
            key={section.key}
          >
            <>
              {section?.value?.map((value, valueIndex) => {
                const isExternal = isExternalURL(value, process.env.parsed.NEXT_PUBLIC_URL ?? '')
                return section.isLink && section.title ? (
                  <NavLinkButton
                    variant={'metaDataText'}
                    key={valueIndex}
                    href={value}
                    title={section.title}
                  >
                    {section.title}
                    {isExternal ? <ExternalLink className="size-[14px]" /> : null}
                  </NavLinkButton>
                ) : (
                  <p key={valueIndex} className={TypographyVariants({ socialLarge: 'md' })}>
                    {value}
                  </p>
                )
              })}
              {'asteriskSuggestions' in section &&
                section.asteriskSuggestions &&
                (section.asteriskSuggestions.length ?? 0) > 0 && (
                  <AsteriskSourceBlockGroup>
                    {section.asteriskSuggestions?.map((v, index) => {
                      return (
                        <AsteriskTooltip
                          key={index}
                          place="left"
                          title={t('asteriskMeta', { date: v.date, author: v.name })}
                        >
                          <AsteriskSourceBlock key={v.date}>{v.subject}</AsteriskSourceBlock>
                        </AsteriskTooltip>
                      )
                    })}
                  </AsteriskSourceBlockGroup>
                )}
              {(section.enrichedSources?.length ?? 0) > 0 && (
                <ExternalSourceBlockGroup className="mt-1">
                  {section.enrichedSources?.map((v, i, array) => {
                    const externalSourceType = v.externalSourceType

                    if (!externalSourceType) {
                      return null
                    }
                    return (
                      <ExternalSourceTooltip
                        place="left"
                        key={`${i}-${array.length}`}
                        title={`${t('pulledFrom')} ${getExternalSourceTranslation(
                          externalSourceType
                        )}`}
                      >
                        <ExternalSourceBlock href={v.externalSourceUrl ?? undefined}>
                          {v.value ?? ''}
                        </ExternalSourceBlock>
                      </ExternalSourceTooltip>
                    )
                  })}
                </ExternalSourceBlockGroup>
              )}
            </>
          </MetaField>
        )
      })}
      {(data?.enrichedSources?.length ?? 0) > 0 && (
        <ExternalSourceBlockGroup>
          {data?.enrichedSources?.map(v => {
            return (
              <ExternalSourceBlock href={v.externalSourceUrl} key={v.id}>
                {getExternalSourceTranslation(v.externalSourceType) ?? ''}
              </ExternalSourceBlock>
            )
          })}

          <ExternalSourceBlock href="/external-sources">
            {t('learnAboutExternalDataSources') ?? ''}
          </ExternalSourceBlock>
        </ExternalSourceBlockGroup>
      )}
      <SuggestionSection />
    </div>
  )
}

const MetaField = ({ name, children }: { name?: string; children: JSX.Element }) => {
  return (
    <div className="relative flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
      <p className={TypographyVariants({ socialLarge: 'md', className: 'font-bold' })}>{name}</p>
      {children}
    </div>
  )
}

function RightsLogo({ value }: { value?: string[] | null; key?: string }) {
  const { t: recordMetaT } = useLooseTypeSafeTranslation('recordMeta')
  const rightsInfo = value && value[0] ? recordRightsFieldMapper(value[0], recordMetaT) : null

  if (!rightsInfo) return null

  const Icon = rightsInfo.icon
  const SectionaryIcon = rightsInfo.secondaryIcon

  return (
    <ReadMoreTooltip description={rightsInfo.description} place="bottom">
      <a
        href={rightsInfo.url}
        target="_blank"
        className="flex flex-nowrap items-center gap-1"
        rel="noreferrer"
      >
        <div className="flex size-7 items-center">
          <Icon />
        </div>
        {SectionaryIcon ? <SectionaryIcon /> : null}
        <p className={TypographyVariants({ socialLarge: 'md', className: 'flex items-center' })}>
          {rightsInfo.text}
        </p>
      </a>
    </ReadMoreTooltip>
  )
}

function SuggestionSection() {
  const { t } = useTypeSafeTranslation('recordMeta')

  const contributeLink = 'https://forms.office.com/e/Y0bXYPicVw'
  const learnMoreLink = '/asterisk'

  return (
    <>
      <MetaField name={t('suggestionTitle')}>
        <div className="flex flex-col gap-1">
          <SuggestionLink external url={contributeLink} text={t('suggestionContributeLink')} />
          <SuggestionLink url={learnMoreLink} text={t('suggestionLearnMoreLink')} />
        </div>
      </MetaField>
    </>
  )

  interface SuggestionLinkProps {
    external?: boolean
    url: string
    text?: string
  }

  function SuggestionLink({ external, url, text }: SuggestionLinkProps) {
    return (
      <NavLinkButton
        variant="metaDataText"
        className="bg-[#DEE5EC] font-semibold text-[#6F7A9C] after:border-none"
        href={url}
        title={text}
        target={external ? '_blank' : undefined}
      >
        <Asterisk />
        {text}
        {external && <ExternalLink className="size-[14px]" />}
      </NavLinkButton>
    )
  }
}
