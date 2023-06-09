import { useRef } from 'react'

export function useDebounce(callback: (...args: any[]) => void, delay = 500) {
  const timeoutIdRef = useRef<number | null>(null)

  return (...args: any[]) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
