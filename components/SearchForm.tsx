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
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label
            htmlFor="from"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            From
          </label>
          <input
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="to"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            To
          </label>
          <input
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search trips
      </button>
    </form>
  )
}