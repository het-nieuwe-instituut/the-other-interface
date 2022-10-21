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
        const archiveName = record.archive?.type === ArchivesZoomLevel5Types.Fonds ? (record.archive as ArchivesFondsZoomLevel5DetailType)?.populatedCreator?.name  : (record.archive as ArchivesOtherZoomLevel5DetailType)?.title
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
            description: component?.description ?? item?.populatedMaker?.name
        }
    }

    if (type === 'Publication') {
        const item = record.publication as PublicationsArticleZoomLevel5DetailType
        const name = record.publication?.type === PublicationsZoomLevel5Types.Serial ? (record.publication as PublicationsSerialZoomLevel5DetailType).populatedPublisher?.name : (record.publication as PublicationsArticleZoomLevel5DetailType).populatedAuthor?.profession
        return {
            image: imagePath,
            name: component?.name ?? name,
            description: component?.description ?? item?.author 
        }                             
    }

    if (type === 'People') {
        const item = record.people 
        return {
            image: imagePath,
            name:  component?.name ?? item?.name,
            description: component?.description ?? item?.profession 
        }
    }
    return defaultResult
}

export {
    extractDataFromTripley
}