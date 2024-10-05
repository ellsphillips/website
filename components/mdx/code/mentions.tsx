import React from "react";
import CodeMentionHoverLink from "@/components/mdx/code/mentions-hover-link";

export function HoverContainer(props: { children: React.ReactNode }) {
  return <div className="hover-container">{props.children}</div>;
}

export function Link(props: { href?: string; children?: React.ReactNode }) {
  if (props.href?.startsWith("hover:")) {
    const hover = props.href.slice("hover:".length);
    return (
      <CodeMentionHoverLink data-hover={hover}>
        {props.children}
      </CodeMentionHoverLink>
    );
  } else {
    return <a {...props} />;
  }
}
