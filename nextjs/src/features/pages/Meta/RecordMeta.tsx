import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { Link, Box, Text, Button } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import React from 'react'
import { ZoomLevel5ObjectQuery } from 'src/generated/graphql'
import { Zoom5RecordResult } from '../tasks/zoom5Config'
import NextLink from 'next/link'
import { getTriplyRecordPathForTypeAndId } from '@/features/shared/utils/links'
import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'

interface Props {
    attributes: Zoom5RecordResult['zoom5detail']
}

export const RecordMeta: React.FC<Props> = ({ attributes }) => {
    const recordT = useTypeSafeTranslation('record')
    const commonT = useTypeSafeTranslation('common')

    if (attributes?.__typename !== 'ObjectsZoomLevel5DetailType') {
        return null
    }

    return (
        <Box>
            {renderAttribute('metaObject_id', renderTextValue(attributes.objectNumber))}
            {renderAttribute('metaObject_archive', renderTextValue(attributes.archiveCollectionCode))}
            {renderAttribute('metaObject_makers', renderMakers(attributes))}
            {renderAttribute('metaObject_dates', renderTimeframe(attributes.startDate, attributes.endDate))}
            {renderAttribute('metaObject_place', renderTextValue(attributes.creationPlace))}
            {renderAttribute('metaObject_name', renderTextValue(attributes.objectNameLabel))}
            {renderAttribute('metaObject_materials', renderMaterials(attributes))}
            {renderAttribute('metaObject_techniques', renderTechniques(attributes))}
            {renderAttribute('metaObject_partCount', renderTextValue(attributes.numberOfParts))}
            {renderAttribute('metaObject_dimensions', renderTextValue(getDimensionText(attributes)))}
            {renderAttribute('metaObject_credits', renderTextValue(attributes.creditLine))}
            {/* TODO: uncomment when ready -- Triply is still working on the returned values */}
            {/* {renderAttribute('metaObject_rights', renderTextValue(attributes.rightsLabel))} */}
            {renderButton(attributes.id, attributes.__typename)}
        </Box>
    )

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

    function getDimensionText(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        const h = attributes?.dimHeight ? `${attributes.dimHeight}${commonT.t('heightAbbr')}` : ''
        const w = attributes?.dimWidth ? `${attributes.dimWidth}${commonT.t('widthAbbr')}` : ''
        const d = attributes?.dimDepth ? `${attributes.dimDepth}${commonT.t('depthAbbr')}` : ''

        const dims = [h, w, d].filter(dim => !!dim).join(' x ')
        if (!dims) {
            return
        }

        return `${dims} ${attributes?.dimensionUnit || ''}`
    }

    function renderMakers(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        if (!attributes?.makers?.length) {
            return null
        }

        return attributes.makers.map((m, i) =>
            renderListItem(i, renderTextLink(`/landingpage/people/${m.id}-people`, m.makerLabel))
        )
    }

    function renderMaterials(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        if (!attributes?.materials?.length) {
            return null
        }

        return attributes.materials.map((m, i) => renderListItem(i, renderTextValue(m.materialLabel)))
    }

    function renderTechniques(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        if (!attributes?.techniques?.length) {
            return null
        }

        return attributes.techniques.map((m, i) => renderListItem(i, renderTextValue(m.techniqueLabel)))
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

    function renderButton(id: string, type: NonNullable<Zoom5RecordResult['zoom5detail']>['__typename']) {
        return (
            <Box marginTop="8">
                <NextLink
                    style={{ width: '100%' }}
                    href={getTriplyRecordPathForTypeAndId(TypeToEntityName[type], id)}
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
                            {recordT.t('metaObject_more')}
                        </Text>
                    </Button>
                </NextLink>
            </Box>
        )
    }
}
