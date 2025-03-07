
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  as?: React.ElementType;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading = false, children, as, to, ...props }, ref) => {
    const Component = as || "button";
    const baseStyles = cn(
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground shadow hover:brightness-110": variant === "default",
        "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground": variant === "outline",
        "hover:bg-secondary hover:text-secondary-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
        "px-4 py-2 text-sm": size === "default",
        "px-3 py-1.5 text-xs rounded-md": size === "sm",
        "px-6 py-3 text-base": size === "lg",
        "h-9 w-9 p-0": size === "icon",
      },
      className
    );

    // If component is Link, pass the 'to' prop
    if (as === Link && to) {
      return (
        <Link to={to} className={baseStyles} {...props as any}>
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          )}
          <span className={isLoading ? "invisible" : ""}>{children}</span>
        </Link>
      );
    }

    return (
      <Component
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        <span className={isLoading ? "invisible" : ""}>{children}</span>
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
