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
            backgroundColor={'white'}
            px={6}
            paddingBottom={props.component.imageModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.imageModuleLayout?.spacingTop ?? undefined}
        >
            <Box onClick={onClick} cursor={'pointer'} pb="3">
                <Img alt={alt_text || ''} src={imagePath} w="full" />
            </Box>
            {caption && (
                <Box width={'100'} pb="1">
                    <Text variant="micro">{caption}</Text>
                </Box>
            )}
        </Box>
    )
}

export default MediaImage
