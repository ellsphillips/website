"use server"

import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import type { Frontmatter } from "@/lib/types"

export default async function getAllBlogFrontmatter() {
  const filenames: string[] = await fs.readdir(
    path.join(process.cwd(), "content"),
  )

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "content", filename),
        "utf-8",
      )
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      })
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      }
    }),
  )

  return posts
}
