import RouteList from "@/components/routeList"
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
    <main style={{ padding: "40px" }}>
      <h1>Search results</h1>

      <p>
        <strong>From:</strong> {from}
      </p>

      <p>
        <strong>To:</strong> {to}
      </p>

      <p>
        <strong>Date:</strong> {date}
      </p>

      <RouteList routes={routes} />
    </main>
  )
}