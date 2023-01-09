import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import React from 'react'
import { ZoomLevel5ObjectQuery } from 'src/generated/graphql'
import { Zoom5RecordResult } from '../tasks/zoom5Config'

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
            {/* TODO */}
            {renderAttribute('metaObject_archive', <></>)}
            {renderAttribute('metaObject_makers', <></>)}
            {renderAttribute('metaObject_dates', renderTimeframe(attributes.startDate, attributes.endDate))}
            {renderAttribute('metaObject_place', renderTextValue(attributes.creationPlace))}
            {/* TODO */}
            {renderAttribute('metaObject_name', <></>)}
            {renderAttribute('metaObject_materials', <></>)}
            {renderAttribute('metaObject_techniques', <></>)}
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
}
