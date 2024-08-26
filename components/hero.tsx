"use client";

import { Rain } from "@/components/animation/rain";
import { siteMetadata } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <Rain>
      <section className="relative flex min-w-full flex-col border-b-2 border-sky-200 ">
        <div className="absolute bg-[rgb(18,22,36)] inset-0 -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:left-auto lg:right-0 lg:w-[80%]">
              <div className="flex items-center aspect-square -translate-y-16 xl:-translate-y-36 2xl:-translate-y-64">
                <Image
                  src="/images/home.jpg"
                  alt="home hero image"
                  objectFit="cover"
                  quality={100}
                  priority
                  layout="responsive"
                  width={2560}
                  height={1440}
                  className="absolute top-0 left-0 w-full min-h-[28rem] object-cover -scale-x-100"
                />
              </div>
              <div className="absolute -inset-px bg-slate-900/50" />
              <div className="absolute -inset-px hidden bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block" />
            </div>
            <div className="relative flex justify-center overflow-hidden">
              <Image
                alt=""
                fetchPriority="high"
                width="2560"
                height="1440"
                decoding="async"
                data-nimg="1"
                className="hidden max-w-none lg:block lg:animate-fade-in delay-200"
                style={{ color: "transparent" }}
                src="/images/glow-desktop.webp"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 mt-64 border-white/[.03] md:mt-28 lg:my-28 lg:border-y lg:py-2">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]">
              {siteMetadata.title}
            </h1>
            <div className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
              <p>{siteMetadata.description}</p>
            </div>
          </div>
        </div>
      </section>
    </Rain>
  );
}
