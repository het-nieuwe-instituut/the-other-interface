import { Button, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import ExternalLink from '@/icons/arrows/external-link.svg'

// interface Props {}

// export const ButtonsGrid: React.FC<Props> = props => {
//     return <Flex gap={2}>{renderButtons()}</Flex>

//     function renderButtons() {
//         return props.buttons?.map((button, index, array) => {
//             const config = buttonConfig[props.buttonStyle ?? EnumComponentmodulesbuttonsmoduleButtonstyle.Default]

//             if (!button) {
//                 return null
//             }

//             return (
//                 <Flex key={keyExtractor(button, index, array)}>
//                     <GalaxyButton button={button} index={index} array={array} config={config} />
//                 </Flex>
//             )
//         })
//     }
// }

interface GalaxyButtonProps {
    text: string
}

export const GalaxyButton: React.FC<GalaxyButtonProps> = props => {
    return (
        <NextLink style={{ width: '100%' }} href={'www.url.nl'}>
            <Button border="0px" as={'a'} rightIcon={renderExternalLink()} target={'http://localhost:3000/nl'}>
                {/* TODO: align font size with design  (16px)*/}
                <Text as={'span'}> {props.text} </Text>
            </Button>
        </NextLink>
    )
    function renderExternalLink() {
        return <ExternalLink />
    }
}
