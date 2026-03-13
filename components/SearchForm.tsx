"use client"

import { useState } from "react"

export default function SearchForm() {
  const [from, setFrom] = useState("Bergen")
  const [to, setTo] = useState("Hirtshals")
  const [date, setDate] = useState("2026-03-20")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ from, to, date })
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