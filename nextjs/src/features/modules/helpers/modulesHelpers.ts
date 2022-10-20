import { ArchivesFondsZoomLevel5DetailType, ComponentCoreCarouselItem, Maybe, PublicationsArticleZoomLevel5DetailType, TriplyRecord } from "src/generated/graphql";
import { imageBasePath } from "../modulesConstants";

const extractDataFromTripley = (record: Maybe<Partial<TriplyRecord>>, component?: Maybe<ComponentCoreCarouselItem>) => {
    const type = record?.type
    const image = component?.picture?.data?.attributes
    const imagePath = imageBasePath + image?.url
    const defaultResult = {
        image: '',
        name: '',
        description: ''
    }

    if (!type || !component) {
        return defaultResult
    }

    if (type === 'Archive') {
        const item = record.archive as ArchivesFondsZoomLevel5DetailType 
        return {
            image: item?.mediaReference ?? imagePath,
            name: item?.title ?? component?.name,
            description: item?.objectNumber ?? component?.description
        }
    }

    if (type === 'Object') {
        const item = record.object
        return {
            image: item?.image ?? imagePath,
            name: item?.title ?? component?.name,
            description: item?.maker ?? component?.description
        }
    }

    if (type === 'Publication') {
        const item = record.publication as PublicationsArticleZoomLevel5DetailType
        return {
            image: imagePath,
            name: item?.title ?? component?.name,
            description: item?.author ?? component?.description
        }                             
    }

    if (type === 'People') {
        const item = record.people 
        return {
            image: imagePath,
            name: item?.name ?? component?.name,
            description: item?.profession ?? component?.description
        }
    }
    return defaultResult
}

export {
    extractDataFromTripley
}