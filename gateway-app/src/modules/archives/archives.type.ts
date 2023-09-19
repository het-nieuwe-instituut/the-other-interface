import { createUnionType, Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { PoepleZoomLevel5DetailType } from '../people/people.type'
import { ArchivesZoomLevel5Types } from './archives.service'

@InputType()
export class ArchivesZoomLevel2FiltersArgs {
  @Field(() => String, { nullable: true })
  public date: string | null

  @Field(() => String, { nullable: true })
  public descriptionLevel: string | null

  @Field(() => String, { nullable: true })
  public relatedName: string | null
}

registerEnumType(ArchivesZoomLevel5Types, { name: 'ArchivesZoomLevel5Types' })

@ObjectType()
class BaseArchiveZoomLevel5Type {
  @Field()
  public id: string

  @Field(() => ArchivesZoomLevel5Types)
  public type: ArchivesZoomLevel5Types
}

@ObjectType()
export class ArchivesFondsZoomLevel5DetailType extends BaseArchiveZoomLevel5Type {
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

  @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
  public populatedCreator?: PoepleZoomLevel5DetailType
}

@ObjectType()
export class ArchivesOtherZoomLevel5DetailType extends BaseArchiveZoomLevel5Type {
  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public startDate?: string

  @Field(() => String, { nullable: true })
  public endDate?: string

  @Field(() => String, { nullable: true })
  public dateLabel?: string

  @Field(() => String, { nullable: true })
  public dimensionFree?: string

  @Field(() => String, { nullable: true })
  public mediaReference?: string

  @Field(() => String, { nullable: true })
  public mediaReferenceLabel?: string

  @Field(() => String, { nullable: true })
  public existenceOfOriginals?: string

  @Field(() => String, { nullable: true })
  public scopeContent?: string

  @Field(() => String, { nullable: true })
  public relatedMaterial?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field(() => String, { nullable: true })
  public rightsLabel?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => [String], { nullable: true })
  public pidWorkURIs?: string[]
}

export const ArchiveZoomLevel5UnionType = createUnionType({
  name: 'ArchiveZoomLevel5UnionType',
  types: () => [ArchivesOtherZoomLevel5DetailType, ArchivesFondsZoomLevel5DetailType] as const,
  resolveType: (archive: BaseArchiveZoomLevel5Type) => {
    if (archive.type === ArchivesZoomLevel5Types.other) {
      return ArchivesOtherZoomLevel5DetailType
    }

    return ArchivesFondsZoomLevel5DetailType
  },
})
