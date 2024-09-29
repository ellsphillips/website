import getAllBlogFrontmatter from "@/lib/content";
import Link from "next/link";

import Header from "@/components/blog/header";

export default async function Projects() {
  const projects = await getAllBlogFrontmatter();

  return (
    <>
      <Header
        title="Blog"
        description="Tutorials and insights for developers"
      />

      <main className="mx-auto mb-32 mt-16 flex w-full max-w-5xl flex-col gap-14 px-4 md:px-6">
        {projects.map((project) => {
          return (
            <div key={project.title} className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Link
                  className="flex gap-2 items-center w-fit text-xl font-bold text-gray-100 hover:underline group"
                  href={`/blog/${project.slug}`}
                >
                  {project.title}
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
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
                </Link>
                <span className="flex-none md:ml-auto self-start md:self-center font-mono text-quaternary inline-block text-sm text-muted-foreground">
                  {project.date}
                </span>
              </div>
              <span className="text-muted-foreground">
                {project.description}
              </span>
            </div>
          );
        })}
      </main>
    </>
  );
}
