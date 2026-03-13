"use client"

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
    <section style={{ marginTop: "24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="maxPrice">
          Max price: <strong>{maxPrice} NOK</strong>
        </label>

        <input
          id="maxPrice"
          type="range"
          min="500"
          max="1500"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{ display: "block", width: "100%", marginTop: "12px" }}
        />
      </div>

      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route) => (
          <article
            key={route.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>
              {route.from} → {route.to}
            </h3>
            <p>Departure: {route.departureTime}</p>
            <p>Arrival: {route.arrivalTime}</p>
            <p>Price: {route.price} NOK</p>
            <p>Seats left: {route.seatsLeft}</p>
          </article>
        ))
      ) : (
        <p>No routes found for this price range.</p>
      )}
    </section>
  )
}