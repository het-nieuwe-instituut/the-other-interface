import { Box, Text } from '@chakra-ui/react'

import { CloudTitle } from './fragments'

const MainGalaxy: React.FC = () => {
  const cloudSvg =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODQ3IiBoZWlnaHQ9IjE4NDciIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjEiIGQ9Ik05MjMuNSAxODQ3YTkyMy41IDkyMy41IDAgMSAwIDAtMTg0NyA5MjMuNSA5MjMuNSAwIDAgMCAwIDE4NDdaIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoOTAgMCA5MjMuNSkgc2NhbGUoOTIzLjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iLjkiIHN0b3AtY29sb3I9IiM0OTI4MEIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=' // Move this line inside the component

  return (
    <Box position="relative" width="100vw" height="100vh">
      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        w="144.4vw"
        h="144.4vw"
        left="calc(-144.4vw + 32vw)"
        bottom="calc(-144.4vw / 2 + 34vh)"
      />

      {/* <Text position="absolute" left="4.2vw" bottom="42.5vh" textStyle="headingTimesLarge.lg">
        Archives
      </Text> */}

      <CloudTitle position={{ left: '4.2vw', bottom: '42.5vh' }}>Archives</CloudTitle>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        w="135.4vw"
        h="135.4vw"
        right="calc(-135.4vw / 2 + 13vw)"
        bottom="calc(-135.4vw + 44vh)"
      />

      <CloudTitle position={{ right: '14vw', bottom: '26vh' }}>Publications</CloudTitle>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        w="84.41vw"
        h="84.41vw"
        top="calc(-84.41vw / 2 + 12.7vh)"
        right="calc(-84.41vw + 22vw)"
      />

      <CloudTitle position={{ right: '5.4vw', top: '22vh' }}>Objects</CloudTitle>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        w="62.42vw"
        h="62.42vw"
        top="calc(-62.42vw + 23.7vh)"
        left="calc(-62.42vw / 2 + 44vw)"
      />

      <CloudTitle position={{ left: '41vw', top: '6.4vh' }}>People</CloudTitle>
    </Box>
  )
}

export default MainGalaxy
