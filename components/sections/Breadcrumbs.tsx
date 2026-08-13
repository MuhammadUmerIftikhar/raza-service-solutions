import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-navy-300">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
            {isLast ? (
              <span className="font-medium text-white" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-gold-300">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
