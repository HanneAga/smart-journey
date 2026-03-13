"use client"

import { useState } from "react"
import { RouteItem } from "@/lib/types"

type Props = {
  routes: RouteItem[]
}

export default function AiSuggestion({ routes }: Props) {
  const [suggestion, setSuggestion] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    setSuggestion("")

    const response = await fetch("/api/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ routes }),
    })

    const data = await response.json()
    setSuggestion(data.suggestion)
    setLoading(false)
  }

  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            AI trip suggestion
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Get a simple recommendation based on the available routes.
          </p>
        </div>

        <button
          onClick={handleClick}
          disabled={loading || routes.length === 0}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {loading ? "Thinking..." : "Suggest best route"}
        </button>
      </div>

      {suggestion && (
        <div className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-gray-800">
          <span className="font-semibold">Suggestion:</span> {suggestion}
        </div>
      )}
    </div>
  )
}