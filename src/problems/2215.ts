export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    [...set1].filter(x => !set2.has(x)),
    [...set2].filter(x => !set1.has(x)),
  ]
}