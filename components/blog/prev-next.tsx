import Link from "next/link";
import { blog } from "@/app/source";
import LinkArrow from "../LinkArrow";

const PreviousNext = ({ slug }: { slug: string }) => {
  const pages = blog.getPages();
  const pagesByDate = pages.sort((a, b) => {
    return a.data.date.getTime() - b.data.date.getTime();
  });
  const index = pagesByDate.findIndex((page) => page.slugs[0] === slug);
  const [prev, next] = [pagesByDate[index - 1], pagesByDate[index + 1]];

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-8 -mx-2">
      <div className="group flex flex-col gap-1">
        {prev && (
          <>
            <Link
              href={prev.slugs[0]}
              className="flex items-center justify-start gap-1 text-sm"
            >
              <LinkArrow direction="left" />
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                Previous
              </span>
            </Link>
            <span className="ml-2 text-muted-foreground group-hover:text-white transition-colors">
              {prev.data.title}
            </span>
          </>
        )}
      </div>
      <div className="group flex flex-col gap-1">
        {next && (
          <>
            <Link
              href={next.slugs[0]}
              className="flex items-center justify-end gap-1 text-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                Next
              </span>
              <LinkArrow direction="right" />
            </Link>
            <span className="mr-2 text-muted-foreground group-hover:text-white transition-colors">
              {next.data.title}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviousNext;
