import { maxVowels } from "./1456"

describe('1456', () => {
  it('works on example 1', () => {
    expect(maxVowels('abciiidef', 3)).toBe(3)
  })

  it('works on example 2', () => {
    expect(maxVowels('aeiou', 2)).toBe(2)
  })

  it('works on example 3', () => {
    expect(maxVowels('leetcode', 3)).toBe(2)
  })

  it('works on example 4', () => {
    expect(maxVowels('rhythms', 4)).toBe(0)
  })

  it('works on example 5', () => {
    expect(maxVowels('tryhard', 4)).toBe(1)
  })

  it('works on example 101', () => {
    expect(maxVowels('ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33)).toBe(7)
  })
})

