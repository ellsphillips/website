"use client";

import { Rain } from "@/components/animation/rain";
import Image from "next/image";

import BlurFade from "@/components/animation/blur-fade";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <Rain>
      <section className="relative flex min-w-full flex-col border-b-2 border-sky-200 ">
        <div className="absolute bg-[rgb(18,22,36)] inset-0 -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 min-h-full max-w-[1280px] lg:bottom-auto lg:left-auto lg:right-0">
              <div className="flex items-center aspect-square -translate-y-16 xl:-translate-y-48">
                <BlurFade yOffset={12} delay={0.25} duration={0.75}>
                  <Image
                    src="/images/home.jpg"
                    alt="home hero image"
                    quality={100}
                    priority
                    width={2560}
                    height={1440}
                    style={{}}
                    className="size-full min-h-[48rem] -translate-x-32 sm:translate-x-0 overflow-visible rounded-lg object-cover md:-translate-y-36 lg:-translate-y-48 w-full -scale-x-100 brightness-[.75] lg:brightness-100"
                  />
                </BlurFade>
              </div>
              <div className="absolute -inset-px bg-slate-900/50" />
              <div className="absolute -inset-px bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="relative flex justify-center overflow-hidden">
              <BlurFade yOffset={0}>
                <Image
                  alt=""
                  fetchPriority="high"
                  width="2560"
                  height="1440"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-none animate-fade-in delay-200"
                  style={{ color: "transparent" }}
                  src="/images/glow-desktop.webp"
                />
              </BlurFade>
            </div>
          </div>
        </div>

        <div className="mb-12 mt-64 border-white/[.03] md:mt-28 lg:my-28 lg:border-y lg:py-2">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-12">
            {children}
          </div>
        </div>
      </section>
    </Rain>
  );
}
