import { SupportedQuerys, ZoomLevel5DetailResponses } from '@/features/pages/tasks/getZoom5RecordTask'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { typeColors } from '@/features/shared/styles/theme/foundations/colors'
import { Box, Flex, Image, keyframes, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'
import { Circle } from '../../components/Circle'
import { Dimensions } from '../../types/galaxy'

interface RecordCloudHighlightProps {
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
    title?: string
    queryType: NonNullable<ZoomLevel5DetailResponses['zoom5detail']>['__typename']
    dimensions: Dimensions
}

const appear = keyframes`
  from {opacity: 0;}
  to {opacity: 1}
`

export const RecordCloudHighlight: React.FunctionComponent<RecordCloudHighlightProps> = ({
    image,
    title,
    dimensions,
    queryType,
}) => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('record')
    const queryParams = router.query as unknown as RecordQueryParams
    const record = queryParams.record
    const type = record.split('-')[1] as SupportedQuerys
    const radius = 500
    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0
    const appearAnimation = `${appear} 2s linear`

    return (
        <Circle
            height={`${radius}px`}
            width={`${radius}px`}
            x={width / 2 - radius / 2}
            y={height / 2 - radius / 2}
            defaultBackground={typeColors[type].hover1}
            hoverBackground={typeColors[type].hover1}
            className={'highlight'}
        >
            <Flex
                height={'100%'}
                width={'100%'}
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                zIndex={1}
                animation={appearAnimation}
            >
                <Text textStyle={'cloudTextMicro'} mb={2.5}>
                    {t(type)}
                </Text>
                <Text textStyle={'cloudTextLarge'} maxWidth="412px" flexWrap={'wrap'} textAlign={'center'}>
                    {title}
                </Text>

                {renderImage()}
            </Flex>
        </Circle>
    )

    function renderImage() {
        if (!image || !image.url) {
            return
        }

        const options = {
            url: 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png',
            height: 100,
            width: 100,
            alt: '',
        }

        if (queryType === 'PoepleZoomLevel5DetailType') {
            return <PersonImage image={options} />
        }

        return <GenericImage image={options} />
    }
}

const PersonImage: React.FC<{
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
}> = ({ image }) => {
    return (
        <Box borderRadius={'100%'} mt={7} height={200} width={200} overflow={'hidden'} background={'black'}>
            <Image height={200} objectFit={'cover'} src={image?.url} alt={image?.alt ?? ''} />
        </Box>
    )
}

const GenericImage: React.FC<{
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
}> = ({ image }) => {
    return (
        <Box width={200} mt={7} overflow={'hidden'} background={'black'}>
            <Image objectFit={'cover'} src={image?.url} alt={image?.alt ?? ''} />
        </Box>
    )
}
