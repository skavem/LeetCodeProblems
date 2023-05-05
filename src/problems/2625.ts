type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export const flat = (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray => {
  for (let i = 0; i < n; i++) {
    let hasArrays = false
    let newArr: MultiDimensionalArray = []
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        hasArrays = true
        newArr.push(...val)
      } else {
        newArr.push(val)
      }
    })

    arr = newArr
    if (!hasArrays) break
  }
  
  return arr
}

