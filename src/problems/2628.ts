export function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) return true
  if (o1 === null || o2 === null) return false
  if (typeof o1 === 'object' && typeof o2 === 'object') {
    if (Object.getPrototypeOf(o1) !== Object.getPrototypeOf(o2)) return false
    const keys1 = Object.keys(o1)
    const keys2 = Object.keys(o2)
    if (keys1.length !== keys2.length) return false
    for (const key of keys1) {
      if (!areDeeplyEqual(o1[key], o2[key])) return false
    }
    return true
  }
  return false
};