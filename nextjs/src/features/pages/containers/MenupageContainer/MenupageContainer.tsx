import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'
import { Box, theme } from '@chakra-ui/react'
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
        <Box
            minHeight={'33px'}
            width={'100%'}
            px={{ xl: 6, base: 0 }}
            background={theme.colors.white}
            // zIndex={MAX_Z_INDEX}
        >
            <StaticHeader />
            <DynamicComponentRenderer
                components={
                    props?.menupage?.menupages?.data?.[0]?.attributes?.components as MenupageComponentsDynamicZone[]
                }
            />
        </Box>
    )
}
