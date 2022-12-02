import {
    ArchivesFondsZoomLevel5DetailType,
    Maybe,
    PublicationsArticleZoomLevel5DetailType,
    PublicationsSerialZoomLevel5DetailType,
    PublicationsZoomLevel5Types,
    TriplyRecord,
} from 'src/generated/graphql'
import { imageBasePath } from '../modulesConstants'

interface DefaultTriplyFields {
    imageUrl: string
    title: string
    description: string
}

export type ExtractedTriplyFields = DefaultTriplyFields

const extractTriplyFields = (
    defaultFields: DefaultTriplyFields,
    record?: Maybe<Partial<TriplyRecord>>
): ExtractedTriplyFields => {
    const triplyType = record?.type

    if (!triplyType) {
        return {
            ...defaultFields,
            imageUrl: imageBasePath + defaultFields.imageUrl,
        }
    }

    if (triplyType === 'Archive') {
        const item = record.archive as ArchivesFondsZoomLevel5DetailType

        return {
            ...defaultFields,
            title: item?.recordTitle ?? defaultFields?.title,
            description: item?.objectNumber ?? defaultFields?.description,
        }
    }

    if (triplyType === 'Object') {
        const item = record.object
        return {
            ...defaultFields,
            imageUrl: item?.image ?? defaultFields.imageUrl,
            title: item?.title ?? defaultFields?.title,
            description: item?.objectNumber ?? defaultFields?.description,
        }
    }

    if (triplyType === 'Publication') {
        const description =
            record.publication?.type === PublicationsZoomLevel5Types.Serial
                ? (record.publication as PublicationsSerialZoomLevel5DetailType).yearOfPublication
                : (record.publication as PublicationsArticleZoomLevel5DetailType).objectNumber
        const title = record.publication?.title

        return {
            ...defaultFields,
            title: title ?? defaultFields?.title,
            description: description ?? defaultFields?.description,
        }
    }

    if (triplyType === 'People') {
        const item = record.people

        return {
            ...defaultFields,
            title: item?.name ?? defaultFields?.title,
            description: item?.nameType ?? defaultFields?.description,
        }
    }

    return defaultFields
}

export { extractTriplyFields }
