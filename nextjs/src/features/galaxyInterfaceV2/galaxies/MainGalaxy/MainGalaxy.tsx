import { Box, Text } from '@chakra-ui/react'

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
        border="1px solid red"
        w="144.4vw"
        h="144.4vw"
        // left="32vw"
        // bottom="34vh"
        left="-1441px"
        top="-307px"
      />

      <Text
        position="absolute"
        left="4.2vw"
        bottom="44vh"
        textStyle="headingTimesLarge.lg"
        color="brownAlpha.100"
      >
        Archives
      </Text>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        border="1px solid red"
        w="135.4vw"
        h="135.4vw"
        // top="44vh"
        // left="13vw"
        top="494px"
        left="248px"
      />
      <Text
        position="absolute"
        right="14vw"
        bottom="27.5vh"
        textStyle="headingTimesLarge.lg"
        color="brownAlpha.100"
      >
        Publications
      </Text>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        border="1px solid red"
        w="84.41vw"
        h="84.41vw"
        // bottom="22vh"
        // right="calc(-100vw / 2 - 5.4vw)"
        top="-421px"
        left="993.92px"
      />
      <Text
        position="absolute"
        right="5.4vw"
        top="12.7vh"
        textStyle="headingTimesLarge.lg"
        color="brownAlpha.100"
      >
        Objects
      </Text>

      <Box
        position="absolute"
        backgroundImage={`url('${cloudSvg}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        border="1px solid red"
        w="62.42vw"
        h="62.42vw"
        // top="23.7vh"
        // right="44vw"
        top="-578px"
        left="166px"
      />
      <Text
        position="absolute"
        left="41vw"
        top="6.4vh"
        textStyle="headingTimesLarge.lg"
        color="brownAlpha.100"
      >
        People
      </Text>
    </Box>
  )
}

export default MainGalaxy
