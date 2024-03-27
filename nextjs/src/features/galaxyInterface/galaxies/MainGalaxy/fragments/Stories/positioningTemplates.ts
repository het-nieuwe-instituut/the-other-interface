import { PositioningTemplate } from '@/features/shared/types/position'

export type StoriesPositioningTemplates = {
  [index: number]: PositioningTemplate[]
}

export const storiesPositionTemplate1: PositioningTemplate[] = [
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
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
      left: 0,
      bottom: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '4 / 5',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '4 / 5',
    },
  },
]

export const storiesPositionTemplate2: PositioningTemplate[] = [
  {
    position: {
      bottom: 0,
      left: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '1 / 3',
    },
  },
  {
    position: {
      bottom: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      right: 0,
      top: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      right: 0,
      top: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      bottom: 0,
      left: '15%',
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '4 / 5',
    },
  },
]

export const storiesPositionTemplate3: PositioningTemplate[] = [
  {
    position: {
      top: '10%',
      left: '15%',
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      bottom: 0,
      right: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      right: 0,
      top: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      right: 0,
      bottom: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 3',
      gridColumn: '4 / 5',
    },
  },
]

export const storiesPositionTemplate4: PositioningTemplate[] = [
  {
    position: {
      bottom: 0,
      right: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      bottom: 0,
      left: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      top: '10%',
      left: '15%',
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      left: 0,
      top: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      bottom: 0,
      right: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '5 / 5',
    },
  },
]

export const storiesPositionTemplate5: PositioningTemplate[] = [
  {
    position: {
      top: '10%',
      left: '15%',
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      top: '10%',
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      bottom: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      right: 0,
      bottom: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '5 / 5',
    },
  },
]

export const storiesPositionTemplate6: PositioningTemplate[] = [
  {
    position: {
      top: 0,
      right: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      top: '10%',
      left: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      bottom: 0,
      right: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '5 / 5',
    },
  },
]
