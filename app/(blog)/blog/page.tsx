import Link from "next/link";
import { blog } from "@/app/source";
import Header from "@/components/blog/header";
import Nav from "@/components/nav";

export default function BlogIndex() {
  const month = getMonths();

  return (
    <>
      <Header
        title="Blog"
        description="Tutorials and insights for developers"
      />

      <div className="sticky w-full top-0 self-center z-[999]">
        <Nav className="px-6 max-w-5xl" />
      </div>

      <main className="mx-auto mb-32 mt-16 flex w-full max-w-5xl flex-col gap-4 px-4 md:px-6">
        {month.map((m) => (
          <MonthGroup key={m.month + m.year} month={m} />
        ))}
      </main>
    </>
  );
}

function MonthGroup({ month }: { month: Month }) {
  const date = new Date(month.year, month.month, 1);
  return (
    <div className="space-y-4 mb-8">
      <h2 className="text-sm text-primary/60 mb-4 uppercase">
        {date.toLocaleString("default", { month: "long" })} {month.year}
      </h2>
      {month.pages.map((page) => (
        <Link
          href={page.url}
          key={page.url}
          className="group block transition-colors rounded-md"
        >
          <span className="flex gap-2 items-center w-fit">
            <h2 className="text-xl font-bold text-pretty group-hover:text-sky-400 transition-colors">
              {page.data.title}
            </h2>
            <svg
              viewBox="0 0 24 24"
              className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-300 ease-in-out"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              />
              <polyline
                points="12 5 19 12 12 19"
                className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              />
            </svg>
          </span>
          <p className="text-muted-foreground text-pretty">
            {page.data.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

type Month = {
  month: number;
  year: number;
  pages: ReturnType<typeof blog.getPages>;
};

function getMonths(): Month[] {
  const pages = blog.getPages().filter((page) => page.data.draft !== true);

  const months: ReturnType<typeof getMonths> = [];

  pages.forEach((page) => {
    const date = page.data.date;
    const month = date.getMonth();
    const year = date.getFullYear();

    const existingMonth = months.find(
      (m) => m.month === month && m.year === year
    );
    if (existingMonth) {
      existingMonth.pages.push(page);
    } else {
      months.push({
        month,
        year,
        pages: [page],
      });
    }
  });

  // Sort months
  months.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });

  // Sort pages in each month
  months.forEach((month) => {
    month.pages.sort((a, b) => {
      return b.data.date.getTime() - a.data.date.getTime();
    });
  });

  return months;
}
