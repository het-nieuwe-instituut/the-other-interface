import { keyExtractor } from '@/features/shared/utils/lists'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import { UploadFile } from 'src/generated/graphql'
import { Circle } from '../components/Circle'
import { ZoomLevel5DetailResponses } from './useZoom5DetailQuery'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    zoomLevel5: ZoomLevel5DetailResponses
}

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions, zoomLevel5 }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                style={{ overflow: 'visible' }}
            >
                {renderHighLight()}
            </svg>
        </Box>
    )

    function renderHighLight() {
        if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
            return <RecordCloudHighlight title={zoomLevel5.title ?? undefined} subTitle={'Publications'} />
        }
    }
}

export default RecordClouds

interface RecordCloudHighlightProps {
    image?: UploadFile
    title?: string
    subTitle?: string
}
export const RecordCloudHighlight: React.FunctionComponent<RecordCloudHighlightProps> = ({
    image,
    title,
    subTitle,
}) => {
    return (
        <Circle
            height="500px"
            width="500px"
            defaultBackground={
                'radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(124, 124, 124, 0) 100%)'
            }
            hoverBackground={
                'radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(124, 124, 124, 0) 100%)'
            }
        >
            <Flex
                height={'100%'}
                width={'100%'}
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                zIndex={1}
            >
                <Text textStyle={'cloudTextMicro'} mb={2.5}>
                    {subTitle}
                </Text>
                <Text mb={2.5} textStyle={'cloudTextLarge'} maxWidth="412px" flexWrap={'wrap'} textAlign={'center'}>
                    {title}
                </Text>

                <Flex gap={2.5}>
                    {['test', 'test1'].map((item, index, array) => (
                        <Link key={keyExtractor(item, index, array)}>{item}</Link>
                    ))}
                </Flex>

                {image && <NextImage src={image?.url} width={image?.width ?? 0} height={image?.height ?? 0} />}
            </Flex>
        </Circle>
    )
}
