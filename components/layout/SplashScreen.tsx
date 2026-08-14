"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const readyRef = useRef(false);

  // Mark the page as actually ready once it finishes loading.
  useEffect(() => {
    function onLoad() {
      readyRef.current = true;
    }
    if (document.readyState === "complete") {
      readyRef.current = true;
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // Drive the counter: ease up toward 90% on its own, then race to 100%
  // once the page is actually ready, so the number always means something.
  useEffect(() => {
    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      setProgress((prev) => {
        if (readyRef.current) {
          const next = prev + (100 - prev) * 0.15 + 1.5;
          return next >= 99.3 ? 100 : next;
        }
        const eased = 92 * (1 - Math.exp(-elapsed / 1200));
        return Math.max(prev, eased);
      });
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const displayProgress = Math.round(progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-10 bg-navy-950"
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 h-44 w-44 sm:h-60 sm:w-60"
          >
            <Image
              src="/images/logo.png"
              alt="RSS Contracting"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="relative z-10 flex w-72 flex-col items-center gap-4 sm:w-96">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-navy-400 via-gold-400 to-gold-500"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <span className="text-2xl font-bold tabular-nums tracking-wide text-white">
              {displayProgress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
