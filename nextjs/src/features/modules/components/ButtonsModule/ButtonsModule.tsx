/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { Box } from '@chakra-ui/react'
import { ComponentModulesButtonsModule } from 'src/generated/graphql'

interface Props {
    component: ComponentModulesButtonsModule
}

export const ButtonsModule: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            px={6}
            backgroundColor={'white'}
            paddingBottom={props.component.buttonsModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.buttonsModuleLayout?.spacingTop ?? undefined}
        >
            <ButtonsGrid
                buttonStyle={props.component.buttonStyle ?? undefined}
                buttons={props.component.buttons ?? []}
                flexDirection={undefined}
            />
        </Box>
    )
}
