import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Smart Journey",
  description: "A Next.js App Router demo project.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900">
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Smart Journey
            </Link>

            <p className="text-sm text-gray-500">Ferry Search Demo</p>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            {children}
          </div>
        </main>

        <footer className="mt-10 border-t border-gray-200 bg-white/80">
          <div className="mx-auto max-w-5xl px-6 py-4 text-sm text-gray-500">
          I like ferries! Do you like ferries? Book your next trip with smart-journey and enjoy the ride. Smart journey captain: Hanne Aga.          </div>
        </footer>
      </body>
    </html>
  )
}