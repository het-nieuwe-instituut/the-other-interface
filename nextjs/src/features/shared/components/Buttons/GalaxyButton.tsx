import { Button, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import ExternalLink from '@/icons/arrows/external-link.svg'

interface GalaxyButtonProps {
    text: string
}

export const GalaxyButton: React.FC<GalaxyButtonProps> = props => {
    return (
        <NextLink style={{ width: '100%' }} href={'www.url.nl'}>
            <Button as={'a'} rightIcon={renderExternalLink()} target={'http://localhost:3000/nl'}>
                <Text as={'span'}> {props.text}</Text>
            </Button>
        </NextLink>
    )
    function renderExternalLink() {
        return <ExternalLink />
    }
}
