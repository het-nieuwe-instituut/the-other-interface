import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { ArchivesZoomLevel4FiltersArgs } from '../archives/archives.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ArgsType()
export class ZoomLevel4Args {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames

    @Field(() => ArchivesZoomLevel4FiltersArgs, { nullable: true })
    public archiveFilters: ArchivesZoomLevel4FiltersArgs
}

@ObjectType()
export class ZoomLevel4Type {
    @Field(() => String, { nullable: false })
    public record: string

    @Field(() => String, { nullable: false })
    public title: string

    @Field(() => String, { nullable: true })
    public firstImage: string

    @Field(() => String, { nullable: true })
    public imageLabel: string
}
