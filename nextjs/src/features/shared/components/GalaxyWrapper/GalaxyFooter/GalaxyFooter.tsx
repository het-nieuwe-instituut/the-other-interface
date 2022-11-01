import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import ExternalLink from '@/icons/arrows/external-link.svg'
// import OpenSearch from '@/icons/open-search.svg'
import { Box, Flex } from '@chakra-ui/react'
import { GalaxyButton } from '../GalaxyButton/GalaxyButton'

export const GalaxyFooter: React.FC = () => {
    const { t } = useTypeSafeTranslation('common')
    return (
        <Box>
            <Flex flexDirection={'row'} alignItems={'center'}>
                {/* <Box marginRight={'5px'}>
                    <GalaxyButton text={'Search'} leftIcon={renderOpenSearch()} />
                </Box> */}

                <Box marginRight={'5px'}>
                    <GalaxyButton
                        text={t('GoToSearchPortal')}
                        rightIcon={renderExternalLink()}
                        link={t('searchPortalUrl')}
                        target={'_blank'}
                    />
                </Box>
                {/* <Box marginRight={'5px'}>
                    <GalaxyButton text={'Linked data sources'}></GalaxyButton>
                </Box> */}
            </Flex>
        </Box>
    )
    function renderExternalLink() {
        return <ExternalLink />
    }
    // function renderOpenSearch() {
    //     return <OpenSearch />
    // }
}
