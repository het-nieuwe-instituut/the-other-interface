import { Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
// import { PoepleZoomLevel3DetailType } from '../people/people.type'
// import { ArchivesZoomLevel3Types } from './archives.service'
// import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

// registerEnumType(ArchivesZoomLevel3Types, { name: 'ArchivesZoomLevel3Types' })

@ObjectType()
export class ArchiveZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames

  @Field(() => String)
  public title: string

  @Field(() => String)
  public thumbnail: string
}

// @ObjectType()
// export class ArchivesFondsZoomLevel3DetailType extends BaseArchiveZoomLevel3Type {

// }

// @ObjectType()
// export class ArchivesFondsCreatorType {
//   @Field()
//   public id: string

//   @Field(() => EntityNames)
//   public type: EntityNames

//   @Field(() => String)
//   public title: string

//   @Field(() => String)
//   public thumbnail: string
// }

// @ObjectType()
// export class ArchivesOtherZoomLevel3DetailType extends BaseArchiveZoomLevel3Type {
//   @Field(() => String)
//   public title: string

//   @Field(() => String)
//   public thumbnail: string
// }

// export const ArchiveZoomLevel3UnionType = createUnionType({
//   name: 'ArchiveZoomLevel3UnionType',
//   types: () => [ArchivesOtherZoomLevel3DetailType, ArchivesFondsZoomLevel3DetailType] as const,
//   resolveType: (archive: BaseArchiveZoomLevel3Type) => {
//     if (archive.type === ArchivesZoomLevel3Types.other) {
//       return ArchivesOtherZoomLevel3DetailType
//     }

//     return ArchivesFondsZoomLevel3DetailType
//   },
// })
