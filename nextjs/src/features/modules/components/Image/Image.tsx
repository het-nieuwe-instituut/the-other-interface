import { useTheme, Img, Box, Text } from '@chakra-ui/react'
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
    const theme = useTheme()

    return (
        <Box css={{ backgroundColor: theme.colors.white }} pt="21px" px="24px" pb="50px">
            <Box onClick={onClick} cursor={'pointer'} pb="10px">
                <Img
                    alt={alt_text || ''}
                    src={imagePath}
                    w="full"
                    h={['220px', '220px', '220px', '621px']}
                    objectFit="cover"
                />
            </Box>
            {caption && (
                <Box width={'100'} mb="16px">
                    <Text variant="small">{caption}</Text>
                </Box>
            )}
        </Box>
    )
}

export default MediaImage
