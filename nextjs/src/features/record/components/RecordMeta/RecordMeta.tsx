'use client'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import {
  useLooseTypeSafeTranslation,
  useTypeSafeTranslation,
} from '@/features/shared/hooks/translations'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { isExternalURL } from '@/features/shared/utils/links'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import Asterisk from '@/features/ui/icons/asterisk-thin.svg'
import { useParams } from 'next/navigation'
import { Fragment } from 'react'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { useRecordMeta } from '../../hooks/useRecordMeta'
import {
  mapArchivesDataToSections,
  mapObjectDataToSections,
  mapPersonDataToSections,
  mapPublicationDataToSections,
} from '../../mappers/recordMetaDataMapper'
import { recordRightsFieldMapper } from '../../mappers/recordRightsMapper'

export const RecordMeta: React.FC = () => {
  const { t: recordMetaPublicationT } = useTypeSafeTranslation('recordMetaPublication')
  const { t: recordMetaArchiveT } = useTypeSafeTranslation('recordMetaArchive')
  const { t: recordMetaObjectT } = useTypeSafeTranslation('recordMetaObject')
  const { t: recordMetaPersonT } = useTypeSafeTranslation('recordMetaPerson')

  const params = useParams()
  const id = params?.id as string
  const category = params?.category as Category

  const { data, isLoading } = useRecordMeta(category, id)
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
              <MetaField name={section.title}>
                <RightsLinks value={section.value} />
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
            </>
          </MetaField>
        )
      })}
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

function RightsLinks({ value }: { value?: string[] | null; key?: string }) {
  const { t: recordMetaT } = useLooseTypeSafeTranslation('recordMeta')
  const rightsInfo = value && value[0] ? recordRightsFieldMapper(value[0], recordMetaT) : null

  if (!rightsInfo) return null

  return (
    <ReadMoreTooltip description={rightsInfo.description} place="bottom">
      <NavLinkButton variant={'metaData'} href={rightsInfo.url} title={rightsInfo.text}>
        {rightsInfo.text}
        {isExternalURL(rightsInfo.url, process.env.parsed.NEXT_PUBLIC_URL ?? '') ? (
          <ExternalLink className="size-5" />
        ) : null}
      </NavLinkButton>
    </ReadMoreTooltip>
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
      <a href={rightsInfo.url} className="flex flex-wrap items-center gap-1 ">
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
          <SuggestionLink url={contributeLink} text={t('suggestionContributeLink')} />
          <SuggestionLink url={learnMoreLink} text={t('suggestionLearnMoreLink')} />
        </div>
      </MetaField>
    </>
  )

  function SuggestionLink({ url, text }: { url: string; text?: string }) {
    return (
      <NavLinkButton
        variant="metaDataText"
        className="bg-[#DEE5EC] text-[#6F7A9C] after:border-none hover:bg-[#DEE5EC] hover:text-[#6F7A9C]"
        href={url}
        title={text}
      >
        <Asterisk />
        {text}
        <ExternalLink className="size-[14px]" />
      </NavLinkButton>
    )
  }
}
