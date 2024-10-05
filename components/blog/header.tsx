import Author from "@/components/blog/author"
import Image from "next/image"
import { BlogBreadcrumbs } from "@/components/blog/breadcrumbs"
import DateTime from "@/components/blog/date-time"

interface HeaderProps extends React.ComponentProps<"div"> {
  title: string
  description: string
  date?: Date
}

const Header = ({
  title,
  description,
  date,
  children,
  ...rest
}: HeaderProps) => {
  return (
    <div
      className="relative -mt-20 overflow-hidden pb-10 pt-20 shadow-md shadow-gray-950/[.15] border-b-2 border-sky-200"
      {...rest}
    >
      <div className="absolute flex justify-center overflow-hidden -z-10 h-full w-auto inset-y-0 scale-150 top-1/3">
        <Image
          alt="Glow background"
          priority
          fetchPriority="high"
          width="2560"
          height="1440"
          decoding="async"
          data-nimg="1"
          className="animate-fade-in delay-200"
          style={{ color: "transparent" }}
          src="/images/glow-desktop.webp"
        />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 py-2 pt-16 md:px-6 lg:pb-5 lg:pt-16 space-y-6">
        <BlogBreadcrumbs page={title} />
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-100 lg:text-[40px] lg:font-bold lg:leading-[44px]">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-300 lg:text-lg lg:mt-4 py-2 max-w-2xl">
          {description}
        </p>
        {date && <DateTime value={date} />}
        <Author />
      </div>
    </div>
  )
}

export default Header
