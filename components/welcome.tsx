import Image from "next/image"

const Welcome = () => {
  return (
    <section id="about" className="grid gap-6 grid-cols-8 w-full">
      <Image
        src="/headshot.webp"
        alt="Picture of the author"
        width={500}
        height={500}
        className="hidden rounded col-span-2 md:block"
        blurDataURL="/headshot.webp"
        placeholder="blur"
      />
      <div className="col-span-10 md:col-start-3 space-y-4 text-slate-300 text-[13pt] font-medium">
        <p>
          Hey, I&apos;m Elliott. I wear 3 hats: designer, data scientist, and
          software engineer.
        </p>
        <p>
          I&apos;ve led numerous engineering teams across the public and banking
          sectors to develop innovative data-driven products, deliver customer
          value, and drive meaningful change.
        </p>
        <p>
          I&apos;m currently at Lloyds Banking Group building and maintaining a
          suite of applications to generate insights for clients across the UK.
        </p>
        <p>
          Before Lloyds, I was Engineering Lead for the Spatial Data Unit at the
          Department for Levelling Up, developing our Government-wide spatial
          data infrastructure platforms and data products.
        </p>
        <p>
          Before DLUHC, I worked at the Office for National Statistics, leading
          a team to develop business and geospatial classification machine
          learning models to map and visualise Mastercard&apos;s business
          account userbase.
        </p>
      </div>
    </section>
  )
}

export default Welcome
