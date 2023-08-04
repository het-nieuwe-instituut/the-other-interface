import { Box } from '@chakra-ui/react'

import { Position } from './types'
import { CloudSize } from './CloudTitle'

const CLOUD_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODQ3IiBoZWlnaHQ9IjE4NDciIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjEiIGQ9Ik05MjMuNSAxODQ3YTkyMy41IDkyMy41IDAgMSAwIDAtMTg0NyA5MjMuNSA5MjMuNSAwIDAgMCAwIDE4NDdaIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoOTAgMCA5MjMuNSkgc2NhbGUoOTIzLjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iLjkiIHN0b3AtY29sb3I9IiM0OTI4MEIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4='

interface Props {
  position: Position
  size: CloudSize
}

export const Cloud: React.FC<Props> = ({ position, size }) => (
  <Box
    position="absolute"
    backgroundImage={`url('${CLOUD_IMAGE}')`}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    borderRadius="50%"
    w={size}
    h={size}
    style={{ ...position }}
  />
)
