import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
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
        <div>
            <DynamicComponentRenderer
                components={props?.menupage?.menupages?.data?.[0]?.attributes?.components as MenupageComponentsDynamicZone[]}
            />
        </div>
    )
}
