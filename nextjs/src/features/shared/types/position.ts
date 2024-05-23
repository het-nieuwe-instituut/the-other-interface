type PositionValue = `${string}vw` | `${string}vh` | `${string}%` | 0 | `calc(${string})`

export type Position = {
  top?: PositionValue
  right?: PositionValue
  bottom?: PositionValue
  left?: PositionValue
}

export type GridParams = {
  gridRow: `${number} / ${number}`
  gridColumn: `${number} / ${number}`
}

export type PositioningTemplate = {
  position: Position
  grid: GridParams
}
