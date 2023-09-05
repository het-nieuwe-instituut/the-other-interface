import { Box } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'

import { CategoryCloud } from './types'
import { HOMEPAGE_Z_INDEXES } from './constants'
import { CloudTitle } from './CloudTitle'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { t } = useTypeSafeTranslation('homepage')
  const router = useRouter()

  const { title: category, size, cloudPosition, titlePosition } = cloud

  const handleCloudClick = () => {
    router.push(`/landingpage?category=${category}`)
  }

  return (
    <>
      <Box
        position="absolute"
        w={size}
        h={size}
        backgroundImage="url(images/cloud.svg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        style={{ ...cloudPosition }}
        borderRadius="50%"
        zIndex={HOMEPAGE_Z_INDEXES.CLOUD}
        cursor="pointer"
        _hover={{ transform: 'scale(1.1)' }}
        transition="all .2s ease-in-out"
        onClick={handleCloudClick}
      />
      <CloudTitle position={titlePosition}>{t(category) ?? ''}</CloudTitle>
    </>
  )
}
