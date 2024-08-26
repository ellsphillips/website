"use client";

import { Rain } from "@/components/rain";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-w-full flex-col border-b-2 border-sky-200 ">
      <div className="absolute bg-[rgb(18,22,36)] inset-0 -z-10"></div>
      <div className="absolute inset-0 -z-10 lg:-top-36">
        <div>
          <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:left-auto lg:right-0 lg:w-[80%]">
            <div className="flex items-center aspect-video">
              <Image
                src="/images/home.jpg"
                alt="home hero image"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
                className="absolute top-0 left-0 w-full h-full object-cover -scale-x-100"
              />
            </div>
            <div className="absolute -inset-px bg-slate-900/50"></div>
            <div className="absolute -inset-px hidden bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block"></div>
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
            Elliott Phillips
          </h1>
          <div className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl">
            <p>
              Software Engineer who values learning and growing with people,
              teams, and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
