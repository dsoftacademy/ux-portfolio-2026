"use client"

import * as React from "react"
import { Button } from "@/components/Button"
import { SectionWrapper } from "@/components/SectionWrapper"
import { H1 } from "@/components/Typography"

export default function ContactPage() {
  const [success, setSuccess] = React.useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <div className="bg-surface">
      <section className="py-12">
        <SectionWrapper>
          <p className="text-sm font-medium text-zinc-600">Let’s work together</p>
          <H1 className="mt-3">Contact</H1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            Send a quick note and I’ll get back to you. (This form is a
            placeholder—submission is not wired to an email service yet.)
          </p>
        </SectionWrapper>
      </section>

      <section className="pb-16">
        <SectionWrapper>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-10">
            {success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-900">
                  Message sent
                </p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                  Thanks for reaching out — I’ll reply soon.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => setSuccess(false)}
                  >
                    Send another
                  </Button>
                  <Button href="mailto:pratishek.designs@gmail.com">
                    Email directly
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-brand-primary">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-brand-primary placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-brand-primary">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-brand-primary placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-brand-primary">
                    Subject
                  </span>
                  <input
                    name="subject"
                    required
                    className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-brand-primary placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                    placeholder="What can I help with?"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-brand-primary">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="resize-y rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-brand-primary placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                    placeholder="Tell me a bit about the project, scope, timeline, and what success looks like."
                  />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit">Send Message</Button>
                  <Button
                    href="mailto:pratishek.designs@gmail.com"
                    variant="secondary"
                  >
                    Or email me
                  </Button>
                </div>
              </form>
            )}
          </div>
        </SectionWrapper>
      </section>
    </div>
  )
}

