'use client'
import {
  useLooseTypeSafeTranslation,
  useTypeSafeTranslation,
} from '@/features/shared/hooks/translations'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { isExternalURL } from '@/features/shared/utils/links'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import { MetaSkeleton } from '@/features/ui/components/Skeletons/MetaSkeleton'
import {
  AsteriskSourceBlock,
  AsteriskSourceBlockGroup,
} from '@/features/ui/components/Sources/AsteriskSource'
import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
  ExternalSourceLink,
} from '@/features/ui/components/Sources/ExternalSource'
import { AsteriskTooltip } from '@/features/ui/components/tooltip/AsteriskTooltip'
import { ExternalSourceTooltip } from '@/features/ui/components/tooltip/ExternalSourceTooltip'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { Fragment, useMemo } from 'react'
import { useZoomLevel3RecordQuery } from '../../hooks/useZoomLevel3RecordQuery'
import {
  mapArchivesDataToSections,
  mapObjectDataToSections,
  mapPersonDataToSections,
  mapPublicationDataToSections,
} from '../../mappers/recordMetaDataMapper'
import { recordRightsFieldMapper } from '../../mappers/recordRightsMapper'
import { getExternalSourceTranslation } from '../../utils/enrichedSources'
import { ExternalSource } from 'src/generated/graphql'
import { useLocale } from '@/features/shared/hooks/useLocale'

export const RecordMeta = ({
  data,
  isLoading,
  category,
}: {
  data: ReturnType<typeof useZoomLevel3RecordQuery>['data']
  isLoading: ReturnType<typeof useZoomLevel3RecordQuery>['isLoading']
  category: Category
}) => {
  const { t: recordMetaPublicationT } = useTypeSafeTranslation('recordMetaPublication')
  const { t: recordMetaArchiveT } = useTypeSafeTranslation('recordMetaArchive')
  const { t: recordMetaObjectT } = useTypeSafeTranslation('recordMetaObject')
  const { t: recordMetaPersonT } = useTypeSafeTranslation('recordMetaPerson')
  const { t } = useLooseTypeSafeTranslation('common')
  const locale = useLocale()

  const recordMetaSectionData = useMemo(() => {
    let recordMetaSectionData
    if (category === CATEGORIES.archives && data?.__typename === 'ArchivesRecordZoomLevel3Type') {
      recordMetaSectionData = mapArchivesDataToSections(data, recordMetaArchiveT)
    }

    if (
      category === CATEGORIES.publications &&
      data?.__typename === 'PublicationRecordZoomLevel3Type'
    ) {
      recordMetaSectionData = mapPublicationDataToSections(data, recordMetaPublicationT)
    }

    if (category === CATEGORIES.objects && data?.__typename === 'ObjectRecordZoomLevel3Type') {
      recordMetaSectionData = mapObjectDataToSections(data, recordMetaObjectT)
    }

    if (category === CATEGORIES.people && data?.__typename === 'PeopleRecordZoomLevel3Type') {
      recordMetaSectionData = mapPersonDataToSections(data, recordMetaPersonT)
    }

    return recordMetaSectionData
  }, [
    category,
    data,
    recordMetaArchiveT,
    recordMetaObjectT,
    recordMetaPersonT,
    recordMetaPublicationT,
  ])
  const externalSources = useMemo(() => {
    if (data && 'externalSource' in data) {
      return data.externalSource
        ?.split(';')
        .map(v => {
          let detectedType: ExternalSource | undefined = undefined

          if (v.includes('rkd.nl')) {
            detectedType = ExternalSource.Rkd
          } else if (v.includes('getty.edu')) {
            detectedType = ExternalSource.Getty
          } else if (v.includes('wikidata.org')) {
            detectedType = ExternalSource.Wikidata
          }

          return {
            externalSourceUrl: v,
            externalSourceType: (detectedType ?? '') as ExternalSource,
          }
        })
        .filter(v => v.externalSourceType && v.externalSourceUrl)
    }
  }, [data])

  if (isLoading) {
    return <MetaSkeleton />
  }

  if (!recordMetaSectionData) return null

  return (
    <div className="flex flex-row flex-wrap">
      {recordMetaSectionData.map(section => {
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
                          title={
                            !v.date || !v.name
                              ? null
                              : t('asteriskMeta', { date: v.date, author: v.name })
                          }
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
                    const externalSourceUrl = v.externalSourceUrl

                    if (!externalSourceType) {
                      return null
                    }
                    return (
                      <ExternalSourceTooltip
                        place="right-start"
                        key={`${i}-${array.length}`}
                        title={
                          externalSourceUrl ? (
                            <div className=" inline-block">
                              {t('pulledFrom')}{' '}
                              <div className="inline-block">
                                <ExternalSourceLink
                                  externalSourceType={externalSourceType}
                                  externalSourceUrl={externalSourceUrl}
                                />
                              </div>
                            </div>
                          ) : (
                            getExternalSourceTranslation(externalSourceType)
                          )
                        }
                      >
                        <ExternalSourceBlock>{v.value ?? ''}</ExternalSourceBlock>
                      </ExternalSourceTooltip>
                    )
                  })}
                </ExternalSourceBlockGroup>
              )}
            </>
          </MetaField>
        )
      })}
      {externalSources && (externalSources.length ?? 0) > 0 && (
        <ExternalSourceBlockGroup className="mb-4">
          {externalSources.map((v, index, array) => {
            const exSource = v.externalSourceType
            if (!exSource) {
              return null
            }
            return (
              <ExternalSourceBlock href={v.externalSourceUrl} key={`${index}-${array.length}`}>
                {getExternalSourceTranslation(exSource) ?? ''}
              </ExternalSourceBlock>
            )
          })}

          <ExternalSourceBlock href={`/externalSources?lang=${locale}`} isExternalLink={false}>
            {t('learnAboutExternalDataSources') ?? ''}
          </ExternalSourceBlock>
        </ExternalSourceBlockGroup>
      )}
      {data && data.__typename !== 'PublicationRecordZoomLevel3Type' && <SuggestionSection />}
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

  const contributeLink = 'https://forms.nieuweinstituut.nl/asterisk-suggestions-form/'
  const learnMoreLink = '/asterisk'

  return (
    <>
      <MetaField name={t('suggestionTitle')}>
        <AsteriskSourceBlockGroup>
          <AsteriskSourceBlock href={contributeLink} target={'_blank'}>
            {t('suggestionContributeLink') ?? ''}
          </AsteriskSourceBlock>
          <AsteriskSourceBlock href={learnMoreLink}>
            {t('suggestionLearnMoreLink') ?? ''}
          </AsteriskSourceBlock>
        </AsteriskSourceBlockGroup>
      </MetaField>
    </>
  )
}
