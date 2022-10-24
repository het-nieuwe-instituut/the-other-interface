import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ZoomLevel } from '../../types/galaxy'
import ArrowRightIcon from '@/icons/arrows/arrow-right.svg'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { navigationT } from 'locales/locales'

const getLevel2 = (t: navigationT, type: string) => {
    const typeToName: Record<string, string> = {
        people: `${t('people')} filters`,
        publications: `${t('publication')} filters`,
        objects: `${t('object')} filters`,
        archives: `${t('archive')} filters`,
        stories: `${t('stories')}`
    }

    return {
        name: `${typeToName[type]}`,
        link : {
            pathname: `/landingpage/${type}`
        }
    }
}

const getLevel3 = (t: navigationT, type: string, filter: string) => {
    return {
        name: t('selectedFilter'),
        link: {
            pathname: `/landingpage/${type}/${filter}`
        }
    }
}

const getLevel4 = (t: navigationT, type: string, filter: string, filterType: string) => {
    const typeToName: Record<string, string> = {
        people: `${t('people')}`,
        publications: `${t('publications')}`,
        objects: `${t('objects')}`,
        archives: `${t('archives')}`,
        stories: `${t('stories')}`
    }

    return {
        name: `${typeToName[type]}`,
        link : {
            pathname: `/landingpage/${type}/${filter}/${filterType}`
        }
    }
}

const getLevel5 = (t: navigationT, type: string) => {
    const typeToName: Record<string, string> = {
        people: `${t('people')} filters`,
        publications: `${t('publication')} filters`,
        objects: `${t('object')} filters`,
        archives: `${t('archive')} filters`,
        stories: `${t('stories')}`
    }

    return {
        name: `${typeToName[type]} record`,
        link : {
            pathname: `/story/${type}`
        }
    }
}

const getBreadcrumbsFromUrl = (asPath: string, query:  { zoomLevel: ZoomLevel}, t: navigationT) => {
    let currentZoomLevel = 0
    let pathArray = asPath.split('/')
    pathArray = pathArray.filter(item => item !== '')
    const startLandingIndex = pathArray.findIndex(item => item === 'landingpage')
    const startStoryIndex = pathArray.findIndex(item => item === 'story')
    const { zoomLevel } = query 
    if (zoomLevel) {
        currentZoomLevel = zoomLevel === ZoomLevel.Zoom1 ? 1 : 0
    }

    const level0 = {
        name: t('zoom0'),
        link: {pathname: '/'}
    }

    const level1 = {
        name: t('zoom1'),
        link: {pathname: '/',  query: { zoomLevel: ZoomLevel.Zoom1 }}
    }


    if (pathArray.includes('landingpage')) {
        currentZoomLevel = pathArray.length - startLandingIndex
    }

    if (pathArray.includes('story')) {
        currentZoomLevel = 5
    }

    const rawItems = [level0, level1, getLevel2(t, pathArray[startLandingIndex + 1]), getLevel3(t, pathArray[startLandingIndex + 1], pathArray[startLandingIndex + 2]), getLevel4(t, pathArray[startLandingIndex + 1], pathArray[startLandingIndex + 2], pathArray[startLandingIndex + 3]), getLevel5(t, pathArray[startStoryIndex + 1])]
    const items = rawItems.slice(0, currentZoomLevel + 1)
    return {
        items, 
        currentZoomLevel
    }
    
}

const Breadcrumbs = () => {
    const router = useRouter()
    const  { t }  = useTypeSafeTranslation('navigation')

    const {items, currentZoomLevel} = getBreadcrumbsFromUrl(router.asPath, router?.query as { zoomLevel: ZoomLevel}, t)

    const handleRedirect = (link : {pathname: string, query?: {zoomLevel: string}}) => {
        const shallow = currentZoomLevel === 0 || currentZoomLevel === 1 && link.pathname === '/'

        if (router.query?.zoomLevel === link.query?.zoomLevel && link.pathname === router.asPath) {
            router.reload()
            return
        }

        router.push(link, undefined, { shallow })
    }

    return (
        <Flex alignItems={'center'} position='absolute' zIndex={2} left={'24px'} top={'15px'}>
            {
                items.map((item, index) => (
                    <>
                    <Box as='div' mr={'10px'} cursor="pointer" textStyle='small' onClick={() => handleRedirect(item.link)}>{item.name}</Box>
                    {index + 1 !== items.length && (
                        <Box mr={'10px'} cursor="pointer">
                            <ArrowRightIcon />
                        </Box>
                    ) }
                    </>
                ))
            }
        </Flex>
    )
}


export default Breadcrumbs