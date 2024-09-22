import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import BlurFade from "./animation/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import Link from "next/link";

const ReadMoreLink = ({ href }: { href: string }) => (
  <Link
    href={href}
    className="group flex justify-end content-end items-center gap-1 pl-2.5 pr-0 transition-all hover:pr-2 py-1 rounded font-bold bg-inherit border text-current hover:text-primary hover:dark:text-white border-zinc-300 dark:border-slate-700 hover:bg-slate-200 hover:dark:bg-slate-800 duration-300 ease-in-out"
  >
    Read more
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
);

type ResumeEntry = {
  title: string;
  date: string;
  description?: string;
  logo?: string;
  url?: string;
  thumbnail?: string;
};

const ResumeAccordion = ({
  entry,
  children,
}: {
  entry: ResumeEntry;
  children: React.ReactNode;
}) => (
  <AccordionItem key={entry.title} value={entry.title}>
    <AccordionTrigger className="hover:no-underline">
      <ResumeEntry title={entry.title} date={entry.date} logo={entry.logo} />
    </AccordionTrigger>
    <AccordionContent>{children}</AccordionContent>
  </AccordionItem>
);

const SECTION_FACTORIES: Record<
  string,
  (entry: ResumeEntry) => React.ReactNode
> = {
  work: (entry: ResumeEntry) => (
    <ResumeAccordion key={entry.title} entry={entry}>
      <Markdown
        className="max-w-full prose dark:prose-dark text-base text-muted-foreground"
        remarkPlugins={[remarkGfm]}
      >
        {entry.description}
      </Markdown>
    </ResumeAccordion>
  ),
  qualifications: (entry: ResumeEntry) => (
    <ResumeEntry key={entry.title} title={entry.title} date={entry.date} />
  ),
  projects: (entry: ResumeEntry) => (
    <ResumeAccordion key={entry.title} entry={entry}>
      <div className="space-y-4">
        <div className="flex flex-col justify-between">
          <Markdown
            className="max-w-full prose dark:prose-dark text-base text-muted-foreground"
            remarkPlugins={[remarkGfm]}
          >
            {entry.description}
          </Markdown>
        </div>
        {entry.thumbnail && (
          <Image
            src={entry.thumbnail}
            alt={entry.title}
            width={1920}
            height={1080}
            className="rounded aspect-video w-full"
          />
        )}
        {entry.url && (
          <div className="flex items-center justify-end w-full">
            <ReadMoreLink href={entry.url} />
          </div>
        )}
      </div>
    </ResumeAccordion>
  ),
};

const ResumeEntry = (item: { title: string; date: string; logo?: string }) => {
  return (
    <div className="flex gap-4 group w-full mr-4">
      {item.logo && (
        <Avatar className="rounded-[2px] size-6">
          <AvatarImage asChild src={item.logo}>
            <Image src={item.logo} alt="logo" width={12} height={12} />
          </AvatarImage>
          <AvatarFallback>{item.title[0]}</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col md:flex-row md:items-center w-full md:gap-4">
        <strong className="line-clamp-2 font-medium text-left">
          {item.title}
        </strong>
        <span className="hidden md:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
        <span className="flex-none md:ml-auto self-start md:self-center font-mono text-quaternary inline-block text-sm text-muted-foreground">
          {item.date}
        </span>
      </div>
    </div>
  );
};

export const ResumeSection = ({
  section,
  items,
}: {
  section: string;
  items: {
    title: string;
    date: string;
    logo?: string;
    description?: string;
  }[];
}) => {
  return (
    <div className="grid items-start place-content-center grid-cols-1 gap-6 md:grid-cols-8">
      <h2
        className={`col-span-2 text-lg font-bold text-black dark:text-slate-400 font-mono ${
          items[0].description ? "md:pt-4" : "md:pt-0"
        } md:text-right md:text-base md:text-opacity-40`}
      >
        {section}
      </h2>

      <Accordion
        type="multiple"
        className="col-span-10 md:col-start-3 space-y-4"
      >
        {items.map((item) => {
          const factory = SECTION_FACTORIES[section];
          return factory ? factory(item) : null;
        })}
      </Accordion>
    </div>
  );
};

export const Resume = ({ data }: { data: Record<string, ResumeEntry[]> }) => {
  return (
    <section id="resume" className="space-y-8">
      {Object.entries(data).map(([section, items], i) => (
        <BlurFade key={section} delay={BLUR_FADE_DELAY * (8 + i * 2)}>
          <ResumeSection section={section} items={items} />
        </BlurFade>
      ))}
    </section>
  );
};
