import Link from "next/link"
import { Section } from "@/components/Section"

export const metadata = {
  title: "Projects",
}

export default function ProjectsPage() {
  return (
    <div>
      <Section
        eyebrow="Selected work"
        title="Projects"
      >
        <p>
          A few recent case studies and explorations. Replace the placeholders
          with real project writeups as you add them.
        </p>
      </Section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Checkout redesign",
                tags: ["E-commerce", "Usability", "Conversion"],
              },
              {
                title: "B2B analytics IA",
                tags: ["Information architecture", "Navigation", "Systems"],
              },
              {
                title: "Design system refresh",
                tags: ["Tokens", "Components", "Documentation"],
              },
              {
                title: "Mobile onboarding",
                tags: ["Activation", "Experimentation", "Content"],
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-zinc-200 p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-950">
                    {p.title}
                  </h2>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    Placeholder
                  </span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  Add a short problem statement, constraints, and outcomes.
                  Include your role and what you shipped.
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 p-6">
            <p className="text-sm font-medium text-zinc-950">Next up</p>
            <p className="mt-2 text-sm text-zinc-600">
              Want a one-page case study template to drop in here?{" "}
              <Link
                href="/contact"
                className="font-medium text-zinc-900 underline underline-offset-4"
              >
                Ask me
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

