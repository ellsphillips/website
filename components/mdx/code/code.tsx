import {
  AnnotationHandler,
  HighlightedCode,
  Inline,
  Pre,
  RawCode,
  highlight,
} from "codehike/code";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/mdx/code/copy-button";
import { fold } from "../annotations/fold";
import { link } from "../annotations/link";
import { lineNumbers } from "../annotations/line-numbers";
import { CodeIcon } from "../annotations/icons";
import { collapse } from "../annotations/collapse";
import { callout } from "../annotations/callout";
import { mark } from "../annotations/mark";
import { pill } from "../annotations/pill";
import { ruler } from "../annotations/ruler";
import { wordWrap } from "../annotations/word-wrap";
import { tokenTransitions } from "../annotations/token-transitions";
import { focus } from "../annotations/focus";
import { diff } from "../annotations/diff";
import { tooltip } from "../annotations/tooltip";
import { hover } from "../annotations/hover";
import { THEME } from "@/lib/constants";

const styleCodeTitle = (path: string) => {
  if (!path.includes("/")) {
    return <span className="text-editor-tab-active-foreground">{path}</span>;
  }

  const renderPathPart = (part: string, isFirst: boolean, index: number) => (
    <span
      key={index}
      className={
        isFirst ? "text-muted-foreground" : "text-editor-tab-active-foreground"
      }
    >
      {part}
    </span>
  );

  const joinWithSeparator = (elements: JSX.Element[]) =>
    elements.reduce((prev, curr) => (
      <>
        {prev}
        <span className="text-muted-foreground -mx-2">/</span>
        {curr}
      </>
    ));

  const parts = path.split("/");
  const styledParts = parts.map((part, i) => renderPathPart(part, i === 0, i));
  return joinWithSeparator(styledParts);
};

export async function InlineCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, THEME.dark);
  return (
    <Inline
      code={highlighted}
      style={highlighted.style}
      className="selection:bg-editor-selectionBackground"
    />
  );
}

export async function Code({
  codeblock,
  ...rest
}: {
  codeblock: RawCode;
  className?: string;
  style?: React.CSSProperties;
  extraHandlers?: AnnotationHandler[];
}) {
  const { flags } = extractFlags(codeblock);
  const highlighted = await highlight(codeblock, THEME.dark, {
    annotationPrefix: flags.includes("p") ? "!!" : undefined,
  });
  return (
    <div className="relative">
      <CopyButton
        text={highlighted.code}
        className="absolute right-3 my-0 top-2 z-[999]"
      />
      <HighCode highlighted={highlighted} {...rest} />
    </div>
  );
}

export function HighCode({
  highlighted,
  className,
  style,
  extraHandlers = [],
}: {
  highlighted: HighlightedCode;
  className?: string;
  style?: React.CSSProperties;
  extraHandlers?: AnnotationHandler[];
}) {
  const { title, flags } = extractFlags(highlighted);
  const h = { ...highlighted, meta: title };

  const handlers = [
    ...extraHandlers,
    mark,
    tooltip,
    pill,
    fold,
    link,
    focus,
    ruler,
    flags.includes("a") && tokenTransitions,
    flags.includes("n") && lineNumbers,
    diff,
    ...collapse,
    flags.includes("w") && wordWrap,
    callout,
    hover,
  ].filter(Boolean) as AnnotationHandler[];

  const pre = (
    <Pre
      code={h}
      className={cn(
        // remove space around code
        "!my-0 py-2 !px-0",
        // given styles
        "rounded-none group flex-1 selection:bg-editor-selection-background bg-editor-background"
      )}
      handlers={handlers}
    />
  );

  if (title) {
    return (
      <div
        className={cn(
          "border border-editor-border rounded overflow-x-auto my-2",
          className
        )}
        style={
          {
            borderColor: "var(--editor-border)",
            ...style,
          } as any
        }
      >
        <div
          className="px-3 py-2 border-b !border-editor-border bg-editor-header-background text-sm text-editor-tab-active-foreground flex"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="text-tab-active text-sm flex items-center gap-3">
            <CodeIcon title={title} />
            {styleCodeTitle(title)}
          </div>
          {flags.includes("c") && (
            <CopyButton text={h.code} className="ml-auto" />
          )}
        </div>
        {pre}
      </div>
    );
  } else {
    return (
      <div
        className={cn(
          "border border-editor-border rounded overflow-hidden my-2 relative",
          className
        )}
        style={
          {
            borderColor: "var(--editor-border)",
            ...style,
          } as any
        }
      >
        {flags.includes("c") && (
          <CopyButton text={h.code} className="absolute right-4 my-0 top-2" />
        )}
        {pre}
      </div>
    );
  }
}

export function extractFlags(codeblock: RawCode) {
  const flags =
    codeblock.meta.split(" ").filter((flag) => flag.startsWith("-"))[0] ?? "";
  const title =
    codeblock.meta === flags
      ? ""
      : codeblock.meta.replace(" " + flags, "").trim();
  return { title, flags: flags.slice(1).split("") };
}
