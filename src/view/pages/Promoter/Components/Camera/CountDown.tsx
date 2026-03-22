import { useEffect, useState } from "react"

interface ICountdownProps {
  seconds: number
  onFinish: () => void
}

export function Countdown({ seconds, onFinish }: ICountdownProps) {
  const [count, setCount] = useState(seconds)

  useEffect(() => {
    if (count === 0) {
      onFinish()
      return
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, onFinish])

  return (
    <div className="absolute inset-0 flex items-center justify-center text-6xl">
      <p className="text-black dark:text-white">{count}</p>
    </div>
  )
}
