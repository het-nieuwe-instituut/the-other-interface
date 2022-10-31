import { Box, Text, useDimensions } from '@chakra-ui/react'
import { createRef } from 'react'
import { ComponentModulesImage, UploadFile } from 'src/generated/graphql'
import { calculateImagePropotions } from '../../helpers/modulesHelpers'
import { imageBasePath } from '../../modulesConstants'
import Image from 'next/image'

interface MediaImageProps {
    component: ComponentModulesImage
    onClick?: () => void
}

const IMAGE_HEIGHT = 680

const MediaImage = (props: MediaImageProps) => {
    const { image, alt_text, caption } = props.component
    const { url } = image?.data?.attributes as UploadFile
    const imageRef = createRef<HTMLDivElement>()
    const dimensions = useDimensions(imageRef, true)
    const originalHeight = image?.data?.attributes?.height ?? 1
    const originalWidth = image?.data?.attributes?.width ?? 1
    const proportions = calculateImagePropotions(originalWidth, originalHeight, IMAGE_HEIGHT, dimensions?.borderBox.width || 1223)
    const imagePath = imageBasePath + url
    const { onClick } = props

    return (
        <Box
            backgroundColor={'white'}
            px={6}
            paddingBottom={props.component.imageModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.imageModuleLayout?.spacingTop ?? undefined}
        >
            <Box maxW={'80rem'} ref={imageRef}>
                <Box onClick={onClick} cursor={'pointer'} pb="2.5">
                    {/* <Img alt={alt_text || ''} src={imagePath} w="full" maxH={'42.5rem'} /> */}
                    <Image
                        src={imagePath}
                        height={proportions.height}
                        width={proportions.width || IMAGE_HEIGHT}
                        layout="fixed"
                        alt={alt_text || ''}
                        loading="eager"
                    />
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
