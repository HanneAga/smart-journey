import SearchForm from "@/components/SearchForm"

export default function HomePage() {
  return (
    <main>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Next.js App Router demo
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
        Smart Journey
      </h1>

      <p className="mt-3 max-w-2xl text-lg text-gray-600">
        Search ferry routes, compare options, and get a simple AI-style trip
        suggestion in a small modern web app built with Next.js.
      </p>

      <SearchForm />
    </main>
  )
}