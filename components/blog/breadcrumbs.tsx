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
import { Separator } from "@/components/ui/separator";
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
          <SlashIcon className="text-white/35 scale-x-50" strokeWidth={3} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <BreadcrumbLink href="/blog" className="-mr-1">
              Blog
            </BreadcrumbLink>
            <DropdownMenuTrigger className="flex items-center justify-center hover:text-white">
              <span className="grid place-content-center scale-75">
                <ChevronDownIcon />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="space-y-1 bg-slate-950"
            >
              <BreadcrumbLink href={"/blog"}>
                <DropdownMenuItem>&lt;- All blogs</DropdownMenuItem>
              </BreadcrumbLink>

              <Separator />

              {posts.map((post) => (
                <BreadcrumbLink href={`/blog/${post.slug}`} key={post.slug}>
                  <DropdownMenuItem key={post.slug}>
                    {post.title}
                  </DropdownMenuItem>
                </BreadcrumbLink>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon className="text-white/35 scale-x-50" strokeWidth={3} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
