import getAllBlogFrontmatter from "@/lib/content";
import Link from "next/link";

export default async function Projects() {
  const projects = await getAllBlogFrontmatter();

  return (
    <div className="mx-auto max-w-7xl w-full px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-12">Blog</h1>

      <main>
        <ul>
          {projects.map(({ title, slug }) => {
            return (
              <li>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
