import { Position } from '@/features/shared/types/position'

export type PositioningTemplate = {
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
    right: 0,
    bottom: '10%',
  },
  2: {
    bottom: 0,
    left: '15%',
  },
  3: { top: 0, left: 0 },
  4: {
    bottom: 0,
    right: 0,
  },
  5: {
    top: 0,
    right: 0,
  },
  6: { right: 0, top: '10%' },
  7: { top: 0, right: '15%' },
  8: {
    top: 0,
    right: '15%',
  },
  9: {
    top: '10%',
    right: '15%',
  },
  10: { bottom: 0, left: 0 },
  11: {
    top: 0,
    left: 0,
  },
}

export const positioningTemplate3: PositioningTemplate = {
  0: {
    top: '10%',
    right: 0,
  },
  1: {
    top: 0,
    left: '15%',
  },
  2: {
    bottom: 0,
    right: 0,
  },
  3: { top: 0, right: 0 },
  4: {
    bottom: 0,
    left: '15%',
  },
  5: {
    top: '10%',
    left: 0,
  },
  6: { top: 0, left: 0 },
  7: { top: '10%', right: 0 },
  8: {
    bottom: 0,
    left: 0,
  },
  9: {
    top: 0,
    right: '15%',
  },
  10: { top: '10%', right: '15%' },
  11: {
    top: 0,
    left: 0,
  },
}

export const positioningTemplate4: PositioningTemplate = {
  0: {
    top: '10%',
    left: 0,
  },
  1: {
    right: '15%',
    bottom: 0,
  },
  2: {
    bottom: '10%',
    right: 0,
  },
  3: { top: 0, left: 0 },
  4: {
    top: 0,
    right: '15%',
  },
  5: {
    top: 0,
    left: 0,
  },
  6: { top: '10%', right: '15%' },
  7: { left: 0, bottom: 0 },
  8: {
    top: 0,
    right: '15%',
  },
  9: {
    top: 0,
    right: 0,
  },
  10: { bottom: '10%', right: 0 },
  11: {
    bottom: 0,
    right: 0,
  },
}

export const positioningTemplate5: PositioningTemplate = {
  0: {
    top: '10%',
    right: '15%',
  },
  1: {
    top: 0,
    left: '15%',
  },
  2: {
    top: 0,
    left: 0,
  },
  3: { bottom: 0, left: 0 },
  4: {
    top: '10%',
    left: 0,
  },
  5: {
    bottom: 0,
    left: '15%',
  },
  6: { top: 0, left: 0 },
  7: { top: '10%', right: 0 },
  8: {
    top: 0,
    right: 0,
  },
  9: {
    top: '10%',
    right: 0,
  },
  10: { bottom: 0, right: 0 },
  11: {
    top: 0,
    left: '15%',
  },
}

export const positioningTemplate6: PositioningTemplate = {
  0: {
    top: '10%',
    right: 0,
  },
  1: {
    right: 0,
    top: 0,
  },
  2: {
    bottom: 0,
    right: 0,
  },
  3: { top: 0, left: '15%' },
  4: {
    top: 0,
    right: '15%',
  },
  5: {
    top: 0,
    left: 0,
  },
  6: { bottom: 0, left: 0 },
  7: { left: '15%', bottom: '10%' },
  8: {
    left: 0,
    top: '10%',
  },
  9: {
    bottom: 0,
    right: '15%',
  },
  10: { top: 0, left: 0 },
  11: {
    bottom: '10%',
    right: 0,
  },
}

export const positioningTemplates = [
  positioningTemplate1,
  positioningTemplate2,
  positioningTemplate3,
  positioningTemplate4,
  positioningTemplate5,
  positioningTemplate6,
]

export const positioningTemplate = positioningTemplate6

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
