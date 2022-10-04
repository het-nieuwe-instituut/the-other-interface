/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePageConfiguration } from '@/features/shared/hooks/pageConfiguration'
import colors from '@/features/shared/styles/theme/foundations/colors'
import { isExternalURL } from '@/features/shared/utils/links'
import { keyExtractor } from '@/features/shared/utils/lists'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import Download from '@/icons/arrows/download.svg'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
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
    const pageConfiguration = usePageConfiguration()

    if (props.component.buttonStyle === EnumComponentmodulesbuttonsmoduleButtonstyle.Large) {
        return (
            <Box
                backgroundColor={colors.white}
                width="100%"
                px={6}
                paddingBottom={props.component.buttonsModuleLayout?.spacingBottom ?? undefined}
                paddingTop={props.component.buttonsModuleLayout?.spacingTop ?? undefined}
            >
                <Grid templateColumns={{ base: '1fr', md: 'auto auto' }} gap={5}>
                    {renderButtons()}
                </Grid>
            </Box>
        )
    }
    return (
        <Box
            backgroundColor={colors.white}
            width="100%"
            px={6}
            paddingBottom={props.component.buttonsModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.buttonsModuleLayout?.spacingTop ?? undefined}
        >
            <Flex flexWrap={'wrap'} gap={2}>
                {renderButtons()}
            </Flex>
        </Box>
    )

    function renderButtons() {
        return props.component.buttons?.map((button, index, array) => {
            const config =
                buttonConfig[props.component.buttonStyle ?? EnumComponentmodulesbuttonsmoduleButtonstyle.Default]

            if (!button) {
                return null
            }
            return (
                <NextLink key={keyExtractor(button, index, array)} href={getURl(button)} passHref>
                    <Button
                        variant={config.variant}
                        as={'a'}
                        rightIcon={renderExternalLink(button)}
                        target={
                            !!button.url && isExternalURL(button.url, pageConfiguration.data?.host ?? '')
                                ? '_blank'
                                : undefined
                        }
                        gridColumn={{ base: '1fr', md: getGridColumns(index, array) }}
                        bg={'white'}
                    >
                        <Text
                            as={'span'}
                            textStyle={config.textStyle}
                            color={'currentcolor'}
                            verticalAlign={'text-bottom'}
                        >
                            {button?.text && capitalizeFirstLetter(button.text)}
                        </Text>
                    </Button>
                </NextLink>
            )
        })
    }

    function renderExternalLink(button?: ComponentCoreButton | null) {
        if (button && button.hasAttachment) {
            return <Download />
        }

        if (!button?.url || !isExternalURL(button.url, pageConfiguration.data?.host ?? '')) {
            return undefined
        }

        return <ExternalLink />
    }
}

function getGridColumns<I extends number, T extends Array<T[0]>>(index: I, array: T) {
    if (array.length % 2) {
        return index === array.length - 1 ? '1 / 3' : undefined
    }

    return '1fr'
}

function getURl(button?: ComponentCoreButton | null) {
    if (button?.hasAttachment) {
        return `/api/attachmentProxy?filename=${button.attachment?.data?.attributes?.url}` ?? '#'
    }

    return button?.url ?? '#'
}
