import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql'

export enum EntityNames {
  Archives = 'Archives',
  Objects = 'Objects',
  People = 'People',
  Publications = 'Publications',
  Stories = 'Stories',
  External = 'External',
  Media = 'Media',

  // external
  Rkd = 'Rkd',
  Wikidata = 'Wikidata',
  Getty = 'Getty',
}
registerEnumType(EntityNames, { name: 'EntityNames' })

export const externalEntityNames = [EntityNames.Rkd, EntityNames.Wikidata, EntityNames.Getty]

@ObjectType()
export class ZoomLevel1Type {
  @Field(() => String)
  public name: string

  @Field(() => Int)
  public count: number

  @Field(() => EntityNames)
  public id: EntityNames
}
