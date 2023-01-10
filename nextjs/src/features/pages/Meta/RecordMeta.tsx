import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Link, Box, Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import React from 'react'
import { ZoomLevel5ObjectQuery } from 'src/generated/graphql'
import { Zoom5RecordResult } from '../tasks/zoom5Config'
import NextLink from 'next/link'

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
            {/* TODO: where is this supposed to go */}
            {renderAttribute('metaObject_name', renderTextLink(`/where/to`, attributes.objectName))}
            {renderAttribute('metaObject_materials', renderMaterials(attributes))}
            {renderAttribute('metaObject_techniques', renderTechniques(attributes))}
            {renderAttribute('metaObject_partCount', renderTextValue(attributes.numberOfParts))}
            {renderAttribute('metaObject_dimensions', renderTextValue(getDimensionText(attributes)))}
            {renderAttribute('metaObject_credits', renderTextValue(attributes.creditLine))}
            {renderAttribute('metaObject_rights', renderTextValue(attributes.rightsLabel))}
            {/* TODO: what is this supposed to be */}
            {renderAttribute('metaObject_more', <></>)}
        </Box>
    )

    function renderAttribute(labelKey: TranslationKeys['record'], value: React.ReactNode) {
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
        return attributes?.makers?.map((m, i) =>
            renderTextLinkListItem(`/landingpage/people/${m.id}-people`, i, m.makerLabel)
        )
    }

    function renderMaterials(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        // TODO: where is this supposed to go
        return attributes?.materials?.map((m, i) => renderTextLinkListItem(`/where/to/${m.id}`, i, m.materialLabel))
    }

    function renderTechniques(attributes: ZoomLevel5ObjectQuery['zoomLevel5Object']) {
        // TODO: where is this supposed to go
        return attributes?.techniques?.map((m, i) => renderTextLinkListItem(`/where/to/${m.id}`, i, m.techniqueLabel))
    }

    function renderTextLinkListItem(to: string, key: number, text?: string | null) {
        return (
            <Box marginBottom={1} key={key}>
                {renderTextLink(to, text)}
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
}
