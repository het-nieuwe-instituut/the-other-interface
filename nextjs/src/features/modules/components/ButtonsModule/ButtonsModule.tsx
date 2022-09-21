import { keyExtractor } from '@/features/shared/utils/lists'
import { Box, Button, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ComponentCoreButton, ComponentModulesButtonsModule } from 'src/generated/graphql'
import ExternalLink from '@/icons/arrows/external-link.svg'
import Download from '@/icons/arrows/download.svg'
import { isExternalURL } from '@/features/shared/utils/links'

interface Props {
    component: ComponentModulesButtonsModule
}

export const ButtonsModule: React.FC<Props> = props => {
    return (
        <Box width="100%" padding={{ base: 5, md: 6 }}>
            <Flex gap="2" flexWrap={'wrap'}>
                {renderButtons()}
            </Flex>
        </Box>
    )

    function renderButtons() {
        return props.component.buttons?.map((button, index, array) => (
            <NextLink key={keyExtractor(button, index, array)} href={getURl(button)} passHref>
                <Button as={'a'} rightIcon={renderExternalLink(button)} target="_blank">
                    {button?.text}
                </Button>
            </NextLink>
        ))
    }
}

function getURl(button?: ComponentCoreButton | null) {
    console.log(button?.attachment?.data?.attributes?.url)
    if (button?.hasAttachment && process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL) {
        return process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL + button.attachment?.data?.attributes?.url ?? '#'
    }

    return button?.url ?? '#'
}

function renderExternalLink(button?: ComponentCoreButton | null) {
    if (button && button.hasAttachment) {
        return <Download color={'currentColor'} />
    }

    if (!button?.url || !isExternalURL(button.url)) {
        return undefined
    }

    return <ExternalLink color={'currentColor'} />
}
