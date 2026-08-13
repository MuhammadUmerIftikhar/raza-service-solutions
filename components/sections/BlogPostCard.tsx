import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-950/5"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
        {post.category}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-950">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-navy-600">{post.excerpt}</p>
      <div className="mt-5 flex items-center gap-4 border-t border-navy-100 pt-4 text-xs text-navy-500">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {post.readingTime}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 font-semibold text-gold-600">
          Read
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
