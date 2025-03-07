
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
  iconClassName = "",
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px]",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",
          iconClassName
        )}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
