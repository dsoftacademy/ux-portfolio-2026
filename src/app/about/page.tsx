import { Section } from "@/components/Section"

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="Background"
        title="About"
      >
        <p>
          I’m Pratishek Bansal, a UX/UI Design Lead who helps product teams ship
          interfaces that feel clear, considered, and calm—even when the
          underlying systems are complex.
        </p>
        <p className="mt-4">
          I focus on turning ambiguous product problems into structured,
          testable flows, pairing strong interaction design with systems thinking
          and thoughtful visual craft. Recent work has included mobile
          experiences, analytics dashboards, and design systems that scale across
          teams and platforms.
        </p>
      </Section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Clarity first",
                detail:
                  "Structure, hierarchy, and language that reduce cognitive load.",
              },
              {
                title: "Accessible by default",
                detail:
                  "Design for contrast, keyboard, and assistive tech from the start.",
              },
              {
                title: "Ship + learn",
                detail:
                  "Prototype quickly, validate, then iterate with measurable outcomes.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <p className="text-sm font-semibold text-zinc-950">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

