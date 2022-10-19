import { isTypeNode } from 'graphql'
import { useRouter } from 'next/router'
import { ZoomLevel } from '../../types/galaxy'

const typeToNamePlural: Record<string, string> = {
    people: 'People',
    publications: 'Publications',
    objects: 'Objects',
    archives: 'Archives',
    stories: 'Stories'
}

const getLevel2or3 = (type: string, filter?: string) => {
    const typeToName: Record<string, string> = {
        people: 'People filters',
        publications: 'Publication filters',
        objects: 'Object filters',
        archives: 'Archive filters',
        stories: 'Stories'
    }

    return {
        name: `${typeToName[type]}`,
        link : {
            pathname: filter ? `/landingpage/${type}/${filter}` : `/landingpage/${type}`
        }
    }
}

const getLevel4 = (type: string, filter: string, filterType: string) => {
    const typeToName: Record<string, string> = {
        people: 'People',
        publications: 'Publications',
        objects: 'Objects',
        archives: 'Archives',
        stories: 'Stories'
    }

    return {
        name: `${typeToName[type]}`,
        link : {
            pathname: `/landingpage/${type}/${filter}/${filterType}`
        }
    }
}

const getBreadcrumbsFromUrl = (asPath: string, query:  { zoomLevel: ZoomLevel}) => {
    let currentZoomLevel = 0
    let pathArray = asPath.split('/')
    pathArray = pathArray.filter(item => item !== '')
    const startLandingIndex = pathArray.findIndex(item => item === 'landingpage')
    const { zoomLevel } = query 
    if (zoomLevel) {
        currentZoomLevel = zoomLevel === ZoomLevel.Zoom1 ? 1 : 0
    }

    const level0 = {
        name: 'The Other Interface',
        link: {pathname: '/'}
    }

    const level1 = {
        name: 'The Collection',
        link: {pathname: '/',  query: { zoomLevel: ZoomLevel.Zoom1 }}
    }


    if (pathArray.includes('landingpage')) {
        currentZoomLevel = pathArray.length - startLandingIndex
    }

    if (pathArray.includes('story')) {
        currentZoomLevel = 5
    }

    const rawItems = [level0, level1, getLevel2or3(pathArray[startLandingIndex + 1]), getLevel2or3(pathArray[startLandingIndex + 1], pathArray[startLandingIndex + 2]), getLevel4(pathArray[startLandingIndex + 1], pathArray[startLandingIndex + 2], pathArray[startLandingIndex + 3])]
    const items = rawItems.slice(0, currentZoomLevel)
    return {
        items
    }
}

const Breadcrumbs = () => {
    const router = useRouter()
    getBreadcrumbsFromUrl(router.asPath, router?.query as { zoomLevel: ZoomLevel})

    return null
}


export default Breadcrumbs