import React from 'react'
import { Box, Flex, Link, useBreakpoint, useTheme, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ArrowRightIcon from '@/icons/arrows/arrow-right.svg'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { navigationT } from 'locales/locales'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { includesZoomedStatesMainGalaxy } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { useSelector } from 'react-redux'
import { State } from '@/features/shared/configs/store'

type BreadcrumbType = {
    name: string
    additionalName?: string
    link: {
        pathname: string
        query?: {
            preservedZoom: string
        }
    }
}

const getLandingPageBreadcrumb = (t: navigationT, type: string) => {
    const adjustedType = type === 'story' ? 'stories' : type
    const preservedZoom = adjustedType == 'stories' ? ZoomStates.Zoom1Stories : ZoomStates.Zoom2
    const typeToName: Record<string, string> = {
        people: `${t('people')}`,
        publications: `${t('publications')}`,
        objects: `${t('objects')}`,
        archives: `${t('archives')}`,
        stories: `${t('stories')}`,
    }

    return {
        name: `${typeToName[adjustedType]}`,
        link: {
            pathname: `/landingpage/${adjustedType}`,
            query: `preservedZoom=${preservedZoom}&page=1`,
        },
    }
}

const getRecordBreadcrumb = (t: navigationT, type: string, record: string) => {
    const typeToName: Record<string, string> = {
        people: `${t('person')}`,
        publications: `${t('publication')}`,
        objects: `${t('object')}`,
        archives: `${t('archive')}`,
        stories: `${t('story')}`,
    }

    return {
        name: `${typeToName[type]}`,
        link: {
            pathname: `/landingpage/${type}/${record}`,
        },
    }
}

const getStoryRecordBreadcrumb = (t: navigationT, record: string) => {
    return {
        name: `${t('story')}`,
        link: {
            pathname: `${record}`,
        },
    }
}

const getBreadcrumbsFromUrl = (
    asPath: string,
    query: { preservedZoom: ZoomStates },
    t: navigationT
): { items: BreadcrumbType[]; currentZoomLevel: number } => {
    let currentZoomLevel = 0
    const path = asPath.split('?')
    let pathArray = path[0].split('/')
    pathArray = pathArray.filter(item => item !== '')
    const isStory = pathArray[0] === 'story'
    const startIndex = isStory ? -1 : pathArray.findIndex(item => item === 'landingpage')

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

    if ((pathArray[startIndex + 1] && pathArray[startIndex + 2]) || isStory) {
        currentZoomLevel = 3
    }

    const level0 = {
        name: t('zoom0'),
        additionalName: t('theNewInstitute'),
        link: { pathname: '/' },
    }

    const level1 = {
        name: t('zoom1'),
        link: { pathname: '/', query: { preservedZoom: ZoomStates.Zoom1 } },
    }

    const rawItems = [
        level0,
        level1,
        getLandingPageBreadcrumb(t, pathArray[startIndex + 1]),
        isStory
            ? getStoryRecordBreadcrumb(t, pathArray[1])
            : getRecordBreadcrumb(t, pathArray[startIndex + 1], pathArray[startIndex + 2]),
    ]
    // company level and current level are always present, that's why it's +1
    const items = rawItems.slice(0, currentZoomLevel + 1)

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
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'sm'
    const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

    const { items } = getBreadcrumbsFromUrl(router.asPath, router?.query as { preservedZoom: ZoomStates }, t)

    const handleRedirect = (link?: { pathname: string; query?: { preservedZoom: string } }) => {
        if (!link) return
        const isFirstLevels = link.pathname === '/'
        const isTheSameLink = isFirstLevels ? link.pathname === router?.pathname : link?.pathname === router?.asPath
        if (router.query?.preservedZoom === link.query?.preservedZoom && isTheSameLink) {
            router.reload()
            return
        }

        router.push(link, undefined)
    }

    if (isMobile || isMenuOpen) {
        return null
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
                            display={'inherit'}
                            onClick={() => handleRedirect(item.link)}
                        >
                            <Text>{item.name}</Text>
                            {item?.additionalName && <Text ml={4}>{item.additionalName}</Text>}
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
