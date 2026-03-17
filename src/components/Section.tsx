import type { ReactNode } from "react"

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-5">
        {eyebrow ? (
          <p className="text-sm font-medium text-zinc-600">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-700">
          {children}
        </div>
      </div>
    </section>
  )
}

