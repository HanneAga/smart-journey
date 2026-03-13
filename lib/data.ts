import { RouteItem } from "@/lib/types"

const routes: RouteItem[] = [
  {
    id: "1",
    from: "Bergen",
    to: "Hirtshals",
    date: "2026-03-20",
    departureTime: "08:00",
    arrivalTime: "12:30",
    price: 899,
    seatsLeft: 12,
  },
  {
    id: "2",
    from: "Bergen",
    to: "Hirtshals",
    date: "2026-03-20",
    departureTime: "12:00",
    arrivalTime: "16:30",
    price: 699,
    seatsLeft: 4,
  },
  {
    id: "3",
    from: "Bergen",
    to: "Hirtshals",
    date: "2026-03-20",
    departureTime: "18:30",
    arrivalTime: "23:00",
    price: 1099,
    seatsLeft: 20,
  },
  {
    id: "4",
    from: "Stavanger",
    to: "Hirtshals",
    date: "2026-03-20",
    departureTime: "09:15",
    arrivalTime: "13:45",
    price: 799,
    seatsLeft: 8,
  },
]

export async function getRoutes(from: string, to: string, date: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return routes.filter(
    (route) =>
      route.from.toLowerCase() === from.toLowerCase() &&
      route.to.toLowerCase() === to.toLowerCase() &&
      route.date === date
  )
}