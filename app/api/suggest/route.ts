import { NextRequest, NextResponse } from "next/server"
import { RouteItem } from "@/lib/types"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const routes: RouteItem[] = body.routes ?? []

  if (!routes.length) {
    return NextResponse.json({
      suggestion: "No routes available.",
    })
  }

  const cheapest = [...routes].sort((a, b) => a.price - b.price)[0]

  return NextResponse.json({
    suggestion: `Best option: ${cheapest.from} to ${cheapest.to} at ${cheapest.departureTime}. Price: ${cheapest.price} NOK.`,
  })
}
