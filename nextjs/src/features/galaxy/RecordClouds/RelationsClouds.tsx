import { keyExtractor } from '@/features/shared/utils/lists'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import { ObjectRelationsQuery, UploadFile } from 'src/generated/graphql'
import { Circle } from '../components/Circle'
import { ZoomLevel5DetailResponses } from './useZoom5DetailQuery'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    zoomLevel5: ZoomLevel5DetailResponses
    relations: ObjectRelationsQuery['relations']
}

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions, zoomLevel5, relations }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            {relations?.map(relation => {
                return (
                    <Box key={relation.type}>
                        <Text>{relation.type}</Text>
                        {relation.randomRelations?.map(randomRelation => (
                            <Box key={relation.type}>
                                <Text pl={4}>{randomRelation.label}</Text>
                                {randomRelation.relations?.map(relation => (
                                    <Text pl={8} key={relation.type}>
                                        {relation.type}
                                    </Text>
                                ))}
                            </Box>
                        ))}
                    </Box>
                )
            })}
        </Box>
    )
}
