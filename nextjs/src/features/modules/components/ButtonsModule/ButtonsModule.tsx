/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonsGrid } from '@/features/shared/components/ButtonsGrid/ButtonsGrid'
import { Box } from '@chakra-ui/react'

import { ComponentModulesButtonsModule } from 'src/generated/graphql'
import { modulesSpacingMapper } from '../../modulesSpacing'

interface Props {
  component: ComponentModulesButtonsModule
}

export const ButtonsModule: React.FC<Props> = props => {
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.ButtonsModule.spacingTop}
      pb={modulesSpacingMapper?.ButtonsModule.spacingBottom}
    >
      <ButtonsGrid
        buttonStyle={props.component.buttonStyle ?? undefined}
        buttons={props.component.buttons ?? []}
        flexDirection={undefined}
      />
    </Box>
  )
}
