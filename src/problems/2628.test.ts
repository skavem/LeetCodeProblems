import { areDeeplyEqual } from "./2628"

describe('main', () => {
  it('works on example 1', () => {
    expect(areDeeplyEqual({x: 1, y: 2}, {x: 1, y: 2})).toBe(true)
  })

  it('works on example 2', () => {
    expect(areDeeplyEqual({x: 1, y: 2}, {y: 2, x: 1})).toBe(true)
  })

  it('works on example 3', () => {
    expect(areDeeplyEqual(
      {"x":null,"L":[1,2,3]},
      {"x":null,"L":["1","2","3"]}
    )).toBe(false)
  })

  it('works on example 4', () => {
    expect(areDeeplyEqual(true, false)).toBe(false)
  })

  it('works for example 45', () => {
    expect(areDeeplyEqual({0: 1}, [1])).toBe(false)
  })

  it('works for different keys', () => {
    expect(areDeeplyEqual({x: 1, y: 2}, {x: 1, z: 2})).toBe(false)
  })

  it('works for symbolic keys', () => {
    const s = Symbol('1')
    expect(areDeeplyEqual({x: 1, [s]: 2}, {x: 1, [s]: 2})).toBe(true)
  })
})