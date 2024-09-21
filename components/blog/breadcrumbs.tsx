import { ChevronDownIcon, SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import getAllBlogFrontmatter from "@/lib/content";

export async function BlogBreadcrumbs({ page }: { page: string }) {
  const posts = await getAllBlogFrontmatter();

  return (
    <Breadcrumb className="text-sm font-medium text-gray-400 lg:text-base">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <span className="scale-75 -ml-1">
                <ChevronDownIcon />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {posts.map((post) => (
                <BreadcrumbLink href={`/blog/${post.slug}`}>
                  <DropdownMenuItem key={post.slug}>
                    {post.title}
                  </DropdownMenuItem>
                </BreadcrumbLink>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
