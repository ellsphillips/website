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
import Link from "next/link";
import DATA from "@/lib/data";
import { Button } from "./ui/button";

const pages = [{ href: "/blog", label: "Blog" }];

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

export default function Nav() {
  let { scrollYBoundedProgress } = useBoundedScroll(400);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="mx-auto flex w-full flex-1 overflow-hidden text-slate-600 z-[999] mb-8">
      <div className="flex-1">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [80, 60]
            ),
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
              <div className="space-x-10 py-0.5 w-full">
                <nav className="flex items-center justify-between">
                  <motion.div
                    style={{
                      scale: useTransform(
                        scrollYBoundedProgressDelayed,
                        [0, 1],
                        [1, 0.85]
                      ),
                    }}
                  >
                    <Link href="/">
                      <div
                        className="block bg-gradient-to-r from-sky-500/90 to-emerald-500/90 w-8 h-8 rounded-[2px] transition border border-transparent hover:scale-110 -z-50"
                        style={{
                          scale: +useTransform(
                            scrollYBoundedProgressDelayed,
                            [0, 1],
                            [1, 0.5]
                          ),
                        }}
                      />
                      <span className="sr-only">{DATA.site.url}</span>
                    </Link>
                  </motion.div>

                  <div className="flex items-center gap-8">
                    <motion.div
                      className="space-x-2"
                      style={{
                        scale: useTransform(
                          scrollYBoundedProgressDelayed,
                          [0, 1],
                          [1, 0.85]
                        ),
                      }}
                    >
                      {DATA.socials.map((social) => (
                        <Button
                          key={`social-${social.label}`}
                          variant="outline"
                          className="bg-slate-900/50 p-2 hover:bg-slate-700/50"
                        >
                          <Link href={social.href}>
                            <social.icon />
                          </Link>
                        </Button>
                      ))}
                    </motion.div>

                    {pages.map((page) => (
                      <Link
                        key={`nav-link-${page.label}`}
                        href={page.href}
                        className="flex justify-center text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}
