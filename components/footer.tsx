import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import DATA from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-500/20 bg-slate-100 py-10 dark:border-slate-700/50 dark:bg-slate-950">
      <div className="flex flex-col justify-between mx-auto max-w-7xl w-full px-6 gap-y-5 md:flex-row  md:items-center md:px-10">
        <div className="flex flex-col items-start justify-start gap-y-3.5">
          <Link href="/" className="flex items-center gap-x-2.5">
            <Avatar>
              <AvatarImage asChild src="/author.jpeg">
                <Image
                  src="/author.jpeg"
                  alt="author"
                  width={100}
                  height={100}
                />
              </AvatarImage>
              <AvatarFallback>EP</AvatarFallback>
            </Avatar>

            <span className="text-xl font-bold text-neutral-900 dark:text-white">
              {DATA.site.title}
            </span>
          </Link>
          <p className="text-neutral-900 dark:text-white max-w-sm">
            {DATA.site.description}
          </p>
        </div>

        <div className="flex flex-col gap-y-5 md:items-end">
          <div className="flex items-center gap-x-4">
            {DATA.socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                aria-label={`Elliott's ${social.label}`}
                className="flex h-6 w-6 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
              >
                <social.icon />
              </Link>
            ))}
          </div>
          <p className="text-sm text-neutral-900 dark:text-white">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
