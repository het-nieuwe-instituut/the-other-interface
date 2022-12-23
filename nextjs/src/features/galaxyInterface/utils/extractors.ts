import { SupportedQuerys } from '@/features/pages/tasks/zoom5Config'

export const extractSlugAndId = (path: string) => {
    const index = path.indexOf('-')
    const id = path.substring(0, index)
    const slug = path.substring(index + 1)

    return {
        slug,
        id,
    }
}

export const extractType = (path: string) => {
    const pathArr = path.split('/').filter(item => !!item)
    return pathArr[0] === 'story' ? (pathArr[0] as SupportedQuerys) : (pathArr[1] as SupportedQuerys)
}
