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
    <div style={{ marginBottom: "24px" }}>
      <button onClick={handleClick} disabled={loading || routes.length === 0}>
        {loading ? "Thinking..." : "Suggest best route"}
      </button>

      {suggestion && (
        <p style={{ marginTop: "12px" }}>
          <strong>Suggestion:</strong> {suggestion}
        </p>
      )}
    </div>
  )
}