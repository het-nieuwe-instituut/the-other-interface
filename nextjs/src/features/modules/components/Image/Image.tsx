import colors from '@/features/shared/styles/theme/foundations/colors'
import { Box, Img, Text } from '@chakra-ui/react'
import { ComponentModulesImage, UploadFile } from 'src/generated/graphql'
import { imageBasePath } from '../../modulesConstants'

interface MediaImageProps {
    component: ComponentModulesImage
    onClick?: () => void
}

const MediaImage = (props: MediaImageProps) => {
    const { image, alt_text, caption } = props.component
    const { url } = image?.data?.attributes as UploadFile
    const imagePath = imageBasePath + url
    const { onClick } = props

    return (
        <Box
            backgroundColor={colors.white}
            px={6}
            paddingBottom={props.component.imageModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.imageModuleLayout?.spacingTop ?? undefined}
        >
            <Box onClick={onClick} cursor={'pointer'} pb="10px">
                <Img alt={alt_text || ''} src={imagePath} w="full" backgroundColor={'red'} />
            </Box>
            {caption && (
                <Box width={'100'} mb="16px">
                    <Text variant="micro">{caption}</Text>
                </Box>
            )}
        </Box>
    )
}

export default MediaImage
