import { cn } from "@/lib/utils";

interface LinkArrowProps {
  direction?: "left" | "right";
}

const LinkArrow: React.FC<LinkArrowProps> = ({ direction = "right" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn(
        "size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-all duration-300 ease-in-out",
        direction === "left"
          ? "-scale-x-100 group-hover:rotate-45 group-hover:translate-x-1"
          : "group-hover:-rotate-45 group-hover:-translate-x-1"
      )}
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
  );
};

export default LinkArrow;
