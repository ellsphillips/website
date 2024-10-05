import Hero from "@/components/hero"
import BlurFadeText from "@/components/animation/blur-fade-text"
import BlurFade from "@/components/animation/blur-fade"
import { IconMapPin, IconBuildingBank } from "@tabler/icons-react"
import DATA from "@/lib/data"
import Nav from "@/components/nav"
import { Resume } from "@/components/resume"
import Welcome from "@/components/welcome"
import { BLUR_FADE_DELAY } from "@/lib/constants"

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
              <IconBuildingBank /> Software Engineer
            </span>
          </BlurFade>
        </div>
      </Hero>

      <main>
        <div className="sticky top-0 self-center z-[999]">
          <Nav className="px-6 max-w-7xl" />
        </div>

        <div className="mx-auto max-w-7xl w-full px-6 space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Welcome />
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <Resume data={DATA.resume} />
          </BlurFade>
        </div>
      </main>
    </>
  )
}
