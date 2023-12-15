import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from "@/ui/components/NavBar"
import { NAMUFont } from "@/ui/styles/Font"

export const metadata: Metadata = {
  title: 'Schedulefy',
  description: 'Schedule your time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={NAMUFont.className + " w-full h-full px-5 py-2 flex"}>
        <NavBar></NavBar>
        <main className="w-full h-full ml-2">
          {children}
        </main>
      </body>
    </html>
  )
}
