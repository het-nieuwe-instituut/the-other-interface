import { ArchivesFondsZoomLevel5DetailType, ArchivesOtherZoomLevel5DetailType, ArchivesZoomLevel5Types, ComponentCoreCarouselItem, Maybe, PublicationsArticleZoomLevel5DetailType, PublicationsSerialZoomLevel5DetailType, PublicationsZoomLevel5Types, TriplyRecord } from "src/generated/graphql";
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
        const archiveName = record.archive?.type === ArchivesZoomLevel5Types.Fonds ? (record.archive as ArchivesFondsZoomLevel5DetailType)?.recordTitle  : (record.archive as ArchivesOtherZoomLevel5DetailType)?.title
        return {
            image: imagePath,
            name: component?.name ?? archiveName,
            description: component?.description ?? item?.objectNumber 
        }
    }

    if (type === 'Object') {
        const item = record.object
        return {
            image: imagePath,
            name: component?.name ?? item?.title,
            description: component?.description ?? item?.objectNumber
        }
    }

    if (type === 'Publication') {
        const description = record.publication?.type === PublicationsZoomLevel5Types.Serial ? (record.publication as PublicationsSerialZoomLevel5DetailType).yearOfPublication : (record.publication as PublicationsArticleZoomLevel5DetailType).objectNumber
        const name = record.publication?.title
        return {
            image: imagePath,
            name: component?.name ?? name,
            description: component?.description ?? description
        }                             
    }

    if (type === 'People') {
        const item = record.people 
        return {
            image: imagePath,
            name:  component?.name ?? item?.name,
            description: component?.description ?? item?.nameType 
        }
    }
    return defaultResult
}

const calculateImagePropotions = (
    originalImageWidth: number,
    originaImagelHeight: number,
    adjustToHeight: number,
    maxWidth: number
) => {
    let caulculatedWidth = (adjustToHeight * originalImageWidth) / originaImagelHeight
    let calculatedHeight = adjustToHeight
    if (caulculatedWidth >= maxWidth) {
        calculatedHeight = (maxWidth * originaImagelHeight) / originalImageWidth
        caulculatedWidth = (calculatedHeight * originalImageWidth) / originaImagelHeight
    }

    return {
        width: caulculatedWidth,
        height: calculatedHeight,
    }
}

export {
    extractDataFromTripley,
    calculateImagePropotions
}