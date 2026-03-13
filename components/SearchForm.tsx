"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchForm() {
  const router = useRouter()

  const [from, setFrom] = useState("Bergen")
  const [to, setTo] = useState("Hirtshals")
  const [date, setDate] = useState("2026-03-20")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const query = new URLSearchParams({
      from,
      to,
      date,
    })

    router.push(`/search?${query.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="to">To</label>
        <input
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Search trips</button>
    </form>
  )
}