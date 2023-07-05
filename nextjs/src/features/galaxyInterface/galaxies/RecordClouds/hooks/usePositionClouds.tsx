import { typeColors } from '@/features/shared/styles/theme/foundations/colors'
import { useMemo } from 'react'

import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'

import { Config, getConfiguredRelations, ParentRelation } from '../utils/calculus'

const configuration: Record<EntityNames, Config> = {
  [EntityNames.External]: {
    background: '',
    x: 0,
    y: 0,
    diameter: 0,
    internalDiameter: 0,
    spaceBetweenChilds: 0,
    children: [],
  },
  [EntityNames.Media]: {
    background: '',
    x: 0,
    y: 0,
    diameter: 0,
    internalDiameter: 0,
    spaceBetweenChilds: 0,
    children: [],
  },
  [EntityNames.Getty]: {
    background: '',
    x: 0,
    y: 0,
    diameter: 0,
    internalDiameter: 0,
    spaceBetweenChilds: 0,
    children: [],
  },
  [EntityNames.Rkd]: {
    background: '',
    x: 0,
    y: 0,
    diameter: 0,
    internalDiameter: 0,
    spaceBetweenChilds: 0,
    children: [],
  },

  [EntityNames.Wikidata]: {
    background: '',
    x: 0,
    y: 0,
    diameter: 0,
    internalDiameter: 0,
    spaceBetweenChilds: 0,
    children: [],
  },
  [EntityNames.Archives]: {
    background: typeColors.archives.hover1,
    x: 1008,
    y: 50,
    diameter: 128,
    internalDiameter: 256,
    spaceBetweenChilds: 20,
    children: [
      { position: 0.5, diameter: 192 },
      { position: 0.6, diameter: 192 },
    ],
  },
  [EntityNames.Objects]: {
    background: typeColors.objects.hover1,
    x: 54,
    y: 517,
    diameter: 128,
    internalDiameter: 256,
    spaceBetweenChilds: 40,
    children: [
      { position: 0.5, diameter: 192 },
      { position: 0.6, diameter: 192 },
    ],
  },
  [EntityNames.People]: {
    background: typeColors.people.hover1,
    x: 993,
    y: 585,
    diameter: 214,
    internalDiameter: 260,
    spaceBetweenChilds: 35,
    children: [
      { position: 0.5, diameter: 192 },
      { position: 0.6, diameter: 192 },
    ],
  },
  [EntityNames.Publications]: {
    background: typeColors.publications.hover1,
    x: -4.5,
    y: -12.87,
    diameter: 384,
    internalDiameter: 384,
    spaceBetweenChilds: 30,
    children: [
      { position: 0.5, diameter: 192 },
      { position: 0.6, diameter: 192 },
    ],
  },
  [EntityNames.Stories]: {
    background: typeColors.story.default,
    x: 1121,
    y: 240,
    diameter: 128,
    internalDiameter: 256,
    spaceBetweenChilds: 20,
    children: [
      { position: 0.5, diameter: 192 },
      { position: 0.6, diameter: 192 },
    ],
  },
}

export function usePositionClouds(relations: ObjectRelationsQuery['relations']) {
  const relationsPositionData: ParentRelation[] = useMemo(() => {
    return getConfiguredRelations(relations, configuration)
  }, [relations])

  return { relationsPositionData }
}
