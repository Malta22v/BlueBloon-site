import { cn } from "../lib/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={cn(
        "transition-all px-6 py-3 rounded-full font-semibold shadow-md",
        "hover:scale-105 focus:outline-none",
        className
      )}
    />
  );
}
