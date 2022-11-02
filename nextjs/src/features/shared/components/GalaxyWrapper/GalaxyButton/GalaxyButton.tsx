import { Button } from '@chakra-ui/react'

interface GalaxyButtonProps {
    text: string
    link?: string
    rightIcon?: JSX.Element
    leftIcon?: JSX.Element
    size?: string
    target?: string
    disabled?: boolean
    onClick?: () => Promise<boolean>;
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
                target={props.target || undefined}
                display={'flex'}
                textStyle={'galaxyButton'}
                size={props.size || 'md'}
                disabled={props.disabled}
                onClick={props.onClick ?? undefined}
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Button
            pointerEvents={'all'}
            border="0px"
            onClick={props.onClick ?? undefined}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ bg: 'transparent' }}
            rightIcon={props.rightIcon}
            leftIcon={props.leftIcon}
            textStyle={'galaxyButton'}
            display={'flex'}
            size={props.size || 'md'}
            disabled={props.disabled}
        >
            {props.text}
        </Button>
    )
}
