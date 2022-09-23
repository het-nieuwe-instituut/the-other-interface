import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { ArchivesZoomLevel4FiltersArgs } from '../archives/archives.type'
import { ObjectsZoomLevel4FiltersArgs } from '../objects/objects.type'
import { PeopleZoomLevel4FiltersArgs } from '../people/people.type'
import { PublicationsZoomLevel4FiltersArgs } from '../publications/publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ArgsType()
export class ZoomLevel4Args {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames

    @Field(() => ArchivesZoomLevel4FiltersArgs, { nullable: true })
    public archivesFilters: ArchivesZoomLevel4FiltersArgs

    @Field(() => ObjectsZoomLevel4FiltersArgs, { nullable: true })
    public objectsFilters: ObjectsZoomLevel4FiltersArgs

    @Field(() => PeopleZoomLevel4FiltersArgs, { nullable: true })
    public peopleFilters: PeopleZoomLevel4FiltersArgs

    @Field(() => PublicationsZoomLevel4FiltersArgs, { nullable: true })
    public publicationsFilters: PublicationsZoomLevel4FiltersArgs
}

@ObjectType()
export class ZoomLevel4Type {
    @Field(() => String, { nullable: false })
    public record: string

    @Field(() => String, { nullable: true })
    public title: string | null

    @Field(() => String, { nullable: true })
    public firstImage: string | null

    @Field(() => String, { nullable: true })
    public imageLabel: string | null
}
