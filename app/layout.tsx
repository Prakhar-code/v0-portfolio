import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prakhar Kabra',
  description: 'Prakhar Kabra is a software engineer with a passion for building modern web applications.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
