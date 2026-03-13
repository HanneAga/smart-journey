export default function Loading() {
  return (
    <main className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Search results
        </p>
        <h1 className="text-3xl font-bold text-gray-900">Loading trips...</h1>
        <p className="text-gray-600">
          Fetching available ferry departures.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
        <div className="mt-4 h-10 w-full animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </main>
  )
}