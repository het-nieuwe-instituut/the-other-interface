import { capitalizeFirstLetter } from './text'

describe('text', () => {
  it('should run capitalizeFirstLetter correctly ', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test')
    expect(capitalizeFirstLetter('testTest')).toBe('TestTest')
    expect(capitalizeFirstLetter('TestTest')).toBe('TestTest')
  })
})
