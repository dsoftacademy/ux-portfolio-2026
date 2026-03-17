import { Button } from "@/components/Button"
import { urlFor } from "@/sanity/lib/image"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type ProjectCardProps = {
  title: string
  category: string
  description: string
  href?: string
  image?: SanityImageSource
}

export function ProjectCard({
  title,
  category,
  description,
  href = "/projects",
  image,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:border-zinc-300">
      <div className="aspect-video w-full overflow-hidden rounded-b-none bg-gradient-to-br from-zinc-100 to-zinc-200">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlFor(image).width(800).height(450).fit("crop").url()}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-lg font-bold tracking-tight text-brand-primary">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
            {category}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>

        <div className="mt-5">
          <Button href={href ?? "/projects"} variant="secondary">
            View case study
          </Button>
        </div>
      </div>
    </article>
  )
}

