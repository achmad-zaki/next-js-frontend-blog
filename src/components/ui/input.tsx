'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

function Input({ className, type, iconPosition = 'left', icon, ...props }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";
  const hasIcon = !!icon;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      {hasIcon && iconPosition === "left" && (
        <span className="absolute left-3 text-muted-foreground pointer-events-none">
          {icon}
        </span>
      )}

      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 border bg-transparent px-3 py-5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          hasIcon && iconPosition === "left" && "pl-10",
          (hasIcon && iconPosition === "right") || isPassword ? "pr-10" : ""
        )}
        {...props}
      />

      {/* Password Toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute cursor-pointer right-3 text-muted-foreground hover:text-foreground transition"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}

      {/* Right Icon (if not password field) */}
      {!isPassword && hasIcon && iconPosition === "right" && (
        <span className="absolute right-3 text-muted-foreground pointer-events-none">
          {icon}
        </span>
      )}
    </div>
  );
}

export { Input }
