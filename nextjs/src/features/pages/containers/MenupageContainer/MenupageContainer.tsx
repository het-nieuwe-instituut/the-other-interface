'use client'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'
import { Box, Flex, theme } from '@chakra-ui/react'

import { MenupageBySlugQuery, MenupageComponentsDynamicZone } from 'src/generated/graphql'

interface Props {
  menupage: MenupageBySlugQuery | undefined
}

export const MenupageContainer = (props: Props) => {
  // if (loading) {
  //     return <Loader />
  // }

  // if (error) {
  //     return <p>{error.message}</p>
  // }

  // if (!data?.menupages?.data.length) {
  //     return <p>{t('somethingWentWrong')}</p>
  // }

  return (
    <Box minHeight={'60px'} width={'100%'} px={{ xl: 6, base: 0 }} background={'pinkAlpha.100'}>
      <Box display="block" position={'relative'}>
        <Flex
          maxW={theme.breakpoints.xl}
          marginX={'auto'}
          position="fixed"
          left={0}
          right={0}
          top={0}
          justifyContent={'space-between'}
          zIndex={5}
        >
          <Flex alignItems={'center'} position="relative" zIndex={2} left={8} top={1}></Flex>
          <StaticHeader />
        </Flex>
      </Box>
      <DynamicComponentRenderer
        components={
          props?.menupage?.menupages?.data?.[0]?.attributes
            ?.components as MenupageComponentsDynamicZone[]
        }
      />
    </Box>
  )
}
