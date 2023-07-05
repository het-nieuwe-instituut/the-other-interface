export interface Dimensions {
  height?: number | null
  width?: number | null
}

export enum ZoomLevel {
  Zoom0 = 'z0',
  Zoom1 = 'z1',
  Zoom1Stories = 'zStories',
  Zoom2 = 'z2',
  Zoom3 = 'z3',
  Zoom4 = 'z4',
  Zoom5 = 'z5',
  zoomedTo = 'ZoomedTo',
}
