"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Clock() {
  const [time, setTime] = useState<string | null>(null)
  const timezone = "(GMT+5:30)"
  const location = "Vadodara,India"
  const gmtOffset = "GMT+5:30"

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(formatted)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Link
      href="https://www.google.com/search?q=time"
      target="_blank"
      className="hover:text-white text-gray-500 dark:text-[#CCCCCC] font-semibold transition-colors"
    >
      {time === null ? (
        <span className="tracking-widest text-sm">-- : -- : -- </span>
      ) : (
        <span className="text-sm">
          {time} ({gmtOffset}) {location}
        </span>
      )}
    </Link>
  )
}