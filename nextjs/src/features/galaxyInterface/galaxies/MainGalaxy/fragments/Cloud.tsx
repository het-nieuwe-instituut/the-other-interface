import { Box } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter, useSearchParams } from 'next/navigation'

import { CategoryCloud } from './types'
import { HOMEPAGE_Z_INDEXES } from './constants'
import { CloudTitle } from './CloudTitle'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

interface Props {
  cloud: CategoryCloud
}

export const Cloud: React.FC<Props> = ({ cloud }) => {
  const { t } = useTypeSafeTranslation('homepage')
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const { title: category, size, cloudPosition, titlePosition } = cloud

  const handleCloudClick = () => {
    let url = `/landingpage?category=${category}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

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
        backdropFilter={'blur(1.5px)'}
        cursor="pointer"
        _hover={{ transform: 'scale(1.1)' }}
        transition="all .4s ease-in-out"
        onClick={handleCloudClick}
      />
      <CloudTitle position={titlePosition}>{t(category) ?? ''}</CloudTitle>
    </>
  )
}
