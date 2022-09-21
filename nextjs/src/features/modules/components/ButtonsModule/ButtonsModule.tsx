/* eslint-disable @typescript-eslint/no-explicit-any */
import { isExternalURL } from '@/features/shared/utils/links'
import { keyExtractor } from '@/features/shared/utils/lists'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import NextLink from 'next/link'
import {
    ComponentCoreButton,
    ComponentModulesButtonsModule,
    EnumComponentmodulesbuttonsmoduleButtonstyle,
} from 'src/generated/graphql'

interface Props {
    component: ComponentModulesButtonsModule
}

const buttonConfig = {
    [EnumComponentmodulesbuttonsmoduleButtonstyle.Large]: {
        variant: 'large',
        textStyle: 'h3',
    },
    [EnumComponentmodulesbuttonsmoduleButtonstyle.Default]: {
        variant: undefined,
        textStyle: undefined,
    },
}

export const ButtonsModule: React.FC<Props> = props => {
    if (props.component.buttonStyle === EnumComponentmodulesbuttonsmoduleButtonstyle.Large) {
        return (
            <Box width="100%" padding={{ base: 5, md: 6 }}>
                <Grid templateColumns={{ base: '1fr', md: 'auto auto' }} gap={5}>
                    {renderButtons()}
                </Grid>
            </Box>
        )
    }
    return (
        <Box width="100%" padding={{ base: 5, md: 6 }}>
            <Flex flexWrap={'wrap'} gap={2}>
                {renderButtons()}
            </Flex>
        </Box>
    )

    function renderButtons() {
        const config = buttonConfig[props.component.buttonStyle ?? EnumComponentmodulesbuttonsmoduleButtonstyle.Default]
        return props.component.buttons?.map((button, index, array) => (
            <NextLink key={keyExtractor(button, index, array)} href={button?.url ?? ''} passHref>
                <Button
                    variant={config.variant}
                    textStyle={config.textStyle}
                    as={'a'}
                    rightIcon={renderExternalLink(button)}
                    gridColumn={{ base: '1fr', md: index === array.length - 1 ? '1 / 3' : undefined }}
                >
                    {button?.text && capitalizeFirstLetter(button.text)}
                </Button>
            </NextLink>
        ))
    }

    function renderExternalLink(button?: ComponentCoreButton | null) {
        if (!button?.url || !isExternalURL(button.url)) {
            return undefined
        }

        return <ExternalLink color={'currentColor'} />
    }
}
