import { Box } from '@chakra-ui/react'

import { CategoryCloud } from '../types'
import { HOMEPAGE_Z_INDEXES } from '../constants'
import { CloudTitle } from '../CloudTitle'

import { usePresenter } from './usePresenter'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { category, size, cloudPosition, titlePosition, handleCloudClick, setEnabled, t } =
    usePresenter(cloud)

  return (
    <>
      <Box
        position="absolute"
        w={size}
        h={size}
        backgroundImage="url(/images/cloud.svg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        style={{ ...cloudPosition }}
        borderRadius="50%"
        zIndex={HOMEPAGE_Z_INDEXES.CLOUD}
        cursor="pointer"
        _hover={{ transform: 'scale(1.1)' }}
        transition="all .4s ease-in-out"
        onClick={handleCloudClick}
        onMouseEnter={() => setEnabled(true)}
      />
      <CloudTitle position={titlePosition}>{t(category) ?? ''}</CloudTitle>
    </>
  )
}
