import { registerEnumType } from '@nestjs/graphql'

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
