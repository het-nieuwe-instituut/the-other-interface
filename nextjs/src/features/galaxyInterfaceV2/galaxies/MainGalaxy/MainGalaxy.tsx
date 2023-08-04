import { Box } from '@chakra-ui/react'

import { CloudTitle, Cloud } from './fragments'

const MainGalaxy: React.FC = () => {
  return (
    <Box position="relative" width="100vw" height="100vh">
      <Cloud
        size="144.4vw"
        position={{
          left: 'calc(-144.4vw + 32vw)',
          bottom: 'calc(-144.4vw / 2 + 34vh)',
        }}
      />
      <CloudTitle position={{ left: '4.2vw', bottom: '42.5vh' }}>Archives</CloudTitle>

      <Cloud
        size="135.4vw"
        position={{
          right: 'calc(-135.4vw / 2 + 13vw)',
          bottom: 'calc(-135.4vw + 44vh)',
        }}
      />
      <CloudTitle position={{ right: '14vw', bottom: '26vh' }}>Publications</CloudTitle>

      <Cloud
        size="84.41vw"
        position={{
          top: 'calc(-84.41vw / 2 + 12.7vh)',
          right: 'calc(-84.41vw + 22vw)',
        }}
      />
      <CloudTitle position={{ right: '5.4vw', top: '22vh' }}>Objects</CloudTitle>

      <Cloud
        size="62.42vw"
        position={{
          top: 'calc(-62.42vw + 23.7vh)',
          left: 'calc(-62.42vw / 2 + 44vw)',
        }}
      />
      <CloudTitle position={{ left: '41vw', top: '6.4vh' }}>People</CloudTitle>
    </Box>
  )
}

export default MainGalaxy
