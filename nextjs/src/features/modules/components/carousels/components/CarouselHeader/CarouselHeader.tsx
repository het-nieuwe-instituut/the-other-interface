
import { Box, Text } from "@chakra-ui/react"

type Props = {
    title: string
    children: JSX.Element | null

}

const CarouselHeader = (props : Props) => {
    const {children, title} = props
    return (
        <Box css={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} mb={'16px'}>
            <Text textStyle={'h1'}>{title}</Text>
            {
                children
            }
        </Box>
    )
}

export default CarouselHeader