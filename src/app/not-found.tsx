import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-medium text-zinc-600">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600">
          This page doesn’t exist (yet). Head back home or browse projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

