"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { clamp } from "@/lib/utils";

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious() ?? 0;
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Nav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let { scrollYBoundedProgress } = useBoundedScroll(200);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="mx-auto flex w-full flex-1 overflow-hidden text-slate-600 z-[999] mb-20">
      <div className="z-0 flex-1">
        <motion.header
          style={{
            backgroundColor: useMotionTemplate`rgb(${"37 43 61"} / ${useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0.33]
            )})`,
          }}
          className="flex h-20 shadow backdrop-blur-md"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
            <div className="flex items-center w-full">
              <div className="space-x-10 border-r border-neutral-900/10 dark:border-white/10 py-0.5 w-full">
                <motion.nav
                  style={{
                    opacity: useTransform(
                      scrollYBoundedProgressDelayed,
                      [0, 1],
                      [1, 0.5]
                    ),
                  }}
                  className="flex items-center justify-between"
                >
                  {children}
                </motion.nav>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
