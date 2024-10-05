"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion"
import { useEffect } from "react"
import { clamp, cn } from "@/lib/utils"
import Link from "next/link"
import DATA from "@/lib/data"

const pages = [{ href: "/blog", label: "Blog" }]

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll()
  let scrollYBounded = useMotionValue(0)
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1],
  )

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious() ?? 0
      let diff = current - previous
      let newScrollYBounded = scrollYBounded.get() + diff

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold))
    })
  }, [threshold, scrollY, scrollYBounded])

  return { scrollYBounded, scrollYBoundedProgress }
}

interface NavProps extends React.ComponentProps<"div"> {}

export default function Nav({ className, ...rest }: NavProps) {
  let { scrollYBoundedProgress } = useBoundedScroll(400)
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  )

  return (
    <div className="mx-auto flex w-full flex-1 overflow-hidden text-slate-600 z-[999] mb-8">
      <div className="flex-1">
        <motion.header
          style={{
            backgroundColor: useMotionTemplate`rgb(${"37 43 61"} / ${useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0.33],
            )})`,
          }}
          className="flex h-16 shadow backdrop-blur-md"
        >
          <div
            className={cn(
              "mx-auto flex w-full items-center justify-between px-4 md:px-6",
              className,
            )}
          >
            <div className="flex items-center w-full">
              <div className="space-x-10 py-0.5 w-full">
                <nav className="flex items-center justify-between">
                  <Link href="/">
                    <div className="block bg-gradient-to-r from-sky-500/90 to-emerald-500/90 w-8 h-8 rounded-[2px] transition border border-transparent hover:scale-110 -z-50" />
                    <span className="sr-only">{DATA.site.url}</span>
                  </Link>

                  <div className="flex items-center gap-8">
                    {pages.map((page) => (
                      <Link
                        key={`nav-link-${page.label}`}
                        href={page.href}
                        className="flex justify-center text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors"
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
  )
}
