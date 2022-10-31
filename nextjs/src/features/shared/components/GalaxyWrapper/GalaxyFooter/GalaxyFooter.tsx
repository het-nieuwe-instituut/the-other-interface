import ExternalLink from '@/icons/arrows/external-link.svg'
import { Box, Flex } from '@chakra-ui/react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'

export const GalaxyFooter: React.FC = () => {
    return (
        <Box>
            <Flex flexDirection={'row'} alignItems={'center'}>
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
