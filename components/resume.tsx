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

const ResumeEntry = (item: { title: string; date: string; logo?: string }) => {
  return (
    <div className="flex gap-4 group w-full mr-4">
      {item.logo && (
        <Avatar className="rounded-[2px]">
          <AvatarImage asChild src={item.logo}>
            <Image src={item.logo} alt="logo" width={12} height={12} />
          </AvatarImage>
          <AvatarFallback>N</AvatarFallback>
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

const ResumeSection = ({
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
        className={`col-span-2 pt-8 text-lg font-bold text-black dark:text-slate-400 font-mono ${
          items[0].description ? "md:pt-[1rem]" : "md:pt-0"
        } md:text-right md:text-base md:text-opacity-40`}
      >
        {section}
      </h4>

      <Accordion
        type="multiple"
        className="col-span-10 md:col-start-3 space-y-4"
      >
        {items.map((item, i) =>
          item.logo && item.description ? (
            <AccordionItem key={i} value={i.toString()}>
              <AccordionTrigger className="hover:no-underline">
                <ResumeEntry
                  title={item.title}
                  date={item.date}
                  logo={item.logo}
                />
              </AccordionTrigger>
              <AccordionContent>
                <Markdown remarkPlugins={[remarkGfm]}>
                  {item.description}
                </Markdown>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <ResumeEntry key={i} title={item.title} date={item.date} />
          )
        )}
      </Accordion>
    </div>
  );
};

export default ResumeSection;
