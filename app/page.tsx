import Hero from "@/components/hero";
import BlurFadeText from "@/components/animation/blur-fade-text";
import BlurFade from "@/components/animation/blur-fade";
import { IconMapPin, IconBuildingBank } from "@tabler/icons-react";
import DATA from "@/lib/data";
import Nav from "@/components/nav";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.1;

const links = [{ href: "/blog", label: "Blog" }];

export default function Home() {
  return (
    <>
      <Hero>
        <h1>
          <BlurFadeText
            animateByCharacter
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-extrabold tracking-tight text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]"
            yOffset={8}
            text={DATA.site.title}
          />
        </h1>
        <div className="max-w-lg">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 5}
            className="mt-8 space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl"
            yOffset={8}
            text={DATA.site.description}
          />
        </div>
        <div className="pt-12 space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <span className="flex gap-2">
              <IconMapPin /> Cardiff, Wales
            </span>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <span className="flex gap-2">
              <IconBuildingBank /> Principal Software Engineer
            </span>
          </BlurFade>
        </div>
      </Hero>

      <div>
        <div className="sticky top-0 self-center">
          <Nav>
            <span className="font-bold">
              <Link
                href={"/"}
                style={{ textDecoration: "none" }}
                className="flex items-center justify-center w-6 h-6 p-4 font-mono [&>*]:no-underline border rounded-md border-white/5 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              >
                ~
              </Link>
            </span>

            <div>
              {links.map((link) => (
                <Link
                  key={`nav-link-${link.label}`}
                  href={link.href}
                  className="flex justify-center text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Nav>
        </div>

        <div className="h-full flex flex-col">
          <main className="mx-auto max-w-7xl w-full px-6">Hello, world!</main>
        </div>
      </div>
    </>
  );
}
