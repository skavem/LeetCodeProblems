import './2624'

describe('main', () => {
  it('outputs empty array on invalid input', () => {
    const nums = [1, 2, 3]
    const rowsCount = 2
    const colsCount = 2
    expect(nums.snail(rowsCount, colsCount)).toEqual([])
  })

  it('should return snail tail', () => {
    const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
    const rowsCount = 5
    const colsCount = 4
    expect(nums.snail(rowsCount, colsCount)).toEqual(
      [
        [19,17,16,15],
        [10,1,14,4],
        [3,2,12,20],
        [7,5,18,11],
        [9,8,6,13]
       ]       
    )
  })
  
  it('should return snail tail 2', () => {
    const nums = [1,2,3,4]
    const rowsCount = 1
    const colsCount = 4
    expect(nums.snail(rowsCount, colsCount)).toEqual(
      [[1, 2, 3, 4]]      
    )
  })
})