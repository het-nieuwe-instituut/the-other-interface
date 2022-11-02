import {
    ArgsType,
    createUnionType,
    Field,
    IntersectionType,
    ObjectType,
    PickType,
    registerEnumType,
} from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PoepleZoomLevel5DetailType } from '../people/people.type'
import { ArchivesOtherZoomLevel5DetailType } from '../archives/archives.type'
import { PublicationsBookZoomLevel5DetailType } from '../publications/publications.type'
import { ObjectsZoomLevel5DetailType } from '../objects/objects.type'
import { TriplyExternalSourceEnum } from './zoomLevel5.service'

@ObjectType()
export class ZoomLevel5RelationsType {
    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    public total: number

    @Field(() => [RelatedRecordType], { nullable: true })
    public randomRelations?: RelatedRecordType[]
}

@ObjectType()
export class RelatedRecordType {
    @Field()
    public id: string

    @Field(() => EntityNames)
    public type: EntityNames

    @Field({ nullable: true })
    public slug?: string

    @Field()
    public label: string

    @Field(() => [ZoomLevel5RelationsType], { nullable: true })
    public relations: ZoomLevel5RelationsType[]
}

@ObjectType()
export class BaseZoomLevel5RelatedRecordType {
    @Field()
    public id: string

    @Field(() => EntityNames)
    public type: EntityNames
}

@ObjectType()
export class ZoomLevel5RelatedPeopleType extends IntersectionType(
    BaseZoomLevel5RelatedRecordType,
    PickType(PoepleZoomLevel5DetailType, ['name', 'birthDate', 'profession'] as const)
) {
    @Field(() => EntityNames)
    public type: EntityNames
}

// TODO: pick fields after designs are made
@ObjectType()
export class ZoomLevel5RelatedArchiveType extends IntersectionType(
    BaseZoomLevel5RelatedRecordType,
    PickType(ArchivesOtherZoomLevel5DetailType, [] as const)
) {
    @Field(() => EntityNames)
    public type: EntityNames
}

// TODO: pick fields after designs are made
@ObjectType()
export class ZoomLevel5RelatedObjectType extends IntersectionType(
    BaseZoomLevel5RelatedRecordType,
    PickType(ObjectsZoomLevel5DetailType, [] as const)
) {
    @Field(() => EntityNames)
    public type: EntityNames
}

// TODO: pick fields after designs are made
@ObjectType()
export class ZoomLevel5RelatedPublicationType extends IntersectionType(
    BaseZoomLevel5RelatedRecordType,
    PickType(PublicationsBookZoomLevel5DetailType, [] as const)
) {
    @Field(() => EntityNames)
    public type: EntityNames
}

export const ZoomLevel5RelatedRecordType = createUnionType({
    name: 'ZoomLevel5RelatedRecordType',
    types: () =>
        [
            ZoomLevel5RelatedPeopleType,
            ZoomLevel5RelatedArchiveType,
            ZoomLevel5RelatedObjectType,
            ZoomLevel5RelatedPublicationType,
        ] as const,
    resolveType(baseType: BaseZoomLevel5RelatedRecordType) {
        switch (baseType.type) {
            case EntityNames.People:
                return ZoomLevel5RelatedPeopleType
            case EntityNames.Archives:
                return ZoomLevel5RelatedArchiveType
            case EntityNames.Objects:
                return ZoomLevel5RelatedObjectType
            case EntityNames.Publications:
                return ZoomLevel5RelatedPublicationType
            case EntityNames.Stories:
            case EntityNames.External:
            case EntityNames.Media:
            default:
                throw new Error('not yet implemented')
        }
    },
})

@ArgsType()
export class ZoomLevel5Args {
    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    @IsString()
    public id: string

    @Field(() => TriplyExternalSourceEnum, { nullable: true })
    @IsOptional()
    public externalSource?: TriplyExternalSourceEnum
}

@ArgsType()
export class ZoomLevel5RelatedObjectsArgs {
    @Field(() => EntityNames)
    public relatedObjectsType: EntityNames

    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    @IsString()
    public id: string
}

registerEnumType(TriplyExternalSourceEnum, { name: 'TriplyExternalSourceEnum' })
