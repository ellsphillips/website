import { cn } from "@/lib/utils"
import { format, parseISO } from "date-fns"

type Props = {
  value: Date
  title?: string
  className?: string
}

const DateTime = ({ title, value, className }: Props) => (
  <time
    title={title}
    className={cn(
      "font-mono text-sm text-muted-foreground font-semibold",
      className,
    )}
    dateTime={value.toISOString()}
  >
    {format(value, "yyyy-MM-dd")}
  </time>
)

export default DateTime
