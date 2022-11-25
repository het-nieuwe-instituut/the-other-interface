import ApiClient from "@/features/graphql/api";
import { Zoom3ArchivesQuery, Zoom3DPeopleQuery, Zoom3DPublicationsQuery, Zoom3ObjectsQuery } from "src/generated/graphql";

export enum SupportedLandingPages {
    Publications = 'publications',
    People = 'people',
    Archives = 'archives',
    Objects = 'objects',
}

export const zoom3Query = {
    [SupportedLandingPages.Archives]: ApiClient?.Zoom3Archives,
    [SupportedLandingPages.Objects]: ApiClient?.Zoom3Objects,
    [SupportedLandingPages.People]: ApiClient?.Zoom3DPeople,
    [SupportedLandingPages.Publications]: ApiClient?.Zoom3DPublications,
}

export type Zoom3ReturnType = Zoom3ArchivesQuery | Zoom3ObjectsQuery | Zoom3DPeopleQuery | Zoom3DPublicationsQuery
