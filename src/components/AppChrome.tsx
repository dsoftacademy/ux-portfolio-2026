"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Nav } from "@/components/Nav"

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname === "/studio" || pathname.startsWith("/studio/")

  if (isStudio) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer className="border-t border-zinc-200/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-8 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Pratishek Bansal</p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="font-medium text-zinc-600 hover:text-zinc-900"
            >
              Contact
            </Link>
            <Link
              href="/studio"
              className="text-xs text-zinc-400 hover:text-zinc-700"
            >
              Admin
            </Link>
            <p className="text-zinc-500">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  )
}

