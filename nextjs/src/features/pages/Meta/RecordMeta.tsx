import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { getTriplyRecordPathForTypeAndId } from '@/features/shared/utils/links'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { Link, Box, Text, Button } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import NextLink from 'next/link'
import React from 'react'

import {
  EntityNames,
  ZoomLevel5ArchivesQuery,
  ZoomLevel5ObjectQuery,
  ZoomLevel5PersonQuery,
  ZoomLevel5PublicationQuery,
} from 'src/generated/graphql'

import { Zoom5RecordResult } from '../tasks/zoom5Config'

interface Props {
  attributes: Zoom5RecordResult['zoom5detail']
}

export const RecordMeta: React.FC<Props> = ({ attributes }) => {
  const recordT = useTypeSafeTranslation('record')
  const commonT = useTypeSafeTranslation('common')

  if (!attributes?.id) {
    return null
  }

  return (
    <Box>
      {renderTypeSpecificFields()}
      {renderButton(attributes.id, attributes.__typename)}
    </Box>
  )

  function renderTypeSpecificFields() {
    switch (attributes?.__typename) {
      case 'ObjectsZoomLevel5DetailType':
        return renderObjectMeta(attributes)
      case 'PoepleZoomLevel5DetailType':
        return renderPersonMeta(attributes)
      case 'ArchivesFondsZoomLevel5DetailType':
      case 'ArchivesOtherZoomLevel5DetailType':
        return renderArchiveMeta(attributes)
      case 'PublicationsArticleZoomLevel5DetailType':
      case 'PublicationsAudioVisualZoomLevel5DetailType':
      case 'PublicationsBookZoomLevel5DetailType':
      case 'PublicationsSerialZoomLevel5DetailType':
        return renderPublicationMeta(attributes)
      default:
        return null
    }
  }

  function renderObjectMeta(attributes: NonNullable<ZoomLevel5ObjectQuery['zoomLevel5Object']>) {
    return (
      <>
        {renderAttribute('metaObject_id', renderTextValue(attributes.objectNumber))}
        {renderAttribute('metaObject_archive', renderTextValue(attributes.archiveCollectionCode))}
        {renderAttribute('metaObject_makers', renderMakers(attributes.makers))}
        {renderAttribute(
          'metaObject_dates',
          renderTimeframe(attributes.startDate, attributes.endDate)
        )}
        {renderAttribute('metaObject_place', renderTextValue(attributes.creationPlace))}
        {renderAttribute('metaObject_name', renderTextValue(attributes.objectNameLabel))}
        {renderAttribute('metaObject_materials', renderMaterials(attributes.materials))}
        {renderAttribute('metaObject_techniques', renderTechniques(attributes.techniques))}
        {renderAttribute('metaObject_partCount', renderTextValue(attributes.numberOfParts))}
        {renderAttribute('metaObject_dimensions', renderTextValue(getDimensionText(attributes)))}
        {renderAttribute('metaObject_credits', renderTextValue(attributes.creditLine))}
        {/* TODO: uncomment when ready -- Triply is still working on the returned values */}
        {/* {renderAttribute('metaObject_rights', renderTextValue(attributes.rightsLabel))} */}
      </>
    )
  }

  function renderPersonMeta(attributes: NonNullable<ZoomLevel5PersonQuery['zoomLevel5Person']>) {
    return (
      <>
        {renderAttribute('metaPerson_occupation', renderTextValue(attributes.professionLabel))}
        {renderAttribute('metaPerson_nameType', renderPersonNameTypes(attributes.nameTypes))}
        {renderAttribute('metaPerson_gender', renderTextValue(attributes.gender))}
        {renderAttribute('metaPerson_born', renderTextValue(getBirthText(attributes)))}
        {renderAttribute('metaPerson_died', renderTextValue(getDeathText(attributes)))}
        {renderAttribute(
          'metaPerson_period',
          renderTimeframe(attributes.startDate, attributes.endDate)
        )}
        {renderAttribute('metaPerson_nationality', renderTextValue(attributes.nationalityLabel))}
        {renderAttribute('metaPerson_place', renderTextValue(attributes.placeLabel))}
        {renderAttribute('metaPerson_institution', renderTextValue(attributes.institutionLabel))}
        {renderAttribute(
          'metaPerson_associations',
          renderPersonAssociations(attributes.associations)
        )}
      </>
    )
  }

  function renderArchiveMeta(
    attributes: NonNullable<ZoomLevel5ArchivesQuery['zoomLevel5Archive']>
  ) {
    return (
      <>
        {renderAttribute('metaArchive_archiveId', renderTextValue(attributes.objectNumber))}
        {renderAttribute('metaArchive_creators', renderArchiveCreators(attributes))}
        {renderAttribute(
          'metaArchive_period',
          renderTimeframe(attributes.startDate, attributes.endDate)
        )}
        {'extent' in attributes &&
          renderAttribute('metaArchive_extent', renderTextValue(attributes.extent))}
        {'repositoryLabel' in attributes &&
          renderAttribute('metaArchive_repository', renderTextValue(attributes.repositoryLabel))}
        {'conditionsGoverningAccess' in attributes &&
          renderAttribute(
            'metaArchive_conditionsGoverningAccess',
            renderTextValue(attributes.conditionsGoverningAccess)
          )}
        {/* TODO: uncomment when ready -- Triply is still working on the returned values */}
        {/* {renderAttribute('metaArchive_rights', renderTextValue(attributes.rightsLabel))} */}
      </>
    )
  }

  function renderPublicationMeta(
    attributes: NonNullable<ZoomLevel5PublicationQuery['zoomLevel5Publication']>
  ) {
    return (
      <>
        {'isbn' in attributes &&
          renderAttribute('metaPublication_isbn', renderTextValue(attributes.isbn))}
        {renderAttribute('metaPublication_authors', renderPublicationAuthors(attributes))}
        {renderAttribute(
          'metaPublication_type',
          renderTextValue(attributes.typeOfPublicationLabel)
        )}
        {renderAttribute('metaPublication_publisher', renderTextValue(attributes.publisherLabel))}
        {renderAttribute('metaPublication_year', renderTextValue(attributes.yearOfPublication))}
        {'placeOfPublicationLabel' in attributes &&
          renderAttribute(
            'metaPublication_place',
            renderTextValue(attributes.placeOfPublicationLabel)
          )}
        {'geographicalKeywordLabel' in attributes &&
          renderAttribute(
            'metaPublication_place',
            renderTextValue(attributes.geographicalKeywordLabel)
          )}
      </>
    )
  }

  function renderAttribute(labelKey: TranslationKeys['record'], value: React.ReactNode) {
    if (!value) {
      return null
    }

    return (
      <Box marginBottom="md">
        <Text textStyle="h5" mb={1}>
          {recordT.t(labelKey)}
        </Text>
        {value}
      </Box>
    )
  }

  function renderTextValue(value?: string | null) {
    if (!value) {
      return null
    }

    return (
      <Text textStyle="micro" mb={1}>
        {value}
      </Text>
    )
  }

  function renderTimeframe(startDate?: string | null, endDate?: string | null) {
    return renderTextValue([startDate, endDate].filter(item => !!item).join('-'))
  }

  function getDimensionText(attributes: NonNullable<ZoomLevel5ObjectQuery['zoomLevel5Object']>) {
    const h = attributes.dimHeight ? `${attributes.dimHeight}${commonT.t('heightAbbr')}` : ''
    const w = attributes.dimWidth ? `${attributes.dimWidth}${commonT.t('widthAbbr')}` : ''
    const d = attributes.dimDepth ? `${attributes.dimDepth}${commonT.t('depthAbbr')}` : ''

    const dims = [h, w, d].filter(dim => !!dim).join(' x ')
    if (!dims) {
      return
    }

    return `${dims} ${attributes.dimensionUnit || ''}`
  }

  function renderMakers(makers: NonNullable<ZoomLevel5ObjectQuery['zoomLevel5Object']>['makers']) {
    if (!makers?.length) {
      return null
    }

    return makers.map((m, i) =>
      renderListItem(i, renderTextLink(`/landingpage/people/${m.id}-people`, m.makerLabel))
    )
  }

  function renderMaterials(
    materials: NonNullable<ZoomLevel5ObjectQuery['zoomLevel5Object']>['materials']
  ) {
    if (!materials?.length) {
      return null
    }

    return materials.map((m, i) => renderListItem(i, renderTextValue(m.materialLabel)))
  }

  function renderTechniques(
    techniques: NonNullable<ZoomLevel5ObjectQuery['zoomLevel5Object']>['techniques']
  ) {
    if (!techniques?.length) {
      return null
    }

    return techniques.map((m, i) => renderListItem(i, renderTextValue(m.techniqueLabel)))
  }

  function renderListItem(key: number, value: React.ReactNode) {
    return (
      <Box marginBottom={1} key={key}>
        {value}
      </Box>
    )
  }

  function renderTextLink(to: string, text?: string | null) {
    return (
      <Text textStyle="micro">
        <NextLink href={to} passHref>
          <Link>{text}</Link>
        </NextLink>
      </Text>
    )
  }

  function renderButton(
    id: string,
    type: NonNullable<Zoom5RecordResult['zoom5detail']>['__typename']
  ) {
    const entityName = getEntityNameForType(type)
    if (!entityName) {
      return null
    }

    return (
      <Box marginTop="8">
        <NextLink
          style={{ width: '100%' }}
          href={getTriplyRecordPathForTypeAndId(entityName, id)}
          passHref
        >
          <Button
            style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
            as="a"
            rightIcon={<ExternalLink />}
            target="_blank"
            bg="white"
          >
            <Text as="span" color="currentcolor" verticalAlign="text-bottom">
              {recordT.t('meta_more')}
            </Text>
          </Button>
        </NextLink>
      </Box>
    )
  }

  function getBirthText(attributes: NonNullable<ZoomLevel5PersonQuery['zoomLevel5Person']>) {
    if (!attributes.birthDate || !attributes.birthPlaceLabel) {
      return null
    }

    return [attributes.birthPlaceLabel, attributes.birthDate].filter(a => !!a).join(', ')
  }

  function getDeathText(attributes: NonNullable<ZoomLevel5PersonQuery['zoomLevel5Person']>) {
    if (!attributes.deathDate || !attributes.deathPlaceLabel) {
      return null
    }

    return [attributes.deathPlaceLabel, attributes.deathDate].filter(a => !!a).join(', ')
  }

  function renderPersonNameTypes(
    nameTypes: NonNullable<ZoomLevel5PersonQuery['zoomLevel5Person']>['nameTypes']
  ) {
    if (!nameTypes?.length) {
      return null
    }

    return nameTypes.map((n, i) => renderListItem(i, renderTextValue(n)))
  }

  function renderPersonAssociations(
    associations: NonNullable<ZoomLevel5PersonQuery['zoomLevel5Person']>['associations']
  ) {
    if (!associations?.length) {
      return null
    }

    return associations.map((n, i) => renderListItem(i, renderTextValue(n.associationLabel)))
  }

  function renderArchiveCreators(
    attributes: NonNullable<ZoomLevel5ArchivesQuery['zoomLevel5Archive']>
  ) {
    if (!('creators' in attributes) || !attributes.creators?.length) {
      return null
    }

    return attributes.creators.map((c, i) =>
      renderListItem(i, renderTextLink(`/landingpage/people/${c.id}-people`, c.creatorLabel))
    )
  }

  function renderPublicationAuthors(
    attributes: NonNullable<ZoomLevel5PublicationQuery['zoomLevel5Publication']>
  ) {
    if (!('authors' in attributes) || !attributes.authors?.length) {
      return null
    }

    return attributes.authors.map((a, i) =>
      renderListItem(i, renderTextLink(`/landingpage/people/${a.id}-people`, a.authorLabel))
    )
  }

  function getEntityNameForType(type: NonNullable<Zoom5RecordResult['zoom5detail']>['__typename']) {
    switch (type) {
      case 'ObjectsZoomLevel5DetailType':
        return EntityNames.Objects
      case 'PoepleZoomLevel5DetailType':
        return EntityNames.People
      case 'ArchivesFondsZoomLevel5DetailType':
      case 'ArchivesOtherZoomLevel5DetailType':
        return EntityNames.Archives
      case 'PublicationsArticleZoomLevel5DetailType':
      case 'PublicationsAudioVisualZoomLevel5DetailType':
      case 'PublicationsBookZoomLevel5DetailType':
      case 'PublicationsSerialZoomLevel5DetailType':
        return EntityNames.Publications
      default:
        return null
    }
  }
}
