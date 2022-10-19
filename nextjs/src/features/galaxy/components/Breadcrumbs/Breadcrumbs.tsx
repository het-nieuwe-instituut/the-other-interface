import { useRouter } from 'next/router'
import { ZoomLevel } from '../../types/galaxy'

const typeToName: Record<string, string> = {
    people: 'People',
    publications: 'Publication',
    objects: 'Object',
    archives: 'Archive',
    story: 'Stories'
}

const getLevel3 = (type: string) => {
    return {
        name: typeToName[type],
        link : {
            pathname: `/landingpage/${type}`
        }
    }
}

const getBreadcrumbsFromUrl = (asPath: string, query?: string) => {
    const zoomLevel = ZoomLevel.Zoom0
    const pathArray = asPath.split('/')
    // console.log(pathArray)
    // create zoom lebel objects
    // fore object whith deps create mappers
    // than define zoom level 
    // create mapper zoom level to [...level1, ...level2]

    // if (pathArray.includes('landingpage')){

    // }

    const level1 = {
        name: '',
        link: {pathname: '/'}
    }

    const level2 = {
        name: '',
        link: {pathname: '/',  query: { zoomLevel: ZoomLevel.Zoom1 }}
    }

    const level3 = getLevel3('')

    return {
        level1,
        level2,
        level3,
        zoomLevel,
        pathArray,
        query
    }
}

const Breadcrumbs = () => {
    const router = useRouter()
    getBreadcrumbsFromUrl(router.asPath)

    return null
}


export default Breadcrumbs