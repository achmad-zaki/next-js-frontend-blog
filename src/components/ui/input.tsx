import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

function Input({ className, type, iconPosition = 'left', icon, ...props }: InputProps) {

  const hasIcon = !!icon;

  return (
    <div
      className={cn(
        "relative flex items-center",
        className
      )}
    >
      {hasIcon && iconPosition === "left" && (
        <span className="absolute left-3 text-muted-foreground pointer-events-none">
          {icon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 border bg-transparent px-3 py-5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          hasIcon && iconPosition === "left" && "pl-10",
          hasIcon && iconPosition === "right" && "pr-10"
        )}
        {...props}
      />
      {hasIcon && iconPosition === "right" && (
        <span className="absolute right-3 text-muted-foreground pointer-events-none">
          {icon}
        </span>
      )}
    </div>
  );

}

export { Input }
