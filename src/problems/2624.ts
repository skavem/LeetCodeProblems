interface Array<T> {
  snail(rowsCount: number, colsCount: number): number[][];
}

Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
  if (rowsCount * colsCount !== this.length) return []

  const retArr = Array(rowsCount).fill(null).map(() => Array(colsCount).fill(null))

  let goDown = false
  let curCol = -1

  for (let i = 0; i < this.length; i++) {
    if ((i % rowsCount) === 0) {
      curCol++
      goDown = !goDown
    }
    
    retArr[goDown ? (i % rowsCount) : (rowsCount - 1 - (i % rowsCount))][curCol] = this[i]
  }

  return retArr
}