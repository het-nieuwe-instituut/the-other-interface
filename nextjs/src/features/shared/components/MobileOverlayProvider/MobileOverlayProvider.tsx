'use client'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text, Flex, useBreakpoint } from '../../configs/chakra'

import { MOBILE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { StaticHeader } from '../StaticHeader/StaticHeader'

interface Props {
  children: React.ReactNode
}

const MobileOverlayProvider = (props: Props) => {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'sm'

  return (
    <Box overflow={'hidden'}>
      {isMobile && <MobileOverlay />}
      {props.children}
    </Box>
  )
}

const MobileOverlay = () => {
  const { t: tCommon } = useLooseTypeSafeTranslation('common')

  return (
    <Flex
      width={'100%'}
      height={'100vh'}
      position={'fixed'}
      px={{ xl: 6, base: 0 }}
      top={0}
      right={0}
      zIndex={MOBILE_OVERLAY_Z_INDEX}
      overflow={'hidden'}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vh',
        height: '100vh',
        backgroundColor: '#CCCED0',
        filter: 'blur(20px) opacity(0.6)',
        zIndex: `${MOBILE_OVERLAY_Z_INDEX - 1}`,
      }}
    >
      {/* <StaticHeader /> */}
      <Box
        position={'absolute'}
        left={0}
        paddingRight={'40px'}
        alignSelf={'center'}
        right={0}
        marginLeft={5}
        zIndex={MOBILE_OVERLAY_Z_INDEX}
      >
        <Text variant={'body'} mb={5}>
          {tCommon('theNewInstitueDescription')}
        </Text>
        <Text variant={'body'}>{tCommon('mobileVersionIsNotYetThere')}</Text>
      </Box>
    </Flex>
  )
}

export default MobileOverlayProvider
