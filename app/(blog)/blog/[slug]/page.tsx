import { blog } from "@/app/source";
import { notFound } from "next/navigation";
import Header from "@/components/blog/header";
import Nav from "@/components/nav";
import TableOfContents from "@/components/blog/table-of-contents";
import PreviousNext from "@/components/blog/prev-next";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = blog.getPage([params.slug]);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <>
      <Header
        title={page.data.title}
        description={page.data.description!}
        date={page.data.date}
      />
      <div className="w-full sticky top-0 self-center z-[999]">
        <Nav className="max-w-5xl" />
      </div>
      <main className="flex gap-8 mx-auto max-w-5xl w-full px-4 md:px-6 scroll-smooth">
        <article className="dark:prose-invert prose lg:prose-lg !w-full">
          <MDX />
        </article>
        <aside className="ml-auto hidden w-full max-w-64 md:block shrink-0">
          <nav className="sticky top-20">
            <TableOfContents headings={page.data.exports.toc} />
            <PreviousNext slug={params.slug} />
          </nav>
        </aside>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
