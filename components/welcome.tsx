import Image from "next/image";

const Welcome = () => {
  return (
    <section id="about" className="grid gap-6 grid-cols-8 w-full">
      <Image
        src="/headshot.webp"
        alt="Picture of the author"
        width={500}
        height={500}
        className="hidden rounded col-span-2 md:block"
      />
      <div className="col-span-10 md:col-start-3 space-y-4 text-slate-300 text-[13pt] font-medium">
        <p>
          Hey, I'm Elliott. I wear three hats: designer, data scientist, and
          software engineer.
        </p>
        <p>
          I've led numerous engineering teams across the public and banking
          sectors to develop innovative data-driven products and deliver
          customer value.
        </p>
        <p>
          I'm currently at Lloyds Banking Group building and maintaining a suite
          of applications to generate insights for clients across the UK.
        </p>
        <p>
          Before Lloyds, I was Principal Engineer for the Spatial Data Unit at
          the Department for Levelling Up, where I led cross-functional teams to
          develop our Government-wide spatial data infrastructure platforms.
        </p>
        <p>
          Before DLUHC, I worked at the Office for National Statistics, leading
          a team to develop business and geospatial classification machine
          learning models to map and visualise Mastercard's business account
          userbase.
        </p>
        <p>
          I am passionate about leveraging technology to solve complex problems
          and drive meaningful change.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
