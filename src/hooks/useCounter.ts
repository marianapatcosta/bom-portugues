import { useEffect, useState, useMemo } from 'react'

export const useCounter = (): number => {
  const today: Date = useMemo(() => new Date(), [])
  const tomorrow: Date = useMemo(() => new Date(today), [today])
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  const [counter, setCounter] = useState<number>(
    tomorrow.getTime() - new Date().getTime()
  )

  useEffect(() => {
    const differenceInMilliseconds: number =
      tomorrow.getTime() - new Date().getTime()
    const timerId: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (differenceInMilliseconds <= 0) {
        return () => clearTimeout(timerId)
      }
      setCounter(differenceInMilliseconds)
    }, 1000)
    return () => clearTimeout(timerId)
  }, [counter, tomorrow])

  return counter
}
