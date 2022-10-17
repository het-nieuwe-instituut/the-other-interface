import { keyExtractor } from '@/features/shared/utils/lists'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Circle } from '../components/Circle'

type Props = {
    dimensions: {
        height: number
        width: number
    }
}

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions }) => {
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
                <RecordCloudHighlight></RecordCloudHighlight>
            </svg>
        </Box>
    )
}

export default RecordClouds

export const RecordCloudHighlight: React.FunctionComponent = () => {
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
                    Publication
                </Text>
                <Text mb={2.5} textStyle={'cloudTextLarge'} maxWidth="412px" flexWrap={'wrap'} textAlign={'center'}>
                    Nederlandsche glasschilders
                </Text>

                <Flex gap={2.5}>
                    {['test', 'test1'].map((item, index, array) => (
                        <Link key={keyExtractor(item, index, array)}>{item}</Link>
                    ))}
                </Flex>
            </Flex>
        </Circle>
    )
}
