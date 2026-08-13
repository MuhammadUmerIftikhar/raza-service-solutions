"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export function PreviewableImage({
  src,
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  src: string;
  label: string;
  aspect?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Preview: ${label}`}
        className={`group relative block ${aspect} w-full overflow-hidden rounded-2xl ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-navy-950/0 opacity-0 transition-all duration-200 group-hover:bg-navy-950/40 group-hover:opacity-100">
          <ZoomIn className="h-6 w-6 text-white" aria-hidden />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close preview"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={label} fill sizes="90vw" className="object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 max-w-2xl -translate-x-1/2 px-4 text-center text-sm text-navy-200">
            {label}
          </p>
        </div>
      )}
    </>
  );
}
