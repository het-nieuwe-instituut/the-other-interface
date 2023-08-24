import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'

import { CloudTitle, Cloud, CloudSize, CollectionType, Position, Stories } from './fragments'

interface CollectionCloud {
  title: CollectionType
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}

const collectionClouds: CollectionCloud[] = [
  {
    title: 'archives',
    size: '144.4vw',
    titlePosition: { left: '4.2vw', bottom: '42.5%' },
    cloudPosition: { left: 'calc(-144.4vw + 32vw)', bottom: 'calc(-144.4vw / 2 + 34%)' },
  },
  {
    title: 'publications',
    size: '135.4vw',
    titlePosition: { right: '14vw', bottom: '26%' },
    cloudPosition: { right: 'calc(-135.4vw / 2 + 13vw)', bottom: 'calc(-135.4vw + 44%)' },
  },
  {
    title: 'objects',
    size: '84.41vw',
    titlePosition: { right: '5.4vw', top: '22%' },
    cloudPosition: { top: 'calc(-84.41vw / 2 + 12.7%)', right: 'calc(-84.41vw + 22vw)' },
  },
  {
    title: 'people',
    size: '62.42vw',
    titlePosition: { left: '41vw', top: '6.4%' },
    cloudPosition: { top: 'calc(-62.42vw + 23.7%)', left: 'calc(-62.42vw / 2 + 44vw)' },
  },
]

const MainGalaxy: React.FC = () => {
  const { t } = useTypeSafeTranslation('homepage')
  return (
    <Box position="relative" width="100vw" height="100vh">
      {collectionClouds.map(cloud => (
        <Fragment key={cloud.title}>
          <Cloud size={cloud.size} position={cloud.cloudPosition} />
          <CloudTitle position={cloud.titlePosition}>{t(cloud.title)}</CloudTitle>
        </Fragment>
      ))}

      <Stories />
    </Box>
  )
}

export default MainGalaxy
