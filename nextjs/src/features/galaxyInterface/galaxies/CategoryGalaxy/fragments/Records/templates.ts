import { Position } from '@/features/shared/types/position'

type PositioningTemplate = {
  [index: number]: Position
}

export const positioningTemplate1: PositioningTemplate = {
  0: {
    top: 0,
    left: '15%',
  },
  1: {
    left: 0,
    bottom: 0,
  },
  2: {
    top: '10%',
    left: '15%',
  },
  3: { top: 0, left: 0 },
  4: {
    top: '10%',
    left: 0,
  },
  5: {
    bottom: 0,
    left: '15%',
  },
  6: { left: 0, top: 0 },
  7: { top: '10%', right: 0 },
  8: {
    top: 0,
    right: 0,
  },
  9: {
    right: 0,
    bottom: 0,
  },
  10: { top: '10%', right: 0 },
  11: {
    top: 0,
    left: '15%',
  },
}

export const positioningTemplate2: PositioningTemplate = {
  0: {
    top: '10%',
    left: 0,
  },
  1: {
    left: 0,
    bottom: 0,
  },
  2: {
    top: '10%',
    left: '15%',
  },
  3: { top: 0, left: 0 },
  4: {
    top: '10%',
    left: 0,
  },
  5: {
    bottom: 0,
    left: '15%',
  },
  6: { left: 0, top: 0 },
  7: { top: '10%', right: 0 },
  8: {
    top: 0,
    right: 0,
  },
  9: {
    right: 0,
    bottom: 0,
  },
  10: { top: '10%', right: 0 },
  11: {
    top: 0,
    left: '15%',
  },
}

export const positioningTemplate = positioningTemplate2
