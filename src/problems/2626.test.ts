import { reduce } from "./2626"

describe('main', () => {
  it('should return 10 on nums = [1,2,3,4] fn = function sum(accum, curr) { return accum + curr; } init = 0', () => {
    expect(reduce([1,2,3,4], (a, c) => a + c, 0)).toBe(10)
  })
  
  it('should return 10 on nums = [1,2,3,4] fn = function sum(accum, curr) { return accum + curr * curr; } init = 100', () => {
    expect(reduce([1,2,3,4], (a, c) => a + c * c, 100)).toBe(130)
  })

  it('should return 10 on nums = [] fn = function sum(accum, curr) { return 0; } init = 25', () => {
    expect(reduce([], (a, c) => 0, 25)).toBe(25)
  })
})