import { ComponentModulesTextModule } from 'src/generated/graphql'
import { Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesTextModule
}

export const Text: React.FC<Props> = props => {
    return <ChakraText>{props.component.Text}</ChakraText>
}
