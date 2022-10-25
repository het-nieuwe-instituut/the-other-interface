import ExternalLink from '@/icons/arrows/external-link.svg'
import { Box, Flex } from '@chakra-ui/react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'

interface Props {}

export const GalaxyFooter: React.FC<Props> = props => {
    return (
        <Box backgroundColor={'red'}>
            <Flex flexDirection={'row'} alignItems={'center'}>
                <Box marginRight={'5px'}>
                    <GalaxyButton text={'Search'} leftIcon={renderExternalLink()} />
                </Box>
                <Box marginRight={'5px'}>
                    <GalaxyButton leftIcon={renderExternalLink()} text={'Linked data sources'} />
                </Box>
                <Box marginRight={'5px'}>
                    <GalaxyButton
                        link={'https://zoeken.hetnieuweinstituut.nl/nl/'}
                        text={'Go to Searchportal'}
                        rightIcon={renderExternalLink()}
                    />
                </Box>
            </Flex>
        </Box>
    )
    function renderExternalLink() {
        return <ExternalLink />
    }
}
