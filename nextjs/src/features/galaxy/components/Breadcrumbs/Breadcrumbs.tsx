import React from 'react'
import { Box, Flex, Link, useTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ArrowRightIcon from '@/icons/arrows/arrow-right.svg'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { navigationT } from 'locales/locales'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { includesZoomedStatesMainGalaxy } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'

const getLandingPageBreadcrumb = (t: navigationT, type: string) => {
    const adjustedType = type === 'story' ? 'stories' : type
    const preservedZoom = adjustedType == 'stories' ? ZoomStates.Zoom1Stories : ZoomStates.Zoom2
    const typeToName: Record<string, string> = {
        people: `${t('people')}`,
        publications: `${t('publication')}`,
        objects: `${t('object')}`,
        archives: `${t('archive')}`,
        stories: `${t('stories')}`,
    }

    return {
        name: `${typeToName[adjustedType]}`,
        link: {
            pathname: `/landingpage/${adjustedType}`,
            query: `preservedZoom=${preservedZoom}&page=1`
        },
    }
}

const getRecordBreadcrumb = (t: navigationT, type: string, record: string) => {
    const typeToName: Record<string, string> = {
        people: `${t('people')}`,
        publications: `${t('publication')}`,
        objects: `${t('object')}`,
        archives: `${t('archive')}`,
        stories: `${t('stories')}`,
    }

    return {
        name: `${typeToName[type]} ${t('record')}`,
        link: {
            pathname:`/landingpage/${type}/${record}`,
        },
    }
}

const getStoryRecordBreadcrumb = (t: navigationT, record: string) => {
    return {
        name: `${t('story')} ${t('record')}`,
        link: {
            pathname: `${record}`,
        },
    }
}

const getBreadcrumbsFromUrl = (asPath: string, query: { preservedZoom: ZoomStates }, t: navigationT) => {
    let currentZoomLevel = 0
    const path = asPath.split('?')
    let pathArray = path[0].split('/')
    pathArray = pathArray.filter(item => item !== '')
    const isStory = pathArray[0] === 'story'
    const startIndex =  isStory ? -1 : pathArray.findIndex(item => item === 'landingpage') 
    
    
    const { preservedZoom } = query


    if (pathArray.length === 0) {
        currentZoomLevel = 0
    }

    if (includesZoomedStatesMainGalaxy.includes(preservedZoom)) {
       currentZoomLevel = 1
    }

    if (pathArray[startIndex + 1] && !pathArray[startIndex + 2]) {
        currentZoomLevel = 2
    }

    if (pathArray[startIndex + 1] && pathArray[startIndex + 2] || isStory) {
        currentZoomLevel = 3
    }

    const companyLevel = {
        name: t('theNewInstitute'),
        link: { pathname: '/' },
    }

    const level0 = {
        name: t('zoom0'),
        link: { pathname: '/', query: `preservedZoom=${ZoomStates.Zoom0}` },
    }

    const level1 = {
        name: t('zoom1'),
        link: { pathname: '/', query: { preservedZoom:  ZoomStates.Zoom1 } },
    }


    const rawItems = [
        companyLevel,
        level0,
        level1,
        getLandingPageBreadcrumb(t, pathArray[startIndex + 1]),
        isStory ? getStoryRecordBreadcrumb(t, pathArray[1]) : getRecordBreadcrumb(t, pathArray[startIndex + 1], pathArray[startIndex + 2]),
    ]
    // company level and current level are always present, that's why it's +2
    const items = rawItems.slice(0, currentZoomLevel + 2)

    return {
        items,
        currentZoomLevel,
    }
}

export enum BreadcrumbsRenderModes {
    STICKY = 'STICKY',
    DEFAULT = 'DEFAULT',
}

type Props = {
    mode: BreadcrumbsRenderModes
    bg?: string
    onWrapperClick?: () => void
}

const Breadcrumbs = (props: Props) => {
    const router = useRouter()
    const theme = useTheme()
    const { t } = useTypeSafeTranslation('navigation')

    const { items, currentZoomLevel } = getBreadcrumbsFromUrl(
        router.asPath,
        router?.query as { preservedZoom: ZoomStates },
        t
    )

    const handleRedirect = (link?: { pathname: string; query?: { zoomLevel: string } }) => {
        if (!link) return
        const isFirstLevels = link.pathname === '/'
        const shallow = currentZoomLevel === 0 || (currentZoomLevel === 1 && isFirstLevels)
        const isTheSameLink = isFirstLevels ? link.pathname === router?.pathname : link?.pathname === router?.asPath
        if (router.query?.zoomLevel === link.query?.zoomLevel && isTheSameLink) {
            router.reload()
            return
        }

        router.push(link, undefined, { shallow })
    }

    return (
        <Box
            left={0}
            right={0}
            position={'sticky'}
            top="0px"
            height={props?.mode === BreadcrumbsRenderModes.DEFAULT ? '0' : '50px'}
            zIndex={3}
            overflow={props?.mode === BreadcrumbsRenderModes.DEFAULT ? 'visible' : 'hidden'}
            width={'100%'}
            cursor={props?.mode === BreadcrumbsRenderModes.DEFAULT ? 'inherit' : 'pointer'}
            backgroundColor={props.bg ?? 'graph'}
            onClick={props.onWrapperClick ?? undefined}
        >
            <Flex
                alignItems={'center'}
                position="relative"
                left={'32px'}
                top={'15px'}
                zIndex={2}
                marginX={'auto'}
                maxW={theme.breakpoints.xl}
            >
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link
                            mr={index === 0 ? '5' : '2.5'}
                            variant={'decorative'}
                            cursor="pointer"
                            textStyle="small"
                            onClick={() => handleRedirect(item.link)}
                        >
                            {item.name}
                        </Link>
                        {index + 1 !== items.length && index !== 0 && (
                            <Box mr={'2.5'} cursor="pointer">
                                <ArrowRightIcon />
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </Flex>
        </Box>
    )
}

export default Breadcrumbs
