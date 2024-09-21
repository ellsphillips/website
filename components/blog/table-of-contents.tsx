"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Heading {
  depth: number;
  value: string;
}

const padHeading = (depth: number) => {
  switch (depth) {
    case 2:
      return "ml-0";
    case 3:
      return "ml-4";
    case 4:
      return "ml-8";
    default:
      return "";
  }
};

const TableOfContents = ({
  headings,
}: {
  headings: { depth: number; value: string }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block sticky top-20 w-64 shrink-0 pt-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
        Contents
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {headings.map((heading) => (
          <Link
            key={heading.value}
            className={cn(
              "font-medium transition text-gray-500 hover:text-white -mt-2.5 text-sm",
              padHeading(heading.depth)
            )}
            href={`
              #${heading.value
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-")
                .replace(/-+/g, "-")}
            `}
          >
            {heading.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
