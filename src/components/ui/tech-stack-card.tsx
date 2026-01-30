import type React from "react";
import type { InfoData } from "@/lib/data-loaders/info";
import { cn } from "@/lib/utils";
import { Icon } from "../icon";

type TechStack = InfoData["tech_stack"][string];

interface TechStackCardProps extends React.ComponentPropsWithoutRef<"div"> {
  category: string;
  items: TechStack;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  category,
  items,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between gap-4 rounded-xl border bg-fd-card p-4",
        className
      )}
      {...props}
    >
      <h3 className="font-bold">{category}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((tech) => (
          <Icon key={tech.icon} name={tech.icon} size={20} />
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
