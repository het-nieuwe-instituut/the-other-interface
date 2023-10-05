import { getCurrentZoomNumber } from './getCurrentZoomNumber'

describe('getCurrentZoomNumber', () => {
  it('should return 3 if pathname includes "detail"', () => {
    const pathname = '/example/detail'
    expect(getCurrentZoomNumber(pathname)).toEqual(3)
  })

  it('should return 2 if pathname includes "landingpage"', () => {
    const pathname = '/example/landingpage'
    expect(getCurrentZoomNumber(pathname)).toEqual(2)
  })

  it('should return 1 if pathname is undefined', () => {
    expect(getCurrentZoomNumber()).toEqual(1)
  })

  it('should return 1 if pathname does not include "detail" or "landingpage"', () => {
    const pathname = '/example'
    expect(getCurrentZoomNumber(pathname)).toEqual(1)
  })
})
