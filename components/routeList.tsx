import PriceFilter from "@/components/pricefilter"
import { RouteItem } from "@/lib/types"

type RouteListProps = {
  routes: RouteItem[]
}

export default function RouteList({ routes }: RouteListProps) {
  return <PriceFilter routes={routes} />
}