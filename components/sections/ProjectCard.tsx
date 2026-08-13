import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5"
    >
      <ImagePlaceholder
        label={project.imageLabel}
        src={project.heroImage}
        aspect="aspect-[16/10]"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium text-navy-500">
          <MapPin className="h-3.5 w-3.5 text-gold-600" aria-hidden />
          {project.location}
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug text-navy-950">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-navy-600 line-clamp-2">
          {project.summary}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-navy-500">
          <span className="font-medium">{project.client}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-gold-600">
            Case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
