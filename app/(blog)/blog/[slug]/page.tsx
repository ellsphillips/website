import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import components from "@/components/blog";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import TableOfContents, {
  type Heading,
} from "@/components/blog/table-of-contents";
import Header from "@/components/blog/header";
import Nav from "@/components/nav";
import { Frontmatter } from "@/lib/types";

async function getHeadings(content: string): Promise<Heading[]> {
  const headings: Heading[] = [];
  await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkFrontmatter, ["yaml", "toml"])
    .use(remarkStringify)
    .use(() => (tree: any) => {
      const firstHeadingIndex = tree.children.findIndex(
        (node: any) => node.type === "heading"
      );

      if (firstHeadingIndex !== -1) {
        (tree.children as any[])
          .slice(firstHeadingIndex)
          .forEach((node: any) => {
            if (node.type === "heading") {
              headings.push({
                depth: node.depth,
                value: node.children.map((child: any) => child.value).join(""),
              });
            }
          });
      } else {
        console.warn("No heading found in the MDX content.");
      }
    })
    .process(content);
  return headings;
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await fs.readFile(
    path.join(process.cwd(), "content", `${params.slug}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: { ...components },
  });

  const headings = await getHeadings(content);

  return (
    <>
      <Header
        title={data.frontmatter.title}
        description={data.frontmatter.description}
      />
      <div className="sticky top-0 self-center z-[999]">
        <Nav className="px-6 max-w-5xl" />
      </div>
      <main className="flex gap-8 mx-auto max-w-5xl w-full px-6">
        <article className="dark:prose-invert prose lg:prose-lg">
          {data.content}
        </article>
        <aside className="ml-auto hidden w-full max-w-[260px] lg:block">
          <nav className="sticky top-20">
            <TableOfContents headings={headings} />
          </nav>
        </aside>
      </main>
    </>
  );
}
