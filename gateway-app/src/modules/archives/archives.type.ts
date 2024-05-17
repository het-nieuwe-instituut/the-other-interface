import { ArgsType, Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ArchivesZoomLevel3Types } from './archives.service'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
import { IsOptional, IsString } from 'class-validator'
import { EntityNames } from '../util/entityNames.type'

@ObjectType()
export class ArchiveZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public description?: string | null
}

@ObjectType()
export class ArchiveRelationsType {
  @Field(() => String, { nullable: true })
  public id?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public referenceNumber?: string | null

  @Field(() => String, { nullable: true })
  public period?: string | null
}

@ObjectType()
export class ArchivesRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

registerEnumType(ArchivesZoomLevel3Types, { name: 'ArchivesZoomLevel3Types' })

@ObjectType()
class BaseArchiveZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ArchivesZoomLevel3Types)
  public type: ArchivesZoomLevel3Types

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public thumbnail: string
}

@ObjectType()
export class ArchivesFondsZoomLevel3DetailType extends BaseArchiveZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public descriptionLevel?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public recordTitle?: string

  @Field(() => String, { nullable: true })
  public startDate?: string

  @Field(() => String, { nullable: true })
  public endDate?: string

  @Field(() => String, { nullable: true })
  public productionDate?: string

  @Field(() => String, { nullable: true })
  public extent?: string

  @Field(() => String, { nullable: true })
  public repository?: string

  @Field(() => String, { nullable: true })
  public repositoryLabel?: string

  @Field(() => [ArchivesFondsCreatorType], { nullable: true })
  public creators?: ArchivesFondsCreatorType[]

  @Field(() => String, { nullable: true })
  public custodialHistory?: string

  @Field(() => String, { nullable: true })
  public systemOfArrangement?: string

  @Field(() => String, { nullable: true })
  public contentScope?: string

  @Field(() => String, { nullable: true })
  public conditionsGoverningAccess?: string

  @Field(() => String, { nullable: true })
  public relatedMaterial?: string

  @Field(() => String, { nullable: true })
  public appendices?: string

  @Field(() => String, { nullable: true })
  public source?: string

  @Field(() => String, { nullable: true })
  public partReference?: string

  @Field(() => String, { nullable: true })
  public partTitle?: string

  @Field(() => String, { nullable: true })
  public right?: string

  @Field(() => String, { nullable: true })
  public rightsLabel?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string
}

@ObjectType()
export class ArchivesFondsCreatorType {
  @Field(() => String)
  public id: string

  @Field(() => String)
  public creator: string

  @Field(() => String, { nullable: true })
  public creatorLabel?: string

  @Field(() => String, { nullable: true })
  public creatorHistory?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedCreator?: PeopleZoomLevel3DetailType
}
@ArgsType()
export class ArchiveRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field()
  @IsOptional()
  public lang?: string
}

@ObjectType()
export class ArchivesRecordZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public referenceCode?: string

  @Field(() => String, { nullable: true })
  public titleType?: string

  @Field(() => String, { nullable: true })
  public descriptionLevel?: string

  @Field(() => String, { nullable: true })
  public size?: string

  @Field(() => String, { nullable: true })
  public period?: string

  @Field(() => String, { nullable: true })
  public access?: string

  @Field(() => String, { nullable: true })
  public photographCreator?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalSource?: string
}
@ArgsType()
export class ArchivesZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string
}
@ObjectType()
export class ArchivesZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public creators?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
