import type { MDXComponents } from "mdx/types";
import { Code, InlineCode } from "@/components/mdx/code/code";
import { CodeWithTabs } from "@/components/mdx/code/tabs";
import { HoverContainer, Link } from "@/components/mdx/code/mentions";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Code,
    InlineCode,
    CodeWithTabs,
    HoverContainer,
    a: Link,
  };
}
