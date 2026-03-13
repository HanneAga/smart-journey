"use client"

import AiSuggestion from "@/components/AiSuggestion"
import { useMemo, useState } from "react"
import { RouteItem } from "@/lib/types"

type PriceFilterProps = {
  routes: RouteItem[]
}

export default function PriceFilter({ routes }: PriceFilterProps) {
  const [maxPrice, setMaxPrice] = useState(1500)

  const filteredRoutes = useMemo(() => {
    return routes.filter((route) => route.price <= maxPrice)
  }, [routes, maxPrice])

  return (
    <section className="mt-6">
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <label htmlFor="maxPrice" className="block font-medium">
          Max price: {maxPrice} NOK
        </label>

        <input
          id="maxPrice"
          type="range"
          min="500"
          max="1500"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-3 w-full"
        />
      </div>

      <AiSuggestion routes={filteredRoutes} />

      <div className="grid gap-4 md:grid-cols-2">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route) => (
            <article
              key={route.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                {route.from} → {route.to}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Departure: {route.departureTime}
              </p>

              <p className="text-sm text-gray-600">
                Arrival: {route.arrivalTime}
              </p>

              <p className="mt-3 font-medium">{route.price} NOK</p>

              <p className="text-sm text-gray-500">
                Seats left: {route.seatsLeft}
              </p>
            </article>
          ))
        ) : (
          <p className="text-gray-600">
            No routes found for this price range.
          </p>
        )}
      </div>
    </section>
  )
}