import RouteList from "@/components/RouteList"
import { getRoutes } from "@/lib/data"

type SearchPageProps = {
  searchParams: Promise<{
    from?: string
    to?: string
    date?: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams

  const from = params.from ?? ""
  const to = params.to ?? ""
  const date = params.date ?? ""

  const routes = await getRoutes(from, to, date)

  return (
    <main>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Search results
      </p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
        {from} → {to}
      </h1>

      <p className="mt-2 text-gray-600">{date}</p>

      <RouteList routes={routes} />
    </main>
  )
}