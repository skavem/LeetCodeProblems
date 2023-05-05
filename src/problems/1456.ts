export function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let maxVowels = 0
  let curVowels = 0
  let start = 0

  for (let end = 0; end < s.length; end++) {
    if (vowels.has(s[end])) curVowels++

    if (end - start === k - 1) {
      maxVowels = Math.max(maxVowels, curVowels)
      if (vowels.has(s[start])) curVowels--
      start++
    }
  }

  return maxVowels
}
