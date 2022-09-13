import { useTheme, Img, Box, Text } from '@chakra-ui/react'


type MediaImageProps = {
    image: string,
    alt?: string,
    caption?: string
    onClick?: () => void
}

const MediaImage = (props: MediaImageProps) => {
    const {onClick, image, alt, caption } = props
    const theme = useTheme()
    
    return (
        <Box css={{'backgroundColor': theme.colors.white}} pt='21px' px='24px'>
            <Box onClick={onClick} cursor={'pointer'} pb='10px'>
                <Img
                    alt={alt || ''}
                    src={image}
                    // width={700}
                    // height={475}
                    // objectFit='cover'
                    w='full'
                    h={['220px', '220px', '621px']}
                />
            </Box>
            {caption && (
                <Box width={'100'}>
                    <Text variant="contentImageCaption">{caption}</Text>
                </Box>
            )}
        </Box>
    )

}

export default MediaImage