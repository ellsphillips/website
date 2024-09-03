import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import BlurFade from "./animation/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";

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
    <ResumeAccordion entry={entry}>
      <Markdown
        className="prose dark:prose-dark text-base text-muted-foreground"
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
    <ResumeAccordion entry={entry}>
      <div className="space-y-4">
        <div className="flex flex-col justify-between">
          <Markdown
            className="prose dark:prose-dark text-base text-muted-foreground"
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
        <div className="flex items-center justify-end w-full">
          {entry.url && (
            <Button
              key={`social-${entry.url}`}
              variant="outline"
              className="bg-slate-900/50 p-2 hover:bg-slate-700/50"
            >
              <Link href={entry.url}>Read more -&gt;</Link>
            </Button>
          )}
        </div>
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
        <span className="flex-none md:ml-auto self-start md:self-center font-mono text-quaternary inline-block text-sm text-gray-500">
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
      <h4
        className={`col-span-2 text-lg font-bold text-black dark:text-slate-400 font-mono ${
          items[0].description ? "md:pt-4" : "md:pt-0"
        } md:text-right md:text-base md:text-opacity-40`}
      >
        {section}
      </h4>

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
