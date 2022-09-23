import { Flex, Text } from "@chakra-ui/react"

type Props = {
    title: string
    children: JSX.Element | null

}

const CarouselHeader = (props : Props) => {
    const {children, title} = props
    return (
        <Flex alignItems='center' justifyContent='space-between' mb={'1'}>
            <Text textStyle={'h1'}>{title}</Text>
            {
                children
            }
        </Flex>
    )
}

export default CarouselHeader