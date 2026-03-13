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
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <label
          htmlFor="maxPrice"
          className="block text-sm font-semibold text-gray-800"
        >
          Max price: {maxPrice} NOK
        </label>

        <p className="mt-1 text-sm text-gray-600">
          Use the slider to filter routes by price.
        </p>

        <input
          id="maxPrice"
          type="range"
          min="500"
          max="1500"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-4 w-full"
        />
      </div>

      <AiSuggestion routes={filteredRoutes} />

      <div className="grid gap-4 md:grid-cols-2">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route) => (
            <article
              key={route.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {route.from} → {route.to}
                </h3>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {route.price} NOK
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-800">Departure:</span>{" "}
                  {route.departureTime}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Arrival:</span>{" "}
                  {route.arrivalTime}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Seats left:</span>{" "}
                  {route.seatsLeft}
                </p>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-gray-600">
            No routes found for this price range.
          </div>
        )}
      </div>
    </section>
  )
}