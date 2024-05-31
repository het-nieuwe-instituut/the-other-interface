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
import { useParams } from 'next/navigation'
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
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'
import { Fragment } from 'react'

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
              {section?.value?.map((value, valueIndex) =>
                section.isLink && section.title ? (
                  <StandaloneLink size={'xsmall'} key={valueIndex} href={value} className="-ml-5">
                    {section.title}
                  </StandaloneLink>
                ) : (
                  <p key={valueIndex} className={TypographyVariants({ social: 'sm' })}>
                    {value}
                  </p>
                )
              )}
            </>
          </MetaField>
        )
      })}
    </div>
  )
}

const MetaField = ({ name, children }: { name?: string; children: JSX.Element }) => {
  return (
    <div className="relative flex w-1/2 flex-col pb-4 pr-4 md:w-1/3 lg:w-full">
      <p className={TypographyVariants({ social: 'sm', className: 'font-bold' })}>{name}</p>
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
      <NavLinkButton variant={'metaData'} href={rightsInfo.url}>
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
      <a href={rightsInfo.url} className="flex gap-1">
        <div className="size-7">
          <Icon />
        </div>
        {SectionaryIcon ? <SectionaryIcon /> : null}
        <p className={TypographyVariants({ social: 'sm' })}>{rightsInfo.text}</p>
      </a>
    </ReadMoreTooltip>
  )
}
