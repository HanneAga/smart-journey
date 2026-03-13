import SearchForm from "@/components/SearchForm"

export default function HomePage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Smart Journey</h1>
      <p>A Next.js App Router demo project.</p>

      <div style={{ marginTop: "24px" }}>
        <SearchForm />
      </div>
    </main>
  )
}