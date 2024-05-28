import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { PositioningTemplate } from '@/features/shared/types/position'

type Templates = {
  [K in CloudCategory]: PositioningTemplate[][]
}

const objects: PositioningTemplate[][] = [
  [
    {
      position: {
        right: 0,
        bottom: 0,
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        bottom: 0,
        left: '10%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
  [
    {
      position: {
        right: '50%',
        bottom: '30%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        bottom: '50%',
        left: '40%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
]

const publications: PositioningTemplate[][] = [
  [
    {
      position: {
        left: 0,
        bottom: 0,
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2',
      },
    },
    {
      position: {
        top: 0,
        right: 0,
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
  [
    {
      position: {
        left: '35%',
        bottom: '20%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2',
      },
    },
    {
      position: {
        top: '15%',
        right: '35%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
]

const archives: PositioningTemplate[][] = [
  [
    {
      position: {
        left: 0,
        bottom: 0,
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2',
      },
    },
    {
      position: {
        bottom: 0,
        right: '10%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
  [
    {
      position: {
        left: '40%',
        bottom: '15%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '1 / 2',
      },
    },
    {
      position: {
        bottom: '30%',
        right: '50%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '2 / 3',
      },
    },
  ],
]

const people: PositioningTemplate[][] = [
  [
    {
      position: {
        right: 0,
        bottom: 0,
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        top: 0,
        right: 0,
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '1 / 2',
      },
    },
  ],
  [
    {
      position: {
        right: '-30%',
        bottom: '-40%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        top: '-55%',
        right: '35%',
      },
      grid: {
        gridRow: '2 / 3',
        gridColumn: '1 / 2',
      },
    },
  ],
]

export const positioningTemplate: Templates = {
  [CLOUD_CATEGORIES.objects]: objects,
  [CLOUD_CATEGORIES.publications]: publications,
  [CLOUD_CATEGORIES.archives]: archives,
  [CLOUD_CATEGORIES.people]: people,
}
