import { Button, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

interface GalaxyButtonProps {
    text: string
}

export const GalaxySearchButton: React.FC<GalaxyButtonProps> = props => {
    return (
        <NextLink style={{ width: '100%' }} href={'www.url.nl'}>
            <Button as={'a'} target={'http://localhost:3000/nl'}>
                <Text as={'span'}> {props.text}</Text>
            </Button>
        </NextLink>
    )
}
