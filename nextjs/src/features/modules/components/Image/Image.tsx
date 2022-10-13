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
            <Box maxW={'80rem'}>
                <Box onClick={onClick} cursor={'pointer'} pb="2.5">
                    <Img alt={alt_text || ''} src={imagePath} w="full" maxH={'42.5rem'} />
                </Box>
                {caption && (
                    <Box width={'100'} pb="1">
                        <Text textStyle={'micro'}>{caption}</Text>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default MediaImage
