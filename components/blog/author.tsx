import DATA from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Author = () => {
  return (
    <div className="flex gap-6">
      <Avatar>
        <AvatarImage src="/author.jpeg" />
        <AvatarFallback>EP</AvatarFallback>
      </Avatar>
      <div className="text-sm leading-4">
        <p className="font-medium text-gray-100">{DATA.site.title}</p>
        <div className="mt-0">
          <Link
            href="https://www.linkedin.com/in/elliott-phillips"
            className="font-medium text-sky-500"
          >
            @elliott-phillips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
