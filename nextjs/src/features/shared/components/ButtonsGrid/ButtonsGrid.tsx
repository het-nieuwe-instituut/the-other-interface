/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePageConfiguration } from '@/features/shared/hooks/pageConfiguration'
import { isExternalURL } from '@/features/shared/utils/links'
import { keyExtractor } from '@/features/shared/utils/lists'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import Download from '@/icons/arrows/download.svg'
import ExternalLink from '@/icons/arrows/external-link.svg'
import { Button, Flex, Grid, ResponsiveValue, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CSSProperties } from 'react'
import {
    ComponentCoreButton,
    EnumComponentmodulesbuttonsmoduleButtonstyle,
    Maybe,
    UploadFile,
} from 'src/generated/graphql'

type ButtonType = Omit<ComponentCoreButton, 'attachment'> & {
    attachment?: Maybe<{
        data?: Maybe<{ attributes?: Maybe<Partial<UploadFile>> }>
    }>
}
interface Props {
    buttonStyle?: EnumComponentmodulesbuttonsmoduleButtonstyle
    buttons?: (ButtonType | null)[]
    flexDirection: ResponsiveValue<'column' | 'row'> | undefined
    renderBefore?: () => any
    buttonLayoutStyle?: CSSProperties
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

export const ButtonsGrid: React.FC<Props> = props => {
    if (props.buttonStyle === EnumComponentmodulesbuttonsmoduleButtonstyle.Large) {
        return (
            <Grid templateColumns={{ base: '1fr', md: 'auto auto' }} gap={5}>
                {props.renderBefore && props.renderBefore()}
                {renderButtons()}
            </Grid>
        )
    }
    return (
        <Flex flexWrap={'wrap'} flexDirection={props.flexDirection} gap={2}>
            {props.renderBefore && props.renderBefore()}
            {renderButtons()}
        </Flex>
    )

    function renderButtons() {
        return props.buttons?.map((button, index, array) => {
            const config = buttonConfig[props.buttonStyle ?? EnumComponentmodulesbuttonsmoduleButtonstyle.Default]

            if (!button) {
                return null
            }

            if (props.buttonStyle === EnumComponentmodulesbuttonsmoduleButtonstyle.Large) {
                return (
                    <GridButton
                        key={keyExtractor(button, index, array)}
                        button={button}
                        index={index}
                        array={array}
                        config={config}
                    />
                )
            }
            return (
                <Flex key={keyExtractor(button, index, array)}>
                    <GridButton
                        button={button}
                        index={index}
                        array={array}
                        config={config}
                        buttonLayoutStyle={props.buttonLayoutStyle}
                    />
                </Flex>
            )
        })
    }
}

interface GridButtonProps {
    button: ButtonType
    index: number
    array: Maybe<ButtonType>[]
    config: typeof buttonConfig['Default'] | typeof buttonConfig['Large']
    buttonLayoutStyle?: CSSProperties
}
const GridButton: React.FC<GridButtonProps> = ({ button, index, array, config, buttonLayoutStyle }) => {
    const pageConfiguration = usePageConfiguration()

    return (
        <NextLink style={{ width: '100%' }} href={getURl(button)} passHref>
            <Button
                style={buttonLayoutStyle}
                variant={config.variant}
                as={'a'}
                rightIcon={renderExternalLink(button)}
                target={
                    !!button.url && isExternalURL(button.url, pageConfiguration.data?.host ?? '') ? '_blank' : undefined
                }
                gridColumn={{ base: 1, md: getGridColumns(index, array) }}
                bg={'white'}
            >
                <Text as={'span'} textStyle={config.textStyle} color={'currentcolor'} verticalAlign={'text-bottom'}>
                    {button?.text && capitalizeFirstLetter(button.text)}
                </Text>
            </Button>
        </NextLink>
    )

    function renderExternalLink(button?: ButtonType | null) {
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

function getURl(button?: ButtonType | null) {
    if (button?.hasAttachment) {
        return `/api/attachmentProxy?filename=${button?.attachment?.data?.attributes?.url}` ?? '#'
    }

    return button?.url ?? '#'
}
