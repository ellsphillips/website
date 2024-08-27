import Hero from "@/components/hero";
import { siteMetadata } from "@/lib/data";
import BlurFadeText from "@/components/animation/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

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
            text={siteMetadata.title}
          />
        </h1>
        <div className="max-w-lg">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 12}
            className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl lg:text-xl"
            yOffset={8}
            text={siteMetadata.description}
          />
        </div>
      </Hero>

      <main className="mx-auto max-w-7xl w-full py-12 h-screen">
        Hello, world!
      </main>
    </>
  );
}
