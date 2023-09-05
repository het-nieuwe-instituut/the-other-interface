import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import Link from 'next/link'

import { CategoryCloud } from './types'
import { HOMEPAGE_Z_INDEXES } from './constants'
import { CloudTitle } from './CloudTitle'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { t } = useTypeSafeTranslation('homepage')

  const { title: category, size, cloudPosition, titlePosition } = cloud

  return (
    <>
      <LinkBox
        position="absolute"
        w={size}
        h={size}
        backgroundImage="url(images/cloud.svg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="50%"
        style={{ ...cloudPosition }}
        zIndex={HOMEPAGE_Z_INDEXES.CLOUD}
        cursor="pointer"
        _hover={{ transform: 'scale(1.1)' }}
        transition="all .2s ease-in-out"
      >
        <Link href={`/landingpage?category=${category}`} passHref>
          <LinkOverlay as={Box} w="100%" h="100%" />
        </Link>
      </LinkBox>
      <CloudTitle position={titlePosition}>{t(category) ?? ''}</CloudTitle>
    </>
  )
}
