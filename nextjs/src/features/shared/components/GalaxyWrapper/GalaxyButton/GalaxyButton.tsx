import { Button } from '@chakra-ui/react'

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
                padding="10px"
                _hover={{ bg: 'transparent', textDecoration: 'underline' }}
                _active={{ bg: 'transparent' }}
                _focus={{ bg: 'transparent' }}
                rightIcon={props.rightIcon}
                leftIcon={props.leftIcon}
                as={'a'}
                href={props.link}
                target={'_blank'}
                display={'block'}
                textStyle={'galaxyButton'}
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Button
            pointerEvents={'all'}
            border="0px"
            padding="10px"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ bg: 'transparent' }}
            rightIcon={props.rightIcon}
            leftIcon={props.leftIcon}
            textStyle={'galaxyButton'}
        >
            {props.text}
        </Button>
    )
}
