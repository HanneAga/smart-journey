import "./globals.css"
import type { Metadata } from "next"

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
      <body className="bg-gray-100 text-gray-900">
        <div className="mx-auto max-w-4xl p-6">
          {children}
        </div>
      </body>
    </html>
  )
}