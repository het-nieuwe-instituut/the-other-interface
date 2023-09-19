type PositionValue = `${string}vw` | `${string}vh` | `${string}%` | 0

export type Position = {
  top?: PositionValue
  right?: PositionValue
  bottom?: PositionValue
  left?: PositionValue
}
