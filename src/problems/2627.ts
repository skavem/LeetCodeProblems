type F = (...p: any[]) => any

export function debounce(fn: F, t: number): F {
  let timeout: NodeJS.Timeout | null = null
  return function(...args) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(...args)
      timeout = null
    }, t)
  }
}

