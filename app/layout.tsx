import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Journey",
  description: "A small Next.js App Router portfolio project.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}