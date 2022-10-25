import { Button, ButtonProps } from '@chakra-ui/react'

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
    link?: string
    rightIcon?: JSX.Element
    leftIcon?: JSX.Element
}

export const GalaxyButton: React.FC<GalaxyButtonProps> = props => {
    if (props.link) {
        return (
            <Button
                pointerEvents={'all'}
                border="0px"
                _hover={{ bg: 'transparent', textDecoration: 'underline' }}
                _active={{ bg: 'transparent' }}
                _focus={{ bg: 'transparent' }}
                rightIcon={props.rightIcon}
                leftIcon={props.leftIcon}
                as={'a'}
                href={props.link}
                target={'_blank'}
                display={'block'}
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Button
            pointerEvents={'all'}
            border="0px"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ bg: 'transparent' }}
            rightIcon={props.rightIcon}
            leftIcon={props.leftIcon}
        >
            {props.text}
        </Button>
    )
}
