import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { PoepleZoomLevel5DetailType } from '../people/people.type'

@InputType()
export class ObjectsZoomLevel4FiltersArgs {
    @Field(() => String, { nullable: true })
    public Objectname: string | null

    @Field(() => String, { nullable: true })
    public Maker: string | null

    @Field(() => String, { nullable: true })
    public Material: string | null

    @Field(() => String, { nullable: true })
    public Technique: string | null

    @Field(() => String, { nullable: true })
    public Subject: string | null

    @Field(() => String, { nullable: true })
    public PerInst: string | null

    @Field(() => String, { nullable: true })
    public StartDate: string | null

    @Field(() => String, { nullable: true })
    public EndDate: string | null
}

@ObjectType()
export class ObjectsZoomLevel5DetailType {
    @Field()
    public id: string

    @Field(() => String, { nullable: true })
    public image?: string | null

    @Field(() => String, { nullable: true })
    public imageLabel?: string | null

    @Field(() => String, { nullable: true })
    public title?: string | null

    @Field(() => String, { nullable: true })
    public titleType?: string | null

    @Field(() => String, { nullable: true })
    public objectNumber?: string | null

    @Field(() => String, { nullable: true })
    public objectName?: string | null

    @Field(() => String, { nullable: true })
    public objectNameLabel?: string | null

    @Field(() => String, { nullable: true })
    public archiveCollectionCode?: string | null

    @Field(() => String, { nullable: true })
    public maker?: string | null

    @Field(() => String, { nullable: true })
    public makerLabel?: string | null

    @Field(() => String, { nullable: true })
    public makerRole?: string | null

    @Field(() => String, { nullable: true })
    public makerRoleLabel?: string | null

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedMaker?: PoepleZoomLevel5DetailType

    @Field(() => String, { nullable: true })
    public startDate?: string | null

    @Field(() => String, { nullable: true })
    public endDate?: string | null

    @Field(() => String, { nullable: true })
    public numberOfParts?: string | null

    @Field(() => String, { nullable: true })
    public scale?: string | null

    @Field(() => String, { nullable: true })
    public technique?: string | null

    @Field(() => String, { nullable: true })
    public techniqueLabel?: string | null

    @Field(() => String, { nullable: true })
    public material?: string | null

    @Field(() => String, { nullable: true })
    public materialLabel?: string | null

    @Field(() => String, { nullable: true })
    public dimensionPart?: string | null

    @Field(() => String, { nullable: true })
    public dimensionType?: string | null

    @Field(() => String, { nullable: true })
    public dimensionValue?: string | null

    @Field(() => String, { nullable: true })
    public dimensionUnit?: string | null

    @Field(() => String, { nullable: true })
    public description?: string | null

    @Field(() => String, { nullable: true })
    public associationPerson?: string | null

    @Field(() => String, { nullable: true })
    public associationPersonLabel?: string | null

    @Field(() => String, { nullable: true })
    public associationPersonType?: string | null

    @Field(() => String, { nullable: true })
    public relatedObjectTitle?: string | null

    @Field(() => String, { nullable: true })
    public creditLine?: string | null

    @Field(() => String, { nullable: true })
    public rights?: string | null

    @Field(() => String, { nullable: true })
    public rightsLabel?: string | null

    @Field(() => String, { nullable: true })
    public creationPlace?: string | null

    @Field(() => String, { nullable: true })
    public creationPlaceLabel?: string | null

    @Field(() => String, { nullable: true })
    public permanentLink?: string | null
}
