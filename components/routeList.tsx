import PriceFilter from "@/components/PriceFilter"
import { RouteItem } from "@/lib/types"

type RouteListProps = {
  routes: RouteItem[]
}

export default function RouteList({ routes }: RouteListProps) {
  return <PriceFilter routes={routes} />
}