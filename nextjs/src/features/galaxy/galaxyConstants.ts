import { EntityNames } from 'src/generated/graphql'

export const galaxyTypesToPositions: Record<
  EntityNames,
  { xFromCenter: number; yFromCenter: number; fixedNumberOfInstances?: number }
> = {
  [EntityNames.Archives]: {
    xFromCenter: -300,
    yFromCenter: 0,
    fixedNumberOfInstances: 814,
  },
  [EntityNames.Publications]: {
    xFromCenter: 250,
    yFromCenter: -150,
    fixedNumberOfInstances: 308,
  },
  [EntityNames.Objects]: {
    xFromCenter: 175,
    yFromCenter: 175,
    fixedNumberOfInstances: 192,
  },
  [EntityNames.People]: {
    xFromCenter: 350,
    yFromCenter: 120,
    fixedNumberOfInstances: 192,
  },
  // Unsuded types, add values after we will have them
  [EntityNames.External]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
  [EntityNames.Media]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
  [EntityNames.Stories]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
  [EntityNames.Wikidata]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
  [EntityNames.Rkd]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
  [EntityNames.Getty]: {
    xFromCenter: 0,
    yFromCenter: 0,
  },
}
