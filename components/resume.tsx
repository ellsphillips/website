import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const ResumeEntry = (item: { title: string; date: string; logo?: string }) => {
  return (
    <div className="flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group w-full mr-4">
      {item.logo && (
        <Avatar className="rounded-none">
          <AvatarImage asChild src={item.logo}>
            <Image src={item.logo} alt="logo" width={12} height={12} />
          </AvatarImage>
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      )}
      <strong className="line-clamp-2 font-medium">{item.title}</strong>
      <span className="hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      <span className="flex-none font-mono text-quaternary inline-block text-center text-sm text-gray-500">
        {item.date}
      </span>
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
    <div className="grid items-start place-content-center grid-cols-1 gap-6 md:grid-cols-12">
      <h4
        className={`col-span-2 pt-8 text-lg font-bold text-black dark:text-slate-400 font-mono ${
          items[0].description ? "md:pt-[1rem]" : "md:pt-0"
        } md:text-right md:text-base md:text-opacity-40`}
      >
        {section}
      </h4>

      <Accordion
        type="multiple"
        className="col-span-10 md:col-start-3 space-y-2"
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
                <p className="text-gray-1000 dark:text-gray-100">
                  {item.description}
                </p>
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
